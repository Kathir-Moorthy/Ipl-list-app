function Header(props) {
    return (
      <>
        <h1 className="text-3xl font-medium">Hello {props.name}</h1>
        <p className="text-lg">Manage your team players efficiently!</p>
      </>
    );
  }
  
  export default Header;  