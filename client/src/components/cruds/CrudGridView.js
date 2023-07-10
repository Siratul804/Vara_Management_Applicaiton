import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CrudGridView() {
  const [cruds, setCruds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(function () {
    async function getCruds() {
      try {
        const response = await axios.get("http://localhost:8080/api/cruds");
        setCruds(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    getCruds();
  }, []);

  return (
    <div className="container">
      <h2>
        <div
          className="text-center pt-4"
          style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
        >
          Table View
        </div>
        <hr />
        <div className="serch_box">
          <p>
            <Link to="/cruds/new" className="btn btn-primary float-right">
              Create CRUD
            </Link>
          </p>
          <input
            type="search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            placeholder="Search Varaitiya"
            className="varaitiya_search"
            aria-label="Search"
          />
        </div>
      </h2>
      <hr />
      <div>
        <div className="d-flex flex-wrap">
          {cruds
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.varaitiyaName
                  .toLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return val;
              }
              return false;
            })
            .map((crud) => {
              return (
                <div
                  className="card"
                  style={{ width: 250, margin: 30 }}
                  key={crud._id}
                >
                  <div class="card-header">
                    <h5 className="card-title">
                      <Link
                        to={`/cruds/${crud._id}`}
                        className="text-danger"
                        style={{
                          fontSize: "20px",
                          textDecoration: "none",
                          fontFamily: "cursive",
                        }}
                      >
                        {crud.varaitiyaName}
                      </Link>
                    </h5>
                  </div>
                  <div className="card-body">
                    <h5 className="d-flex align-items-center">
                      Flat:
                      {crud.floor}th
                    </h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">
										{crud.phone}
									</h6> */}
                    <p className="card-text limit-char">{crud.description}</p>
                    <p className="card-text d-flex align-items-center">
                      <small className="text-muted one-liner">
                        <b> {crud.month}</b> (month)
                      </small>
                    </p>
                  </div>
                  <div class="card-footer d-flex align-items-center">
                    <Link
                      to={`/cruds/${crud._id}/edit`}
                      className="btn btn-warning"
                    >
                      Edit
                    </Link>
                    <span>
                      <small style={{ marginLeft: "0.5rem" }}>
                        <Link
                          to={`/cruds/${crud._id}`}
                          className="link-line text-info "
                        >
                          Read More...
                        </Link>
                      </small>
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default CrudGridView;
