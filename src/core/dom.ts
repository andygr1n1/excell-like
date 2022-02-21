export class Dom {
    constructor(selector: string | HTMLElement) {
        if (typeof selector === 'string') {
            const htmlElement = document.querySelector(selector)
            if (!htmlElement)
                throw new Error('provided selector doesn\'t exist in dom')
            this.$el = htmlElement
        } else {
            this.$el = selector
        }
    }

    $el: Element

    html(html?: string) {
        if (!this.$el) return this

        if (html) {
            this.$el.innerHTML = html
            return this
        }

        return this.$el.outerHTML.trim()
    }

    clear() {
        this.html('')
        return this
    }

    append(element: Element) {
        if (element instanceof Dom) {
            element = element.$el
        }

        this.$el?.append(element)

        return this
    }

    on(eventType: string, callback: (event: Event) => void) {
        this.$el.addEventListener(eventType, callback)
    }
}

export function $(selector: string | HTMLElement) {
    return new Dom(selector)
}

$.create = (tagname: string, classes = '', id = '') => {
    const element = document.createElement(tagname)
    if (classes) {
        element.classList.add(classes)
    }
    if (id) {
        element.setAttribute('id', id)
    }

    return $(element)
}
