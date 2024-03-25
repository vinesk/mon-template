import './index.css'

export default function header() {
  const header = document.createElement('header')
  header.classList.add('header')
  header.textContent = 'header'

  return header
}
