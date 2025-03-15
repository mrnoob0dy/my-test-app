import { Button } from "../../components/Button/Button"

export function HomePage() {
  const handleClick = () => {
    alert('Меня нажали')
  }

  return (
    <div>
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать на наш сайт</p>
      <Button label="Click me" onClick={() => {
        handleClick()
      }} />
    </div>
  )
}