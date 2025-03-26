export function Greeting({isLoggedIn}) {
  if(isLoggedIn) {
    return <h1>Добро пожаловать!</h1>
  } else {
    return <h1>Войдите в систему!</h1>
  }
}