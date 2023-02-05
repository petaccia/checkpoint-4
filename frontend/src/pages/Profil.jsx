import React from "react";
import IndexLog from "../components/log/IndexLog";

function Profil() {
  return (
    <div className="pt-20 h-[100vh] bg-gradient-to-r from-sky-400 to-blue-900 ">
      <IndexLog signin={false} signup />
    </div>
  );
}
export default Profil;
