function Nav() {
    return (
        <>
            <nav className="container">
                <div className='logo'>
                    <img src="nike.png" style={{ width: 70 }} alt="logo" className="src" />
                </div>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
                <button>Login</button>
            </nav>
        </>
    )
}
export default Nav