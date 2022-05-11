import "../css/productList.css";

function Scroll() {
  return (
    <div className="bd-example">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        {/* <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="img-fluid h-100"
              src="https://m.media-amazon.com/images/I/41zSn74fPuL._AC_.jpg"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block" id="chicken">
              {/* <h5>Chef Favorites</h5>
              <p>Oven Baked Chicken Breast</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid h-100"
              src="https://m.media-amazon.com/images/I/91xP-3wsv+S._SX679_.jpg"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Weekly Special</h5>
              <p>Mushroom Risotto</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid h-100"
              src="https://m.media-amazon.com/images/I/81y+lNz36OL._AC_SX679_.jpg"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Try our sauces</h5>
              <p>BEST HOMEMADE ALFREDO SAUCE</p> */}
            </div>
          </div>
        </div>
        <a
          clasName="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
export default Scroll;
