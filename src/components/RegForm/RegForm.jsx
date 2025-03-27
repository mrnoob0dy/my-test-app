import { useState } from 'react'
import { validatePassword, checkPasswordMatch, checkRequiredFields } from './validators'
import './RegForm.css'

// /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z|d]{8,}$/

export function RegForm() {
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [selectedYear, setSelectedYear] = useState('')
  const [requiredFieldsError, setRequiredFieldsError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  
  const handleNameChange = (e) => {
    const newName = e.target.value
    setName(newName)
  }

  const handleEmailChange = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)
  }

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    setIsPasswordValid(validatePassword(newPassword))
    setPasswordMatch(checkPasswordMatch(newPassword, confirmPassword))
  }
 
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value
    setConfirmPassword(newConfirmPassword)
    setPasswordMatch(checkPasswordMatch(password, newConfirmPassword))
  }

  const years = Array.from({length: 40}, (_ , i) => new Date().getFullYear() - i)
  const handleYearChange = (e) => setSelectedYear(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    const allFieldsFilled = checkRequiredFields([name, email, password, confirmPassword, selectedYear])

    const isFormValid = allFieldsFilled && isPasswordValid && passwordMatch
    if(!isFormValid) {
      setRequiredFieldsError(true)
      setShowSuccessMessage(false)
      return
    } else {
      setRequiredFieldsError(false)
      setShowSuccessMessage(true)
    }

    const formData = {name, email, password, confirmPassword, selectedYear}
    alert(JSON.stringify(formData, null, 2))

    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 3000);
  }

  const handleReset = () => {
    setName('')
    setEmail('')
    setPassword('')
    setIsPasswordValid('')
    setConfirmPassword('')
    setSelectedYear('')
  }

  return (
    <div className="section">
      <h1 className="title">Форма регистрации</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={handleNameChange}/>
        <input type="email" placeholder="Email" onChange={handleEmailChange}/>
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
        {!isPasswordValid && <div className="errow-message">Пароль должен состоять из латинских букв и цифр, а так же должен быть не менее 8 символов</div>}      
        <input type="password" placeholder="Password again" value={confirmPassword} onChange={handleConfirmPasswordChange}/>
        {!passwordMatch && <div className="error-message">Пароли пока не совпадают</div>}
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="">Дата окончания учебного заведения</option>
          {years.map(year => (
            <option key={year.toString()} value={year}>{year}</option>
          ))}
        </select>
        <button type="submit">Отправить</button>
        <button type="reset" onClick={handleReset}>Очистить форму</button>
        {requiredFieldsError && (<div className="error-message">Проверьте заполнение полей формы!</div>)}
        {showSuccessMessage && (<div className="success-message">Данные успешно отправлены!</div>)}
      </form>
    </div>
  )
}