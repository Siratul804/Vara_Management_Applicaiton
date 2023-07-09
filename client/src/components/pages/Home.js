import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="container home_con ">
      <section className="home">
        <h1 className="text-center">Vara Management Application </h1>
        <p>
          <b>Front-end</b>: React.js v17+ with RRDv6+
        </p>
        <p>
          <b>Back-end</b>: Node.js, Express.js
        </p>
        <p>
          <b>Database</b>: MongoDB Atlas with Mongoose ODM
        </p>
      </section>
    </div>
  );
}

export default Home;
