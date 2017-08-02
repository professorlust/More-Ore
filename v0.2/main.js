// Helper Functions
let s = ((el) => {return document.querySelector(el)})

let Game = {}

Game.Launch = () => {
  console.log('Game loaded and launched')

  Game.ores = 0
  Game.refinedOres = 0
  Game.wood = 0

  Game.oresPerClick = 1
  Game.woodPerClick = 0

  Game.selectedZone = 'mine'
  Game.priceIncrease = 1.15

  Game.earn = (amt, type) => {
    Game[type] += amt
  }

  Game.spend = (amt, type) => {
    Game[type] -= amt
  }

  Game.oreClick = () => {
    Game.calculateClick()
    Game.earn(Game.oresPerClick, 'ores')
    Game.rebuildInventory()
  }

  s('#ore').onclick = Game.oreClick

  Game.calculateClick = () => {
    let amount = 0
    amount += Game.oresPerClicks
    // calculate the upgrdes and update Game.oresPerClick
    Game.oresPerClicks = amount
  }

  Game.rebuildInventory = () => {
    s('#inventory-ore').innerHTML = 'Ore: ' + Game.ores
    s('#inventory-refined').innerHTML = 'Refined: ' + Game.refinedOres
    s('#inventory-wood').innerHTML = 'Wood: ' + Game.wood
  }

  Game.rebuildInventory()

  Game.rebuildTabs = () => {
    // no idea for now
  }

  Game.items = []
  Game.item = function(itemName, itemDesc, fillerText, price, priceMaterial) {
    this.name = itemName
    this.desc = itemDesc
    this.price = price
    this.priceMaterial = priceMaterial
    this.owned = 0

    this.buy = () => {
      if (Game[this.priceMaterial] >= this.price) {
        console.log('price increase:', Math.floor(Math.pow(Game.priceIncrease, this.owned)))
        Game.spend(this.price, this.priceMaterial)
        this.price += Math.floor(Math.pow(Game.priceIncrease, this.owned))
        this.owned++
        Game.rebuildInventory()
        Game.rebuildStore()
      }
    }

    Game.items.push(this)
  }

  new Game.item('Axe', 'Allows for the chopping of wood','Sharp and sturdy', 20, 'ores' )

  Game.rebuildStore = () => {
    console.log('rebuilding store')
    let items = ''
    for (i = 0; i < Game.items.length; i++) {
      let item = Game.items[i]
      items += `
        <div class='store-button' id='store-button${i}' onclick='Game.items[${i}].buy()'>
          <h1 class='item-name'>${item.name}</h1>
          <p class='item-price'>cost: ${item.price} ${item.priceMaterial} <br> owned: ${item.owned}</p>
        </div>
      `
    }

    items += `
      <div id="store-spacer"></div>
    `
    s('#store-content').innerHTML = items
  }

  Game.rebuildStore()

}

window.onload = () => {Game.Launch()}
