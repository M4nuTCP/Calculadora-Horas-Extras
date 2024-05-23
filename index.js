const resultadosHorasExtras = [];


function calculate() {
    const horas = parseFloat(document.getElementById('horas').value);
    const category = parseInt(document.getElementById('category').value);
    const menu = parseInt(document.getElementById('menu').value);
    let rate = 0;
    let explanationText = "";
    let outputText = "";
    
    const HorasTecnico = 16.20;
    const HorasControl = 14.48;
    
    if (category === 1) {
        switch (menu) {
            case 1:
                rate = HorasTecnico;
                explanationText = "Hora Extra; Valor de la hora extra normal.";
                break;
            case 2:
                rate = HorasTecnico * 1.30; // 21.06 / 16.20
                explanationText = "Hora Extra Nocturna; Son las comprendidas entre las 22:00 h y las 06:00 h del día laborable. Valor de la hora extra normal + 30%.";
                break;
            case 3:
                rate = HorasTecnico * 1.35; // 21.87 / 16.20
                explanationText = "Hora Extra de Sábado; Son las comprendidas entre las 06:00 h y las 22:00 h del sábado. Valor de la hora extra normal + 35%.";
                break;
            case 4:
                rate = HorasTecnico * 1.75493; // 28.43 / 16.20
                explanationText = "Hora Extra Sábado-Nocturna; Son las comprendidas entre las 22:00 h a las 24:00 h y de las 00:00 h a las 06:00 h del sábado. Valor de la hora extra de sábado + 75%.";
                break;
            case 5:
                rate = HorasTecnico * 1.75; // 28.35 / 16.20
                explanationText = "Hora Extra Festiva; Son las comprendidas entre las 06:00 h y las 22:00 h del día festivo. Valor de la hora extra normal + 75%.";
                break;
            case 6:
                rate = HorasTecnico * 2.27530; // 36.86 / 16.20
                explanationText = "Hora Extra Festiva-Nocturna; Son las comprendidas de las 00:00 h a las 06:00 h del día festivo, y de las 22:00 h a las 24:00 h del día festivo. Valor de la hora extra festiva + 127%.";
                break;
            default:
                outputText = "Opción no válida";
        }
    } else if (category === 2) {
        switch (menu) {
            case 1:
                rate = HorasControl;
                explanationText = "Hora Extra; Valor de la hora extra normal.";
                break;
            case 2:
                rate = HorasControl * 1.29972; // 18.82 / 14.48
                explanationText = "Hora Extra Nocturna; Son las comprendidas entre las 22:00 h y las 06:00 h del día laborable. Valor de la hora extra normal + 30%.";
                break;
            case 3:
                rate = HorasControl * 1.35013; // 19.55 / 14.48
                explanationText = "Hora Extra de Sábado; Son las comprendidas entre las 06:00 h y las 22:00 h del sábado. Valor de la hora extra normal + 35%.";
                break;
            case 4:
                rate = HorasControl * 1.75483; // 25.41 / 14.48
                explanationText = "Hora Extra Sábado-Nocturna; Son las comprendidas entre las 22:00 h a las 24:00 h y de las 00:00 h a las 06:00 h del sábado. Valor de la hora extra de sábado + 75%.";
                break;
            case 5:
                rate = HorasControl * 1.75; // 25.34 / 14.48
                explanationText = "Hora Extra Festiva; Son las comprendidas entre las 06:00 h y las 22:00 h del día festivo. Valor de la hora extra normal + 75%.";
                break;
            case 6:
                rate = HorasControl * 2.27486; // 32.94 / 14.48
                explanationText = "Hora Extra Festiva-Nocturna; Son las comprendidas de las 00:00 h a las 06:00 h del día festivo, y de las 22:00 h a las 24:00 h del día festivo. Valor de la hora extra festiva + 127%.";
                break;
            default:
                outputText = "Opción no válida";
        }
    } else {
        outputText = "Categoría no válida";
    }
    

    if (outputText === "") {
        const montoBruto = rate * horas;
        const tipoHoraExtra = document.getElementById('menu').options[menu].text;

        outputText = `${montoBruto.toFixed(2)} € Bruto`;

        resultadosHorasExtras.push({
            horas: horas,
            tipo: tipoHoraExtra,
            monto: montoBruto
        });

        sumHours();
    }

    document.getElementById('output').innerHTML = outputText;

    document.getElementById('explanation').textContent = explanationText;
}



function sumHours() {
    const totalSuma = resultadosHorasExtras.reduce((total, resultado) => total + resultado.monto, 0);

    document.getElementById('sumOutput').textContent = `Horas Extras Totales: ${totalSuma.toFixed(2)} € Bruto`;

    const sumList = document.getElementById('sumList');
    sumList.innerHTML = ''; 

    for (const resultado of resultadosHorasExtras) {
        const listItem = document.createElement('div');
        listItem.textContent = `${resultado.horas} Horas, ${resultado.tipo}, ${resultado.monto.toFixed(2)} €`;
        sumList.appendChild(listItem);
    }
}


