import React from 'react';

const Login = () => {
 return ( 
  <div>
   <label htmlFor="">
    Podaj login <input type="text" />
   </label>
   <label htmlFor="">
    Podaj hasło <input type="text" />
   </label>
   <button>Zaloguj</button>
  </div>
  );
}
 
export default Login;