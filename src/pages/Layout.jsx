import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="mt-6">
        <div className="flex flex-col-2">
          <Sidebar />
        </div>
        <div className="bg-slate-50 h-screen">
          <h1>{children}</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
