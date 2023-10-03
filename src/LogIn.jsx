import { useState } from 'react';
import './Login.css';

function App() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Implement form submission logic here
  };

  return (
    <div className="PlatnmMusic">
      <div className="header">
        <h1>Platnm Music</h1>
      </div>

      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <div>
          <input
            className='input'
            id="username"
            type="text"
            name="username"
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <input
            className='input'
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button type="submit">Log In</button>
          <button type="button">Sign Up</button>
        </div>
      </form>

    
      <div className="footer"> {/* Added this footer div */}
        Platnm a creative company
      </div>
    </div>
  );
}

export default App;
