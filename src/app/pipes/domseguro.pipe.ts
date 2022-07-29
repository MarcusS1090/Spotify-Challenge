import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private donSanitizer:DomSanitizer){

  }

  transform(value: string): any {
    let url = "https://open.spotify.com/embed?uri=";

    return this.donSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
