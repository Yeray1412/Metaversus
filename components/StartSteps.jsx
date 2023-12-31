import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={[
        `${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] font-semibold bg-[#323f5d] text-white`,
      ]}
    >
      {`0${number}`}
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[30px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
