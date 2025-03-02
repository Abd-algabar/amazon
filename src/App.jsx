import { useState, useEffect } from "react";
import Header from "./components/01-header/header";
import Login from "./components/02-login/login";
import Home from "./components/03-home/home";
import { useAuth } from "./context/Globalstate";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import Cheeck from "./components/05-cheeckout/cheeck";
import Pay from "./components/06-payment/pay";

function App() {
  const [count, setCount] = useState(0);
  const { dispatch } = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/sign" element={<Login />} />
        <Route
          path="/cheeck"
          element={
            <>
              <Header />
              <Cheeck />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Pay />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              {" "}
              <Header />
              <Home />{" "}
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
