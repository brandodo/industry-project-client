import { useState } from "react";
import BookingOptions from "../../components/BookingOptions/BookingOptions";
import RoomBooking from "../../components/RoomBooking.js/RoomBooking";
import DeskBooking from "../../components/DeskBooking/DeskBooking";
import TimeBooking from "../../components/TimeBooking/TimeBooking";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import API_URL from "../../components/utils";
import axios from "axios";
import "./BookingPage.scss";

export default function BookingPage({ user }) {
  const [booking, setBooking] = useState("");
  const [color, setColor] = useState("");
  const [times, setTimes] = useState([]);
  const [booked, setBooked] = useState(false);
  const [bookingData, setData] = useState({});

  const disableButton = !booking || !color || !times.length;

  // create booking entry for each time slot selected
  const confirmBooking = () => {
    times.forEach((time) => {
      axios
        .post(`${API_URL}/booking`, {
          roomname: color,
          roomid: assignRoomId(color),
          time: timeConvert(time),
          date: new Date().toDateString(),
          email: user.email,
        })
        .then((res) => {
          setData({
            location: `${color} Room`,
            time: times,
            date: new Date().toDateString(),
          });

          setBooked(true);
        })
        .catch((err) => {
          return err;
        });
    });
  };

  // accommodate for time formatting - on list of enhancements
  const timeConvert = (time) => {
    switch (time) {
      case "8-10AM":
        return "8AM to 10AM";

      case "10AM-12PM":
        return "10AM to 12PM";

      case "12-2PM":
        return "12PM to 2PM";

      case "2-4PM":
        return "2PM to 4PM";

      case "4-6PM":
        return "4PM to 6PM";

      case "6-8PM":
        return "6PM to 8PM";

      default:
        return;
    }
  };

  // room id assignment - on list of enhancements
  const assignRoomId = (room) => {
    switch (room.toLowerCase()) {
      case "red":
        return "1";

      case "blue":
        return "2";

      case "green":
        return "3";

      case "orange":
        return "4";

      case "pink":
        return "5";

      case "yellow":
        return "6";

      default:
        return;
    }
  };

  return (
    <main className="booking">
      {booked && <ConfirmationModal type="work" data={bookingData} />}
      <h2 className="booking__header">Book In-Office Time</h2>
      <form
        className="booking__form"
        onSubmit={(event) => {
          event.preventDefault();
          confirmBooking();
        }}
      >
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
