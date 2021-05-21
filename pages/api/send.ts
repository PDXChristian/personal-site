import sgMail from '@sendgrid/mail';
import {NextApiRequest, NextApiResponse} from 'next';

export default async (
    req: NextApiRequest,
    res: NextApiResponse):
    Promise<void> => {
  sgMail.setApiKey(process.env.SENDGRID_API);

  const forwarded = req.headers['x-forwarded-for'];
  console.log(forwarded);

  const contents = req.body;

  const verifyBody = process.env.NODE_ENV === 'production' ?
      `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${contents.token}&remoteip=${forwarded}` :
      `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${contents.token}`;

  const verifyOptions = {
    method: 'POST',
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body: verifyBody,
  };

  const content = {
    to: process.env.TO_EMAIL_ADDRESS,
    from: process.env.FROM_EMAIL_ADDRESS,
    subject: contents.sbj,
    text: contents.msg,
    html: `<h1>${contents.name} Has Sent A Message</h1>
      <br />
      <p>${contents.msg}</p>`,
    mail_settings: {
      sandbox_mode: {
        enable: (process.env.NODE_ENV != 'production'),
      },
    },
  };

  try {
    const verify = await fetch('https://www.google.com/recaptcha/api/siteverify', verifyOptions);
    const verifyData = await verify.json();
    if (verifyData.score === 0.5) {
      await sgMail.send(content);
      res.status(200).send('Message sent successfully.');
    }
    else {
      res.status(503).send('message not sent.');
    }
  } catch (error) {
    console.log('ERROR', error.response.body);
    res.status(400).send('Message not sent.');
  }
};
