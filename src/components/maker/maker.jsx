import React, { useEffect } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
import { useState } from "react";
const Maker = ({ FileInput, authService, cardRepository }) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(navigateState && navigateState.id);

  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  });

  const creadteOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          creadteOrUpdateCard={creadteOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
