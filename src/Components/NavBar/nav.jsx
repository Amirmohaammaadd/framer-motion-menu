import { RiArrowRightDoubleFill } from "react-icons/ri";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import NavLink from "./navLinks";
import { BsBarChart } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import { FaRegFileLines } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";
import logo from "../../assets/logo-headr.webp";
import { Link } from "react-router-dom";

const Navbarr = () => {
  const container = {
    close: {
      width: "5rem",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },

    open: {
      width: "16rem",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      controls.start("open");
    } else {
      controls.start("close");
    }
  }, [isOpen]);

  return (
    <motion.div
      animate={controls}
      variants={container}
      initial="close"
      className="bg-neutral-900 flex flex-col z-10 gap-20 p-5 absolute top-0 right-0 h-full shadow shadow-neutral-600"
    >
      <div className="flex flex-row w-full justify-between place-items-center">
        <div>
          <img src={logo} className="w-10  rounded-full bg-slate-50" />
        </div>
        <button className="p-1 rounded-full flex" onClick={handleOpenClose}>
          <RiArrowRightDoubleFill
            className={`w-8 h-8 stroke-neutral-200 text-white transition-transform duration-700 ${
              isOpen ? "" : "rotate-180"
            }`}
          />
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <Link to={"1"}>
          <NavLink name={"Dashboard"}>
            <BsBarChart className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavLink>
        </Link>

        <Link to={"2"}>
          <NavLink name={"Document"}>
            <FaRegFileLines className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavLink>
        </Link>

        <Link to={"3"}>
          <NavLink name={"Notifications"}>
            <FaRegBell className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavLink>
        </Link>

        <Link to={"4"}>
          <NavLink name={"Users"}>
            <FaUserGroup className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavLink>
        </Link>

        <Link to={"5"}>
          <NavLink name={"Settings"}>
            <FaRegSun className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavLink>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbarr;
