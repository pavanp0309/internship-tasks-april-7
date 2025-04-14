import React from 'react';
import SessionList from './components/SessionList';
import './App.css';

const sessionsData = [
  { name: 'Morning Focus', category: 'Focus', duration: '15 mins', isLocked: false, isPremium: false, description: 'Boost your focus in the morning.', isNew: true },
  { name: 'Deep Sleep', category: 'Sleep', duration: '30 mins', isLocked: true, isPremium: true, description: 'Fall asleep peacefully.', isNew: false },
  { name: 'Calm Down', category: 'Anxiety', duration: '20 mins', isLocked: false, isPremium: false, description: 'Ease anxiety after work.', isNew: false },
  { name: 'Premium Focus', category: 'Focus', duration: '25 mins', isLocked: true, isPremium: true, description: 'Unlock your premium focus session.', isNew: false },
  { name: 'Night Sleep', category: 'Sleep', duration: '45 mins', isLocked: false, isPremium: false, description: 'A peaceful sleep session.', isNew: true },
];

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5">Meditation Sessions</h1>
      <SessionList sessionsData={sessionsData} />
    </div>
  );
};

export default App;
