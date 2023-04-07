import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';




const MentalHealthPage = () => {
    const [mentalHealthData, setMentalHealthData] = useState([
      { type: 'Depression', count: 150 },
      { type: 'Anxiety', count: 100 },
      { type: 'Bipolar Disorder', count: 75 },
      { type: 'Schizophrenia', count: 50 },
      { type: 'Obsessive-Compulsive Disorder', count: 25 },
    ]);
  
    const totalPatients = mentalHealthData.reduce((total, { count }) => total + count, 0);
  
    const pieChartData = mentalHealthData.map(({ type, count }) => ({
      title: type,
      value: count,
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    }));
  
    return (
      <div className="mental-health-page">
        <div className="chart-container">
          <h2 className="chart-title">Mental Health Patients in India</h2>
          <PieChart
            data={pieChartData}
            label={({ dataEntry }) => dataEntry.title + ': ' + dataEntry.value}
            labelStyle={{ fontSize: '2px', fontFamily: 'sans-serif' }}
            labelPosition={80}
            lineWidth={30}
            radius={20}
            segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
            segmentsShift={(index) => (index === 0 ? 2 : 1)}
          />
        </div>
        <div className="info-container">
          <h3>Total Patients: {totalPatients}</h3>
          <p>
            Mental health problems affect millions of people in India. Fortunately, many of these problems can be treated
            effectively with the right care and support. Some of the most common mental health problems in India include
            anxiety, depression, and bipolar disorder. If you or someone you know is struggling with a mental health
            problem, it's important to seek help as soon as possible.
          </p>
          <p>
            There are many resources available to help people with mental health problems in India, including counseling,
            therapy, and medication. With the right treatment, people with mental health problems can recover and lead
            healthy, fulfilling lives.
          </p>
        </div>
      </div>
    );
  };
  export default MentalHealthPage;
  