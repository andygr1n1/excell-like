import _ from 'lodash'
import '../styles/index.css'
import printMe from './modules/print.js'
function component() {
    const element = document.createElement('div')
    const btn = document.createElement('button')
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')

    btn.innerHTML = 'Click me and check the console! Fuck me and click me'
    btn.onclick = printMe

    element.appendChild(btn)

    return element
}

document.body.appendChild(component())
