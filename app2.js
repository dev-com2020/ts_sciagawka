var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(firstName, lastName, isActive) {
        if (isActive === void 0) { isActive = true; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.isActive = isActive;
    }
    User.prototype.getFullname = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Object.defineProperty(User.prototype, "active", {
        get: function () {
            return this.isActive;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(firstName, lastName, age) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.age = age;
        return _this;
    }
    return Customer;
}(User));
var Keyboard = /** @class */ (function () {
    function Keyboard() {
        this.name = 'Keyboard';
        this.price = 100;
    }
    Keyboard.prototype.getCategories = function () {
        return ['Electronics', 'Hardware'];
    };
    return Keyboard;
}());
// const product_ = {
//   name: 'Keyboard',
//   price: 100
// } as Product;
