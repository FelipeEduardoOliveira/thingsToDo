//REFERENCIANDO OS ELEMENTOS DA DOM
var listElement = document.querySelector('#list ul');
var inputElement = document.querySelector('.action input');
var buttonElement = document.querySelector('.action button');

//Preenchedo a lista com Storage ou com informações armazenadas no JS
var listToDo = JSON.parse(localStorage.getItem('list_toDo')) ||[
    'Fazer café',
    'Fazer compras',
    'Estudar JS'
];
//Função que exibe minha lista
    function showList() {

        listElement.innerHTML = ''; // Sempre que mostrar a lista, limpa o que ja estava

        for(list of listToDo){
            //---Adicionando tag l1-----
            var liElement = document.createElement('li'); // criando a tag li
            var toDoElemnt = document.createTextNode(list);// nomeando minhas li's
            //--------------------------
            //---Adicionando tag a-----
            var linkElement = document.createElement('a'); //criando tag a 
            var linkText = document.createTextNode(' Excluir') //dando um nome para a tag a
            linkElement.setAttribute('href', '#'); // selecionando atributos da tag a

            //criando variavel posição
            var pos = listToDo.indexOf(list);
            //atribuindo posição ao array
            linkElement.setAttribute('onclick', 'delThing('+ pos +')');
            //--------------------------

            linkElement.appendChild(linkText); //lingando o nome da tag "a" com a tag "a"
            liElement.appendChild(toDoElemnt); // colocando valores entre as tags li '<li>valor1</li>
            liElement.appendChild(linkElement);//colocando a tag a dentro do li
            listElement.appendChild(liElement); //colocando a tag li dentro da minha lista de elementos
        }
    }
    //-----hamando a função e mostrando minha lista
    showList();
    //---------------------------------------------

    //criando a função de adicionar um valor a lista
    function addThing(){
        var tarefa = inputElement.value; //pegando valor do input
        inputElement.value = ''; //limpando o input
        listToDo.push(tarefa); //adicionando o valor do input na array de lista
        showList(); //exibindo minha lista
        saveStorage(); //salvando a alteração no storage
    }
    //------------------------------------------

//criando a função de deletar um valor da lista
    function delThing(pos){
        listToDo.splice(pos,1); //deletando um valor 
        //escolho a lista, e dentro do splice coloco a variavel que sera deletada e quantos valores serap deletados
        showList(); //exibindo minha lista
        saveStorage(); //salvando a alteração no storage
    }
//---------------------------------------------

//criando função de salvar em storage
    function saveStorage(){
        localStorage.setItem('list_toDo', JSON.stringify(listToDo)); //salvando no storage
        //escolho o nome da lista e o que sera salvo
        //deve se colocar em JSON para transformar um array em string
    }

    buttonElement.onclick = (addThing) //função do botão adicionar