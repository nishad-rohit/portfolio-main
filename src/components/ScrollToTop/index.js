import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Button = styled.button`
  position: fixed;
  bottom: 36px;
  right: 36px;
  z-index: 999;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  color: #fff;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(133, 76, 230, 0.45);
  animation: ${fadeIn} 0.3s ease;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(133, 76, 230, 0.6);
  }
  @media (max-width: 640px) {
    bottom: 20px;
    right: 20px;
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top">
      <FaArrowUp />
    </Button>
  );
};

export default ScrollToTop;
