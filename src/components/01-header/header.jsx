import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuth } from "../../context/Globalstate";

//icon
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { auth } from "../../firebase";

import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const { user, basket } = useAuth();
  const [showModal, setshowModal] = useState(false);

  const handelsignout = () => {
    auth.signOut();
  };

  return (
    <>
      <div className={styles.hedar}>
        <Link to={"/"}>
          <img className={styles.logo} src="/public/logo.png" alt="" />
        </Link>
        <div className={styles.search}>
          <input type="text" />
          <SearchIcon className={styles.icoserch} />
        </div>

        <div className={styles.links}>
          <Link to={user ? "/" : "/sign"} onClick={handelsignout}>
            <p className={styles.p1}>Helo {user ? user.email : "Guest"} </p>
            <p className={styles.p2}> {user ? "Sign Out" : "Sign In"} </p>
          </Link>

          <Link className={styles.none} to={""}>
            <p className={styles.p1}>Your</p>
            <p className={styles.p2}>Prime</p>
          </Link>

          <Link className={styles.cheeck} to={"/cheeck"}>
            <ShoppingCartIcon />
            <p>{basket.length}</p>
          </Link>
        </div>
      
      </div>

  
    </>
  );
}
