import { v4 as uuidv4 } from 'uuid';

function FactsList({ facts, isShort }) {
  return (
    <>
      <ul className={`more__list ${isShort ? 'more__list--short' : ''}`}>
        {facts.map((fact) => (
          <li
            className='more__list-item'
            key={uuidv4()}
            dangerouslySetInnerHTML={{ __html: fact.text }}></li>
        ))}
      </ul>
    </>
  );
}

export default FactsList;
