"use client"


import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState([])

  function loadList() {
    fetch("http://localhost:4000/categories")
      .then(res => res.json())
      .then((data) => { setCategories(data) })
  }


  useEffect(() => {
    loadList()
  }, [])

  function createNew() {
    const name = prompt("Name...")
    fetch(`http://localhost:4000/categories`,
      { method: "POST",
        body: JSON.stringify({name: name}),
        headers:{"Content-type":"application/json; charset=UTF-8"}
       }
    )
      .then(res => res.json())
      .then((data) => { loadList() })
  }

  function deleteCategory(id) {
    const confirmation = confirm("Are you sure to delete?")
    if (confirmation === true) {
      fetch(`http://localhost:4000/categories/${id}`,
        { method: "DELETE",
          // body: JSON.stringify({id: id}),
          headers:{"Content-type":"application/json; charset=UTF-8"}
         }
      )
        .then(res => res.json())
        .then((data) => { loadList() })
    }
    else { }
  }

  function updateCategory(id, name) {
    const newName = prompt("Edit category name...", name)
    if (newName) {
      fetch(`http://localhost:4000/categories/${id}`,
        { method: "PUT",
          body: JSON.stringify({id: id, newName: newName }),
          headers:{"Content-type":"application/json; charset=UTF-8"}
         }
      )
        .then(res => res.json())
        .then((data) => { loadList() })
    }
    else { }
  }

  return (
    <main >
      <button onClick={createNew}>Add new</button>
      {categories.map((category) => (
        <div key={category.id}>{category.name}
          <button onClick={() => updateCategory(category.id, category.name)}>edit</button>
          <button onClick={() => deleteCategory(category.id)}>delete</button>
        </div>
      ))}
    </main>
  );
}
