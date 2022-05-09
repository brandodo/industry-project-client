import React from "react";
import BookedButton from "./BookedButton";
import BookedDetails from "./BookedDetails";
import "./BookedModal.scss";

export default function BookedModal() {
  return (
    <div className="bookedModal">
      <h3 className="bookedModal__header">Workspace booked!</h3>
      <div className="bookedModal__details">
        <h4 className="bookedModal__detailsHeader">Details</h4>
        <BookedDetails />
      </div>
      <div className="bookedModal__container">
        <h3 className="bookedModal__header">Join an event after hard work?</h3>
        <div className="bookedModal__buttons">
          <BookedButton>Yes, View Events</BookedButton>
          <BookedButton>Not Now</BookedButton>
        </div>
      </div>
    </div>
  );
}
