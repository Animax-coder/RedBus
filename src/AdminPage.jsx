import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [buses, setBuses] = useState([]);
  const [newBus, setNewBus] = useState({ name: '', time: '', price: '' });

  useEffect(() => {
    const fetchBuses = async () => {
      const data = [
        { id: 1, name: 'Bus 1', time: '10:00 AM', price: '$10' },
        { id: 2, name: 'Bus 2', time: '12:00 PM', price: '$12' }
      ];
      setBuses(data);
    };

    fetchBuses();
  }, []);

  const handleAddBus = () => {
    setBuses([...buses, { ...newBus, id: buses.length + 1 }]);
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
