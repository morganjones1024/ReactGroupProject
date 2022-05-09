import Review from "./Review";
import productArray from './model';

function Reviews () {
        let reviewElements = reviewArray.map((review) => (
            <div>
              {/* <img src={product.image} alt={product.name} />
              name={product.name}
              {product.price}
              {product.description} */}
              <Review
                reviewer={review.reviewer}
                rating={review.rating}
                message={review.message}
                id={product.id}
                key={product.id}
              />
            </div>
          ));
          return <>{reviewElements}</>;
        }
