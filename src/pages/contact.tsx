import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import PageTitle from "../components/elements/PageTitle";
import ContactPage from "../components/templates/ContactPage";

interface Props {
  contact_page: {
    title: string;
    first_content_block: string;
    second_content_block: string;
    address: string;
    city: string;
    postal_code: string;
    phone: string;
  };
}

const Contact: React.FC<Props> = ({ contact_page }) => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title={contact_page.title} content={contact_page.first_content_block} />

      <ContactPage
        second_content_block={contact_page.second_content_block}
        address={contact_page.address}
        city={contact_page.city}
        postal_code={contact_page.postal_code}
        phone={contact_page.phone}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://next-workshop-backend-01.herokuapp.com/contact_page");
  const contact_page = await res.json();

  return {
    props: {
      contact_page,
    },
  };
};

export default Contact;
