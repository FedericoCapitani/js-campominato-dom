/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

let gioca = document.getElementById('gioca');
gioca.addEventListener('click', function(){

    let difficolta = document.getElementById('difficolta').value
    console.log(difficolta);
    if(difficolta == 1){
    // celle difficoltà 1
    function generateGrid(selector, tag_name, class_name){
        const cellsElement = document.querySelector(selector)
        cellsElement.innerHTML = ''
    
        for (let i = 1; i <= 100; i++){
            const cellItem = document.createElement(tag_name);
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

        cell.addEventListener('click', function (){
            console.log(this, i);
            this.classList.toggle('active')
        })
    }
    }else if (difficolta == 2){
    // celle difficoltà 2
    function generateGrid(selector, tag_name, class_name){
        const cellsElement = document.querySelector(selector)
        cellsElement.innerHTML = ''
    
        for (let i = 1; i <= 81; i++){
            const cellItem = document.createElement(tag_name);
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

        cell.addEventListener('click', function (){
            console.log(this, i);
            this.classList.toggle('active')
        })
    }

    }else if (difficolta == 3){
    // celle difficoltà 3
    function generateGrid(selector, tag_name, class_name){
        const cellsElement = document.querySelector(selector)
        cellsElement.innerHTML = ''
    
        for (let i = 1; i <= 49; i++){
            const cellItem = document.createElement(tag_name);
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

        cell.addEventListener('click', function (){
            console.log(this, i);
            this.classList.toggle('active')
        })
    }
    }
});


