import { useState } from "react"

export default function About() {
    const [clicked, setClick] = useState(false);
    const click = () => {setClick(!clicked)};

    return (
        <section className="footer">
            {!clicked ?(
                <h2 onClick={click}>About</h2>
            ): (
                <h2 onClick={click}>dogpage.com</h2>
            )}
            <p>This a test react page with some dog pictures on it, thats it.</p>
        </section>
    )
}