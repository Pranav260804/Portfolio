import { useEffect, useRef, useState } from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import DescriptionModal from "../components/DescriptionModal";
import AvailabilityModal from "../components/AvailabilityModal";
import NetworkModal from "../components/NetworkModal";
import LinkMenue from "../components/LinkMenue";
import ResumeModal from "../components/ResumeModal";

const MODALS = {
  about: DescriptionModal,
  availability: AvailabilityModal,
  hire: NetworkModal,
  aboutmain: ResumeModal,
};

const MainSection = ({ RenderComponent }) => {
  const usePerspective = useRef(false);
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (type) => {
    setActiveModal(type);
    usePerspective.current = true;
  };

  const closeModal = () => {
    setActiveModal(null);
    usePerspective.current = false;
  };

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <div className="relative h-dvh w-screen bg-black overflow-x-hidden overflow-y-auto perspective-[2600px] no-scrollbar">
      {activeModal && (
        <div className="fixed inset-0 z-40 bg-black/60" onClick={closeModal} />
      )}

      {activeModal === "about" && (
        <DescriptionModal
          onClose={closeModal}
          onNext={() => openModal("aboutmain")}
        />
      )}

      {activeModal === "aboutmain" && (
        <ResumeModal onClose={closeModal} onNext={() => openModal("about")} />
      )}

      {activeModal === "availability" && (
        <AvailabilityModal onClose={closeModal} />
      )}

      {activeModal === "hire" && <NetworkModal onClose={closeModal} />}

      <div
        className="h-full w-full transition-transform duration-700 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "right center",
          transform: usePerspective.current
            ? "rotateY(-50deg) scaleY(0.94)"
            : "none",
        }}
      >
        <div className="h-full flex flex-col">
          <Navbar />

          <div className="flex-1 flex xl2:flex-row xl3:flex-col-reverse flex-col mt-4">
            <About
              onAboutClick={() => openModal("about")}
              onAvailabilityClick={() => openModal("availability")}
              onOpenToHireClick={() => openModal("hire")}
            />

            {RenderComponent && <RenderComponent />}

            <LinkMenue
              onAboutClick={() => openModal("about")}
              onAvailabilityClick={() => openModal("availability")}
              onOpenToHireClick={() => openModal("hire")}
            />
          </div>
        </div>
      </div>

      {usePerspective.current && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,0.9)]" />
        </>
      )}
    </div>
  );
};

export default MainSection;
