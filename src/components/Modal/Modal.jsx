import React from 'react'

export default function Modal({ isVisible, onClose, editTodo }) {

  if (!isVisible) {
    return null
  }

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') {
      onClose()
    }
  }
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 
    background-blur-sm flex justify-center items-center" id="wrapper"
      onClick={handleClose}      
    >
      <div className="bg-slate-200 p-6 rounded-md w-3/12 h-auto">
        <h2 className="text-2xl font-bold mb-4 mt-4">Editar tarefa:</h2>
        <form>
          <input
            type="text"
            placeholder="Tarefa"
            className="p-2 mb-6 rounded-md w-full"
          />
          <select className="p-2 mb-6 rounded-s-md w-full">
            <option value="">Selecione uma categoria</option>
            <option value="estudos">Estudos</option>
            <option value="trabalho">Trabalho</option>
            <option value="pessoal">Pessoal</option>
          </select>
          <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 
          rounded border-0 cursor-pointer transition-colors duration-300" onClick={() => editTodo()}
          >
            Atualizar tarefa
          </button>
          <button
            type="submit"
            className="bg-red-800 text-white font-bold py-2 px-4 
          rounded border-0 cursor-pointer transition-colors duration-300 ml-4"
            onClick={() => onClose()}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}
