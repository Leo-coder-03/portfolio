import { motion , useScroll , useSpring, useTransform} from "framer-motion";
import { useRef } from "react";
import "./portfolio.scss"
const items = [
    {
        id:1,
        title:"Online Application System for stable isotope studies - groundwater",
        img:"/CGWBss.png",
        type:"image",
        desc:"This online system empowers users to search, visualize, and analyze stable isotope data from the Central Ground Water Board (CGWB), with features like map-based browsing, GNIP data integration, and custom dataset uploads for in-depth analysis. Originally conceptualized during the Smart India Hackathon 2022, this project was declared a winning solution. Our team later developed the complete platform under the mentorship and guidance of CGWB, Government of India."
    },
    {
        id:2,
        title:"Travel Guide",
        url: "https://your-live-project-link.com",
        type:"iframe",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id:3,
        title:"Travel Guide",
        url: "https://your-live-project-link.com",
        type:"iframe",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id:4,
        title:"Travel Guide",
        url: "https://your-live-project-link.com",
        type:"iframe",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
];
const Single = ({item}) =>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
    });
    const y = useTransform(scrollYProgress,[0,1],["-10px","10px"]);
    return (
        <section ref={ref}>
        <div className="container">
        <div className="wrapper">
        <div className="imageContainer">
        {item.type === "iframe" ? (
                            <iframe
                                src={item.url}
                                width="100%"
                                height="300px"
                                frameBorder="0"
                                allowFullScreen
                                title={item.title}
                                className="project-iframe"
                            ></iframe>
                        ) : (
                            <img
                                src={item.img}
                                alt={item.title}
                            />
                        )}
        </div>
            <motion.div className="textContainer"style={{y:y}}>
                <h2>
                    {item.title}
                </h2>
                <p>{item.desc}</p>
                <button onClick = {()=>window.open("https://cgwb.gov.in/OASIS/","_blank")}>See Demo</button>
            </motion.div>
        </div>
        </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref,offset:["end end","start start"]});
    const scaleX = useSpring(scrollYProgress,{
        stiffness : 100,
        damping: 30,
    });
  return (
    <div className="portfolio" ref = {ref}>
    <div className="progress">
        <h1>Featured  Works</h1>
        <motion.div style={{ scaleX }}className="progressBar"></motion.div>
    </div>
      {items.map((item) => (
        <Single item = {item} key = {item.id} />
      ))}
    </div>
  )
}

export default Portfolio
