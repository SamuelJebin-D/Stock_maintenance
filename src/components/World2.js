import {React,useEffect}  from 'react';

import '../css/stainless_activity.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const World2=()=>{

    function expand(){
        document.getElementsByClassName("div2_disp")[0].classList.toggle("hide");
        document.getElementsByClassName("div2_dispa")[0].classList.toggle("hide");
        document.getElementsByClassName("div2_ndisp")[0].classList.toggle("showme");
        document.getElementsByClassName("div2_ndispa")[0].classList.toggle("showme");
        document.getElementById("div1_div1").classList.toggle("reduce");
        document.getElementById("div1_div2").classList.toggle("reduce");
    }

    useEffect(()=>{
        AOS.init({duration:800});
    },[]);

    return (
        <div>
            <div id='start'>
            <div id="act_div1">
        <div id="div1_div1" data-aos="fade-up" >
            <h2>Stainless Academy</h2>
        </div>
        <div id="div1_div2" data-aos="fade-up">
            <p>While manufacturing world-class stainless steel products is our specialty, educating and enabling the society 
                <span class="div2_disp">...</span>
                <a class="div2_dispa"  onClick={expand}>{'>>>'}</a>
                <span class="div2_ndisp">
                    to adopt the ‘metal of the future’ is our responsibility.
                    As India’s largest stainless steel producer, Jindal Stainless has laid out several initiatives to 
                    advocate and popularize the usage and benefits of stainless steel for end-customers and fabricators.
                    It’s only through the development of complete stainless steel ecosystem that we can 
                    lead our country into a stainless future.
                </span>
                <a class="div2_ndispa"  onClick={expand}>{'<<<'}</a>
            </p>
        </div>
    </div>
    <div id="act_div2">
        <div id="div2_div1">
            <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/Fabricator-Training-Prog.jpg" alt=""/>
            <div>
                <a href="">
                    <h2>Industrial &<br/>Fabricator<br/>Training<br/>programmes</h2>
                    <button>Explore</button>
                </a>
            </div>
        </div>
        <div id="div2_div2">
            <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/Stainless-Academy.jpg" alt=""/>
            <div>
                <a href="" >
                    <h2 id="k">Showcase Vans</h2>
                    <button>Explore</button>
                </a>
            </div>
        </div>
        <div id="div2_div3">
            <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/Stainless-Steel-Course.jpg" alt=""/>
            <div>
                <a href="">
                    <h2 id="j">Stainless Steel<br/>Courses</h2>
                    <button>Explore</button>
                </a>
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
        
    );

}


export default World2;