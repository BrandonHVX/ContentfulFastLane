import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./input";

import { isNextOfKin } from "./validation";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const NextOfKin = ({ step, setStep, user, setUser }) => {
  const [errors, setErrors] = useState({});
  // handle onchange

  const handleNextOfKin = ({ target }) => {
    setUser({
      type: "UPDATE_NEXTOFKIN_INFO",
      payload: { [target.name]: target.value }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = isNextOfKin(user);
    setErrors(errors);
    if (Object.keys(errors).length > 0) return;

    //handle http request
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...setUser })
    });
    setStep(step + 1);
  };

  return (
    <div>
      <form
        className="RegisterForm"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <Input
          type="text"
          label="First name"
          name="firstName"
          value={user.nextOfKin.firstName}
          onChange={e => handleNextOfKin(e)}
          error={errors.firstName}
        />
        <Input
          type="text"
          label="Last name"
          name="lastName"
          value={user.nextOfKin.lastName}
          onChange={e => handleNextOfKin(e)}
          error={errors.lastName}
        />
        <Input
          type="email"
          label="Email address"
          name="email"
          value={user.nextOfKin.email}
          onChange={e => handleNextOfKin(e)}
          error={errors.email}
        />
        <div className="submit">
          <button onClick={() => setStep(step - 1)} type="button">
            Back
          </button>
          <button type="submit"> Submit</button>
        </div>
      </form>
    </div>
  );
};
NextOfKin.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  user: PropTypes.object,
  setUser: PropTypes.func
};
export default NextOfKin;
