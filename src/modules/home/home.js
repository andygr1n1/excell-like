import { button } from '../../components/button'

export const Home = () => {
    const hello = document.createElement('h1')
    const wrapper = document.createElement('div')

    const aboutUsButton = button('About us', '/about.html')

    hello.classList.add(
        'bg-gradient-to-r',
        'from-green-400',
        'to-blue-500',
        'text-transparent',
        'text-9xl',
        'bg-clip-text',
        'font-extrabold'
    )

    wrapper.classList.add(
        'flex',
        'flex-col',
        'gap-20',
        'w-full',
        'h-screen',
        'justify-center',
        'items-center',
        'bg-gray-200'
    )

    hello.textContent = 'Hello Pro!'
    wrapper.appendChild(hello)
    wrapper.appendChild(aboutUsButton)
    document.body.appendChild(wrapper)
}
