import React from "react";
import "./BookingCard.scss";

export default function BookingCard({ data, type, email }) {
  let tempArr;
  let circleStyle;

  const colorPicker = (color) => {
    switch (color) {
      case "Red":
        circleStyle = { backgroundColor: "#8D3D4B" };
        break;
      case "Blue":
        circleStyle = { backgroundColor: "#838DC6" };
        break;
      case "Green":
        circleStyle = { backgroundColor: "#638454" };
        break;
      case "Orange":
        circleStyle = { backgroundColor: "#D3955A" };
        break;
      case "Pink":
        circleStyle = { backgroundColor: "#E69CE6" };
        break;
      case "Yellow":
        circleStyle = { backgroundColor: "#CABB78" };
        break;
    }
  };

  const timeConvert = (time) => {
    switch (time) {
      case "8AM to 10AM":
        return "8-10AM";

      case "10AM to 12PM":
        return "10AM-12PM";

      case "12PM to 2PM":
        return "12-2PM";

      case "2PM to 4PM":
        return "2-4PM";

      case "4PM to 6PM":
        return "4-6PM";

      case "6PM to 8PM":
        return "6-8PM";
    }
  };

  if (type === "room") {
    const { booking, roomname } = data;
    tempArr = booking.filter((time) => time.useradded.includes(email));
    colorPicker(roomname);
  } else {
    const { location } = data;
    const tempColor = location.replace(" Room", "");
    colorPicker(tempColor);
  }

  return (
    <div className="bookingCard">
      <div className="bookingCard__circle" style={circleStyle}></div>
      <div className="bookingCard__container">
        <h4 className="bookingCard__header">
          {type === "event" ? "Event" : "Working"}
        </h4>
        <p className="bookingCard__text">
          {type === "event" ? data.name : "Room Booked"}
        </p>
        <p className="bookingCard__text">
          {type === "event" ? data.location : `${data.roomname} Room`}
        </p>
        <p className="bookingCard__text">
          {type === "event"
            ? data.time
            : tempArr[0] == undefined
            ? ""
            : timeConvert(tempArr[0].timeperiod)}
        </p>
      </div>
    </div>
  );
}
