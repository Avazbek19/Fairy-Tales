import React from 'react'
import './footer.css'
import './footer_media.css'

export default function Footer() {
  return (
    <div className='main-footer'>
        <div className="footer_item_box">
            <div className="img_icon">
                <div className="footer_item_icon">
                    <img className='w-100' src="/logo.png" alt="logo" />
                </div>
            </div>
            <div className="footer_item_links">
                <ul className='footer_link_base'>
                    <li className='footer_link'>
                        <a className='link_item' href="">Política de privacidad</a>
                    </li>
                    <li className='footer_link'>
                        <a className='link_item' href="">Acuerdo de suscripción</a>
                    </li>
                    <li className='footer_link'>
                        <a className='link_item' href="">Ayuda</a>
                    </li>
                    <li className='footer_link'>
                        <a className='link_item' href="">Dispositivos compatible</a>
                    </li>
                    <li className='footer_link'>
                        <a className='link_item' href="">Acerca de Disney+</a>
                    </li>
                    <li className='footer_link'>
                        <a className='link_item' href="">Publicidad personalizada</a>
                    </li>
                </ul>
            </div>
            <div className='footer_item_content'>
                <div className="footer_content">
                    <p className='footer_content_text'>Disney+ es un servicio por suscripción de pago, su contenido está sujeto a disponibilidad. El servicio Disney+ es comercializado por Disney DTC LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.</p>
                </div>
            </div>
            <div className="footer_item_content footer_end">
                <div className="footer_end_item">
                    <p className='footer_end_text'>© Disney. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </div>
  )
}