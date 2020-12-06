import React, { useEffect, useState } from 'react';

import Loading from './Loading';
import TourList from './TourList';
import { Tour } from './TourItem';

import './styles.css';

const url = 'https://course-api.com/react-tours-project';

const App: React.FC = () => {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id: number) => {
    const newTours = tours.filter((tour: Tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const toursReq = await response.json();
    setLoading(false);
    setTours(toursReq);
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if(tours.length === 0){
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()} >refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <TourList tours={tours} removeTour={removeTour} />
    </main>
  )
};

export default App;
