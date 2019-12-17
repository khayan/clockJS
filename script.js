function carregar() {
    var saudacao = document.getElementById('saudacao');
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    
    // Recuperando a data, hora e minutos do sistema.
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();

    // Teste force horário:
    // hora = 22;

   // Inserção de ZERO para minutos menor do que 10.
    if (min < 10) {
        min = `0${min}`;
    }

    var hourColor;
    // Verificando período.
    if (hora >= 0 && hora < 12) {
        img.src = 'img/morning.jpg';
        saudacao.innerHTML = "Bom dia!";
        hourColor = 'rgb(81, 164, 241)';
        document.body.style.backgroundColor = hourColor;
        msg.style.color = hourColor;
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img/afternoon.jpg';
        saudacao.innerHTML = "Boa tarde!";
        hourColor = 'rgb(250, 93, 36)';
        document.body.style.backgroundColor = hourColor;
        msg.style.color = hourColor;
    } else {
        img.src = 'img/night.jpg';
        saudacao.innerHTML = "Boa noite!";
        hourColor = 'rgb(14, 40, 90)';
        document.body.style.backgroundColor = hourColor;
        msg.style.color = hourColor;
    }
    msg.innerHTML = `Agora são ${hora}:${min}`;
}

