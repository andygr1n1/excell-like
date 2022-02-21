/* eslint-disable quotes */
const CODES = {
    A: 65,
    Z: 90,
}

function toChar(_: string, index: number) {
    return String.fromCharCode(CODES.A + index)
}

function createColumn(el: string) {
    return `
        <div class="cell column">${el}</div>
    `
}

function createCell(cells = 1): string {
    const createdCells: string[] = []

    let numberOfCells = cells

    while (numberOfCells > 0) {
        createdCells.push(`<div contenteditable="true" class="cell"></div>`)

        numberOfCells--
    }

    return createdCells.join('')
}

function createRow(data = '', rowNumber = '', rowHeader = '') {
    return `
         <div class="row ${rowHeader}">
            <div class="cell row-number">${rowNumber}</div>
            ${data}
        </div>
    `
}

export function createTable(rowsCount = 50) {
    const colsCount = CODES.Z - CODES.A + 1

    let rows: string[] = []

    const cols: string = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(createColumn)
        .join('')

    rows.push(createRow(cols, '', 'row-header'))

    const tableRows: string = new Array(rowsCount)
        .fill('')
        .map((_, index) => createRow(createCell(colsCount), `${index + 1}`))
        .join('')

    rows = rows.concat(tableRows)

    return rows.join('')
}
