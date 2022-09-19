import React from 'react'

function Login() {
   return (<div>
      <h1>LOGIN</h1>
      <LoginForm />
   </div>);
}
function LoginForm() {
   return (
      <form>
         <div>
            <input placeholder={'Login'} />
         </div>
         <div>
            <input placeholder={'Password'} />
         </div>
         <div>
            <input type={'checkbox'} /> remember me
         </div>
         <div>
            <button>Login</button>
         </div>
      </form>);
}

export default Login;