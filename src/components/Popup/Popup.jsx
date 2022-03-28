import './Popup.scss';

const Popup = ({ isPopupOpen, children }) => {
  return (
    <div className={`popup ${isPopupOpen ? 'assasa' : 'popup--hidden'}`}>
      <div className='popup__content'>{children}</div>
    </div>
  );
};

export default Popup;
