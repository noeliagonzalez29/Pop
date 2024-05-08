const grande =document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');
//cuando hago click en  el punto, saber posicion del punto.
//recorrer todos los puntos
punto.forEach((cadaPunto, i)=>{
    //asignamos click a cada punto
    punto[i].addEventListener('click', ()=>{
        //guardar la posicion del punto
        let posicion = i;
        //posicion 0 transformX es o
        //posicion 1 transformX es -50%
        //calculamos el espacio que debe desplazarse el grande
        let operacion = posicion * -20
        //movemos el grande
        grande.style.transform=`translateX(${operacion}%)`;
        //recorremos todos los puntos
        punto.forEach((cadaPunto, i)=>{
            //quitamos la clase activo a todos los puntos
            punto[i].classList.remove('activo')
        })
        //añadir clase activo al punto que hemos hecho click
        punto[i].classList.add('activo')
    })
})

if(confirm("Este sitio web utiliza cookies para mejorar la experiencia del usuario y proporcionar funcionalidades adicionales. Al utilizar nuestro sitio web, usted acepta el uso de cookies de acuerdo con nuestra Política de Cookies. "));


//Formulario
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:smonroyr02@educarex.es?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
}