import React from "react";
import { Link } from "react-router-dom";
import "./Schedule.scss";

export default function Schedule() {
  return (
    <section className="schedule">
      <h3 className="schedule__header">My Office Working Schedule</h3>
      <p className="schedule__text">
        Book your on-site working schedule and enjoy your office hours!
      </p>
      <div className="schedule__card">
        dummy text - office 1 @ 2:00PM to 5:00PM
      </div>
      <Link className="schedule__button" to="/booking">
        Book In-Office Time
      </Link>
    </section>
  );
}
