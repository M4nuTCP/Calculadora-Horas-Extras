// Declarar un array para almacenar los resultados de las horas extras calculadas
const resultadosHorasExtras = [];


function calculate() {
    const horas = parseFloat(document.getElementById('horas').value);
    const category = parseInt(document.getElementById('category').value);
    const menu = parseInt(document.getElementById('menu').value);
    let rate = 0;
    let outputText = "";
    let explanationText = "";

    const HorasTecnico = 16.20;
    const HorasControl = 14.48;

    let tipoHoraExtra = ""; // Agregar esta variable
    let montoBruto = 0; // Agregar esta variable

    if (category === 1) {
        switch (menu) {
            case 1:
                rate = HorasTecnico;
                explanationText = "Hora Extra; Valor de la hora extra normal.";
                break;
            case 2:
                rate = (HorasTecnico + (HorasTecnico * 0.30));
                explanationText = "Hora Extra Nocturna; Son las comprendidas entre las 22:00 h y las 06:00 h del día laborable. Valor de la hora extra normal + 30%.";
                break;
            case 3:
                rate = (HorasTecnico + (HorasTecnico * 0.35));
                explanationText = "Hora Extra de Sábado; Son las comprendidas entre las 06:00 h y las 22:00 h del sábado. Valor de la hora extra normal + 35%.";
                break;
            case 4:
                rate = (HorasTecnico + (HorasTecnico * 0.65));
                explanationText = "Hora Extra Sábado-Nocturna; Son las comprendidas entre las 00:00 h a las 06:00 h del sábado, y de las 22:00 h a las 24:00 h del sábado. Valor de la hora extra de sábado + 30%.";
                break;
            case 5:
                rate = (HorasTecnico + (HorasTecnico * 0.75));
                explanationText = "Hora Extra Festiva; Son las comprendidas entre las 06:00 h y las 22:00 h del día festivo. Valor de la hora extra normal + 75%.";
                break;
            case 6:
                rate = (HorasTecnico + (HorasTecnico * 1.05));
                explanationText = "Hora Extra Festiva-Nocturna; Son las comprendidas de las 00:00 h a las 06:00 h del día festivo, y de las 22:00 h a las 24:00 h del día festivo. Valor de la hora Extra festiva + 30%.";
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
                rate = (HorasControl + (HorasControl * 0.30));
                explanationText = "Hora Extra Nocturna; Son las comprendidas entre las 22:00 h y las 06:00 h del día laborable. Valor de la hora extra normal + 30%.";
                break;
            case 3:
                rate = (HorasControl + (HorasControl * 0.35));
                explanationText = "Hora Extra de Sábado; Son las comprendidas entre las 06:00 h y las 22:00 h del sábado. Valor de la hora extra normal + 35%.";
                break;
            case 4:
                rate = (HorasControl + (HorasControl * 0.65));
                explanationText = "Hora Extra Sábado-Nocturna; Son las comprendidas entre las 00:00 h a las 06:00 h del sábado, y de las 22:00 h a las 24:00 h del sábado. Valor de la hora extra de sábado + 30%.";
                break;
            case 5:
                rate = (HorasControl + (HorasControl * 0.75));
                explanationText = "Hora Extra Festiva; Son las comprendidas entre las 06:00 h y las 22:00 h del día festivo. Valor de la hora extra normal + 75%.";
                break;
            case 6:
                rate = (HorasControl + (HorasControl * 1.05));
                explanationText = "Hora Extra Festiva-Nocturna; Son las comprendidas de las 00:00 h a las 06:00 h del día festivo, y de las 22:00 h a las 24:00 h del día festivo. Valor de la hora Extra festiva + 30%.";
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

        // Agregar el resultado al array de resultados
        resultadosHorasExtras.push({
            horas: horas,
            tipo: tipoHoraExtra,
            monto: montoBruto
        });

        // Llama automáticamente a la función sumHours para actualizar los resultados
        sumHours();
    }

    document.getElementById('output').innerHTML = outputText;

    // Muestra el texto explicativo
    document.getElementById('explanation').textContent = explanationText;
}

//...

function sumHours() {
    // Mostrar la suma en la calculadora de suma de horas extras
    const totalSuma = resultadosHorasExtras.reduce((total, resultado) => total + resultado.monto, 0);

    document.getElementById('sumOutput').textContent = `Horas Extras Totales: ${totalSuma.toFixed(2)} € Bruto`;

    // Mostrar el tipo de hora extra en la lista
    const sumList = document.getElementById('sumList');
    sumList.innerHTML = ''; // Borra la lista actual

    for (const resultado of resultadosHorasExtras) {
        const listItem = document.createElement('div');
        listItem.textContent = `${resultado.horas} Horas, ${resultado.tipo}, ${resultado.monto.toFixed(2)} €`;
        sumList.appendChild(listItem);
    }
}


