import { XcellCore } from '@/core/XcellCore'
import { createTable } from './table.template'

export class XcellTable extends XcellCore {
    component_id = 'excell__table'

    toHTML(): string {
        return createTable()
    }
}
