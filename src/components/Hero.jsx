import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-4 lg:mt-10">
      <h1 className="text-6xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Automate Work.
        <br />
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          Accelerate Growth.
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Let FlowPilot handle the busywork, so your team can focus on creating
        real value.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-pink-400 to-pink-700 py-3 px-6 mx-3 rounded-md"
        >
          Get Started
        </a>
        <a
          href="#"
          className="py-3 px-6 mx-3 rounded-md hover:bg-gradient-to-r from-pink-400 to-pink-700 hover:text-white border border-pink-500 text-pink-500"
        >
          Watch Demo
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-pink-500 shadow-pink-300 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-pink-500 shadow-pink-300 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
