import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Snackbar, Alert } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 1rem 80px;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 36px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  padding: 2rem 2.5rem;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  width: 100%;
  max-width: 600px;
  gap: 1rem;
  @media (max-width: 600px) {
    padding: 1.5rem 1.2rem;
  }
`;

const Input = styled.input`
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.text_secondary + "55"};
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
  outline: none;
  transition: border-color 0.2s ease;
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary + "33"};
  }
`;

const TextArea = styled.textarea`
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.text_secondary + "55"};
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
  outline: none;
  resize: none;
  transition: border-color 0.2s ease;
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary + "33"};
  }
`;

const Button = styled.button`
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  color: white;
  border: none;
  padding: 0.85rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.02);
    filter: brightness(1.1);
  }
`;

const Contact = () => {
  const formRef = useRef();
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { from_email, from_name, subject, message } = formRef.current;

    if (!from_email.value || !from_name.value || !subject.value || !message.value) {
      setSnackbar({ open: true, message: "Please fill in all fields.", severity: "error" });
      return;
    }

    emailjs
      .sendForm("service_bsvpsi8", "template_nv7k7mj", formRef.current, "371te-rhhiFWxlVHq")
      .then(
        () => {
          setSnackbar({ open: true, message: "Message sent successfully!", severity: "success" });
          formRef.current.reset();
        },
        () => setSnackbar({ open: true, message: "Failed to send message. Try again.", severity: "error" })
      );
  };

  return (
    <Container id="contact">
      <Title>Contact Me</Title>
      <Description>
        Have a project in mind or want to connect? Feel free to reach out — I'll get back to you soon!
      </Description>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="email" name="from_email" placeholder="Your Email" required />
        <Input type="text" name="from_name" placeholder="Your Name" required />
        <Input type="text" name="subject" placeholder="Subject" required />
        <TextArea name="message" rows="5" placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </Form>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
