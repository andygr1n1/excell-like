import { action, observable } from 'mobx'

interface IMoneyValue {
    value: number
}

export const moneyValue = observable({ value: 3000 })

export const moreMoney = action((moneyValue: IMoneyValue) => {
    moneyValue.value = moneyValue.value + 1000

    localStorage.setItem('money-value', JSON.stringify(moneyValue.value))
})

export const setMoney = action((moneyValue: IMoneyValue, newValue: string) => {
    moneyValue.value = +newValue
})
