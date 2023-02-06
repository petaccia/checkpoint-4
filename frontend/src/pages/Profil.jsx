import Navbar from "@components/navbar";
// import apiConnexion from "@services/apiConnexion";
import React from "react";

// const ProfilType = {
//   email,
//   hashedPassword,
//   profilPicture,
//   firstname,
//   lastname,
// };

function Profil() {
  //   const [user, setUser] = useState(ProfilType);

  //   const getAllUsers = () => {
  //     apiConnexion
  //       .get(`/users`)
  //       .then((users) => setUser(users.data))
  //       .catch((error) => console.error(error));
  //   };

  //   useEffect(() => {
  //     getAllUsers();
  //   }, []);

  //   const handleUsers = (place, value) => {
  //     const newUser = { ...user };
  //     newUser[place] = value;
  //     setUser(newUser);
  //   };

  //   sendForm = (e) => {
  //     e.preventDefault();
  //   };

  // const selectUsers = (id) => {
  //   const use = user.find((e) => e.id === parseInt(id, 10));
  //   setUser(use);
  // };

  return (
    <div className=" h-[100vh] bg-gradient-to-r from-sky-400 to-blue-900 ">
      <Navbar />
    </div>
  );
}
export default Profil;
