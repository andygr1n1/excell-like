import { XcellCore } from '@/core/XcellCore'

export class XcellTable extends XcellCore {
    component_id = 'excell__table'

    toHTML(): string {
        return `        
                    <div class="row row-header">
                        <div class="cell row-number"></div>
                        <div class="cell column">A</div>
                        <div class="cell column">B</div>
                        <div class="cell column">C</div>
                    </div>
                    <div class="row">
                        <div class="cell row-number">0</div>
                        <div contenteditable="true" class="cell"></div>
                        <div contenteditable="true" class="cell"></div>
                        <div contenteditable="true" class="cell"></div>
                    </div>

        `
    }
}
