import { useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, Typography } from '@mui/material';
// import { data } from './makeData';

const Example = () => {
    const data = [
        {
          feature: 'Years in Business',
          vendor1: 4,
          vendor2: 8,
          compare: 8
        },
        {
          feature: 'Review',
          vendor1: '4.5 (162836)',
          vendor2: '5 (6728)'
        },
        {
            feature: 'Delivery Time',
            vendor1: '2 months',
            vendor2: '5 months'
        },
        {
            feature: 'Location',
            vendor1: 'London',
            vendor2: 'Hong Kong'
        },
        {
            feature: 'Logistics (Managed by)',
            vendor1: 'Vendor',
            vendor2: 'Customer'
        },
        {
            feature: 'Scalability',
            vendor1: 'Upto 100',
            vendor2: 'Upto 50',
        },
        {
            feature: 'Customer Support',
            vendor1: 'Yes',
            vendor2: 'Yes',
        }
        // Add more data objects as needed
      ];
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
    ],
    [],
    //end
  );

  const [data1, setData1] = useState(() => data.slice(0, 3));
  const [data2, setData2] = useState(() => data.slice(3, 5));

  const [draggingRow, setDraggingRow] = useState(null);
  const [hoveredTable, setHoveredTable] = useState(null);

  const commonTableProps = {
    columns,
    enableRowDragging: true,
    enableFullScreenToggle: false,
    muiTableContainerProps: {
      sx: {
        minHeight: '320px',
      },
    },
    onDraggingRowChange: setDraggingRow,
    state: { draggingRow },
  };

  const table1 = useMaterialReactTable({
    ...commonTableProps,
    data: data1,
    getRowId: (originalRow) => `table-1-${originalRow.firstName}`,
    muiRowDragHandleProps: {
      onDragEnd: () => {
        if (hoveredTable === 'table-2') {
          setData2((data2) => [...data2, draggingRow.original]);
          setData1((data1) => data1.filter((d) => d !== draggingRow.original));
        }
        setHoveredTable(null);
      },
    },
    muiTablePaperProps: {
      onDragEnter: () => setHoveredTable('table-1'),
      sx: {
        outline: hoveredTable === 'table-1' ? '2px dashed pink' : undefined,
      },
    },
    renderTopToolbarCustomActions: () => (
      <Typography color="success.main" component="span" variant="h4">
        Nice List
      </Typography>
    ),
  });

  const table2 = useMaterialReactTable({
    ...commonTableProps,
    data: data2,
    defaultColumn: {
      size: 100,
    },
    getRowId: (originalRow) => `table-2-${originalRow.firstName}`,
    muiRowDragHandleProps: {
      onDragEnd: () => {
        if (hoveredTable === 'table-1') {
          setData1((data1) => [...data1, draggingRow.original]);
          setData2((data2) => data2.filter((d) => d !== draggingRow.original));
        }
        setHoveredTable(null);
      },
    },
    muiTablePaperProps: {
      onDragEnter: () => setHoveredTable('table-2'),
      sx: {
        outline: hoveredTable === 'table-2' ? '2px dashed pink' : undefined,
      },
    },
    renderTopToolbarCustomActions: () => (
      <Typography color="error.main" component="span" variant="h4">
        Naughty List
      </Typography>
    ),
  });

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'auto', lg: '1fr 1fr' },
        gap: '1rem',
        overflow: 'auto',
        p: '4px',
      }}
    >
      <MaterialReactTable table={table1} />
      <MaterialReactTable table={table2} />
    </Box>
  );
};

export default Example;