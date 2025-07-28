import { useState } from 'react';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadProgress(0); // reset on new file
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <h1>Document Management System</h1>

      <div className="upload-box">
        <label htmlFor="fileInput">Choose a document:</label>
        <input type="file" id="fileInput" onChange={handleFileChange} />

        {selectedFile && (
          <p className="file-name">Selected File: {selectedFile.name}</p>
        )}

        <button onClick={handleUpload}>Upload</button>

        {uploadProgress > 0 && (
          <progress value={uploadProgress} max="100" className="progress-bar" />
        )}
      </div>
    </div>
  );
}

export default App;
