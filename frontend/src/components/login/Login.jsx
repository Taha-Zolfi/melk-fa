import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ isloggedin, setIsloggedin, setUsername }) => {
  const [rpassword, setpassword] = useState('');
  const [rusername, setusername] = useState('');
  const [result, setresult] = useState('');
  const navigate = useNavigate();

function handlelogin(event) {
    event.preventDefault();

    var formdata = new FormData();
    formdata.append("username", rusername);
    formdata.append("password", rpassword);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8000/users/login/", requestOptions)
    .then(response => response.json())
    .then(data => {
       if (data.message === "good") {
         console.log("ok");
         setIsloggedin(true);
         setUsername(rusername);
         navigate('/');
       }
       else if(data.message === "ne"){
        setresult("شما وجود ندارید")
       }
       else if(data.message === "error") { setresult("رمز اشتباهه")}
       else {
        setresult("یه مشکل وجود داره")
       }
    })
    .catch(error => console.log("error", error));
}

function handlesignup(event) {
  event.preventDefault();

  var formdata = new FormData();
  formdata.append("username", rusername);
  formdata.append("password", rpassword);
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch("http://localhost:8000/users/register/", requestOptions)
  .then(response => response.json())
  .then(data => {
     if (data.message === "usc") {
       console.log("ok");
       setIsloggedin(true);
       setUsername(rusername);
       navigate('/');
     }
     else if(data.message === "uae"){
      setresult("این اکانت وجود داره")
     }
     else {
      setresult("ساخته شد برگرد برو ورود کن")
     }
  })
  .catch(error => console.log("error", error));
}


const handleSignUpClick = () => {
  document.querySelector('.inpage').style.display = 'none';
  document.querySelector('.uppage').style.display = 'block';
  document.querySelector('.signup').style.color = '#01b4ae';
  document.querySelector('.signin').style.color = '#000';
}

const handleSignInClick = () => {
  document.querySelector('.inpage').style.display = 'block';
  document.querySelector('.uppage').style.display = 'none';
  document.querySelector('.signin').style.color = '#01b4ae';
  document.querySelector('.signup').style.color = '#000';
}
  return (
    <div className="alll">
    <div className='login'>
      <div className="siniga">
      <div className="signin" onClick={handleSignInClick}>ورود</div>
      <div className="signup" onClick={handleSignUpClick}>ثبت نام</div></div>
      <div className="container">
        <div className="inpage">
          <h1>ورود کن</h1>
          <form>
            <input type="text" placeholder='یوزرنیم' value={rusername} onChange={(e) => setusername(e.target.value)} />
            <input type="password" placeholder='پسورد' value={rpassword} onChange={(e) => setpassword(e.target.value)} />
            <button type="submit" onClick={handlelogin}>ورود</button> 
          </form>
        <p>{result}</p>
        </div>
        <div className="uppage">
          <h1>ثبت نام کن</h1>
        <form>

            <input type="text" placeholder='یوزرنیم' value={rusername} onChange={(e) => setusername(e.target.value)} />
            <input type="password" placeholder='پسورد' value={rpassword} onChange={(e) => setpassword(e.target.value)} />
            <button type="submit" onClick={handlesignup}>ثبت نام</button> 
          </form>
        <p>{result}</p>
        </div>
      </div>
    </div></div>
  )
}

export default Login;