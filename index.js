
class Aluno {

    nome;
  
    matricula;
  
    nota1;
  
    nota2;
  
    nota3;
  
     constructor(nome, matricula, n1, n2, n3) {
  
       this.nome = nome;
  
       this.matricula = matricula;
  
       this.nota1 = n1;
  
       this.nota2 = n2;
  
       this.nota3 = n3;
  
    }
  
     exibeInfo() {
  
       return `Aluno: ${this.nome} - mat: ${this.matricula}
  
      Notas: N1: ${this.nota1} - N2: ${this.nota2} - N3: ${this.nota3}
  
      Média:${this.calculaMedia()} 
  
      `;
  
    }
  
     calculaMedia() {
  
       return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
  
    }
  
  }

  function mostrarLista() {
    let nome = document.querySelector('#nome');
    let matricula = document.querySelector('#matricula');
    let nota1 = document.querySelector('#nota1');
    let nota2 = document.querySelector('#nota2');
    let nota3 = document.querySelector('#nota3');
    let resultado = document.querySelector('#lista');

    let aluno = new Aluno(
      nome,
      matricula,
      nota1,
      nota2,
      nota3,
    );

    console.log(aluno.exibeInfo());


  }


  // declarando as variáveis
  let form = document.querySelector('form');
  let ul = document.querySelector('ul');

  // capturando os eventos (recebendo as informações do formulário)
  form.onsubmit = function(evento) {
    evento.preventDefault();

    let nome = document.querySelector('.nome').value;
    let matricula = document.querySelector('.matricula').value;
    let nota1 = parseFloat(document.querySelector('.nota1').value);
    let nota2 = parseFloat(document.querySelector('.nota2').value);
    let nota3 = parseFloat(document.querySelector('.nota3').value);
    let resultado = document.querySelector('#lista');
    let input = form.querySelectorAll('input');

    let aluno = new Aluno(
      nome,
      matricula,
      nota1,
      nota2,
      nota3,
    );

    //testando no console
    console.log(aluno.exibeInfo());

    //criando os elementos "inserindo os alunos no HTML"
    let liNome = document.createElement('li');
    liNome.setAttribute('class', 'liNome');
    liNome.textContent = "Aluno: " + aluno.nome;
    let botao = document.createElement('button');
    botao.textContent = 'excluir';
    botao.setAttribute('class', 'botao');

    let ulAluno = document.createElement('ul');
    ulAluno.setAttribute('class', 'ulAluno');

    let liMatricula = document.createElement('li');
    liMatricula.textContent = "Matricula: " + aluno.matricula;
    let liNota1 = document.createElement('li');
    liNota1.textContent = "Nota 1: "+ aluno.nota1;
    let liNota2 = document.createElement('li');
    liNota2.textContent = "Nota 2: "+ aluno.nota2;
    let liNota3 = document.createElement('li');
    liNota3.textContent = "Nota 3: "+ aluno.nota3;
    let liMedia = document.createElement('li');
    liMedia.textContent = "Média: "+ aluno.calculaMedia();

    ulAluno.appendChild(liMatricula);
    ulAluno.appendChild(liNota1);
    ulAluno.appendChild(liNota2);
    ulAluno.appendChild(liNota3);
    ulAluno.appendChild(liMedia);

    liNome.appendChild(ulAluno);

    liNome.appendChild(botao);
    //ul.appendChild(liNome);
   
    // Deixa os campos do formulário em branco
    for (i=0; i <input.length; i++){
      input[i].value = "";
    }

    resultado.appendChild(liNome);

  }

  // Excluindo os dados inseridos
  ul.onclick = (evento) => {
    console.log(evento.target);
    console.log(evento.currentTarget);
    if(evento.target.classList.contains('botao')) {
        if(confirm('Tem certeza que deseja excluir?')) {
            console.log('O item foi removido!');
            evento.target.parentElement.remove();
        }
    }
}
  