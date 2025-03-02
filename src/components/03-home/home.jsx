import React from "react";
import styles from "./home.module.css";
import Product from "../04-product/product";
import shortid from "shortid";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.cont}>
        <img
          className={styles.img}
          src="/public/home.jpg"
          width={"100%"}
          alt=""
        />
        <div className={styles.Productpage}>
          <Product
            id={shortid.generate()}
            title="Audio-Technica ATH-WS330BT BK Wireless Headphones, Bluetooth Headphones"
            price={40}
            rating={5}
            img="/public/products/1.png"
          />
          <Product
            id={shortid.generate()}
            title="
              IdeaPad Slim 3i - 2024 - Lightweight Laptop - Rapid Charge Boost - 14 FHD IPS Display - 16GB Memory - 512GB SSD Storage - Intel® Core™ i7-13620H - Windows 11 Home"
            price={600}
            rating={3}
            img="/public/products/2.png"
          />

          <Product
            id={shortid.generate()}
            title="
HP Smart-Tank 5000 Wireless All-in-One Ink-Tank Printer with up to 2 years of ink included, mobile print, scan, copy, white,"
            price={900}
            rating={2}
            img="/public/products/3.png"
          />
          <Product
            id={shortid.generate()}
            title="Audio-Technica ATH-WS330BT BK Wireless Headphones, Bluetooth Headphones"
            price={60}
            rating={4}
            img="/public/products/1.png"
          />
          <Product
            id={shortid.generate()}
            title="ARRIS Surfboard SB6190 32x8 DOCSIS 3.0 Cable Modem with 1.4 Gbps Download and 262 Upload Speeds, White"
            price={100}
            rating={4}
            img="/public/products/5.png"
          />

          <Product
            id={shortid.generate()}
            title="SAMSUNG
Galaxy S25 Ultra Cell Phone, 512GB, AI Smartphone, Unlocked Android, AI Camera, Fast Processor, Long Battery Life, 2025, Titanium Black"
            price={1200}
            rating={5}
            img="/public/products/6.png"
          />
        </div>
      </div>
    </div>
  );
}
