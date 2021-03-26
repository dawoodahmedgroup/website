import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Footer from "../components/sections/footer"
import About from "../components/sections/about"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Navigation />
    <About />
    <Footer />
  </Layout>
)

export default AboutPage
