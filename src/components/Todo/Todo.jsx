/* eslint-disable react/jsx-key */
import React, { useState } from 'react'

export default function Todo() {
      const [todos, setTodos] = useState([
        {
          id: 1,
          text: "estudar nextjs",
          category: "estudo",
          isCompleted: false,
        },
        {
          id: 2,
          text: "criar novo design system",
          category: "trabalho",
          isCompleted: false,
        },
        {
          id: 3,
          text: "ir pra academia",
          category: "pessoal",
          isCompleted: false,
        },
        {
          id: 4,
          text: "comprar ração pro gato",
          category: "pessoal",
          isCompleted: false,
        },
      ]);
    
  return (
      <div className="flex flex-col items-center justify-center  py-8 px-8 bg-slate-300 rounded-2xl">
          <h1 className="text-3xl font-bold">Lista de Tarefas</h1>
          <div className="flex flex-col items-center justify-center  py-8 px-8 bg-slate-200 rounded-2xl">
              {todos.map((todo) => (
                  <div key={todo.id} className="flex flex-col items-center justify-center  py-8 px-8 bg-slate-100 rounded-2xl">
                      <div className="flex flex-col items-center justify-center  py-8 px-8 bg-slate-300 rounded-2xl">
                          <p className="text-lg font-bold">{todo.text}</p>
                          <p className="text-base font-bold">({todo.category})</p>
                      </div>
                      <div className="flex  items-center justify-center  py-8 px-8">
                          <button>Concluir</button>
                          <button>x</button>
                      </div>
                  </div>
              ))}
          </div>
    </div>
  )
}
