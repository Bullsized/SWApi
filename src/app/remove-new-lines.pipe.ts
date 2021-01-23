import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'removeNewLines'
})
export class RemoveNewLinesPipe implements PipeTransform {

    transform(value: string, ...args: unknown[]): unknown {
        let text = value;
        // first removing the new lines, then the multiple spaces
        text = text.replace(/\r?\n|\r/g, ' ').replace(/\s{2,}/g, ' ');
        return text;
    }
}
