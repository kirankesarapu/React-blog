import axios from "axios";
import { useState } from "react";
import { API_URL } from "../config";
import { message } from "antd";
import { saveUserLocal } from "../utils";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
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

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else {
      newErrors.password = "";
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleLogin = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post(`${API_URL}/api/auth/local`, {
          identifier: formData.username,
          password: formData.password,
        });
        const newData = {
          ...response.data.user,
          jwt: response.data.jwt,
        };
        saveUserLocal(newData);
        window.location.pathname = "/";
      } catch (error) {
        message.error(
          error?.response?.data?.error?.message ?? error?.message,
          3
        );
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-heading">Login</h2>
        <label className="login-label">
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="login-input"
          />
        </label>
        {formErrors.username && (
          <span className="error-message">{formErrors.username}</span>
        )}
        <br />
        <label className="login-label">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="login-input"
          />
        </label>
        {formErrors.password && (
          <span className="error-message">{formErrors.password}</span>
        )}
        <br />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
