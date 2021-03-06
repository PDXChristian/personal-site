import Layout from '../components/layout';
import React, {BaseSyntheticEvent, useRef} from 'react';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

const About = (): React.ReactElement => {
  const success = useRef(null);
  const failure = useRef(null);

  const handleSuccess = () => {
    failure.current.hidden = true;
    success.current.hidden = false;
  };

  const handleFailure = () => {
    success.current.hidden = true;
    failure.current.hidden = false;
  };

  const submitContact = async (event: BaseSyntheticEvent) => {
    event.preventDefault();
    grecaptcha.ready(async function() {
      grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {action: 'submit'}).then(async function(token) {
        const name = event.target.name.value;
        const email = event.target.email.value;
        const org = event.target.organization.value;
        const msg = event.target.message.value;
        const sbj = `New message from ${email} at ${org}`;

        const data = {
          name,
          msg,
          sbj,
          token,
        };

        /*const res = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const text = await res.text();
        console.log(text);

        if (text === 'Message sent successfully.') {
          event.target.name.value = '';
          event.target.email.value = '';
          event.target.organization.value = '';
          event.target.message.value = '';
          handleSuccess();
        } else {
          handleFailure();
        }*/
        handleFailure();
      });
    });
  };
  return (
    <Layout pageTitle='Contact'>
      <Head>
        <title>Contact Christian</title>
      </Head>
      <div className={utilStyles.contact}>
        <p className='text-red-300'>
          Email is currently unavailable. 
        </p>
        <p className='pt-2 m-2 mt-4 -mb-4'>
          For any questions or inquiries, please use the form{' '}
          and I will try to respond within 24 hours.
        </p>
        <form className='p-2 m-4' onSubmit={submitContact}>
          <div className='block'>
            <div hidden ref={success}>
              <p className='text-green-300 dark:text-dark-pallet-highlight'>
                Email sent successfully
              </p>
            </div>

            <div hidden ref={failure}>
              <p className='text-red-300'>
                Email failed to send. Please try again later.
              </p>
            </div>

            <input
              id='name'
              type='text'
              className={utilStyles.inputBoxes}
              autoComplete='name'
              placeholder='Full Name'
              required />

            <input
              id='email'
              type='text'
              className={utilStyles.inputBoxes}
              autoComplete='email'
              placeholder='Email Address'
              required />

            <input
              id='organization'
              type='text'
              className={utilStyles.inputBoxes}
              autoComplete='organization'
              placeholder='Organization'
              required />

            <br />

            <textarea
              id='message'
              className={utilStyles.messageBox}
              placeholder='Please enter your message...'
              required />

            <br />

            <button type='submit'>
              Submit
            </button>

          </div>
        </form>
      </div>
    </Layout>
  );
};

export default About;
