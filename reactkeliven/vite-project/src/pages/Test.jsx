import { useNavigate } from 'react-router-dom'

export default function Test() {
    const goTo = useNavigate();
    const handleClick = () => {
        goTo('/');
    }
    return (
        <>
            <h1>teste</h1>
            <button onClick={handleClick}>voltar</button>
        </>
    )
}

