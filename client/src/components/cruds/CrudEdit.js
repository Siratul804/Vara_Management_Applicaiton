import React, { useState, useEffect } from "react";
import { get, patch } from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CrudEdit(props) {
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

  const { _id } = useParams();
  const navigate = useNavigate();

  const a = Math.floor(crud.flat);
  const b = Math.floor(crud.electricity);
  const d = Math.floor(crud.gas);
  const c = Math.floor(crud.garbage);
  const e = Math.floor(crud.light);

  useEffect(
    function () {
      async function updateCrud() {
        try {
          const response = await get(`http://localhost:8080/api/cruds/${_id}`);
          setCrud(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      updateCrud();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props]
  );

  function handleSubmit(event) {
    event.preventDefault();
    async function updateCrud() {
      try {
        await patch(`http://localhost:8080/api/cruds/${crud._id}`, crud);
        navigate(`/cruds/${crud._id}`);
      } catch (error) {
        console.log(error);
      }
    }
    updateCrud();
  }

  function handleChange(event) {
    setCrud({ ...crud, [event.target.name]: event.target.value });
  }

  function handleCancel() {
    navigate(`/cruds/${crud._id}`);
  }

  return (
    <div className="container">
      <h1 style={{ fontFamily: "monospace" }} className=" py-2  ">
        Edit Varaitiya
        <div style={{ borderBottom: "2px solid black", width: "310px" }}></div>
      </h1>
      <div className="edit">
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
              <label>Stair Bill :</label>
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

          <section className="des_to">
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

            <div className="form-group" style={{ marginLeft: "1.2rem" }}>
              <label> Total : {a + b + c + d + e} </label>
              <input
                name="total"
                type="text"
                required
                value={crud.total}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </section>

          <div className="btn-group pt-4 ">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CrudEdit;
