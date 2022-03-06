import { formatMoneyAmount } from '../../utils/formatMoneyAmount';
import { getBoxOfficeType } from '../../utils/getBoxOfficeType';

function BoxOffice({ boxOffice }) {
  return (
    <>
      {boxOffice.map((box) => (
        <div className='about__info-line' key={box.amount}>
          <p className='about__info-caption'>{getBoxOfficeType(box)}:</p>
          <p>
            {box.symbol}
            {formatMoneyAmount(box.amount)}
          </p>
        </div>
      ))}
    </>
  );
}

export default BoxOffice;
