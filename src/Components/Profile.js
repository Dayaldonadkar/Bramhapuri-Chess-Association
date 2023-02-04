import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex justify-start w-2/4 bg-gray-700 py-1 text-lg text-white">
        <h1 className="">Organisation Profile</h1>
      </div>
      <div className="flex justify-center py-10">
        <div className="w-2/4">
          <img
            className="float-left pr-10"
            src="http://orissachessassociation.com/upload/Untitled-1.jpg"
            alt=""
          />

          <p className="text-lg">
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
      <footer className="flex w-2/4 justify-between">
        <div>
          <div>
            <h1>Navigation</h1>
          </div>
          <div>
            <p>About Us</p>
            <p>Acheivers</p>
            <p>Latest News</p>
            <p>Upcoming Events</p>
            <p>Downloads</p>
          </div>
        </div>

        <div>
          <div>
            <h1>Important Links</h1>
          </div>

          <div>
            <p>World Chess Organisation</p>
            <p>Asian Chess federation</p>
            <p>All India chess federation</p>
            <p>Sports Autority of India</p>
          </div>
        </div>

        <div>
          <h1>Reach Us</h1>
          <p>Office:</p>
          <p>Vikrant Book depot Renuka mata chowk Bramhapuri</p>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
