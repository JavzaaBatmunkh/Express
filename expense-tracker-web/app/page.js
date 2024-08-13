"use client"


import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState([])

  function loadList(){
    fetch("http://localhost:4000/categories/list")
    .then(res => res.json())
    .then((data) => { setCategories(data) })
  }


  useEffect(() => {
    loadList()
  }, [])

  function createNew() {
    const name=prompt("Name...")
    fetch(`http://localhost:4000/categories/create?name=${name}`)
      .then(res => res.json())
      .then((data) => {loadList()}) 
  }

  function deleteCategory(name) {
    const confirmation=confirm("Are you sure to delete?")
    if (confirmation===true){
      fetch(`http://localhost:4000/categories/delete?name=${name}`)
      .then(res => res.json())
      .then((data) => {loadList()}) 
    }
    else{}
  }


return (
  <main >
    <button onClick={createNew}>Add new</button>
    {categories.map((category) => (
      <div key={category.name}>{category.name}
      <button>edit</button>
      <button onClick={() => deleteCategory(category.name) }>delete</button>
      </div>
    ))}
  </main>
);
}
