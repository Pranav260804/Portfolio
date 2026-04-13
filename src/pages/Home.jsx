import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="
        w-full min-h-screen
        flex flex-col md:flex-row
        justify-center items-center
        gap-6 md:gap-10
        text-white
        px-4 sm:px-6 md:px-12
      "
    >
      {/* HI TEXT */}
      <div className="flex-shrink-0">
        <h1
          className="
            font-big-shoulders-display
            text-primary
            tracking-[-0.06em]
            text-[140px]
            sm:text-[220px]
            md:text-[360px]
            lg:text-[536px]
            leading-none
          "
        >
          HI!
        </h1>
      </div>

      {/* CONTENT */}
      <div
        className="
          font-iceland
          tracking-[0.075em]
          flex flex-col gap-4 sm:gap-6
          p-2 sm:p-4
          w-full
          max-w-[734px]
          text-center md:text-left
        "
      >
        <p className="text-[16px] sm:text-[20px] md:text-[26px]">
          Welcome to my personal website.
        </p>

        <p className="text-[14px] sm:text-[18px] md:text-[20px]">
          I have created this website to feel like a game/sci-fi interface. All
          text inside tries to reflect this.
        </p>

        <p className="text-[14px] sm:text-[18px] md:text-[20px]">
          You will find ‘achievements’ or ‘quests’ that show the progress in my
          professional life and are related to what I am working on.
        </p>

        <Link
          to="/beginning"
          className="
            inline-flex w-fit mx-auto md:mx-0
            text-primary
            items-center justify-center
            border-2 border-primary
            px-8 sm:px-10 md:px-12
            py-3 sm:py-4
            uppercase
            tracking-[0.15em]
            text-[14px] sm:text-[16px] md:text-[18px]
            transition-all duration-300
            hover:bg-primary
            hover:text-white
            hover:shadow-[0_0_20px_#E84A4A]
            focus:outline-none
            focus:ring-2 focus:ring-primary
          "
        >
          ENTER THE SYSTEM
        </Link>
      </div>
    </div>
  );
};

export default Home;
