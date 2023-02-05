import React from "react";
import reseau from "@assets/reseau.jpg";
import IndexLog from "@components/Log/IndexLog";

function Profil() {
  return (
    <div className=" flex items-center justify-end h-[100vh] bg-gradient-to-r from-sky-400 to-blue-900 ">
      <IndexLog />
      <div className="">
        <div className="md:mr-20">
          <img
            src={reseau}
            alt="group"
            className=" w-0 md:w-[90vh] h-[50vh] "
          />
        </div>
      </div>
    </div>
  );
}
export default Profil;
