import BookingCard from "./BookingCard";

export default function BookingList({ events, booking, email }) {
  // only displaying a preview of 2 events and 1 work room booking
  // full list of bookings will be part of a later enhancement
  const eventList = events.map((item, index) => {
    return (
      <BookingCard key={`eventBooking-${index}`} data={item} type="event" />
    );
  });

  const bookingList = booking.map((item, index) => {
    return (
      <BookingCard
        key={`booking-${index}`}
        data={item}
        type="room"
        email={email}
      />
    );
  });

  return (
    <div className="bookingList">
      {eventList.slice(0, 2)}
      {bookingList.slice(0, 1)}
    </div>
  );
}
