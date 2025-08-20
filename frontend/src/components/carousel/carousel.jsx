import React from 'react';

function HomeCarousel(props) {
  const { slides = [] } = props; // Default to an empty array

  return (
    <div id="homeCarousel" className="carousel slide carousel-home" data-ride="carousel">
      {/* Indicators */}
      <ol className="carousel-indicators">
        {slides.map((slide, index) => (
          <li
            key={index}
            data-target="#homeCarousel"
            data-slide-to={index}
            className={index === 0 ? 'active' : ''}
          />
        ))}
      </ol>

      {/* Wrapper for slides */}
      <div className="carousel-inner" role="listbox">
        {slides.map((slide, index) => {
          return (
          <div key={index} className={`item ${index === 0 ? 'active' : ''}`}>
            <img src={slide.imageUrl} alt={slide.title} />
            <div className="container">
              <div className="carousel-caption">
                <h2 className="carousel-title bounceInDown animated slow">{slide.title}</h2>
                <h4 className="carousel-subtitle bounceInUp animated slow">{slide.subtitle}</h4>
                <button
                  className="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow"
                  data-toggle="modal"
                  data-target="#donateModal"
                >
                  DONATE NOW
                </button>
              </div>
            </div>
          </div>
        )})}
      </div>

      {/* Controls */}
      <a className="left carousel-control" href="#homeCarousel" role="button" data-slide="prev">
        <span className="fa fa-angle-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#homeCarousel" role="button" data-slide="next">
        <span className="fa fa-angle-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default HomeCarousel;
