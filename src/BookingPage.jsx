import React, { useState } from 'react';

const BookingPage = () => {
  const [selectedBus, setSelectedBus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleBooking = () => {
    alert(`Booking confirmed for ${name} (${email}) on bus ${selectedBus}`);
  };

  return (
    <div>
      <h1>Book Your Seat</h1>
      <select onChange={(e) => setSelectedBus(e.target.value)}>
        <option value="">Select Bus</option>
        <option value="1">Bus 1</option>
        <option value="2">Bus 2</option>
        <option value="1">Bus 3</option>
        <option value="2">Bus 4</option>
      </select>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleBooking}>Book</button>
    </div>
  );
};

export default BookingPage;
