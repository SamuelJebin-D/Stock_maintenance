import {React, useEffect}  from 'react';

import '../css/Career.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Career=()=>{

    
    useEffect(()=>{
        AOS.init({duration:800});

        var life=document.getElementById("life");
    var op=document.getElementById("op");
    var tl=document.getElementById("tl");


    var d1=document.getElementById("d1");
    var d2=document.getElementById("d2");
    var d3=document.getElementById("d3");
    function display(){
        d1.style.display="none";
        d2.style.display="block";
        d3.style.display="none";
    }
    function display1(){
        d1.style.display="none";
        d2.style.display="none";
        d3.style.display="block";
    }
    function display2(){
        d1.style.display="block";
        d2.style.display="none";
        d3.style.display="none";
    }
    life.addEventListener("click",display);
    op.addEventListener("click",display1);
    tl.addEventListener("click",display2);
    


    },[]);

    
    return (
        <div>
            <div id="first1">
        <div id="content">
           
            <div id="products" data-aos="fade-down" data-aos-duration="1000"><h1>Careers</h1></div>
            <div id="para" data-aos="fade-up" data-aos-duration="1000"><p>Employees are the building blocks of RVS Agency. We hire and retain the best talent in the industry through our institutionalized HR processes and practices, which is perhaps what makes us one of the most preferred employers in our sector. Innovation and excellence are an inherent part of our company culture, and act as the foundation stones for exciting career growth opportunities at RVS Agency.</p></div>
        </div>
    </div>


    <div id="option">
        <div>
            <br></br><div id="life">Life at<br></br>RVS Agency</div><br></br>
        <br></br><div id="op">Oppurtunities at <br></br>RVS Agency</div><br></br>
        <br></br><div id="tl">Talent <br></br>Management</div>
        </div>
        <div>
        <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2020/09/life-jindal.jpg" alt=""/>
        </div>
    </div>


    <div id="d1">
        <div id="p1">
            <p>Employees are the building blocks of RVS Agency. We hire and retain the best talent in the industry through our institutionalized HR processes and practices, which is perhaps what makes us one of the most preferred employers in our sector. Innovation and excellence are an inherent part of our company culture, and act as the foundation stones for exciting career growth opportunities at RVS Agency.</p>
        </div>
        <div id="c">
            <div id="c1">
                    <h3>Resourcing</h3>
                    <p></p>
                    <p>The resourcing policy at RVS Agency aims at attracting the right talent to fit specific roles. We focus on a blend of experience with fresh energy and outlook. Competency-based recruitment process at RVS Agency measures technical expertise, leadership capabilities, and cultural fit. We encourage diversity in our talent pool by recruiting people with complementary skills and also have an active employee referral scheme.</p>
            </div>
            <div id="c2">
                <h3>Career Progression</h3>
                <p></p>
                <p>New challenges, learning programs, and leadership opportunities offer an ambitious career path at RVS Agency. Our competency based Career Progression system counts on the potential of employees, along with their performance, to take up higher responsibilities.</p>

            </div>
            <div id="c3">
                <h3>Communication</h3>
                <p></p>
                <p>Transparency within the organization is embodied in all practices and processes at RVS Agency. Departmental meetings, open forums, and newsletters keep employees and customers updated. The Company also focuses on a culture of informal communication between leadership and customers. Initiatives like ‘Coffee with MD' and ‘MD Sampark’ allow cross-functional employee representations for interaction sessions directly with the Managing Director.</p>

            </div>
        </div>
    </div>



    <div id="d2">
        <div id="p2">
            <p>Employees are the building blocks of RVS Agency. We hire and retain the best talent in the industry through our institutionalized HR processes and practices, which is perhaps what makes us one of the most preferred employers in our sector. Innovation and excellence are an inherent part of our company culture, and act as the foundation stones for exciting career growth opportunities at RVS Agency.</p>
        </div>
        <h1 id="facilities">Facilities</h1>
        <div id="cp">
            <div id="cp1">
                    <h3>Accommodation</h3>
                    <p></p>
                    <p>At RVS Agency, employees are made to feel at home with proper accommodation facilities and all amenities. There are hostel facilities at both the locations- Hisar and Odisha - for GETs (Graduate Engineer Trainees) and DETs (Diploma Engineer Trainees). Women employees have separate hostels and are provided pick and drop facility.</p>
            </div>
            <div id="cp2">
                <h3>Education</h3>
                <p></p>
                <p>RVS Agency focus on providing best quality education to the employees’ wards and the community at large. Wards of employees with a low level of income are provided free or concessional education.</p>

            </div>
            <div id="cp3">
                <h3>Medical Assistance</h3>
                <p></p>
                <p>We provide basic medical care at our premises through an occupational health center, manned by a competent doctor and a core team. All the employees are covered through medical insurance.Apart from this, immunization for employees’ children is available on a free/subsidized basis.</p>

            </div>
            <div id="cp4">
                <h3>Employee Welfare Scheme</h3>
                <p></p>
                <p>Our employee welfare scheme provides financial assistance to the employee/their family in the case of death/permanent total disablement of an employee, along with medical treatment for self and dependants and assistance during natural calamities. It also provides retirement benefits to all regular employees. In case of death of a regular employee, while in service, the family will continue to get an ex-gratia amount as specified up to a pre-defined time period.</p>
            </div>
        </div>
        <h1 id="recreation">Recreation</h1>
        <div id="rs">
            <div id="rs1">
                <h3>Stainless Club,Hisar</h3>
                <p></p>
                <p>One of the premium facilities at RVS Agency is the Stainless Club in Hisar. Spread over five acres of lush greenery, it offers a host of state-of-the-art recreational facilities - swimming pool, gymnasium, tennis court, badminton court, basketball court, indoor games, jogging tracks, children’s park, free Internet service, restaurant, party rooms, audio-video rooms, etc.</p>
        </div>
        <div id="rs2">
            <h3>Community Lunches</h3>
            <p></p>
            <p>organizes community lunches on a regular basis. Get-togethers for employees are organized each year in January. Founder’s day is celebrated across the company on August 7 each year with cultural programs, commemorations, large scale lunches, community social activities, contests, recognition for employees etc.</p>
        </div>
        <div id="rs3">
            <h3>Cultural Events</h3>
            <p></p>
            <p>With the objective of fostering employee engagement and creating a joyous environment, different committees at respective locations are formed to organize various cultural events for employees and members. The purpose of these events are to boost employees’ energy and motivation by bringing them together on a single platform.</p>
        </div>
        </div>
    </div>


    <div id="d3">
        <div id="p3">
           we appreciate determined lateral thinkers who can add value to our functioning and help achieve organizational and career goals. We believe that hard work, knowledge, and commitment are important for the growth and success of the Company and the employees alike. Thus, we strive hard towards creating an environment of speedy personal learning, early empowerment, and excellent professional opportunities. Our policies give supreme importance to rigorous training, counseling, and a working atmosphere that is challenging, rewarding, and enjoyable. The Company's budding culture and value system sets an ideal platform for young talents to nurture and outperform.
        </div>
        <div id="last">
            <h1 id="current">Current Openings</h1>
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

export default Career;