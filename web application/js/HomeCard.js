import { getCardEl, getTiteEl, getDescEl, getCenterWrapEl, getButtonEl } from "./components.js"
import { navigate } from "./navigate.js"

// Создание главной карточки
export default function createHomeCard(containerEl) {
    let cardEl = getCardEl()

    const titleEl = getTiteEl("Добро пожаловать на сайт")

    const descEl = getDescEl("Войдите в личный кабинет. Если Вы, еще не зарегистрированы, пройдите регистрацию!")

    const centerWrapEl = getCenterWrapEl()

    const loginButtonEl = getButtonEl("Войти")
    const regButtonEl = getButtonEl("Регистрация")

    loginButtonEl.addEventListener("click", function () {
        navigate("login")
    })
    regButtonEl.addEventListener("click", function () {
        navigate("reg")
    })

    centerWrapEl.append(loginButtonEl, regButtonEl)
    cardEl.append(titleEl, descEl, centerWrapEl)
    containerEl.append(cardEl)
}