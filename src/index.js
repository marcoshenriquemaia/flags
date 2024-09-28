import { data } from "./data.js";
import { genRandomNumbers } from "./utils/randomNumber.js";

const $flagContainer = document.querySelector('.flag-container')
const $counter = document.querySelector('.counter-text')

const flags = []
let hitFlags = []

let currentFlag;
let lastFlag;

const events = {
  'Space': (e) => {
    printFlagName()
  },
  'KeyA': () => {
    printMessage('miss')
    lastFlag = currentFlag
    hitFlags = hitFlags.filter(flag => flag.name !== currentFlag.name)
    setTimeout(initGame, 1000)
  },
  'KeyD': () => {
    if (!hitFlags.find(flag => flag.name === currentFlag.name)) {
      addRandomFlag()
      addRandomFlag()
    }
    hitFlags.push(currentFlag)
    printMessage('hit')
    lastFlag = currentFlag
    setTimeout(initGame, 1000)
  }
}

function printFlagName(){
  const $flagName = document.createElement('span')
  $flagName.textContent = currentFlag.name
  $flagName.classList.add('callback')

  $flagContainer.append($flagName)
}

const printMessage = (type) => {
  const $message = document.createElement('span')
  $message.textContent = type === 'hit' ? 'Acertou!' : 'Errou'
  $message.classList.add('callback')
  $message.classList.add(type === 'hit' ? 'right' : 'wrong')

  $flagContainer.append($message)
}

const addRandomFlag = () => {
  const randomNumber = genRandomNumbers(data.length)

  const newFlag = data[randomNumber]

  !flags.find(flag => flag.name === newFlag.name) && flags.push(newFlag)

  return newFlag
}

const getRandomAbleFlag = (retry = 0) => {
  const randomNumber = genRandomNumbers(flags.length)

  const currentFlag = flags[randomNumber]

  const flagAlreadyHit = hitFlags.find(flag => {
    return flag.name === currentFlag.name
  })

  const repeat = hitFlags.length && lastFlag?.name === currentFlag.name

  if ((!!flagAlreadyHit && retry < flags.length) || repeat) {
    console.log('retentou')
    return getRandomAbleFlag(retry + 1)
  } else {
    return currentFlag
  }
}

const printImage = ({ img }) => {
  const $image = document.createElement('img')
  $image.classList.add('flag')
  $image.src = img

  $flagContainer.append($image)
}

const initGame = () => {
  $flagContainer.innerHTML = ''

  const flag = getRandomAbleFlag()

  currentFlag = flag

  printImage(flag)

  $counter.textContent = `${flags.length}/${data.length}`
}

addRandomFlag()
initGame()

document.body.addEventListener('keypress', (e) => {
  console.log(e)
  events[e.code]()
})