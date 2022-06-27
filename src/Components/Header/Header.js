function Header() {
    return ( <div className="header">
        <div className="headerLogo">image</div>
        <div className="headerSearch"><input type="search"></input>
        <button>search</button>
        </div>
        <div className="headerEnd"><button>Logout</button></div>
    </div> );
}

export default Header;