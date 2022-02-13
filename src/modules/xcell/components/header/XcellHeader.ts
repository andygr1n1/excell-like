import { XcellCore } from '@/core/XcellCore'

export class XcellHeader extends XcellCore {
    component_id = 'excell__header'

    toHTML(): string {
        return `
                    <div class="flex items-center">
                        <h1 class="logo-title py-4">Excell</h1>
                        <input
                            type="text"
                            placeholder="Table name"
                            class="table-name-input"
                        />
                    </div>
             
                    <div class="flex items-center text-gray-500 gap-5">
                        <button class="xcell-button-delete">
                            <span class="material-icons"> delete </span>
                        </button>
                        <a href="./index.html">
                            <button class="xcell-button-exit">
                                <span class="material-icons-outlined">
                                    logout
                                </span>
                            </button>
                        </a>
                    </div>
            `
    }
}
