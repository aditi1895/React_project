import React, { useState } from 'react';
import { compareVendors } from './apiService';
import { TextField, Button, Typography } from '@mui/material';
import Table from './Table'; // Assuming you have a Table component to display the data
import ExampleSingle from './muiSingleTableComponent'; // Import the ExampleSingle component

const ComparisonPage = () => {
  const [vendor1, setVendor1] = useState('');
  const [vendor2, setVendor2] = useState('');
  const [tableData, setTableData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await compareVendors(vendor1, vendor2);
      console.log(data)
      setTableData(data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch comparison data');
      setTableData(null);
    }
  };

  return (
    <div>
      <Typography variant="h3">Vendor Comparison</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Vendor 1"
          value={vendor1}
          onChange={(e) => setVendor1(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Vendor 2"
          value={vendor2}
          onChange={(e) => setVendor2(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Compare
        </Button>
      </form>
      {error && <p>{error}</p>}
      {tableData && <ExampleSingle data={tableData} />} 
      {/* Render the ExampleSingle component */}
      {/* <ExampleSingle /> */}
    </div>
  );
};

export default ComparisonPage;
