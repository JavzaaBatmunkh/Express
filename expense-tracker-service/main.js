const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()
const port = 4000
app.use(cors())
const content = fs.readFileSync('categories.json', "utf-8")
console.log({ content })
const categories = JSON.parse(content)

app.get("/categories/list", (req, res) => {
  res.json(categories)
})

app.get("/categories/create", (req, res) => {
  const { name } = req.query
  categories.push({ name: name })
  fs.writeFileSync('categories.json', JSON.stringify(categories))

  res.json("success")
})

app.get("/categories/update", (req, res) => {
    const { oldName, newName } = req.query; // Getting the old name and new name from the query parameters
  
    const index = categories.findIndex(category => category.name === oldName); // Finding the category with the old name
    
    if (index !== -1) { // If the category exists
      categories[index].name = newName; // Update its name
      fs.writeFileSync('categories.json', JSON.stringify(categories, null, 2)); // Save the updated list back to the file
      res.json("Category updated successfully"); // Send a success message
    } else {
      res.status(404).json("Category not found"); // If the category doesn't exist, send a 404 error
    }

  res.json("success")
})

app.get("/categories/delete", (req, res) => {

  const { name } = req.query; // Getting the name of the category to delete from the query parameters

  const index = categories.findIndex(category => category.name === name); // Finding the category by its name

  if (index !== -1) { // If the category exists
    categories.splice(index, 1); // Remove it from the list
    fs.writeFileSync('categories.json', JSON.stringify(categories)); // Save the updated list back to the file
    res.json("Category deleted successfully"); // Send a success message
  } else {
    res.status(404).json("Categoryy not found"); // If the category doesn't exist, send a 404 error
  }
  res.json("success")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})