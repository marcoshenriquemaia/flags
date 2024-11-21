import { addRandomItem } from "../utils/addRandomItem.js";
import { getRandomAbleItem } from "../utils/getRandomAbleItem.js";
import { printItemName } from "../utils/printItemName.js";
import { printImage } from "../utils/printImage.js";
import { printMessage } from "../utils/printMessage.js";

export const trainingMode = (data, containerQuery) => {
  const $container = document.querySelector(containerQuery)
  const $counter = document.querySelector('.counter-text')

  const items = []
  let hitItems = []

  let currentItem;
  let lastItem;

  const events = {
    'Space': (e) => {
      printItemName(currentItem, containerQuery)
    },
    'KeyA': () => {
      printMessage('miss')
      lastItem = currentItem
      hitItems = hitItems.filter(item => item.name !== currentItem.name)
      setTimeout(initGame, 1000)
    },
    'KeyD': () => {
      if (!hitItems.find(item => item.name === currentItem.name)) {
        addRandomItem(items)
        addRandomItem(items)
      }
      hitItems.push(currentItem)
      printMessage('hit')
      lastItem = currentItem
      setTimeout(initGame, 1000)
    }
  }

  const initGame = () => {
    $container.innerHTML = ''

    const item = getRandomAbleItem(0, hitItems, lastItem, items)

    currentItem = item

    printImage(item, '.flag-container')

    $counter.textContent = `${items.length}/${data.length}`
  }

  addRandomItem(items)
  initGame()

  document.body.addEventListener('keypress', (e) => {
    console.log(e)
    events[e.code]()
  })
}