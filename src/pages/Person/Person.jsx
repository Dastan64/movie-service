import { useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../..';

//Image
import noPhoto from '../../assets/images/no-person-photo.jpg';

//Utils
import { formatBirthDate } from '../../utils/formatBirthDate';
import { formatAgeDeclination } from '../../utils/formatAgeDeclination';

//Styles
import './Person.scss';

//Components
import Loader from '../../components/Loader/Loader';
import Facts from '../../components/Facts/Facts';

const Person = observer(() => {
  const { id } = useParams();

  const store = useContext(StoreContext);

  useEffect(() => {
    store.getPerson(id);
  }, [id, store]);

  const {
    posterUrl,
    nameRu,
    nameEn,
    profession,
    growth,
    birthday,
    age,
    birthplace,
    spouses,
    facts,
  } = store.person;
  return (
    <>
      {Object.keys(store.person).length === 0 ? (
        <Loader />
      ) : (
        <article className='person'>
          <div className='person__container'>
            <div className='person__photo-container'>
              {posterUrl ? (
                <img
                  src={posterUrl}
                  alt={nameRu}
                  className='person__photo'
                  draggable='false'
                />
              ) : (
                <img
                  src={noPhoto}
                  alt={nameRu}
                  className='person__photo'
                  draggable='false'
                />
              )}
            </div>
            <div className='person__info'>
              <h1 className='person__ru-name'>{nameRu}</h1>
              <h4 className='person__original-name'>{nameEn}</h4>
              <div className='person__about about'>
                <h4 style={{ marginBottom: 20 }} className='about__heading'>
                  О персоне
                </h4>
                <div className='about__info-line'>
                  <p className='about__info-caption'>Карьера</p>
                  <p>{profession}</p>
                </div>
                {growth !== 0 && (
                  <div className='about__info-line'>
                    <p className='about__info-caption'>Рост</p>
                    <p>{growth / 100} м</p>
                  </div>
                )}
                <div className='about__info-line'>
                  <p className='about__info-caption'>Дата рождения</p>
                  <p>
                    {formatBirthDate(birthday)} • {formatAgeDeclination(age)}
                  </p>
                </div>
                <div className='about__info-line'>
                  <p className='about__info-caption'>Место рождения</p>
                  <p>{birthplace}</p>
                </div>
                {spouses.length > 0 && (
                  <div className='about__info-line'>
                    <p className='about__info-caption'>Супруга</p>
                    <p>
                      {spouses[0].name},{' '}
                      {spouses[0].children && spouses[0].children} детей
                    </p>
                  </div>
                )}
                <div className='about__info-line'>
                  <p className='about__info-caption'></p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <section className='more'>
            {facts.length > 0 && <Facts facts={facts} />}
          </section>
        </article>
      )}
    </>
  );
});

export default Person;
