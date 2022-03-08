function Staff({ staff }) {
  const directors = staff
    .filter((staff) => staff.professionKey === 'DIRECTOR')
    .slice(0, 3);
  const writers = staff
    .filter((staff) => staff.professionKey === 'WRITER')
    .slice(0, 3);
  const producers = staff
    .filter((staff) => staff.professionKey === 'PRODUCER')
    .slice(0, 3);
  //   const operators = staff
  //     .filter((staff) => staff.professionKey === 'OPERATOR')
  //     .slice(0, 3);
  //   const composers = staff
  //     .filter((staff) => staff.professionKey === 'COMPOSER')
  //     .slice(0, 3);
  //   const designers = staff
  //     .filter((staff) => staff.professionKey === 'DESIGN')
  //     .slice(0, 3);
  //   const editors = staff
  //     .filter((staff) => staff.professionKey === 'EDITOR')
  //     .slice(0, 3);
  const allStaff = [
    ...directors,
    ...writers,
    ...producers,
    // ...operators,
    // ...composers,
    // ...designers,
    // ...editors,
  ];
  console.log(writers);
  return (
    <>
      {allStaff.map((staff) => (
        <div className='about__info-line'>
          <p className='about__info-caption'>{staff.professionText}</p>
          <p>{staff.nameRu}</p>
        </div>
      ))}
    </>
  );
}

export default Staff;
