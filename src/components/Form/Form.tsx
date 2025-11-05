import { useState } from 'react'
import './Form.scss'




export const Form = (props: { createNewToDo: Function }) => {

  const [ text, setText ] = useState<string>('') // text-перменная состояния, useState-хранилище сотсояния и управлениея им

  


  const formSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault()
    if(text){
      props.createNewToDo(text)
      setText('')
    }
  
  };


 


  return (

    <div className="form-wrapper">
          <form action="#" onSubmit={ formSubmit }>
              <label>
                  <input type="text" onChange={ (evt) => setText(evt.target.value) }  value={text} />
                  <button></button>
              </label>
          </form>
      </div>

  )
}