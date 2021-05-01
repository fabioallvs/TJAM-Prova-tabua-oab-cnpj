$('input[type=radio]').change(function () {
    if (this.value == 'soma') {
        document.getElementById('container').innerText = ''
        soma();
    } else if (this.value == 'sub') {
        document.getElementById('container').innerText = ''
        sub();
    } else if (this.value == 'multi') {
        document.getElementById('container').innerText = ''
        multi();
    } else if (this.value == 'div') {
        document.getElementById('container').innerText = ''
        division();
    } else {
        alert('Escolha alguma opção')
    }
});


function soma() {
    for (let i = 1; i < parseInt($('#val').val()) + 1; i++) {
        var div = document.createElement('div');
        var leading = document.createElement('h1');
        leading.innerHTML = i;
        div.appendChild(leading);
        //Criou a lista
        var Lista = document.createElement('ul');
        //For que gera a tabela
        for (let index = 1; index < 11; index++) {
            //Criou o paragrafo que demonstra os valores
            var valor = document.createElement('p');
            //Criou o LI que representa um item na lista
            var itemLista = document.createElement('li');
            //Definiu o valor do paragrafo que representa um item da tabela
            valor.innerHTML = `${i} + ${index} = ${i + index}`;
            //Adicionou o paragrafo ao LI
            itemLista.appendChild(valor);
            //Adicionou o LI ao Ul
            Lista.appendChild(itemLista);
        }
        var colors = ['#EA56EF', '#FDCABC', '#3A6F72', '#F31003', '#CE88B2', '#ADCEFC'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        div.style.backgroundColor = random_color;
        div.appendChild(Lista);
        //Adicionou o UL ao DIv
        document.getElementById('container').appendChild(div);
    }
}
function sub() {
    fixo = parseInt($('#val').val());
    for (let i = 1; i < fixo + 1; i++) {
        var div = document.createElement('div');
        var leading = document.createElement('h1');
        leading.innerHTML = i;
        div.appendChild(leading);
        //Criou a lista
        var Lista = document.createElement('ul');
        //For que gera a tabela
        for (let index = i; index < i + 10; index++) {
            //Criou o paragrafo que demonstra os valores
            var valor = document.createElement('p');
            //Criou o LI que representa um item na lista
            var itemLista = document.createElement('li');
            //Definiu o valor do paragrafo que representa um item da tabela
            valor.innerHTML = `${index} - ${i} = ${index - i}`;
            //Adicionou o paragrafo ao LI
            itemLista.appendChild(valor);
            //Adicionou o LI ao Ul
            Lista.appendChild(itemLista);
        }
        var colors = ['#EA56EF', '#FDCABC', '#3A6F72', '#F31003', '#CE88B2', '#ADCEFC'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        div.style.backgroundColor = random_color;
        div.appendChild(Lista);
        //Adicionou o UL ao DIv
        document.getElementById('container').appendChild(div);
    }
}
function multi() {
    for (let i = 1; i < parseInt($('#val').val()) + 1; i++) {
        var div = document.createElement('div');
        var leading = document.createElement('h1');
        leading.innerHTML = i;
        div.appendChild(leading);
        //Criou a lista
        var Lista = document.createElement('ul');
        //For que gera a tabela
        for (let index = 1; index < 11; index++) {
            //Criou o paragrafo que demonstra os valores
            var valor = document.createElement('p');
            //Criou o LI que representa um item na lista
            var itemLista = document.createElement('li');
            //Definiu o valor do paragrafo que representa um item da tabela
            valor.innerHTML = `${i} x ${index} = ${i * index}`;
            //Adicionou o paragrafo ao LI
            itemLista.appendChild(valor);
            //Adicionou o LI ao Ul
            Lista.appendChild(itemLista);
        }
        var colors = ['#EA56EF', '#FDCABC', '#3A6F72', '#F31003', '#CE88B2', '#ADCEFC'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        div.style.backgroundColor = random_color;
        div.appendChild(Lista);
        //Adicionou o UL ao DIv
        document.getElementById('container').appendChild(div);
    }
}
function division() {
    fixo = parseInt($('#val').val());
    for (let i = 1; i < fixo + 1; i++) {
        var div = document.createElement('div');
        var leading = document.createElement('h1');
        leading.innerHTML = i;
        div.appendChild(leading);
        //Criou a lista
        var Lista = document.createElement('ul');

        //For que gera a tabela
        for (let index = 0; index < 10; index++) {

            //Criou o paragrafo que demonstra os valores
            var valor = document.createElement('p');
            //Criou o LI que representa um item na lista
            var itemLista = document.createElement('li');
            //Definiu o valor do paragrafo que representa um item da tabela
            valor.innerHTML = `${index * i} - ${i} = ${(index * i) / i}`;
            //Adicionou o paragrafo ao LI
            itemLista.appendChild(valor);

            //Adicionou o LI ao Ul
            Lista.appendChild(itemLista);
        }
        var colors = ['#EA56EF', '#FDCABC', '#3A6F72', '#F31003', '#CE88B2', '#ADCEFC'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        div.style.backgroundColor = random_color;
        div.appendChild(Lista);
        //Adicionou o UL ao DIv
        document.getElementById('container').appendChild(div);
    }
}

