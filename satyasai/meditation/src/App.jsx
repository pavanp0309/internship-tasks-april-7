import React from 'react';
import Card from './Components/Card';

const App = () => {
  const sessions = [
    {
      id: 1,
      name: "Morning Focus",
      category: "Focus",
      duration: "15 min",
      locked: false,
      isPremium: true,
      image: "https://images.unsplash.com/photo-1483513208063-7ae9315481fa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       description: "A session to help you start your day with focused energy."
    },
    {
      id: 2,
      name: "Deep Sleep",
      category: "Sleep",
      duration: "30 min",
      locked: true,
      isPremium: true,
      image: "https://cdn.shopify.com/s/files/1/0255/9777/1885/files/how_to_increase_deep_sleep.jpg?v=1697619942",
      description: "A calming session to help you unwind and fall into a restful sleep. Ideal for reducing stress before bed."
    },
    {
      id: 3,
      name: "Quick Calm",
      category: "Anxiety",
      duration: "10 min",
      locked: false,
      isPremium: false,
      image: "https://images.squarespace-cdn.com/content/v1/5803bc249de4bb01bc022766/1692113184576-XSN5I5BWE799HMZC2Y20/radu-florin-CwTBt6jyagQ-unsplash.jpg?format=1500w",
      description: "A short session designed to calm the mind and reduce anxiety, perfect for a quick mental reset."
    },
    {
      id: 4,
      name: "Power Nap",
      category: "Sleep",
      duration: "20 min",
      locked: false,
      isPremium: true,
      image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/06/06/12/napping-woman.jpg",
      description: "A session designed to boost creativity and unlock your full potential, perfect for writers, artists, and thinkers."
    },
    {
      id: 5,
      name: "Creative Flow",
      category: "Focus",
      duration: "25 min",
      locked: true,
      isPremium: false,
      image: "https://external-preview.redd.it/unlocking-creative-flow-how-the-brain-enters-the-zone-v0-jLjaUUZCE1Z-7lOIdiFvXVU7L-7lvIt4aMN88UTwKa4.jpg?width=640&crop=smart&auto=webp&s=43fb19ecc96ea7ac7d73746f24ca2464e6157323",
      description: "A session designed to boost creativity and unlock your full potential, perfect for writers, artists, and thinkers."
  },
    {
      id: 6,
      name: "Evening Wind Down",
      category: "Anxiety",
      duration: "18 min",
      locked: false,
      isPremium: false,
      image: "https://alpha.uscreencdn.com/images/programs/880288/horizontal/Evening_Wind_Down.1642730334.png?auto=webp&width=700",
      description: "A peaceful session to relax and prepare for a good night's rest, helping you let go of the day's worries."
    },
  ];

  return (
    <div className='container text-center'>
      <h1><b>Meditation Sessions</b></h1>
    <div className="min-vh-100 py-5" style={{ background: 'linear-gradient(135deg,rgb(125, 146, 195), #80deea)' }}>
      <div className="row justify-content-center gap-4 px-3">
        {sessions.map((session) => (
          <div className="col-md-3 col-sm-6 d-flex" key={session.id}>
            <Card sessions={session} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default App;
