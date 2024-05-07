//Variáveis da Impressão
const impress_wrapper = document.getElementById("impress_wrapper")
const impress_secondary_table_tbody = document.getElementById("impress_secondary-table-tbody")
const impress_btn = document.getElementById("impress_btn-impress")
const impress_btn_back = document.getElementById("impress_btn-back")
const impress_primary_sector = document.getElementById("impress_primary-sector")
const impress_secondary_sector = document.getElementById("impress_secondary-sector")
const impress_name = document.getElementById("impress_name")
const impress_month = document.getElementById("impress_month")
const impress_position = document.getElementById("impress_position")
const impress_matriculation = document.getElementById("impress_matriculation")
const impress_location = document.getElementById("impress_location")
const impress_workload = document.getElementById("impress_workload")
const impress_date_container = document.getElementById("impress_date-container")
const impress_signatures = document.getElementById("impress_signatures")
const impress_address = document.getElementById("impress_address")
const currentYear = new Date().getFullYear()

//Variáveis do Formulário
const index_select_sector_primary = document.getElementById("index_select-sector-primary")
const index_select_sector_secondary = document.getElementById("index_select-sector-secondary")
const index_input_name = document.getElementById("index_input-name")
const index_input_role = document.getElementById("index_input-role")
const index_select_location = document.getElementById("index_select-location")
const index_input_registration = document.getElementById("index_input-registration")
const index_select_month = document.getElementById("index_select-month")
const index_select_workload = document.getElementById("index_select-workload")
const index_button_generate = document.getElementById("index_button-generate")
const index_wrapper = document.getElementById("index_wrapper")

//Variáveis do Loading
const wrapper_loader = document.getElementById("wrapper-loader")
const loader = document.getElementById("loader")

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
]

const sectors = [
  {
    id: "Almoxarifado",
    name: "Almoxarifado",
  },
  {
    id: "ASCOM",
    name: "Assessoria de Comunicação - ASCOM",
  },
  {
    id: "Assessoria DCTV",
    name: "Assessoria DCTV",
  },
  {
    id: "Assessoria DETEC",
    name: "Assessoria DETEC",
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
    id: "COEAD",
    name: "Coordenadoria de Educação à Distância - COEAD",
  },
  {
    id: "COEDS",
    name: "Coordenadoria de Educação Superior - COEDS",
  },
  {
    id: "COESC",
    name: "Coordenadoria de Serviços nas Unidades Escolares - COESC",
  },
  {
    id: "COFIC",
    name: "Coordenadoria de Formação Inicial e Continuada - COFIC",
  },
  {
    id: "COLOP",
    name: "Coordenadoria de Logística e Patrimônio - COLOP",
  },
  {
    id: "COMSER",
    name: "Coordenadoria de Compras e Serviços - COMSER",
  },
  {
    id: "CONFIN",
    name: "Coordenadoria de Orçamento e Finanças - CONFIN",
  },
  {
    id: "CETEC",
    name: "Coordenadoria de Educação Técnica e Tecnológica - CETEC",
  },
  {
    id: "CGEPES",
    name: "Coordenadoria de Gestão de Pessoas - CGEPES",
  },
  {
    id: "CTDS",
    name: "Coordenadoria de Tecnologia para o Desenvolvimento Social - CTDS",
  },
  {
    id: "DAF",
    name: "Diretoria de Administração e Finanças - DAF",
  },
  {
    id: "DCT",
    name: "Diretoria de Ciência e tecnologia - DCT",
  },
  {
    id: "DETEC",
    name: "Anexo-Diretoria de Educação Profissional e Tecnológica - DETEC",
  },
  {
    id: "EETEPAS",
    name: "Setor Sociopsicopedagógico - EETEPAS",
  },
  {
    id: "GECONC",
    name: "Gerência de Contratos e Convênio - GECONC",
  },
  {
    id: "GEPC",
    name: "Gerência de Prestação de Contas - GEPC",
  },
  {
    id: "GETIC",
    name: "Gerência de Tecnologia da Informação e Comunicação - GETIC",
  },
  {
    id: "Gerência Financeira (PRONATEC)",
    name: "Gerência Financeira (PRONATEC)",
  },
  {
    id: "Gabinete",
    name: "Gabinete",
  },
  {
    id: "NUCAD",
    name: "Núcleo Consultivo da Administração Direta - NUCAD",
  },
  {
    id: "NUENG",
    name: "Núcleo de Obras e Serviços de Engenharia - NUENG",
  },
  {
    id: "NUPLAN",
    name: "Núcleo de Planejamento - NUPLAN",
  },
  {
    id: "NUCI",
    name: "Controle Interno - NUCI",
  },
  {
    id: "Procurador do Estado",
    name: "Procurador do Estado",
  },
  {
    id: "SECAD",
    name: "Secretaria Adjunta - SECAD",
  },
  {
    id: "Sala da Diretoria",
    name: "Sala da Diretoria",
  },
  {
    id: "Sala do Secretário",
    name: "Sala do Secretário",
  },
]

const holidays = [
  { day: 1, month: 1, holiday: "Feriado Nacional - Confraternização Universal" },
  { day: 12, month: 1, holiday: "Feriado Municipal - Aniversário de Belém" },
  { day: 12, month: 2, holiday: "Ponto Facultativo - Carnaval" },
  { day: 13, month: 2, holiday: "Ponto Facultativo - Carnaval" },
  { day: 14, month: 2, holiday: "Ponto Facultativo - Quarta-feira de Cinzas" },
  { day: 29, month: 3, holiday: "Feriado Nacional - Paixão de Cristo (Sexta-feira Santa)" },
  { day: 1, month: 5, holiday: "Feriado Nacional - Dia Mundial do Trabalho" },
  { day: 30, month: 5, holiday: "Feriado Nacional - Corpus Christi" },
  { day: 31, month: 5, holiday: "Ponto Facultativo" },
  { day: 15, month: 8, holiday: "Feriado Estadual - Adesão do Pará à Independência do Brasil" },
  { day: 16, month: 8, holiday: "Ponto Facultativo" },
  { day: 14, month: 10, holiday: "Feriado Municipal - Pós Círio" },
  { day: 28, month: 10, holiday: "Feriado Nacional - Dia do Servidor Público / Feriado Municipal - Recírio" },
  { day: 15, month: 11, holiday: "Feriado Nacional - Proclamação da República" },
  { day: 20, month: 11, holiday: "Feriado Nacional - Dia Nacional de Zumbi e da Consciência Negra" },
  { day: 24, month: 12, holiday: "Ponto Facultativo - Véspera de Natal" },
  { day: 25, month: 12, holiday: "Feriado Nacional - Natal" },
  { day: 31, month: 12, holiday: "Ponto Facultativo - Véspera de Ano Novo" },
]

const workloads = [
  {
    id: "4H",
    name: "4H"
  },
  {
    id: "6H",
    name: "6H"
  },
  {
    id: "6H",
    name: "6H"
  }
]

const handleGetSectors = () => {
  sectors.forEach((sector) => {
    const row = `
      <option value='${sector.id}'>${sector.id}</option>
    `
    index_select_sector_primary.innerHTML += row
    index_select_sector_secondary.innerHTML += row
    index_select_location.innerHTML += row
  })
}

const handleGetMonthsOfYear = () => {
  monthsofyear.forEach(month => {
    const row = `
      <option value='${month.id}'>${month.name}</option>
    `
    index_select_month.innerHTML += row
  })
}

const handleGetWorkloads = () => {
  workloads.forEach(workload => {
    const row = `
      <option value='${workload.id}'>${workload.name}</option>
    `
    index_select_workload.innerHTML += row
  })
}

document.addEventListener("DOMContentLoaded", () => {
  stringReplace(index_input_name)
  stringReplace(index_input_role)
  numberReplace(index_input_registration)
  handleGetSectors()
  handleGetMonthsOfYear()
  handleGetWorkloads()
})

function stringReplace(str){
  str.addEventListener("input", function (event) {
    let value = event.target.value
    value = value.replace(/\d/g, "")
    event.target.value = value
  })
}

function numberReplace(num) {
  num.addEventListener("input", function (event) {
    let value = event.target.value
    value = value.replace(/[^0-9\/?]/g, "")
    event.target.value = value
  })
}

function isEmptyOrNull(fields) {
  return fields.some(
    (value) =>
      !value || value.trim() === "" || value.trim().toLowerCase() === "null"
  )
}

function backToIndex() {
  impress_wrapper.style.display = "none"
  wrapper_loader.style.display = "flex"
  loader.style.display = "block"
  setTimeout(() => {
    index_wrapper.style.display = "flex"
    impress_btn.style.display = "block"
    impress_wrapper.style.width = "50%"

    wrapper_loader.style.display = "none"
    loader.style.display = "none"
  }, 800)
}

function makePDF() {
  impress_btn.style.display = "none"
  impress_btn_back.style.display = "none"
  impress_wrapper.style.width = "93%"

  window.print()

  impress_wrapper.style.display = "none"
  index_wrapper.style.display = "flex"
  impress_btn.style.display = "block"
  impress_btn_back.style.display = "block"
  impress_wrapper.style.width = "50%"

  window.location.reload(true)
}

function generateUser() {
  const user = {
    primary_sector: index_select_sector_primary.value,
    secondary_sector: index_select_sector_secondary.value,
    name: index_input_name.value,
    role: index_input_role.value,
    location: index_select_location.value,
    registration: index_input_registration.value,
    month: index_select_month.value,
    workload: index_select_workload.value,
  }

  const fieldsToCheck = Object.values(user)

  if (isEmptyOrNull(fieldsToCheck)) {
    alert("Por favor, preencha todos os campos antes de continuar.")
    return
  }

  if(user.registration.length <= 6 || user.registration.length >= 11){
    alert("O campo de matrícula deve ter no mínimo 7 e no máximo 10 caracteres.")
    return
  }

  fillMonthTable(user)

  index_wrapper.style.display = "none"
  wrapper_loader.style.display = "flex"
  loader.style.display = "block"
  setTimeout(() => {
    wrapper_loader.style.display = "none"
    loader.style.display = "none"
    impress_wrapper.style.display = "block"
  }, 1000)
}

function fillMonthTable(user) {
  const daysInMonth = new Date(currentYear, user.month, 0).getDate()
  const isHoliday = (day, month) => holidays.some((holiday) => holiday.day == day && holiday.month == month)
  const dayOfWeekCellContent = (isSaturday, isSunday, isHoliday) =>
      isHoliday ? "FERIADO NACIONAL" : 
      isSaturday ? "SÁBADO" : 
      isSunday ? "DOMINGO" : 
      ""
  const weekendClass = (isSaturday, isSunday) => isSaturday || isSunday ? "weekend" : ""

  impress_secondary_table_tbody.innerHTML = ""
  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date(currentYear, user.month - 1, i)
    const isSaturday = currentDate.getDay() === 6
    const isSunday = currentDate.getDay() === 0
    const holiday = isHoliday(i, user.month)
    const holidayInfo = holidays.find(holiday => holiday.day == i && holiday.month == user.month)
    const holidayName = holidayInfo ? holidayInfo.holiday : ''
    const cellContent = dayOfWeekCellContent(isSaturday, isSunday, holiday)
    const cellClass = weekendClass(isSaturday, isSunday)

    if (cellContent == "FERIADO NACIONAL") {
      const row = `
      <tr class="holiday">
        <td class="impress_cel-secondary-table -day">${i}</td>
        <td class="impress_cel-secondary-table -rubric" colspan="7">${holidayName.toUpperCase()}</td>
      </tr>
    `
      impress_secondary_table_tbody.insertAdjacentHTML("beforeend", row)
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
    `
      impress_secondary_table_tbody.insertAdjacentHTML("beforeend", row)
    }
  }

  if (daysInMonth < 30) {
    impress_date_container.style.marginTop = "2%"
    impress_signatures.style.marginTop = "4%"
    impress_address.style.marginTop = "6.5%"
  } else if (daysInMonth == 30) {
    impress_date_container.style.marginTop = "2%"
    impress_signatures.style.marginTop = "3%"
    impress_address.style.marginTop = "4%"
  } else {
    impress_date_container.style.marginTop = "2%"
    impress_signatures.style.marginTop = "2%"
    impress_address.style.marginTop = "3%"
  }

  const primary_sectorText = sectors.find((sectorFilter) => sectorFilter.id == user.primary_sector);
  const secondary_sectorText = sectors.find((sectorFilter) => sectorFilter.id == user.secondary_sector);
  const monthText = monthsofyear.find((monthFilter) => monthFilter.id == user.month)
  
  if (secondary_sectorText) {
    impress_secondary_sector.style.display = "table-cell"
    impress_secondary_sector.innerHTML = secondary_sectorText.name
  } else {
    impress_secondary_sector.style.display = "none"
  }

  impress_primary_sector.innerHTML = primary_sectorText.name
  impress_name.innerHTML = user.name.toUpperCase()
  impress_month.innerHTML = monthText.name.toUpperCase() + "/" + currentYear
  impress_position.innerHTML = user.role.toUpperCase()
  impress_matriculation.innerHTML = user.registration
  impress_location.innerHTML = user.location.toUpperCase()
  impress_workload.innerHTML = user.workload
}
