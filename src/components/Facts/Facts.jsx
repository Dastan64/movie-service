import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from 'react';
import './Facts.scss';

const Facts = ({ facts }) => {
  const [isShort, setIsShort] = useState(true);

  const btnRef = useRef(null);

  function handleMoreFacts() {
    setIsShort(!isShort);
    if (btnRef.current.textContent === 'Показать ещё') {
      btnRef.current.textContent = 'Меньше';
    } else {
      btnRef.current.textContent = 'Показать ещё';
    }
  }
  return (
    <section className='more__facts facts'>
      <h2 className='facts__title'>Знаете ли вы, что...</h2>
      <ul className={`facts__list ${isShort ? 'facts__list--short' : ''}`}>
        {facts.map((fact) => (
          <li
            className='facts__list-item'
            key={uuidv4()}
            dangerouslySetInnerHTML={{ __html: fact.text }}></li>
        ))}
      </ul>
      <button
        type='button'
        className={`facts__btn ${isShort ? '' : 'facts__btn--rotated'}`}
        onClick={handleMoreFacts}
        ref={btnRef}>
        Показать ещё
      </button>
    </section>
  );
};

export default Facts;
