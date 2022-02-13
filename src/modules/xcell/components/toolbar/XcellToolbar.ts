import { XcellCore } from '@/core/XcellCore'

export class XcellToolbar extends XcellCore {
    component_id = 'excell__toolbar'

    toHTML(): string {
        return `
                    <div
                        class="flex gap-3 border-l border-r w-[fit-content] px-3"
                    >
                        <button class="xcell-button-standart">
                            <span class="material-icons-outlined">
                                format_bold
                            </span>
                        </button>
                        <button class="xcell-button-standart">
                            <span class="material-icons-outlined">
                                format_italic
                            </span>
                        </button>
                        <button class="xcell-button-standart">
                            <span class="material-icons-outlined">
                                format_underlined
                            </span>
                        </button>
                    </div>
                   
                    <div class="flex gap-3 border-r w-[fit-content] px-3">
                        <button class="xcell-button-standart">
                            <span class="material-icons-outlined">
                                format_align_left
                            </span>
                        </button>
                        <button class="xcell-button-standart">
                            <span class="material-icons-outlined">
                                format_align_center
                            </span>
                        </button>
                        <button class="xcell-button-standart">
                            <span class="material-icons-outlined">
                                format_align_right
                            </span>
                        </button>
                    </div>
        `
    }
}
