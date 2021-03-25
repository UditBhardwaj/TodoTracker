import Button from './Button'
const Header = (props) => {

  return (
    <header className='header'>
       <h1>{props.title}</h1>
       <Button text = {props.showAdd ? 'Close' : 'Add' } color = 'green' onClick = {props.clickHello}/>
    </header>
  )
}

export default Header
