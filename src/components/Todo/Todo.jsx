
/* eslint-disable react/jsx-key */
import React from 'react'
import Modal from "@/components/Modal/Modal";

export default function Todo({ todo, removeTodo, completeTodo, setOpenModal, openModal }) {
  

  
     
  return (
    <div
      key={todo.id}
      className="flex  items-center justify-between  p-6 bg-slate-100 rounded-2xl
       w-full mb-6 h-auto"
    >
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
          className=" bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-2 
        rounded border-0 cursor-pointer transition-colors duration-300"        
          onClick={() => setOpenModal(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </button>
        <button
          className=" text-white font-bold bg-green-600 hover:bg-green-500
              py-2 px-2 rounded border-0 ml-2 mr-2 cursor-pointer 
        transition-colors duration-300"
          onClick={() => completeTodo(todo.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </button>
        <button
          className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-2 
        rounded border-0 cursor-pointer transition-colors duration-300"
          onClick={() => removeTodo(todo.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <>
        <Modal isOpen={openModal} />
      </>
    </div>
  );
}

