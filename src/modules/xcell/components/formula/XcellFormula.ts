import { XcellCore } from '@/core/XcellCore'

export class XcellFormula extends XcellCore {
    component_id = 'excell__fx'

    toHTML(): string {
        return `
                    <div
                        class="h-8 border-l flex items-center justify-center w-10 font-bold italic text-xl text-green-500 select-none"
                    >
                        Fx
                    </div>
                    <div
                        class="w-full h-8 border focus:outline-none pt-1.5 px-2"
                        contenteditable="true"
                        spellcheck="false"
                        aria-placeholder="formula"
                    ></div>
        `
    }
}
