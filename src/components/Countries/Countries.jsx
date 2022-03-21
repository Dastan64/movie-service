const Countries = ({ countries }) => {
  return (
    <div className='about__info-line'>
      <p className='about__info-caption'>Страна:</p>
      <p>{countries.map((country) => country.country).join(', ')}</p>
    </div>
  );
};

export default Countries;
