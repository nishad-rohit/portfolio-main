import React from "react";
import {
  HeroContainer,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  SocialIcons,
  SocialIcon,
} from "./HeroStyle";
import HeroImg from "../../images/HeroImage.png";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <SocialIcons>
              <SocialIcon href={Bio.github} target="_blank" aria-label="GitHub">
                <FaGithub />
              </SocialIcon>
              <SocialIcon href={Bio.linkedin} target="_blank" aria-label="LinkedIn">
                <FaLinkedinIn />
              </SocialIcon>
              <SocialIcon href={Bio.insta} target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIcon>
            </SocialIcons>
            <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
