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
    <motion.div className="skills" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
      <motion.div className="textContainer" variants={variants}>
        <p>I focus on learning, coding and 
        <br/> developing solutions to solve everyday problems.
        </p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="./people.webp"alt=""/>
            <h1><motion.b whileHover={{color:"orange"}}>Crafting</motion.b> Ideas</h1>
        </div>
        <div className="title">
            <h1><motion.b whileHover={{color:"orange"}}>Building</motion.b> Solutions.</h1>
            <button>My Skills</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
            <h2>Branding</h2>
            <p>Blork fizbaz wompdoodle snaffle quibber. Zibberwocky flummoxed drindle farfegnugen snozzle. Wibberflap zoodlequack glimberdoon snorfle. Quizzlestick plonkdoodle bramblefizz twizzle wump. Glibberflap snozzbucket crunkle drabbleflitz</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
            <h2>Branding</h2>
            <p>Blork fizbaz wompdoodle snaffle quibber. Zibberwocky flummoxed drindle farfegnugen snozzle. Wibberflap zoodlequack glimberdoon snorfle. Quizzlestick plonkdoodle bramblefizz twizzle wump. Glibberflap snozzbucket crunkle drabbleflitz</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
            <h2>Branding</h2>
            <p>Blork fizbaz wompdoodle snaffle quibber. Zibberwocky flummoxed drindle farfegnugen snozzle. Wibberflap zoodlequack glimberdoon snorfle. Quizzlestick plonkdoodle bramblefizz twizzle wump. Glibberflap snozzbucket crunkle drabbleflitz</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
            <h2>Branding</h2>
            <p>Blork fizbaz wompdoodle snaffle quibber. Zibberwocky flummoxed drindle farfegnugen snozzle. Wibberflap zoodlequack glimberdoon snorfle. Quizzlestick plonkdoodle bramblefizz twizzle wump. Glibberflap snozzbucket crunkle drabbleflitz</p>
            <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Skills
