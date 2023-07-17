import React from "react";
import styles from "@/styles/About.module.scss";

function handleClick() {
  window.location.href = "http://localhost:3000";
}

function ReturnBtn() {
  return (
    <button className={`${styles.button}`} onClick={handleClick}>
      Torna alla pagina principale
    </button>
  );
}

export default ReturnBtn;
