import React from 'react'

export default function Search({search, setSearch}) {
  return (
      <div className="flex flex-col justify-center py-2 px-2 w-full border-b-2 border-slate-400">
          <h2 className="text-2xl font-bold mb-4">Pesquisar</h2>
          <input type="text" value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Digite para pesquisar" className="p-2 mb-3 rounded-md w-full" />
    </div>
  )
}
