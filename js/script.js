let create = document.querySelector('.create')
let input = document.getElementById('note-input')
let notes_container = document.querySelector('.notes')


create.addEventListener('click', () => {
    input.style.display = 'block'
    input.focus()
})

let colores = ['#FFEB3B', '#FFC0CB', '#4CAF50', '#FF9800', '#2196F3', '#9C27B0']
let randomColor = ['#c2ff3d','#ff3de8','#3dc2ff','#c4e022','#bc83e6','#ebb328'];
let randomRotation = [5, -2, 8, -6, -2, 1];
let i = 0

function rotate(){
    return randomRotation[i];
}


function color(){

    let output = colores[i]
    
    i < (colores.length - 1) ? ++i : i = 0
    
    return output
    
}


input.addEventListener('keydown', (e) => {
    let note
    if(e.key === 'Enter'){
        note = document.createElement('div')
        note.classList.add('note')
        note.innerHTML = input.value + '<i class="fa-solid fa-trash"></i>'
        note.style = '--rotate: ' + rotate() + 'deg; background: ' + color() + ';'
        

        input.style.display = 'none'
        input.value = ''

        notes_container.appendChild(note)
        note.children[0].addEventListener('click', () => {
            note.remove()
        })


    }
})