// InteractiveTable.js
import React, { useState } from 'react';
import './Table.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const InteractiveTable = ({ data }) => {

    const [Data, setData] = useState(data);
  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return; // Dropped outside the list

    const newData = Array.from(Data);
    const [removed] = newData.splice(source.index, 1);
    newData.splice(destination.index, 0, removed);

    setData(newData);
  };
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
    <div>
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='droppable'>
        {(provided) => (
          <table {...provided.droppableProps} ref={provided.innerRef}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Vendor 1</th>
                <th>Vendor 2</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {
                  (provided) => {
                    console.log("Draggable ID", item.id);
                     return (

                    <tr
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <td>{item.feature}</td>
                      <td>{item.vendor1}</td>
                      <td>{item.vendor2}</td>
                    </tr>
                  );}}
                </Draggable>
              ))}
            </tbody>
          </table>
        )}
      </Droppable>
    </DragDropContext>
    </div>
  );
};

export default InteractiveTable;