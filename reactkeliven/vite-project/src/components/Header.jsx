import Title from './Title'
import { useNavigate } from 'react-router-dom'

function Header() {
    const goTo = useNavigate();
    const handleClick = () => {
        goTo('/test');
    }
    return (
        <>
            <header className="header">
                <Title title="A Simple Dog Page"/>
                <nav className="navBar">
                    <h4 onClick={() => window.location.replace("/#i1")}>Rottweiler</h4>
                    <h4 onClick={() => window.location.replace("/#i2")}>Pug</h4>
                    <h4 onClick={() => window.location.replace("/#i3")}>Pastor Alemão</h4>
                    <h4 onClick={handleClick}>Teste</h4>
                </nav>
            </header>
        </>
    )
}

export default Header