import { SimpleChanges } from '@angular/core';
export class MixinBase {
    constructor(...args) { }
}
export function base(base) {
    return class extends base {
        name = 'c2'
        aaaa
        ngOnChanges(changes: SimpleChanges): void {
            console.log(this.name);
            console.log(changes, this.aaaa);
        }
    }
}
export const Base = base(MixinBase)