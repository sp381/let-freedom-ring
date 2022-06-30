import React, { useState } from 'react';

export default function SignUp() {
  // States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (name === '' || email === '' || password === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h3>User {name} successfully registered!!</h3>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
  
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h2>Please enter all the fields</h2>
</div>
);
};

return (
<div className="form">
<div>
{/* <h1>Let's Eat!</h1> */}
</div>

{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form>
{/* Labels and inputs for form data */}
<br />
<label className="label">Name</label>
<input onChange={handleName} className="input"
value={name} type="text" />
<br />
<br />
<label className="label">Email</label>
<input onChange={handleEmail} className="input"
value={email} type="email" />
<br />
<br />
<label className="label">Password</label>
<input onChange={handlePassword} className="input"
value={password} type="password" />
<br />
<br />
<button onClick={handleSubmit} className="btn" type="submit">
Let's Eat!
</button>
</form>
<br />
{/* Contact Form */}
{/* <br />
<br />
<form>
  <label>Contact</label>
  <br />
  <br />
  <label className="label">Name</label> <br />
  <input onChange={handleName} className="input"
  value={name} type="text" />
  <br />
  <br />

  <button onClick={handleSubmit} className="btn" type="submit">
  Submit
  </button>
</form> */}
</div>
);

}
