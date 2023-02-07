import React from "react";
import Footer from "./Footer";

const Profile = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex justify-start w-4/6 bg-gray-700 py-1 text-lg text-white">
        <h1 className="px-5 py-2">Organisation Profile</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-4/6 pt-5">
          <div className="flex justify-center">
            <h1 className="text-3xl font-medium space-x-3">
              <span>About</span>
              <span className="text-blue-400">Us</span>
            </h1>
          </div>
          <p className="text-base font-light py-10 leading-6 px-10">
            THE BRAMHAPRI TALUKA CHESS ASSOCIATION is a society formed in the
            year 1959 and registered under Societies Registration Act , through
            the efforts of Sri K.C. Mitra. He became its founder secretary and
            Sri V. Ramanathan, I.A.S., its first president with an elected
            executive body. It was registered in the year 1964-65 and since then
            it has been conducting chess tournaments regularly keeping in mind
            to promote chess from the grass-root level. Besides organizing chess
            tournaments the association is giving free chess coaching. Some of
            the were trained under us. The Chess revolution in BRAMHAPRI started
            when ‘The Telegraph’, the Calcutta-based leading English daily of
            eastern India introduced the Bhubaneswar leg of “The Telegraph
            Schools’ Chess Championship” in 2001 due to the efforts of then
            Secretary, Sri Gagan Behari Dash. More than 270 children
            participated every year. The persons due to whose effort this
            association was formed were Mr Khitish Mishra, Mr J.M. Joardar, Mr
            Kesabananda Das and Mr K.D. Pillai, Mr. B.N. Acharya. Mr Arati Bijoy
            Mohanty joined them 3-4 years later and carried on till he died on
            20-04-2019. We have produced many top chess players of the country
            like IM Padmini Rout, WGM Kiran Monisha Mohanty, Ruttumbara Bidhar,
            IM S. Satyapragyan, FM Soumya Ranjan Mishra, IM Anwesh Upadhayaya,
            Biswajit Nayak and Manas Parida & several other players who have
            brought laurels to the State.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
