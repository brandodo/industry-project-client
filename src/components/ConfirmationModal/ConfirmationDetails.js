import React from "react";

export default function ConfirmationDetails({ workModal, data }) {
  let timeList;

  // handle format of time string
  if (workModal) {
    const { time } = data;
    timeList = time.join(", ");
  }

  return (
    <div className="bookedModal__detailsInfo">
      {workModal && (
        <div className="bookedModal__detailsRow">
          <p className="bookedModal__detailsLabel">Room/Desk</p>
          <p className="bookedModal__detailsText">Room</p>
        </div>
      )}
      <div className="bookedModal__detailsRow">
        <p className="bookedModal__detailsLabel">Location</p>
        <p className="bookedModal__detailsText">{data.location}</p>
      </div>
      <div className="bookedModal__detailsRow">
        <p className="bookedModal__detailsLabel">Time</p>
        <p className="bookedModal__detailsText">
          {workModal ? timeList : data.time}
        </p>
      </div>
    </div>
  );
}
