// apiService.js
const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/data');
      console.log("response", response)
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };
  

  const compareVendors = async (vendor1, vendor2) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/compare_vendors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ vendor1, vendor2 })
      });
  
      if (!response.ok) {
        throw new Error('Failed to compare vendors');
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error('Failed to compare vendors');
    }
  };

  export { fetchData, compareVendors };  