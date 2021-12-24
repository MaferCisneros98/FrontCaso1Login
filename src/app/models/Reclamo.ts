import { Cliente } from "./Cliente";

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
    cliente:Cliente;
}