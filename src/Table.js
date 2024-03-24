// Table.js
import './Table.css';
import React from 'react';

  const getCellColor = (value, compareValue='Z') => {
    console.log(compareValue);
    // Define your conditions for coloring cells here
    if (value >= compareValue) {
      return 'LightGreen';
    } else if (value === 'Medium') {
      return 'yellow';
    } else {
      return 'white'; // Default color
    }
  };

const Table = ({ data }) => {
  // Extract column names from the data objects
  const columnNames = data.reduce((columns, item) => {
    Object.keys(item).forEach(key => {
      if (!columns.includes(key)) {
        columns.push(key);
      }
    });
    columns = columns.filter(item => item !== 'compare');
    return columns;
  }, []);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {/* Render table headers dynamically based on column names */}
            {columnNames.map((columnName, index) => (
              <th key={index}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Render table cells dynamically based on column names */}
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
            {columnNames.map((columnName, colIndex) => (
              <td key={colIndex} style={{ backgroundColor: getCellColor(item[columnName], item['compare']) }} >{item[columnName]}</td>
            ))}
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;


// const Table = ({ data }) => {
//   return (
//     <div className="table-container">
//       <table>
//         <thead>
//           <tr>
//             <th>Feature</th>
//             <th>Vendor 1</th>
//             <th>Vendor 2</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.feature}</td>
//               <td>{item.vendor1}</td>
//               <td>{item.vendor2}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;
