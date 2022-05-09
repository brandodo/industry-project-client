import React from "react";

export default function BookedDetails() {
  return (
    <div className="bookedModal__detailsInfo">
      <div className="bookedModal__detailsRow">
        <p className="bookedModal__detailsLabel">Room/Desk</p>
        <p className="bookedModal__detailsText"></p>
      </div>
      <div className="bookedModal__detailsRow">
        <p className="bookedModal__detailsLabel">location</p>
        <p className="bookedModal__detailsText"></p>
      </div>
      <div className="bookedModal__detailsRow">
        <p className="bookedModal__detailsLabel">Time</p>
        <p className="bookedModal__detailsText"></p>
      </div>
    </div>
  );
}
