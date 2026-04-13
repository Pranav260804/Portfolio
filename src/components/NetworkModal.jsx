import { IoMdClose } from "react-icons/io";
import { FaGithub, FaLinkedin, FaInstagram, FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ConnectionItem = ({ icon: Icon, label, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      group relative flex items-center justify-between
      px-5 py-4
      border border-quatrary
      bg-black
      text-primary
      tracking-widest uppercase
      transition-all duration-300
      hover:border-primary
      hover:shadow-[0_0_18px_rgba(232,74,74,0.5)]
    "
  >
    <div className="flex items-center gap-4">
      <Icon className="text-2xl group-hover:scale-110 transition-transform duration-300" />
      <span className="font-big-shoulders text-[16px]">{label}</span>
    </div>

    <span className="text-[12px] text-pentary group-hover:text-primary transition">
      {value}
    </span>

    <span
      className="
        absolute inset-0
        bg-gradient-to-r from-transparent via-primary/10 to-transparent
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-300
        pointer-events-none
      "
    />
  </a>
);

const NetworkModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-start font-iceland xl3:ml-20 mx-4 uppercase">
      <div className="flex flex-col gap-8 xl3:w-118">
        <section className="flex flex-col pl-6">
          <div className="text-[18px] text-white flex justify-between items-center">
            <p>all connections</p>
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
            choose your preferred channel
          </p>
        </section>

        <section className="[clip-path:polygon(10px_0,100%_0,100%_100%,0_100%,0_10px)] p-6 bg-septary border border-quatrary flex flex-col gap-4">
          <ConnectionItem
            icon={FaGithub}
            label="GitHub"
            value="github.com/Pranav260804"
            href="https://github.com/Pranav260804"
          />

          <ConnectionItem
            icon={FaLinkedin}
            label="LinkedIn"
            value="linkedin.com/in/pranav-kale-809501340"
            href="https://www.linkedin.com/in/pranav-kale-809501340/"
          />

          <ConnectionItem
            icon={FaInstagram}
            label="Instagram"
            value="instagram.com/praannav"
            href="https://www.instagram.com/praannav/"
          />

          <ConnectionItem
            icon={MdEmail}
            label="Gmail"
            value="kalepranav2608@gmail.com"
            href="mailto:kalepranav2608@gmail.com"
          />

          <ConnectionItem
            icon={FaFilePdf}
            label="Resume"
            value="download pdf"
            href="/resume/Resume.pdf"
          />
        </section>

        <section className="pl-6 text-[11px] tracking-widest text-pentary">
          direct access · recruiter mode enabled
        </section>
      </div>
    </div>
  );
};

export default NetworkModal;
