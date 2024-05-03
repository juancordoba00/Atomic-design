"use strict";
(self["webpackChunkatomic_design"] = self["webpackChunkatomic_design"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_pages_with_atomic_design_with_atomic_design_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/with-atomic-design/with-atomic-design.component */ 4983);
/* harmony import */ var _components_pages_without_atomic_design_without_atomic_design_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/without-atomic-design/without-atomic-design.component */ 8997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: 'without-atomic-design',
  component: _components_pages_without_atomic_design_without_atomic_design_component__WEBPACK_IMPORTED_MODULE_1__.WithoutAtomicDesignComponent
}, {
  path: 'with-atomic-design',
  component: _components_pages_with_atomic_design_with_atomic_design_component__WEBPACK_IMPORTED_MODULE_0__.WithAtomicDesignComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'atomic-design';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["@charset \"UTF-8\";\n\nbody[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\n\nheader[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 97vw;\n  background-color: #333;\n  color: #fff;\n  padding: 10px 20px;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.top-bar[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 40%;\n  justify-content: space-between;\n}\n.top-bar[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  padding: 6px;\n  margin: 0 20px;\n  background-color: rgba(122, 122, 122, 0.5);\n  width: auto;\n  border-radius: 6px;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 200px;\n  border-radius: 6px;\n  border: none;\n  margin-right: 5px;\n}\n\n.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  background-color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 6px;\n}\n\n.user-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  text-decoration: none;\n}\n\n\nmain[_ngcontent-%COMP%] {\n  padding: 100px 20px;\n}\nmain[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\nmain[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  border: none;\n  border-top: 1px solid rgba(128, 128, 128, 0.3);\n}\nmain[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.product[_ngcontent-%COMP%] {\n  flex: 1 0 30%;\n  margin: 10px;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n\n.product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.product[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 18px;\n}\n\n.product[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 14px;\n}\n\n.product[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  background-color: #333;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 6px;\n}\n\n\nfooter[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #fff;\n  padding: 20px;\n}\n\n.footer-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.footer-top[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.footer-top[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.dropbtn[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #fff;\n  width: 50px;\n  border: none;\n  cursor: pointer;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  border-radius: 6px;\n  position: absolute;\n  background-color: #333;\n  min-width: 160px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  right: 0px;\n  top: 50px;\n}\n.dropdown-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  margin-left: 0;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(128, 128, 128, 0.3);\n  border-radius: 6px;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #555;\n  border-radius: 6px;\n}\n\n.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.navigation[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  padding: 10px 15px;\n  border-radius: 5px;\n  transition: background-color 0.3s;\n}\n\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(122, 122, 122, 0.5);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQixzQkFBQTtBQUNBO0VBQ0UsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUNBLHVCQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QUFFSjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQSxvQ0FBQTtBQUNBO0VBQ0UsbUJBQUE7QUFBRjtBQUVFO0VBQ0UsU0FBQTtBQUFKO0FBR0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBRko7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BLHVCQUFBO0FBQ0E7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSEY7QUFLRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBSEo7QUFLSTtFQUNFLFdBQUE7QUFITjs7QUFRQTtFQUNFLGtCQUFBO0FBTEY7O0FBUUEsYUFBQTtBQUNBLGtDQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBTEY7O0FBUUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBTEY7QUFPRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBTEo7O0FBU0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBTkY7O0FBU0E7RUFDRSwwQ0FBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0FBTkY7O0FBU0EsZUFBQTtBQUNBLHNDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVNBO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0FBTkY7O0FBU0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFORjs7QUFTQTtFQUNFLDBDQUFBO0FBTkYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFc3RpbG9zIGdlbmVyYWxlcyAqL1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKiBFc3RpbG9zIGRlbCBoZWFkZXIgKi9cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDk3dnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi50b3AtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5oZWFkZXItbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA0MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmhlYWRlci1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi5sb2dvIGltZyB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnNlYXJjaC1iYXIge1xuICBwYWRkaW5nOiA2cHg7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMiwgMTIyLCAxMjIsIDAuNSk7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5zZWFyY2gtYmFyIGlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnNlYXJjaC1iYXIgYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi51c2VyLWFjdGlvbnMgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBFc3RpbG9zIGRlbCBjb250ZW5pZG8gcHJpbmNpcGFsICovXG5tYWluIHtcbiAgcGFkZGluZzogMTAwcHggMjBweDtcblxuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgaHIge1xuICAgIG1hcmdpbjogMzBweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xuICB9XG5cbiAgLnByb2R1Y3QtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cblxuLnByb2R1Y3Qge1xuICBmbGV4OiAxIDAgMzAlO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5wcm9kdWN0IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5wcm9kdWN0IGgyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucHJvZHVjdCBwIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcm9kdWN0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLyogRXN0aWxvcyBkZWwgZm9vdGVyICovXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmZvb3Rlci10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgLmZvb3Rlci1zb2NpYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNXB4O1xuXG4gICAgYSA+IGltZyB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICB9XG4gIH1cbn1cblxuLmZvb3Rlci1ib3R0b20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIERyb3Bkb3duICovXG4vKiBFc3RpbG9zIGRlbCBib3TDg8KzbiBkZXNwbGVnYWJsZSAqL1xuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kcm9wYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogNTBweDtcblxuICB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogTmF2aWdhdGlvbiAqL1xuLyogRXN0aWxvcyBkZSBsYSBiYXJyYSBkZSBuYXZlZ2FjacODwrNuICovXG4ubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXZpZ2F0aW9uIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5uYXZpZ2F0aW9uIHVsIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5uYXZpZ2F0aW9uIHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5uYXZpZ2F0aW9uIHVsIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxuXG4ubmF2aWdhdGlvbiB1bCBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDEyMiwgMTIyLCAwLjUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_pages_with_atomic_design_with_atomic_design_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/with-atomic-design/with-atomic-design.component */ 4983);
/* harmony import */ var _components_pages_without_atomic_design_without_atomic_design_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/without-atomic-design/without-atomic-design.component */ 8997);
/* harmony import */ var _components_atoms_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/atoms/logo/logo.component */ 2463);
/* harmony import */ var _components_atoms_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/atoms/list-item/list-item.component */ 3878);
/* harmony import */ var _components_molecules_nav_header_nav_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/molecules/nav-header/nav-header.component */ 8573);
/* harmony import */ var _components_atoms_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/atoms/button/button.component */ 5146);
/* harmony import */ var _components_atoms_input_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/atoms/input/input.component */ 8446);
/* harmony import */ var _components_molecules_search_field_search_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/molecules/search-field/search-field.component */ 6106);
/* harmony import */ var _components_molecules_burguer_menu_burguer_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/molecules/burguer-menu/burguer-menu.component */ 9998);
/* harmony import */ var _components_organisms_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/organisms/header/header.component */ 3859);
/* harmony import */ var _components_atoms_footer_bottom_footer_bottom_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/atoms/footer-bottom/footer-bottom.component */ 5911);
/* harmony import */ var _components_atoms_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/atoms/social-icon/social-icon.component */ 1503);
/* harmony import */ var _components_molecules_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/molecules/footer-social/footer-social.component */ 6370);
/* harmony import */ var _components_molecules_footer_contact_footer_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/molecules/footer-contact/footer-contact.component */ 7187);
/* harmony import */ var _components_organisms_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/organisms/footer/footer.component */ 3984);
/* harmony import */ var _components_molecules_card_product_card_product_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/molecules/card-product/card-product.component */ 8805);
/* harmony import */ var _components_organisms_product_section_product_section_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/organisms/product-section/product-section.component */ 3671);
/* harmony import */ var _components_templates_main_template_main_template_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/templates/main-template/main-template.component */ 6654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);






















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_pages_with_atomic_design_with_atomic_design_component__WEBPACK_IMPORTED_MODULE_2__.WithAtomicDesignComponent, _components_pages_without_atomic_design_without_atomic_design_component__WEBPACK_IMPORTED_MODULE_3__.WithoutAtomicDesignComponent, _components_atoms_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__.LogoComponent, _components_atoms_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_5__.ListItemComponent, _components_molecules_nav_header_nav_header_component__WEBPACK_IMPORTED_MODULE_6__.NavHeaderComponent, _components_atoms_button_button_component__WEBPACK_IMPORTED_MODULE_7__.ButtonComponent, _components_atoms_input_input_component__WEBPACK_IMPORTED_MODULE_8__.InputComponent, _components_molecules_search_field_search_field_component__WEBPACK_IMPORTED_MODULE_9__.SearchFieldComponent, _components_molecules_burguer_menu_burguer_menu_component__WEBPACK_IMPORTED_MODULE_10__.BurguerMenuComponent, _components_organisms_header_header_component__WEBPACK_IMPORTED_MODULE_11__.HeaderComponent, _components_atoms_footer_bottom_footer_bottom_component__WEBPACK_IMPORTED_MODULE_12__.FooterBottomComponent, _components_atoms_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_13__.SocialIconComponent, _components_molecules_footer_contact_footer_contact_component__WEBPACK_IMPORTED_MODULE_15__.FooterContactComponent, _components_organisms_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__.FooterComponent, _components_molecules_card_product_card_product_component__WEBPACK_IMPORTED_MODULE_17__.CardProductComponent, _components_organisms_product_section_product_section_component__WEBPACK_IMPORTED_MODULE_18__.ProductSectionComponent, _components_molecules_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_14__.FooterSocialComponent, _components_templates_main_template_main_template_component__WEBPACK_IMPORTED_MODULE_19__.MainTemplateComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule],
    exports: [_components_templates_main_template_main_template_component__WEBPACK_IMPORTED_MODULE_19__.MainTemplateComponent]
  });
})();

/***/ }),

/***/ 5146:
/*!*************************************************************!*\
  !*** ./src/app/components/atoms/button/button.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComponent": () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a1) {
  return ["button", a1];
};
class ButtonComponent {
  constructor() {
    this.text = '';
    this.typeButton = 'primary';
  }
  static #_ = this.ɵfac = function ButtonComponent_Factory(t) {
    return new (t || ButtonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ButtonComponent,
    selectors: [["app-button"]],
    inputs: {
      text: "text",
      typeButton: "typeButton"
    },
    decls: 2,
    vars: 4,
    consts: [[3, "ngClass"]],
    template: function ButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.typeButton));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: [".button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border: none;\n  cursor: pointer;\n  border-radius: 6px;\n}\n\n.primary[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #fff;\n}\n\n.secondary[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdG9tcy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5911:
/*!***************************************************************************!*\
  !*** ./src/app/components/atoms/footer-bottom/footer-bottom.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterBottomComponent": () => (/* binding */ FooterBottomComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterBottomComponent {
  static #_ = this.ɵfac = function FooterBottomComponent_Factory(t) {
    return new (t || FooterBottomComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterBottomComponent,
    selectors: [["app-footer-bottom"]],
    decls: 3,
    vars: 0,
    consts: [[1, "footer-bottom"]],
    template: function FooterBottomComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 2024 Tienda de Ropa Deportiva. Todos los derechos reservados.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".footer-bottom[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdG9tcy9mb290ZXItYm90dG9tL2Zvb3Rlci1ib3R0b20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1ib3R0b20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8446:
/*!***********************************************************!*\
  !*** ./src/app/components/atoms/input/input.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class InputComponent {
  constructor() {
    this.placeholder = 'Buscar productos...';
  }
  static #_ = this.ɵfac = function InputComponent_Factory(t) {
    return new (t || InputComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InputComponent,
    selectors: [["app-input"]],
    inputs: {
      placeholder: "placeholder"
    },
    decls: 1,
    vars: 1,
    consts: [["type", "text", 1, "search-input", 3, "placeholder"]],
    template: function InputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholder);
      }
    },
    styles: [".search-input[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 200px;\n  border-radius: 6px;\n  border: none;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdG9tcy9pbnB1dC9pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtaW5wdXQge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3878:
/*!*******************************************************************!*\
  !*** ./src/app/components/atoms/list-item/list-item.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItemComponent": () => (/* binding */ ListItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ListItemComponent {
  constructor() {
    this.item = {
      text: ''
    };
  }
  static #_ = this.ɵfac = function ListItemComponent_Factory(t) {
    return new (t || ListItemComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ListItemComponent,
    selectors: [["app-list-item"]],
    inputs: {
      item: "item"
    },
    decls: 3,
    vars: 2,
    consts: [[1, "list-item", 3, "href"]],
    template: function ListItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.item.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.text);
      }
    },
    styles: [".list-item[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  padding: 10px 15px;\n  border-radius: 5px;\n  transition: background-color 0.3s;\n  display: block;\n}\n\nli[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(122, 122, 122, 0.5);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdG9tcy9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsMENBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWl0ZW0ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxubGkgLmxpc3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIyLCAxMjIsIDEyMiwgMC41KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2463:
/*!*********************************************************!*\
  !*** ./src/app/components/atoms/logo/logo.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoComponent": () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LogoComponent {
  static #_ = this.ɵfac = function LogoComponent_Factory(t) {
    return new (t || LogoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LogoComponent,
    selectors: [["app-logo"]],
    decls: 2,
    vars: 0,
    consts: [[1, "logo"], ["src", "../../../../assets/camiseta.png", "alt", "Logo de la tienda"]],
    template: function LogoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: [".logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdG9tcy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyBpbWcge1xuICBoZWlnaHQ6IDUwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1503:
/*!***********************************************************************!*\
  !*** ./src/app/components/atoms/social-icon/social-icon.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialIconComponent": () => (/* binding */ SocialIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SocialIconComponent {
  constructor() {
    this.socialIcon = {
      icon: ''
    };
  }
  static #_ = this.ɵfac = function SocialIconComponent_Factory(t) {
    return new (t || SocialIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SocialIconComponent,
    selectors: [["app-social-icon"]],
    inputs: {
      socialIcon: "socialIcon"
    },
    decls: 2,
    vars: 2,
    consts: [[3, "href"], ["alt", "Facebook", 3, "src"]],
    template: function SocialIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.socialIcon.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.socialIcon.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    },
    styles: ["a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdG9tcy9zb2NpYWwtaWNvbi9zb2NpYWwtaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImEgPiBpbWcge1xuICB3aWR0aDogNDBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9998:
/*!*****************************************************************************!*\
  !*** ./src/app/components/molecules/burguer-menu/burguer-menu.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BurguerMenuComponent": () => (/* binding */ BurguerMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _atoms_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atoms/list-item/list-item.component */ 3878);



function BurguerMenuComponent_app_list_item_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-list-item", 4);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r1);
  }
}
const _c0 = function (a0) {
  return {
    show: a0
  };
};
class BurguerMenuComponent {
  constructor() {
    this.dropdownOpen = false;
    this.items = [{
      text: 'Iniciar sesión',
      link: '/'
    }, {
      text: 'Registrarse',
      link: '/'
    }, {
      text: 'Carrito',
      link: '/'
    }];
  }
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  static #_ = this.ɵfac = function BurguerMenuComponent_Factory(t) {
    return new (t || BurguerMenuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BurguerMenuComponent,
    selectors: [["app-burguer-menu"]],
    decls: 5,
    vars: 4,
    consts: [[1, "dropdown"], ["src", "../assets/menu.png", "alt", "Logo de la tienda", 1, "dropbtn", 3, "click", "keydown.enter"], [1, "dropdown-content", 3, "ngClass"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
    template: function BurguerMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BurguerMenuComponent_Template_img_click_1_listener() {
          return ctx.toggleDropdown();
        })("keydown.enter", function BurguerMenuComponent_Template_img_keydown_enter_1_listener() {
          return ctx.toggleDropdown();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BurguerMenuComponent_app_list_item_4_Template, 1, 1, "app-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.dropdownOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _atoms_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_0__.ListItemComponent],
    styles: [".dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #fff;\n  width: 50px;\n  border: none;\n  cursor: pointer;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  border-radius: 6px;\n  position: absolute;\n  background-color: #333;\n  min-width: 160px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  right: 0px;\n  top: 50px;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.dropdown[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #555;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tb2xlY3VsZXMvYnVyZ3Vlci1tZW51L2J1cmd1ZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUNFO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQUo7QUFFSTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFBTjtBQUlFO0VBQ0UsY0FBQTtBQUZKOztBQU1BO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUhGIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgLmRyb3BidG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0b3A6IDUwcHg7XG5cbiAgICB1bCB7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8805:
/*!*****************************************************************************!*\
  !*** ./src/app/components/molecules/card-product/card-product.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardProductComponent": () => (/* binding */ CardProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _atoms_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atoms/button/button.component */ 5146);


class CardProductComponent {
  constructor() {
    this.product = {
      img: '',
      name: '',
      description: ''
    };
  }
  static #_ = this.ɵfac = function CardProductComponent_Factory(t) {
    return new (t || CardProductComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CardProductComponent,
    selectors: [["app-card-product"]],
    inputs: {
      product: "product"
    },
    decls: 8,
    vars: 5,
    consts: [[1, "product"], [1, "image-container"], ["alt", "Producto 1", 3, "src"], [3, "text", "typeButton"]],
    template: function CardProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.product.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", "Agregar al carrito")("typeButton", "primary");
      }
    },
    dependencies: [_atoms_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent],
    styles: [".product[_ngcontent-%COMP%] {\n  flex: 1 0 300px;\n  margin: 10px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.product[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n  overflow: hidden;\n}\n.product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.product[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 18px;\n}\n.product[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 14px;\n}\n\n\n@media (max-width: 600px) {\n  .product[_ngcontent-%COMP%] {\n    flex: 1 0 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tb2xlY3VsZXMvY2FyZC1wcm9kdWN0L2NhcmQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7RUFDRixXQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBRko7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7QUF5QkE7RUFDRTtJQUNFLGNBQUE7RUFKRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3Qge1xuICBmbGV4OiAxIDAgMzAwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5pbWFnZS1jb250YWluZXIge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICBoMiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi8qIC5wcm9kdWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMSAwIDMwMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ucHJvZHVjdCBoMiwgLnByb2R1Y3QgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn0gKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5wcm9kdWN0IHtcbiAgICBmbGV4OiAxIDAgMTAwJTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7187:
/*!*********************************************************************************!*\
  !*** ./src/app/components/molecules/footer-contact/footer-contact.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterContactComponent": () => (/* binding */ FooterContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterContactComponent {
  static #_ = this.ɵfac = function FooterContactComponent_Factory(t) {
    return new (t || FooterContactComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterContactComponent,
    selectors: [["app-footer-contact"]],
    decls: 9,
    vars: 0,
    consts: [[1, "footer-contact"]],
    template: function FooterContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tienda de Ropa Deportiva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Direcci\u00F3n: Calle 123, Ciudad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tel\u00E9fono: 123-456-7890");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email: info@tiendaropadeportiva.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6370:
/*!*******************************************************************************!*\
  !*** ./src/app/components/molecules/footer-social/footer-social.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterSocialComponent": () => (/* binding */ FooterSocialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _atoms_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atoms/social-icon/social-icon.component */ 1503);



function FooterSocialComponent_app_social_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-social-icon", 2);
  }
  if (rf & 2) {
    const social_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("socialIcon", social_r1);
  }
}
class FooterSocialComponent {
  constructor() {
    this.socialNetworks = [{
      icon: '../assets/facebook.png'
    }, {
      icon: '../assets/gorjeo.png'
    }, {
      icon: '../assets/social.png'
    }];
  }
  static #_ = this.ɵfac = function FooterSocialComponent_Factory(t) {
    return new (t || FooterSocialComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FooterSocialComponent,
    selectors: [["app-footer-social"]],
    decls: 2,
    vars: 1,
    consts: [[1, "footer-social"], [3, "socialIcon", 4, "ngFor", "ngForOf"], [3, "socialIcon"]],
    template: function FooterSocialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FooterSocialComponent_app_social_icon_1_Template, 1, 1, "app-social-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.socialNetworks);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _atoms_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_0__.SocialIconComponent],
    styles: [".footer-social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tb2xlY3VsZXMvZm9vdGVyLXNvY2lhbC9mb290ZXItc29jaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItc29jaWFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNXB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8573:
/*!*************************************************************************!*\
  !*** ./src/app/components/molecules/nav-header/nav-header.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavHeaderComponent": () => (/* binding */ NavHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _atoms_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atoms/list-item/list-item.component */ 3878);



function NavHeaderComponent_app_list_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-list-item", 2);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r1);
  }
}
class NavHeaderComponent {
  constructor() {
    this.items = [{
      text: 'Inicio',
      link: '/'
    }, {
      text: 'Productos',
      link: '/about'
    }, {
      text: 'Contacto',
      link: '/contact'
    }];
  }
  static #_ = this.ɵfac = function NavHeaderComponent_Factory(t) {
    return new (t || NavHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NavHeaderComponent,
    selectors: [["app-nav-header"]],
    decls: 3,
    vars: 1,
    consts: [[1, "navigation"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
    template: function NavHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NavHeaderComponent_app_list_item_2_Template, 1, 1, "app-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _atoms_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_0__.ListItemComponent],
    styles: [".navigation[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tb2xlY3VsZXMvbmF2LWhlYWRlci9uYXYtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6106:
/*!*****************************************************************************!*\
  !*** ./src/app/components/molecules/search-field/search-field.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchFieldComponent": () => (/* binding */ SearchFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _atoms_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atoms/button/button.component */ 5146);
/* harmony import */ var _atoms_input_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/input/input.component */ 8446);



class SearchFieldComponent {
  static #_ = this.ɵfac = function SearchFieldComponent_Factory(t) {
    return new (t || SearchFieldComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SearchFieldComponent,
    selectors: [["app-search-field"]],
    decls: 3,
    vars: 2,
    consts: [[1, "search-bar"], [3, "text", "typeButton"]],
    template: function SearchFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-input")(2, "app-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", "Buscar")("typeButton", "secondary");
      }
    },
    dependencies: [_atoms_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent, _atoms_input_input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent],
    styles: [".search-bar[_ngcontent-%COMP%] {\n  padding: 6px;\n  margin: 0 20px;\n  background-color: rgba(122, 122, 122, 0.5);\n  width: auto;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tb2xlY3VsZXMvc2VhcmNoLWZpZWxkL3NlYXJjaC1maWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYmFyIHtcbiAgcGFkZGluZzogNnB4O1xuICBtYXJnaW46IDAgMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDEyMiwgMTIyLCAwLjUpO1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3984:
/*!*****************************************************************!*\
  !*** ./src/app/components/organisms/footer/footer.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _atoms_footer_bottom_footer_bottom_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atoms/footer-bottom/footer-bottom.component */ 5911);
/* harmony import */ var _molecules_footer_contact_footer_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../molecules/footer-contact/footer-contact.component */ 7187);
/* harmony import */ var _molecules_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/footer-social/footer-social.component */ 6370);




class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 5,
    vars: 0,
    consts: [[1, "footer-top"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-footer-contact")(3, "app-footer-social");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-footer-bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_atoms_footer_bottom_footer_bottom_component__WEBPACK_IMPORTED_MODULE_0__.FooterBottomComponent, _molecules_footer_contact_footer_contact_component__WEBPACK_IMPORTED_MODULE_1__.FooterContactComponent, _molecules_footer_social_footer_social_component__WEBPACK_IMPORTED_MODULE_2__.FooterSocialComponent],
    styles: ["footer[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #fff;\n  padding: 20px;\n}\nfooter[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIFxuICAuZm9vdGVyLXRvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3859:
/*!*****************************************************************!*\
  !*** ./src/app/components/organisms/header/header.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _atoms_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atoms/logo/logo.component */ 2463);
/* harmony import */ var _molecules_nav_header_nav_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../molecules/nav-header/nav-header.component */ 8573);
/* harmony import */ var _molecules_search_field_search_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/search-field/search-field.component */ 6106);
/* harmony import */ var _molecules_burguer_menu_burguer_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/burguer-menu/burguer-menu.component */ 9998);





class HeaderComponent {
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 9,
    vars: 0,
    consts: [[1, "top-bar"], [1, "header-left"], [1, "header-right"], [1, "user-actions"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-logo")(4, "app-nav-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-search-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-burguer-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_atoms_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent, _molecules_nav_header_nav_header_component__WEBPACK_IMPORTED_MODULE_1__.NavHeaderComponent, _molecules_search_field_search_field_component__WEBPACK_IMPORTED_MODULE_2__.SearchFieldComponent, _molecules_burguer_menu_burguer_menu_component__WEBPACK_IMPORTED_MODULE_3__.BurguerMenuComponent],
    styles: ["header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 97vw;\n  background-color: #333;\n  color: #fff;\n  padding: 10px 20px;\n}\nheader[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 40%;\n  justify-content: space-between;\n}\nheader[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FBQ047QUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFOIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogOTd2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcblxuICAudG9wLWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5oZWFkZXItbGVmdCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgLmhlYWRlci1yaWdodCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3671:
/*!***********************************************************************************!*\
  !*** ./src/app/components/organisms/product-section/product-section.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSectionComponent": () => (/* binding */ ProductSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _molecules_card_product_card_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../molecules/card-product/card-product.component */ 8805);



function ProductSectionComponent_app_card_product_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-card-product", 2);
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", product_r1);
  }
}
class ProductSectionComponent {
  constructor() {
    this.productSection = {
      title: '',
      products: []
    };
  }
  static #_ = this.ɵfac = function ProductSectionComponent_Factory(t) {
    return new (t || ProductSectionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProductSectionComponent,
    selectors: [["app-product-section"]],
    inputs: {
      productSection: "productSection"
    },
    decls: 5,
    vars: 2,
    consts: [[1, "product-list"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"]],
    template: function ProductSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article")(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProductSectionComponent_app_card_product_4_Template, 1, 1, "app-card-product", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.productSection.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productSection.products);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _molecules_card_product_card_product_component__WEBPACK_IMPORTED_MODULE_0__.CardProductComponent],
    styles: ["article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\narticle[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvcHJvZHVjdC1zZWN0aW9uL3Byb2R1Y3Qtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFNBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbImFydGljbGUge1xuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLnByb2R1Y3QtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4983:
/*!*************************************************************************************!*\
  !*** ./src/app/components/pages/with-atomic-design/with-atomic-design.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithAtomicDesignComponent": () => (/* binding */ WithAtomicDesignComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _organisms_product_section_product_section_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../organisms/product-section/product-section.component */ 3671);
/* harmony import */ var _templates_main_template_main_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../templates/main-template/main-template.component */ 6654);



class WithAtomicDesignComponent {
  constructor() {
    this.tShirt = {
      title: 'Camisetas',
      products: [{
        img: '../assets/modern-shirt.jpeg',
        name: 'Camiseta 1',
        description: 'Descripción de la camiseta 1'
      }, {
        img: '../assets/tshirt-black.webp',
        name: 'Camiseta 2',
        description: 'Descripción de la camiseta 2'
      }, {
        img: '../assets/tshirt-sports.avif',
        name: 'Camiseta 3',
        description: 'Descripción de la camiseta 3'
      }]
    };
    this.jackets = {
      title: 'Chaquetas',
      products: [{
        img: '../assets/jacket-red.avif',
        name: 'Chaqueta 1',
        description: 'Descripción de la chaqueta 1'
      }, {
        img: '../assets/jacket-black.webp',
        name: 'Chaqueta 2',
        description: 'Descripción de la chaqueta 2'
      }, {
        img: '../assets/jacket-blue.avif',
        name: 'Chaqueta 3',
        description: 'Descripción de la chaqueta 3'
      }]
    };
  }
  static #_ = this.ɵfac = function WithAtomicDesignComponent_Factory(t) {
    return new (t || WithAtomicDesignComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: WithAtomicDesignComponent,
    selectors: [["app-with-atomic-design"]],
    decls: 5,
    vars: 2,
    consts: [[3, "productSection"]],
    template: function WithAtomicDesignComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-main-template")(1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-product-section", 0)(3, "hr")(4, "app-product-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("productSection", ctx.tShirt);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("productSection", ctx.jackets);
      }
    },
    dependencies: [_organisms_product_section_product_section_component__WEBPACK_IMPORTED_MODULE_0__.ProductSectionComponent, _templates_main_template_main_template_component__WEBPACK_IMPORTED_MODULE_1__.MainTemplateComponent],
    styles: ["@charset \"UTF-8\";\n\nbody[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\n\nheader[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 97vw;\n  background-color: #333;\n  color: #fff;\n  padding: 10px 20px;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.top-bar[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 40%;\n  justify-content: space-between;\n}\n.top-bar[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  padding: 6px;\n  margin: 0 20px;\n  background-color: rgba(122, 122, 122, 0.5);\n  width: auto;\n  border-radius: 6px;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 200px;\n  border-radius: 6px;\n  border: none;\n  margin-right: 5px;\n}\n\n.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  background-color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 6px;\n}\n\n.user-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  text-decoration: none;\n}\n\n\nmain[_ngcontent-%COMP%] {\n  padding: 100px 20px;\n}\nmain[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\nmain[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  border: none;\n  border-top: 1px solid rgba(128, 128, 128, 0.3);\n}\nmain[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.product[_ngcontent-%COMP%] {\n  flex: 1 0 30%;\n  margin: 10px;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n\n.product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.product[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 18px;\n}\n\n.product[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 14px;\n}\n\n.product[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  background-color: #333;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 6px;\n}\n\n\nfooter[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #fff;\n  padding: 20px;\n}\n\n.footer-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.footer-top[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.footer-top[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.dropbtn[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #fff;\n  width: 50px;\n  border: none;\n  cursor: pointer;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  border-radius: 6px;\n  position: absolute;\n  background-color: #333;\n  min-width: 160px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  right: 0px;\n  top: 50px;\n}\n.dropdown-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  margin-left: 0;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(128, 128, 128, 0.3);\n  border-radius: 6px;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #555;\n  border-radius: 6px;\n}\n\n.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.navigation[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  padding: 10px 15px;\n  border-radius: 5px;\n  transition: background-color 0.3s;\n}\n\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(122, 122, 122, 0.5);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy93aXRoLWF0b21pYy1kZXNpZ24vd2l0aC1hdG9taWMtZGVzaWduLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQixzQkFBQTtBQUNBO0VBQ0UsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUNBLHVCQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QUFFSjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQSxvQ0FBQTtBQUNBO0VBQ0UsbUJBQUE7QUFBRjtBQUVFO0VBQ0UsU0FBQTtBQUFKO0FBR0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBRko7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BLHVCQUFBO0FBQ0E7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSEY7QUFLRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBSEo7QUFLSTtFQUNFLFdBQUE7QUFITjs7QUFRQTtFQUNFLGtCQUFBO0FBTEY7O0FBUUEsYUFBQTtBQUNBLGtDQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBTEY7O0FBUUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBTEY7QUFPRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBTEo7O0FBU0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBTkY7O0FBU0E7RUFDRSwwQ0FBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0FBTkY7O0FBU0EsZUFBQTtBQUNBLHNDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVNBO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0FBTkY7O0FBU0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFORjs7QUFTQTtFQUNFLDBDQUFBO0FBTkYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFc3RpbG9zIGdlbmVyYWxlcyAqL1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKiBFc3RpbG9zIGRlbCBoZWFkZXIgKi9cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDk3dnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi50b3AtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5oZWFkZXItbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA0MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmhlYWRlci1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi5sb2dvIGltZyB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnNlYXJjaC1iYXIge1xuICBwYWRkaW5nOiA2cHg7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMiwgMTIyLCAxMjIsIDAuNSk7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5zZWFyY2gtYmFyIGlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnNlYXJjaC1iYXIgYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi51c2VyLWFjdGlvbnMgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBFc3RpbG9zIGRlbCBjb250ZW5pZG8gcHJpbmNpcGFsICovXG5tYWluIHtcbiAgcGFkZGluZzogMTAwcHggMjBweDtcblxuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgaHIge1xuICAgIG1hcmdpbjogMzBweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xuICB9XG5cbiAgLnByb2R1Y3QtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cblxuLnByb2R1Y3Qge1xuICBmbGV4OiAxIDAgMzAlO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5wcm9kdWN0IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5wcm9kdWN0IGgyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucHJvZHVjdCBwIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcm9kdWN0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLyogRXN0aWxvcyBkZWwgZm9vdGVyICovXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmZvb3Rlci10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgLmZvb3Rlci1zb2NpYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNXB4O1xuXG4gICAgYSA+IGltZyB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICB9XG4gIH1cbn1cblxuLmZvb3Rlci1ib3R0b20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIERyb3Bkb3duICovXG4vKiBFc3RpbG9zIGRlbCBib3TDg8KzbiBkZXNwbGVnYWJsZSAqL1xuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kcm9wYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogNTBweDtcblxuICB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogTmF2aWdhdGlvbiAqL1xuLyogRXN0aWxvcyBkZSBsYSBiYXJyYSBkZSBuYXZlZ2FjacODwrNuICovXG4ubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXZpZ2F0aW9uIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5uYXZpZ2F0aW9uIHVsIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5uYXZpZ2F0aW9uIHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5uYXZpZ2F0aW9uIHVsIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxuXG4ubmF2aWdhdGlvbiB1bCBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDEyMiwgMTIyLCAwLjUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8997:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/pages/without-atomic-design/without-atomic-design.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithoutAtomicDesignComponent": () => (/* binding */ WithoutAtomicDesignComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0) {
  return {
    show: a0
  };
};
class WithoutAtomicDesignComponent {
  constructor() {
    this.dropdownOpen = false;
  }
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  static #_ = this.ɵfac = function WithoutAtomicDesignComponent_Factory(t) {
    return new (t || WithoutAtomicDesignComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WithoutAtomicDesignComponent,
    selectors: [["app-without-atomic-design"]],
    decls: 114,
    vars: 3,
    consts: [[1, "top-bar"], [1, "header-left"], [1, "logo"], ["src", "../assets/camiseta.png", "alt", "Logo de la tienda"], [1, "navigation"], ["href", "#"], [1, "header-right"], [1, "search-bar"], ["type", "text", "placeholder", "Buscar productos..."], [1, "user-actions"], [1, "dropdown"], ["src", "../assets/menu.png", "alt", "Logo de la tienda", 1, "dropbtn", 3, "click", "keydown.enter"], [1, "dropdown-content", 3, "ngClass"], [1, "product-list"], [1, "product"], ["src", "../assets/modern-shirt.jpeg", "alt", "Producto 1"], ["src", "../assets/tshirt-black.webp", "alt", "Producto 2"], ["src", "../assets/tshirt-sports.avif", "alt", "Producto 3"], ["src", "../assets/jacket-red.avif", "alt", "Producto 1"], ["src", "../assets/jacket-black.webp", "alt", "Producto 2"], ["src", "../assets/jacket-blue.avif", "alt", "Producto 3"], [1, "footer-top"], [1, "footer-contact"], [1, "footer-social"], ["src", "../assets/facebook.png", "alt", "Facebook"], ["src", "../assets/gorjeo.png", "alt", "Twitter"], ["src", "../assets/social.png", "alt", "Instagram"], [1, "footer-bottom"]],
    template: function WithoutAtomicDesignComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 4)(6, "ul")(7, "li")(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6)(17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9)(22, "div", 10)(23, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WithoutAtomicDesignComponent_Template_img_click_23_listener() {
          return ctx.toggleDropdown();
        })("keydown.enter", function WithoutAtomicDesignComponent_Template_img_keydown_enter_23_listener() {
          return ctx.toggleDropdown();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12)(25, "ul")(26, "li")(27, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li")(30, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li")(33, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Carrito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "main")(36, "article")(37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Camisetas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13)(40, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Producto 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Descripci\u00F3n del producto 1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Agregar al carrito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Producto 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Descripci\u00F3n del producto 2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Agregar al carrito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Producto 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Descripci\u00F3n del producto 3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Agregar al carrito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "article")(66, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Chaquetas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 13)(69, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Producto 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Descripci\u00F3n del producto 1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Agregar al carrito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Producto 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Descripci\u00F3n del producto 2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Agregar al carrito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Producto 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Descripci\u00F3n del producto 3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Agregar al carrito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "footer")(94, "div", 21)(95, "div", 22)(96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Tienda de Ropa Deportiva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Direcci\u00F3n: Calle 123, Ciudad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Tel\u00E9fono: 123-456-7890");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Email: info@tiendaropadeportiva.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 23)(105, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 27)(112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u00A9 2024 Tienda de Ropa Deportiva. Todos los derechos reservados.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.dropdownOpen));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["@charset \"UTF-8\";\n\nbody[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\n\nheader[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 97vw;\n  background-color: #333;\n  color: #fff;\n  padding: 10px 20px;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.top-bar[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 40%;\n  justify-content: space-between;\n}\n.top-bar[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  padding: 6px;\n  margin: 0 20px;\n  background-color: rgba(122, 122, 122, 0.5);\n  width: auto;\n  border-radius: 6px;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 200px;\n  border-radius: 6px;\n  border: none;\n  margin-right: 5px;\n}\n\n.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  background-color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 6px;\n}\n\n.user-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  text-decoration: none;\n}\n\n\nmain[_ngcontent-%COMP%] {\n  padding: 100px 20px;\n}\nmain[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\nmain[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  border: none;\n  border-top: 1px solid rgba(128, 128, 128, 0.3);\n}\nmain[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.product[_ngcontent-%COMP%] {\n  flex: 1 0 30%;\n  margin: 10px;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n\n.product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.product[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 18px;\n}\n\n.product[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 14px;\n}\n\n.product[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  background-color: #333;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 6px;\n}\n\n\nfooter[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #fff;\n  padding: 20px;\n}\n\n.footer-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.footer-top[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.footer-top[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.dropbtn[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #fff;\n  width: 50px;\n  border: none;\n  cursor: pointer;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  border-radius: 6px;\n  position: absolute;\n  background-color: #333;\n  min-width: 160px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  right: 0px;\n  top: 50px;\n}\n.dropdown-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  margin-left: 0;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(128, 128, 128, 0.3);\n  border-radius: 6px;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #555;\n  border-radius: 6px;\n}\n\n.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.navigation[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  padding: 10px 15px;\n  border-radius: 5px;\n  transition: background-color 0.3s;\n}\n\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(122, 122, 122, 0.5);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy93aXRob3V0LWF0b21pYy1kZXNpZ24vd2l0aG91dC1hdG9taWMtZGVzaWduLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQixzQkFBQTtBQUNBO0VBQ0UsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUNBLHVCQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QUFFSjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQSxvQ0FBQTtBQUNBO0VBQ0UsbUJBQUE7QUFBRjtBQUVFO0VBQ0UsU0FBQTtBQUFKO0FBR0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBRko7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BLHVCQUFBO0FBQ0E7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSEY7QUFLRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBSEo7QUFLSTtFQUNFLFdBQUE7QUFITjs7QUFRQTtFQUNFLGtCQUFBO0FBTEY7O0FBUUEsYUFBQTtBQUNBLGtDQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBTEY7O0FBUUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBTEY7QUFPRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBTEo7O0FBU0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBTkY7O0FBU0E7RUFDRSwwQ0FBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0FBTkY7O0FBU0EsZUFBQTtBQUNBLHNDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVNBO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0FBTkY7O0FBU0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFORjs7QUFTQTtFQUNFLDBDQUFBO0FBTkYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFc3RpbG9zIGdlbmVyYWxlcyAqL1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKiBFc3RpbG9zIGRlbCBoZWFkZXIgKi9cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDk3dnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi50b3AtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5oZWFkZXItbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA0MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmhlYWRlci1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi5sb2dvIGltZyB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnNlYXJjaC1iYXIge1xuICBwYWRkaW5nOiA2cHg7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMiwgMTIyLCAxMjIsIDAuNSk7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5zZWFyY2gtYmFyIGlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnNlYXJjaC1iYXIgYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi51c2VyLWFjdGlvbnMgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBFc3RpbG9zIGRlbCBjb250ZW5pZG8gcHJpbmNpcGFsICovXG5tYWluIHtcbiAgcGFkZGluZzogMTAwcHggMjBweDtcblxuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgaHIge1xuICAgIG1hcmdpbjogMzBweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xuICB9XG5cbiAgLnByb2R1Y3QtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cblxuLnByb2R1Y3Qge1xuICBmbGV4OiAxIDAgMzAlO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5wcm9kdWN0IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5wcm9kdWN0IGgyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucHJvZHVjdCBwIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcm9kdWN0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLyogRXN0aWxvcyBkZWwgZm9vdGVyICovXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmZvb3Rlci10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgLmZvb3Rlci1zb2NpYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNXB4O1xuXG4gICAgYSA+IGltZyB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICB9XG4gIH1cbn1cblxuLmZvb3Rlci1ib3R0b20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIERyb3Bkb3duICovXG4vKiBFc3RpbG9zIGRlbCBib3TDg8KzbiBkZXNwbGVnYWJsZSAqL1xuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kcm9wYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogNTBweDtcblxuICB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogTmF2aWdhdGlvbiAqL1xuLyogRXN0aWxvcyBkZSBsYSBiYXJyYSBkZSBuYXZlZ2FjacODwrNuICovXG4ubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXZpZ2F0aW9uIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5uYXZpZ2F0aW9uIHVsIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5uYXZpZ2F0aW9uIHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5uYXZpZ2F0aW9uIHVsIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxuXG4ubmF2aWdhdGlvbiB1bCBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDEyMiwgMTIyLCAwLjUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6654:
/*!*******************************************************************************!*\
  !*** ./src/app/components/templates/main-template/main-template.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainTemplateComponent": () => (/* binding */ MainTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _organisms_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../organisms/header/header.component */ 3859);
/* harmony import */ var _organisms_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../organisms/footer/footer.component */ 3984);



const _c0 = ["*"];
class MainTemplateComponent {
  static #_ = this.ɵfac = function MainTemplateComponent_Factory(t) {
    return new (t || MainTemplateComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MainTemplateComponent,
    selectors: [["app-main-template"]],
    ngContentSelectors: _c0,
    decls: 4,
    vars: 0,
    template: function MainTemplateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_organisms_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _organisms_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(2609), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map