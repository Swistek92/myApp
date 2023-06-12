import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import styles from "./styles.module.css";

interface Props {
  handleHide: Function;
  show: boolean;
}
const TextModal = ({ handleHide, show }: Props) => {
  return (
    <Modal
      show={show}
      onHide={() => handleHide()}
      onClick={() => handleHide()}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      backdrop={true}
      className={styles.modal}
    >
      <Modal.Header className={styles.modalHeader}>
        <Modal.Title className='modal-title' id='contained-modal-title-vcenter'>
          <p>Single Page Application</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <p>
          SPA (Single Page Application) to rodzaj aplikacji internetowej, która
          działa w przeglądarce i ładowana jest tylko raz podczas pierwszego
          załadowania strony. Po załadowaniu, większość interakcji z aplikacją
          odbywa się bez potrzeby przeładowywania całej strony.amiast tego, SPA
          korzysta z dynamicznego ładowania danych i aktualizuje jedynie
          potrzebne elementy strony.
        </p>
        <p>
          Z Tradycyjne aplikacje internetowe działają w oparciu o model
          żądanie-odpowiedź, gdzie każde kliknięcie lub akcja użytkownika
          powoduje przesłanie żądania do serwera, a następnie otrzymanie
          odpowiedzi w postaci nowej strony. W przypadku SPA, aplikacja pobiera
          razem z załadowaniem strony cały potrzebny kod, skrypty i zasoby.
          Następnie, w miarę potrzeby, komunikuje się z serwerem za pomocą API,
          pobiera dane w tle i aktualizuje tylko odpowiednie elementy strony.
        </p>
        <p>
          Dzięki temu podejściu, SPA oferuje bardziej responsywne i płynne
          doświadczenie użytkownika, ponieważ nie ma opóźnień spowodowanych
          przeładowywaniem całych stron. Dodatkowo, SPA może wykorzystywać
          techniki takie jak routing po stronie klienta, które pozwalają na
          dynamiczne przejście między widokami bez konieczności przeładowywania
          strony.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default TextModal;
