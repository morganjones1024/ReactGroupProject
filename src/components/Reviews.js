import Review from "./Review";
import productArray from './model';

function addReview() {
    let addReview = this.state.notes;
  /* And now we are going to push a new note into our state */
  notes.push(
    {
      id: Date.now() //Quick and dirty unique id
    }
  );
  /* Anytime we update state with a class based React component
   * we need to this.setState
   */
  this.setState(
    {
      notes: this.state.notes
    }
  )
}

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
