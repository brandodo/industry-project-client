import axios from "axios";
import { useState } from "react";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import EventModal from "../../components/EventModal/EventModal";
import EventsList from "../../components/EventsList/EventsList";
import API_URL from "../../components/utils";
import "./EventsPage.scss";

export default function EventsPage({ user }) {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState();
  const [confirm, setConfirm] = useState(false);

  const displayModal = (eventData) => {
    setCurrent(eventData);
    setShow(true);
  };

  // create event booking entry
  const bookEvent = (eventName) => {
    axios
      .post(`${API_URL}/booking/event`, {
        email: user.email,
        eventname: eventName,
      })
      .then((res) => {
        setShow(false);
        setConfirm(true);
      });
  };

  return (
    <section className="eventsPage">
      {show && (
        <EventModal data={current} bookEvent={bookEvent} setShow={setShow} />
      )}
      {confirm && (
        <ConfirmationModal
          type="event"
          data={current}
          clickHandler={setConfirm}
        />
      )}
      <h2 className="eventsPage__header">Events</h2>
      <EventsList displayModal={displayModal} />
    </section>
  );
}
