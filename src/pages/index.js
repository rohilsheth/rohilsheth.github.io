import React from "react"
import Layout from "../components/layout"
import "../styles/image.css"
import MyForm from "../utils/myform" 
import {FaLinkedin, FaTwitter, FaGithub, FaFileAlt, FaEthereum} from 'react-icons/fa'

import {MdMail} from 'react-icons/md'
export default function Home() {
  
  return (
    <Layout>
      <title>Rohil Sheth - Home</title>
      <a href="https://www.twitter.com/roshe789" target="_blank" class="fa-twitter"><FaTwitter size={30}></FaTwitter></a>
      <a href="https://www.github.com/rohilsheth" target="_blank" class="fa-github"><FaGithub size={30}></FaGithub></a>
      <a href="https://www.linkedin.com/in/rohilsheth" target="_blank" class="fa-linkedin"><FaLinkedin size={30}></FaLinkedin></a>
      <a href="mailto:rohil@seas.upenn.edu" target="_blank" class='fa-envelope'><MdMail size={30}></MdMail></a>
      <a href="rohilsheth.eth" target="_blank" class='FaEthereum'><FaEthereum size={30}></FaEthereum></a>



      <h1>Hello! 👋</h1> 
      <br></br>
      <p>
       I'm <b>Rohil Sheth</b> (rohilsh.eth), a senior at the <a href="https://upenn.edu">University of Pennsylvania</a> pursuing a Bachelor's degree in <b>Systems Engineering</b> ⚙️, a Master's degree in  <b>Data Science 🤖</b>, and a minor in Political Science 🇺🇸
      </p>
      <p>
       Originally from central New Jersey, I'm now based in Philadelphia 🏙
      </p>
      <img src="https://rsheth.s3.amazonaws.com/headshot.jpg" width="40%" height="40%" align="right" alt="headshot"></img>
      <p>
       Outside of class, I'm involved in: 
       <ul>
         <li><b>💵 investing</b> in <b>early-stage startups</b> with the <a href ="https://venturelab.upenn.edu/innovation-fund">Penn Wharton Innovation Fund</a>, previously with the <a href="https://weissfund.weisstech.upenn.edu/">WeissFund</a></li> 
         <li>📊 directing <b>strategy consulting</b> engagements with social impact-focused businesses via <a href="https://180dc.org/branch/upenn/">180 Degrees Consulting</a></li>
         <li>🎭 writing and acting (mostly funny) <b>comedy</b> with <a href="https://maskandwig.com">Mask and Wig</a></li>
         <li>🕺🏽 <b>dancing and twirling dandiya</b> with <a href="https://www.facebook.com/pennraas/">Penn Raas</a></li>
         <li>📰 running a weekly <b>venture capital</b> newsletter, <a href="https://thisweekinvc.rohilsheth.com">This Week in VC</a></li>
         
       </ul>
      </p>

      <p>
        I'm really interested in utilizing my data science and analytics capabilities to drive decision-making in areas like management consulting, venture capital, product management, and <b>especially climate change</b>. 
      </p>
      <hr></hr>
      <p>
        I'll be a Business Analyst at <a href="https://mckinsey.com"> McKinsey &amp; Company </a> after graduation. 
      </p>
      <p>
      Over the last few years, I've gained experience as a Business Analyst intern at <a href="https://mckinsey.com"> McKinsey &amp; Company </a>, a <b>product and data science</b> intern at Comcast, a <b>fintech investment banking</b> summer analyst at <a href="https://rblt.com">Rosenblatt Securities</a>, a <b>data analytics/trading</b> intern at <a href="https://likefolio.com">LikeFolio</a>, a scholar at the <a href="https://soe.rutgers.edu/gset">New Jersey Governor's School for Engineering and Technology</a>, and as a <b>research</b> intern with <a href="https://vizlab.rutgers.edu/">Visualization Lab</a> at Rutgers. 
      </p>
      <p>
        I've also explored <b>public policy</b> as an intern for <a href="https://www.andrewzwicker.com/">Assemblyman Andrew Zwicker</a> and created a <b>computer science education organization</b> that taught computer science to over <b>80 elementary school students</b>. 
      </p>
      <hr></hr>
      Let's build something cool together. 
      
      Feel free to reach out to me via email: rohil at seas.upenn.edu
    </Layout>
  );
}
