import { Pipe, PipeTransform } from '@angular/core'
import { Hero } from './hero';

@Pipe({ name : 'touppercase'})

export class UpperCasePipe implements PipeTransform{
    transform(pharse: string): string{
        return pharse ? '' + pharse.toUpperCase : '';
    }
}