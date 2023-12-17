import { MdOutlineFileDownload } from "react-icons/md";
const Banner = () => {
  return (
    <div className=" h-[700px] pt-32  lg:bg-black mb-10">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-4">
        <div className="lg:w-[50%] text-center lg:text-left px-5 lg-px-0  lg:text-primary-content text-black py-10">
          <h2 className="text-2xl font-semibold mb-3">Assalamu-Alaikum</h2>
          <h1 className="text-xl font-semibold mb-3">
            My Name Is{" "}
            <span className="text-5xl text-[#15803d] font-bold">
              Setu Akter
            </span>
          </h1>
          <h3 className="text-xl font-semibold">I am a Front End Developer</h3>
          <h2 className="text-xl font-bold mb-3">
            Passionate about Pixels, Dedicated to Performance
          </h2>
          <p className="lg:text-primary-content text-black mb-4">
            In this space, I go beyond the conventional,designing tomorrows web
            today. I believe in a harmonious union of innovation and intuition,
            where each line of code tells a story and every user interaction is
            an opportunity to create lasting impressions. As a Pixel
            Perfectionist, I transform your visionary concepts into visually
            stunning and engaging realities, ensuring that every pixel is in its
            right place, contributing to the overall narrative.
          </p>
          <a href="/public/setu-resume/Richard.pdf" download>
          <button className="btn text-left btn-outline border-0 border-[#15803d] border-b-4 text-xl lg:text-white text-black">
          <MdOutlineFileDownload /> My resume
          </button>
          </a>
        </div>
        <div className="w-[50%] flex justify-end ">
          <div className="hidden lg:block">
            <img
              className="h-[500px]"
              src="https://i.ibb.co/Jz5nZNq/img-setu.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
