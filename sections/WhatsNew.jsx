"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import styles from "../styles";
import { NewFeatures, TitleText, TypingText } from "../components";
import { newFeatures } from "../constants";

const WhatsNew = () => (
  <section className={`${styles.paddings} z-10 relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex lg:flex-row flex-col gap-8 mx-auto`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex flex-col justify-center"
      >
        <TypingText title="| Whats New"></TypingText>
        <TitleText
          title={<>What's new about Metaversus?</>}
          textStyles="lg:w-[570px]"
        >
          {" "}
        </TitleText>
        <div className="flex md:flex-nowrap flex-wrap justify-between gap-[24px] max-w-[370px] mt-[48px]">
          {newFeatures.map((feature) => {
            return <NewFeatures key={feature.title} {...feature} />;
          })}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="https://yeray1412.github.io/Metaversus/whats-new.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
