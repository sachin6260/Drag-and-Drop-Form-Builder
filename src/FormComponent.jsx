import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const FormComponent = ({ component, index }) => {
  const renderComponent = () => {
    switch (component.type) {
      case 'input':
        return <input type="text" placeholder={component.name} />;
      case 'textarea':
        return <textarea placeholder={component.name}></textarea>;
      case 'select':
        return (
          <select>
            <option>{component.name}</option>
          </select>
        );
      case 'checkbox':
        return (
          <label>
            <input type="checkbox" />
            {component.name}
          </label>
        );
      case 'radio':
        return (
          <label>
            <input type="radio" name="radio-group" />
            {component.name}
          </label>
        );
      case 'date':
        return <input type="date" />;
      case 'number':
        return <input type="number" placeholder={component.name} />;
      case 'file':
        return <input type="file" />;
      default:
        return <div>{component.name}</div>;
    }
  };

  return (
    <Draggable draggableId={component.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`form-component ${component.required ? 'required-field' : ''}`}
        >
          <span className="drag-handle">::</span>
          {renderComponent()}
        </div>
      )}
    </Draggable>
  );
};

export default FormComponent;
