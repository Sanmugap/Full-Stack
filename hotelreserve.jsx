import React from "react";

function HotelReserve() {
  function reserveHotel() {
    // Prompt dialogs for user input
    const guestName = prompt("Enter Guest Name:");
    if (!guestName) {
      alert("Guest name is required!");
      return;
    }

    const roomType = prompt("Enter Room Type (Single / Double / Deluxe):");
    if (!roomType) {
      alert("Room type is required!");
      return;
    }

    const numberOfDays = prompt("Enter Number of Days to Stay:");
    if (!numberOfDays || isNaN(numberOfDays)) {
      alert("Please enter a valid number of days!");
      return;
    }

    // Confirm dialog
    const confirmReservation = confirm(
      `Confirm Reservation Details:\n\nGuest Name: ${guestName}\nRoom Type: ${roomType}\nDays: ${numberOfDays}`
    );

    // Alert dialog
    if (confirmReservation) {
      alert(
        `🏨 Reservation Successful!\n\nGuest: ${guestName}\nRoom Type: ${roomType}\nStay: ${numberOfDays} Days\n\nEnjoy your stay!`
      );
    } else {
      alert("❌ Reservation Cancelled.");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hotel Reservation System</h1>
      <button onClick={reserveHotel}>Reserve Hotel Room</button>
    </div>
  );
}

export default HotelReserve;
