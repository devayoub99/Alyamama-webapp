const VideoLogo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="lg:w-[300px] lg:h-[460px] md:w-[200px] md:h-[330px] w-35 mx-auto md:block"
    >
      <source src="/logo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoLogo;
