import p1 from '../imagenes/publicity/p1.png'
import p2 from '../imagenes/publicity/p2.png'
import p3 from '../imagenes/publicity/p3.png'
import './estilo.css'
export  function SliderPublicity ( ) {

    return (
      <div id="carouselExampleDark" class="carousel carousel-dark slide slider" data-bs-ride="carousel">
      <div class="carousel-indicators" >
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src={p1} class="d-block w-100 ima-slider" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Bienvenidos</h5>
            <p>Encuentra a tu amigo</p>
            <a href="/Login" className="btn btn-primary  mb-5 mt-3">Entra a conocer a nuestros amigos</a>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={p2} class="d-block w-100 ima-slider" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Dale un hogar a quien mas lo necesita</h5>
            <a href="/Registro" className="btn btn-primary  mb-5 mt-3">Registrate con nosotros</a>
          </div>
        </div>
        <div class="carousel-item">
          <img src={p3} class="d-block w-100 ima-slider" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Un nuevo amigo te espera</h5>
            <p>Puedes encontrarnos en nuestras redes sociales : </p>
            <a href="/contactos" className="btn btn-primary  mb-5 mt-3">Contacte con nosotros</a>
            
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    )

}