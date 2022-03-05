function BoxOffice({ boxOffice }) {
  const getBoxOfficeType = (boxOffice) => {
    switch (boxOffice.type) {
      case 'BUDGET':
        return 'Бюджет';
      case 'USA':
        return 'Сборы в США';
      case 'WORLD':
        return 'Сборы в мире';
      case 'RUS':
        return 'Сборы в России';
      default:
        break;
    }
  };

  const formatNumber = (number) =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return (
    <>
      {boxOffice.map((box) => (
        <div className='about__info-line' key={box.amount}>
          <p className='about__info-caption'>{getBoxOfficeType(box)}:</p>
          <p>
            {box.symbol}
            {formatNumber(box.amount)}
          </p>
        </div>
      ))}
    </>
  );
}

export default BoxOffice;
