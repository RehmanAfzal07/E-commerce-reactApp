import React from 'react'

function MySlilder() {
  return (
    <div>
      <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>

  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="10000">
      <img src="slider1.png" class="d-block w-100" alt="slider1"/>
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src="slider2.jpg" class="d-block w-100" alt="silder2"/>
    </div>
    <div class="carousel-item">
      <img src="slider3.png" class="d-block w-100" alt="slider3"/>
    </div>
    <div class="carousel-item">
      <img src="./slider/slider4.png" class="d-block w-100" alt="slider4"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}

export default MySlilder