import { useParams } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams();
  return (
    <div className='detail'>
      <div className='detail__container'>
        <div className='detail__image-container'>
          <h2>Изображение фильма с id: {id}</h2>
        </div>
        <div className='detail__text-container'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          tempora dignissimos doloremque magni cumque eaque laudantium dolorem
          numquam blanditiis? Beatae.
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
