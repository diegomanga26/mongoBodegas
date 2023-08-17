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
export class storageUsers {
    constructor(data) { Object.assign(this, data); }
}
__decorate([
    Expose({ name: 'id-user' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-user" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-user" }; } }),
    __metadata("design:type", Number)
], storageUsers.prototype, "id", void 0);
__decorate([
    Expose({ name: 'nombreUser' }),
    IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato nombreUser" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro nombreUser" }; } }),
    __metadata("design:type", String)
], storageUsers.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'emailUser' }),
    IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato emailUser" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro emailUser" }; } }),
    __metadata("design:type", String)
], storageUsers.prototype, "email", void 0);
__decorate([
    Expose({ name: 'estadoBodega' }),
    IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato estadoBodega" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro estadoBodega" }; } }),
    __metadata("design:type", String)
], storageUsers.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'createdBy' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato createdBy" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro createdBy" }; } }),
    __metadata("design:type", Number)
], storageUsers.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'updateBy' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato updatedBy" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro updatedBy" }; } }),
    __metadata("design:type", Number)
], storageUsers.prototype, "update_by", void 0);
__decorate([
    Expose({ name: 'passwordUser' }),
    IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato passwordUser" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro passwordUser" }; } }),
    __metadata("design:type", String)
], storageUsers.prototype, "password", void 0);
