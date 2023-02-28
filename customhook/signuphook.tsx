import React,{useState} from 'react'

export default function signuphook() {


  const [changing, setchanging] = useState(false)

  const signuphandler = () => {


setchanging(true)
console.log(changing);

  }

    
  return {

changing,
setchanging,
signuphandler

  }
    
}
