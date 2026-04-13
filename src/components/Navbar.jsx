import { useState, useEffect } from "react";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [coins, setCoins] = useState(() => {
    const saved = localStorage.getItem("portfolio-coins");
    return saved ? parseInt(saved, 10) : 0;
  });
  const [clicks, setClicks] = useState(() => {
    const saved = localStorage.getItem("portfolio-clicks");
    return saved ? parseInt(saved, 10) : 0;
  });

  // Calculate level based on clicks (every 10 clicks = 1 level)
  const level = Math.floor(clicks / 10) + 1;

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Track clicks on the document
  useEffect(() => {
    const handleClick = () => {
      setClicks((prev) => {
        const newClicks = prev + 1;
        localStorage.setItem("portfolio-clicks", newClicks.toString());
        return newClicks;
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Save coins to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("portfolio-coins", coins.toString());
  }, [coins]);

  const addCoins = (e) => {
    e.stopPropagation(); // Prevent double counting the click
    setCoins((prev) => prev + 10);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDateTime = (date) => {
    return date.toTimeString().slice(0, 5);
  };

  return (
    <nav
      className="xl3:flex hidden flex-row justify-between items-center h-[92px] font-big-shoulders"
      aria-label="Game status bar"
    >
      <section className="flex flex-row gap-10 ml-14">
        <div className="flex flex-row gap-1 justify-start items-end">
          <span className="text-tertiary text-[26px] leading-none">
            {level}
          </span>
          <span className="text-secondary text-[16px]">LEVEL</span>
        </div>

        <div className="flex flex-row gap-1 justify-start items-end">
          <button
            type="button"
            onClick={addCoins}
            className="text-[18px] font-bold text-primary border border-secondary w-8.25 h-8.25 hover:bg-primary hover:text-black transition-colors"
            aria-label="Add coins"
          >
            +
          </button>
          <span className="text-tertiary text-[26px] leading-none">
            {coins.toLocaleString()}
          </span>
          <span className="text-secondary text-[16px]">COINS AWARDED</span>
        </div>
      </section>

      <section className="mr-14 text-[14px] flex flex-row gap-6 justify-between items-end">
        <span className="text-white">credits</span>

        <span className="text-secondary">
          LOCAL TIME{" "}
          <time className="text-white" dateTime={formatDateTime(currentTime)}>
            {formatTime(currentTime)}
          </time>
        </span>
      </section>
    </nav>
  );
};

export default Navbar;
