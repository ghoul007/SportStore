webpackJsonp(["admin.module"],{

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__order_service__ = __webpack_require__("../../../../../src/app/admin/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/admin/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard__ = __webpack_require__("../../../../../src/app/admin/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/admin/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_component__ = __webpack_require__("../../../../../src/app/admin/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_product_component__ = __webpack_require__("../../../../../src/app/admin/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_product_edit_product_edit_component__ = __webpack_require__("../../../../../src/app/admin/product/product-edit/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__order_table_order_table_component__ = __webpack_require__("../../../../../src/app/admin/order-table/order-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routing = __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forChild([
    { path: "auth", component: __WEBPACK_IMPORTED_MODULE_7__auth_auth_component__["a" /* AuthComponent */] },
    // { path: "product", component: ProductComponent },
    { path: "main", component: __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'products', component: __WEBPACK_IMPORTED_MODULE_11__product_product_component__["a" /* ProductComponent */] },
            { path: 'products/:mode', component: __WEBPACK_IMPORTED_MODULE_12__product_product_edit_product_edit_component__["a" /* ProductEditComponent */] },
            { path: 'products/:mode/:id', component: __WEBPACK_IMPORTED_MODULE_12__product_product_edit_product_edit_component__["a" /* ProductEditComponent */] },
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_13__order_table_order_table_component__["a" /* OrderTableComponent */] },
        ] },
    { path: "**", redirectTo: "auth" }
]);
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_10__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */], routing, __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__admin_admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_7__auth_auth_component__["a" /* AuthComponent */], __WEBPACK_IMPORTED_MODULE_11__product_product_component__["a" /* ProductComponent */], __WEBPACK_IMPORTED_MODULE_12__product_product_edit_product_edit_component__["a" /* ProductEditComponent */], __WEBPACK_IMPORTED_MODULE_13__order_table_order_table_component__["a" /* OrderTableComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_0__order_service__["a" /* OrderService */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse bg-info\">\n    <a class=\"navbar-brand\">SPORTS STORE Admin</a>\n</div>\n<div class=\"m-t-1\">\n    <div class=\"col-xs-3\">\n        <button class=\"btn btn-outline-info btn-block\" routerLink=\"/admin/main/products\" routerLinkActive=\"active\">\n          Products\n      </button>\n        <button class=\"btn btn-outline-info btn-block\" routerLink=\"/admin/main/orders\" routerLinkActive=\"active\">\n          Orders\n      </button>\n        <button class=\"btn btn-outline-danger btn-block\" (click)=\"logout()\">\n          Logout\n      </button>\n    </div>\n    <div class=\"col-xs-9\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/admin/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(_service, router) {
        this._service = _service;
        this.router = router;
        this.prods = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getProducts().subscribe(function (res) {
            _this.prods = res;
        });
    };
    AdminComponent.prototype.logout = function () {
        this._service.clear();
        this.router.navigateByUrl("/");
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "app-admin",
            template: __webpack_require__("../../../../../src/app/admin/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/admin/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        console.log("this.auth.authenticated()", this.auth.authenticated());
        if (!this.auth.authenticated()) {
            this.router.navigateByUrl("/admin/auth");
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/admin/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(_http) {
        this._http = _http;
        this.baseUrl = "http://localhost:5555/";
    }
    AuthService.prototype.sendRequest = function (verb, url, body, auth) {
        if (auth === void 0) { auth = false; }
        var request = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Request */]({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if (auth && this.auth_token != null) {
            request.headers.set("Authorization", "Bearer<" + this.auth_token + ">");
        }
        return this._http.request(request).map(function (response) { return response.json(); });
    };
    AuthService.prototype.authenticated = function () {
        return this.auth_token != null;
    };
    AuthService.prototype.authenticate = function (username, password) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        var option = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* RequestOptions */]({ headers: header });
        return this._http
            .post("http://localhost:5555/login", JSON.stringify({ username: username, password: password }), option)
            .map(function (res) {
            var r = res.json();
            _this.auth_token = r.success ? r.token : null;
            return r.success;
        });
    };
    AuthService.prototype.getProducts = function () {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Get, "product");
    };
    AuthService.prototype.saveProduct = function (product) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Post, "product", product, true);
    };
    AuthService.prototype.updateProduct = function (product) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Put, "product/" + product.id, product, true);
    };
    AuthService.prototype.deleteProduct = function (id) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Delete, "product/" + id, null, true);
    };
    AuthService.prototype.getOrders = function () {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Get, "order", null, true);
    };
    AuthService.prototype.deleteOrder = function (id) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Delete, "order/" + id, null, true);
    };
    AuthService.prototype.updateOrder = function (order) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Put, "order/" + order.id, order, true);
    };
    AuthService.prototype.saveOrder = function (order) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Post, "order", order);
    };
    AuthService.prototype.clear = function () {
        this.auth_token = null;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/admin/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-info p-a-1 text-xs-center\">\n    <h3>SportsStore Admin</h3>\n</div>\n<div class=\"bg-danger m-t-1 p-a-1 text-xs-center\" *ngIf=\"errorMessage != null\">\n    {{errorMessage}}\n</div>\n<div class=\"p-a-1\">\n    <form novalidate #form=\"ngForm\" (ngSubmit)=\"authenticate(form)\">\n        <div class=\"form-group\">\n            <label>Name</label>\n            <input class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" required />\n        </div>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"password\" required />\n        </div>\n        <div class=\"text-xs-center\">\n            <button class=\"btn btn-secondary\" routerLink=\"/\">Go back</button>\n            <button class=\"btn btn-primary\" type=\"submit\">Log In</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/admin/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthComponent = /** @class */ (function () {
    function AuthComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthComponent.prototype.authenticate = function (form) {
        var _this = this;
        if (form.valid) {
            // perform authentication
            this.auth.authenticate(this.username, this.password).subscribe(function (res) {
                console.log('==>', res);
                if (res) {
                    _this.router.navigateByUrl("/admin/main");
                }
                else {
                    _this.errorMessage = "Form Data Invalid";
                }
            });
        }
        else {
            this.errorMessage = "Form Data Invalid";
        }
    };
    AuthComponent.prototype.ngOnInit = function () { };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "app-auth",
            template: __webpack_require__("../../../../../src/app/admin/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/order-table/order-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/order-table/order-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-check\">\n    <label class=\"form-check-label\">\n  <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"includeShipped\"/>\n      Display Shipped Orders\n  </label>\n</div>\n<table class=\"table table-sm\">\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Zip</th>\n            <th>Shipped</th>\n            <th colspan=\"2\">Cart</th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n\n        <!-- <ng-template ngFor let-o [ngForOf]=\"getOrders()\"> -->\n        <tr *ngFor=\"let o of getOrders()\">\n            <td>{{o.name}}</td>\n            <td>{{o.zip}}</td>\n            <td>{{o.shipped}}</td>\n            <td>\n                <table>\n                    <thead>\n                        <th>Product</th>\n                        <th>Quantity</th>\n                    </thead>\n                    <tbody>\n                        <!-- <tr *ngFor=\"let line of o.cart.lines\"> -->\n                        <!-- <td colspan=\"2\"></td> -->\n                        <!-- <td>{{line.product.name}}</td> -->\n                        <!-- <td>{{line.quantity}}</td> -->\n                        <!-- </tr> -->\n                    </tbody>\n                </table>\n\n            </td>\n\n            <td>\n                <button class=\"btn btn-warning\" (click)=\"markShipped(o)\">\n                      Ship\n                  </button>\n                <button class=\"btn btn-danger\" (click)=\"delete(o.id)\">\n                      Delete\n                  </button>\n            </td>\n        </tr>\n        <!-- <tr *ngFor=\"let line of o.cart.lines\">\n                <td colspan=\"2\"></td>\n                <td>{{line.product.name}}</td>\n                <td>{{line.quantity}}</td>\n            </tr> -->\n        <!-- </ng-template> -->\n    </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/admin/order-table/order-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__order_service__ = __webpack_require__("../../../../../src/app/admin/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderTableComponent = /** @class */ (function () {
    function OrderTableComponent(orderService) {
        this.orderService = orderService;
        this.includeShipped = false;
    }
    OrderTableComponent.prototype.getOrders = function () {
        return this.orderService.getOrders();
        //   // .filter(o => this.includeShipped || !o.shipped);
    };
    OrderTableComponent.prototype.markShipped = function (order) {
        order.shipped = true;
        this.orderService.updateOrder(order);
    };
    OrderTableComponent.prototype.delete = function (id) {
        this.orderService.deleteOrder(id);
    };
    OrderTableComponent.prototype.ngOnInit = function () {
    };
    OrderTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "app-order-table",
            template: __webpack_require__("../../../../../src/app/admin/order-table/order-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/order-table/order-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__order_service__["a" /* OrderService */]])
    ], OrderTableComponent);
    return OrderTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/admin/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderService = /** @class */ (function () {
    function OrderService(_service) {
        var _this = this;
        this._service = _service;
        this.orders = [];
        this._service.getOrders().subscribe(function (data) {
            _this.orders = data;
        });
    }
    OrderService.prototype.getOrders = function () {
        return this.orders;
    };
    OrderService.prototype.markShipped = function (order) {
        order.shipped = true;
        this._service.updateOrder(order);
    };
    OrderService.prototype.deleteOrder = function (id) {
        var _this = this;
        this._service.deleteOrder(id).subscribe(function (p) {
            _this.orders.splice(_this.orders.findIndex(function (p) { return p.id == id; }), 1);
        });
    };
    OrderService.prototype.updateOrder = function (order) {
        this._service.updateOrder(order).subscribe(function (p) { return p; });
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "../../../../../src/app/admin/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/admin/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(_service) {
        var _this = this;
        this._service = _service;
        this.products = [];
        this.categories = [];
        this._service.getProducts().subscribe(function (data) {
            _this.products = data;
            _this.categories = data
                .map(function (p) { return p.category; })
                .filter(function (c, index, array) { return array.indexOf(c) == index; })
                .sort();
        });
    }
    ProductService.prototype.getProducts = function (category) {
        if (category === void 0) { category = null; }
        return this.products.filter(function (p) { return category == null || category == p.category; });
    };
    ProductService.prototype.getProduct = function (id) {
        return this.products.find(function (p) { return p.id == id; });
    };
    ProductService.prototype.getCategories = function () {
        return this.categories;
    };
    ProductService.prototype.saveProduct = function (product) {
        var _this = this;
        if (product.id == null || product.id == 0) {
            this._service.saveProduct(product).subscribe(function (p) { return _this.products.push(p); });
        }
        else {
            this._service.updateProduct(product).subscribe(function (p) {
                _this.products.splice(_this.products.findIndex(function (p) { return p.id == product.id; }), 1, product);
            });
        }
    };
    ProductService.prototype.deleteProduct = function (id) {
        var _this = this;
        this._service.deleteProduct(id).subscribe(function (p) {
            _this.products.splice(_this.products.findIndex(function (p) { return p.id == id; }), 1);
        });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/admin/product/product-edit/product-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/product/product-edit/product-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-primary p-a-1\" [class.bg-warning]=\"editing\">\n    <h5>{{editing ? \"Edit\" : \"Create\"}} Product</h5>\n</div>\n<form novalidate #form=\"ngForm\" (ngSubmit)=\"save(form)\">\n    <div class=\"form-group\">\n        <label>Name</label>\n        <input class=\"form-control\" name=\"name\" [(ngModel)]=\"product.name\" />\n    </div>\n    <div class=\"form-group\">\n        <label>Category</label>\n        <input class=\"form-control\" name=\"category\" [(ngModel)]=\"product.category\" />\n    </div>\n    <div class=\"form-group\">\n        <label>Description</label>\n        <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"product.description\">\n      </textarea>\n    </div>\n    <div class=\"form-group\">\n        <label>Price</label>\n        <input class=\"form-control\" name=\"price\" [(ngModel)]=\"product.price\" />\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [class.btn-warning]=\"editing\">\n      {{editing ? \"Save\" : \"Create\"}}\n  </button>\n    <button type=\"reset\" class=\"btn btn-secondary\" routerLink=\"/admin/main/products\">\n      Cancel\n  </button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/product/product-edit/product-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_service__ = __webpack_require__("../../../../../src/app/admin/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_product__ = __webpack_require__("../../../../../src/app/model/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(service, router, activeRoute) {
        this.service = service;
        this.router = router;
        this.editing = false;
        this.product = new __WEBPACK_IMPORTED_MODULE_1__model_product__["a" /* Product */]();
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            Object.assign(this.product, service.getProduct(activeRoute.snapshot.params["id"]));
        }
    }
    ProductEditComponent.prototype.save = function (form) {
        this.service.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    };
    ProductEditComponent.prototype.ngOnInit = function () { };
    ProductEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "app-product-edit",
            template: __webpack_require__("../../../../../src/app/admin/product/product-edit/product-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/product/product-edit/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-sm table-striped\">\n    <thead>\n        <tr>\n            <th>ID</th>\n            <th>Name</th>\n            <th>Category</th>\n            <th>Price</th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let p of getProducts()\">\n            <td>{{p.id}}</td>\n            <td>{{p.name}}</td>\n            <td>{{p.category}}</td>\n            <td>{{p.price | currency:\"USD\":true:\"2.2-2\"}}</td>\n            <td>\n                <button class=\"btn btn-sm btn-warning\" [routerLink]=\"['/admin/main/products/edit', p.id]\">\n                  Edit\n              </button>\n                <button class=\"btn btn-sm btn-danger\" (click)=\"deleteProduct(p.id)\">\n                  Delete\n              </button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<button class=\"btn btn-primary\" routerLink=\"/admin/main/products/create\">\n  Create New Product\n</button>"

/***/ }),

/***/ "../../../../../src/app/admin/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_service__ = __webpack_require__("../../../../../src/app/admin/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent(_service) {
        this._service = _service;
        this.prods = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        // this._service.getProducts(); 
    };
    ProductComponent.prototype.getProducts = function () {
        return this._service.getProducts();
        // return   this._service.getProducts().subscribe(res => {
        //     return  res;
        //   });
    };
    ProductComponent.prototype.deleteProduct = function (id) {
        this._service.deleteProduct(id);
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "app-product",
            template: __webpack_require__("../../../../../src/app/admin/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__product_service__["a" /* ProductService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map