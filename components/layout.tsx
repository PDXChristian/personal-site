import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import {Navbar} from './Navbar';
import React from 'react';

const name = 'Christian Wegman';
export const siteTitle = 'Christian Wegman';

const Layout = ({
  children,
  pageTitle,
}: {
  children: React.ReactNode
  pageTitle?: string
}): React.ReactElement => {
  const site = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
  return (
    <>
      <script src={site}></script>
      <Navbar pageTitle={pageTitle}/>
      <div className={styles.container}>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <meta
            name='description'
            content='Christian Wegman'
          />
          <meta name='og:title' content={siteTitle} />
        </Head>
        <header className={styles.header}>
          {pageTitle === '~'?
            <>
              <Image
                priority
                src='/images/profile2.jpg'
                className={utilStyles.borderCircle}
                height={216}
                width={216}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </> :
            pageTitle === 'Contact'?
              <>
                <Image
                  priority
                  src='/images/profile2.jpg'
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
                <h2 className={utilStyles.headingLg}>
                  Contact {name}
                </h2>
              </>:
              <h2 className={utilStyles.independentHeading}>
                {pageTitle}
              </h2>
          }
        </header>
        <main>{children}</main>
        {pageTitle === undefined || pageTitle === '404' &&
              <div className={styles.backToHome}>
                <Link href='/'>
                  <a>← Back to home</a>
                </Link>
              </div>
        }
      </div>
    </>
  );
};


export default Layout;
