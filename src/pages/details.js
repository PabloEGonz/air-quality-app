import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import CardDetails from '../components/cardDetls';
import NavBar from '../components/NavBar';

const Details = () => {
  const { airdata } = useSelector((state) => state.airqa);
  const { city } = useParams();
  const selected = airdata.filter((ele) => ele.name === city);
  return (
    <>
      <NavBar />
      <ul className="card-container-details">
        {selected.map((ele) => (
          <CardDetails key={uuidV4()} data={ele} />
        ))}
      </ul>
    </>
  );
};

export default Details;
