function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <select>
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="doctor">Doctor</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Register
