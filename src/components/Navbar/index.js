import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";
import styled from "styled-components";

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding: 6px;
  border-radius: 50%;
  transition: background 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.primary + "22"};
  }
`;

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "black",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <ThemeToggle onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FiSun /> : <FiMoon />}
          </ThemeToggle>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>
              About
            </MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(!isOpen)}>
              Skills
            </MobileLink>
            <MobileLink href="#experience" onClick={() => setIsOpen(!isOpen)}>
              Experience
            </MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(!isOpen)}>
              Projects
            </MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(!isOpen)}>
              Education
            </MobileLink>
            <MobileLink href="#contact" onClick={() => setIsOpen(!isOpen)}>
              Contact
            </MobileLink>
            <ThemeToggle onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <FiSun /> : <FiMoon />}
            </ThemeToggle>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
