import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Skeleton.css";
const FloorSkeleton = () => {
  return (
    <div clasName="skeletonMain">
      <Header />
      <div className="skeleton skeletonCard">
        <div className="skeletonCardTop">
          <button className="skeleton"></button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FloorSkeleton;
