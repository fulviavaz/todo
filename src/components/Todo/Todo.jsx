
/* eslint-disable react/jsx-key */
import React from 'react'


export default function Todo({ todo, removeTodo, completeTodo }) {
  
  
     
  return (
    <div
      key={todo.id}
      className="flex  items-center justify-between  p-6 bg-slate-100 rounded-2xl
       w-full mb-6 h-auto">
      <div
        className="flex flex-col p-6 rounded-2xl 
      w-full"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        <p className="text-lg font-bold">{todo.text}</p>
        <p className="text-base text-zinc-500">({todo.category})</p>
      </div>
      <div className="flex  items-center justify-end  py-4 px-4 w-full">
        <button
          className="bg-blue-800 hover:bg-blue-700 text-white font-bold 
              py-2 px-4 rounded border-0 mr-2 cursor-pointer 
        transition-colors duration-300"
          onClick={() => completeTodo(todo.id)}
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

