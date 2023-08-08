import React, { useEffect, useState } from "react";
import "./index.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { OrSeprator } from "../../utils/utilities.js";
import TextInput from "../textinput";
import ButtonComponent from "../button";
import { validateEmail, validateForm } from "../../utils/config";
import { ErrorCheck } from "../../utils/services";
import Toast from "../../common/toast";
import PropTypes from "prop-types";
import { HaveAccount, TitleDescription } from "../../common/texts";
import { SignupConstants } from "../../mock-data/constants";
import SocialSignup from "../../common/social/socialsignup";

const VerifyEmailComponent = (props) => {
  const { SignUpEmail } = props;  

  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [buttonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    setButtonEnabled(formData.email !== "");
  }, [formData.email]);

  const handleFormSubmit = () => {
    console.log(validateForm(formData));
    const validationErrors = validateEmail(formData);

    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      SignUpEmail(formData);
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setFormData({
      ...formData,
      [name]: value,
    });   
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleFormSubmit();
    }
  };
 
  return (
    <>
      <Grid
        className="signup"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box className="signup__section">
          {TitleDescription(
            SignupConstants["title"],
            SignupConstants["description"]
          )}
          <SocialSignup />
          {OrSeprator()}
          <TextInput
            label={"Email"}
            name="email"
            placeholder={"Enter your Email"}
            from={"signup"}
            value={formData.email}
            type={"email"}
            error={ErrorCheck(errors.email)}
            errorText={errors.email}
            eventHandler={handleChange}
            autoFocus={true}
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />
          <Box sx={{ mb: "20px" }} />
          <Box
            className={`setpass-btn__${!buttonEnabled ? "disable" : "enable"}`}
          >
            <ButtonComponent
              label={"Continue"}
              from={"signup"}
              eventHandler={handleFormSubmit}
              disabled={!buttonEnabled}
              className={!buttonEnabled ? "disable" : "enable"}
            />
          </Box>
          <Box sx={{ mb: "24px" }} />
          {HaveAccount(
            SignupConstants["accountTitle"],
            SignupConstants["accountLink"]
          )}
        </Box>
      </Grid>
      <Toast />  
    </>
  );
};

VerifyEmailComponent.propTypes = {
  SignUpEmail: PropTypes.func.isRequired,
};

export default VerifyEmailComponent;
