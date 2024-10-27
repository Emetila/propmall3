import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email validation and password reset request here
    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }
    // Assume request is successful for now
    setMessage('If this email is registered, you will receive a password reset link.');
  };

  return (
    <div className="forgot-password-container">
      <div className="image-container">
        {/* Add the left side image (as background or img tag) */}
        <img src="/path-to-your-image.jpg" alt="Password Reset Illustration" />
      </div>

      <div className="form-container">
        <h2>Reset password</h2>
        <p>Enter your email address for verification code.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Continue</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>

      <style jsx>{`
        .forgot-password-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          padding: 20px;
        }

        .image-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container img {
          max-width: 100%;
          height: auto;
        }

        .form-container {
          flex: 1;
          max-width: 400px;
          text-align: center;
        }

        .form-container h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .form-container p {
          margin-bottom: 20px;
          color: #666;
        }

        .form-container input {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .form-container button {
          width: 100%;
          padding: 10px;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
        }

        .form-container button:hover {
          background-color: #218838;
        }

        .message {
          color: #28a745;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}