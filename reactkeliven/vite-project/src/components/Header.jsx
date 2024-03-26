import { useState } from "react"

function Header() {
    const [clicked, setClick] = useState(false);
    const click = () => {setClick(!clicked)};
    
    return (
        <>
            <header className="header">
                {!clicked ? (
                    <h1 onClick={click}>A Simple Dog Page</h1>
                ): (
                    <h1 onClick={click}>For dog lovers only</h1>
                )}
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