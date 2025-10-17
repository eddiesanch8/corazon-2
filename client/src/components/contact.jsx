import "../css/contact.css";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const emailPattern = /^[^\s@]+@[^\s@]+\.(com|org|edu)$/i;
  const phonePattern = /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
  const onlyString = /^[A-Za-z]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on input
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "**Name is required";
    } else if (!onlyString.test(formData.name.trim())) {
      newErrors.name = "**Please don't use numerical values";
    }

    if (!formData.email.trim()) {
      newErrors.email = "**Email is required";
    } else if (!emailPattern.test(formData.email.trim())) {
      newErrors.email =
        "**Email must contain @ and end with .com, .org, or .edu";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "**Phone number is required";
    } else if (!phonePattern.test(formData.phone.trim())) {
      newErrors.phone =
        "**Please enter a valid phone number (e.g., 123-456-7890)";
    }

    if (!formData.message.trim()) {
      newErrors.message = "**Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form is valid!", formData);
      // reset form if desired
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <section className="contact-us">
      <h2 className="contact__header">Contact Information:</h2>
      <div className="contact-card">
        <form className="contact__form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="First Name:"
            value={formData.name}
            onChange={handleChange}
          />
          <p className="error">{errors.name}</p>

          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email:"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="error">{errors.email}</p>

          <label htmlFor="phone" className="form__label">
            Phone Number
          </label>
          <input
            type="text"
            id="phonenumber"
            name="phone"
            placeholder="Phone Number:"
            value={formData.phone}
            onChange={handleChange}
          />
          <p className="error">{errors.phone}</p>

          <label htmlFor="message" className="form__label">
            Message
          </label>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Send a message!"
            value={formData.message}
            onChange={handleChange}
          />
          <p className="error">{errors.message}</p>

          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}
