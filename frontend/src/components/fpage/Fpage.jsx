import './fpage.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Fpage = ({ isloggedin, username }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="fpage">
<div className="navbar">
  {isloggedin ? (
    <div className='hi'>سلام {username}</div>
  ) : (
    <Link to="/login">
      <div className="sign">ورود / ثبت نام</div>
    </Link>
  )}
  <Link to="/newad">
  <div className="sabt">ثبت آگهی</div></Link>
</div>

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <p>خرید و فروش ملک و املاک راحت و سریع</p>
      <div className="serch">
        <input type="text" placeholder="دنبال چی میگردی ...؟" onChange={(e) => setQuery(e.target.value)} />
      </div>
    </div>
  );
};

export default Fpage;
