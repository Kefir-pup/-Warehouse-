import { getCardEl, getTiteEl, getCenterWrapEl, getButtonEl, getFormEl, getInputEl, getLinkEl } from "./components.js"
import { navigate } from "./navigate.js"

// Создание карточки регистрации
export function createRegCard(containerEl) {
    let cardEl = getCardEl()

    const titleEl = getTiteEl("Регистрация")

    const formEl = getFormEl()

    let loginInputEl = getInputEl("text", "email", "E-mail")
    let passwordInputEl = getInputEl("password", "password", "Пароль")
    let nameInputEl = getInputEl("text", "name", "Имя")
    let surnameInputEl = getInputEl("text", "surname", "Фамилия")

    let regButtonEl = getButtonEl("Зарегистрироваться")

    const centerWrapEl = getCenterWrapEl()
    const homeLinkEl = getLinkEl("На главную")
    const loginLinkEl = getLinkEl("Вход")

    homeLinkEl.addEventListener("click", function (event) {
        event.preventDefault()
        navigate()
    })

    loginLinkEl.addEventListener("click", function (event) {
        event.preventDefault()
        navigate("login")
    })

    formEl.addEventListener("submit", function (event) {
        event.preventDefault()
        alert("Регистрация")
    })

    centerWrapEl.append(homeLinkEl, loginLinkEl)
    formEl.append(loginInputEl, passwordInputEl, nameInputEl, surnameInputEl, regButtonEl)

    cardEl.append(titleEl, formEl, centerWrapEl)
    containerEl.append(cardEl)
}