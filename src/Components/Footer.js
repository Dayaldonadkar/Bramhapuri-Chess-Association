import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center  bg-gray-700">
      <div className="flex justify-between w-4/6 text-white font-light">
        <div>
          <div>
            <h1 className="text-2xl py-5 border-b border-red-300 font-normal">
              Navigation
            </h1>
          </div>
          <div className="px-2 py-5 space-y-3">
            <p>»About Us</p>
            <p>»Acheivers</p>
            <p>»Latest News</p>
            <p>»Upcoming Events</p>
            <p>»Downloads</p>
          </div>
        </div>

        <div>
          <div>
            <h1 className="text-2xl py-5 border-b border-red-300 font-normal">
              Important Links
            </h1>
          </div>

          <div className="px-2 py-5 space-y-3">
            <p>»World Chess Organisation</p>
            <p>»Asian Chess federation</p>
            <p>»All India chess federation</p>
            <p>»Sports Autority of India</p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-2xl py-5 border-b-2 font-normal">Reach Us</h1>
          </div>
          <div className="px-2 py-5 space-y-3">
            <p>Office:</p>
            <p>Vikrant Book Depot,</p>
            <p>Renuka mata chowk</p>
            <p>Bramhapuri</p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-2xl py-5 border-b border-red-300 font-normal">
              Locate Us
            </h1>
          </div>

          <div className="space-y-3 text-sm">
            <p>»World Chess Organisation</p>
            <p>»Asian Chess federation</p>
            <p>»All India chess federation</p>
            <p>»Sports Autority of India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
