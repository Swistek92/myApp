import React, { useState } from "react";
import styles from "./styles.module.css";

import Accordion from "react-bootstrap/Accordion";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import TextModal from "./spaModal/TextModal";
import Link from "next/link";
import FullScreenModal from "../Modals/FullScreenModal/Model";
const HomePage = () => {
  const [showModalSpa, setShowModalSpa] = useState(false);
  const [showModalImg, setShowModalImg] = useState(false);

  return (
    <div>
      <TextModal
        show={showModalSpa}
        handleHide={() => setShowModalSpa(false)}
      />
      <FullScreenModal
        img='https://res.cloudinary.com/dftyei6oe/image/upload/v1686566957/4R7A3187_zlpqlk.jpg'
        handleHide={() => setShowModalImg(false)}
        show={showModalImg}
      />
      <div>
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <h1 className="mainHeading" > &lt; &lt;Hello W0rld! &gt; &gt; </h1>
              <p>
                Jestem tutaj, aby podzielić się z Tobą moją pasją do fotografii
                i programowania. Jestem fotografem z zamiłowania, który uwielbia
                uchwycić chwile i przekazać emocje za pomocą obrazów. Moje
                zdjęcia są pełne życia, autentyczności i kreatywności.
              </p>
              <p>
                Jednak moja miłość do tworzenia sięga również programowania.
                Jako programista, eksploruję świat kodu, tworząc innowacyjne
                rozwiązania i projekty. Kombinacja tych dwóch pasji daje mi
                nieograniczone możliwości w tworzeniu unikalnych doświadczeń
                wizualnych.
              </p>
              <p>
                Przejdź dalej i zobacz moje portfolio, gdzie znajdziesz
                różnorodne zdjęcia, które opowiadają własne historie. Niech moje
                obrazy poruszają Twoje emocje i otworzą Ci nowe perspektywy. Jak
                również wyróbować projektu aplikacji webowej z wykorzystaniej
                <span
                  className='mainPageLink'
                  onClick={() => setShowModalSpa(true)}
                >
                  SPA(single page application)
                </span>
                , zwróć uwagę na to, że strona na której jesteś nigdy się nie
                przeładuje.
              </p>
              <p>
                Jeśli jesteś zainteresowany współpracą, chętnie podejmę nowe
                wyzwania i stworzę dla Ciebie coś wyjątkowego. Nie wahaj się ze
                mną skontaktować, aby omówić swoje potrzeby i cele.
              </p>
              <p>
                Dziękuję, że odwiedziłeś moją stronę. Mam nadzieję, że moje
                prace zainspirują Cię i zostaniesz na dłużej. Zapraszam do
                odkrywania mojego świata fotografii i programowania!
              </p>
              <h4>pozdrawiam Piotrek!</h4>
              <p>
                {" "}
                zapraszam do odzienia
                <Link className={` mainPageLink`} href='/Gallery'>
                  Galerii
                </Link>
                lub{" "}
                <Link className={` mainPageLink`} href='/Contact'>
                  Kontaktu
                </Link>
              </p>
            </Col>
            <Col md={12} lg={6}>
              <Image
                onClick={() => setShowModalImg(true)}
                className={styles.img}
                alt='asd'
                width={1686}
                height={2997}
                src={
                  "https://res.cloudinary.com/dftyei6oe/image/upload/v1686566957/4R7A3187_zlpqlk.jpg"
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
