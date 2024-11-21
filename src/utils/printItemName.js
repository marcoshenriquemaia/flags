export const printItemName = (item, containerQuery) => {
  const $itemContainer = document.querySelector(containerQuery)
  
  const $name = document.createElement('span')
  $name.textContent = item.name
  $name.classList.add('callback')

  $itemContainer.append($name)
}