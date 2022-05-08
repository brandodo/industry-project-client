import React, { useState } from "react";
import BookingOptions from "../../components/BookingOptions/BookingOptions";
import RoomBooking from "../../components/RoomBooking.js/RoomBooking";
import DeskBooking from "../../components/DeskBooking/DeskBooking";
import TimeBooking from "../../components/TimeBooking/TimeBooking";
import "./BookingPage.scss";

export default function BookingPage() {
  const [booking, setBooking] = useState("");
  const [color, setColor] = useState("");
  const [times, setTimes] = useState([]);

  const disableButton = !booking || !color || !times.length;
  return (
    <main className="booking">
      <h2 className="booking__header">Book In-Office Time</h2>
      <form className="booking__form">
        <BookingOptions setBooking={setBooking} />
        {booking === "room" ? (
          <>
            <RoomBooking color={color} setColor={setColor} />
            <TimeBooking times={times} setTimes={setTimes} />
            <div className="booking__submitContainer">
              <input
                className={
                  disableButton
                    ? "booking__submit booking__submit--disabled"
                    : "booking__submit"
                }
                disabled={disableButton}
                type="submit"
                value="Confirm Booking"
              />
            </div>
          </>
        ) : booking === "desk" ? (
          <DeskBooking />
        ) : (
          ""
        )}
      </form>
    </main>
  );
}
