import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import FormSidebar from './FormSidebar';
import FormPanel from './FormPanel';

const FormBuilder = () => {
  const [components, setComponents] = useState([
    { id: '1', name: 'Input Field', type: 'input' },
    { id: '2', name: 'Textarea', type: 'textarea' },
    { id: '3', name: 'Select Dropdown', type: 'select' },
    { id: '4', name: 'Checkbox', type: 'checkbox' },
    { id: '5', name: 'Radio Button', type: 'radio' },
    { id: '6', name: 'Date Picker', type: 'date' },
    { id: '7', name: 'Number Input', type: 'number' },
    { id: '8', name: 'File Upload', type: 'file' },
  ]);

  const [panelComponents, setPanelComponents] = useState([]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    console.log('Source:', source);
    console.log('Destination:', destination);

    if (!destination) return;

    let updatedPanelComponents = [];

    // Dragging from sidebar to panel
    if (source.droppableId === 'sidebar' && destination.droppableId === 'panel') {
        const draggedComponent = components[source.index];
        updatedPanelComponents = [...panelComponents, draggedComponent];

        console.log('Updated Panel Components after adding:', updatedPanelComponents);
    } 
    // Rearranging within the panel
    else if (source.droppableId === 'panel' && destination.droppableId === 'panel') {
        updatedPanelComponents = Array.from(panelComponents);
        const [movedComponent] = updatedPanelComponents.splice(source.index, 1);
        updatedPanelComponents.splice(destination.index, 0, movedComponent);

        console.log('Updated Panel Components after rearranging:', updatedPanelComponents);
    }

    // Update required fields (top 3 components)
    const finalPanelComponents = updatedPanelComponents.map((component, index) => ({
        ...component,
        required: index < 3,
    }));
    
    console.log('Final Panel Components after updating required fields:', finalPanelComponents);

    // Update the state
    setPanelComponents(finalPanelComponents);
};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="form-builder">
        <FormSidebar components={components} />
        <FormPanel components={panelComponents} />
      </div>
    </DragDropContext>
  );
};

export default FormBuilder;
