import React from "react";

class Event extends React.Component {
  register = () => {
    // Ask for user details
    let name = prompt("Enter your name:");
    if (!name) {
      alert("Registration cancelled!");
      return;
    }

    let email = prompt("Enter your email:");
    if (!email) {
      alert("Registration cancelled!");
      return;
    }

    let eventType = prompt(
      "Choose Event Type:\n1. Workshop\n2. Seminar\n3. Conference"
    );

    let eventName = "";
    switch (eventType) {
      case "1":
        eventName = "Workshop";
        break;
      case "2":
        eventName = "Seminar";
        break;
      case "3":
        eventName = "Conference";
        break;
      default:
        alert("Invalid event type!");
        return;
    }

    // Confirm registration
    let confirmReg = confirm(
      `Confirm Registration Details:\n\nName: ${name}\nEmail: ${email}\nEvent: ${eventName}`
    );

    if (confirmReg) {
      alert(`Registration Successful!\n\nThank you, ${name}, for registering for the ${eventName}.`);
    } else {
      alert("Registration Cancelled!");
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Event Registration</h2>
        <button onClick={this.register}>Register Now</button>
      </div>
    );
  }
}

export default Event;
