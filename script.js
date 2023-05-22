const form = document.querySelector('form');
const resultadoDescricao = document.getElementById('resultadoDescricao');
const resultadoPeso = document.getElementById('resultadoPeso');
const resultadoAltura = document.getElementById('resultadoAltura');
const resultadoImc = document.getElementById('resultadoImc');
const resultadoImcClassificacao = document.getElementById('resultadoImcClassificacao');

form.onsubmit = (e) =>{

    e.preventDefault();
    //agrupa todos os inputs numa variável
    const inputs = new FormData(e.target);

    // .get( ) capitura pega cada valor do input pelo name
    const nome = inputs.get('nome');
    const altura = Number(inputs.get('altura'));
    const peso = Number(inputs.get('peso'));

    const imc = (peso / (altura * altura)).toFixed(2);
    
    
    if( nome !== '' && altura !== '' && peso !== ''){
        if(imc <= 16.9 ){
            resultadoDescricao.textContent = nome + ", aqui está o resultado do seu IMC:";
            resultadoPeso.textContent = "Peso " + peso + "Kg";
            resultadoAltura.textContent = "Altura " + altura;
            resultadoImc.textContent ="Aqui o resultado " + imc;
            resultadoImcClassificacao.textContent = "Muito abaixo do Peso!";
        }else if(imc >= 17 || imc <= 18.9){
            resultadoDescricao.textContent = nome + ", aqui está o resultado do seu IMC:";
            resultadoPeso.textContent = "Peso " + peso + "Kg";
            resultadoAltura.textContent = "Altura " + altura;
            resultadoImc.textContent ="Aqui o resultado " + imc;
            resultadoImcClassificacao.textContent = "Abaixo do Peso!";
        }else if(imc >= 18 || imc <= 24.9){
            resultadoDescricao.textContent = nome + ", aqui está o resultado do seu IMC:";
            resultadoPeso.textContent = "Peso " + peso + "Kg";
            resultadoAltura.textContent = "Altura " + altura;
            resultadoImc.textContent ="Aqui o resultado " + imc;
            resultadoImcClassificacao.textContent = "Peso Normal!";
        }else if(imc >= 25 || imc <= 29.9){
            resultadoDescricao.textContent = nome + ", aqui está o resultado do seu IMC:";
            resultadoPeso.textContent = "Peso " + peso + "Kg";
            resultadoAltura.textContent = "Altura " + altura;
            resultadoImc.textContent ="Aqui o resultado " + imc;
            resultadoImcClassificacao.textContent = "Acima do Peso!";
        }else if(imc >= 30 || imc <= 34.9){
            resultadoDescricao.textContent = nome + ", aqui está o resultado do seu IMC:";
            resultadoPeso.textContent = "Peso " + peso + "Kg";
            resultadoAltura.textContent = "Altura " + altura;
            resultadoImc.textContent ="Aqui o resultado " + imc;
            resultadoImcClassificacao.textContent = "Obesidade Grau I!";
        }else if(imc >= 35 || imc <= 39.9){
            resultadoDescricao.textContent = nome + ", aqui está o resultado do seu IMC:";
            resultadoPeso.textContent = "Peso " + peso + "Kg";
            resultadoAltura.textContent = "Altura " + altura;
            resultadoImc.textContent ="Aqui o resultado " + imc;
            resultadoImcClassificacao.textContent = "Obesidade Grau II!";
        }else if(imc >= 40  ){
            resultadoDescricao.textContent = nome + ", aqui está o resultado do seu IMC:";
            resultadoPeso.textContent = "Peso " + peso + "Kg"; 
            resultadoAltura.textContent = "Altura " + altura;
            resultadoImc.textContent ="Aqui o resultado " + imc;
            resultadoImcClassificacao.textContent = "Obesidade Grau III!";
        }else{
            alert("Sistema detectou um erro \n Atualize a Página!")
        }
    }else{
        alert("Preencha os campos!!")
    }
  

}