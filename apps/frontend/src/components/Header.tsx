import { Group } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="absolute shadow-md rounded-full top-6 left-4 right-4 h-13 bg-white/10 backdrop-blur-sx text-white p-4 flex items-center justify-between">
      <div className="logo p-2 rounded-md text-white">
        <Group />
      </div>
      <div className="links text-white flex items-center gap-4">
        <NavLink to={"/"} className={"hover:underline"}>
          A propos
        </NavLink>
        <NavLink to={"/"} className={"hover:underline"}>
          Templates
        </NavLink>
        <NavLink to={"/"} className={"hover:underline"}>
          Guide
        </NavLink>
      </div>
      <div className="actions flex items-center gap-4">
        <NavLink to={"/"} className={"hover:underline"}>
          Log in
        </NavLink>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="py-1.5 px-2.5 rounded-lg bg-white text-black  hover:bg-slate-200 transition-all duration-100"
        >
          Get started
        </motion.button>
      </div>
    </div>
  );
};

export default Header;
