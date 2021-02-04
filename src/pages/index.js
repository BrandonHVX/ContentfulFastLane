import { graphql } from "gatsby";
import get from "lodash/get";
import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import About from "../components/About";
import Services from "../components/Services";
import Cta from "../components/Cta";
import Contact from "../components/Contact";
import Whychooseus from "../components/Whychooseus";

import Footer from "../components/Footertwo";
// import Team from "../components/Team";
// import Skills from "../components/Skills";
// import Portfolio from "../components/Portfolio";
// import Testimonials from "../components/Testimonials";
// import Blogpost from "../components/Blogpost";

class RootIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <MetaTags>
          <title>Fast Lane Transfer | Homepage</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Banner />
        {/* <Video /> */}
        <section className="about-section style-1 pt-120 pb-120">
          <About />
        </section>
        <Services />
        {/* <Cta /> */}
        <Whychooseus />
        <Contact />
        <Footer />
        {/* 
        <Team />
        <Skills />
        <Portfolio />
        <Testimonials /> */}
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
