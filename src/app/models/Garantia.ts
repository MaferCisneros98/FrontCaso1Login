import { Cliente } from "./Cliente";
import { Vehiculo } from './Vehiculo';

export class Garantia{
    id_garantia:number;
    id_cliente:number;
    placa:string;
    tiempo:number;
    motivo:string;
    numero_chasis:number;
    cliente: Cliente;
    vehiculo: Vehiculo;
}