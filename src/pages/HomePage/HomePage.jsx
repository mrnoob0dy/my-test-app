import { useState } from "react"
import { Button } from "../../components/Button/Button"

export function HomePage() {
  const [click, setClick] = useState(0)
  const handleClick = () => {
    alert('Меня нажали')
  }

  const handleSetClick = () => {
    setClick(click + 1)
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7]
  const listItems = numbers.map(num => <li key={num}>{num}</li>)
  const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Mike'},
    {id: 3, name: 'Nick'},
    {id: 4, name: 'Jane'},
  ]

  return (
    <div>
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать на наш сайт</p>
      <ul>
        {listItems}
      </ul>
      <ul>
        {numbers.map(num => <li key={num}>{num}</li>)}
      </ul>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <Button label="Click me" onClick={() => {handleClick()}} />
      <Button label={click} onClick={handleSetClick}/>
    </div>
  )
}