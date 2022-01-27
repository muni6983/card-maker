import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
import { useState } from "react";
const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: "muni",
      company: "wehealed",
      theme: "light",
      title: "muni code",
      email: "muni6983@gmail.com",
      message: "hihi",
      fileName: "muni image",
      fileURL: null,
    },
    2: {
      id: 2,
      name: "muni2",
      company: "wehealed",
      theme: "dark",
      title: "muni code",
      email: "muni6983@gmail.com",
      message: "hihi",
      fileName: "muni image2",
      fileURL: null,
    },
    3: {
      id: 3,
      name: "muni3",
      company: "wehealed",
      theme: "colorful",
      title: "muni code",
      email: "muni6983@gmail.com",
      message: "hihi",
      fileName: "muni image3",
      fileURL: "muni.png",
    },
  });
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
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
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
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
