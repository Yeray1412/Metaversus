'use client';

import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] gradient-01 inset-0 " />
    <div className={`${styles.innerWidth} flex justify-between mx-auto gap-8`}>
      <img
        src="https://yeray1412.github.io/Metaversus/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] z-10 text-white leading-[30px]">
        METAVERSUS
      </h2>
      <img
        src="https://yeray1412.github.io/Metaversus/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-conatin"
      />
    </div>
  </motion.nav>
);

export default Navbar;
