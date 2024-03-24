import './muiSingleTableComponent.css';
import React, { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';

const ExampleSingle = ({ data }) => {
  const columnHeaders = Object.keys(data[0]);

  const dynamicColumns = columnHeaders
  .filter(header => header !== 'feature') // Filter out 'feature'
  .map((header) => ({
    accessorKey: header,
    header: header.charAt(0).toUpperCase() + header.slice(1), // Capitalize the first letter
  }));

// Manually create the 'feature' column
const featureColumn = {
  accessorKey: 'feature',
  header: 'Feature',
};

// Combine 'feature' column with dynamic columns
const columns = [featureColumn, ...dynamicColumns];
  // const columns = [
  //   {
  //     accessorKey: 'feature',
  //     header: 'Feature',
  //   },
  //   {
  //     accessorKey: 'vendor1',
  //     header: 'Vendor 1',
  //   },
  //   {
  //     accessorKey: 'vendor2',
  //     header: 'Vendor 2',
  //   },
  // ];

  const [draggingRow, setDraggingRow] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const commonTableProps = {
    columns,
    enableRowDragging: true,
    muiTableContainerProps: {
      sx: {
        minHeight: '320px',
      },
    },
    muiTableBodyCellProps: {
      sx: {
        borderRight: '2px solid #e0e0e0', // Add a border between columns
      },
    },
    muiTableHeadCellProps: {
      sx: {
        fontWeight: 'normal',
        fontSize: '14px',
        backgroundColor: 'lightblue',
      },
    },
    onDraggingRowChange: setDraggingRow,
    state: { draggingRow },
  };

  const tableInstance = useMaterialReactTable({
    ...commonTableProps,
    data,
    getRowId: (originalRow) => originalRow.feature,
    muiRowDragHandleProps: {
      onDragEnd: () => {
        if (hoveredIndex !== null && hoveredIndex !== draggingRow.index) {
          const newData = [...data];
          newData.splice(hoveredIndex, 0, draggingRow.original);
          const dragIndex = draggingRow.index + (hoveredIndex > draggingRow.index ? 0 : 1);
          newData.splice(dragIndex, 1);
          // No need to update state here since data is passed as a prop
        }
        setHoveredIndex(null);
      },
    },
    muiTableBodyProps: {
      onDragOver: (e, index) => {
        e.preventDefault();
        setHoveredIndex(index);
      },
    },
    muiTableRowProps: (row, index) => ({
      sx: {
        backgroundColor: hoveredIndex === index ? '#f0f0f0' : 'transparent',
      },
    }),
  });

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'auto',
        gap: '1rem',
        overflow: 'auto',
        p: '4px',
      }}
    >
      <MaterialReactTable table={tableInstance} />
    </Box>
  );
};

export default ExampleSingle;