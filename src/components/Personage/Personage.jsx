import { useSelector } from 'react-redux';
import s from './Personage.module.css';
import { getUserData, getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useState } from 'react';
import PersonageModal from '../PersonageModal/PersonageModal';
import minionGoodBalance from './png/Minions-graf.png';
import minionBadBalance from './png/minions-bed.png';

import bunnyGoodBalance from './png/banny-gud.png';
import bunnyBadBalance from './png/banny-bed.png';
import sonicGoodBalance from './png/son-gud.png';
import sonicBadBalance from './png/sonic-bed.png';

const characters = {
  minion: [minionGoodBalance, minionBadBalance],
  bunny: [bunnyGoodBalance, bunnyBadBalance],
  sonic: [sonicGoodBalance, sonicBadBalance],
};

const Personage = () => {
  const userData = useSelector(getUserData);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const balance = userData.balance;
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const [currentCharacter, setCurrentCharacter] = useLocalStorage(
    'character',
    characters.minion
  );
  return (
    <>
      {isLoggedIn && (
        <button
          aria-label="personage"
          className={s.personage}
          onClick={() => toggleModal()}
        >
          {balance > 1000 ? (
            <>
              <img
                src={currentCharacter[0]}
                alt="personage"
                width={80}
                height={90}
              />
              <div className={s.wrapDialog}>
                <div className={s.container}>
                  <img
                    className={s.dialog}
                    src={require('./png/obl.png')}
                    alt="personage"
                    width={150}
                    height={100}
                  />
                  <div className={s.text}>Wealth is his who enjoys it.</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <img
                src={currentCharacter[1]}
                alt="personage"
                width={80}
                height={100}
              />
              <div className={s.wrapDialog}>
                <div className={s.container}>
                  <img
                    src={require('./png/obl.png')}
                    alt="personage"
                    width={125}
                    height={100}
                  />
                  <div className={s.text}>
                    I have nothing to offer but toil, tears and sweat.
                  </div>
                </div>
              </div>
            </>
          )}
        </button>
      )}
      {showModal && (
        <PersonageModal
          onClose={toggleModal}
          setCurrentCharacter={setCurrentCharacter}
          characters={characters}
        />
      )}
    </>
  );
};
export default Personage;
