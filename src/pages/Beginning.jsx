import CornerDesign from "../components/CornerDesign";
import VideoPlayback from "../components/VideoPlayback";

const Beginning = () => {
  return (
    <>
      <div className="xl3:hidden text-white font-iceland tracking-[0.075em] text-[18px] uppercase pt-5 text-center px-4">
        swimming through a vast network of interconnected devices and servers,
        spreading joy and whimsy to users across the globe
      </div>
      <div className="relative flex-1 xl2:mb-12 border border-quatrary xl3:max-h-[766px] sm:min-h-[400px] min-h-[250px] xl:mr-2 xl:ml-2 mr-5 ml-5">
        <VideoPlayback />
        <CornerDesign />
        <div className="w-full h-full flex flex-col justify-between items-center">
          <span className="xl3:block hidden text-white font-iceland tracking-[0.075em] text-[18px] w-155.75 uppercase mt-5 text-center">
            swimming through a vast network of interconnected devices and
            servers, spreading joy and whimsy to users across the globe
          </span>
        </div>
      </div>
    </>
  );
};
export default Beginning;
