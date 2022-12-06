import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { useNavigate } from "react-router-dom";
import CollapsibleExample from "../navbar/Navbar";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const sendDataToAPI = () => {
    axios
      .post("https://638f0b814ddca317d7eccc35.mockapi.io/Crud", {
        firstName,
        lastName,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <div>
      <div><CollapsibleExample /></div>
      <div>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input
              name="fname"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              type="text"
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              name="lname"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              type="text"
            />
          </Form.Field>
          <Button type="submit" onClick={sendDataToAPI}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Create;
