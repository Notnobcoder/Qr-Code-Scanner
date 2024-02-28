import React, { Suspense, lazy } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import EmployeeList from "./containers/EmployeeList";
// const loginPage = lazy(() => import("./containers/loginPage"));
const homePage = lazy(() => import("./containers/homePage"));
const listPage = lazy(() => import("./containers/listPage"));

const RouteNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <h2 className="text-4xl">Route not found</h2>
      <Link to={"/"}>
        <h2 className="mt-6">Go to homepage</h2>
      </Link>
    </div>
  );
};

export const App = () => {
  const token = localStorage.getItem("token");
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" Component={homePage} />
            {/* <Route path="/homepage" Component={homePage} /> */}
            <Route path="/employee-list" Component={listPage} />
            <Route path="/employee/:id" element={<EmployeeList />} />
            <Route path="*" element={<RouteNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
};
