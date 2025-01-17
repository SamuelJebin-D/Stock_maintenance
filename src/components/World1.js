import {React, useEffect} from 'react';

import '../css/applications_of_stainless_steel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const World1=()=>{


    useEffect(()=>{
        AOS.init({duration:800});
    },[]);

    function expand(){
        document.getElementsByClassName("div2_disp")[0].classList.toggle("hide");
        document.getElementsByClassName("div2_dispa")[0].classList.toggle("hide");
        document.getElementsByClassName("div2_ndisp")[0].classList.toggle("showme");
        document.getElementsByClassName("div2_ndispa")[0].classList.toggle("showme");
        document.getElementById("div1_div1").classList.toggle("reduce");
        document.getElementById("div1_div2").classList.toggle("reduce");
    }

    return(
        <div>
            <div id="initial">
 <div id="start">
    <div id="app_div1">
        <div id="div1_div1" data-aos="fade-up">
            <h2>Applications of</h2>
            <h2>Stainless Steel</h2>
        </div>
        <div id="div1_div2" data-aos="fade-up">
            <p>Limited to usage in kitchens alone earlier, stainless steel is now increasingly making its
                <span class="div2_disp">...</span>
                <a class="div2_dispa"  onClick={expand}>{'>>>'}</a>
                <span class="div2_ndisp">
                    presence felt in domains we could not have imagined a few decades ago.
                    Perhaps this is the reason why stainless steel has been the fastest growing metal for over two decades. 
                    Today, stainless steel has already established itself in sectors like automotives, railways and transport (ART); 
                    architecture, building and construction (ABC); chemical &amp; 
                    petrochemical industries, capital goods, kitchenware, and food processing industries. 
                </span>
                <a class="div2_ndispa"  onClick={expand}>{'<<<'}</a>
            </p>
        </div>
    </div>
    <div id="app_div2">
        <div id="div2_div1">
            <div id="div2_div1_d1" class="d2_d1_d2">
                <a  href="#div3_div2">
                    <h3>Architecture, <br/>
                        Building & <br/>
                        Construction
                    </h3>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/Architecture-icon.svg" alt=""/>
                </a>
            </div>
            <div id="div2_div1_d2" class="d2_d1_d1">
                <a  href="#div3_div2">
                    <h3 >Automotive & Transport</h3>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/Auto-icon.svg" alt=""/>
                </a>
            </div>
            <div id="div2_div1_d3" class="d2_d1_d2">
                <a  href="#div3_div2">
                    <h3>Railway</h3>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/Railway.svg" alt=""/>
                </a>
            </div>
            <div id="div2_div1_d4" class="d2_d1_d1">
                <a  href="#div3_div2">
                    <h3>Consumer <br/>Durables</h3>
                    <img src="	https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/consumerdurables-icon.svg" alt=""/>
                </a>
            </div>
            <div id="div2_div1_d5" class="d2_d1_d2">
                <a  href="#div3_div2">
                    <h3>Process<br/>Industry</h3>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/Chemical.svg" alt=""/>
                </a>
            </div>
            <div id="div2_div1_d6" class="d2_d1_d1">
                <a  href="#div3_div2">
                    <h3>Precision Strip <br/>& Blade Steel</h3>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/blade-icon.svg" alt=""/>
                </a>
            </div>
            <div id="div2_div1_d7" class="d2_d1_d2">
                <a href="#div3_div2">
                    <h3>Coin<br/>Blanks</h3>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/CoinBlanks-icon.svg" alt=""/>
                </a>
            </div>
            <div id="div2_div1_d8" class="d2_d1_d1">
                <a  href="#div3_div2">
                    <h3>Nuclear <br/>Applications</h3>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/Nuclear-icon.svg" alt=""/>
                </a>
            </div>
            <div id="div2_div1_d9" class="d2_d1_d2">
                <a  href="#div3_div2">
                    <h3>Plumbing</h3>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/Plumbing-icon.svg" alt=""/>
                </a>
            </div>
        </div>
    </div>
    <div id="app_div3">
        <div id="div3_div1">
            <h2>Stainless Uses</h2>
            <p>
               Stainless steel is 100 percent recyclable, easy to sterilize, and used in many applications. 
               In fact, ordinary citizens interact with products made of stainless steel on a daily basis.
               Whether we're&nbsp;in the kitchen, on the road, at the doctor's office, or in our buildings, stainless steel is there too. 
               Today, I'll be covering some of the common traits, products, and applications of this versatile metal. 
               Hit save when you are done.&nbsp;
            </p>
        </div>
        <div id="div3_div2">
            <h2>Key Advantages of <br/>Stainless Stell</h2>
            <div id="div3_div2_d1">
                <div>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/auto-adv-icon.svg" alt=""/>
                    <p>Corrosion resisant</p>
                </div>
                <div>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/nuclear-adv-icon2.svg" alt=""/>
                    <p>High temperature resistant</p>
                </div>
                <div>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/nuclear-adv-icon3.svg" alt=""/>
                    <p>Pressure resistant</p>
                </div>
                <div>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/nuclear-adv-icon4.svg" alt=""/>
                    <p>Chemically inert</p>
                </div>
                <div>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/nuclear-adv-icon5.svg" alt=""/>
                    <p>Extended life</p>
                </div>
                <div>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/nuclear-adv-icon6.svg" alt=""/>
                    <p>~100% recyclable</p>
                </div>
                <div>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/nuclear-adv-icon7.svg" alt=""/>
                    <p>Low-maintenance</p>
                </div>
                <div>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/nuclear-adv-icon8.svg" alt=""/>
                    <p>Low life cycle cost</p>
                </div>
            </div>
        </div>
        <div id="div3_div3">
            <h2>Applications of Stainless Steel</h2>
            <div id="div3_div3_d1">
                <div>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/Fission-Reactors.jpg" alt=""/>
                    <p>Fission Reactors</p>
                </div>
                <div>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/Pipelines-tubes-img.jpg" alt=""/>
                    <p>Pipelines and Tubes</p>
                </div>
                <div>
                    <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/Railway-metro.jpg" alt=""/>
                    <p>Metro</p>
                </div>
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
                <h5 class="fc-b1">Sign Up to recieve our newsletters and latest updates.</h5>
                <input type="email" class="newsletter" placeholder="Enter Your Email ID"></input>
                <button class="newsletter-button">SUBSCRIBE</button>
            </div>
        </div>
        <div class="footer-end">
            <p class="fe-txt">Thank you. We hope your experience was excellent and we can’t wait to see you again soon.</p>
        </div>
    </div>
</div>

        </div>
    );

}



export default World1;