import { button } from '../../components/button'
import { moneyValue, moreMoney, setMoney } from '../../store/basic_store'
import styles from './home.module.scss'

export const Home = () => {
    const homeRoot = document.getElementById('homepage')
    const moneyUpButton = document.getElementById('money-up')

    const moneyCounter = document.getElementById('money-counter')
    const aboutUsButton = button('About us', './about.html')
    const moneyContainer = document.createElement('span')

    const getMoneyFromLocalStorage = JSON.parse(
        localStorage.getItem('money-value') || ''
    )

    if (getMoneyFromLocalStorage) {
        setMoney(moneyValue, getMoneyFromLocalStorage)
    }

    moneyContainer.textContent = `${moneyValue.value.toString()} $`
    if (moneyUpButton)
        moneyUpButton.onclick = () => {
            moreMoney(moneyValue)
            moneyContainer.textContent = `${moneyValue.value.toString()} $`
        }

    homeRoot?.classList.add(styles['wrapper'])
    homeRoot?.appendChild(aboutUsButton)
    moneyCounter?.appendChild(moneyContainer)
}
