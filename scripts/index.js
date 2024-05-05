//Variáveis da Impressão
const impress_wrapper = document.getElementById("impress_wrapper");
const impress_btn = document.getElementById("impress_btn-impress");
const impress_btn_back = document.getElementById("impress_btn-back");
const impress_date_container = document.getElementById(
  "impress_date-container"
);
const impress_signatures = document.getElementById("impress_signatures");
const impress_address = document.getElementById("impress_address");
const currentYear = new Date().getFullYear();

//Listas
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
  }
];

const sectors = [
  {
    id: "Almoxarifado",
    name: "Almoxarifado",
  },
  {
    id: "COESC",
    name: "Coordenadoria de Serviços nas Unidades Escolares - COESC",
  },
  {
    id: "COLOP",
    name: "Coordenadoria de Logística e Patrimônio - COLOP",
  },
  {
    id: "COEDS",
    name: "Coordenadoria de Educação Superior - COEDS",
  },
  {
    id: "CONFIN",
    name: "Coordenadoria de Orçamento e Finanças - CONFIN",
  },
  {
    id: "CGEPES",
    name: "Coordenadoria de Gestão de Pessoas - CGEPES",
  },
  {
    id: "GEPC",
    name: "Gerência de Prestação de Contas - GEPC",
  },
  {
    id: "COMSER",
    name: "Coordenadoria de Compras e Serviços - COMSER",
  },
  {
    id: "DAF",
    name: "Diretoria de Administração e Finanças - DAF",
  },
  {
    id: "Gerência Financeira (PRONATEC)",
    name: "Gerência Financeira (PRONATEC)",
  },
  {
    id: "GECONC",
    name: "Gerência de Contratos e Convênio - GECONC",
  },
  {
    id: "DCT",
    name: "Diretoria de Ciência e tecnologia - DCT",
  },
  {
    id: "NUPLAN",
    name: "Núcleo de Planejamento - NUPLAN",
  },
  {
    id: "CAEI",
    name: "Coordenadoria de Apoio ao Empreendedorismo e a Inovação - CAEI",
  },
  {
    id: "CCTI",
    name: "Coordenadoria de Ciência e Tecnologia - CCTI",
  },
  {
    id: "NUCI",
    name: "Controle Interno - NUCI",
  },
  {
    id: "Assessoria DCTV",
    name: "Assessoria DCTV",
  },
  {
    id: "GETIC",
    name: "Gerência de Tecnologia da Informação e Comunicação - GETIC",
  },
  {
    id: "CTDS",
    name: "Coordenadoria de Tecnologia para o Desenvolvimento Social - CTDS",
  },
  {
    id: "CETEC",
    name: "Coordenadoria de Educação Técnica e Tecnológica - CETEC",
  },
  {
    id: "EETEPAS",
    name: "Setor Sociopsicopedagógico - EETEPAS",
  },
  {
    id: "DETEC",
    name: "Anexo-Diretoria de Educação Profissional e Tecnológica - DETEC",
  },
  {
    id: "Assessoria DETEC",
    name: "Assessoria DETEC",
  },
  {
    id: "NUENG",
    name: "Núcleo de Obras e Serviços de Engenharia - NUENG",
  },
  {
    id: "COEAD",
    name: "Coordenadoria de Educação à Distância - COEAD",
  },
  {
    id: "COFIC",
    name: "Coordenadoria de Formação Inicial e Continuada - COFIC",
  },
  {
    id: "Sala da Diretoria",
    name: "Sala da Diretoria",
  },
  {
    id: "ASCOM",
    name: "Assessoria de Comunicação - ASCOM",
  },
  {
    id: "SECAD",
    name: "Secretaria Adjunta - SECAD",
  },
  {
    id: "NUCAD",
    name: "Núcleo Consultivo da Administração Direta - NUCAD",
  },
  {
    id: "Procurador do Estado",
    name: "Procurador do Estado",
  },
  {
    id: "Sala do Secretário",
    name: "Sala do Secretário",
  },
  {
    id: "Gabinete",
    name: "Gabinete",
  }
];

const holidays = [
  { day: 1, month: 1, holiday: "Confraternização Universal" },
  { day: 29, month: 3, holiday: "Paixão de Cristo (Sexta-feira Santa)" },
  { day: 21, month: 4, holiday: "Tiradentes" },
  { day: 1, month: 5, holiday: "Dia Mundial do Trabalho" },
  { day: 7, month: 9, holiday: "Independência do Brasil" },
  { day: 1, month: 10, holiday: "Nossa Senhora Aparecida" },
  { day: 2, month: 11, holiday: "Finados" },
  { day: 15, month: 11, holiday: "Proclamação" },
  { day: 25, month: 12, holiday: "Natal" },
  { day: 15, month: 8, holiday: "Adesão do Pará à Independência da República" },
  {
    day: 8,
    month: 12,
    holiday: "Dia de Nossa Senhora da Conceição (ponto facultativo)",
  },
  { day: 12, month: 1, holiday: "Aniversário de Belém (ponto facultativo)" },
  { day: 13, month: 10, holiday: "Círio de Nazaré (ponto facultativo)" },
  { day: 12, month: 2, holiday: "Carnaval" },
  { day: 13, month: 2, holiday: "Carnaval" },
  { day: 14, month: 2, holiday: "Quarta-feira de Cinzas" },
  { day: 30, month: 5, holiday: "Corpus Christi" },
  { day: 15, month: 10, holiday: "Dia do Professor" },
  { day: 28, month: 10, holiday: "Dia do Servidor Público" }
];

//Variáveis do Formulário
const index_input_name = document.getElementById("index_input-name");
const index_input_role = document.getElementById("index_input-role");
const index_input_registration = document.getElementById(
  "index_input-registration"
);
const index_button_generate = document.getElementById("index_button-generate");
const index_wrapper = document.getElementById("index_wrapper");

//Máscara de string
index_input_name.addEventListener("input", function (event) {
  let value = event.target.value;
  value = value.replace(/\d/g, "");
  event.target.value = value;
});

//Máscara de string
index_input_role.addEventListener("input", function (event) {
  let value = event.target.value;
  value = value.replace(/\d/g, "");
  event.target.value = value;
});

//Máscara de matrícula
index_input_registration.addEventListener("input", function (event) {
  let value = event.target.value;

  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{7})(\d)/, "$1/$2");
  event.target.value = value;
});

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
function fillMonthTable(
  primary_sector,
  secondary_sector,
  name,
  role,
  location,
  registration,
  month,
  workload
) {
  const daysInMonth = new Date(currentYear, month, 0).getDate();

  const isHoliday = (day, month) =>
    holidays.some((holiday) => holiday.day == day && holiday.month == month);

  const dayOfWeekCellContent = (isSaturday, isSunday, isHoliday) =>
    isHoliday
      ? "FERIADO NACIONAL"
      : isSaturday
      ? "SÁBADO"
      : isSunday
      ? "DOMINGO"
      : "";

  const weekendClass = (isSaturday, isSunday) =>
    isSaturday || isSunday ? "weekend" : "";

  document.getElementById("impress_secondary-table-tbody").innerHTML = "";
  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date(currentYear, month - 1, i);
    const isSaturday = currentDate.getDay() === 6;
    const isSunday = currentDate.getDay() === 0;
    const holiday = isHoliday(i, month);
    const holidayInfo = holidays.find(holiday => holiday.day == i && holiday.month == month);
    const holidayName = holidayInfo ? holidayInfo.holiday : '';
    const cellContent = dayOfWeekCellContent(isSaturday, isSunday, holiday);
    const cellClass = weekendClass(isSaturday, isSunday);

    if (cellContent == "FERIADO NACIONAL") {
      const row = `
      <tr class="holiday">
        <td class="impress_cel-secondary-table -day ${cellClass}">${i}</td>
        <td class="impress_cel-secondary-table -rubric" colspan="7">FERIADO - ${holidayName.toUpperCase()}</td>
      </tr>
    `;
      document
        .getElementById("impress_secondary-table-tbody")
        .insertAdjacentHTML("beforeend", row);
    } else {
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

  const monthText = monthsofyear
    .filter((monthFilter) => monthFilter.id == month)
    .map((monthValue) => monthValue.name);
  const primary_sectorText = sectors
    .filter((sectorFilter) => sectorFilter.id == primary_sector)
    .map((sectorValue) => sectorValue.name);
  const secondary_sectorText = sectors
    .filter((sectorFilter) => sectorFilter.id == secondary_sector)
    .map((sectorValue) => sectorValue.name);

  if (primary_sectorText.length == 1) {
    document.getElementById("impress_primary-sector").style.display =
      "table-cell";
    document.getElementById("impress_primary-sector").innerHTML =
      primary_sectorText[0];
  } else {
    document.getElementById("impress_primary-sector").style.display = "none";
  }

  if (secondary_sectorText.length == 1) {
    document.getElementById("impress_secondary-sector").style.display =
      "table-cell";
    document.getElementById("impress_secondary-sector").innerHTML =
      secondary_sectorText[0];
  } else {
    document.getElementById("impress_secondary-sector").style.display = "none";
  }

  document.getElementById("impress_name").innerHTML = name.toUpperCase();
  document.getElementById("impress_month").innerHTML =
    monthText[0].toUpperCase() + "/" + currentYear;
  document.getElementById("impress_position").innerHTML = role.toUpperCase();
  document.getElementById("impress_matriculation").innerHTML = registration;
  document.getElementById("impress_location").innerHTML =
    location.toUpperCase();
  document.getElementById("impress_workload").innerHTML = workload;
}

//Funcionalidade de voltar para o formulário
function backToIndex() {
  index_wrapper.style.display = "flex";
  impress_wrapper.style.display = "none";
  impress_btn.style.display = "block";
  impress_wrapper.style.width = "50%";
}

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
}
