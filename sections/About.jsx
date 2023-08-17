"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";
import styles from "../styles";

const About = () => (
  <section className={`relative ${styles.paddings} z-10 `}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.flexCenter} flex-col mx-auto`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] max-w-[1117px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-semibold text-white">Metaverse </span>
        is a new thing in the future, where you can enjoy the virtual world by
        feeling like it's really real, you can feel what you feel in this
        metaverse world, because this is really
        <span className="font-semibold text-white">
          {" "}
          madness of the metaverse{" "}
        </span>
        of today, using only
        <span className="font-semibold text-white"> VR </span>
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Let's{" "}
        <span className="font-semibold text-white"> explore </span>the madness
        of the metaverse by scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="https://yeray1412.github.io/Metaversus/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] mt-[28px] object-contain"
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
