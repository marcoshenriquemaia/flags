export const printImage = ({ img }, containerQuery) => {
  const $container = document.querySelector(containerQuery)
  
  const $image = document.createElement('img')
  $image.classList.add('flag')
  $image.src = img

  $container.append($image)
}