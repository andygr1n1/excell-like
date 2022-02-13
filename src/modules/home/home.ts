export const Home = () => {
    document.addEventListener('DOMContentLoaded', function () {
        //dom is fully loaded, but maybe waiting on images & css files
        const homepage = document.getElementById('homepage')
        const loading = document.getElementById('loading-animation-sq')
        const timeout = setTimeout(() => {
            homepage?.classList.remove('hidden')
            loading?.classList.remove('flex')
            loading?.classList.add('hidden')
            console.log('home')
            clearTimeout(timeout)
        }, 1000)
    })
}
