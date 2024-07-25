// components/FileReader.js
'use client';

import { useState } from 'react';
import DataTable from './DataTable';

const FileReaderComponent = () => {
  const [fileContent, setFileContent] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".txt" onChange={handleFileChange} />
      {fileContent && <DataTable data={fileContent} />}
    </div>
  );
};

export default FileReaderComponent;
