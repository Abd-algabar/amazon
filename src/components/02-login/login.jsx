import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from "../../context/Globalstate";
import { useNavigate } from "react-router-dom";
//mui
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
  const { user } = useAuth();
  const [email, setemail] = useState("");
  const [passowrd, setpassowrd] = useState("");
  const navigate = useNavigate();
  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, passowrd).then((auth) => {
      if (auth) {
        navigate("/");
      }
    }).catch;
  };
  const regestr = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, passowrd).then((auth) => {
      if (auth) {
        navigate("/");
      }
    }).catch;
  };

  return (
    <div>
      <Link className={styles.linklogo} to="/">
        <img className={styles.logo} src="/public/logo2.png" />
      </Link>

      <div className={styles.box}>
        <h1>Sign in</h1>
        <TextField
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          label="Email"
          fullWidth
          sx={{
            display: "block",
            mb: "20px",
            width: "300px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                transition: "border-color 0.3s ease", // إضافة انتقال سلس للحدود
              },
              "&.Mui-focused fieldset": {
                borderColor: "#000", // تغيير لون الحدود إلى الأخضر عند التركيز
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#000", // تغيير لون النص (Label) إلى الأخضر عند التركيز
              },
            },
          }}
        />
        <TextField
          value={passowrd}
          onChange={(e) => {
            setpassowrd(e.target.value);
          }}
          id="outlined-required"
          label="Password"
          type="password"
          autoComplete="current-password"
          fullWidth
          sx={{
            display: "block",
            mb: "10px",
            width: "300px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                transition: "border-color 0.3s ease", // إضافة انتقال سلس للحدود
              },
              "&.Mui-focused fieldset": {
                borderColor: "#000", // تغيير لون الحدود إلى الأخضر عند التركيز
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#000", // تغيير لون النص (Label) إلى الأخضر عند التركيز
              },
            },
          }}
        />
        <Button
          sx={{ bgcolor: "#F68F3D", color: "#000" }}
          fullWidth
          variant="contained"
          onClick={signin}
        >
          sign in
        </Button>

        <p style={{ fontSize: "13px", color: "#777", margin: "10px 0px" }}>
          By continuing,you agree to Amazon `s Fake Clone conditions of Use and
          Privacy Notice
        </p>
        <Button
          sx={{ bgcolor: "#ccc", color: "#000", border: "1px solid #777" }}
          fullWidth
          variant="contained"
          onClick={(e) => {
            regestr(e);
          }}
        >
          Create your Amazon Account
        </Button>
      </div>
    </div>
  );
}
