import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import Card from '../components/card';

const Projects = (): React.ReactElement => {
  return (
    <Layout pageTitle='Projects'>
      <Head>
        <title>Christian&apos;s Projects</title>
      </Head>

      <Card cardTitle="SnapSalary" cardDescription="SnapSalary is a project that keeps track of salaries in any field for any company. Written as a project for Portland State University's Full Stack course." imageURL="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" moreURL='https://github.com/SnapSalary'/>

      <Card cardTitle="WonderTix" cardDescription="WonderTix is a ticketing and CRM project sponsored by Portland Playhouse. This project was worked on as a part of the Portland State University Capstone project." imageURL='https://images.unsplash.com/photo-1538905386057-4a5a580c45a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' moreURL='https://github.com/WonderTix/WonderTix' />

      <Card cardTitle="Aoba Bot" cardDescription="Aoba bot is a personal bot for a Discord server. It can handle authenticating users, managing user permissions, administrative tasks, and playing music." imageURL='https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' moreURL='https://github.com/PDXChristian/aoba-bot' />

      <Card cardTitle="Personal Site" cardDescription="This website is my personal website. It is written with NextJS using TypeScript. I show off personal projects I have worked on, and also a small gallery of photos I have taken." imageURL='https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' moreURL='https://github.com/PDXChristian/personal-site' />
      
    </Layout>
  );
};

export default Projects;
