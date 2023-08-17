"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeIn,
  planetVariants,
  peopleFadeIn,
} from "../utils/motion";
import styles from "../styles";
import { NewFeatures, People, TitleText, TypingText } from "../components";
import { newFeatures, people } from "../constants";

const World = () => (
  <section className="mt-[100px]">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.flexCenter} flex-col`}
    >
      <TypingText title="| People on the World" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center max-w-[962px] lg:text-[64px] text-[40px]"
      />
    </motion.div>
    <motion.div
      variants={fadeIn("up", "tween", 0.3, 0.7)}
      initial="hidden"
      whileInView="show"
      className="relative mt-[68px] flex max-w-[1170px] mx-auto"
    >
      <img src="https://yeray1412.github.io/Metaversus/map.png" alt="map" className="object-cover w-full h-full" />
      <motion.div
        variants={peopleFadeIn}
        className={`absolute w-[70px] h-[70px] rounded-full bg-[#5d6680] p-[6px] before-tri z-10 bottom-[25%] right-[10%]`}
      >
        <img src="https://yeray1412.github.io/Metaversus/people-01.png" alt="people" />
      </motion.div>
      <motion.div
        variants={peopleFadeIn}
        className={`absolute w-[70px] h-[70px] rounded-full bg-[#5d6680] p-[6px] before-tri z-10 left-[12%] top-[0%]`}
      >
        <img src="https://yeray1412.github.io/Metaversus/people-02.png" alt="people" />
      </motion.div>
      <motion.div
        variants={peopleFadeIn}
        className={`absolute w-[70px] h-[70px] rounded-full bg-[#5d6680] p-[6px] before-tri z-10 bottom-[40%] right-[48%]`}
      >
        <img src="https://yeray1412.github.io/Metaversus/people-03.png" alt="people" />
      </motion.div>
      <motion.div
        variants={peopleFadeIn}
        className={`md:block hidden absolute bottom-[40%] left-[20%]`}
      >
        <div
          className={`w-[215px] h-[165px] ${styles.flexCenter} rounded-[24px] bg-[#5d6680] p-[10px]`}
        >
          <img
            src="https://yeray1412.github.io/Metaversus/MaskGroup.png"
            alt="mask"
            className="absolute object-contain"
          />
          <div className="p-[20px] absolute bottom-0">
            <div className={`${styles.flexCenter}`}>
              <img
                src="https://yeray1412.github.io/Metaversus/people-04.png"
                alt="people"
                className="w-[24px] h-[24px] mr-[-12px] z-[2]"
              />
              <img
                src="https://yeray1412.github.io/Metaversus/people-05.png"
                alt="people"
                className="w-[24px] h-[24px] mr-[-12px] z-[1]"
              />
              <img
                src="https://yeray1412.github.io/Metaversus/people-06.png"
                alt="people"
                className="w-[24px] h-[24px] mr-[8px] z-0"
              />
              <p className="text-[12px] text-white">+ 264 has joined</p>
            </div>
            <h2 className="text-[18px] text-white font-semibold">
              The Upside Down
            </h2>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={peopleFadeIn}
        className={`md:block hidden absolute bottom-[55%] right-[20%]`}
      >
        <div
          className={`w-[200px] h-[155px] ${styles.flexCenter} rounded-[32px] bg-[#5d6680] p-[10px]`}
        >
          <img
            src="https://yeray1412.github.io/Metaversus/MaskGroup(1).png"
            alt="mask"
            className="absolute object-contain"
          />
          <div className="p-[20px] absolute bottom-0">
            <div className={`${styles.flexCenter}`}>
              <img
                src="https://yeray1412.github.io/Metaversus/people-04.png"
                alt="people"
                className="w-[24px] h-[24px] mr-[-12px] z-[2]"
              />
              <img
                src="https://yeray1412.github.io/Metaversus/people-05.png"
                alt="people"
                className="w-[24px] h-[24px] mr-[-12px] z-[1]"
              />
              <img
                src="https://yeray1412.github.io/Metaversus/people-06.png"
                alt="people"
                className="w-[24px] h-[24px] mr-[8px] z-0"
              />
              <p className="text-[12px] text-white">+ 264 has joined</p>
            </div>
            <h2 className="text-[18px] text-white font-semibold">
              Hawkins Labs
            </h2>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
