import { useState } from 'react';
import { Fpage, Cards, Login,Newad,Itemd } from './components';
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const [isloggedin, setIsloggedin] = useState(false);
  const [username, setUsername] = useState('');
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login isloggedin={isloggedin} setIsloggedin={setIsloggedin} setUsername={setUsername} />} />
          <Route path="/newad" element={<Newad/>}/>
          <Route path="/item/:id" element={<Itemd />} />
          <Route path="/" element={<><Fpage isloggedin={isloggedin} username={username} /><Cards /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
