"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[4465],{94465:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="export declare function defineReadOnly<T, K extends keyof T>(object: T, name: K, value: T[K]): void;\nexport declare function getStatic<T>(ctor: any, key: string): T;\nexport declare type Deferrable<T> = {\n    [K in keyof T]: T[K] | Promise<T[K]>;\n};\nexport declare function resolveProperties<T>(object: Readonly<Deferrable<T>>): Promise<T>;\nexport declare function checkProperties(object: any, properties: {\n    [name: string]: boolean;\n}): void;\nexport declare function shallowCopy<T>(object: T): T;\nexport declare function deepCopy<T>(object: T): T;\nexport declare class Description<T = any> {\n    constructor(info: {\n        [K in keyof T]: T[K];\n    });\n}\n//# sourceMappingURL=index.d.ts.map"}}]);
//# sourceMappingURL=4465.0.52.0-dev.1720638426578.js.map