import React, { useState, useEffect } from 'react';
import { Toast } from 'primereact/toast';
import { useToast } from '../assets/utils/toastUtil';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';  // Import the correct AuthContext

const Login = () => {
  const { toast, showToast } = useToast();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { setUser, isLoggedIn, setIsLoggedIn } = useAuth();


  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        navigate('/home');
      }, 3000);
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const apiUrl = 'http://localhost:3000/api/login';  // Update API URL

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        showToast(errorData.message || 'Login failed', 'error');
        return;
      }

      const data = await response.json();
      if (data.success) {
        localStorage.setItem('authToken', data.token);
        setIsLoggedIn(true);  // Update login status
        setUser({
          user_id: data.user.id,
          email: data.user.email,
          name: data.user.name,
        });
        showToast('Login successful');
      } else {
        showToast(data.message || 'Invalid credentials', 'error');
      }
    } catch (error) {
      showToast('Something went wrong, please try again.');
    }
  };

  const validateEmail = (value) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (value) => {
    setPassword(value);
    if (value.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  return (
    <>
      <Toast ref={toast} />
      <section>
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="inn">
                <div className="lhs">
                  <div className="tit">
                    <h2>Now <b>Find <br /> your life partner</b> Easy and fast.</h2>
                  </div>
                  <div className="im">
                    <img src="images/login-couple.png" alt="" />
                  </div>
                  <div className="log-bg">&nbsp;</div>
                </div>
                <div className="rhs">
                  <div>
                    <div className="form-tit">
                      <h4>Get Started for Free</h4>
                      <h1>Signin <em className="em_register">Wedding Soul Mates</em> Matrimony</h1>
                      <p>Not a member yet? <a href="/register">Create an account now</a></p>

                    </div>
                    <div className="form-login">
                      <form onSubmit={handleLogin}>
                        <div className="form-group">
                          <label className="lb">Email:</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => validateEmail(e.target.value)}
                            placeholder="Enter email"
                            name="email"
                            required
                          />
                        </div>
                        {emailError && <p className="error-message">{emailError}</p>}

                        <div className="form-group">
                          <label className="lb">Password:</label>
                          <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            name="pswd"
                            required
                            value={password}
                            onChange={(e) => validatePassword(e.target.value)}
                          />
                        </div>
                        {passwordError && <p className="error-message">{passwordError}</p>}
                        <div className="form-group form-check">
                          <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" name="agree" /> Remember me
                          </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
