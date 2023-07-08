import React, { useState, useEffect } from 'react';
import '../styles/filtered.css';
import { useSelector } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import Card from './card';

const Filtered = () => {
  const { airdata } = useSelector((state) => state.airqa);
  const [filt, setFilt] = useState([]);
  const [categ, setCateg] = useState('all');

  const handleCatChng = (e) => {
    setCateg(e.target.value);
  };
  useEffect(() => {
    if (categ === 'best') {
      const newArray = airdata.filter((ele) => ele.aqi <= 2);
      setFilt(newArray);
    } else if (categ === 'worst') {
      const newArray = airdata.filter((ele) => ele.aqi >= 3);
      setFilt(newArray);
    } else if (categ === 'all') {
      setFilt(airdata);
    }
  }, [categ, airdata]);

  return (
    <>
      <div className="filtered">
        <form action="POST">
          <select name="filter" id="form-filter" onChange={handleCatChng}>
            <option value="worst">Worst</option>
            <option value="best">Best</option>
            <option value="all" selected>All</option>
          </select>
        </form>
      </div>
      <ul className="card-container">
        {filt.map((ele) => (
          <Card key={uuidV4()} data={ele} />
        ))}
      </ul>
    </>

  );
};

export default Filtered;
