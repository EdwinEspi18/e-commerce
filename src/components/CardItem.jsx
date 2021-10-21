import images from "../img/fondo-body-02.svg";

const CardItem = () => {
  return (
    <article className='card__main'>
      <div className='card__main-img'>
        <img src={images} alt='IMAGES' />
      </div>
      <div className='card__main-description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <p className='card__prices'>$126.99</p>
      <div className='card__main-rating'>
        <span>4.5</span>
        <button className='card__main-btn'>Add to Cart</button>
      </div>
    </article>
  );
};

export default CardItem;
