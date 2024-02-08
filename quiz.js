const perguntas = [
    {
      pergunta: "O que é o ES6 em Javascript?",
      respostas: [
        "Uma versão antiga do JavaScript",
        "O sexto padrão ECMAScript",
        "Uma nova versão do JavaScript lançada em 2015"
      ],
      correta: 2
    },
    {
      pergunta: "Qual recurso do ES6 é utilizado para declarar variáveis?",
      respostas: [
        "var",
        "let",
        "const"
      ],
      correta: 2
    },
    {
      pergunta: "O que significa 'arrow functions' no contexto do ES6?",
      respostas: [
        "Funções que contêm setas em seus nomes",
        "Funções de seta que possuem uma sintaxe mais curta",
        "Funções especiais usadas para desenhar setas em páginas da web"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o propósito da palavra-chave 'let' no ES6?",
      respostas: [
        "Declarar variáveis de escopo global",
        "Declarar variáveis de escopo de bloco",
        "Declarar variáveis imutáveis"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o 'spread operator' no ES6?",
      respostas: [
        "Um operador de propagação de vírus",
        "Um operador usado para espalhar elementos de um array ou objeto",
        "Um operador para espalhar conteúdo na tela"
      ],
      correta: 2
    },
    {
      pergunta: "O que representa a desestruturação no contexto do ES6?",
      respostas: [
        "Quebrar códigos em pedaços menores",
        "Desconstruir arrays ou objetos em variáveis individuais",
        "Desconstruir o significado de uma função"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a principal diferença entre 'let' e 'const' no ES6?",
      respostas: [
        "let é usado para variáveis mutáveis, e const para variáveis imutáveis",
        "let é usado para variáveis de escopo global, e const para variáveis de escopo de bloco",
        "let é usado para números, e const para strings"
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma 'Promise' no ES6?",
      respostas: [
        "Uma garantia de que um código funcionará corretamente",
        "Um objeto que representa um valor eventualmente disponível ou uma razão pela qual uma operação falhou",
        "Uma função que sempre retorna um valor"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o 'template literals' no ES6?",
      respostas: [
        "Literais de texto simples",
        "Uma forma de criar templates para páginas da web",
        "Uma forma de criar strings interpoladas usando `${}`"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a principal finalidade do 'destructuring assignment' no ES6?",
      respostas: [
        "Atribuir valores a variáveis de forma mais compacta",
        "Destruir objetos e arrays",
        "Ajudar na organização do código"
      ],
      correta: 0
    },
  ];
  
  // pegando o conteudo onde vai ser inserido o quiz
  const quiz=document.querySelector('#quiz');
  
  const template=document.querySelector('template');
  console.log(template)
  
  const corretas= new Set();
  const allAskQuestion= perguntas.length;
  const mostrarAcertos=document.querySelector('#acertos span');
  mostrarAcertos.textContent=corretas.size + ' de '+allAskQuestion;
  // percorrendo o array de perguntas
  for(let item of perguntas){
    // pegando o conteudo do template e add no quizItem toda vez que o array é interrado 
    const quizItem= template.content.cloneNode(true)
    // add dentro do h3 a pergunta de cada item no array
    quizItem.querySelector('h3').textContent=item.pergunta;
    // pecorrendo o array respostas,que está dentro do array perguntas
    for(let resposta of item.respostas){
      // pegando o conteudo do dt que está dentro do quizItem
      const dt= quizItem.querySelector('dl dt').cloneNode(true);
      // add cada item do array respostas dentro do span do dt
      dt.querySelector('span').textContent=resposta;
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item));
      dt.querySelector('input').value=item.respostas.indexOf(resposta);
      dt.querySelector('input').onchange=(event)=>{
        const isCorrect=event.target.value==item.correta;
        corretas.delete(item)
        if(isCorrect){
          corretas.add(item);
          
        }
  
        mostrarAcertos.textContent=corretas.size + ' de '+allAskQuestion;
      }
      // add como child o conteudo do dt em cada dl que está dentro do quizItem
      quizItem.querySelector('dl').appendChild(dt);
    }
    // remover o first dt do quizItem que provem do template
    quizItem.querySelector('dl dt').remove();
    // add a pergunta na tela.
    quiz.appendChild(quizItem);
  }
  
  // // Exemplo de acesso à pergunta e suas respostas:
  // console.log(perguntas[0].pergunta);
  // console.log(perguntas[0].respostas);
  // console.log(perguntas[0].correta);
  