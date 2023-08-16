"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import styles from "../styles";

const ExploreCard = ({ id, imgUrl, title, active, handleClick, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active == id ? "lg:flex-[1.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-2-[170px] h-[563px] cursor-pointer transition-[flex] duration-[0.7s] ease-out-flex overflow-hidden`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={id}
      className="w-full h-full object-cover absolute rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-[120px] w-[220px] lg:rotate-[-90deg]">
        {title}
      </h3>
    ) : (
      <div className="bottom-[0px] lg:h-[40%] h-[100%] absolute p-8 justify-start flex-col w-full bg-[rgba(0,0,0,0.5)] rounded-b-[22px] lg:rounded-t-[0px] rounded-t-[22px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="font-normal f-[16px] leading-[20px] text-white uppercase">
          Enter Metaverse
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] w-[300px] text-24px text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
