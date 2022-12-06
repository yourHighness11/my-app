import React, { useEffect, useRef, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import CollapsibleExample from "../navbar/Navbar";

const Read = () => {
  const [apiData, setApiData] = useState([]);
  const renderAfterCalled = useRef(false);

  useEffect(() => {
    if (!renderAfterCalled.current) {
      axios
        .get("https://638f0b814ddca317d7eccc35.mockapi.io/Crud")
        .then((getData) => setApiData(getData.data));
    }

    renderAfterCalled.current = true;
  }, []);

  return (
    <div>
      <div>
        <CollapsibleExample />
      </div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>id</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  <Link to={`/update/${data.id}`}>
                    <Button inverted color="green" to="/update">
                      UPDATE
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link to={`/delete/${data.id}`}>
                    <Button inverted color="red">
                      DELETE
                    </Button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Read;
