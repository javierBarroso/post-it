let create = document.querySelector('.create')
let input = document.getElementById('note-input')
let notes_container = document.querySelector('.notes')


create.addEventListener('click', () => {
    input.style.display = 'block'
    input.focus()
})

let colores = ['#FFEB3B', '#FFC0CB', '#4CAF50', '#FF9800', '#2196F3', ' #9C27B0']
let i = 0

input.addEventListener('keydown', (e) => {
    let note
    if(e.key === 'Enter'){
        note = document.createElement('div')
        note.classList.add('note')
        note.innerHTML = input.value + '<i class="fa-solid fa-trash"></i>'
        if(i < colores.length - 1){
            note.style.background = colores[i]
            ++i
        }else{
            i = 0
        }

        input.style.display = 'none'
        input.value = ''

        notes_container.appendChild(note)
        note.children[0].addEventListener('click', () => {
            note.remove()
        })


    }
})