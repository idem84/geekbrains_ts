"use strict";
exports.__esModule = true;
exports.getFavoritesAmount = exports.getUserData = exports.User = void 0;
var User = /** @class */ (function () {
    function User(userName, avatarUrl) {
        this.userName = userName;
        this.avatarUrl = avatarUrl;
    }
    return User;
}());
exports.User = User;
var user = new User('Lora Palmer', './img/avatar.png');
localStorage.setItem('user', JSON.stringify(user));
localStorage.setItem('favoritesAmount', '3');
function getUserData() {
    var user = JSON.parse(localStorage.getItem('user'));
    // if (user == null) {
    //   return value + ''
    // }
    // if (user instanceof User) {
    //   return user
    // }
    return user;
}
exports.getUserData = getUserData;
function getFavoritesAmount() {
    var favoritesAmount = JSON.parse(localStorage.getItem('favoritesAmount'));
    return favoritesAmount;
}
exports.getFavoritesAmount = getFavoritesAmount;
