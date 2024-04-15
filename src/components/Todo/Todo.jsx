/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import List from '../List/List';
import TodoForm from '../TodoForm/TodoForm';

export default function Todo() {
      const [todos, setTodos] = useState([
        {
          id: 1,
          text: "estudar nextjs",
          category: "estudos",
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
      <div className="flex flex-col items-center justify-center py-8 px-8 bg-slate-300 rounded-2xl w-1/3">
          <h1 className="text-3xl font-bold mb-5">Lista de Tarefas</h1>
          <div className="flex flex-col items-center justify-center  py-8 px-8 bg-slate-200 rounded-2xl w-4/5">
              {todos.map((todo) => (
                <List key={todo.id} {...todo}/>
              ))}
      </div>
      <TodoForm/>
    </div>
  )
}
