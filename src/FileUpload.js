import React from 'react';
import { useState, useEffect } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [timer, setTimer] = useState(0);

  const chooseFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const handleUpload = () => {
    setIsUploading(true);
  };

  useEffect(() => {
    if (!isUploading) return;
    let interval = setInterval(() => {
      setTimer((t) => {
        if (t >= 100) {
          clearInterval(interval);
          return t;
        }
        return t + 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isUploading, timer]);

  return (
    <div>
      <h1>File Upload</h1>
      <input type="file" onChange={chooseFile} />
      <button onClick={handleUpload}>Upload</button>
      <div
        style={{
          position: 'relative',
          marginTop: '10px',
          height: '20px',
          width: '100%',
          backgroundColor: 'grey',
        }}
      >
        <div
          style={{
            position: 'absolute',
            height: '20px',
            width: `${timer}%`,
            backgroundColor: 'green',
          }}
        >
          {timer}%
        </div>
      </div>
    </div>
  );
};
export default FileUpload;
