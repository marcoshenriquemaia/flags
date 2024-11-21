export const printMessage = (type) => {
  const $flagContainer = document.querySelector('.flag-container')
  
  const $message = document.createElement('span')
  $message.textContent = type === 'hit' ? 'Acertou!' : 'Errou'
  $message.classList.add('callback')
  $message.classList.add(type === 'hit' ? 'right' : 'wrong')

  $flagContainer.append($message)
}
