import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const FormSidebar = ({ components }) => {
  return (
    <Droppable droppableId="sidebar" isDropDisabled={true}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="form-sidebar">
          {components.map((component, index) => (
            <Draggable key={component.id} draggableId={component.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="form-component"
                >
                  {component.name}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default FormSidebar;
