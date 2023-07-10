import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./curd.css";

function CrudDetails(props) {
  const [crud, setCrud] = useState({});

  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(
    function () {
      async function getCrudById() {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/cruds/${_id}`
          );
          setCrud(response.data);
        } catch (error) {
          console.log("error", error);
        }
      }
      getCrudById();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props]
  );

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:8080/api/cruds/${_id}`);
      navigate("/cruds");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container curd_details ">
      <h2 className="text-center py-4 " style={{ fontFamily: "monospace" }}>
        Details Of {crud.varaitiyaName}
      </h2>
      <p>
        <small>
          <b>ID</b>: {crud._id}
        </small>
      </p>
      <section className="vara_detail_section">
        <p>
          <b>Name</b>: {crud.varaitiyaName}
        </p>

        <p>
          <b>Floor No</b>: {crud.floor}th
        </p>
      </section>
      <section className="vara_detail_section">
        <p>
          <b>Month</b>: {crud.month}
        </p>
        <p className="text-info">
          <b>House Rent</b>: {crud.flat} Tk
        </p>
      </section>
      <section className="vara_detail_section">
        <p>
          <b>Electricity Bill</b>: {crud.electricity} Tk
        </p>
        <p>
          <b>Gas Bill</b>: {crud.gas} Tk
        </p>
      </section>
      <section className="vara_detail_section">
        <p>
          <b>Garbage Bill</b>: {crud.garbage} Tk
        </p>
        <p>
          <b>Stair Bill</b>: {crud.light} Tk
        </p>
      </section>
      <section className="vara_detail_section">
        <p>
          <b>Description</b>: <p align="justify">{crud.description}</p>
        </p>
      </section>
      <section className="vara_detail_section">
        <p className="text-danger">
          <b>Total</b>: {crud.total} Tk
        </p>
      </section>

      <hr />
      <div className="btn-group py-4  ">
        <Link
          to={`/cruds/${crud._id}/edit`}
          className="btn btn-warning"
          style={{ color: "white" }}
        >
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
        <button className="btn btn-primary">Screenshot</button>
        <Link to="/cruds" className="btn btn-secondary">
          Close
        </Link>
      </div>
    </div>
  );
}

export default CrudDetails;
