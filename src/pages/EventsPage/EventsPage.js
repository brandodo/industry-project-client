import EventsList from "../../components/EventsList/EventsList";
import "./EventsPage.scss";

export default function EventsPage() {
  return (
    <section className="eventsPage">
      <h2 className="eventsPage__header">Events</h2>
      <EventsList />
    </section>
  );
}
