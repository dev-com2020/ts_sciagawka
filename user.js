"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(firstName, lastName, isActive) {
        if (isActive === void 0) { isActive = true; }
        this.firstName = '';
        this.lastName = '';
        this.isActive = false;
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
exports.User = User;
