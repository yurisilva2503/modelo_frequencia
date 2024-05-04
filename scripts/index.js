//Variáveis da Impressão
const impress_primary_table = document.getElementById("impress_primary-table-container").innerHTML;
const impress_secundary_table = document.getElementById("impress_secondary-table-container").innerHTML;
const impress_wrapper = document.getElementById("impress_wrapper");
const impress_btn = document.getElementById("impress_btn-impress");
const impress_btn_back = document.getElementById("impress_btn-back");
const impress_date_container = document.getElementById("impress_date-container");
const impress_signatures = document.getElementById("impress_signatures");
const impress_address = document.getElementById("impress_address");
const currentYear = new Date().getFullYear();

//Variáveis do Formulário
const index_button_generate = document.getElementById("index_button-generate");
const index_wrapper = document.getElementById("index_wrapper");

//Máscara de matrícula
document.getElementById("index_input-registration").addEventListener("input", function (event) {
    let value = event.target.value;

    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{7})(\d)/, "$1/$2");
    event.target.value = value;
  });

const monthsofyear = [
  {
    id: 1,
    name: "Janeiro",
  },
  {
    id: 2,
    name: "Fevereiro",
  },
  {
    id: 3,
    name: "Março",
  },
  {
    id: 4,
    name: "Abril",
  },
  {
    id: 5,
    name: "Maio",
  },
  {
    id: 6,
    name: "Junho",
  },
  {
    id: 7,
    name: "Julho",
  },
  {
    id: 8,
    name: "Agosto",
  },
  {
    id: 9,
    name: "Setembro",
  },
  {
    id: 10,
    name: "Outubro",
  },
  {
    id: 11,
    name: "Novembro",
  },
  {
    id: 12,
    name: "Dezembro",
  },
];

//Funcionalidade de verificar se os campos estão vazios
function isEmptyOrNull(fields) {
  return fields.some(
    (value) =>
      !value || value.trim() === "" || value.trim().toLowerCase() === "null"
  );
}

//Funcionalidade de verificar se os campos contém apenas letras
function isValidString(string) {
  const regex = /^[a-zA-ZÀ-ú\s]+$/;
  return string.every((string) => regex.test(string));
}

//Funcionalidade de gerar o usuário
index_button_generate.addEventListener("click", () => {
  const fieldsToCheck = [
    document.getElementById("index_select-sector-primary").value,
    document.getElementById("index_select-sector-secondary").value,
    document.getElementById("index_input-name").value,
    document.getElementById("index_input-role").value,
    document.getElementById("index_select-location").value,
    document.getElementById("index_input-registration").value,
    document.getElementById("index_select-month").value,
    document.getElementById("index_select-workload").value,
  ];

  if (isEmptyOrNull(fieldsToCheck)) {
    alert("Por favor, preencha todos os campos antes de continuar.");
    return;
  }

  if (!isValidString(fieldsToCheck.slice(2, 4))) {
    alert("Os campos 'Nome' e 'Cargo' devem conter apenas letras.");
    return;
  }

  const user = {
    primary_sector: fieldsToCheck[0],
    secondary_sector: fieldsToCheck[1],
    name: fieldsToCheck[2],
    role: fieldsToCheck[3],
    location: fieldsToCheck[4],
    registration: fieldsToCheck[5],
    month: fieldsToCheck[6],
    workload: fieldsToCheck[7],
  };

  fillMonthTable(
    user.primary_sector,
    user.secondary_sector,
    user.name,
    user.role,
    user.location,
    user.registration,
    user.month,
    user.workload
  );

  index_wrapper.style.display = "none";
  impress_wrapper.style.display = "block";
});

//Funcionalidade de preencher a tabela de frequência
function fillMonthTable(primary_sector, secondary_sector, name, role, location, registration, month, workload) {
  const daysInMonth = new Date(currentYear, month, 0).getDate();

  const dayOfWeekCellContent = (isSaturday, isSunday) => isSaturday ? "SÁBADO" : isSunday ? "DOMINGO" : "";
  const weekendClass = (isSaturday, isSunday) => isSaturday || isSunday ? "weekend" : "";

  document.getElementById("impress_secondary-table-tbody").innerHTML = '';
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
      .getElementById("impress_secondary-table-tbody")
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

  let monthText = monthsofyear.filter((monthFilter) => monthFilter.id == month).map((monthValue) => monthValue.name);

  document.getElementById("impress_primary-sector").innerHTML = primary_sector;
  document.getElementById("impress_secondary-sector").innerHTML = secondary_sector;
  document.getElementById("impress_name").innerHTML = name;
  document.getElementById("impress_month").innerHTML = monthText[0] + " / 2024";
  document.getElementById("impress_position").innerHTML = role;
  document.getElementById("impress_matriculation").innerHTML = registration;
  document.getElementById("impress_location").innerHTML = location;
  document.getElementById("impress_workload").innerHTML = workload + "H";
};

function backToIndex() {
  index_wrapper.style.display = "flex";
  impress_wrapper.style.display = "none";
  impress_btn.style.display = "block";
  impress_wrapper.style.width = "50%";
}

//Funcionalidade de imprimir o PDF
function makePDF() {
  impress_btn.style.display = "none";
  impress_btn_back.style.display = "none";
  impress_wrapper.style.width = "93%";

  window.print();

  impress_wrapper.style.display = "none";
  index_wrapper.style.display = "flex";
  impress_btn.style.display = "block";
  impress_btn_back.style.display = "block";
  impress_wrapper.style.width = "50%";

  window.location.reload(true);
};