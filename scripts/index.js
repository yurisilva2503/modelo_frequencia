const makePDF = () => {
  var primary_table = document.getElementById("primary_table-container").innerHTML;
  var secundary_table = document.getElementById("secundary_table-container").innerHTML;

  var style = `
  <style>

    * {
    border: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: Arial;
    }

    body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    }

    .wrapper{
    width: 60vw;
    }

    #primary_table-container {
    width: 100%;
    }

    #primary_table {
    border-collapse: collapse;
    width: 100%;
    font-weight: bold;
    font-size: 1em;
    }

    .table-caption {
    margin-bottom: 6px;
    }

    .main-logo {
    width: 650px;
    height: 90px;
    }

    .sector{
    border: 2px solid #000;
    padding: 1px;
    }


    tbody > tr:nth-child(1) > td{
    padding-top: 2.5px;
    text-align: center;
    }


    #secundary_table-container {
    width: 100%;
    }


    #secundary_table {
    margin-top: 6px;
    border-collapse: collapse;
    width: 100%;
    font-weight: bold;
    font-size: 1em;
    }

    .cel-secundary_table{
    border: 2px solid #000;
    }

    #secundary_table > thead > tr > th:nth-child(1){
    width: 5%
    }
    #secundary_table > thead > tr > th:nth-child(2){
    width: 10%
    }
    #secundary_table > thead > tr > th:nth-child(3){
    width: 32.5%
    }
    #secundary_table > thead > tr > th:nth-child(4){
    width: 32.5%
    }
    #secundary_table > thead > tr > th:nth-child(5){
    width: 8%
    }
    #secundary_table > thead > tr > th:nth-child(6){
    width: 12%
    }
    
    </style>
  `;

  var win = window.open("", "", "");

  win.document.write("<html><head>");
  win.document.write("<title>Frequência</title>");
  win.document.write(style);
  win.document.write("</head>");
  win.document.write("<body>");
  win.document.write(primary_table);
  win.document.write(secundary_table);
  win.document.write("</body></html>");

  win.document.close();
  win.print();
};
