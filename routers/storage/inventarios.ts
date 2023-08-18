import { Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsString } from 'class-validator';

export class storageInventarios {

    @Expose({ name: 'id-inventario' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-inventario" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-inventario" } } })
    id: number;

    @Expose({ name: 'id-bodega' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-bodega" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-bodega" } } })
    id_bodega: number;

    @Expose({ name: 'id-producto' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-producto" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-producto" } } })
    id_producto: number;

    @Expose({ name: 'cantidadProducto' })
    @IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato cantidadProducto" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro cantidadProducto" } } })
    cantidad: number;

    @Expose({ name: 'createdBy' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato createdBy" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro createdBy" } } })
    created_by: number;

    @Expose({ name: 'updateBy' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato updatedBy" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro updatedBy" } } })
    update_by: number;

    constructor(data: Partial<storageInventarios>) {
        this.id = 0;
        this.id_bodega = 0;
        this.id_producto = 0;
        this.cantidad = 0;
        this.created_by = 0;
        this.update_by = 0
    }

}