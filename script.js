 let countCubics = 2 * 2;
 let arrayCubics = [];

 for (let i = 0; i < countCubics / 2; i++) {
     let cubic = {
         red: Math.round(Math.random() * 255),
         green: Math.round(Math.random() * 255),
         blue: Math.round(Math.random() * 255),
         view: false
     }
     arrayCubics.push(cubic);
 }

arrayCubics = [...arrayCubics, ...arrayCubics];

console.log(arrayCubics);
function renderCubics(arrayCubics) {
    arrayCubics.map((cubic, index) => {
        if (!document.getElementById('cubic_' + index)) {
        let div = document.createElement('div');
        div.id = 'cubic_' + index;
        div.className = 'cubic';
        div.onclick = event => {cubicClick(event);}
        document.getElementById('cubics').append(div);
        }
        renderCubics(cubic, index);
    });
}

function renderCubic(cubic, index) {
    if (cubic.view) {
        document.getElementById('cubic_' + cubic.id)
        style.backgroundColor = 'rgb(' + cubic.red + ',' + cubic.green + ',' + cubic.blue + ')';
    }
}

function cubicClick(e) {
    let cubicId = Number(event.target.id.slice(6));
    arrayCubics.map((cubic, index) => {
        if (index === cubicId) {
           cubic.view = true;
        }
    });
    renderCubics(arrayCubics)
}