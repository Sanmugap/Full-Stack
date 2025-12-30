import React from "react";

class OnlineCab extends React.Component {
  bookCab = () => {
    // Get user details
    let name = prompt("Enter your name:");
    if (!name) {
      alert("Booking cancelled!");
      return;
    }

    let pickup = prompt("Enter pickup location:");
    let drop = prompt("Enter drop location:");

    let cabType = prompt(
      "Select Cab Type:\n1. Mini\n2. Sedan\n3. SUV"
    );

    let fare = 0;
    let cabName = "";

    if (cabType === "1") {
      cabName = "Mini";
      fare = 200;
    } else if (cabType === "2") {
      cabName = "Sedan";
      fare = 350;
    } else if (cabType === "3") {
      cabName = "SUV";
      fare = 500;
    } else {
      alert("Invalid cab type!");
      return;
    }

    // Confirmation
    let confirmBooking = confirm(
      `Confirm Booking?\n\nName: ${name}\nPickup: ${pickup}\nDrop: ${drop}\nCab: ${cabName}\nFare: ₹${fare}`
    );

    if (confirmBooking) {
      alert(
        `Booking Successful!\n\nCab Type: ${cabName}\nTotal Fare: ₹${fare}\n\nThank you for booking!`
      );
    } else {
      alert("Booking cancelled!");
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Online Cab Booking Application</h2>
        <button onClick={this.bookCab}>
          Book Cab
        </button>
      </div>
    );
  }
}

export default OnlineCab;
