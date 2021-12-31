import { Cliente } from "./Cliente";
import { FacturaCabecera } from "./FacturaCabecera";
import { Vehiculo } from "./Vehiculo";

export class OrdenReparacion{
   id_orden?: number;
   factura?: FacturaCabecera;
   descripcion?: string;
   cliente?: Cliente;
   vehiculo?: Vehiculo;
}