import React from "react";

const Coaches = () => {
  return (
    <div className="flex py-16 justify-center">
      <div className="flex space-x-20 w-4/6">
        <div className="bg-slate-100 border border-1 pb-10 rounded-lg">
          <div className="space-y-5">
            <img
              className="w-64 h-72"
              src="https://starsunfolded.com/wp-content/uploads/2013/08/John-Abraham-Photo-4.jpg"
            />
            <div>
              <h1>Dayal Donadkar</h1>
              <h1>Contact: 9423669658</h1>
            </div>
          </div>
        </div>

        <div className="border border-1">
          <img
            className="w-64 h-72"
            src="https://starsunfolded.com/wp-content/uploads/2013/08/John-Abraham-Photo-4.jpg"
          />
          <div>
            <h1>Dayal Donadkar</h1>
            <h1>Contact: 9423669658</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaches;
