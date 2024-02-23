import React from "react";

const HeaderSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {"Hello, I'm John Doe"}
          </span>
        </h1>
        <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
      </div>
    </section>
  );
};

export default HeaderSection;
