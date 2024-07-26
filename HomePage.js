import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    // Fetch available buses from an API or database
    const fetchBuses = async () => {
      const response = await fetch('/api/buses'); // replace with actual API endpoint
      const data = await response.json();
      setBuses(data);
    };

    fetchBuses();
  }, []);

  return (
    <div>
      <h1>Available Buses</h1>
      <ul>
        {buses.map((bus) => (
          <li key={bus.id}>
            {bus.name} - {bus.time} - {bus.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
