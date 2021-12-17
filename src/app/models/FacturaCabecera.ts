import { FacturaCuerpo } from './FacturaCuerpo';
import { Cliente } from './Cliente';
export class FacturaCabecera{

    id_factura?:number;
    tipo?:string;
    fecha?:Date;
    id_cliente: number;
    cliente:Cliente;
}