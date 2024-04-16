import React, { useState } from 'react'

export default function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!value || !category) return;

        addTodo(value, category);
        
        setValue("");
        setCategory("");
        
    };

  return (
    <div className="flex flex-col items-center justify-center p-2 bg-slate-300 rounded-2xl border-t-2 border-slate-400">
      <h2 className="text-2xl font-bold mb-4 mt-4">Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          className="p-2 mb-6 rounded-md w-full"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <select
          className="p-2 mb-6 rounded-s-md w-full"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="estudos">Estudos</option>
          <option value="trabalho">Trabalho</option>
          <option value="pessoal">Pessoal</option>
        </select>
        <button
          type="submit"
          className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 
          rounded border-0 cursor-pointer transition-colors duration-300"
        >
          Criar tarefa
        </button>
      </form>
    </div>
  );
}
