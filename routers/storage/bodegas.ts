import { Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsString } from 'class-validator';

export class storageBodegas {

    @Expose({ name: 'id-bodegas' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-bodegas" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-bodegas" } } })
    id: number;

    @Expose({ name: 'nombreBodega' })
    @IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato nombreBodega" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro nombreBodega" } } })
    nombre: string;

    @Expose({ name: 'id-responsable' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-responsable" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-responsable" } } })
    id_responsable: number;

    @Expose({ name: 'estadoBodega' })
    @IsNumber({},{ message: () => { throw { status: 406, message: "Ingresar correctamente el formato estadoBodega" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro estadoBodega" } } })
    estado: number;

    @Expose({ name: 'createdBy' })
    @IsNumber({},{ message: () => { throw { status: 406, message: "Ingresar correctamente el formato createdBy" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro createdBy" } } })
    created_by: number;

    @Expose({ name: 'updateBy' })
    @IsNumber({},{ message: () => { throw { status: 406, message: "Ingresar correctamente el formato updateBy" } } })
    update_by: number;

    constructor(data: Partial<storageBodegas>) {
        this.id = 0;
        this.nombre = "BodegaXXXX";
        this.id_responsable = 0;
        this.estado = 0;
        this.created_by = 0;
    }

}