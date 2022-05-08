import React, { useState } from "react";
import "./BookingOptions.scss";

export default function BookingOptions({ setBooking }) {
  const [active, setActive] = useState("");

  return (
    <section className="booking__options">
      <h3 className="booking__text">What are you booking today?</h3>
      <div
        className={
          active === "room"
            ? "booking__button booking__button--active"
            : "booking__button"
        }
        onClick={() => {
          setActive("room");
          setBooking("room");
        }}
      >
        Book a Room
      </div>
      <div
        className={
          active === "desk"
            ? "booking__button booking__button--active"
            : "booking__button"
        }
        onClick={() => {
          setActive("desk");
          setBooking("desk");
        }}
      >
        Book a Desk
      </div>
    </section>
  );
}
