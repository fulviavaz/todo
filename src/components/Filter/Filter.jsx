import React from 'react'

export default function Filter({filter, setFilter, setSort}) {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Filtrar:</h2>
      <div className="flex flex-col items-center justify-center py-8 px-8 rounded-2xl ">
        <div>
          <p>Status:</p>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 mb-3 rounded-md w-full"
          >
            <option value="All">Todos</option>
            <option value="Completed">Concluídos</option>
            <option value="Incomplete">Não concluídos</option>
          </select>
        </div>
        <div className="flex items-center justify-center py-8 px-8 rounded-2xl ">
          <p>Ordem alfabética:</p>
          <button
            onClick={() => setSort("Asc")}
            className="p-1 rounded-md w-auto bg-sky-600 text-white mr-2 ml-2"
          >
            Asc
          </button>
          <button
            onClick={() => setSort("Desc")}
            className="p-1 rounded-md w-auto bg-sky-600 text-white"
          >
            Desc
          </button>
        </div>
      </div>
    </div>
  );
}
