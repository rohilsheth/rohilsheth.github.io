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
      <a href="mailto:rohil@gmail.com" target="_blank" class='fa-envelope'><MdMail size={30}></MdMail></a>



      <h1>Hello! 👋</h1> 
      <br></br>
      <p>
      I'm <b>Rohil Sheth</b>, a Business Analyst at <a target="_blank" rel="noopener noreferrer" href="https://mckinsey.com">McKinsey & Company</a> with most of my client work focused in travel, life sciences, and B2B services.
      </p>
      <p>
       Originally from central New Jersey, I'm now based in NYC 🏙
      </p>
      <img src="https://rsheth.s3.amazonaws.com/RS_Headshot.jpg" width="40%" height="40%" align="right" alt="headshot"></img>
      <p>
      I graduated from the <a target="_blank" rel="noopener noreferrer" href="https://upenn.edu">University of Pennsylvania</a> in May 2023, where I graduated with a Bachelor's degree in <b>Systems Engineering</b> ⚙️, a Master's degree in  <b>Data Science 🤖</b>, and minors in Political Science 🇺🇸 and Mathematics 🔢
      </p>
      <p>
       While at Penn, I was involved with: 
       <ul>
         <li><b>💵 investing</b> in <b>early-stage startups</b> with the <a target="_blank" rel="noopener noreferrer" href ="https://venturelab.upenn.edu/innovation-fund">Penn Wharton Innovation Fund</a>, previously with the <a target="_blank" rel="noopener noreferrer" href="https://weissfund.weisstech.upenn.edu/">WeissFund</a></li> 
         <li>📊 directing <b>strategy consulting</b> engagements with social impact-focused businesses via <a target="_blank" rel="noopener noreferrer" href="https://180dc.org/branch/upenn/">180 Degrees Consulting</a></li>
         <li>🎭 writing and acting (mostly funny) <b>comedy</b> with <a target="_blank" rel="noopener noreferrer" href="https://maskandwig.com">Mask and Wig</a></li>
         <li>🕺🏽 <b>dancing and twirling dandiya</b> with <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pennraas/">Penn Raas</a></li>
         <li>📰 running a weekly <b>venture capital</b> newsletter, <a target="_blank" rel="noopener noreferrer" href="https://thisweekinvc.rohilsheth.com">This Week in VC</a>, and writing blog <a target="_blank" rel="noopener noreferrer" href="https://rohil.substack.com/p/reflecting-on-the-ipcc-report-and">posts</a></li>
         
       </ul>
      </p>

      <p>
        I'm interested in opportunities to support non-profits, <b>especially in climate change</b>. 
      </p>
      <hr></hr>
      <p>
      Over the last few years, I've gained experience as a <b>product and data science</b> intern at <a target="_blank" rel="noopener noreferrer" href="https://corporate.comcast.com">Comcast</a>, a <b>fintech investment banking</b> summer analyst at <a target="_blank" rel="noopener noreferrer" href="https://rblt.com">Rosenblatt Securities</a>, a scholar at the <a target="_blank" rel="noopener noreferrer" href="https://soe.rutgers.edu/gset">New Jersey Governor's School for Engineering and Technology</a>, and as a <b>research</b> intern with <a target="_blank" rel="noopener noreferrer" href="https://vizlab.rutgers.edu/">Visualization Lab</a> at Rutgers. 
      </p>
      <p>
        I've also explored <b>public policy</b> as an intern for <a target="_blank" rel="noopener noreferrer" href="https://www.andrewzwicker.com/">Assemblyman Andrew Zwicker</a> and created a <b>computer science education organization</b> that taught computer science to over <b>80 elementary school students</b>. 
      </p>
      <hr></hr>
      Reach out to me via email at rohilsheth at gmail.com.
    </Layout>
  );
}
