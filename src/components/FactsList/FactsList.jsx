import { v4 as uuidv4 } from 'uuid';

function FactsList({ facts }) {
  return (
    <ul className='more__list'>
      {facts.map((fact) => (
        <li
          className='more__list-item'
          key={uuidv4()}
          dangerouslySetInnerHTML={{ __html: fact.text }}></li>
      ))}
    </ul>
  );
}

export default FactsList;
