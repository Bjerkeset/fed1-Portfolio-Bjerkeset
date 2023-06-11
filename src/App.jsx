import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <main
      id="homepage"
      className="flex justify-center items-center relative overflow-hidden "
    >
      <div class="grid-class"></div>
      <section className="relative flex flex-col  items-center background-class h-[80vh] pt-20vh p-0 w-full">
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex">
            <h2 className="text-base md:text-3xl xl:text-6xl">
              I'M B. BJERKESET, A TOP
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <h2 className="text-base md:text-3xl xl:text-6xl my-auto">
              FRONT-END
            </h2>
            <h1 className="text-base md:text-3xl xl:text-6xl bg-dimgrey-main p-2 rounded-xl">
              WEB DEVELOPER
            </h1>
            <h2 className="text-base md:text-3xl xl:text-6xl my-auto">
              PROSPECT
            </h2>
          </div>
        </div>
        <div className="relative z-10 flex-wrap pt-8">
          <button className="rounded-2xl px-8 bg-gradient-button text-xl transition-colors duration-500 hover:bg-[#CD104D] text-black">
            Schedule A Call
          </button>

          <button className="btn-view-portfolio px-8 border-b">
            View Portfolio{" "}
            <FontAwesomeIcon
              className="fa-arrow-right"
              icon={faArrowRightLong}
            />
          </button>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
