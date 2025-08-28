
function ListToDo(props) {

  const {items, onItemDelete, phrase} = props

  function deleteitem(e) {
    e.preventDefault()

    // e.target.getAttribute("data-iditem")
    onItemDelete(e.target.dataset.iditem)
  }

  return (
    <div>
      <h2>{phrase["List of all tasks"]}:</h2>
      <table>
        <tbody>
          { items.map((item, index) => (
          <tr key={index}>
            <td className={item[1] == true ? "strong" : ""}>{item[0]}</td>
            <td> <a href="#" onClick={deleteitem} data-iditem={index}>{phrase["Delete"]}</a> </td>
          </tr>
          )) }
        </tbody>
      </table>
    </div>
  )
}

export default ListToDo
