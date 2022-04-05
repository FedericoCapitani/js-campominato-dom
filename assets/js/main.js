/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */
let score_easy = 0;
let score_medium = 0;
let score_hard = 0;
let bool = true;

    let gioca = document.getElementById('gioca');
    gioca.addEventListener('click', function(){

    let difficolta = document.getElementById('difficolta').value
    if(difficolta == 1){

    // crea array numeri celle bombe
    let arr = [];
    while(arr.length < 16){
        let r = Math.floor(Math.random() * 100) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);
    // celle difficoltà 1
    function generateGrid(selector, tag_name, class_name){
        const cellsElement = document.querySelector(selector)
        cellsElement.innerHTML = ''
    
        for (let i = 1; i <= 100; i++){
            const cellItem = document.createElement(tag_name);
            // assegna un oggetto "bomb" alle caselle generate dall'array 
            for(let j = 0; j < arr.length; j++){
                // assegna un oggetto "bomb" alle caselle generate dall'array 
                if( i == arr[j]){
                    cellItem.insertAdjacentHTML('beforeend', '<div class = "bomb"></div>')
                }
            }
            cellItem.append(`${i}`)
            cellItem.classList.add(class_name);
            cellsElement.append(cellItem);
        }
    }
    
    generateGrid('.cells', 'div', 'cell_100');
    // sezioen selezione celle
    const cells  = document.querySelectorAll('.cell_100')

    for(let i = 0; i < cells.length; i++){
        const cell = cells[i];
        for(let j = 0; j < arr.length; j++){
            if(i + 1 == arr[j]){
                cell.addEventListener('click', function (){
                    this.classList.add('active_bomb')
                    score_easy -= 10;
                    bool = false;
                })
            }
        }
        cell.addEventListener('click', function (){
            console.log(this, i);
            this.classList.toggle('active')
            score_easy += 10;
            console.log(`punteggio: ${score_easy}`);
        })
    }
    }else if (difficolta == 2){
    
    // crea array numeri celle bombe
    var arr = [];
    while(arr.length < 16){
        var r = Math.floor(Math.random() * 81) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);
    // celle difficoltà 2
    function generateGrid(selector, tag_name, class_name){
        const cellsElement = document.querySelector(selector)
        cellsElement.innerHTML = ''
    
        for (let i = 1; i <= 81; i++){
            const cellItem = document.createElement(tag_name);
            // assegna un oggetto "bomb" alle caselle generate dall'array 
            for(let j = 0; j < arr.length; j++){
                // assegna un oggetto "bomb" alle caselle generate dall'array 
                if( i == arr[j]){
                    cellItem.insertAdjacentHTML('beforeend', '<div class = "bomb"></div>')
                }
            }
            cellItem.append(`${i}`)
            cellItem.classList.add(class_name);
            cellsElement.append(cellItem);
        }
    }
    
    generateGrid('.cells', 'div', 'cell_81');
    // sezione selezione celle
    const cells  = document.querySelectorAll('.cell_81')

    for(let i = 0; i < cells.length; i++){
        const cell = cells[i];
            for(let j = 0; j < arr.length; j++){
                if(i + 1 == arr[j]){
                    cell.addEventListener('click', function (){
                        this.classList.add('active_bomb')
                        score_medium -= 20;
                        bool = false;
                    })
                }
            }
            cell.addEventListener('click', function (){
                console.log(this, i);
                this.classList.toggle('active')
                score_medium += 20;
                console.log(`punteggio: ${score_medium}`);
            })
        }

    }else if (difficolta == 3){
    
    // crea array numeri celle bombe
    var arr = [];
    while(arr.length < 16){
       var r = Math.floor(Math.random() * 49) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);
    // celle difficoltà 3
    function generateGrid(selector, tag_name, class_name){
        const cellsElement = document.querySelector(selector)
        cellsElement.innerHTML = ''
    
        for (let i = 1; i <= 49; i++){
            const cellItem = document.createElement(tag_name);
            for(let j = 0; j < arr.length; j++){
                // assegna un oggetto "bomb" alle caselle generate dall'array 
                if( i == arr[j]){
                    cellItem.insertAdjacentHTML('beforeend', '<div class = "bomb"></div>')
                }
            }
            cellItem.append(`${i}`)
            cellItem.classList.add(class_name);
            cellsElement.append(cellItem);
        }
    }
    
    generateGrid('.cells', 'div', 'cell_49');
    // funzione selezione celle
    const cells  = document.querySelectorAll('.cell_49')

    for(let i = 0; i < cells.length; i++){
        const cell = cells[i];
        for(let j = 0; j < arr.length; j++){
            if(i + 1 == arr[j]){
                cell.addEventListener('click', function (){
                    this.classList.add('active_bomb')
                    score_hard -= 30;
                    bool = false;
                })
            }
        }
        cell.addEventListener('click', function (){
            console.log(this, i);
            this.classList.toggle('active')
            score_hard += 30;
            console.log(`punteggio: ${score_hard}`);
        })
    }
    }
});




