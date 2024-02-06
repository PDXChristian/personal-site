import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import React from 'react';

const Home = (): React.ReactElement =>{
  return (
    <Layout pageTitle='~'>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd}`}>
        <p className='pb-2'>
          Hello, my name is{' '}
          <b>Christian Wegman</b>.{' '}
          I&apos;m a software engineer from Portland, Oregon.
        </p>
        <p className='pt-2'>
          All of my future projects will be posted here{' '}
          and visible from the navigation bar.{' '}
          Some of my existing projects can be found on my Github page!
        </p>
      </section>
    </Layout>
  );
};

export default Home;
