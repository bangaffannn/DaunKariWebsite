import React from "react";
import Img1 from "../assets/coffee-1.jpg";

export default function About() {
  return (
    <section className="bg-black">
      <div className="container mx-auto">
        <div className="flex justify-center mx-10 items-center grid md:grid-cols-2 gap-x-6">
          <div>
            <h1 className="text-white text-6xl leading-tight font-serif pt-10">
              Tentang <span className="text-primary font-bold">Kami</span>
            </h1>
            <p className="text-white text-justify mt-10">
              Daun Kari menghadirkan kelezatan <span className="text-primary font-bold">masakan
              tradisional Indonesia yang memikat lidah dan menggugah selera.</span>
              {" "}Terletak di pusat kota yang ramai, restoran ini menawarkan{" "}
              <span className="text-primary font-bold">pengalaman kuliner yang autentik dan memikat bagi para pecinta
              masakan Indonesia.</span>
            </p>
            <p className="text-white text-justify mt-5">
              Dengan dekorasi yang kental akan unsur budaya dan tradisi,
              Daun Kari memberikan suasana yang <span className="text-primary font-bold">hangat dan
              nyaman bagi para tamu yang datang.</span> Dari musik tradisional hingga
              sentuhan arsitektur khas Indonesia, setiap sudut restoran
              memancarkan <span className="text-primary font-bold">keindahan dan keaslian budaya nusantara.</span>
            </p>
          </div>
          <img
            className="h-120 w-auto grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
            src={Img1}
            alt="coffee"
          />
        </div>
      </div>
    </section>
  );
}
