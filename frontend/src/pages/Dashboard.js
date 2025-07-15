import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [pizzaVarieties, setPizzaVarieties] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVarieties = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/pizza/varieties');
        const data = await res.json();
        if (res.ok) {
          setPizzaVarieties(data);
        } else {
          setError('Failed to load pizza varieties');
        }
      } catch (err) {
        setError('Server error');
      }
    };
    fetchVarieties();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Available Pizza Varieties</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <ul>
        {pizzaVarieties.map(pizza => (
          <li key={pizza._id}>
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            {pizza.imageUrl && <img src={pizza.imageUrl} alt={pizza.name} width="200" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
