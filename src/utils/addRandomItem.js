import { genRandomNumbers } from "./randomNumber.js"
import { flagData } from "../data.js";

export const addRandomItem = (items) => {
  const randomNumber = genRandomNumbers(flagData.length)

  const newItem = flagData[randomNumber]

  !items.find(item => item.name === newItem.name) && items.push(newItem)

  return newItem
}
