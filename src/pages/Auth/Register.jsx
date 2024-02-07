import React from "react";
import Form from "../../components/shared/Form/Form";

const Register = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner ">
          <img
            src="./assets/images/banner2.jpg"
            alt="RegisterImage"
            // className=" img-fluid w-100"
          />
        </div>

        <div className="col-md-4 form-container">
          <Form
            formTitle={"Register"}
            submitBtn={"Inscription"}
            FormType={"register"}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
