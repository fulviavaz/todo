import React from 'react'

export default function TodoForm() {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-8 bg-slate-300 rounded-2xl ">
      <h2 className="text-2xl font-bold mb-4">Criar tarefa:</h2>
      <form>
        <input type="text" placeholder="Digite o título" className="p-2 mb-3 rounded-md w-full" />
        <select className="p-2 mb-3 rounded-s-md w-full">
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
