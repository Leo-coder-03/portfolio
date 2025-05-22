import "./skills.scss";
import { motion , useInView } from "framer-motion";
import { useRef } from "react";
const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      y:0,  
      transition:{
        duration:1,
        staggerChildren:0.1,
      },
    },
};
const Skills = () => {
    const ref = useRef()
    const isInView = useInView(ref,{margin:"-100px"})
  return (
    // isInView &&
    <motion.div className="skills" variants={variants} initial="initial" ref={ref} animate={ "animate"}>
      <motion.div className="textContainer" variants={variants}>
        <p>I focus on learning, coding and 
        <br/> developing solutions to solve everyday problems.
        </p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/teamCoding.png"alt=""/>
            <h1><motion.b whileHover={{color:"#663399"}}>Crafting</motion.b> Ideas</h1>
        </div>
        <div className="title">
            <h1><motion.b whileHover={{color:"#663399"}}>Building</motion.b> Solutions.</h1>
            <button>My Skills</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
      <motion.div className="list1">
        <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
            <h2>Java</h2>
            <p>Skilled in building scalable Java applications using Spring, Spring Boot, and Hibernate. Experienced in developing RESTful APIs and robust backend systems.</p>
            {/* <button>Certificate</button> */}
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
            <h2>JavaScript</h2>
            <p>Experienced in JavaScript with a focus on creating dynamic, high-performance web applications using React and modern frontend architectures.</p>
            {/* <button>Certificate</button> */}
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
            <h2>AngularJs</h2>
            <p>Skilled in building responsive single-page applications with AngularJS, specializing in reusable components, data binding, and API integrations.</p>
            {/* <button>Certificate</button> */}
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
            <h2>SQL</h2>
            <p>Experienced in writing complex SQL queries, optimizing performance, and transforming data into actionable insights using CTEs, joins, and aggregations.</p>
            {/* <button onClick={() => window.open("https://www.hackerrank.com/certificates/f9eb2723193c","_blank")}>Certificate</button> */}
        </motion.div>
        </motion.div>
        <motion.div className="list2">
        <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
            <h2>Problem Solving</h2>
            <p>Skilled in solving complex problems using structured thinking, algorithms, and efficient coding practices.</p>
            {/* <button>Certificate</button> */}
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
            <h2>Databases</h2>
            <p>Experienced in designing and managing MySQL and MongoDB databases, focusing on performance, scalability, and data integrity.</p>
            {/* <button>Certificate</button> */}
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
            <h2>ReactJS</h2>
            <p>Proficient in building dynamic, high-performance web applications using ReactJS, with a focus on component-based architecture and state management.</p>
            {/* <button>Certificate</button> */}
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
            <h2>System Design</h2>
            <p>Skilled in designing scalable, reliable system architectures, emphasizing modularity, performance, and cloud integration.</p>
            {/* <button>Certificate</button> */}
        </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Skills
