"use client"
import Filter from "@/components/Filter/Filter";
import Search from "@/components/Search/Search";
import Todo from "@/components/Todo/Todo";
import TodoForm from "@/components/TodoForm/TodoForm";
import { useState } from "react";


export default function Home() {
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
  
  const [search, setSearch] = useState("");
  
  const [filter, setFilter] = useState("All");

  const [sort, setSort] = useState("Asc");
    

    const addTodo = (text, category) => {
      const newTodos = [
        ...todos,
        {
          id: Math.floor(Math.random() * 10000),
          text,
          category,
          isCompleted: false,
        },
      ];
      setTodos(newTodos);
    };

    const removeTodo = (id) => {
      const newTodos = [...todos];
      const filteredTodos = newTodos.filter((todo) =>
        todo.id !== id ? todo : null
      );
      setTodos(filteredTodos);
    };
  
  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <div className="flex flex-col items-center justify-center py-8 px-8 bg-slate-300 rounded-2xl w-1/3">
        <h1 className="text-3xl font-bold mb-5">Lista de Tarefas</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <div className="flex flex-col items-center justify-center  py-8 px-8 bg-slate-200 
        rounded-2xl w-4/5">
          {todos
            .filter((todo) => filter === "All" ? true : filter === "Completed"
              ? todo.isCompleted : !todo.isCompleted)
            .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
            .sort((a,b) => sort === "Asc"? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
            .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
