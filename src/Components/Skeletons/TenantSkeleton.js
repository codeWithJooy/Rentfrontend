import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Skeleton.css";
const TenantSkeleton = () => {
  return (
    <div clasName="skeletonMain">
      <Header />
      <div className="skeleton skeletonCard"></div>
      <div className="skeleton skeletonCard"></div>
      <Footer />
    </div>
  );
};

export default TenantSkeleton;
