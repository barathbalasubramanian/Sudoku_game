

let numselected = null
let tileselected = null

let errors = 0

let board = [
    '--74916-5',
    '2---6-3-9',
    '-----7-1-',
    '-586----4',
    '--3----9-',
    '--62--187',
    '9-4-7---2',
    '67-83----',
    '81--45---'
]

let solution = [
    '387491625',
    '241568379',
    '569327418',
    '758619234',
    '123784596',
    '496253187',
    '934176852',
    '675832941',
    '812945763'
]

window.onload = function () {
    setGame()
}

function setGame () {

    for ( let i = 0 ; i <= 9 ; i++) {
        let numbers = document.createElement ('div')
        numbers.id = i
        numbers.innerText = i
        numbers.addEventListener('click', selectedNumber)
        numbers.classList.add('numbers')
        document.getElementById('number').appendChild(numbers)
    }

    for ( let r = 0 ; r <= 9 ; r++ ) {
        for ( let c = 0 ; c <= 8 ; c++) {

            let tiles = document.createElement('div')
            tiles.id = r.toString() +'-'+ c.toString()

            if (board[r][c] != '-') 
            {
            tiles.innerText = board[r][c]
            }

            if (r == 5 || r == 2) {
                tiles.classList.add('border-row')
            }
            if (c == 3 || c == 6) {
                tiles.classList.add('border-column')
            }
        
            tiles.addEventListener('click',selectedTile)
            tiles.classList.add('box')
            document.getElementById('tile').appendChild(tiles)
        }
    }
}

function selectedNumber() {

    if (numselected != null) {
        numselected.classList.remove('selected-number')
    }
    numselected = this
    numselected.classList.add('selected-number')
    
}

function selectedTile() {

    if (numselected) {
        if ( this.innerText != '') {
            return
        }

        // '0-1'
        let rclist = this.id.split('-') // ['0','0']
        let r = rclist[0]
        let c = rclist[1]

        if (solution[r][c] == numselected.id) 
        {
        this.innerText = numselected.id
        this.classList.add('new-tile')
        }
        else {
            console.log('hii')
            errors = errors + 1
            document.getElementById('mistakes').innerHTML = 'Mistakes' + '  ' + errors
            //this.classList.add('mistakes')

        }
    }
}
