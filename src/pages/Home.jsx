import React from "react";

export default function Home() {
  return (
    <section className="lg:min-h-screen p-8">
      <div className="container mx-auto text-white">
        <div>
          <div className="flex justify-start items-center grid grid-cols-2">
            <h1 className="text-6xl leading-tight font-serif m-5 pt-10">
              BRINGS BACK <span className="font-bold text-primary"> YOUR MEMORIES </span>{" "}
              THROUGH ORIENTAL{" "}
              <span className="font-bold text-primary"> INDONESIAN FOOD. </span>
            </h1>
          </div>
          <button className="m-5 mb-10 px-4 py-2 rounded-md border border-2 border-gray-700 hover:border-primary hover:scale-110 transition-all duration-300 ease-in-out">Reservation Now</button>
        </div>
      </div>
    </section>
  );
  }