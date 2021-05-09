import sgMail from "@sendgrid/mail"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	sgMail.setApiKey(process.env.SENDGRID_API)
	
	const contents = req.body

	const content = {
		to: process.env.TO_EMAIL_ADDRESS,
		from: process.env.FROM_EMAIL_ADDRESS,
		subject: contents.sbj,
		text: contents.msg,
		html: `<h1>${contents.name} Has Sent A Message</h1><br /><p>${contents.msg}</p>`,
		mail_settings: {
			sandbox_mode: {
				enable: (process.env.NODE_ENV != "production")
			}
		}
	}

	try {
		await sgMail.send(content)
		res.status(200).send("Message sent successfully.")
	} catch (error) {
		console.log("ERROR", error.response.body)
		res.status(400).send("Message not sent.")
	}
}

