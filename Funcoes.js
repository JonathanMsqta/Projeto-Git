function feliz(){
    var altura    = 1.45
    var dinheiro  = 9;
    var idade     = 15;

    altura   = document.getElementById('altura').value;
    dinheiro = document.getElementById('dinheiro').value;
    idade    = document.getElementById('idade').value;

    if ((altura<1.45) && (dinheiro>= 9) && (idade>= 15)){
        alert ('Altura insuficiente, entrada não permitida!') //Não tem altura para entrar.
    }   
    
    if ((dinheiro<9) && (idade>=15) && (altura>=1.45)){
        alert ('Dinheiro insuficiente, entrada não permitida!') //Não tem dinheiro para entrar.
    }
    
    if ((idade<15) && (altura>=1.45) && (dinheiro>=9)){
        alert ('Idade insuficiente, entrada não permitida') //Não tem idade para entrar.
    }

    if ((altura>=1.45) && (dinheiro>=9) && (idade>=15)) {
        alert ('Todas as exigências atendidas, aprecie com moderação!') //Tudo certo para entrar.

    }

    if ((altura<1.45) && (dinheiro<9) && (idade<15)) {
        alert ('Nenhuma exigência atendida, não tem altura, dinheiro e idade. Volte assim que possível...') //Não entra por nada.
    }

    if ((altura<1.45) && (dinheiro<9) && (idade>=15)) {
        alert ('Altura e dinheiro insuficientes, entrada não permitida!') //Não tem altura e dinheiro.
    }

    if ((altura<1.45) && (idade<15) && (dinheiro>=9)) {
        alert ('Altura e idade insuficientes, entrada não permitida!') //Não tem altura e idade.
    }

    if ((altura>=1.45) && (idade<15) && (dinheiro<9)) {
        alert ('Dinheiro e idade insuficientes, entrada não permitida') //Não tem dinheiro e idade.
    }
}