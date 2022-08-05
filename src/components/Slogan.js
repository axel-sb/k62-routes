/* const slogan =
    'Art for people who know the value of everything and the price of nothing' */

const Slogan = () => {
  const slogan =
    'Art for people who know the value of everything and the price of nothing'
  const sloganAnim = document.querySelector('.type-wrap')
  sloganAnim.addEventListener('animationend', () => {
    const h2 = document.createElement('h2')
    const text = { slogan }
    const textNode = document.createTextNode(text)
    h2.append(textNode)
    sloganAnim.replaceWith(h2)
  })

  return { Slogan }
}

export default Slogan
