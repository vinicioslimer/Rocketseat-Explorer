let option;
let items = [];

while(option != 3) {

    option = Number(prompt(`
        Escolha uma opção:

        1 - Cadastrar item 
        2 - Ver itens cadastrados
        3 - Sair
        `));    

    switch(option) {
        case 1:
            const item = prompt("Digite o nome do item:");
            items.push(item);
            break;
        case 2:
            if(items.length === 0) {
                alert("Nenhum item cadastrado!");
            } else {
            alert(items);
            }
            break;
        case 3:
            alert("Até mais!");
            break;
        default:
            alert("Opção inválida!");
    }
}