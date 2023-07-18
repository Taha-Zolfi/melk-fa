import './cards.css'
import Card from '../card/Card'
import { useEffect , useState} from 'react';

const Cards = () => {
  const [data, setData] = useState(null);
    
  useEffect(() => {
    fetch('http://127.0.0.1:8000/ads/')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  let cardha = []
  if (data) {
    for(let i = 0; i < data.length; i++){
      cardha.push(<Card item={data[i]} />)
    }
  }

  return (
    <div className='cards'>
        {cardha}
    </div>
  );
}

export default Cards;
