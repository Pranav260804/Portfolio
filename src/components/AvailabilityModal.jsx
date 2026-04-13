import emailjs from '@emailjs/browser';
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const AvailabilityModal = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const isValid =
    form.name.trim().length >= 2 &&
    /^\S+@\S+\.\S+$/.test(form.email) &&
    form.message.trim().length >= 10;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!isValid || status === "loading") return;

    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error("FAILED...", error);
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  };

  const handleClear = () => {
    const isAlreadyEmpty = !form.name && !form.email && !form.message;

    setForm({ name: "", email: "", message: "" });

    if (isAlreadyEmpty) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Enter" && isValid) {
        handleSubmit();
      }
      if (e.key === "Escape") {
        handleClear();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [form, isValid]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-start font-iceland xl3:ml-20 mx-4 uppercase">
      <div className="flex flex-col gap-8">
        <section className="flex flex-col pl-6">
          <div className="text-[18px] text-white flex justify-between items-center">
            <p>open for hire</p>
            <button
              onClick={onClose}
              className="
                relative w-8 h-8 flex items-center justify-center
                border border-primary text-primary
                transition-all duration-300
                hover:rotate-90 hover:shadow-[0_0_15px_#E84A4A] mr-4
              "
            >
              <IoMdClose />
            </button>
          </div>
          <p className="text-[14px] text-pentary">
            I would love to hear about your projects!
          </p>
        </section>

        <section className="[clip-path:polygon(10px_0,100%_0,100%_100%,0_100%,0_10px)] p-6 bg-septary border border-quatrary flex flex-col gap-6 xl3:w-118">
          <div>
            <span className="text-primary text-[18px] font-big-shoulders tracking-[0.075em]">
              How should I call you?
            </span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="your name"
              className="
                w-full h-11 px-4 bg-black border border-quatrary
                text-primary tracking-widest caret-primary
                placeholder:text-[#7A7A7A] placeholder:uppercase
                outline-none focus:border-primary
                transition-all duration-300
                focus:shadow-[0_0_12px_rgba(232,74,74,0.6),inset_0_0_8px_rgba(232,74,74,0.4)]
              "
            />
          </div>

          <div>
            <span className="text-primary text-[18px] font-big-shoulders tracking-[0.075em]">
              Sending from
            </span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="
                w-full h-11 px-4 bg-black border border-quatrary
                text-primary tracking-widest caret-primary
                placeholder:text-[#7A7A7A] placeholder:uppercase
                outline-none focus:border-primary
                transition-all duration-300
                focus:shadow-[0_0_12px_rgba(232,74,74,0.6),inset_0_0_8px_rgba(232,74,74,0.4)]
              "
            />
          </div>

          <div>
            <span className="text-primary text-[18px] font-big-shoulders tracking-[0.075em]">
              transmitted data
            </span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder="describe your mission..."
              className="
                w-full px-4 py-3 bg-black border border-quatrary
                text-primary tracking-widest caret-primary resize-none
                placeholder:text-[#7A7A7A] placeholder:uppercase
                outline-none focus:border-primary
                transition-all duration-300
                focus:shadow-[0_0_16px_rgba(232,74,74,0.6),inset_0_0_10px_rgba(232,74,74,0.4)]
              "
            />
          </div>
        </section>

        <section className="flex gap-4 pl-6">
          <button
            onClick={handleSubmit}
            disabled={!isValid || status === "loading"}
            className={`
              px-6 py-2 font-big-shoulders tracking-[0.15em]
              transition-all duration-300 uppercase
              ${
                status === "error"
                  ? "bg-red-600 text-white hover:shadow-[0_0_20px_#DC2626]"
                  : status === "success"
                  ? "bg-green-500 text-black hover:shadow-[0_0_20px_#22C55E]"
                  : "bg-primary text-black hover:shadow-[0_0_20px_#E84A4A]"
              }
              ${(!isValid || status === "loading") ? "opacity-50 pointer-events-none" : ""}
            `}
          >
            {status === "loading"
              ? "SENDING..."
              : status === "success"
              ? "SENT!"
              : status === "error"
              ? "ERROR! TRY AGAIN"
              : "SEND MESSAGE [ENTER]"}
          </button>

          <button
            onClick={handleClear}
            disabled={status === "loading"}
            className={`
              border border-primary text-primary
              px-6 py-2 tracking-[0.15em]
              transition-all duration-300 uppercase
              hover:bg-[#2A2A2A]
              hover:text-primary
              hover:shadow-[0_0_10px_rgba(232,74,74,0.4)]
              ${status === "loading" ? "opacity-50 pointer-events-none" : ""}
            `}
          >
            DISCARD [ESC]
          </button>
        </section>
      </div>
    </div>
  );
};

export default AvailabilityModal;
