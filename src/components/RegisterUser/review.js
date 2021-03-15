import React, { useState } from "react";
import PropTypes from "prop-types";

import { isNextOfKin } from "./validation";

const Review = ({ step, setStep, user, setUser }) => {
  const [errors, setErrors] = useState({});
  // handle onchange

  const handleReview = ({ target }) => {
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

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();

    setStep(step + 1);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="RegisterForm"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <ul>
          <li>{`${user.firstName} ${user.lastName}`}</li>
          <li>{`${user.nextOfKin.firstName} ${user.nextOfKin.lastName}`}</li>
        </ul>
        <div className="submit">
          <button onClick={() => setStep(step - 1)} type="button">
            Back
          </button>
          <button type="submit"> Submit</button>
        </div>
      </form>
      <div></div>
    </div>
  );
};
Review.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  user: PropTypes.object,
  setUser: PropTypes.func
};
export default Review;
