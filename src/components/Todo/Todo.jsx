
/* eslint-disable react/jsx-key */
import React from 'react'


export default function Todo({ todo, removeTodo, completeTodo }) {
  
  
     
  return (
      
    <div
      key={todo.id}
      className="flex flex-col items-center justify-center  py-8 px-8 bg-slate-100 rounded-2xl
       w-full mb-4 h-auto" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
    >
      <div
        className="flex flex-col items-center justify-center  py-8 px-8 bg-slate-300 rounded-2xl 
      w-full"
      >
        <p className="text-lg font-bold">{todo.text}</p>
        <p className="text-base font-bold">({todo.category})</p>
      </div>
      <div className="flex  items-center justify-center  py-4 px-4 w-full">
        <button
          className="bg-blue-800 hover:bg-blue-700 text-white font-bold 
              py-2 px-4 rounded border-0 mr-2 cursor-pointer 
        transition-colors duration-300" onClick={() => completeTodo(todo.id)}
        >
          Concluir
        </button>
        <button
          className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 
        rounded border-0 cursor-pointer transition-colors duration-300"
          onClick={() => removeTodo(todo.id)}
        >
          x
        </button>
      </div>
    </div>
  );
}

