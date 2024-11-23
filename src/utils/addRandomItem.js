import { genRandomNumbers } from "./randomNumber.js"

export const addRandomItem = (items, data) => {
  if (data.length === items.length) return

  const randomNumber = genRandomNumbers(data.length)

  const newItem = data[randomNumber]

  if (items.find(item => item.name === newItem.name)) return addRandomItem(items)

  !items.find(item => item.name === newItem.name) && items.push(newItem)

  return newItem
}
