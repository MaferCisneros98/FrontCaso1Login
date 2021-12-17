export class OrdenReparacion{
    id_orden: number;
    id_cliente: number;
   descripcion: string;
   

    constructor(id_orden: number, id_cliente: number, descripcion: string) {
        this.id_orden= id_orden;
        this.id_cliente=id_cliente;
        this.descripcion = descripcion;
        
    }
}