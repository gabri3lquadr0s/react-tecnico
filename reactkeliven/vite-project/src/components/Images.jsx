import rottweiler1 from '../assets/rottweiler1.jpg'
import rottweiler2 from '../assets/rottweiler2.jpg'
import rottweiler3 from '../assets/rottweiler3.jpg'
import pug1 from '../assets/pug1.jpg'
import pug2 from '../assets/pug2.jpg'
import pug3 from '../assets/pug3.jpg'
import pastor1 from '../assets/pastor1.jpg'
import pastor2 from '../assets/pastor2.jpg'
import pastor3 from '../assets/pastor3.jpg'

export default function Images() {
    return(
        <>
            <section className="galeria" id='i1'>
                <figure>
                    <img src={rottweiler1} alt="rottweiler 1"/>
                </figure>
                <figure>
                    <img src={rottweiler2} alt="rottweiler 2"/>
                </figure>
                <figure>
                    <img src={rottweiler3} alt="rottweiler 3"/>
                </figure>
            </section>
            <section className="galeria" id='i2'>
            <figure>
                    <img src={pug1} alt="pug 1"/>
                </figure>
                <figure>
                    <img src={pug2} alt="pug 2"/>
                </figure>
                <figure>
                    <img src={pug3} alt="pug 3"/>
                </figure>
            </section>
            <section className="galeria" id='i3'>
            <figure>
                    <img src={pastor1} alt="pastor alemão 1"/>
                </figure>
                <figure>
                    <img src={pastor2} alt="pastor alemão 2"/>
                </figure>
                <figure>
                    <img src={pastor3} alt="pastor alemão 3"/>
                </figure>
            </section>
        </>
    )
}