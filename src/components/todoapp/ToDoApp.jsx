import { useState, useEffect } from 'react'

import AddToDo from './AddToDo.jsx'
import ListToDo from './ListToDo.jsx'

function ToDoApp(props) {

  const {phrase} = props

  let savedItems = JSON.parse(localStorage.getItem("savedItems"))
  if (savedItems == null) { savedItems = [] }

  const [items, setItems] = useState(savedItems)
  
  function handleItemSubmit(item) {
    setItems([...items, item])
  }

  function handleItemDelete(id) {
    setItems( items.filter((item, index) => index != id ) )
  }

  useEffect(() => {
     localStorage.setItem("savedItems", JSON.stringify(items))
  }, [items])

  return (
    <div className="kontajner" id="zoznam_uloh">
      <ListToDo phrase={phrase} items={items} onItemDelete={handleItemDelete}/>
      <AddToDo phrase={phrase} onItemSubmit={handleItemSubmit}/>
    </div>
  )
}

export default ToDoApp
