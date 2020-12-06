import React, { FormEvent, useState } from 'react';

// import Values from 'values.js';

const Colors: React.FC = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try{
    //   let colors = new Values(color).all(10);
    //   console.log(colors);
    } catch(error) {
      setError(true);
      console.log(error);
    }

  }

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={color} 
              onChange={(e) => setColor(e.target.value)} 
              placeholder="#f15025"  
            />
            <button className="btn" type="submit" >submit</button>
        </form>
      </section> 
      <section className="colors">
        <h4>list goes here</h4>
      </section>
    </>
  )
};

export default Colors;