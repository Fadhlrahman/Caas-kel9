import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase'; // Pastikan path sesuai dengan struktur file Anda
import { Container } from "react-bootstrap";
import "./CMcss.css";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const MonitoringAlat = () => {
  const [sensorData, setSensorData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase(app);
        const sensorRef = ref(db, 'sensor');

        onValue(sensorRef, (snapshot) => {
          const data = snapshot.val();
          setSensorData(data);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="justify-content-center" style={{ fontSize: '25px'}}>
    <div> 
      <h3 className='tab-space'>
        Monitoring Alat
      </h3>
      {error ? (
        <p>Error: {error}</p>
      ) : sensorData ? (
        <ul>
          <div className={`member ${sensorData.card_valid === 'Card Valid' ? 'valid' : 'denied'}`}>
            <strong >Card Valid:</strong> {sensorData.card_valid}
          </div>
          <div className={`member ${sensorData.condition === 'Lampu Menyala' ? 'on' : 'off'}`}>
            <strong>Condition:</strong> {sensorData.condition}
          </div>
          <div className="member">
            <strong>LDR:</strong> {sensorData.ldr}
          </div>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </Container>
  );
};

export default MonitoringAlat;