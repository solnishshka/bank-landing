import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Link } from "react-router-dom";

import { ReactComponent as Loader } from "./assets/loader-item.svg";

import privacyPolicy from "./assets/privacy-policy.pdf";

import styles from "./PrivacyPolicy.module.scss";

const PrivacyPolicy = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
    window.scrollTo(0, 0);
  }

  function nextPage() {
    changePage(1);
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <Document
        file={privacyPolicy}
        onLoadSuccess={onDocumentLoadSuccess}
        renderMode="canvas"
        loading={<Loader className={styles.loader} />}
      >
        <Page width={800} className={styles.page} pageNumber={pageNumber} />
      </Document>
      <div className={styles.navigation}>
        <div className={styles.buttons}>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className={styles.button}
          >
            Предыдущая
          </button>
          <p>
            {pageNumber || (numPages ? 1 : "...")} из {numPages || "..."}
          </p>
          <button
            type="button"
            disabled={numPages ? pageNumber >= numPages : false}
            onClick={nextPage}
            className={styles.button}
          >
            Следующая
          </button>
        </div>
        <div className={styles.buttons}>
          <a href={privacyPolicy} download className={styles.link}>
            Скачать
          </a>
          <Link to="/" className={styles.link}>
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
