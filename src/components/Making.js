import {React} from 'react';

import '../css/Making.css';



const Making=()=>{

  let b = "el01";
  let c = "el07";
  let d = "el13";
  function show(a) {
    // document.getElementById("el01").style.display = "none";
    document.getElementById(b).style.display = "none";
    document.getElementById(a).style.display = "grid";
    b = a;
  }
  function show1(a) {
    // document.getElementById("el01").style.display = "none";
    document.getElementById(c).style.display = "none";
    document.getElementById(a).style.display = "grid";
    c = a;
  }
  function show2(a) {
    // document.getElementById("el01").style.display = "none";
    document.getElementById(d).style.display = "none";
    document.getElementById(a).style.display = "grid";
    d = a;
  }

   

    return (
        <div className='making'>
            <div class="el-1">
      <h1 class="heading">Process of Making Stainless Steel</h1>
    </div>
    <div class="el-2">
      <ul class="lists">
        <li onClick={()=>{show("el01")}}>01</li>
        <li onClick={()=>{show("el02")}}>02</li>
        <li onClick={()=>{show('el03')}}>03</li>
        <li onClick={()=>{show('el04')}}>04</li>
        <li onClick={()=>{show('el05')}}>05</li>
        <li onClick={()=>{show('el06')}}>06</li>
      </ul>
      <div class="info">
        <div id="el01" class="pt01">
          <div class="textCont">
            <h1 class="tex">Raw materials</h1>
            <div class="bottomline"></div>
            <h4>Raw materials used are</h4>
            <h3>
              <strong
                >stainless steel scrap, iron, nickel and chromium.
              </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/Raw-materials-image.jpg"
          />
        </div>
        <div id="el02" class="pt01">
          <div class="textCont">
            <h1 class="tex">EAF</h1>
            <h4>These substances are added into an</h4>
            <h3>
              <strong
                >Electric Arc Furnace (EAF) where electrodes heat the mix to its
                melting point.
              </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/EAF-image.jpg"
          />
        </div>
        <div id="el03" class="pt01">
          <div class="textCont">
            <h1 class="tex">AOD Converter</h1>
            <h4>
              The AOD minimises undesired oxidation and removes excess carbon
              from the mix.
            </h4>
            <h3>
              <strong
                >Electric Arc Furnace (EAF) where electrodes heat the mix to its
                melting point.
              </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/AOD-Converter-image.jpg"
          />
        </div>
        <div id="el04" class="pt01">
          <div class="textCont">
            <h1 class="tex">Vacuum Oxygen Decarburization</h1>
            <h4>
              The mix is then treated in a tank degassing unit which is
              additionally equipped with an oxygen blowing lance. Due to reduced
              carbon monoxide partial pressure under vacuum condition, this
              process helps in
            </h4>
            <h3>
              <strong
                >reducing the carbon content of high alloyed stainless steel
                grades.
              </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/Vacuum-Oxygen-image.jpg"
          />
        </div>
        <div id="el05" class="pt01">
          <div class="textCont">
            <h1 class="tex">Continuous Casting</h1>
            <h4>The stainless steel mix is</h4>
            <h3>
              <strong
                >cast into stainless steel slabs and blooms through a process
                called continuous casting.
              </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/Casting-image.jpg"
          />
        </div>

        <div id="el06" class="pt01">
          <div class="textCont">
            <h1 class="tex">Grinding</h1>
            <h4>The stainless steel slabs/blooms go through a</h4>
            <h3>
              <strong
                >grinding process to remove any surface defect that has occurred
                during casting.
              </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/Grinding-image.jpg"
          />
        </div>
        
        
        
        
       
       
        
      </div>
      </div>
   
    <div class="el-3">
      <ul class="lists">
        <li onClick={()=>{show1('el07')}}>07</li>
        <li onClick={()=>{show1('el08')}}>08</li>
        <li onClick={()=>{show1('el09')}}>09</li>
        <li onClick={()=>{show1('el10')}}>10</li>
        <li onClick={()=>{show1('el11')}}>11</li>
        <li onClick={()=>{show1('el12')}}>12</li>
      </ul>
      <div class="info">
        <div id="el07" class="pt01">
          <div class="textCont">
            <h1 class="tex">Reheating</h1>
            <div class="bottomline"></div>
            <h4>
              The stainless steel slabs are then reheated due to which a rusty
              scale (oxide) is accumulated on the surface. This scale is removed
              from the surface by
            </h4>
            <h3>
              <strong
                >high pressure water jets in a process called as Descaling
              </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/Reheating-image.jpg"
          />
        </div>
        <div id="el08" class="pt01">
          <div class="textCont">
            <h1 class="tex">Roughing Mill</h1>
            <h4>
              The stainless steel slab is then sent back and forth through the
              Roughing Mill to
            </h4>
            <h3>
              <strong
                >reduce its thickness and increase its length, without changing
                its width.
              </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/Roughing-img.jpg"
          />
        </div>
        <div id="el09" class="pt01">
          <div class="textCont">
            <h1 class="tex">Finishing Mill</h1>
            <h4>Having acquired the shape of a sheet, it is now sent to</h4>
            <h3>
              <strong
                >further thinning in the Finishing Mill, depending on customer'
                requirement.
              </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/Finishing-image.jpg"
          />
        </div>

        <div id="el10" class="pt01">
          <div class="textCont">
            <h1 class="tex">Coiling</h1>
            <h4>
              These stainless steel slabs are now turned into plates (~20 mm
              thickness) or coils (~6 mm thickness) as per order after
            </h4>
            <h3>
              <strong>several intermediate processes. </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/Coiling-image.jpg"
          />
        </div>

        <div id="el11" class="pt01">
          <div class="textCont">
            <h1 class="tex">Annealing</h1>
            <h4>
              The hot rolled (HR) coil undergoes a thermal process called
              annealing, in which the metal is given a consistent, uniform
              internal structure and homogeneous properties. This helps to
            </h4>
            <h3>
              <strong
                >improve the mechanical stability and corrosion-resistance of
                the coil.
              </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/Casting-image.jpg"
          />
        </div>

        <div id="el12" class="pt01">
          <div class="textCont">
            <h1 class="tex">Pickling</h1>
            <h4>
              The stainless steel coil then goes through a chemical process,
              Pickling, in which mill scales,
            </h4>
            <h3>
              <strong
                >surface oxides, and annealing oxides are removed.
              </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/Grinding-image.jpg"
          />
        </div>
       
        
        
        
        
        
      </div>
    </div>
   
    <div class="el-4">
      <ul class="lists">
        <li onClick={()=>{show2('el13')}}>13</li>
        <li onClick={()=>{show2('el14')}}>14</li>
        <li onClick={()=>{show2('el15')}}>15</li>
        <li onClick={()=>{show2('el16')}}>16</li>
        <li onClick={()=>{show2('el17')}}>17</li>
      </ul>
      <div class="info">

        <div id="el13" class="pt01">
          <div class="textCont">
            <h1 class="tex">Quality Testing</h1>
            <div class="bottomline"></div>
            <h4 class="lel">
              There is quality testing at each stage of production, where a
              sample is taken from the product, and sent to labs for physical
              and chemical examination.
            </h4>
            <h3>
              <strong
                >Each gram of our stainless steel is planned to perfection.
              </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/Quality-Control.jpg"
          />
        </div>

        <div id="el14" class="pt01">
          <div class="textCont">
            <h1 class="tex">HRAP/CRAP coils</h1>
            <h4 class="lel">
              The resultant product is called Hot Rolled Annealed Pickled (HRAP)
              stainless steel coil which goes either directly to the customer,
              or to be made into
            </h4>
            <h3>
              <strong
                >Cold Rolled Annealed Pickled (CRAP) stainless steel coil.
              </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/HRAP.jpg"
          />
        </div>

        <div id="el15" class="pt01">
          <div class="textCont">
            <h1 class="tex">Customization</h1>
            <h4>
              CRAP coil goes through several production processes aimed at
              customising surface finish, thickness, product chemistry and
              mechanical properties.
            </h4>
            <h3>
              <strong
                >Different kinds of stainless steel finishes such as CR, BA, and
                2D/2B are produced during these processes.
              </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/Customization.jpg"
          />
        </div>


        <div id="el16" class="pt01">
          <div class="textCont">
            <h1 class="tex">Slitting</h1>
            <h4>
              The stainless steel coils in Cold Rolling Division are reduced to
            </h4>
            <h3>
              <strong
                >different widths as per the customer requirement.
              </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/Slitting.jpg"
          />
        </div>

        <div id="el17" class="pt01">
          <div class="textCont">
            <h1 class="tex">SPD</h1>
            <h4>
              For specialised applications and products such as coin blanks,
              strips for razor blades, and precision strips up to 0.05 mm
              thickness, our Special Product Division produces
            </h4>
            <h3>
              <strong>highly sophisticated stainless steel products. </strong>
            </h3>
          </div>
          <img
            src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2022/03/SPD.jpg"
          />
        </div>
        
        
        
        
        
      </div>
    </div>
    <footer>
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
    </footer>

        </div>
        
    )
}



export default Making;