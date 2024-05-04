const impress_primary_table = document.getElementById("impress_primary-table-container").innerHTML;
const impress_secundary_table = document.getElementById("impress_secondary-table-container").innerHTML;
const impress_wrapper = document.getElementById("impress_wrapper");
const impress_btn = document.getElementById("impress_btn-impress");
const impress_date_container = document.getElementById("impress_date-container");
const impress_signatures = document.getElementById("impress_signatures");
const impress_address = document.getElementById("impress_address");
const currentYear = new Date().getFullYear();

const fillMonthTable = (month) => {
  const daysInMonth = new Date(currentYear, month, 0).getDate();
  const dayOfWeekCellContent = (isSaturday, isSunday) => isSaturday ? "Sábado" : isSunday ? "Domingo" : "";
  const weekendClass = (isSaturday, isSunday) => isSaturday || isSunday ? "weekend" : "";

  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date(currentYear, month - 1, i);
    const isSaturday = currentDate.getDay() === 6;
    const isSunday = currentDate.getDay() === 0;
    const cellContent = dayOfWeekCellContent(isSaturday, isSunday);
    const cellClass = weekendClass(isSaturday, isSunday);

    const row = `
      <tr>
        <td class="impress_cel-secondary-table -day ${cellClass}">${i}</td>
        <td class="impress_cel-secondary-table -rubric ${cellClass}">${cellContent}</td>
        <td class="impress_cel-secondary-table -entrytime ${cellClass}">${cellContent}</td>
        <td class="impress_cel-secondary-table -exittime ${cellClass}">${cellContent}</td>
        <td class="impress_cel-secondary-table -entrytime ${cellClass}">${cellContent}</td>
        <td class="impress_cel-secondary-table -exittime ${cellClass}">${cellContent}</td>
        <td class="impress_cel-secondary-table -occurrences ${cellClass}">${cellContent}</td>
        <td class="impress_cel-secondary-table -observations ${cellClass}">${cellContent}</td>
      </tr>
    `;
    document
      .getElementById("impress_secondary-table")
      .insertAdjacentHTML("beforeend", row);
  }

  if (daysInMonth < 30) {
    impress_date_container.style.marginTop = "2%";
    impress_signatures.style.marginTop = "4%";
    impress_address.style.marginTop = "6.5%";
  } else if (daysInMonth == 30) {
    impress_date_container.style.marginTop = "2%";
    impress_signatures.style.marginTop = "3%";
    impress_address.style.marginTop = "4%";
  } else {
    impress_date_container.style.marginTop = "2%";
    impress_signatures.style.marginTop = "2%";
    impress_address.style.marginTop = "3%";
  }
};

const makePDF = () => {
  impress_btn.style.display = "none";
  impress_wrapper.style.width = "93%";
  window.print();

  impress_btn.style.display = "block";
  impress_wrapper.style.width = "50%";
};
