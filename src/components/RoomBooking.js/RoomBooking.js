import React, { useState } from "react";
import { scaleDown } from "react-burger-menu";
import map from "../../assets/images/sup46map.png";
import "./RoomBooking.scss";

export default function RoomBooking({ color, setColor }) {
  const [zoom, setZoom] = useState({});

  const createZoom = (x, y) => {
    setZoom({ transform: "scale(2)", position: "relative", left: x, top: y });
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
            color === "red"
              ? "roomBooking__option roomBooking__option--active"
              : "roomBooking__option"
          }
          onClick={() => {
            createZoom(120, -150);
            setColor("red");
          }}
        >
          Red
        </div>
        <div
          className={
            color === "blue"
              ? "roomBooking__option roomBooking__option--active"
              : "roomBooking__option"
          }
          onClick={() => {
            createZoom(120, 20);
            setColor("blue");
          }}
        >
          Blue
        </div>
        <div
          className={
            color === "green"
              ? "roomBooking__option roomBooking__option--active"
              : "roomBooking__option"
          }
          onClick={() => {
            createZoom(180, 120);
            setColor("green");
          }}
        >
          Green
        </div>
        <div
          className={
            color === "orange"
              ? "roomBooking__option roomBooking__option--active"
              : "roomBooking__option"
          }
          onClick={() => {
            createZoom(-60, 120);
            setColor("orange");
          }}
        >
          Orange
        </div>
        <div
          className={
            color === "pink"
              ? "roomBooking__option roomBooking__option--active"
              : "roomBooking__option"
          }
          onClick={() => {
            createZoom(-220, 120);
            setColor("pink");
          }}
        >
          Pink
        </div>
        <div
          className={
            color === "yellow"
              ? "roomBooking__option roomBooking__option--active"
              : "roomBooking__option"
          }
          onClick={() => {
            createZoom(-220, 10);
            setColor("yellow");
          }}
        >
          Yellow
        </div>
      </div>
    </section>
  );
}
