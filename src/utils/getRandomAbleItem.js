import { genRandomNumbers } from "./randomNumber.js"

export const getRandomAbleItem = (retry = 0, hitItems, lastItem, items) => {
  const randomNumber = genRandomNumbers(items.length)

  const currentItem = items[randomNumber]

  const itemAlreadyHit = hitItems.find(item => {
    return item.name === currentItem.name
  })

  const repeat = hitItems.length && lastItem?.name === currentItem.name

  if ((!!itemAlreadyHit && retry < items.length * 1.5) || repeat) {
    return getRandomAbleItem(retry + 1, hitItems, lastItem, items)
  } else {
    return currentItem
  }
}