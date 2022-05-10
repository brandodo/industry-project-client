import ConfirmationButton from "./ConfirmationButton";
import ConfirmationDetails from "./ConfirmationDetails";
import EventDescription from "../EventDescription/EventDescription";
import "./ConfirmationModal.scss";

export default function ConfirmationModal({ type, data, clickHandler }) {
  const workModal = type === "work";

  return (
    <div className="bookedModal">
      <div className="bookedModal__box">
        <h3 className="bookedModal__header">
          {workModal ? "Workspace" : "Event"} booked!
        </h3>
        <div className="bookedModal__details">
          {!workModal && <EventDescription data={data} />}
          <h4 className="bookedModal__detailsHeader">Details</h4>
          <ConfirmationDetails workModal={workModal} data={data} />
        </div>
        <div className="bookedModal__container">
          {workModal && (
            <h3 className="bookedModal__header">
              Join an event after hard work?
            </h3>
          )}
          <div className="bookedModal__buttons">
            <ConfirmationButton link={workModal ? "/events" : "/dashboard"}>
              {workModal ? "Yes, View Events" : "Back to Dashboard"}
            </ConfirmationButton>
            <ConfirmationButton
              name="second"
              link={workModal ? "/dashboard" : "/events"}
              clickHandler={workModal ? "" : clickHandler}
            >
              {workModal ? "Not Now" : "Book Another Event"}
            </ConfirmationButton>
          </div>
        </div>
      </div>
    </div>
  );
}
