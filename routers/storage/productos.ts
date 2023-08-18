import { Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsString } from 'class-validator';

export class storageProductos {

    @Expose({ name: 'id-productos' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-productos" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-productos" } } })
    id: number;
    
    @Expose({ name: 'nombreProducto' })
    @IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato nombreProducto" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro nombreProducto" } } })
    nombre: string;

    @Expose({ name: 'descripcionProducto' })
    @IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato descripcionProducto" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro descripcionProducto" } } })
    descripcion: string;

    @Expose({ name: 'estadoProducto' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato estadoProducto" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro estadoProducto" } } })
    estado: number;

    @Expose({ name: 'createdBy' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato createdBy" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro createdBy" } } })
    created_by: number;

    constructor(data: Partial<storageProductos>) {
        Object.assign(this, data);
        this.id = 0;
        this.nombre = "ProductoXXXX";
        this.descripcion = "DescripcionProducto";
        this.estado = 0;
        this.created_by = 0;
    }

}