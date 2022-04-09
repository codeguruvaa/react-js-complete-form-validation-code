import React,{useState} from 'react';

function FrmValidationTwoWithError() {

  var [data,setData] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  var {username,email,password,confirmPassword} = data;

  var changeHandler = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }

  var submitHandler = e =>{
    e.preventDefault();
    // console.log(data);
    if(username.length <= 5){
        alert("user must be at least 5charts");
    }else if(password != confirmPassword){
        alert("passwords are not matching")
    }
  }

  return (
    <div>

      <form onSubmit={submitHandler}>
        <input type="text" name='username' value={username} onChange={changeHandler} placeholder="username" /> <br />
        <input type="email" name='email' value={email} onChange={changeHandler} placeholder="email" /> <br />
        <input type="password" name='password' value={password} onChange={changeHandler} placeholder="password" /> <br />
        <input type="password" name='confirmPassword' value={confirmPassword} onChange={changeHandler} placeholder="confirmPassword" /> <br />
        <button name='submit'>
          Submit
        </button>
      </form>

    </div>
  );
}

export default FrmValidationTwoWithError;