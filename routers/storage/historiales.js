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
export class storageHistoriales {
    constructor(data) { Object.assign(this, data); }
}
__decorate([
    Expose({ name: 'id-inventario' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-inventario" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-inventario" }; } }),
    __metadata("design:type", Number)
], storageHistoriales.prototype, "id", void 0);
__decorate([
    Expose({ name: 'cantidadProducto' }),
    IsString({ message: () => { throw { status: 406, message: "Ingresar correctamente el formato cantidadProducto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro cantidadProducto" }; } }),
    __metadata("design:type", Number)
], storageHistoriales.prototype, "cantidad", void 0);
__decorate([
    Expose({ name: 'id-bodega-origen' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-bodega-origen" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-bodega-origen" }; } }),
    __metadata("design:type", Number)
], storageHistoriales.prototype, "id_bodega_origen", void 0);
__decorate([
    Expose({ name: 'id-bodega-destino' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato id-bodega-destino" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro id-bodega-destino" }; } }),
    __metadata("design:type", Number)
], storageHistoriales.prototype, "id_bodega_destino", void 0);
__decorate([
    Expose({ name: 'createdBy' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato createdBy" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro createdBy" }; } }),
    __metadata("design:type", Number)
], storageHistoriales.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'updateBy' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "Ingresar correctamente el formato updatedBy" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "Es obligatorio el parametro updatedBy" }; } }),
    __metadata("design:type", Number)
], storageHistoriales.prototype, "update_by", void 0);
