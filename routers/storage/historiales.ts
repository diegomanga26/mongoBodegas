import { Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsString } from 'class-validator';

export class storageHistoriales {

    @Expose({ name: 'id-inventario' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-inventario" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-inventario" } } })
    id: number;

    @Expose({ name: 'cantidadProducto' })
    @IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato cantidadProducto" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro cantidadProducto" } } })
    cantidad: number;
    
    @Expose({ name: 'id-bodega-origen' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-bodega-origen" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-bodega-origen" } } })
    id_bodega_origen: number;

    @Expose({ name: 'id-bodega-destino' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-bodega-destino" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-bodega-destino" } } })
    id_bodega_destino: number;

    @Expose({ name: 'createdBy' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato createdBy" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro createdBy" } } })
    created_by: number;

    @Expose({ name: 'updateBy' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato updatedBy" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro updatedBy" } } })
    update_by: number;

    constructor(data: Partial<storageHistoriales>) { Object.assign(this, data) }

}