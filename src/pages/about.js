import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

import SEO from "../components/seo";

import BackgroundSection from "../globals/BackgroundSection";

import Info from '../components/Home/info';

const AboutPage = ({ data }) => (

    <Layout>

        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

        <BackgroundSection image={data.img.childImageSharp.fluid}
            title="About us"
            styleClass="about-background" />
        <Info />




    </Layout>
);

export const query = graphql`
         {
           img: file(relativePath: { eq: "terios08silverbrking.jpg" }) {
             childImageSharp {
               fluid {
                 ...GatsbyImageSharpFluid_tracedSVG
               }
             }
           }
         }
       `;

export default AboutPage;