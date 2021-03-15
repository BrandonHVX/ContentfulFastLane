import { graphql } from "gatsby";
import get from "lodash/get";
import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import JobForm from "../components/JobForm";
import JobHeader from "../components/JobHeader";
import Breadcrumb from "../components/Breadcrumb";

import Services from "../components/Services";
import Process from "../components/Process";
import Cta from "../components/Cta";
import Contact from "../components/Contact";
import Job from "../components/Job";
import Whychooseus from "../components/Whychooseus";
import Counter from "../components/Counter";
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
        <Breadcrumb breadcrumb={{ pagename: "About Us" }} />
        <JobForm />

        <Footer />
      </Layout>
    );
  }
}

export default RootIndex;
