import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    // Example data fetching, replace with actual API call
    const fetchBuses = async () => {
      const data = [
        { id: 1, name: 'Bus 1', time: '10:00 AM', price: '$10' },
        { id: 2, name: 'Bus 2', time: '12:00 PM', price: '$12' },
        { id: 3, name: 'Bus 3', time: '01:30 AM', price: '$30' },
        { id: 4, name: 'Bus 4', time: '02:00 PM', price: '$50' }
      ];  
    
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
