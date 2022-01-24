import { renderBlock } from "./lib.js";
import { SearchFormData } from "./pattern-searchform.js";

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number): Date {
  date.setDate(date.getDate() + days);
  return date;
}

function getLastDayOfMonth(date: Date): Date {
  date.setMonth(date.getMonth() + 2, 0);
  return date;
}

export function renderSearchFormBlock(dateEnter?: Date, dateExit?: Date): void {
  const nowDate = formatDate(new Date());
  const enter = formatDate(dateEnter || addDays(new Date(), 1));
  const exit = formatDate(dateExit || addDays(new Date(), 3));
  const lastDateOfMonth = formatDate(getLastDayOfMonth(new Date()));

  function getFormValue(e) {
    e.preventDefault();
    const dataValue: SearchFormData = {
      city: (<HTMLInputElement>document.getElementById("city")).value,
      checkIn: (<HTMLInputElement>document.getElementById("check-in-date"))
        .value,
      checkOut: (<HTMLInputElement>document.getElementById("check-out-date"))
        .value,
      price: (<HTMLInputElement>document.getElementById("max-price")).value,
    };
    console.log(dataValue);
    funcSearch(dataValue);
  }

  function funcSearch(data: SearchFormData) {
    console.log(data);
  }

  renderBlock(
    "search-form-block",
    `
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
    `
  );
  const form = document.querySelector("form");
  form.addEventListener("submit", getFormValue);
}
