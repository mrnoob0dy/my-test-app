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

  return (
    <div>
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать на наш сайт</p>
      <Button label="Click me" onClick={() => {handleClick()}} />
      <Button label={click} onClick={handleSetClick}/>
    </div>
  )
}