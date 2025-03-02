import React from "react";
import styles from "./pay.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Globalstate";
import { ProductCheeck } from "./../05-cheeckout/cheeck";

// mui
import Button from "@mui/material/Button";



export default function Pay() {
  const { basket, user } = useAuth();
  let totalp=0;
     if(basket.length>=1){
         totalp =basket.reduce((amount, item) => {
          return amount + item.price;
        }, 0);
      }
    
  return (
    <div className={styles.pay}>
      <h2>
        {" "}
        CheeckOut ( <Link to={"/cheeck"}>{basket.length} </Link> )
      </h2>
      <div className={styles.box}>
        <div className={styles.row1}>
          
            <h3> Delvery Address:</h3>
         
          <div>
            <p>{user?.email}</p>
            <p>homs,homs,homs</p>
          </div>
        </div>

        <div className={styles.row2}>
          
            <h3>Review items and delivery :</h3>
          
          <div>
            {basket.map((i) => {
              return (
                <ProductCheeck
                  key={i.id}
                  id={i.id}
                  title={i.title}
                  price={i.price}
                  rating={i.rating}
                  img={i.img}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.row3}>
          <h3 >Payment Method :</h3>
          <div className={styles.grow}>
            <strong>order total: ${totalp}</strong>
            <Button
              sx={{ bgcolor: "#F68F3D", color: "#f3f3f3" }}
              fullWidth
              variant="contained"
             
            >
              Bay Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
