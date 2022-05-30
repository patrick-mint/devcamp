function Logout() {

  const token = localStorage.getItem("token");

  if (token) {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  return (

    <h1>we are logging you out...</h1>
  )
}

export default Logout;