import { IoMdClose } from "react-icons/io";
import { HiArrowRight } from "react-icons/hi";

const DescriptionModal = ({ onClose, onNext }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-start font-iceland xl3:ml-15 xl3:mr-0 ml-4 mr-4 overflow-y-auto py-4">
      <div className="flex flex-col gap-5 uppercase text-white w-full max-w-120">
        <section className="flex flex-col border-b-4 border-primary pb-2">
          <div className="flex flex-row justify-between items-center">
            <div className="tracking-[0.2em]">ABOUT ME</div>

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

          <p className="text-pentary text-[14px] tracking-widest">
            Everything About Me
          </p>
        </section>

        <section className="overflow-x-auto">
          <table className="border-separate border-spacing-x-2 sm:border-spacing-x-4 md:border-spacing-x-8 border-spacing-y-4 text-[14px] w-full">
            <tbody>
              <tr>
                <td className="text-white align-top whitespace-nowrap">Name</td>
                <td className="text-pentary align-top">Pranav Kale</td>
              </tr>

              <tr>
                <td className="text-white align-top whitespace-nowrap">Role</td>
                <td className="text-pentary align-top">
                  Software Developer and final-year Computer Engineering student
                </td>
              </tr>

              <tr>
                <td className="text-white align-top whitespace-nowrap">
                  Focus
                </td>
                <td className="text-pentary align-top">
                  Focused on full-stack development with modern web technologies
                  and scalable system design
                </td>
              </tr>

              <tr>
                <td className="text-white align-top whitespace-nowrap">
                  Value
                </td>
                <td className="text-pentary align-top">
                  I enjoy solving real-world problems by turning ideas into
                  reliable, production-ready systems
                </td>
              </tr>

              <tr>
                <td className="text-white align-top whitespace-nowrap">
                  Summary
                </td>
                <td className="text-pentary align-top space-y-2">
                  <div>
                    Software Developer and final-year Computer Engineering
                    student with experience building scalable web applications
                    and platforms.
                  </div>
                  <div>
                    Developed and owned end-to-end products including Academiq
                    (AI-powered LMS) and Threadly (real-time networking
                    platform), working across frontend, backend, databases, and
                    deployment workflows.
                  </div>
                </td>
              </tr>

              <tr>
                <td className="text-white align-top whitespace-nowrap">
                  Availability
                </td>
                <td className="text-pentary align-top">
                  Actively seeking full-time or internship opportunities, open
                  to remote and on-site roles
                </td>
              </tr>

              <tr>
                <td className="text-white align-top whitespace-nowrap">
                  Based In
                </td>
                <td className="text-pentary align-top">Mumbai, India</td>
              </tr>
            </tbody>
          </table>
        </section>
        <div className="flex justify-end">
          <button
            onClick={onNext}
            className="
              group relative flex items-center gap-3
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

            <span className="relative z-10">NEXT</span>

            <HiArrowRight
              className="
                relative z-10
                text-xl
                translate-x-0
                group-hover:translate-x-2
                transition-transform duration-300
              "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DescriptionModal;
