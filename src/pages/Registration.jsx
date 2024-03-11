import axios from "axios";
import { useState } from "react";
import { API_URL } from "../config";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    } else {
      newErrors.username = "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    } else {
      newErrors.email = "";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    } else {
      newErrors.password = "";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    } else {
      newErrors.confirmPassword = "";
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleRegistration = async () => {
    if (validateForm()) {
      try {
        await axios.post(`${API_URL}/api/auth/local/register`, {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });
        navigate("/login");
        message.success("Registration successful.");
      } catch (error) {
        message.error(
          error?.response?.data?.error?.message ?? error?.message,
          3
        );
      }
    }
  };
  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2 className="registration-heading">Registration</h2>
        <label className="registration-label">
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="registration-input"
          />
        </label>
        {formErrors.username && (
          <span className="error-message">{formErrors.username}</span>
        )}
        <br />
        <label className="registration-label">
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="registration-input"
          />
        </label>
        {formErrors.email && (
          <span className="error-message">{formErrors.email}</span>
        )}
        <br />
        <label className="registration-label">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="registration-input"
          />
        </label>
        {formErrors.password && (
          <span className="error-message">{formErrors.password}</span>
        )}
        <br />
        <label className="registration-label">
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="registration-input"
          />
        </label>
        {formErrors.confirmPassword && (
          <span className="error-message">{formErrors.confirmPassword}</span>
        )}
        <br />
        <button onClick={handleRegistration} className="registration-button">
          Register
        </button>
      </div>
    </div>
  );
};

export default Registration;
