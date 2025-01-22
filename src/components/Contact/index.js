import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Snackbar, Alert } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text_primary || "#333"};
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary || "#666"};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card || "#fff"};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  gap: 1rem;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.input_border || "#ccc"};
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.primary || "#6c63ff"};
    box-shadow: 0 0 5px ${({ theme }) => theme.primary || "#6c63ff"};
  }
`;

const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.input_border || "#ccc"};
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 1rem;
  outline: none;
  resize: none;
  &:focus {
    border-color: ${({ theme }) => theme.primary || "#6c63ff"};
    box-shadow: 0 0 5px ${({ theme }) => theme.primary || "#6c63ff"};
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #6c63ff, #4e4ce6);
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: linear-gradient(135deg, #4e4ce6, #6c63ff);
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
          setSnackbar({ open: true, message: "Email sent successfully!", severity: "success" });
          formRef.current.reset();
        },
        () => setSnackbar({ open: true, message: "Failed to send email.", severity: "error" })
      );
  };

  return (
    <Container>
      <Title>Contact Me</Title>
      <Description>Feel free to reach out for any inquiries or collaborations!</Description>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="email" name="from_email" placeholder="Your Email" required />
        <Input type="text" name="from_name" placeholder="Your Name" required />
        <Input type="text" name="subject" placeholder="Subject" required />
        <TextArea name="message" rows="4" placeholder="Message" required />
        <Button type="submit">Send</Button>
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
