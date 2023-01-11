import Carousel from 'react-bootstrap/Carousel';

export default function CarouselMovie({items}) {
  return (
    <Carousel>
        {items.map(item=>(
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={item.posterURL}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{item.title}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
  );
}

