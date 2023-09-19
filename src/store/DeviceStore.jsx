import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Холодильники'},
      {id: 2, name: 'Смартфоны'},
      {id: 3, name: 'Ноутбуки'},
      {id: 4, name: 'Телевизоры'}
    ]
    this._brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Apple'},
      {id: 3, name: 'Lenovo'},
      {id: 4, name: 'Nokia'},
      {id: 5, name: 'Asus'},
    ]
    this._devices = [
      {id: 1, name: 'Холодильник1', rating: 5, price: 50000, img: 'https://kitchen-planet.ru/wp-content/uploads/2020/06/k15.jpg'},
      {id: 2, name: 'Холодильник2', rating: 4, price: 60000, img: 'https://import-bt.ru/upload/iblock/b99/b995f9fac00aa284b64b953705e13e9c.jpg'},
      {id: 3, name: 'Холодильник3', rating: 5, price: 55000, img: 'https://galaktikabt.ru/image/cache/catalog/image/catalog/image/catalog/holodilniki/oad-resize-cache-iblock-262-45e-1900-563-1-1-800x800-1000x1000.jpg'},
      {id: 4, name: 'Холодильник4', rating: 4, price: 75000, img: 'https://zapchasti-techniki.ru/image/catalog/i/pe/lc/8bb895d5ae9ac4d16c4199d5d5e851bf.jpg'},
      {id: 5, name: 'Холодильник3', rating: 5, price: 40000, img: 'https://galaktikabt.ru/image/cache/catalog/image/catalog/image/catalog/holodilniki/oad-resize-cache-iblock-262-45e-1900-563-1-1-800x800-1000x1000.jpg'},
      {id: 6, name: 'Холодильник3', rating: 5, price: 120000, img: 'https://galaktikabt.ru/image/cache/catalog/image/catalog/image/catalog/holodilniki/oad-resize-cache-iblock-262-45e-1900-563-1-1-800x800-1000x1000.jpg'},
      {id: 7, name: 'Холодильник3', rating: 5, price: 57000, img: 'https://galaktikabt.ru/image/cache/catalog/image/catalog/image/catalog/holodilniki/oad-resize-cache-iblock-262-45e-1900-563-1-1-800x800-1000x1000.jpg'},

    ]
    this._selectedType = {}
    this._selectedBrand = {}
    makeAutoObservable(this)
  }

  seyTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}