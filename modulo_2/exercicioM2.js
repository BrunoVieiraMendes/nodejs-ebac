const carros = [
    {
        modelo: "Fusca",
        ano: 1972,
        placa: "ABC-1234"
    },
    {        
        modelo: "Civic",
        ano: 2020,
        placa: "XYZ-5678"
    },
    {
        modelo: "Gol",
        ano: 2015,
        placa: "QWE-4321"
    },
    {
        modelo: "Corolla",
        ano: 2018,
        placa: "LMN-8765"
    }
];

console.log(carros);

carros.push({
    modelo: "T-cross",
    ano: 2022,
    placa: "DFC-3R43"
});

console.log(carros);

carros.sort((a, b) => {
    if (a.modelo < b.modelo) {
        return -1;  
    }
    if (a.modelo > b.modelo) {
        return 1;   
    }
    return 0;
});


console.log(carros);


const veiculosRodizio = (diaSemana) => {
    
    const rodizio = {
        0: [1, 2],  // Segunda-feira (0)
        1: [3, 4],  // Terça-feira (1)
        2: [5, 6],  // Quarta-feira (2)
        3: [7, 8],  // Quinta-feira (3)
        4: [9, 0],  // Sexta-feira (4)
        5: [],      // Sábado (5) - Não tem rodízio
        6: []       // Domingo (6) - Não tem rodízio
    };

    
    if (diaSemana < 0 || diaSemana > 6) {
        throw new Error('Dia da semana inválido. Deve ser um número entre 0 e 6.');
    }

    return rodizio[diaSemana];
};


let dia = 0;  
const diasDaSemana = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"
];

while (dia <= 6) {
    const rodizioDia = veiculosRodizio(dia);  

   
    console.log(`No dia ${diasDaSemana[dia]}, os veículos de rodízio são: ${rodizioDia.length > 0 ? rodizioDia.join(', ') : 'não há rodízio'}`);

    dia++;  
}

