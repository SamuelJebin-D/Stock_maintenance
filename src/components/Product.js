import {React, useEffect} from 'react';

import '../css/Products.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from "../resource/slabs-product-img.jpg";
import img2 from "../resource/HR-Coils-product-img.jpg"; 
import img3 from "../resource/CR-Coils-product-img.jpg" ;
import img4 from "../resource/Plates-product-img.jpg";
import img5 from "../resource/Grades-img.jpg" ;
import img6 from "../resource/quality-tech-img.jpg";
import img7 from "../resource/research-dev-img.jpg";

const Product=()=>{


    useEffect(()=>{
        var a1=document.getElementById("a1");
    var a2=document.getElementById("a2");
    var a3=document.getElementById("a3");
    var a4=document.getElementById("a4");
    var a5=document.getElementById("a5");
    var a6=document.getElementById("a6");
    var a7=document.getElementById("a7");
    
    
    var img1=document.getElementById("img1");
    var img2=document.getElementById("img2");
    var img3=document.getElementById("img3");
    var img4=document.getElementById("img4");
    var img5=document.getElementById("img5");
    var img6=document.getElementById("img6");
    var img7=document.getElementById("img7");
    
    
    function display(){
      var p=document.getElementById("p");
      p.innerHTML="";
      var slab=document.createElement("h1");
      slab.innerHTML="Slabs";
      slab.style.fontWeight="bolder";
      slab.style.fontSize="3vw";
      p.appendChild(slab);
    
    
    var par=document.createElement("p");
    par.innerHTML="A single strand slab caster at steel melt shop casts stainless steel slabs. Liquid steel is produced through electric arc furnace (EAF)-AOD Convertor-ladle refining furnace route.";
    par.style.lineHeight=1.5;
    p.appendChild(par);
    
      img1.style.display="block";
      img2.style.display="none";
      img3.style.display="none";
      img4.style.display="none";
      img5.style.display="none";
      img6.style.display="none";
      img7.style.display="none";
      a1.style.backgroundColor="orange";
      a2.style.backgroundColor="#1b1a1b";
      a3.style.backgroundColor="#1b1a1b";
      a4.style.backgroundColor="#1b1a1b";
      a5.style.backgroundColor="#1b1a1b";
      a6.style.backgroundColor="#1b1a1b";
      a7.style.backgroundColor="#1b1a1b";
    
    
    }
    
    function display2(){
        var p=document.getElementById("p");
        p.innerHTML="";
      var slab=document.createElement("h1");
      slab.innerHTML="Hot Rolled Coils";
      slab.style.fontWeight="bolder";
      slab.style.fontSize="3vw";
      p.appendChild(slab);
    
    
    var par=document.createElement("p");
    par.innerHTML="HR Black : As cast/ ground stainless steel slabs are first heated and soaked in reheating furnace, they are rolled to intermediate thickness in the roughing mill, and then to the final thickness in the tandem mill. Hot Strip Mill is also equipped with online surface inspection machine for detection of surface flaws during hot rolling of strips.<br><br>Hot rolled stainless steel coils are annealed and pickled in continuous annealing-pickling lines having scale breaker, shot blasting unit, sulphuric acid, and mixed acid bath. HRAP coils have a cleaner surface and have improved mechanical properties for downstream processing. HRAP line is also equipped with online reduction for providing product in 2E finish.";
    par.style.lineHeight=1.5;
    p.appendChild(par);
    
    
      img2.style.display="block";
      img1.style.display="none";
      img3.style.display="none";
      img4.style.display="none";
      img5.style.display="none";
      img6.style.display="none";
      img7.style.display="none";
      a2.style.backgroundColor="orange";
      a1.style.backgroundColor="#1b1a1b";
      a3.style.backgroundColor="#1b1a1b";
      a4.style.backgroundColor="#1b1a1b";
      a5.style.backgroundColor="#1b1a1b";
      a6.style.backgroundColor="#1b1a1b";
      a7.style.backgroundColor="#1b1a1b";
    }
    
    
    function display4(){
        var p=document.getElementById("p");
        p.innerHTML="";
      var slab=document.createElement("h1");
      slab.innerHTML="Plates";
      slab.style.fontWeight="bolder";
      slab.style.fontSize="3vw";
      p.appendChild(slab);
    
    
    var par=document.createElement("p");
    par.innerHTML="No 1 finish plates in stainless steel are produced after annealing and pickling, or by cutting hot rolled annealed pickled coils to desired lengths.";
    par.style.lineHeight=1.5;
    p.appendChild(par);
    
    
      img4.style.display="block";
      img1.style.display="none";
      img2.style.display="none";
      img3.style.display="none";
      img5.style.display="none";
      img6.style.display="none";
      img7.style.display="none";
      a4.style.backgroundColor="orange";
      a2.style.backgroundColor="#1b1a1b";
      a3.style.backgroundColor="#1b1a1b";
      a1.style.backgroundColor="#1b1a1b";
      a5.style.backgroundColor="#1b1a1b";
      a6.style.backgroundColor="#1b1a1b";
      a7.style.backgroundColor="#1b1a1b";
    }
    
    
    function display3(){
        var p=document.getElementById("p");
        p.innerHTML="";
      var slab=document.createElement("h1");
      slab.innerHTML="Cold Rolled Coils";
      slab.style.fontWeight="bolder";
      slab.style.fontSize="3vw";
      p.appendChild(slab);
    
    
    var par=document.createElement("p");
    par.innerHTML="Our stainless steel cold rolling facility is equipped with all state-of-art facilities like 20-Hi-Sendzimier Cold Rolling Mill with IMR Shifting, Mill Tilting and Shape meter advantages for higher degree of shape & profile correction. The CR Annealing & Pickling line is on environment friendly LPG fuel with better temperature control, associated with Electrolytic and Acid Pickling with very high control on pickling process. The online Skin Pass and Tension Leveling has made this line capable of producing finished 2B/2D stainless steel products at par with international quality. The on-line automatic surface inspection system also provides a very high resolution surface quality. The Skin Pass Mills help cater to high luster requirements. Other facilities include Bright Annealing units and Strip Grinding line to produce desired surface finishes of stainless steel products.";
    par.style.lineHeight=1.5;
    p.appendChild(par);
      
      img3.style.display="block";
      img1.style.display="none";
      img2.style.display="none";
      img4.style.display="none";
      img5.style.display="none";
      img6.style.display="none";
      img7.style.display="none";
      a3.style.backgroundColor="orange";
      a2.style.backgroundColor="#1b1a1b";
      a1.style.backgroundColor="#1b1a1b";
      a4.style.backgroundColor="#1b1a1b";
      a5.style.backgroundColor="#1b1a1b";
      a6.style.backgroundColor="#1b1a1b";
      a7.style.backgroundColor="#1b1a1b";
    }
    
    
    function display5(){
        var p=document.getElementById("p");
        p.innerHTML="";
      var slab=document.createElement("h1");
      slab.innerHTML="Grades";
      slab.style.fontWeight="bolder";
      slab.style.fontSize="3vw";
      p.appendChild(slab);
    
    
    var par=document.createElement("p");
    par.innerHTML="<b>Data Sheets</b><br>The following data sheets can be used as a reference for a better understanding of different stainless steel grades and product information:<br><u>200 series of Stainless Steel products</u><br>300 series of Stainless Steel products<br>400 series of Stainless Steel products<br>Duplex grade of Stainless Steel<b><br><br>Product Range</b><br>Jindal Stainless is a name synonymous with unparalleled quality assurance for stainless steel flat products across all grades. Take a look at our various stainless steel grades, sizes, and finishes.<br>Product Range<br>Product Brochure<br><br><b><u>Terms & Conditions of Sales</u></b><br><br><b><u>Terms & Conditions for Co-branding in Pipe and Tube Segment</u></b><br><br><b>Business Query<br></b><u>Enquiry Form</u><u>Feedback</u><u>Customer Login</u>";
    par.style.lineHeight=1.5;
    p.appendChild(par);
     
        img5.style.display="block";
      img1.style.display="none";
      img2.style.display="none";
      img3.style.display="none";
      img4.style.display="none";
      img6.style.display="none";
      img7.style.display="none";
      a5.style.backgroundColor="orange";
      a2.style.backgroundColor="#1b1a1b";
      a3.style.backgroundColor="#1b1a1b";
      a4.style.backgroundColor="#1b1a1b";
      a1.style.backgroundColor="#1b1a1b";
      a6.style.backgroundColor="#1b1a1b";
      a7.style.backgroundColor="#1b1a1b";
    }
    
    
    
    function display6(){
        var p=document.getElementById("p");
      p.innerHTML="";
      var slab=document.createElement("h1");
      slab.innerHTML="Quality & Technology";
      slab.style.fontWeight="bolder";
      slab.style.fontSize="3vw";
      p.appendChild(slab);
    
    
    var par=document.createElement("p");
    par.innerHTML="<br>Process Flow</br>Steel is produced from iron ore or scrap. Iron ore is a mineral aggregate that can be converted economically into iron. The quality of the iron ore is mainly determined by its composition; a high iron content and low sulphur and phosphorus contents are favorable. Iron ore can be found all over the world, but its iron content varies.    Steel scrap has been selectively collected for several decades and is recycled as a valuable raw material for steel production.";
    par.style.lineHeight=1.5;
    p.appendChild(par);
      
      img6.style.display="block";
      img1.style.display="none";
      img2.style.display="none";
      img3.style.display="none";
      img4.style.display="none";
      img5.style.display="none";
      img7.style.display="none";
      a6.style.backgroundColor="orange";
      a2.style.backgroundColor="#1b1a1b";
      a3.style.backgroundColor="#1b1a1b";
      a4.style.backgroundColor="#1b1a1b";
      a5.style.backgroundColor="#1b1a1b";
      a1.style.backgroundColor="#1b1a1b";
      a7.style.backgroundColor="#1b1a1b";
    }
    
    function display7(){
        var p=document.getElementById("p");
      p.innerHTML="";
      var slab=document.createElement("h1");
      slab.innerHTML="Research & Development";
      slab.style.fontWeight="bolder";
      slab.style.fontSize="3vw";
      p.appendChild(slab);
    
    
    var par=document.createElement("p");
    par.innerHTML="The R&D division plays a pivotal role in retaining the position of Jindal Stainless as India's largest stainless steel manufacturing company. This is achieved through continuous upgradation of quality, processes, services, and product innovation to develop new stainless steel products at competitive costs. Cross-fertilization of knowledge between production, quality control, and commercial units, in order to maintain global standards, has been the guiding principle of the R&D function at Jindal Stainless.<br>Development of high value products to serve niche markets<br>Quality upgradation of existing products to enable enhanced global acceptance<br>Cost reduction by process development, optimisation, and refinement to provide a consistent competitive edge to the Company<br>Technology enhancement to increase quality production<br>Foster growth and develop new market segments through knowledge sharing with customers and assist them in their operations and applications of our products<br>In addition to the above, the R&D division closely interacts with reputed national and international laboratories, scientific institutions, and universities to avail expert services and knowledge for critical investigations.";
    par.style.lineHeight=1.5;
    p.appendChild(par);
      
      img7.style.display="block";
      img1.style.display="none";
      img2.style.display="none";
      img3.style.display="none";
      img4.style.display="none";
      img5.style.display="none";
      img6.style.display="none";
      a7.style.backgroundColor="orange";
      a2.style.backgroundColor="#1b1a1b";
      a3.style.backgroundColor="#1b1a1b";
      a4.style.backgroundColor="#1b1a1b";
      a5.style.backgroundColor="#1b1a1b";
      a6.style.backgroundColor="#1b1a1b";
      a1.style.backgroundColor="#1b1a1b";
    
    }



    display();
    a1.addEventListener("click",display);
    a2.addEventListener("click",display2);
    a3.addEventListener("click",display3);
    a4.addEventListener("click",display4);
    a5.addEventListener("click",display5);
    a6.addEventListener("click",display6);
    a7.addEventListener("click",display7);
    },[])

    useEffect(()=>{
        AOS.init({duration:800});
    },[]);
    

    return(
        <div>
            <div id="first"  >
        <div id="content" data-aos="fade-up">
           
            <div id="products" data-aos="fade-down" data-aos-duration="1000"><h1>Products</h1></div>
            <div id="para" data-aos="fade-up" data-aos-duration="1000"><p>RVS Agency is India’s largest manufacturer of stainless steel in 200, 300, 400 and duplex stainless steel products. Our product range includes stainless steel slab, bloom, coils, plates, sheets, precision strips, blade steel, and coin blanks. An experience of ﬁve decades, a clear focus on customer needs, cross market expertise, a wide range of products and modern technology have been the mainstay of our success.</p></div>
        </div>
    </div>
    <div id="product-line">Product line</div>
    <div id="list">
        
            <div id="a1">
                Slab
            </div>
            <div id="a2">
                Hot Rolled <br/>(HR) Coils
            </div>
            <div id="a3">
                Cold Rolled(CR) Coils
            </div>
            <div id="a4">
                Plates
            </div>
            <div id="a5">
                Grades
            </div>
            <div id="a6">
                Quality & Technology
            </div>
            <div id="a7">
                Reasearch & Development
            </div>
            
    
    </div>
    <div id="info">
        <img src={img1} id="img1"/>
        <img src={img2} id="img2"/>
        <img src={img3} id="img3"/>
        <img src={img4} id="img4"/>
        <img src={img5} id="img5"/>
        <img src={img6} id="img6"/>
        <img src={img7} id="img7"/>
        <p id="p"></p>
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


export default Product;