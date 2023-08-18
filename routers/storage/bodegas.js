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
export class storageBodegas {
    constructor(data) {
        this.id = 0;
        this.nombre = "BodegaXXXX";
        this.id_responsable = 0;
        this.estado = 0;
        this.created_by = 0;
    }
}
__decorate([
    Expose({ name: 'id-bodegas' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-bodegas" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-bodegas" }; } }),
    __metadata("design:type", Number)
], storageBodegas.prototype, "id", void 0);
__decorate([
    Expose({ name: 'nombreBodega' }),
    IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato nombreBodega" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro nombreBodega" }; } }),
    __metadata("design:type", String)
], storageBodegas.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'id-responsable' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-responsable" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-responsable" }; } }),
    __metadata("design:type", Number)
], storageBodegas.prototype, "id_responsable", void 0);
__decorate([
    Expose({ name: 'estadoBodega' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato estadoBodega" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro estadoBodega" }; } }),
    __metadata("design:type", Number)
], storageBodegas.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'createdBy' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato createdBy" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro createdBy" }; } }),
    __metadata("design:type", Number)
], storageBodegas.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'updateBy' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato updateBy" }; } }),
    __metadata("design:type", Number)
], storageBodegas.prototype, "update_by", void 0);
