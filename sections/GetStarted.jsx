"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import styles from "../styles";
import { startingFeatures } from "../constants";
import { StartSteps, TitleText, TypingText } from "../components";

const GetStarted = () => (
  <section className={`${styles.paddings} z-10 relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex lg:flex-row flex-col gap-8 mx-auto`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex flex-col justify-center"
      >
        <TypingText title="| How does Metaversus Work"></TypingText>
        <TitleText title={<>Get started with just a few clicks</>}></TitleText>
        <div className="flex flex-col gap-[24px] max-w-[370px] mt-[31px]">
          {startingFeatures.map((feature, index) => {
            return (
              <StartSteps key={feature} number={index + 1} text={feature} />
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
