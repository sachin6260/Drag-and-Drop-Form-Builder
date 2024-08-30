import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import FormComponent from './FormComponent';

const FormPanel = ({ components }) => {
  return (
    <Droppable droppableId="panel">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="form-panel">
          {components.map((component, index) => (
            <FormComponent key={component.id} component={component} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default FormPanel;
