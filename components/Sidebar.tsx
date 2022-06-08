import React from 'react'
import Image from "next/image";
const Sidebar = () => {
  return (
    <>
      <Image
        src="https://i.ibb.co/6Rjt92g/MdRony.jpg"
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="150px"
        width="150px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Md.</span> Rony
      </h3>
    </>
  );
}

export default Sidebar