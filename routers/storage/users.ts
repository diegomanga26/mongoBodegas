import { Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsString } from 'class-validator';

export class storageUsers {

    @Expose({ name: 'id-user' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-user" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-user" } } })
    id: number;

    @Expose({ name: 'nombreUser' })
    @IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato nombreUser" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro nombreUser" } } })
    nombre: string;

    @Expose({ name: 'emailUser' })
    @IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato emailUser" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro emailUser" } } })
    email: string;

    @Expose({ name: 'estadoBodega' })
    @IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato estadoBodega" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro estadoBodega" } } })
    estado: string;

    @Expose({ name: 'createdBy' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato createdBy" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro createdBy" } } })
    created_by: number;

    @Expose({ name: 'updateBy' })
    @IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato updatedBy" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro updatedBy" } } })
    update_by: number;

    @Expose({ name: 'passwordUser' })
    @IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato passwordUser" } } })
    @IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro passwordUser" } } })
    password: string;

    constructor(data: Partial<storageUsers>) { Object.assign(this, data) }

}