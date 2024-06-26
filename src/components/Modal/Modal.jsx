import React, { useEffect, useState } from "react";

export default function Modal({ isVisible, onClose, editTodo, todo }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    setText(todo.text);
    setCategory(todo.category);
  }, [todo]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!text || !category) return;

    editTodo({ id: todo.id, text, category });
    onClose();
    setText("");
    setCategory("");
  };

  if (!isVisible) {
    return null;
  }

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  return (
    <div
      id="wrapper"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-50 background-blur-sm flex justify-center items-center"
    >
      <div className="bg-slate-200 p-6 rounded-md w-3/12 h-auto">
        <h2 className="text-2xl font-bold mb-4 mt-4">Editar tarefaaaa:</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Edite sua tarefa"
            className="p-2 mb-6 rounded-md w-full"
            value={text}
            onChange={(event) => setText(event.target.value)}
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
            Salvar
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
