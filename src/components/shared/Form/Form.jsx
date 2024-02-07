import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
const Form = ({ formTitle, submitBtn, FormType }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hopitalName, setHopitalName] = useState("");
  const [website, setWebSite] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <>
      <form>
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        <div className="d-flex mb-3">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donarRadio"
              value={"donar"}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Donar
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="hospitalRadio" className="form-check-label">
              Hospital
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organisationRadio"
              value={"organisation"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="organisationRadio" className="form-check-label">
              Organisation
            </label>
          </div>
        </div>
        {(() => {
          switch (true) {
            case FormType === "login": {
              return (
                <>
                  <InputType
                    labelForHtml={"forEmail"}
                    labelText={"Email"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />

                  <InputType
                    labelForHtml={"ForPassword"}
                    labelText={"Mot De passe"}
                    inputType={"text"}
                    name={"password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </>
              );
            }
            case FormType === "register": {
              return (
                <>
                  {(role === "admin" || role === "donar") && (
                    <InputType
                      labelForHtml={"ForName"}
                      labelText={"Name"}
                      inputType={"text"}
                      name={"name"}
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  )}
                  {role === "organisation" && (
                    <InputType
                      labelForHtml={"OrganisationName"}
                      labelText={"organisation Name "}
                      inputType={"text"}
                      name={"organisationName"}
                      value={organisationName}
                      onChange={(event) =>
                        setOrganisationName(event.target.value)
                      }
                    />
                  )}
                  {role == "hospital" && (
                    <InputType
                      labelForHtml={"hopitalName"}
                      labelText={"hopital Name  "}
                      inputType={"text"}
                      name={"hopitalName"}
                      value={hopitalName}
                      onChange={(event) => setHopitalName(event.target.value)}
                    />
                  )}

                  <InputType
                    labelForHtml={"forEmail"}
                    labelText={"Email"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />

                  <InputType
                    labelForHtml={"ForPassword"}
                    labelText={"Mot De passe"}
                    inputType={"text"}
                    name={"password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />

                  <InputType
                    labelForHtml={"website"}
                    labelText={"Site wab    "}
                    inputType={"text"}
                    name={"website"}
                    value={website}
                    onChange={(event) => setWebSite(event.target.value)}
                  />

                  <InputType
                    labelForHtml={"adress"}
                    labelText={"adress"}
                    inputType={"text"}
                    name={"adress"}
                    value={adress}
                    onChange={(event) => setAdress(event.target.value)}
                  />

                  <InputType
                    labelForHtml={"phone"}
                    labelText={"Phone Number"}
                    inputType={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </>
              );
            }
          }
        })()}

        <div className="d-flex justify-content-between">
          {FormType === "login" ? (
            <p>
              {" "}
              Not Register Yet ! Register?
              <Link to="/register">Here</Link>
            </p>
          ) : (
            <p>
              {" "}
              Not Login Yet ! Login?
              <Link to="/login">Here</Link>
            </p>
          )}

          <button className="btn btn-outline-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
