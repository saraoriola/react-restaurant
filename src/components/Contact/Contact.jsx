import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './Contact.css';

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      if (value.length < 3) {
        setMessage("Name must be at least 3 characters");
        setBtnDisabled(true);
      } else {
        setMessage(null);
        setBtnDisabled(false);
      }
    } 
      setFormData({
        ...formData,
        [name]: value,
      });

  };

  const clearForm = () => {
    setFormData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);

    if (Object.keys(errors).length) {
      setMessage(errors);
      setBtnDisabled(true);
    } else {
      clearForm();
      saveUser();
      setMessage("Form submitted successfully");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  const saveUser = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.subject,
        message: formData.message,
        phone: formData.phone,
      })
    );
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={handleInputChange}
          name="name"
          value={formData.name}
          className="form-input"
        />
        <input
          type="email"
          placeholder="email"
          onChange={handleInputChange}
          name="email"
          value={formData.email}
          className="form-input"
        />
        <input
          type="text"
          placeholder="subject"
          onChange={handleInputChange}
          name="subject"
          value={formData.subject}
          className="form-input"
        />
        <textarea
          placeholder="message"
          onChange={handleInputChange}
          name="message"
          value={formData.message}
          className="form-input"
        />
        <input
          type="text"
          placeholder="phone (optional)"
          onChange={handleInputChange}
          name="phone"
          value={formData.phone}
          className="form-input"
        />
        <button disabled={btnDisabled} type="submit" className="submit-button" onClick={saveUser}>
          Submit
        </button>
        {message && <p className="error-message">{message}</p>}
      </form>
    </div>
  );
};

const validateForm = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Please enter your name";
  } else if (values.name.length > 50) {
    errors.name = "Your name must be 50 characters or less";
  }

  if (!values.email) {
    errors.email = "Please enter your email address";
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
    errors.email = "Your email address is not valid";
  }

  if (!values.subject) {
    errors.subject = "Please enter a subject";
  } else if (values.subject.length > 100) {
    errors.subject = "Your subject must be 100 characters or less";
  }

  if (!values.message) {
    errors.message = "Please enter a message";
  } else if (values.message.length > 1000) {
    errors.message = "Your message must be 1000 characters or less";
  }

  if (values.phone) {
    if (!/^[0-9]{10}$/.test(values.phone)) {
      errors.phone = "Your phone number is not valid";
    }
  }

  return errors;
};

export default Contact;