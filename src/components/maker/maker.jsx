import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
import { useState } from "react";
const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
      id: 2,
      name: "muni2",
      company: "wehealed",
      theme: "dark",
      title: "muni code",
      email: "muni6983@gmail.com",
      message: "hihi",
      fileName: "muni image",
      fileURL: null,
    },
    {
      id: 3,
      name: "muni3",
      company: "wehealed",
      theme: "colorful",
      title: "muni code",
      email: "muni6983@gmail.com",
      message: "hihi",
      fileName: "muni image",
      fileURL: "muni.png",
    },
  ]);
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
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
