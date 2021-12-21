import React from 'react'
import emailjs from 'emailjs-com';
import './contact.css'

function Contact() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_6n826wl', 'template_thf3izk', e.target, 'user_Inb4pnOSNCR7kkMPeI7v5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
          e.target.reset();
    
      }
    return (
        <div class="contact">

        <h2 class="contact_title">Contact</h2>
        <div className="line"></div>
                    <div class="contact_flex">
                            <div class="contact_left">
                                        <h2>Información de contácto</h2><br/>
                                        <p>Escribenos a nuestro correo o redes sociales cuando desees <br/> y se parte de la experiencia de Mr. Halley</p><br/>
                                        <p>Tel: 999-999-999</p><br/>
                                        <p>Cel: 999-999-999</p><br/>
                                        <p>Lazaro Cardenes 255, Col La Joya, Hillo, Son. Mexico</p><br/>
                                        <p>mrhalley@gmail.com</p>
                            </div>
                            <div class="contact_right">
                                    <form  /* action="enviar-prueba.php" method="post" */ className="formulario column column--50" onSubmit={sendEmail}>
                                       
                                        <label for="" className="formulario__label">Nombre</label>
                                        <div><input type="text" className="formulario__input-txt" name="nombre"/></div>
                                        <label for="" class="formulario__label">Correo</label>
                                        <div><input type="text" className="formulario__input-txt" name="correo"/></div>
                                        <label for="" className="formulario__label">Teléfono</label>
                                        <div><input type="text" className="formulario__input-txt" name="telefono"/></div>
                                            <label for="" className="formulario__label">Mensaje:</label>
                                            <div><textarea name="mensaje" id="" cols="30" rows="10" className="formulario__textarea"> </textarea></div>
                                             <input type="submit" className="btn formulario__btn" value="Enviar"></input>
                                            

                                   </form>
                          </div>
                </div>
    </div>

    )
}
 

export default Contact
