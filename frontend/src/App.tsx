import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import { Container } from "@mui/material";
// components
import TaskForm from "./components/TaskForm";
import Menu from "./components/Navbar";
import TaskList from "./components/TaskList";
import NotFound404 from "./components/404";
// import { proxy } from "./config";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        {/* <Link style={{ textDecoration: "none", color: "#eee" }} to="/tasks/new">
          new task
        </Link>
        <Link style={{ textDecoration: "none", color: "#eee" }} to="/">
          Home
        </Link> */}
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id/edit" element={<TaskForm />}></Route>
          <Route path="/*" element={<NotFound404 />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
