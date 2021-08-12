import React from "react"
import Layout from "../components/layout"
import "../styles/image.css"
import MyForm from "../utils/myform" 
import {FaLinkedin, FaTwitter, FaGithub, FaFileAlt} from 'react-icons/fa'


import {MdMail} from 'react-icons/md'
export default function Home() {
  
  return (
    <Layout>
      <title>Rohil Sheth - Home</title>
      <a href="https://www.twitter.com/roshe789" target="_blank" class="fa-twitter"><FaTwitter size={30}></FaTwitter></a>
      <a href="https://www.github.com/rohilsheth" target="_blank" class="fa-github"><FaGithub size={30}></FaGithub></a>
      <a href="https://www.linkedin.com/in/rohilsheth" target="_blank" class="fa-linkedin"><FaLinkedin size={30}></FaLinkedin></a>
      <a href="mailto:rohil@seas.upenn.edu" target="_blank" class='fa-envelope'><MdMail size={30}></MdMail></a>
      <a href="https://rsheth.s3.amazonaws.com/resume-base_1.pdf" target="_blank" class='fa-file'><FaFileAlt size={30}></FaFileAlt></a>

      <h1>Hello! 👋</h1> 
      <br></br>
      <p>
       I'm <b>Rohil Sheth</b>, a student at the <a href="https://upenn.edu">University of Pennsylvania</a> studying <b>Systems Engineering</b> with a concentration in <b>Artificial Intelligence 🤖 and Data Science 📈</b>. Originally from central New Jersey, I'm now based in Philadelphia 🏙. 
      </p>
      <img src="https://rsheth.s3.amazonaws.com/headshot.jpeg" width="29%" height="29%" align="right" alt="headshot"></img>

      <p>
       Outside of class, I'm currently involved with: 
       <ul>
         <li><b>💵 investing</b> in <b>early-stage startups</b> as a partner with <a href="https://weissfund.weisstech.upenn.edu/">WeissFund</a></li> 
         
       </ul>
      </p>

      <p>
        I'm really interested in utilizing my data science and analytics capabilities to drive decision-making in areas like management consulting, venture capital, product management, and <b>especially climate change</b>. 
      </p>
      <hr></hr>
      <p>
        Over the last few years, I've gained experience as a <b>product and data science</b> intern at Comcast, a <b>fintech investment banking</b> summer analyst at <a href="https://rblt.com">Rosenblatt Securities</a>, a <b>data analytics/trading</b> intern at <a href="https://likefolio.com">LikeFolio</a>, a scholar at the <a href="https://soe.rutgers.edu/gset">New Jersey Governor's School for Engineering and Technology</a>, and as a <b>research</b> intern with <a href="https://vizlab.rutgers.edu/">Visualization Lab</a> at Rutgers. 
      </p>
      <p>
        I've also explored <b>public policy</b> as an intern for <a href="https://www.andrewzwicker.com/">Assemblyman Andrew Zwicker</a> and created a <b>computer science education organization</b> that taught computer science to over <b>80 elementary school students</b>. 
      </p>
      <hr></hr>
      Let's build something cool together. Feel free to reach out to me via email: rohil at seas dot upenn dot edu.
    </Layout>
  );
}