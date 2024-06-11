import { useState, useReducer, useEffect, useCallback } from 'react'
import './App.css'

const taskReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TAREFA':
      return[...state, action.payload];
    
    case 'CONCLUIDO':
      const atualizarTarefa = [...state];
      atualizarTarefa[action.payload].completed = true;
      return atualizarTarefa;
    
    
  }  
}

function App() {
  const [tarefa, setTarefa] = useState('');
  const [tarefaAtual, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    const armazenarTarefa = JSON.parse(localStorage.getItem('tarefaAtual'))
  }, []);
  
  useEffect(() => {
    localStorage.setItem('tarefaAtual', JSON.stringify(tarefaAtual));
  });

  const addTarefa = useCallback(() => {
    if(tarefa.trim() !== '') {
      dispatch({type: 'ADD_TAREFA', payload: {text: tarefa, completed: false}});
      setTarefa('');
    }
  }, [tarefa]);

  return (
    <>
      <div className='center'>
        <h1>Lista de Tarefas</h1>
        <div className='input'>
          <input type='text' placeholder='Nova tarefa' onChange={(e) => setTarefa(e.target.value)}/>
          <button>Adicionar</button>
        </div>
        <ul>
          {tarefaAtual.map((tarefas, index) => {
            <li key={index}>{tarefa.text}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
