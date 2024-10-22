import { useState } from 'react';

export default function VerificationCode() {
  const [code, setCode] = useState(['', '', '', '', '']);
  const [message, setMessage] = useState('');

  const handleInputChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.join('').length === 5) {
      setMessage('Verification code submitted.');
      // Here, you would typically send the code to your backend to verify it.
    } else {
      setMessage('Please enter a valid 5-digit code.');
    }
  };

  return (
    <div className="verification-container">
      <div className="image-container">
        <img src="/path-to-your-image.jpg" alt="Verification Illustration" />
      </div>

      <div className="form-container">
        <h2>Reset password</h2>
        <p>Check your email and enter the verification code to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="code-inputs">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(e, index)}
              />
            ))}
          </div>
          <button type="submit">Submit</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>

      <style jsx>{`
        .verification-container {
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

        .code-inputs {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .code-inputs input {
          width: 50px;
          padding: 10px;
          text-align: center;
          font-size: 20px;
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