import { FaBluetoothB } from "react-icons/fa6";

const LinkMenue = ({
  onAboutClick,
  onAvailabilityClick,
  onOpenToHireClick,
}) => {
  return (
    <div className="xl3:hidden flex flex-wrap gap-4 text-white mt-4 w-full">
      <div className="flex flex-col flex-1 min-w-[240px] mx-2">
        <span className="text-[14px] font-iceland tracking-[0.075em]">
          NAME
        </span>

        <button
          onClick={onAboutClick}
          className="relative inline-flex items-center
          text-[18px] font-big-shoulders tracking-[0.075em]
          text-primary uppercase px-3 py-1
          border border-primary overflow-hidden
          transition-all duration-300
          hover:text-white hover:shadow-[0_0_25px_#E84A4A]
          group"
        >
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent
            opacity-0 translate-x-[-100%]
            group-hover:opacity-30 group-hover:translate-x-[100%]
            transition-all duration-700"
          />

          <span className="absolute top-0 left-0 w-2 h-0.5 bg-primary" />
          <span className="absolute top-0 left-0 w-0.5 h-2 bg-primary" />
          <span className="absolute bottom-0 right-0 w-2 h-0.5 bg-primary" />
          <span className="absolute bottom-0 right-0 w-0.5 h-2 bg-primary" />

          <span className="relative z-10">MUSAB KHAN</span>
        </button>
      </div>

      <div className="flex flex-col flex-1 min-w-[240px] mx-2">
        <span className="text-[14px] font-iceland tracking-[0.075em]">
          OCCUPATION
        </span>
        <span className="text-[18px] font-big-shoulders text-primary tracking-[0.075em]">
          SOFTWARE DEVELOPER
        </span>
      </div>

      <div className="flex flex-col flex-1 min-w-[240px] mx-2">
        <span className="text-[14px] font-iceland tracking-[0.075em]">
          CORPORATION
        </span>
        <span className="text-[18px] font-big-shoulders text-primary tracking-[0.075em]">
          ZILLIOBIT
        </span>
      </div>

      <div className="flex flex-col flex-1 min-w-[240px] mx-2">
        <span className="text-[14px] font-iceland tracking-[0.075em]">
          AVAILABILITY
        </span>

        <button
          onClick={onAvailabilityClick}
          className="relative inline-flex items-center
          text-[18px] font-big-shoulders font-bold tracking-[0.075em]
          text-black pl-2 pr-4 py-1
          bg-[url('/images/Subtract_active.png')]
          bg-cover bg-top-right bg-no-repeat
          overflow-hidden group"
        >
          <span
            className="absolute inset-0 bg-primary/20 opacity-0
            group-hover:opacity-100 transition-opacity duration-300"
          />

          <span
            className="absolute -left-1/2 top-0 w-[200%] h-full
            bg-gradient-to-r from-transparent via-primary/40 to-transparent
            rotate-[-12deg] translate-x-[-100%]
            group-hover:translate-x-[100%]
            transition-transform duration-700"
          />

          <span className="relative z-10">OPEN FOR HIRE</span>
        </button>
      </div>

      <div className="flex flex-col flex-1 min-w-[240px] mx-2">
        <span className="text-[14px] font-iceland tracking-[0.075em]">
          SOCIAL
        </span>

        <button
          onClick={onOpenToHireClick}
          className="flex items-center justify-between
          text-[18px] font-big-shoulders tracking-[0.075em]
          text-primary uppercase pl-2 pr-3 py-1
          border-2 border-primary
          transition-all duration-300
          hover:bg-primary hover:text-white
          hover:shadow-[0_0_20px_#E84A4A]"
        >
          OPEN CONNECTION <FaBluetoothB />
        </button>
      </div>
    </div>
  );
};

export default LinkMenue;
