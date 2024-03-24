// App.js or any other parent component
import React from 'react';
// import Table from './Table';
import InteractiveTable from './InteractiveTable';

function TableInteractiveParent() {
  const tableData = [
    {
      id: 'item1',
      feature: 'Years in Business',
      vendor1: 4,
      vendor2: 8,
      compare: 8
    },
    {
      id: 'item2',
      feature: 'Review',
      vendor1: '4.5 (162836)',
      vendor2: '5 (6728)'
    },
    {
      id: 'item3',
        feature: 'Delivery Time',
        vendor1: '2 months',
        vendor2: '5 months'
    },
    {
      id: 'item4',
        feature: 'Location',
        vendor1: 'London',
        vendor2: 'Hong Kong'
    },
    {
      id: 'item5',
        feature: 'Logistics (Managed by)',
        vendor1: 'Vendor',
        vendor2: 'Customer'
    },
    {
      id: 'item6',
        feature: 'Scalability',
        vendor1: 'Upto 100',
        vendor2: 'Upto 50',
    },
    {
      id: 'item7',
        feature: 'Customer Support',
        vendor1: 'Yes',
        vendor2: 'Yes',
    }
    // Add more data objects as needed
  ];

  // for(let i=0; i<20; i++)
  // {
  //   const feature = `Feature ${i + 1}`;
  //   const vendor1 = `Vendor 1 Data ${i + 1}`;
  //   const vendor2 = `Vendor 2 Data ${i + 1}`;
  //   const vendor3 = `Vendor 2 Data ${i + 1}`;
  //   const id = `vendor ${i+1}`;
  //   tableData.push({
  //       id: id,
  //       feature: feature,
  //       vendor1: vendor1,
  //       vendor2: vendor2,
  //       vendor3 : vendor3
  //   })
  // }

  return (
    <div>
      <InteractiveTable data={tableData} />
    </div>
  );
}

export default TableInteractiveParent;