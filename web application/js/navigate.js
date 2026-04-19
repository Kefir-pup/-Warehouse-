import createHomeCard  from "./HomeCard.js"
// import { createLoginCard } from "./LoginCard.js"
import { createRegCard } from "./RegCard.js"

// Отрисовка карточки
// Назвать функцию navigate
export async function navigate(cardName) {
    const appEl = document.getElementById("app")
    appEl.innerHTML = ''

    switch (cardName) {
        case "login":
            const LoginCard = await import ("./LoginCard.js")
            LoginCard.default(appEl)
            // createLoginCard(appEl)
            break
        case "reg":
            createRegCard(appEl)
            break
        default:
            createHomeCard(appEl)
    }
}