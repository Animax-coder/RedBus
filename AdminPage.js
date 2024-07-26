import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [buses, setBuses] = useState([]);
  const [newBus, setNewBus] = useState({ name: '', time: '', price: '' });

  useEffect(() => {
    // Fetch existing buses from an API or database
    const fetchBuses = async () => {
      const response = await fetch('/api/admin/buses'); // replace with actual API endpoint
      const data = await response.json();
      setBuses(data);
    };

    fetchBuses();
  }, []);

  const handleAddBus = () => {
    // Add new bus logic
    setBuses([...buses, newBus]);
    setNewBus({ name: '', time: '', price: '' });
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        {buses.map((bus) => (
          <li key={bus.id}>
            {bus.name} - {bus.time} - {bus.price}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Bus Name"
        value={newBus.name}
        onChange={(e) => setNewBus({ ...newBus, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Time"
        value={newBus.time}
        onChange={(e) => setNewBus({ ...newBus, time: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newBus.price}
        onChange={(e) => setNewBus({ ...newBus, price: e.target.value })}
      />
      <button onClick={handleAddBus}>Add Bus</button>
    </div>
  );
};

export default AdminPage;
