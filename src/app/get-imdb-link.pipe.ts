import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'getImdbLink'
})
export class GetImdbLinkPipe implements PipeTransform {

    transform(value: number, ...args: unknown[]): unknown {
        const currentIDofTheFilm = value;
        switch (currentIDofTheFilm) {
            case 1:
                return 'https://www.imdb.com/title/tt0120915/?ref_=nv_sr_srsg_0';
            case 2:
                return 'https://www.imdb.com/title/tt0121765/?ref_=nv_sr_srsg_8';
            case 3:
                return 'https://www.imdb.com/title/tt0121766/?ref_=nv_sr_srsg_11';
            case 4:
                return 'https://www.imdb.com/title/tt0076759/?ref_=nv_sr_srsg_6';
            case 5:
                return 'https://www.imdb.com/title/tt0080684/?ref_=nv_sr_srsg_0';
            case 6:
                return 'https://www.imdb.com/title/tt0086190/?ref_=nv_sr_srsg_10';
            default:
                return 'https://www.imdb.com/';
        }
    }
}
