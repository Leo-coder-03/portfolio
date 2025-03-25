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
                <a href="#"><img src="/linkedIn.png" alt="LinkedIn"/></a>
                <a href="#"><img src="/Github.png" alt="Github"/></a>
                <a href="#"><img src="/leetcode.png" alt="Leetcode"/></a>
                <a href="#"><img src="/GFG.png" alt="GFG"/></a>
            </div>
        </div>
        </div>
    )
}
export default Navbar