import React from "react";
import styles from "./product.module.css";
import  {useAuth}  from "../../context/Globalstate";
// mui
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

export default function Product({id,title,price,img,rating}) {
  const  {dispatch , basket}= useAuth()
    
  const addtobasket=() => { 
    
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
          id:id,  
          title:title,
          price:price,
          rating:rating,
          img:img,
      },
    });
  }
  
  return (
    <div className={styles.product}>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>${price}</p>
      </div>
      <div>
      <Rating  name="read-only" value={rating} readOnly />
      </div>
      
      <img className={styles.img}  src={img} alt="" />
      <Button sx={{ position:"absolute", bgcolor: "#F68F3D", color: "#000",display:"block",margin:" auto", bottom:"30px" }} variant="contained"
      onClick={addtobasket}
      >
        Add To Basket
      </Button>
    </div>
  );
}
