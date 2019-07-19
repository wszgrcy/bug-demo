import { SimpleChanges } from '@angular/core';

export class aa {
    name
    aaaa
    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.name);
        console.log(changes, this.aaaa);
    }
}