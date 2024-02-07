import InputType from "../../components/shared/Form/InputType";
import Form from "./../../components/shared/Form/Form";

export default function Login() {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner">
          <img
            src="./assets/images/banner1.jpg"
            alt=""
            className="img-fluid w-100 "
          />
        </div>
        <div className="col-md-4 form-container ">
          <Form
            submitBtn={"se connecter"}
            formTitle={"Login page"}
            FormType={"login"}
          />
        </div>
      </div>
    </>
  );
}
