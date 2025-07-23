import profilePic from "../assets/faizanProfile.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={profilePic} alt="about" width={350} height={300} />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
          <div className="w-full text-center lg:text-left mt-4">
            <a
              href="/Faizan CV New.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a25] text-white rounded hover:bg-[#1a1a25] transition"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
