import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";
import "./curd.css";

function CrudAdd(props) {
  const initialState = {
    varaitiyaName: "",
    floor: "",
    month: "",
    flat: "",
    electricity: "",
    gas: "",
    garbage: "",
    light: "",
    description: "",
    total: "",
  };
  const [crud, setCrud] = useState(initialState);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    //if (!crud.companyName || !crud.email) return;
    async function postCrud() {
      try {
        const response = await post("http://localhost:8080/api/cruds/", crud);
        navigate(`/cruds/${response.data._id}`);
      } catch (error) {
        console.log("error", error);
      }
    }
    postCrud();
  }

  function handleChange(event) {
    setCrud({ ...crud, [event.target.name]: event.target.value });
  }

  function handleCancel() {
    navigate("/cruds");
  }

  return (
    <div className="container pt-3" style={{ maxWidth: "400px" }}>
      <h1 style={{ fontFamily: "monospace" }}>Create Varaitiya</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <section className="nam_flr">
          <div className="form-group">
            <label>Name:</label>
            <input
              name="varaitiyaName"
              type="text"
              required
              value={crud.varaitiyaName}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group" style={{ marginLeft: "0.2rem" }}>
            <label>Floor No :</label>
            <input
              name="floor"
              type="text"
              required
              value={crud.floor}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </section>
        <section className="mon_ren">
          <div className="form-group">
            <label>Month:</label>
            <input
              name="month"
              type="text"
              required
              value={crud.month}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group" style={{ marginLeft: "0.2rem" }}>
            <label>House Rent :</label>
            <input
              name="flat"
              type="text"
              required
              value={crud.flat}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </section>
        <section className="ele_gas">
          <div className="form-group">
            <label>Electricity Bill :</label>
            <input
              name="electricity"
              type="text"
              required
              value={crud.electricity}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group" style={{ marginLeft: "0.2rem" }}>
            <label>Gas Bill :</label>
            <input
              name="gas"
              type="text"
              required
              value={crud.gas}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </section>
        <section className="gar_lig">
          <div className="form-group">
            <label>Garbage Bill :</label>
            <input
              name="garbage"
              type="text"
              required
              value={crud.garbage}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group" style={{ marginLeft: "0.2rem" }}>
            <label>Light Bill :</label>
            <input
              name="light"
              type="text"
              required
              value={crud.light}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </section>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            row="10"
            value={crud.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label> Total :</label>
          <input
            name="total"
            type="text"
            required
            value={crud.total}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="btn-group pt-2 ">
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary"
            style={{ borderRadius: "5px" }}
          />
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary"
            style={{ borderRadius: "5px", marginLeft: "0.2rem" }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CrudAdd;
