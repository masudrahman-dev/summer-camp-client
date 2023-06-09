import React from "react";

import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import StudentSelectedTable from "./StudentDashboard/StudentSelectedTable/StudentSelectedTable";

import FormCRUD from "./InstrctorDashboard/FormCRUD/FormCRUD";
const Dashboard = () => {
  return (
    <div>
      <div className="antialiased bg-gray-50 dark:bg-gray-900 h-screen">
        {/* Navbar */}

        <Navbar></Navbar>
        {/* <!-- Sidebar --> */}

        <Sidebar></Sidebar>
        {/* main  */}
        <main className="p-4 md:ml-64 h-auto pt-20">
          {/* <FormCRUD></FormCRUD> */}
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
