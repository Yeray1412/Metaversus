'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import { footerVariants } from '../utils/motion';
import styles from '../styles';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} flex flex-col gap-8 mx-auto`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h2 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaverse
        </h2>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 rounded-[32px] gap-[12px] bg-[#25618b]"
        >
          <img
            src="https://yeray1412.github.io/Metaversus/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="text-white font-normal text-[16px]">
            ENTER METAVERSE
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="h-[2px] bg-white opacity-10 mt-[60px] mb-[50px]" />
        <div className="flex justify-between gap-4 flex-wrap items-center">
          <h4 className="text-[24px] text-white font-semibold">Metaversus</h4>
          <p className="text-[14px] opacity-50 text-white">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            {socials.map((social) => (
              <img
                src={social.url}
                key={social.name}
                alt={social.name}
                className="w-[24px] h-[24px] cursor-pointer object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
