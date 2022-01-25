import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import { renderToast } from "./lib.js";
import { getUserData, getFavoritesAmount, User } from "./userLocal.js";
import { getTodosInfo } from "./todos.js";

window.addEventListener("DOMContentLoaded", () => {
  const user: User = getUserData();
  const favoritesAmount = getFavoritesAmount();
  renderUserBlock(favoritesAmount, user.userName, user.avatarUrl);
  renderSearchFormBlock();
  renderSearchStubBlock();
  renderToast(
    {
      text: "Это пример уведомления. Используйте его при необходимости",
      type: "success",
    },
    {
      name: "Понятно",
      handler: () => {
        console.log("Уведомление закрыто");
      },
    }
  );
});
getTodosInfo(10);
