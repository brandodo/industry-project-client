import React from "react";
import { Link } from "react-router-dom";
import BookingList from "./BookingList";
import "./Schedule.scss";

export default function Schedule({ user }) {
  const { event, booking, email } = user;

  return (
    <section className="schedule">
      <h3 className="schedule__header">My Office Working Schedule</h3>
      {event.length || booking.length ? (
        <BookingList events={event} booking={booking} email={email} />
      ) : (
        <p className="schedule__text">
          Book your on-site working schedule and enjoy your office hours!
        </p>
      )}
      <Link className="schedule__button" to="/booking">
        Book In-Office Time
      </Link>
    </section>
  );
}
