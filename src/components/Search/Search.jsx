import React from 'react'

export default function Search({search, setSearch}) {
  return (
      <div className="flex flex-col items-center justify-center py-8 px-8 rounded-2xl ">
          <h2 className="text-2xl font-bold mb-4">Pesquisar</h2>
          <input type="text" value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Digite para pesquisar" className="p-2 mb-3 rounded-md w-full" />
    </div>
  )
}
