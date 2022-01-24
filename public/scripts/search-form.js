import { renderBlock } from "./lib.js";
function formatDate(date) {
    return date.toISOString().slice(0, 10);
}
function addDays(date, days) {
    date.setDate(date.getDate() + days);
    return date;
}
function getLastDayOfMonth(date) {
    date.setMonth(date.getMonth() + 2, 0);
    return date;
}
export function renderSearchFormBlock(dateEnter, dateExit) {
    const nowDate = formatDate(new Date());
    const enter = formatDate(dateEnter || addDays(new Date(), 1));
    const exit = formatDate(dateExit || addDays(new Date(), 3));
    const lastDateOfMonth = formatDate(getLastDayOfMonth(new Date()));
    function getFormValue(e) {
        e.preventDefault();
        const dataValue = {
            city: document.getElementById("city").value,
            checkIn: document.getElementById("check-in-date")
                .value,
            checkOut: document.getElementById("check-out-date")
                .value,
            price: document.getElementById("max-price").value,
        };
        console.log(dataValue);
        funcSearch(dataValue);
    }
    function funcSearch(data) {
        console.log(data);
    }
    renderBlock("search-form-block", `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Москва" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${enter}" min="${nowDate}" max="${lastDateOfMonth}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${exit}" min="${nowDate}" max="${lastDateOfMonth}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button type="submit" >Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
    const form = document.querySelector("form");
    form.addEventListener("submit", getFormValue);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUd2QyxTQUFTLFVBQVUsQ0FBQyxJQUFVO0lBQzVCLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUVELFNBQVMsT0FBTyxDQUFDLElBQVUsRUFBRSxJQUFZO0lBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsSUFBVTtJQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEMsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUFDLFNBQWdCLEVBQUUsUUFBZTtJQUNyRSxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RCxNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsTUFBTSxlQUFlLEdBQUcsVUFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRWxFLFNBQVMsWUFBWSxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLE1BQU0sU0FBUyxHQUFtQjtZQUNoQyxJQUFJLEVBQXFCLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFFLENBQUMsS0FBSztZQUMvRCxPQUFPLEVBQXFCLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFFO2lCQUNsRSxLQUFLO1lBQ1IsUUFBUSxFQUFxQixRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFFO2lCQUNwRSxLQUFLO1lBQ1IsS0FBSyxFQUFxQixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBRSxDQUFDLEtBQUs7U0FDdEUsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxTQUFTLFVBQVUsQ0FBQyxJQUFvQjtRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxXQUFXLENBQ1QsbUJBQW1CLEVBQ25COzs7Ozs7Ozs7Ozs7Ozs7OzsyREFpQnVELEtBQUssVUFBVSxPQUFPLFVBQVUsZUFBZTs7Ozs0REFJOUMsSUFBSSxVQUFVLE9BQU8sVUFBVSxlQUFlOzs7Ozs7Ozs7Ozs7S0FZckcsQ0FDRixDQUFDO0lBQ0YsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2hELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gXCIuL2xpYi5qc1wiO1xuaW1wb3J0IHsgU2VhcmNoRm9ybURhdGEgfSBmcm9tIFwiLi9wYXR0ZXJuLXNlYXJjaGZvcm0uanNcIjtcblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG59XG5cbmZ1bmN0aW9uIGFkZERheXMoZGF0ZTogRGF0ZSwgZGF5czogbnVtYmVyKTogRGF0ZSB7XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGRheXMpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdERheU9mTW9udGgoZGF0ZTogRGF0ZSk6IERhdGUge1xuICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIDIsIDApO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jayhkYXRlRW50ZXI/OiBEYXRlLCBkYXRlRXhpdD86IERhdGUpOiB2b2lkIHtcbiAgY29uc3Qgbm93RGF0ZSA9IGZvcm1hdERhdGUobmV3IERhdGUoKSk7XG4gIGNvbnN0IGVudGVyID0gZm9ybWF0RGF0ZShkYXRlRW50ZXIgfHwgYWRkRGF5cyhuZXcgRGF0ZSgpLCAxKSk7XG4gIGNvbnN0IGV4aXQgPSBmb3JtYXREYXRlKGRhdGVFeGl0IHx8IGFkZERheXMobmV3IERhdGUoKSwgMykpO1xuICBjb25zdCBsYXN0RGF0ZU9mTW9udGggPSBmb3JtYXREYXRlKGdldExhc3REYXlPZk1vbnRoKG5ldyBEYXRlKCkpKTtcblxuICBmdW5jdGlvbiBnZXRGb3JtVmFsdWUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhVmFsdWU6IFNlYXJjaEZvcm1EYXRhID0ge1xuICAgICAgY2l0eTogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eVwiKSkudmFsdWUsXG4gICAgICBjaGVja0luOiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVjay1pbi1kYXRlXCIpKVxuICAgICAgICAudmFsdWUsXG4gICAgICBjaGVja091dDogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2stb3V0LWRhdGVcIikpXG4gICAgICAgIC52YWx1ZSxcbiAgICAgIHByaWNlOiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXgtcHJpY2VcIikpLnZhbHVlLFxuICAgIH07XG4gICAgY29uc29sZS5sb2coZGF0YVZhbHVlKTtcbiAgICBmdW5jU2VhcmNoKGRhdGFWYWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBmdW5jU2VhcmNoKGRhdGE6IFNlYXJjaEZvcm1EYXRhKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH1cblxuICByZW5kZXJCbG9jayhcbiAgICBcInNlYXJjaC1mb3JtLWJsb2NrXCIsXG4gICAgYFxuICAgIDxmb3JtPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVwic2VhcmNoLWZpbGVkc2V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj7Qk9C+0YDQvtC0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkIHZhbHVlPVwi0JzQvtGB0LrQstCwXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGlzYWJsZWQgdmFsdWU9XCI1OS45Mzg2LDMwLjMxNDFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiaG9teVwiIGNoZWNrZWQgLz4gSG9teTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiZmxhdC1yZW50XCIgY2hlY2tlZCAvPiBGbGF0UmVudDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+LS0hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2staW4tZGF0ZVwiPtCU0LDRgtCwINC30LDQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1pbi1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7ZW50ZXJ9XCIgbWluPVwiJHtub3dEYXRlfVwiIG1heD1cIiR7bGFzdERhdGVPZk1vbnRofVwiIG5hbWU9XCJjaGVja2luXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLW91dC1kYXRlXCI+0JTQsNGC0LAg0LLRi9C10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLW91dC1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7ZXhpdH1cIiBtaW49XCIke25vd0RhdGV9XCIgbWF4PVwiJHtsYXN0RGF0ZU9mTW9udGh9XCIgbmFtZT1cImNoZWNrb3V0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heC1wcmljZVwiPtCc0LDQutGBLiDRhtC10L3QsCDRgdGD0YLQvtC6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm1heC1wcmljZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBuYW1lPVwicHJpY2VcIiBjbGFzcz1cIm1heC1wcmljZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5cbiAgICBgXG4gICk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGdldEZvcm1WYWx1ZSk7XG59XG4iXX0=