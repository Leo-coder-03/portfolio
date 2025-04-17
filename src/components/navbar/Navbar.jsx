import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () =>{
    return (
        <div className = "navbar">
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}}transition={{duration:0.5}}>Shruxx Workspace</motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/shruti-tiwari-457ba21ba/" target="_blank" rel="noopener noreferrer"><img src="/linkedIn.png" alt="LinkedIn"/></a>
                <a href="https://github.com/Leo-coder-03" target="_blank" rel="noopener noreferrer"><img src="/github.png" alt="Github"/></a>
                <a href="https://leetcode.com/u/Shruti_1201/" target="_blank" rel="noopener noreferrer"><img src="/leetcode.png" alt="Leetcode"/></a>
                <a href="https://www.geeksforgeeks.org/user/snktiwari1/" target="_blank" rel="noopener noreferrer"><img src="/gfg.png" alt="GFG"/></a>
            </div>
        </div>
        </div>
    )
}
export default Navbar