document.addEventListener('DOMContentLoaded', () => {
    const userGrid = document.querySelector('.grid-user')
    const computerGrid = document.querySelector('.grid-computer')
    const displayGrid = document.querySelector('.grid-display')
    const ships = document.querySelectorAll('.ship')
    const sloop = document.querySelector('.sloop-container')
    const schooner = document.querySelector('.schooner-container')
    const brigantine = document.querySelector('.brigantine-container')
    const galleon = document.querySelector('.galleon-container')
    const fleut = document.querySelector('.fleut-container')
    const startButton = document.querySelector('#start')
    const rotateButton = document.querySelector('#rotate')
    const turnDisplay = document.querySelector('#whose-go')
    const infoDisplay = document.querySelector('#info')
    const singlePlayerButton = document.querySelector('#singlePlayerButton')
    const userSquares = []
    const computerSquares = []
    let isHorizontal = true
    let isGameOver = false
    let currentPlayer = 'user'
    const width = 10
    let gameMode = ""
    let playerNum = 0
    let ready = false
    let enemyReady = false
    let allShipsPlaced = false
    let shotFired = -1
  
    singlePlayerButton.addEventListener('click', startSinglePlayer)
   

  
    // Single Player
    function startSinglePlayer() {
      gameMode = "singlePlayer"
  
      generate(shipArray[0])
      generate(shipArray[1])
      generate(shipArray[2])
      generate(shipArray[3])
      generate(shipArray[4])
  
      startButton.addEventListener('click', playGameSingle)
    }
  
    //Create Board
    function createBoard(grid, squares) {
      for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div')
        square.dataset.id = i
        grid.appendChild(square)
        squares.push(square)
      }
    }
    createBoard(userGrid, userSquares)
    createBoard(computerGrid, computerSquares)
  
    //Ships
    const shipArray = [
      {
        name: 'sloop',
        directions: [
          [0, 1],
          [0, width]
        ]
      },
      {
        name: 'schooner',
        directions: [
          [0, 1, 2],
          [0, width, width*2]
        ]
      },
      {
        name: 'brigantine',
        directions: [
          [0, 1, 2],
          [0, width, width*2]
        ]
      },
      {
        name: 'galleon',
        directions: [
          [0, 1, 2, 3],
          [0, width, width*2, width*3]
        ]
      },
      {
        name: 'fleut',
        directions: [
          [0, 1, 2, 3, 4],
          [0, width, width*2, width*3, width*4]
        ]
      },
    ]
  
    //cpu placement
    function generate(ship) {
      let randomDirection = Math.floor(Math.random() * ship.directions.length)
      let current = ship.directions[randomDirection]
      if (randomDirection === 0) direction = 1
      if (randomDirection === 1) direction = 10
      let randomStart = Math.abs(Math.floor(Math.random() * computerSquares.length - (ship.directions[0].length * direction)))
  
      const isTaken = current.some(index => computerSquares[randomStart + index].classList.contains('taken'))
      const isAtRightEdge = current.some(index => (randomStart + index) % width === width - 1)
      const isAtLeftEdge = current.some(index => (randomStart + index) % width === 0)
  
      if (!isTaken && !isAtRightEdge && !isAtLeftEdge) current.forEach(index => computerSquares[randomStart + index].classList.add('taken', ship.name))
  
      else generate(ship)
    }
    
  
    //flipping the ships
    function rotate() {
      if (isHorizontal) {
        sloop.classList.toggle('sloop-container-vertical')
        schooner.classList.toggle('schooner-container-vertical')
        brigantine.classList.toggle('brigantine-container-vertical')
        galleon.classList.toggle('galleon-container-vertical')
        fleut.classList.toggle('fleut-container-vertical')
        isHorizontal = false
        return
      }
      if (!isHorizontal) {
        sloop.classList.toggle('sloop-container-vertical')
        schooner.classList.toggle('schooner-container-vertical')
        brigantine.classList.toggle('brigantine-container-vertical')
        galleon.classList.toggle('galleon-container-vertical')
        fleut.classList.toggle('fleut-container-vertical')
        isHorizontal = true

        return
      }
    }
    rotateButton.addEventListener('click', rotate)
  
    //moving the ship
    ships.forEach(ship => ship.addEventListener('dragstart', dragStart))
    userSquares.forEach(square => square.addEventListener('dragstart', dragStart))
    userSquares.forEach(square => square.addEventListener('dragover', dragOver))
    userSquares.forEach(square => square.addEventListener('dragenter', dragEnter))
    userSquares.forEach(square => square.addEventListener('dragleave', dragLeave))
    userSquares.forEach(square => square.addEventListener('drop', dragDrop))
    userSquares.forEach(square => square.addEventListener('dragend', dragEnd))
  
    let selectedShipNameWithIndex
    let draggedShip
    let draggedShipLength
  
    ships.forEach(ship => ship.addEventListener('mousedown', (e) => {
      selectedShipNameWithIndex = e.target.id
    }))
  
    function dragStart() {
      draggedShip = this
      draggedShipLength = this.childNodes.length
    }
  
    function dragOver(e) {
      e.preventDefault()
    }
  
    function dragEnter(e) {
      e.preventDefault()
    }
  
    function dragLeave() {
    }
  
    function dragDrop() {
      let shipNameWithLastId = draggedShip.lastChild.id
      let shipClass = shipNameWithLastId.slice(0, -2)
      let lastShipIndex = parseInt(shipNameWithLastId.substr(-1))
      let shipLastId = lastShipIndex + parseInt(this.dataset.id)
      const notAllowedHorizontal = [0,10,20,30,40,50,60,70,80,90,1,11,21,31,41,51,61,71,81,91,2,22,32,42,52,62,72,82,92,3,13,23,33,43,53,63,73,83,93]
      const notAllowedVertical = [99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60]
      let newNotAllowedHorizontal = notAllowedHorizontal.splice(0, 10 * lastShipIndex)
      let newNotAllowedVertical = notAllowedVertical.splice(0, 10 * lastShipIndex)
  
      selectedShipIndex = parseInt(selectedShipNameWithIndex.substr(-1))
  
      shipLastId = shipLastId - selectedShipIndex
  
  
      if (isHorizontal && !newNotAllowedHorizontal.includes(shipLastId)) {
        for (let i=0; i < draggedShipLength; i++) {
          userSquares[parseInt(this.dataset.id) - selectedShipIndex + i].classList.add('taken', shipClass)
        }

      } else if (!isHorizontal && !newNotAllowedVertical.includes(shipLastId)) {
        for (let i=0; i < draggedShipLength; i++) {
          userSquares[parseInt(this.dataset.id) - selectedShipIndex + width*i].classList.add('taken', shipClass)
        }
      } else return
  
      displayGrid.removeChild(draggedShip)
      if(!displayGrid.querySelector('.ship')) allShipsPlaced = true
    }
  
    function dragEnd() {
      
    }
  
  
    
    function playGameSingle() {
      if (isGameOver) return
      if (currentPlayer === 'user') {
        turnDisplay.innerHTML = 'Yer up!'
        computerSquares.forEach(square => square.addEventListener('click', function(e) {
          shotFired = square.dataset.id
          revealSquare(square.classList)
        }))
      }
      if (currentPlayer === 'enemy') {
        turnDisplay.innerHTML = 'Enemy is fighting back'
        setTimeout(enemyGo, 1000)
      }
    }
  
    let sloopCount = 0
    let schoonerCount = 0
    let brigantineCount = 0
    let galleonCount = 0
    let fleutCount = 0
  
    function revealSquare(classList) {
      const enemySquare = computerGrid.querySelector(`div[data-id='${shotFired}']`)
      const obj = Object.values(classList)
      if (!enemySquare.classList.contains('boom') && currentPlayer === 'user' && !isGameOver) {
        if (obj.includes('sloop')) sloopCount++
        if (obj.includes('schooner')) schoonerCount++
        if (obj.includes('brigantine')) brigantineCount++
        if (obj.includes('galleon')) galleonCount++
        if (obj.includes('fleut')) fleutCount++
      }
      if (obj.includes('taken')) {
        enemySquare.classList.add('boom')
      } else {
        enemySquare.classList.add('miss')
      }
      checkForWins()
      currentPlayer = 'enemy'
      if(gameMode === 'singlePlayer') playGameSingle()
    }
  
    let cpuSloopCount = 0
    let cpuSchoonerCount = 0
    let cpuBrigantineCount = 0
    let cpuGalleonCount = 0
    let cpuFleutCount = 0
  
  
    function enemyGo(square) {
      if (gameMode === 'singlePlayer') square = Math.floor(Math.random() * userSquares.length)
      if (!userSquares[square].classList.contains('boom')) {
        userSquares[square].classList.add('boom')
        if (userSquares[square].classList.contains('sloop')) cpuSloopCount++
        if (userSquares[square].classList.contains('schooner')) cpuSchoonerCount++
        if (userSquares[square].classList.contains('brigantine')) cpuBrigantineCount++
        if (userSquares[square].classList.contains('galleon')) cpuGalleonCount++
        if (userSquares[square].classList.contains('fleut')) cpuFleutCount++
        checkForWins()
      } else if (gameMode === 'singlePlayer') enemyGo()
      currentPlayer = 'user'
      turnDisplay.innerHTML = 'Yer Up!'
    }
  
    function checkForWins() {
      let enemy = 'Enemy Fleet'
      if (sloopCount === 2) {
        infoDisplay.innerHTML = `argggg ye sunk the ${enemy}'s sloop, matey!`
        sloopCount = 10
      }
      if (schoonerCount === 3) {
        infoDisplay.innerHTML = `argggg ye sunk the ${enemy}'s schooner, matey!`
        schoonerCount = 10
      }
      if (brigantineCount === 3) {
        infoDisplay.innerHTML = `argggg ye sunk the ${enemy}'s brigantine, matey!`
        brigantineCount = 10
      }
      if (galleonCount === 4) {
        infoDisplay.innerHTML = `argggg ye sunk the ${enemy}'s galleon, matey!`
        galleonCount = 10
      }
      if (fleutCount === 5) {
        infoDisplay.innerHTML = `argggg ye sunk the ${enemy}'s fleut, matey!`
        fleutCount = 10
      }
      if (cpuSloopCount === 2) {
        infoDisplay.innerHTML = `${enemy} got yer sloop!`
        cpusloopCount = 10
      }
      if (cpuSchoonerCount === 3) {
        infoDisplay.innerHTML = `${enemy} got yer schooner!`
        cpuschoonerCount = 10
      }
      if (cpuBrigantineCount === 3) {
        infoDisplay.innerHTML = `${enemy} got yer brigantine!`
        cpuBrigantineCount = 10
      }
      if (cpuGalleonCount === 4) {
        infoDisplay.innerHTML = `${enemy} got yer galleon!`
        cpuGalleonCount = 10
      }
      if (cpuFleutCount === 5) {
        infoDisplay.innerHTML = `${enemy} got yer fleut!`
        cpuFleutCount = 10
      }
  
      if ((sloopCount + schoonerCount + brigantineCount + galleonCount + fleutCount) === 50) {
        infoDisplay.innerHTML = "YOU WIN ALL THE RUMS..... ARRRRG"
        gameOver()
      }
      if ((cpuSloopCount + cpuSchoonerCount + cpuBrigantineCount + cpuGalleonCount + cpuFleutCount) === 50) {
        infoDisplay.innerHTML = `${enemy.toUpperCase()} WINS ALL YER RUM!`
        gameOver()
      }
    }
  
    function gameOver() {
      isGameOver = true
      startButton.removeEventListener('click', playGameSingle)
    }
  })