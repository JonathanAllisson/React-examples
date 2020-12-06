import React from 'react';
import TourItem from './TourItem';
import { Tour } from './TourItem';

interface Props {
  tours: Tour[],
  removeTour: (id: number) => void;
}

const TourList: React.FC<Props> = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
            <TourItem key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  )
}

export default TourList;