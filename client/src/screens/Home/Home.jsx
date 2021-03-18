import React from "react";
import Layout from "../layout/Layout";
import "./Home.css";
import Picture from "../images/profile-pic.png";

const Home = () => {
  return (
    <Layout>
      <div className="home"> Hi, I'm Gracen, a Full Stack Web Developer</div>
      <img src={Picture} className="profile-pic" alt="profile" />
    </Layout>
  );
};

export default Home;
