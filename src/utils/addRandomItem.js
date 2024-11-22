import { genRandomNumbers } from "./randomNumber.js"
import { flagData } from "../data.js";

export const addRandomItem = (items) => {
  if (flagData.length === items.length) return
  
  const randomNumber = genRandomNumbers(flagData.length)

  const newItem = flagData[randomNumber]

  if (items.find(item => item.name === newItem.name)) return addRandomItem(items)

  !items.find(item => item.name === newItem.name) && items.push(newItem)

  return newItem
}
