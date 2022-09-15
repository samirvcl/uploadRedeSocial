import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Conponents/Footer";
import Header from "./Conponents/Header";
import ProtectedRoute from "./Conponents/Helper/ProtectedRoute";
import Home from "./Conponents/Home";
import Login from "./Conponents/Login/Login";
import User from "./Conponents/User/User";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="/conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
