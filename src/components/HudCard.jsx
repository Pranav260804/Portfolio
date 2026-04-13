import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const HudCard = ({ title, content, onExpand }) => {
  const contentRef = useRef(null);
  const [isClipped, setIsClipped] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setIsClipped(
        contentRef.current.scrollHeight >
          contentRef.current.clientHeight
      );
    }
  }, [content]);

  return (
    <motion.div
      layout
      className="relative bg-black/80 border border-secondary/40 p-4
                 h-[120px] w-full
                 shadow-[inset_0_0_25px_rgba(255,0,0,0.12)]
                 overflow-hidden flex flex-col"
    >
      <h3 className="text-primary font-big-shoulders tracking-widest md:text-[14px] text-[12px] mb-2">
        {title}
      </h3>

      <p
        ref={contentRef}
        className={`text-secondary font-iceland md:text-[12px] text-[10px] tracking-[0.06em]
          overflow-hidden
          ${isClipped ? "line-clamp-4" : "line-clamp-5"}`}
      >
        {content}
      </p>

      {isClipped && (
        <div className="mt-auto pt-1 flex justify-end">
          <button
            onClick={onExpand}
            className="text-primary md:text-[10px] text-[8px] tracking-widest
                       hover:text-white transition
                       bg-black/60 px-2
                       border border-primary/40
                       shadow-[0_0_8px_rgba(255,0,0,0.35)]"
          >
            + EXPAND
          </button>
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-0
        bg-[linear-gradient(120deg,transparent,rgba(255,0,0,0.15),transparent)]
        opacity-30"
      />
    </motion.div>
  );
};

export default HudCard;
