// import React, { useState } from 'react';
// import Close from '../assets/close.svg';

// const PortfolioItem = ({ img, title, details }) => {
//   const [modal, setModal] = useState(false);

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   return (
//     <div className='portfolio__item'>
//       <img src={img} alt='' className='portfolio__img' />

//       <div className='portfolio__hover' onClick={toggleModal}>
//         <h3 className='portfolio__title'>{title}</h3>
//       </div>

//       {modal && (
//         <div className='portfolio__modal'>
//           <div className='portfolio__modal-content'>
//             <img
//               src={Close}
//               alt=''
//               className='modal__close'
//               onClick={toggleModal}
//             />

//             <h3 className='modal__title'>{title}</h3>

//             <ul className='modal__list grid'>
//               {details.map(({ icon, title, desc }, index) => {
//                 return (
//                   <li className='modal__item' key={index}>
//                     <span className='item__icon'>{icon}</span>

//                     <div>
//                       <span className='item__title'>{title}</span>
//                       <a
//                         href='https://www.youtube.com/watch?v=LpZrAjU6Hhk'
//                         className='item__details'
//                       >
//                         {desc}
//                       </a>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>

//             <img src={img} alt='' className='modal__img' />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PortfolioItem;

import React, { useState } from 'react';
import Close from '../assets/close.svg';

const PortfolioItem = ({ img, projectTitle, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className='portfolio__item'>
      <img src={img} alt='' className='portfolio__img' />

      <div className='portfolio__hover' onClick={toggleModal}>
        <h3 className='portfolio__title'>{projectTitle}</h3>
      </div>

      {modal && (
        <div className='portfolio__modal' onClick={toggleModal}>
          <div className='portfolio__modal-content' onClick={stopPropagation}>
            <img
              src={Close}
              alt=''
              className='modal__close'
              onClick={toggleModal}
            />

            <h3 className='modal__title'>{projectTitle}</h3>

            <ul className='modal__list grid'>
              {details.map(({ icon, title, desc, url }, index) => (
                <li className='modal__item' key={index}>
                  <span className='item__icon'>{icon}</span>

                  <div>
                    <span className='item__title'>{title}</span>
                    {desc && <span className='item__desc'>{desc}</span>}
                    {url && (
                      <a
                        href={url}
                        target='_blank'
                        rel='noreferrer'
                        className='item__link'
                      >
                        Visit site
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <img src={img} alt='' className='modal__img' />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
