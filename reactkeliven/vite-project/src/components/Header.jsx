import Title from './Title'

function Header() {
    return (
        <>
            <header className="header">
                <Title title="A Simple Dog Page"/>
                <nav className="navBar">
                    <h4 onClick={() => window.location.replace("/#i1")}>Rottweiler</h4>
                    <h4 onClick={() => window.location.replace("/#i2")}>Pug</h4>
                    <h4 onClick={() => window.location.replace("/#i3")}>Pastor Alemão</h4>
                </nav>
            </header>
        </>
    )
}

export default Header