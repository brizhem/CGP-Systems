import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import rootReducer from './store/reducers';
import Block from './components/Block';
import Canvas from './components/Canvas';
import RenderResult from './components/RenderResult';
import lefttoolbarBlocks from './store/lefttoolbarBlocks';
import './App.css';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <>
          <h2 className='header'>REACT EDITOR Test</h2>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', width: '20%' }}>
              <div className='left-toolbar'>
                {lefttoolbarBlocks.map((block) => {
                  return (
                    <Block 
                      id={block.id} 
                      text={block.title} 
                      content={block.content}
                      icon={block.icon}
                      isDragAndDrop 
                      customStyle={{ 
                        width: '100px',
                        height: '83px',
                        fontSize: '12px',
                        marginRight: '10px',
                        backgroundColor: '#F6F9FE' 
                      }}
                    />
                  )
                })}
              </div>
            </div>
            <Canvas />
            <RenderResult />
          </div>
        </>
      </DndProvider>
    </Provider>
  );
};

export default App;
