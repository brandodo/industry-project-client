import React, { useState } from "react";

export default function Times({ children, times, setTimes }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={
        toggle
          ? "timeBooking__option timeBooking__option--active"
          : "timeBooking__option"
      }
      onClick={() => {
        const temp = [...times];
        const timeIndex = temp.findIndex((item) => item === children);

        if (timeIndex !== -1) {
          temp.splice(timeIndex, 1);
        } else {
          temp.push(children);
        }

        setTimes(temp);
        setToggle(!toggle);
      }}
    >
      {children}
    </div>
  );
}
