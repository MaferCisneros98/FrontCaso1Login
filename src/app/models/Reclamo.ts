import { Cliente } from "./Cliente";
import { Vehiculo } from "./Vehiculo";

export class Reclamo{
    id_reclamo:number;
    id_garantia:number;
    id_cliente:number;
    tiempo:number;
    motivo:string;
    placa:string;
    numero_chasis:number;
    marca:number;
    modelo:number;
    estadoReclamo:number;
    cliente:Cliente;
    vehiculo: Vehiculo;
}