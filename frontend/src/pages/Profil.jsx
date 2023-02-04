import React from "react";
import reseau from "@assets/reseau.jpg";

function Profil() {
  return (
    <div className=" flex items-center justify-end h-[100vh] bg-gradient-to-r from-sky-400 to-blue-900 ">
      <div className="">
        <div className=" bg-teal-900">
          <img src={reseau} alt="group" className="w-[90vh] h-[50vh] " />
        </div>
      </div>
    </div>
  );
}
export default Profil;
