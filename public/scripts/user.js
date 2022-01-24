import { renderBlock } from "./lib.js";
export function renderUserBlock(favoriteItemsAmount, userName, userImg) {
    const favoritesCaption = favoriteItemsAmount
        ? favoriteItemsAmount
        : "ничего нет";
    const hasFavoriteItems = favoriteItemsAmount ? true : false;
    renderBlock("user-block", `
    <div class="header-container">
      <img class="avatar" src="${userImg}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? " active" : ""}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsbUJBQTJCLEVBQzNCLFFBQWdCLEVBQ2hCLE9BQWU7SUFFZixNQUFNLGdCQUFnQixHQUFHLG1CQUFtQjtRQUMxQyxDQUFDLENBQUMsbUJBQW1CO1FBQ3JCLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDakIsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFFNUQsV0FBVyxDQUNULFlBQVksRUFDWjs7aUNBRTZCLE9BQU8sVUFBVSxRQUFROzs0QkFFOUIsUUFBUTs7a0NBR3RCLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ2pDLFNBQVMsZ0JBQWdCOzs7O0tBSWhDLENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gXCIuL2xpYi5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVXNlckJsb2NrKFxuICBmYXZvcml0ZUl0ZW1zQW1vdW50OiBudW1iZXIsXG4gIHVzZXJOYW1lOiBzdHJpbmcsXG4gIHVzZXJJbWc6IHN0cmluZ1xuKSB7XG4gIGNvbnN0IGZhdm9yaXRlc0NhcHRpb24gPSBmYXZvcml0ZUl0ZW1zQW1vdW50XG4gICAgPyBmYXZvcml0ZUl0ZW1zQW1vdW50XG4gICAgOiBcItC90LjRh9C10LPQviDQvdC10YJcIjtcbiAgY29uc3QgaGFzRmF2b3JpdGVJdGVtcyA9IGZhdm9yaXRlSXRlbXNBbW91bnQgPyB0cnVlIDogZmFsc2U7XG5cbiAgcmVuZGVyQmxvY2soXG4gICAgXCJ1c2VyLWJsb2NrXCIsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwiJHt1c2VySW1nfVwiIGFsdD1cIiR7dXNlck5hbWV9XCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHt1c2VyTmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaGVhcnQtaWNvbiR7XG4gICAgICAgICAgICAgIGhhc0Zhdm9yaXRlSXRlbXMgPyBcIiBhY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgIH1cIj48L2k+JHtmYXZvcml0ZXNDYXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKTtcbn1cbiJdfQ==