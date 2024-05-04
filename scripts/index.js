// Variaveis
const primary_table = document.getElementById(
  "primary_table-container"
).innerHTML;
const secundary_table = document.getElementById(
  "secundary_table-container"
).innerHTML;
const wrapper = document.getElementById("wrapper");
const btn = document.getElementById("btn-impress");
const date_container = document.getElementById("date-container");
const signatures = document.getElementById("signatures");
const address = document.getElementById("address");
const currentYear = new Date().getFullYear();

// Funções
const fillMonthTable = (month) => {
  const daysInMonth = new Date(currentYear, month, 0).getDate();
  const dayOfWeekCellContent = (isSaturday, isSunday) =>
    isSaturday ? "Sábado" : isSunday ? "Domingo" : "";
  const weekendClass = (isSaturday, isSunday) =>
    isSaturday || isSunday ? "weekend" : "";

  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date(currentYear, month - 1, i);
    const isSaturday = currentDate.getDay() === 6;
    const isSunday = currentDate.getDay() === 0;
    const cellContent = dayOfWeekCellContent(isSaturday, isSunday);
    const cellClass = weekendClass(isSaturday, isSunday);

    const row = `
      <tr>
        <td class="cel-secundary_table -day ${cellClass}">${i}</td>
        <td class="cel-secundary_table -rubric ${cellClass}">${cellContent}</td>
        <td class="cel-secundary_table -entrytime ${cellClass}">${cellContent}</td>
        <td class="cel-secundary_table -exittime ${cellClass}">${cellContent}</td>
        <td class="cel-secundary_table -entrytime ${cellClass}">${cellContent}</td>
        <td class="cel-secundary_table -exittime ${cellClass}">${cellContent}</td>
        <td class="cel-secundary_table -occurrences ${cellClass}">${cellContent}</td>
        <td class="cel-secundary_table -observations ${cellClass}">${cellContent}</td>
      </tr>
    `;
    document
      .getElementById("secundary_table")
      .insertAdjacentHTML("beforeend", row);
  }

  if (daysInMonth < 30) {
    date_container.style.marginTop = "2%";
    signatures.style.marginTop = "4%";
    address.style.marginTop = "6.5%";
  } else if (daysInMonth == 30) {
    date_container.style.marginTop = "2%";
    signatures.style.marginTop = "3%";
    address.style.marginTop = "4%";
  } else {
    date_container.style.marginTop = "2%";
    signatures.style.marginTop = "2%";
    address.style.marginTop = "3%";
  }
};

const makePDF = () => {
  btn.style.display = "none";
  wrapper.style.width = "93%";
  window.print();

  btn.style.display = "block";
  wrapper.style.width = "50%";
};
