import { IoMdClose } from "react-icons/io";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDatabase,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiUnity,
  SiRust,
  SiSocketdotio,
} from "react-icons/si";
import { HiArrowLeft } from "react-icons/hi";

const TechBadge = ({ icon: Icon, label }) => (
  <div className="group relative flex items-center gap-2 px-3 py-1 border border-primary/60 text-primary text-sm font-big-shoulders tracking-widest overflow-hidden transition-all duration-300 hover:text-black hover:scale-[1.05] hover:shadow-[0_0_18px_#E84A4A]">
    <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <Icon className="relative z-10 text-lg group-hover:rotate-12 transition-transform duration-300" />
    <span className="relative z-10">{label}</span>
  </div>
);

const Section = ({ title, children }) => (
  <div className="mb-10 animate-[fadeUp_0.6s_ease-out]">
    <h3 className="text-primary font-big-shoulders tracking-[0.25em] text-lg mb-3 animate-pulse">
      {title}
    </h3>
    <div className="border-l border-primary/40 pl-4">{children}</div>
  </div>
);

const ResumeModal = ({ onClose, onNext }) => {
  return (
    <div
      className="fixed xl2:w-140 inset-0 z-50 bg-black/80 flex items-center justify-center animate-fadeIn mt-10"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90%] max-w-5xl max-h-screen bg-black border border-primary shadow-[0_0_45px_rgba(232,74,74,0.45)] animate-[zoomIn_0.5s_ease-out]"
      >
        <span className="absolute top-0 left-0 w-6 h-0.5 bg-primary animate-pulse pointer-events-none" />
        <span className="absolute top-0 left-0 w-0.5 h-6 bg-primary animate-pulse pointer-events-none" />
        <span className="absolute bottom-0 right-0 w-6 h-0.5 bg-primary animate-pulse pointer-events-none" />
        <span className="absolute bottom-0 right-0 w-0.5 h-6 bg-primary animate-pulse pointer-events-none" />

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-[scan_3s_linear_infinite]" />

        <div className="relative max-h-screen overflow-y-auto cyber-scroll p-4">
          <div className="flex justify-between mb-2">
            <button
              onClick={onNext}
              className="
                h-8 flex
                group relative
                items-center gap-3
                px-6 py-2
                border border-primary
                text-primary font-big-shoulders tracking-[0.25em]
                overflow-hidden
                transition-all duration-300
                hover:text-black
                hover:shadow-[0_0_25px_#E84A4A]
            "
            >
              <span
                className="
                absolute inset-0
                bg-primary
                translate-x-[-100%]
                group-hover:translate-x-0
                transition-transform duration-300 ease-out
                "
              />

              <HiArrowLeft
                className="
                relative z-10
                text-xl
                translate-x-0
                group-hover:translate-x-2
                transition-transform duration-300
                "
              />
            </button>
            <button
              onClick={onClose}
              className="
                relative w-8 h-8
                flex items-center justify-center
                border border-primary text-primary
                overflow-hidden
                transition-all duration-300
                hover:scale-110 hover:rotate-90
                hover:shadow-[0_0_15px_#E84A4A]
                group mr-4
              "
            >
              <span
                className="
                  absolute inset-0
                  bg-gradient-to-r from-transparent via-primary to-transparent
                  translate-x-[-100%]
                  group-hover:translate-x-[100%]
                  transition-transform duration-500
                "
              />
              <IoMdClose className="relative z-10" />
            </button>
          </div>
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="animate-[fadeLeft_0.6s_ease-out]">
              <h2 className="text-white font-big-shoulders text-3xl tracking-[0.3em]">
                PRANAV KALE
              </h2>
              <p className="text-secondary text-sm tracking-widest mt-1">
                COMPUTER ENGINEERING STUDENT · BUSINESS ANALYTICS & DIGITAL STRATEGY
              </p>
            </div>
          </div>

          <Section title="PROFILE SUMMARY">
            <p className="text-secondary leading-relaxed text-sm max-w-3xl animate-[fadeUp_0.7s_ease-out]">
              I am a final-year Computer Engineering student with a strong interest in business analytics, digital growth, and data-driven decision-making. I have worked on projects such as an AI-based ATS Resume Tracker using NLP techniques to improve candidate-job matching, and I am currently developing systems that combine technology with real-world business applications. Beyond academics, I am deeply involved in content creation, video editing, and understanding digital trends. I enjoy analyzing how brands grow using content strategies and social media, and I actively work on improving my skills in this domain. My goal is to build a career at the intersection of business, data, and digital strategy, where I can contribute to solving real-world problems and driving measurable impact. I am currently seeking opportunities in digital marketing, business analytics, and content strategy roles where I can apply my skills, learn continuously, and grow in a fast-paced environment.
            </p>
          </Section>

          <Section title="CORE TECHNOLOGY STACK">
            <div className="flex flex-wrap gap-3">
              <TechBadge icon={SiJavascript} label="JavaScript" />
              <TechBadge icon={FaPython} label="Python" />
              <TechBadge icon={FaJava} label="Java" />
              <TechBadge icon={SiRust} label="Rust" />
              <TechBadge icon={FaReact} label="React" />
              <TechBadge icon={FaVuejs} label="Vue.js" />
              <TechBadge icon={SiTailwindcss} label="Tailwind CSS" />
              <TechBadge icon={FaNodeJs} label="Node.js" />
              <TechBadge icon={SiExpress} label="Express.js" />
              <TechBadge icon={SiDjango} label="Django" />
              <TechBadge icon={SiFlask} label="Flask" />
            </div>
          </Section>

          <Section title="DATABASES & STORAGE">
            <div className="flex flex-wrap gap-3">
              <TechBadge icon={SiMysql} label="MySQL" />
              <TechBadge icon={SiPostgresql} label="PostgreSQL" />
              <TechBadge icon={SiMongodb} label="MongoDB" />
              <TechBadge icon={FaDatabase} label="SQL" />
            </div>
          </Section>

          <Section title="SYSTEMS & TOOLS">
            <div className="flex flex-wrap gap-3">
              <TechBadge icon={FaGitAlt} label="Git" />
              <TechBadge icon={SiSocketdotio} label="Socket.IO" />
              <TechBadge icon={SiUnity} label="Unity 3D" />
              <TechBadge icon={FaDocker} label="Docker" />
            </div>
          </Section>

          <div className="mt-10 text-right text-[10px] tracking-widest text-secondary animate-pulse">
            SYSTEM PROFILE · RECRUITER MODE ENABLED
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
