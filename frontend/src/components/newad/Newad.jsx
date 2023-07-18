import './newad.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/image.png'

const Newad = () => {
  const [rtitle, settitle] = useState('');
  const [rdescreption, setdescreption] = useState('');
  const [price, setprice] = useState('');
  const navigate = useNavigate();

function handlenewad(event) {
    event.preventDefault();
    var formdata = new FormData();
    formdata.append("title", rtitle);
    formdata.append("price", price);
    formdata.append("description", rdescreption);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8000/ads/", requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.m === 'g') {
          console.log("ok");
          navigate('/');
        }
        else{
         console.log("هعی")
        }
      })
      .catch(error => console.log('error', error));

}

return (
  <div className="newad">
    <div className="container">
    <div className="adimage">
    <img src={image}/>
    </div>
    <div className="adtext">
    <h1>ثبت آگهی ملک</h1>
    <form>
      <input type="text" placeholder='عنوان آگهی' value={rtitle} onChange={(e) => settitle(e.target.value)} />
      <input type="text" placeholder='قیمت' value={price} onChange={(e) => setprice(e.target.value)} />
      <textarea type="text" placeholder='توضیحات' value={rdescreption} onChange={(e) => setdescreption(e.target.value)} />
      <button type="submit" onClick={handlenewad}>ثبت</button> 
    </form>
    </div>
    </div>
  </div>
)

}
export default Newad;