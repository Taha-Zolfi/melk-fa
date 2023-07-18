import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import './itemdetails.css'

const Itemd = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch item details using id
    fetch(`http://127.0.0.1:8000/ads/`)
      .then(response => response.json())
      .then(data => setItem(data[id]));
  }, []);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-details">
      <h1 className="item-title">{item.title}</h1>
      <p className="item-description">{item.description}</p>
      <p className="item-price">تومان {item.price}</p>
    </div>
  );
};

export default Itemd;