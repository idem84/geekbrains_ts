export class User {
  userName: string;
  avatarUrl: string;

  constructor(userName: string, avatarUrl: string) {
    this.userName = userName;
    this.avatarUrl = avatarUrl;
  }
}
const user = new User("idem84", "./img/avatar.jpg");

localStorage.setItem("user", JSON.stringify(user));
localStorage.setItem("favoritesAmount", "2");

export function getUserData() {
  const user = JSON.parse(localStorage.getItem("user"));

  return user;
}
export function getFavoritesAmount() {
  const favoritesAmount = JSON.parse(localStorage.getItem("favoritesAmount"));

  return favoritesAmount;
}
