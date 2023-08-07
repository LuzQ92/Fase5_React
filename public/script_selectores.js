// Escribir aquí las preguntas y respuestas
let questions = [
    { 
        question: "¿Qué hace el selector descendente en CSS?", 
        options: [
            "Selecciona todos los elementos que son descendientes directos de un elemento específico.", 
            "Selecciona todos los elementos con el mismo nivel de anidamiento.",
            "Selecciona todos los elementos que son descendientes de un elemento específico, independientemente de su nivel de anidamiento."
        ], 
        correctAnswer: 2
    },
    { 
        question: "¿Qué simboliza el asterisco (*) en CSS?", 
        options: [
            "Selecciona todos los elementos de un tipo específico.",
            "Selecciona todos los elementos de la página.",
            "Selecciona el primer elemento de la página."
        ], 
        correctAnswer: 1
    },
    { 
        question: "¿Cómo puedes seleccionar un elemento con un id específico en CSS?", 
        options: [
            "Usando el símbolo de hash (#) seguido del id.",
            "Usando el símbolo de punto (.) seguido del id.",
            "Usando el símbolo de asterisco (*) seguido del id."
        ], 
        correctAnswer: 0
    },
    { 
        question: '¿Qué representa el siguiente selector CSS: "p::first-line"?', 
        options: [
            "Selecciona la primera línea de cada párrafo.",
            "Selecciona la primera línea de la página.",
            "Selecciona el primer párrafo de la página."
        ], 
        correctAnswer: 0
    },
    { 
        question: "Si tienes un elemento con múltiples clases, ¿cómo puedes seleccionar todas esas clases en CSS?", 
        options: [
            "Separándolas con comas.",
            "Separándolas con espacios.",
            "Separándolas con puntos."
        ], 
        correctAnswer: 2
    },
];

// Cargar las preguntas al formulario
let form = document.getElementById('quizForm');
for(let i = 0; i < questions.length; i++){
    let questionDiv = document.createElement('div');
    questionDiv.innerHTML = `
        <h2>${questions[i].question}</h2>
        ${questions[i].options.map((option, index) => `<input type="radio" name="q${i}" value="${index}"> ${option}<br>`).join('')}
    `;
    form.appendChild(questionDiv);
}

// Validar las respuestas al enviar
document.getElementById('submitBtn').addEventListener('click', function(e){
    e.preventDefault();
    
    let score = 0;
    let todasRespondidas = true;
    
    for(let i = 0; i < questions.length; i++){
        let answer = form[`q${i}`].value;

        // Verificar si la pregunta fue respondida
        if(answer === ''){
            todasRespondidas = false;
            break;
        }
        
        if(answer == questions[i].correctAnswer){
            score++;
        }
    }
    
    if(todasRespondidas){
        alert(`Tu puntaje es ${score}/${questions.length}`);
    }else{
        alert('Por favor, responde a todas las preguntas.');
    }
});
