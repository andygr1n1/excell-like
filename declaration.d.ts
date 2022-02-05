/* eslint-disable @typescript-eslint/no-explicit-any */
// declaration.d.ts
declare module '*.scss'

// declare module '*.scss' {
//     const content: Record<string, string>
//     export default content
// }

declare module '*.svg' {
    const content: any
    export default content
}
