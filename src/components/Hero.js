import React from "react";
import img2 from "../images/img2.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-pink-200 -[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold uppercase mb-10">
            <div className="w-10 h-[2px] bg-red-500 mr-3 ">New Trend</div>
          </div>
          <div>
            <h1 className="text-[70px] leading-[1.1] font-light mb-4">
              AUTUMN SALE STYLISH <br />
              <span>WOMENS</span>
            </h1>
          </div>

          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={img2} alt="" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
