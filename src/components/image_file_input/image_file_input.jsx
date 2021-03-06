import React, { useState } from "react";
import { useRef } from "react/cjs/react.development";
import styles from "./image_file_input.module.css";
const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (event) => {
    setLoading(true);
    const file = event.target.files[0];
    const fileName = file["name"];
    const uploaded = await imageUploader.upload(file);
    setLoading(false);
    onFileChange({
      name: fileName,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || "No file"}{" "}
        </button>
      )}

      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
