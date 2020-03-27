function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./assets/animations.ts":
  /*!******************************!*\
    !*** ./assets/animations.ts ***!
    \******************************/

  /*! exports provided: FadeInAnimation, FadeOutAnimation */

  /***/
  function assetsAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FadeInAnimation", function () {
      return FadeInAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FadeOutAnimation", function () {
      return FadeOutAnimation;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var FadeInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ duration }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }))]);
    var FadeOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ duration }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }))]);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _lootbox_home_lootbox_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lootbox-home/lootbox-home.component */
    "./src/app/lootbox-home/lootbox-home.component.ts");
    /* harmony import */


    var _landing_seed_generator_landing_seed_generator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landing-seed-generator/landing-seed-generator.component */
    "./src/app/landing-seed-generator/landing-seed-generator.component.ts");

    var routes = [{
      path: '',
      component: _landing_seed_generator_landing_seed_generator_component__WEBPACK_IMPORTED_MODULE_3__["LandingSeedGeneratorComponent"]
    }, {
      path: 'lootbox/:seed',
      component: _lootbox_home_lootbox_home_component__WEBPACK_IMPORTED_MODULE_2__["LootboxHomeComponent"]
    }, {
      path: 'lootbox',
      component: _lootbox_home_lootbox_home_component__WEBPACK_IMPORTED_MODULE_2__["LootboxHomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'lootbox-simulator';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _lootbox_home_lootbox_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lootbox-home/lootbox-home.component */
    "./src/app/lootbox-home/lootbox-home.component.ts");
    /* harmony import */


    var _lootbox_home_lootbox_item_lootbox_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lootbox-home/lootbox-item/lootbox-item.component */
    "./src/app/lootbox-home/lootbox-item/lootbox-item.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var ngx_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");
    /* harmony import */


    var _landing_seed_generator_landing_seed_generator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./landing-seed-generator/landing-seed-generator.component */
    "./src/app/landing-seed-generator/landing-seed-generator.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_14__["ClipboardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _lootbox_home_lootbox_home_component__WEBPACK_IMPORTED_MODULE_5__["LootboxHomeComponent"], _lootbox_home_lootbox_item_lootbox_item_component__WEBPACK_IMPORTED_MODULE_6__["LootboxItemComponent"], _landing_seed_generator_landing_seed_generator_component__WEBPACK_IMPORTED_MODULE_15__["LandingSeedGeneratorComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_14__["ClipboardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _lootbox_home_lootbox_home_component__WEBPACK_IMPORTED_MODULE_5__["LootboxHomeComponent"], _lootbox_home_lootbox_item_lootbox_item_component__WEBPACK_IMPORTED_MODULE_6__["LootboxItemComponent"], _landing_seed_generator_landing_seed_generator_component__WEBPACK_IMPORTED_MODULE_15__["LandingSeedGeneratorComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_14__["ClipboardModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-seed-generator/landing-seed-generator.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/landing-seed-generator/landing-seed-generator.component.ts ***!
    \****************************************************************************/

  /*! exports provided: LandingSeedGeneratorComponent */

  /***/
  function srcAppLandingSeedGeneratorLandingSeedGeneratorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingSeedGeneratorComponent", function () {
      return LandingSeedGeneratorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! faker */
    "./node_modules/faker/index.js");
    /* harmony import */


    var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    var LandingSeedGeneratorComponent = /*#__PURE__*/function () {
      function LandingSeedGeneratorComponent(router) {
        _classCallCheck(this, LandingSeedGeneratorComponent);

        this.router = router;
      }

      _createClass(LandingSeedGeneratorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // use faker library to generate a seed
          var seed = faker__WEBPACK_IMPORTED_MODULE_1__["internet"].password(8); // route to the lootbox home using the seed

          this.router.navigate(["/lootbox/".concat(seed)]);
        }
      }]);

      return LandingSeedGeneratorComponent;
    }();

    LandingSeedGeneratorComponent.ɵfac = function LandingSeedGeneratorComponent_Factory(t) {
      return new (t || LandingSeedGeneratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LandingSeedGeneratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingSeedGeneratorComponent,
      selectors: [["app-landing-seed-generator"]],
      decls: 2,
      vars: 0,
      consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "spinnerContainer"]],
      template: function LandingSeedGeneratorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"]],
      styles: [".spinnerContainer[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,.87);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1zZWVkLWdlbmVyYXRvci9sYW5kaW5nLXNlZWQtZ2VuZXJhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctc2VlZC1nZW5lcmF0b3IvbGFuZGluZy1zZWVkLWdlbmVyYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXJDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44Nyk7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingSeedGeneratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landing-seed-generator',
          templateUrl: './landing-seed-generator.component.html',
          styleUrls: ['./landing-seed-generator.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lootbox-home/lootbox-home.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/lootbox-home/lootbox-home.component.ts ***!
    \********************************************************/

  /*! exports provided: LootboxHomeComponent */

  /***/
  function srcAppLootboxHomeLootboxHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LootboxHomeComponent", function () {
      return LootboxHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var assets_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! assets/animations */
    "./assets/animations.ts");
    /* harmony import */


    var _services_lootbox_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/lootbox-item.service */
    "./src/app/services/lootbox-item.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _lootbox_item_lootbox_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./lootbox-item/lootbox-item.component */
    "./src/app/lootbox-home/lootbox-item/lootbox-item.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");

    function LootboxHomeComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Congratulations, you got... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
      }
    }

    function LootboxHomeComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-lootbox-item", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemFlipped", function LootboxHomeComponent_div_5_Template_app_lootbox_item_itemFlipped_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var item_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.LootBoxItemFlipped(item_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lootboxItem", item_r3);
      }
    }

    var _c0 = function _c0() {
      return ["/"];
    };

    function LootboxHomeComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Generate New Lootbox");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Shareable Link ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cbOnSuccess", function LootboxHomeComponent_div_6_Template_button_cbOnSuccess_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.LinkCopied();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Copy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.platformLocation.href);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cbContent", ctx_r2.platformLocation.href);
      }
    }

    var LootboxHomeComponent = /*#__PURE__*/function () {
      function LootboxHomeComponent(lootBoxService, route, platformLocation, snackbar) {
        _classCallCheck(this, LootboxHomeComponent);

        this.lootBoxService = lootBoxService;
        this.route = route;
        this.platformLocation = platformLocation;
        this.snackbar = snackbar;
        this.itemNumber = 1;
        this.seed = 'Default'; // list of loot box items

        this.lootBoxItems = [];
      }

      _createClass(LootboxHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // get the seed from the URL, if possible
          var seedParameter = this.route.paramMap.subscribe(function (params) {
            if (params.get('seed')) {
              _this.seed = params.get('seed');
            }

            _this.GenerateLootBoxItems();
          });
        }
      }, {
        key: "GenerateLootBoxItems",
        value: function GenerateLootBoxItems() {
          var _this2 = this;

          this.lootBoxItems = [];

          for (var i = 0; i < this.itemNumber; i++) {
            this.lootBoxService.generateLootboxItem(this.seed).subscribe(function (x) {
              _this2.lootBoxItems.push(x);
            });
          }
        }
      }, {
        key: "LootBoxItemFlipped",
        value: function LootBoxItemFlipped(item) {
          item.flipped = true;
        }
      }, {
        key: "LinkCopied",
        value: function LinkCopied() {
          this.snackbar.open('Link Copied!', null, {
            duration: 1300
          });
        }
      }, {
        key: "AllItemsFlipped",
        get: function get() {
          return this.lootBoxItems.every(function (x) {
            return x.flipped;
          });
        }
      }]);

      return LootboxHomeComponent;
    }();

    LootboxHomeComponent.ɵfac = function LootboxHomeComponent_Factory(t) {
      return new (t || LootboxHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_lootbox_item_service__WEBPACK_IMPORTED_MODULE_3__["LootboxItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]));
    };

    LootboxHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LootboxHomeComponent,
      selectors: [["app-lootbox-home"]],
      inputs: {
        itemNumber: "itemNumber"
      },
      decls: 7,
      vars: 9,
      consts: [[1, "lootboxContainer"], ["fxLayout", "column"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["class", "statusText", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center start", "fxFlex", "1 0 auto"], [4, "ngFor", "ngForOf"], ["fxFlex", "none", "fxLayout", "column", "fxLayoutAlign", "start center", 4, "ngIf"], [1, "statusText"], [3, "lootboxItem", "itemFlipped"], ["fxFlex", "none", "fxLayout", "column", "fxLayoutAlign", "start center"], ["mat-raised-button", "", 3, "routerLink"], [1, "urlCopyContainer"], ["matInput", "", "type", "text", "disabled", "", 3, "value"], ["mat-raised-button", "", "ngxClipboard", "", 3, "cbContent", "cbOnSuccess"]],
      template: function LootboxHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LootboxHomeComponent_div_3_Template, 3, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LootboxHomeComponent_div_5_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LootboxHomeComponent_div_6_Template, 10, 5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 100, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 100, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 100, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.AllItemsFlipped);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lootBoxItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.AllItemsFlipped);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _lootbox_item_lootbox_item_component__WEBPACK_IMPORTED_MODULE_8__["LootboxItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardDirective"]],
      styles: [".lootboxContainer[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,.87);\r\n}\r\n\r\n.statusText[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n.urlCopyContainer[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n    margin-bottom: 25px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9vdGJveC1ob21lL2xvb3Rib3gtaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2xvb3Rib3gtaG9tZS9sb290Ym94LWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb290Ym94Q29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuODcpO1xyXG59XHJcblxyXG4uc3RhdHVzVGV4dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi51cmxDb3B5Q29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59Il19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(assets_animations__WEBPACK_IMPORTED_MODULE_2__["FadeInAnimation"], {
          params: {
            duration: '900ms'
          }
        })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(assets_animations__WEBPACK_IMPORTED_MODULE_2__["FadeOutAnimation"], {
          params: {
            duration: '900ms'
          }
        })])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LootboxHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lootbox-home',
          templateUrl: './lootbox-home.component.html',
          styleUrls: ['./lootbox-home.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(assets_animations__WEBPACK_IMPORTED_MODULE_2__["FadeInAnimation"], {
            params: {
              duration: '900ms'
            }
          })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(assets_animations__WEBPACK_IMPORTED_MODULE_2__["FadeOutAnimation"], {
            params: {
              duration: '900ms'
            }
          })])])]
        }]
      }], function () {
        return [{
          type: _services_lootbox_item_service__WEBPACK_IMPORTED_MODULE_3__["LootboxItemService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }];
      }, {
        itemNumber: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/lootbox-home/lootbox-item/lootbox-item.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/lootbox-home/lootbox-item/lootbox-item.component.ts ***!
    \*********************************************************************/

  /*! exports provided: LootboxItemComponent */

  /***/
  function srcAppLootboxHomeLootboxItemLootboxItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LootboxItemComponent", function () {
      return LootboxItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var assets_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! assets/animations */
    "./assets/animations.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function LootboxItemComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LootboxItemComponent_div_0_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.revealItem();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reveal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
      }
    }

    function LootboxItemComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.lootboxItem.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r9.lootboxItem.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.lootboxItem.description);
      }
    }

    var LootboxItemComponent = /*#__PURE__*/function () {
      function LootboxItemComponent() {
        _classCallCheck(this, LootboxItemComponent);

        this.itemFlipped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.flipped = false;
      }

      _createClass(LootboxItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "revealItem",
        value: function revealItem() {
          this.flipped = true;
          this.itemFlipped.emit(this.flipped);
        }
      }]);

      return LootboxItemComponent;
    }();

    LootboxItemComponent.ɵfac = function LootboxItemComponent_Factory(t) {
      return new (t || LootboxItemComponent)();
    };

    LootboxItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LootboxItemComponent,
      selectors: [["app-lootbox-item"]],
      inputs: {
        lootboxItem: "lootboxItem"
      },
      outputs: {
        itemFlipped: "itemFlipped"
      },
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [1, "lootboxCard"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "fullSize"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-card-image", "", 3, "src"]],
      template: function LootboxItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LootboxItemComponent_div_0_Template, 5, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LootboxItemComponent_div_1_Template, 9, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flipped);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flipped);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"]],
      styles: [".lootboxCard[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n    width: 300px;\r\n}\r\n\r\n.fullSize[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9vdGJveC1ob21lL2xvb3Rib3gtaXRlbS9sb290Ym94LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sb290Ym94LWhvbWUvbG9vdGJveC1pdGVtL2xvb3Rib3gtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvb3Rib3hDYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5mdWxsU2l6ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(assets_animations__WEBPACK_IMPORTED_MODULE_2__["FadeInAnimation"], {
          params: {
            duration: '1300ms'
          }
        })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(assets_animations__WEBPACK_IMPORTED_MODULE_2__["FadeOutAnimation"], {
          params: {
            duration: '1300ms'
          }
        })])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LootboxItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lootbox-item',
          templateUrl: './lootbox-item.component.html',
          styleUrls: ['./lootbox-item.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(assets_animations__WEBPACK_IMPORTED_MODULE_2__["FadeInAnimation"], {
            params: {
              duration: '1300ms'
            }
          })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(assets_animations__WEBPACK_IMPORTED_MODULE_2__["FadeOutAnimation"], {
            params: {
              duration: '1300ms'
            }
          })])])]
        }]
      }], function () {
        return [];
      }, {
        lootboxItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemFlipped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/lootbox-item.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/lootbox-item.service.ts ***!
    \**************************************************/

  /*! exports provided: LootboxItemService */

  /***/
  function srcAppServicesLootboxItemServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LootboxItemService", function () {
      return LootboxItemService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! faker */
    "./node_modules/faker/index.js");
    /* harmony import */


    var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _random_text_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./random-text.service */
    "./src/app/services/random-text.service.ts");
    /* harmony import */


    var _random_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./random-image.service */
    "./src/app/services/random-image.service.ts");

    var LootboxItemService = /*#__PURE__*/function () {
      function LootboxItemService(randomTextService, randomImageService) {
        _classCallCheck(this, LootboxItemService);

        this.randomTextService = randomTextService;
        this.randomImageService = randomImageService;
      }

      _createClass(LootboxItemService, [{
        key: "generateLootboxItem",
        value: function generateLootboxItem(seed) {
          var _this3 = this;

          var numberSeed = this.generateSeed(seed);
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
            subscriber.next({
              name: _this3.randomTextService.getRandomName(numberSeed),
              description: _this3.randomTextService.getRandomDescription(numberSeed),
              imgUrl: _this3.randomImageService.getRandomImgUrl(numberSeed),
              flipped: false
            });
          }); // return {
          //   name: this.randomTextService.getRandomName(numberSeed),
          //   description: this.randomTextService.getRandomDescription(numberSeed),
          //   imgUrl: this.randomImageService.getRandomImgUrl(numberSeed)
          // } as LootBoxItemModel;
        }
      }, {
        key: "generateSeed",
        value: function generateSeed(seed) {
          var seedString = seed;

          if (!seedString) {
            seedString = faker__WEBPACK_IMPORTED_MODULE_1__["internet"].password(8);
          } // convert password to ascii code


          var asciiString = '';

          for (var i = 0; i < seedString.length; i++) {
            asciiString += seedString.charCodeAt(i).toString(10);
          }

          return Number.parseInt(asciiString, 10);
        }
      }]);

      return LootboxItemService;
    }();

    LootboxItemService.ɵfac = function LootboxItemService_Factory(t) {
      return new (t || LootboxItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_random_text_service__WEBPACK_IMPORTED_MODULE_3__["RandomTextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_random_image_service__WEBPACK_IMPORTED_MODULE_4__["RandomImageService"]));
    };

    LootboxItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LootboxItemService,
      factory: LootboxItemService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LootboxItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _random_text_service__WEBPACK_IMPORTED_MODULE_3__["RandomTextService"]
        }, {
          type: _random_image_service__WEBPACK_IMPORTED_MODULE_4__["RandomImageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/random-image.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/random-image.service.ts ***!
    \**************************************************/

  /*! exports provided: RandomImageService */

  /***/
  function srcAppServicesRandomImageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RandomImageService", function () {
      return RandomImageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RandomImageService = /*#__PURE__*/function () {
      function RandomImageService(httpClient) {
        _classCallCheck(this, RandomImageService);

        this.httpClient = httpClient; // Picsum request variables

        this.picSumBaseUrl = 'https://picsum.photos';
        this.pictureWidth = 600;
        this.pictureHeight = 600;
      }

      _createClass(RandomImageService, [{
        key: "getRandomImgUrl",
        value: function getRandomImgUrl(seed) {
          return this.picSumBaseUrl + '/seed/' + seed + '/' + this.pictureWidth + '/' + this.pictureHeight; // return loremPicsum({
          //   width: 300,
          //   image: seed
          // });
        }
      }]);

      return RandomImageService;
    }();

    RandomImageService.ɵfac = function RandomImageService_Factory(t) {
      return new (t || RandomImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    RandomImageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RandomImageService,
      factory: RandomImageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RandomImageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/random-text.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/random-text.service.ts ***!
    \*************************************************/

  /*! exports provided: RandomTextService */

  /***/
  function srcAppServicesRandomTextServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RandomTextService", function () {
      return RandomTextService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! faker */
    "./node_modules/faker/index.js");
    /* harmony import */


    var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);

    var RandomTextService = /*#__PURE__*/function () {
      function RandomTextService() {
        _classCallCheck(this, RandomTextService);
      }

      _createClass(RandomTextService, [{
        key: "getRandomName",
        value: function getRandomName(seed) {
          faker__WEBPACK_IMPORTED_MODULE_1__["seed"](seed);
          return faker__WEBPACK_IMPORTED_MODULE_1__["commerce"].productName();
        }
      }, {
        key: "getRandomDescription",
        value: function getRandomDescription(seed) {
          faker__WEBPACK_IMPORTED_MODULE_1__["seed"](seed);
          return faker__WEBPACK_IMPORTED_MODULE_1__["hacker"].phrase();
        }
      }]);

      return RandomTextService;
    }();

    RandomTextService.ɵfac = function RandomTextService_Factory(t) {
      return new (t || RandomTextService)();
    };

    RandomTextService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RandomTextService,
      factory: RandomTextService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RandomTextService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Projects\LootBox Simulator Website\lootbox-simulator\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map