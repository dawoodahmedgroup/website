import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Footer from "../components/sections/footer"
import Jobs from "../components/sections/jobs"

const AboutPage = () => (
  <Layout>
    <SEO title="Jobs" />
    <Navigation />
    <Jobs />
    <Footer />
  </Layout>
)

export default AboutPage
