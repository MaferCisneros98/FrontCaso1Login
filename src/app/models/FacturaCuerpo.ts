import { FacturaCabecera } from './FacturaCabecera';
import { Vehiculo } from './Vehiculo';
export class FacturaCuerpo{

    id_cuerpo?:number;
    subtotal?:number;
    iva?:number;
    total?:number;
    placa?:string;
    factura:FacturaCabecera;
    vehiculo:Vehiculo;
    
    
}