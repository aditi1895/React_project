import React, { useState } from 'react';
import { Button } from '@mui/material';

const PdfUploadForm = () => {
  const [translatedContent, setTranslatedContent] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('pdfFile', file);

    try {
      const response = await fetch('http://your-backend-api.com/translate-pdf', {
        method: 'POST',
        body: formData,
      });
      const translatedData = await response.json();
      setTranslatedContent(translatedData);
    } catch (error) {
      console.error('Error uploading and translating PDF:', error);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        id="pdf-upload"
      />
      <label htmlFor="pdf-upload">
        <Button variant="contained" component="span">
          Upload PDF
        </Button>
      </label>
      {translatedContent && (
        <div>
          <p>Translated Content:</p>
          <pre>{JSON.stringify(translatedContent, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PdfUploadForm;