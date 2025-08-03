const activities = [
  {
    date: "28/07",
    day: "Segunda Feira",
    time: "20h",
    activity: "1ª Lista da TROPA",
  },
  {
    date: "28/07",
    day: "Segunda Feira",
    time: "20h",
    activity: "Abertura das Inscrições para a TROPA",
  },
  {
    date: "04/08",
    day: "Segunda Feira",
    time: "20h",
    activity: "2ª Lista da TROPA",
  },
  {
    date: "11/08",
    day: "Segunda Feira",
    time: "20h",
    activity: "3ª Lista da TROPA",
  },
  {
    date: "31/08",
    day: "Domingo",
    time: "20h",
    activity: "Criação do Grupo da TROPA 2025",
  },
  {
    date: "14/09",
    day: "Domingo",
    time: "18h",
    activity: "Início da Encomenda da Camisa da TROPA",
  },
  {
    date: "19/09",
    day: "Sexta Feira",
    time: "20h",
    activity: "Escolha dos Setores de Trabalho no Congresso",
  },
  {
    date: "21/09",
    day: "Domingo",
    time: "22h",
    activity: "Fim da Encomenda da Camisa da TROPA",
  },
  {
    date: "27/09",
    day: "Sábado",
    time: "16h",
    activity: "Criação do Grupo dos Responsáveis",
  },
  {
    date: "03/10",
    day: "Sexta Feira",
    time: "20h",
    activity:
      "Divulgação da Composição dos Setores + Líderes (Rede, Quarto e Ônibus)",
  },
  {
    date: "04/10",
    day: "Sábado",
    time: "16h",
    activity: "Criação do Grupo dos Setores",
  },
  {
    date: "04/10",
    day: "Sábado",
    time: "16h",
    activity: "Criação do Grupo dos Discipuladores das Redes",
  },
  {
    date: "06/10",
    day: "Segunda Feira",
    time: "20h",
    activity: "Reunião com Pais e Responsáveis",
  },
  {
    date: "10/10",
    day: "Sexta Feira",
    time: "16h",
    activity: "Criação do Grupo dos Congressistas",
  },
  {
    date: "10/10",
    day: "Sexta Feira",
    time: "20h",
    activity: "Reunião com a Dinamização para falar sobre a Gincana Teen",
  },
  {
    date: "10/10",
    day: "Sexta Feira",
    time: "20h",
    activity: "Divulgação das Redes dos Congressistas",
  },
  {
    date: "11/10",
    day: "Sábado",
    time: "20h",
    activity: "Criação dos Grupos de Congressistas das Redes",
  },
  { date: "12/10", day: "Domingo", time: "16h", activity: "Pré-Congresso 1" },
  {
    date: "12/10",
    day: "Domingo",
    time: "16h",
    activity: "Recebimento de Cartas e Presentes",
  },
  {
    date: "19/10",
    day: "Domingo",
    time: "16h",
    activity: "Pré-Congresso 2 + Escolha dos Quartos",
  },
  {
    date: "24/10",
    day: "Sexta Feira",
    time: "20h",
    activity:
      "Divulgação da Composição das Acomodações no Sítio + Composição dos Ônibus",
  },
  {
    date: "24/10",
    day: "Sexta Feira",
    time: "20h",
    activity: "Divulgação dos Grupos de Devocional Guiado da Rede",
  },
  {
    date: "25/10",
    day: "Sábado",
    time: "15h",
    activity: "Preparação dos Crachás",
  },
  { date: "26/10", day: "Domingo", time: "16h", activity: "Pré-Congresso 3" },
  {
    date: "26/10",
    day: "Domingo",
    time: "20h",
    activity: "Entrega da Camisa da TROPA",
  },
  {
    date: "29/10",
    day: "Quarta Feira",
    time: "18h",
    activity: "Entrega de Malas da TROPA",
  },
  { date: "31/10 - 02/11", day: "", time: "", activity: "19º Congresso Teen" },
  { date: "09/11", day: "Domingo", time: "18h", activity: "Louvor + Arena 1" },
  { date: "16/11", day: "Domingo", time: "18h", activity: "Louvor + Arena 2" },
  { date: "23/11", day: "Domingo", time: "18h", activity: "Louvor + Arena 3" },
];

function populateTable(tableId, data) {
  const tableBody = document.getElementById(tableId);
  let content = "";
  data.forEach((item, index) => {
    const rowClass = index % 2 === 0 ? "table-row-dark" : "table-row-light";
    content += `
            <tr class="${rowClass}">
                <td class="p-2 text-base">${item.date}</td>
                <td class="p-2 text-base text-center">${item.day}</td>
                <td class="p-2 text-base text-center">${item.time}</td>
                <td class="p-2 text-base">${item.activity}</td>
            </tr>
        `;
  });
  tableBody.innerHTML = content;
}

// Dividindo as atividades para as três páginas
const part1 = activities.slice(0, 10);
const part2 = activities.slice(10, 20);
const part3 = activities.slice(20);

populateTable("schedule-part-1", part1);
populateTable("schedule-part-2", part2);
populateTable("schedule-part-3", part3);
