import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center">
      <div className="w-3/5">
        <div className="flex justify-center py-8 ">
          <h1 className="font-medium text-xl shadow-cyan-500/50">CONTACT US</h1>
        </div>
        <div className="flex">
          <div className="w-3/6">
            <h1>Get in touch with Bramhapuri chess Association</h1>
            <h1 className="">Full Name</h1>
            <input
              className="border border-black w-full rounded-md py-1"
              placeholder="Enter Your Full Name"
            />

            <h1>Email</h1>
            <input
              className="w-full border border-black rounded-md py-1"
              placeholder="Enter your Email here"
            />
          </div>

          <div>
            <h1>Are You ready to get started</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
