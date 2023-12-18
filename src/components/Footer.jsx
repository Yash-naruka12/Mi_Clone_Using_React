import React from "react";
import CatchedIcon from "../svgs/CatchedIcon";
import VerifiedIcon from "../svgs/VerifiedIcon";
import MapIcon from "../svgs/MapIcon";
import NextIcon from "../svgs/NextIcon";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import "../styles/PreFooter.css";
import "../styles/Footer.css"

function Footer({ footer }) {
  return (
    <div className="mainDiv">
      <div className="preFooter">
        <div>
          {<CatchedIcon />}
          <p>
            <b>Hassle-free replacement</b> <br /> 10-day easy replacement policy
            on mi.com
          </p>
        </div>

        <div>
          {<VerifiedIcon />}
          <p>
            <b>100% secure payment</b>
            <br />
            We support Cards,Wallets,EMI and COD
          </p>
        </div>

        <div>
          {<MapIcon />}
          <p>
            <b>Vast service network</b>
            <br />
            1000 Mi Service-centers Across 600 Cities
          </p>
        </div>
      </div>

      <div className="preFooter2">
        <div>
          <p>
            LET'S STAY IN TOUCH <br />
            <span>Get Updates On Special And More</span>
          </p>
        </div>

        <div className="userInput">
          <input type="email" name="email" placeholder="Enter Email Address" />
          <button> {<NextIcon />} </button>
          <span>Thanks You're on our email list for special offers</span>
        </div>

        <div>
          <p>FOLLOW MI</p>
          <span>We Wan To Hear From You!</span>
        </div>

        <div className="lastChild">
          <a href="/">{<FaFacebookF />}</a> <a href="/">{<FaYoutube />}</a>{" "}
          <a href="/">{<FaInstagram />}</a> <a href="/">{<FaTwitter />}</a>
        </div>
      </div>

      <div className="footer">
        <div>
          <p> SUPPORT</p>
          {footer.support.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p> SHOP AND LEARN</p>
          {footer.shopAndLearn.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}{" "}
            </a>
          ))}
        </div>
        <div>
          <p> RETAIL STORE</p>
          {footer.retailStore.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p> ABOUT</p>
          {footer.aboutUS.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p> CONTACT US</p>
          {footer.contactUs.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <div>Chat with our Virtual AI Bot(24/7 Live Agent Support)</div>
          <button>CHAT NOW</button>
        </div>
      </div>
      <div className="footerBorder">
        <div> Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</div>
      </div>
    </div>
  );
}

export default Footer;
