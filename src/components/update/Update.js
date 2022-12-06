import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { useNavigate, useParams } from "react-router-dom";
import CollapsibleExample from "../navbar/Navbar";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pathIdData, setPathIdData] = useState([]);
  const navigate = useNavigate();

  const renderAfterCalled = useRef(false);

  const pathId = useParams().pathId;

  useEffect(() => {
    if (!renderAfterCalled.current) {
      axios
        .get(`https://638f0b814ddca317d7eccc35.mockapi.io/Crud/${pathId}`)
        .then((getData) => setPathIdData(getData.data));
    }

    renderAfterCalled.current = true;
  }, []);

  const sendDataToAPI = () => {
    axios
      .put(
        `https://638f0b814ddca317d7eccc35.mockapi.io/Crud/${pathIdData.id}`,

        {
          firstName,
          lastName,
        }
      )
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <div>
      <div>
        <CollapsibleExample />
      </div>
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
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Update;
