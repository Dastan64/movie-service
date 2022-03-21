function Staff({ staff }) {
  const roles = [
    'DIRECTOR',
    'WRITER',
    'PRODUCER',
    'OPERATOR',
    'COMPOSER',
    'DESIGN',
    'EDITOR',
  ];
  return (
    <>
      {roles.map((role, index) => {
        const professions = staff.filter(
          (staff) => staff.professionKey === role
        );

        return (
          <div className='about__info-line' key={index}>
            <p className='about__info-caption'>
              {professions[0].professionText}:
            </p>
            {professions.length > 3 ? (
              <p>
                {professions
                  .map((person) => person.nameRu)
                  .slice(0, 3)
                  .join(', ')}
                ...
              </p>
            ) : (
              <p>
                {professions
                  .map((person) => person.nameRu)
                  .slice(0, 3)
                  .join(', ')}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
}

export default Staff;
