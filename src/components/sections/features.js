import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>What We Do?</Subtitle>
      <SectionTitle>App development</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>iOS</FeatureTitle>
          <FeatureText>
            We'll develop your iOS App, all you have to do, is download the source code and publish it.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Android</FeatureTitle>
          <FeatureText>
            We'll make you your own android app, we'll build it with Flutter, and send the source code your way!
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Windows & macOS</FeatureTitle>
          <FeatureText>
            We can make a desktop app, for your idea. buisness. project.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Web apps</FeatureTitle>
          <FeatureText>
            We will develop your web apps, using the latest technology such as React.js, Gatsby.js And More!
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
