import CornerDesign from "./CornerDesign";
import Image1 from "/images/Rectangle 6.png";
import { FaBluetoothB } from "react-icons/fa6";

const About = ({ onAboutClick, onAvailabilityClick, onOpenToHireClick }) => {
  return (
    <div className="text-white xl2:w-50 w-full xl2:h-full h-31 xl:ml-14 xl2:ml-8 xl3:flex hidden xl2:flex-col flex-row justify-between mr-2 mb-2 ml-10">
      <section className="xl2:w-47 w-full flex xl2:flex-col flex-row felx-wrap gap-3">
        <div className="relative xl2:w-47 xl2:h-43 w-34 h-31 border border-quatrary flex justify-center items-center">
          <CornerDesign />

          <img className="xl2:w-41 xl2:h-37 w-28 h-25" src={Image1} alt="" />
        </div>
        <div className="flex flex-col xl2:flex-row flex-wrap gap-4">
          <div className="flex flex-col w-60">
            <span className="text-[14px] font-iceland tracking-[0.075em]">
              NAME
            </span>
            <button
              onClick={onAboutClick}
              className="
            relative inline-flex items-center
            text-[18px] font-big-shoulders tracking-[0.075em]
            text-primary uppercase
            px-3 py-1
            overflow-x-hidden
            border border-primary
            transition-all duration-300

            hover:text-white
            hover:shadow-[0_0_25px_#E84A4A]
            group
          "
            >
              <span
                className="
              absolute inset-0
              bg-gradient-to-r from-transparent via-primary to-transparent
              opacity-0
              translate-x-[-100%]
              group-hover:opacity-30
              group-hover:translate-x-[100%]
              transition-all duration-700
            "
              />

              <span className="absolute top-0 left-0 w-2 h-0.5 bg-primary" />
              <span className="absolute top-0 left-0 w-0.5 h-2 bg-primary" />
              <span className="absolute bottom-0 right-0 w-2 h-0.5 bg-primary" />
              <span className="absolute bottom-0 right-0 w-0.5 h-2 bg-primary" />

              <span className="relative z-10">PRANAV KALE</span>
            </button>
          </div>
          <div className="flex flex-col w-60">
            <span className="text-[14px] font-iceland tracking-[0.075em]">
              OCCUPATION
            </span>
            <span className="text-[18px] font-big-shoulders text-primary tracking-[0.075em]">
              BUSINESS ANALYTICS & DIGITAL STRATEGIST
            </span>
          </div>
          <div className="flex flex-col w-60">
            <span className="text-[14px] font-iceland tracking-[0.075em]">
              corporation
            </span>
            <span className="text-[18px] font-big-shoulders text-primary tracking-[0.075em]">
              VIDYALANKAR INSTITUTE OF TECHNOLOGY
            </span>
          </div>
          <div className="flex flex-col w-60">
            <span className="text-[14px] font-iceland tracking-[0.075em]">
              AVAILABILITY
            </span>
            <button
              onClick={onAvailabilityClick}
              className="
            relative inline-flex items-center
            text-[18px] font-big-shoulders tracking-[0.075em] font-bold
            text-black
            pl-2 pr-4 py-1
            bg-[url('/images/Subtract_active.png')]
            bg-cover bg-top-right bg-no-repeat
            overflow-x-hidden
            group
          "
            >
              <span
                className="
              absolute inset-0
              bg-primary/20
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-300
              pointer-events-none
            "
              />

              <span
                className="
              absolute -left-1/2 top-0 w-[200%] h-full
              bg-gradient-to-r from-transparent via-primary/40 to-transparent
              rotate-[-12deg]
              translate-x-[-100%]
              group-hover:translate-x-[100%]
              transition-transform duration-700
              pointer-events-none
            "
              />

              <span className="relative z-10">OPEN FOR HIRE</span>
            </button>
          </div>
          <div className="flex flex-col w-60">
            <span className="text-[14px] font-iceland tracking-[0.075em]">
              SOCIAL
            </span>
            <button
              onClick={onOpenToHireClick}
              className="text-[18px] font-big-shoulders text-primary tracking-[0.075em] flex justify-between items-center pl-1
            border-2 border-primary
            uppercase
            transition-all duration-300
            hover:bg-primary
            hover:text-white
            hover:shadow-[0_0_20px_#E84A4A]
            focus:outline-none
            focus:ring-2 focus:ring-primary"
            >
              OPEN CONNECTION <FaBluetoothB />
            </button>
          </div>
        </div>
      </section>
      <section className="font-iceland xl2:flex hidden flex-col mb-10">
        <span className="text-primary text-[18px] tracking-[0.075em]">
          MOTTO:
        </span>
        <span className="text-[16px] tracking-[0.075em] text-secondary">
          Cultivating an elite mindset. Grinding daily to build a career at the intersection of business, data, and digital strategy.
        </span>
      </section>
    </div>
  );
};
export default About;
