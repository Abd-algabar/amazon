import React from "react";
import styles from "./cheeck.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Globalstate";
// mui
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

export   let totalp;

export default function Cheeck() {
    const navigate=useNavigate()
    const {user,basket}=useAuth();

 




    if(basket.length>=1){
       totalp =basket.reduce((amount, item) => {
        return amount + item.price;
      }, 0);
    }else{
      totalp=0;
    }
  
    
    

  return (
    <div className={styles.Cheeck}>
      <div className={styles.left}>
        <img width={"100%"} src="/public/checkoutAd.jpg" alt="" />
        <h3>helo {user?user.email:"user"}</h3>
        <h2 > Your shopping Basket </h2>
        <div className={styles.groub}>
            {basket.map((i)=>{
                return(
                    <ProductCheeck key={i.id} id={i.id} title={i.title} price={i.price} rating={i.rating} img={i.img}/>
                )
            })}
          
        </div>
      </div>
      <div className={styles.rihgt}>
        <p>
          Suuptotal {basket.length} item <span>${totalp}</span>{" "}
        </p>
        <Button
          sx={{ bgcolor: "#F68F3D", color: "#f3f3f3" }}
          fullWidth
          variant="contained"
          onClick={()=>{
            navigate("/payment");  
          }}
        >
          Product to Cheeckout
        </Button>
      </div>
    </div>
  );
}




 export const ProductCheeck = ({id,title,price,img,rating}) => {

  const{dispatch}=useAuth();
  function remove_item(id){
    
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    }
    )
  }
  return (
    <div className={styles.ProductCheeck}>
      <img className={styles.imgpro}  src={img} alt="" />
      <div className={styles.info}>
        <p className={styles.title}>
          {title}
        </p>
        <span>${price}</span>
        <div >
        <Rating  name="read-only" value={rating} readOnly />
        </div>
        
        <Button
          sx={{ bgcolor: "#F68F3D", color: "#f3f3f3",display:"block",mt:"14px" }}
          variant="contained"
          onClick={()=>{
            remove_item(id);
          }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};
