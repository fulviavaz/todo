import React from 'react'

export default function Filter({filter, setFilter}) {
  return (
      <div>
          <h2>Filtrar:</h2>
          <div>
              <div>
                  <p>Status:</p>
                  <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                      <option value="All">Todos</option>
                      <option value="Completed">Concluídos</option>
                      <option value="Incomplete">Não concluídos</option>
                  </select>
              </div>
              <div>
                  <p>Ordem alfabética:</p>
                  <button>Asc</button>
                  <button>Desc</button>
              </div>
          </div>
    </div>
  )
}
