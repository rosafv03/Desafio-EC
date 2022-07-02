import { Footer } from '../Home/Components/FooterSeccion/Footer';

export const ConfirmacionPlanStandar = () => {


    return (
        <main className="main">
            <div>
                <img className="img" src='https://st3.depositphotos.com/4278403/18330/v/600/depositphotos_183309434-stock-video-white-check-mark-icon-form.jpg' height="220px" alt="vistobueno" />

                <div className="precio">FELICIDADES POR ADQUIRIR EL PLAN STANDAR</div><div></div>
                <hr />
                <p>Su suscripcion se rennovara de forma automatica cuando acaba el tiempo de uso a menos que usted la  cancele</p>
            </div>
            <hr />
            <div>
                <ul>
                    <li>Contenidos Exclusivos ✔️  </li>
                    <li>Hasta 50 articulos por dia ✔️ </li>
                    <li>Club de suscriptores ✔️ </li>
                    <li>50% menos publicidad ✔️ </li>
                </ul>
            </div>
            <a href="/"><div className="App__conten-suscribir" >
                Cerrar
            </div>
            </a>
            <footer className='App__footer'>
                <Footer/>
            </footer>
        </main>
    )
}