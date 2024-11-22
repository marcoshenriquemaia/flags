import { genRandomNumbers } from "./randomNumber.js"

export const getRandomAbleItem = (hitItems, items, lastItem) => {
  const notHitItems = items.filter((item) => !hitItems.some((hItem) => hItem.name === item.name))

  const returnHitItems = Math.random() > .9 && !!hitItems.length

  const randomNumber = genRandomNumbers(returnHitItems ? hitItems.length : notHitItems.length)

  const currentItem = returnHitItems ? hitItems[randomNumber] : notHitItems[randomNumber]

  if (lastItem?.name === currentItem?.name && items.length > 1) return getRandomAbleItem(hitItems, items, lastItem)

  return currentItem
}