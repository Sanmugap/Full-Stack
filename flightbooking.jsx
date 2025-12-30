import React from "react";

function FlightTicket() {
  const bookTicket = () => {
    // User input using prompt
    const name = prompt("Enter Passenger Name:");
    if (!name) {
      alert("Booking cancelled: Name is required.");
      return;
    }

    const destination = prompt("Enter Destination:");
    if (!destination) {
      alert("Booking cancelled: Destination is required.");
      return;
    }

    const seats = prompt("Enter Number of Seats:");
    if (!seats || isNaN(seats)) {
      alert("Please enter a valid number of seats.");
      return;
    }

    // Confirmation dialog
    const confirmBooking = confirm(
      `Please confirm your booking:\n\nPassenger: ${name}\nDestination: ${destination}\nSeats: ${seats}`
    );

    if (confirmBooking) {
      alert(
        `✅ Booking Confirmed!\n\nPassenger: ${name}\nDestination: ${destination}\nSeats: ${seats}\n\nHave a safe flight ✈️`
      );
    } else {
      alert("❌ Booking Cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Flight Ticket Booking</h2>
      <button onClick={bookTicket}>Book Ticket</button>
    </div>
  );
}

export default FlightTicket;
