var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsString } from 'class-validator';
export class storageProductos {
    constructor(data) {
        this.id = 0;
        this.nombre = "ProductoXXXX";
        this.descripcion = "DescripcionProducto";
        this.estado = 0;
        this.created_by = 0;
    }
}
__decorate([
    Expose({ name: 'id-productos' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-productos" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-productos" }; } }),
    __metadata("design:type", Number)
], storageProductos.prototype, "id", void 0);
__decorate([
    Expose({ name: 'nombreProducto' }),
    IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato nombreProducto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro nombreProducto" }; } }),
    __metadata("design:type", String)
], storageProductos.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'descripcionProcesador' }),
    IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato descripcionProcesador" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro descripcionProcesador" }; } }),
    __metadata("design:type", String)
], storageProductos.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: 'estadoProducto' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato estadoProducto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro estadoProducto" }; } }),
    __metadata("design:type", Number)
], storageProductos.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'createdBy' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato createdBy" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro createdBy" }; } }),
    __metadata("design:type", Number)
], storageProductos.prototype, "created_by", void 0);
