import React from 'react';
import Img from '../../assets/im1.png';
import { Link } from 'react-router-dom';

import './styles.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="box">
        <Link to="tour">
          <img src={Img} alt="p1"/>
        </Link>
      </div>
      <div className="box">
        <Link to="colors">
          <img />
        </Link>
      </div>
    </div>
  )
};

export default Home;