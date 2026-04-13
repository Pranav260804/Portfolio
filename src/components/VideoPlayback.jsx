const VideoPlayback = () => {
  return (
    <div className="absolute inset-0 bg-black -z-1">
      <video
        className="w-full xl3:h-full object-cover"
        src="/videos/bg_video_loop_2.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        fetchpriority="high"
        disablePictureInPicture
        disableRemotePlayback
        poster="/images/image 1.png"
      />
    </div>
  );
};

export default VideoPlayback;
