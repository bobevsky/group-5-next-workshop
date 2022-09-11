import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import PageTitle from "../components/elements/PageTitle";
import Teachers, { TeacherInterface } from "../components/elements/Teachers";
import AboutPage from "../components/templates/AboutPage";

interface Props {
  about_page: {
    title: string;
    first_content_block: string;
    first_image: string;
    second_content_block: string;
    second_image: string;
    third_content_block: string;
  };
  teachers: TeacherInterface[];
}

const About: React.FC<Props> = ({ about_page, teachers }) => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title={about_page.title} content={about_page.first_content_block} />

      <AboutPage
        first_image={about_page.first_image}
        second_content_block={about_page.second_content_block}
        second_image={about_page.second_image}
        third_content_block={about_page.third_content_block}
      />

      <Teachers teachers={teachers} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const resAbout = await fetch("https://next-workshop-backend-01.herokuapp.com/about_page");
  const about_page = await resAbout.json();

  const resTeachers = await fetch("https://next-workshop-backend-01.herokuapp.com/teachers");
  const teachers = await resTeachers.json();

  return {
    props: {
      about_page,
      teachers,
    },
  };
};

export default About;