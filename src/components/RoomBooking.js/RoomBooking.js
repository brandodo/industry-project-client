import React, { useState } from "react";
import { scaleDown } from "react-burger-menu";
// import map from "../../assets/images/sup46map.png";
import map from "../../assets/images/Map.jpg";
import "./RoomBooking.scss";

export default function RoomBooking({ color, setColor }) {
  const [zoom, setZoom] = useState({});

  const colorLower = color.toLowerCase();
  const createZoom = (x, y) => {
    setZoom({ transform: "scale(2.3)", position: "relative", left: x, top: y });
  };

  return (
    <section className="roomBooking">
      <h3 className="roomBooking__header">
        Which location would you like to work in?
      </h3>
      <div className="roomBooking__mapContainer">
        <img
          className="roomBooking__map"
          src={map}
          alt="office-map"
          style={zoom}
        />
      </div>
      <div className="roomBooking__options">
        <div
          className={
            colorLower === "red"
              ? "roomBooking__option roomBooking__option--active"
              : "roomBooking__option"
          }
          onClick={() => {
            createZoom(130, -150);
            setColor("Red");
          }}
        >
          Red
        </div>
        <div
          className={
            colorLower === "blue"
              ? "roomBooking__option roomBooking__option--active"
              : "roomBooking__option"
          }
          onClick={() => {
            createZoom(120, 20);
            setColor("Blue");
          }}
        >
          Blue
        </div>
        <div
          className={
            colorLower === "green"
              ? "roomBooking__option roomBooking__option--active"
              : "roomBooking__option"
          }
          onClick={() => {
            createZoom(180, 120);
            setColor("Green");
          }}
        >
          Green
        </div>
        <div
          className={
            colorLower === "orange"
              ? "roomBooking__option roomBooking__option--active"
              : "roomBooking__option"
          }
          onClick={() => {
            createZoom(-60, 120);
            setColor("Orange");
          }}
        >
          Orange
        </div>
        <div
          className={
            colorLower === "pink"
              ? "roomBooking__option roomBooking__option--active"
              : "roomBooking__option"
          }
          onClick={() => {
            createZoom(-220, 120);
            setColor("Pink");
          }}
        >
          Pink
        </div>
        <div
          className={
            colorLower === "yellow"
              ? "roomBooking__option roomBooking__option--active"
              : "roomBooking__option"
          }
          onClick={() => {
            createZoom(-220, 10);
            setColor("Yellow");
          }}
        >
          Yellow
        </div>
      </div>
    </section>
  );
}
