// ExampleSingle.js
import React, { useState, useEffect } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';
import { fetchData } from './apiService';

const ExampleSingleAPI = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [draggingRow, setDraggingRow] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await fetchData();
        setData(responseData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  const commonTableProps = {
    columns: [
      {
        accessorKey: 'feature',
        header: 'Feature',
        getProps: (state, rowInfo) => ({
          style: {
            backgroundColor: rowInfo.row.specific_column === 1 ? 'red' : null,
          },
        }),
      },
      {
        accessorKey: 'vendor1',
        header: 'Vendor 1',
      },
      {
        accessorKey: 'vendor2',
        header: 'Vendor 2',
      },
    ],
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

  const table = useMaterialReactTable({
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
          setData(newData);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default ExampleSingleAPI;