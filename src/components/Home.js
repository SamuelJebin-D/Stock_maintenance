import { React, useEffect } from "react";

import "../css/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Home = () => {
  useEffect(()=>{
      AOS.init({duration:800});
  },[]);

  // useEffect(async () => {
  //   var temp;

  //   const headers = {
  //     "Content-Type": "application/json",
  //   };
  //   const result = await axios.post("http://10.140.16.52:5000/login", {
  //     mode: 'no-cors',
  //     headers:headers,
  //     data: {
  //       email: "emauk",
  //       password: "sac",
  //     },
  //   });
  //   console.log(result);
  // }, []);

  return (
    <div>
      <div class="pic-container">
        <div class="pic-text" data-aos="fade-up">
          <h2 class="pic-th">Passionately Progressive</h2>
          <h5 class="pic-tb">Moved by the vision of Stainless Future</h5>
        </div>
      </div>
      <div class="relative-text" data-aos="fade-up">
        <div class="rtext1">
          <h2 class="rtext1-h">A World Of Stainless</h2>
          <h5 class="rtext1-b">
            Stainless is as stainless does. This shining non-corrosive ‘metal of
            the future’ rises from scrap to raise skylines around the world,
            quite literally.
          </h5>
        </div>
        <div class="rpic1">
          <p class="rpictext">Applications Of Stainless Steel</p>
        </div>
        <div class="rpic2">
          <p class="rpictext">Magic Of Stainless Steel</p>
        </div>
        <div class="rpic3">
          <p class="rpictext">Making Of Stainless Steel</p>
        </div>
        <div class="rpic4">
          <p class="rpictext">Stainless Academy</p>
        </div>
      </div>
      <div class="solution">
        <h1 class="sol-h" data-aos="fade-up">
          SOLUTIONS
        </h1>
        <p class="sol-b" data-aos="fade-up">
          We understand that producing stainless steel is only the first step to
          creating a versatile world. Here, we offer the next steps to help
          bridge the gap between you and your stainless future.
        </p>
      </div>
      <div class="building">
        <div class="grid" data-aos="fade-up">
          <div class="box">
            <div class="box-h">Press Releases</div>
            <div class="box-b">
              Steel export duty may be lifted this quarter
            </div>
          </div>
          <div class="box">
            <div class="box-h">Press Releases</div>
            <div class="box-b">
              RVS Agency to provide 3,500 MT stainless steel…
            </div>
          </div>
          <div class="box">
            <div class="box-h">Press Releases</div>
            <div class="box-b">
              Steel prices have hit the bottom, says industry…
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-grid">
          <div class="footer-content">
            <h3 class="fc-h">A WORLD OF STAINLESS STEEL</h3>
            <h5 class="fc-b">Making of Stainless Steel</h5>
            <h5 class="fc-b">Magic of Stainless Steel</h5>
            <h5 class="fc-b">Applications of Stainless Steel</h5>
            <h5 class="fc-b">Stainless Academy</h5>
          </div>
          <div class="footer-content">
            <h3 class="fc-h">MEDIA</h3>
            <h5 class="fc-b">Press Releases</h5>
            <h5 class="fc-b">In the News</h5>
            <h5 class="fc-b">Media contact</h5>
            <h5 class="fc-b">Blog</h5>
          </div>
          <div class="footer-content">
            <h3 class="fc-h">CONTACT</h3>
            <h5 class="fc-b">Office</h5>
            <h5 class="fc-b">Buissiness Query</h5>
            <h5 class="fc-b">Login</h5>
          </div>
          <div class="footer-content">
            <h3 class="fc-h">NEWSLETTER</h3>
            <h5 class="fc-b1">
              Sign Up to recieve our newsletters and latest updates.
            </h5>
            <input
              type="email"
              class="newsletter"
              placeholder="Enter Your Email ID"
            ></input>
            <button class="newsletter-button">SUBSCRIBE</button>
          </div>
        </div>
        <div class="footer-end">
          <p class="fe-txt">
            Thank you. We hope your experience was excellent and we can’t wait
            to see you again soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
