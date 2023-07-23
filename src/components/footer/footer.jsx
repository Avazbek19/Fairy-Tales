import React from 'react'
import './footer.css'
import './footer_media.css'

export default function Footer() {
  return (
    <div className='main-footer'>
        <div className="row justify-content-center">
            <div className="col-sm-10 col-md-6 col-lg-4 text-center">
                <img src="/logo.png" alt="logo" />
            </div>
            <div className="col-sm-10 col-md-6 col-lg-9 box_link">
                <ul className='text-center list-unstyled footer_links'>
                    <li className="text-sm-center text-center footer_links_item">
                        <a className='text-decoration-none text-white links' href="">Política de privacidad</a>
                    </li>
                    <li className="text-sm-center text-center footer_links_item">
                        <a className='text-decoration-none text-white links' href="">Acuerdo de suscripción</a>
                    </li>
                    <li className="text-sm-center text-center footer_links_item">
                        <a className='text-decoration-none text-white links' href="">Ayuda</a>
                    </li>
                    <li className="text-sm-center text-center footer_links_item">
                        <a className='text-decoration-none text-white links' href="">Dispositivos compatible</a>
                    </li>
                    <li className="text-sm-center text-center footer_links_item">
                        <a className='text-decoration-none text-white links' href="">Acerca de Disney+</a>
                    </li>
                    <li className="text-sm-center text-center footer_links_item">
                        <a className='text-decoration-none text-white links' href="">Publicidad personalizada</a>
                    </li>
                </ul>
            </div>
            <div className='col-sm-10 col-md-6 col-lg-9 footer_content_box text-center'>
                <p className='footer_content'>Disney+ es un servicio por suscripción de pago, su contenido está sujeto a disponibilidad. El servicio Disney+ es comercializado por Disney DTC LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.</p>
            </div>
            <div className='col-sm-10 col-md-6 col-lg-9 footer_content_box text-center'>
                <p className='footer_content'>©  Disney. Todos los derechos reservados.</p>
            </div>
        </div>
    </div>
  )
}