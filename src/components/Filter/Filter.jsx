import React from 'react'

export default function Filter({filter, setFilter, setSort}) {
  return (
    <div className="flex flex-col p-2 w-full  border-b-2 border-slate-400 mb-4">
      <h2 className="text-2xl font-bold ">Filtrar:</h2>
      <div className="flex items-center justify-between p-2 w-full">
        <div className="items-center justify-center w-full">
          <p className="text-lg mb-2">Status:</p>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 rounded-md w-full"
          >
            <option value="All">Todos</option>
            <option value="Completed">Concluídos</option>
            <option value="Incomplete">Não concluídos</option>
          </select>
        </div>
        <div className="flex flex-col p-2 w-full">
          <p className="text-lg mb-2">Ordem alfabética:</p>
          <div className="flex">
            <button
              onClick={() => setSort("Asc")}
              className="px-3 py-2 rounded-md w-auto bg-sky-600 text-white mr-2 ml-2"
            >
              Asc
            </button>
            <button
              onClick={() => setSort("Desc")}
              className="px-3 py-2  rounded-md w-auto bg-sky-600 text-white"
            >
              Desc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
