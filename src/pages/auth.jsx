import React, { useState, useEffect } from "react";
import "./authStyles.css";

function Auth() {
  useEffect(() => {
    document.title = "Login - Mangaka (Manual)";
    // Reload only once using URL flag
    const url = new URL(window.location.href);

    if (!url.searchParams.has("reloaded")) {
      url.searchParams.set("reloaded", "true");
      window.location.href = url.toString(); // triggers reload once
    } else {
      // Set document title and background after reload
      document.title = "Login - Mangaka (Manual)";
      document.body.style.backgroundImage = "url('../src/assets/background.avif')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center";
    }

    // document.body.style.backgroundImage = URL('https://img.freepik.com/free-vector/paper-style-white-monochrome-background_23-2148999280.jpg?t=st=1746212840~exp=1746216440~hmac=0837c35a6832c6ab46eee9c1fa7bb049ea488c986314c6a1e868ae086f427208&w=996');
  }, [])

  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('password');

  const [showmessage, setShowmessage] = useState(false);

  function handleLogin() {
    const uname = document.getElementById("user_name").value.trim();
    const pwd = document.getElementById("password").value.trim();

    if (uname !== '' && pwd !== '') {
      setShowmessage(false);
      localStorage.setItem('isloggedin', 'true');
      window.location.reload(); // to trigger MainPage render in App.jsx
    } else {
      setShowmessage(true);
    }
  }


  return (
    <div className="parent">
      <div className="box">
        <div className="one">
          <div>Login</div>
        </div>
        <div className="two">
          <div className="frm">
            <div className="upper">Username</div>
            <input type="text" placeholder="Enter your username" spellCheck="false" id="user_name" />
          </div>
          <div className="frm">
            <div className="upper">Password</div>
            <input type="text" placeholder="Enter your password" spellCheck="false" id="password" />
          </div>
          {showmessage && <div className="conditional-text">Please enter both the fields</div>}
          <div className="txt">Forgot password?</div>
        </div>
        <div className="three">
          <button className="login_but" onClick={handleLogin}>Login</button>
        </div>
        <div className="four">
          <div>Don't have an account?</div>
          <button className="google-btn">
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="google-logo" />
            Continue with Google
          </button>

        </div>
      </div>
    </div>

  );
}

export default Auth;
