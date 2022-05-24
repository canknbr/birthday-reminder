import List from './component/List';
import React, { useState, useEffect } from 'react';
import { arr } from './data';
function App() {
  const [data, setData] = useState(arr);
  const deletePerson = (id) => {
    setData(prev => prev.filter(person => person.id !== id));
  }
  useEffect(() => {
    let timer;
    if (data.length === 0) {
      timer = setTimeout(() => {
        setData(prev => {
          return [...prev, ...arr];
        });
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <main className="App">
      <section className="container">
        <h2>{data.length} birthdays reminder</h2>
        <List people={data} deletePerson={deletePerson}/>
        <button onClick={() => setData([])}>Delete all reminder</button>
      </section>
    </main>
  );
}

export default App;
