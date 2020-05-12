import React, { useState } from 'react';

function Upload() {
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('email', 'example@gmail.com');
    formData.append('description', 'some description text..');

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData
    })
      .then(data => data.json())
      .then(console.log)
      .catch(console.error)
    console.log(file);
  }

  const handleChange = e => {
    e.preventDefault();
    setFile(e.target.files[0]);
    setFileName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Photo:
        <input 
          type="file"
          value={fileName} 
          onChange={handleChange}/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default Upload;
