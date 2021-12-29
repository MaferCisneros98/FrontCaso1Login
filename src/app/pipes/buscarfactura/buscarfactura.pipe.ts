import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarfactura'
})
export class BuscarfacturaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultPosts = [];
    for (const factura of value) {
      if (factura.cliente.cedula.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(factura);

      };
    };
    return resultPosts; 
  }

}
