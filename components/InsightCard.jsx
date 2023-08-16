"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, index, title, subtitle }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="planet"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="max-w-[650px] flex flex-1 flex-col md:ml-[62px] z-10">
        <h2 className="font-normal text-white lg:text-[42px] text-[26px]">
          {title}
        </h2>
        <p className="mt-[16px] lg:text-[20px] text-[14px] text-secondary-white font-normal leading-10">
          {subtitle}
        </p>
      </div>
      <div className="lg:flex hidden w-[100px] h-[100px] border-solid rounded-full border-[#F5F5F5] border justify-center items-center ">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[35%] h-[35%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
