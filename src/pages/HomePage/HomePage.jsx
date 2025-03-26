import { useState } from "react"
import { Button } from "../../components/Button/Button"

export function HomePage() {
  const [click, setClick] = useState(0)
  const handleClick = (message) => {
    alert(message)
  }

  const handleSetClick = () => {
    setClick(click + 1)
  }

  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Форма отправлена')
  }

  const handleMouseOver = () => {
    console.log('over')
  }

  const handleMouseOut = () => {
    console.log('out')
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
      <Button label="Click me" onClick={() => {handleClick('На меня нажали!')}} />
      <Button label={click} onClick={handleSetClick}/>

      <form onSubmit={handleSubmit}>
        <button type="submit">Отправить</button>
      </form>

      <input type="text" onChange={handleChange} />
      <div>Вы ввели: {value}</div>

      <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Наведи на меня</button>
    </div>
  )
}