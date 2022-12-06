import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Delete = () => {
  const navigate = useNavigate();
  const pathId = useParams().pathId;
  useEffect(() => {
    axios
      .delete(`https://638f0b814ddca317d7eccc35.mockapi.io/Crud/${pathId}`)
      .then(() => {
        navigate("/read");
      });
  }, []);
};
export default Delete;
