"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import styles from "../styles";

const Feedback = () => (
  <section className={`${styles.paddings} relative my-[100px] z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex flex-col flex-[0.5] lg:max-w-[370px] justify-end sm:p-8 p-4 gradient-05 relative border-[1px] border-[#6a6a6a] rounded-[32px]"
      >
        <div className="feedback-gradient" />
        <div className="pt-[120px]">
          <h2 className="text-white font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px]">
            Smantha
          </h2>
          <p className="text-white font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] mt-[8px]">
            {" "}
            Founder | Metaverus
          </p>
        </div>
        <p className="mt-[24px] text-white font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px]">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex flex-1 justify-center items-start relative"
      >
        <img
          src="https://yeray1412.github.io/Metaversus/planet-09.png"
          alt="planet"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[32px]"
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="absolute -left-[10%] top-[10%] lg:block hidden"
        >
          <img src="https://yeray1412.github.io/Metaversus/stamp.png" alt="stamp" className="w-[155px] h-[155px]" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
