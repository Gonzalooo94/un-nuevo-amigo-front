import portada from '../imagenes/portada/portada.jpg'
import portada2 from '../imagenes/portada/portada2.jpg'
import portada3 from '../imagenes/portada/portada3.jpg' 
export default function Carousel ( ) {

    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={portada} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={portada2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={portada3} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )

}