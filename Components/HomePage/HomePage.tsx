import React from "react";
import styles from "./styles.module.css";

import Accordion from "react-bootstrap/Accordion";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <h1> &lt; &lt;Hello W0rld! &gt; &gt; </h1>
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
                SPA (single page application), zwróć uwagę na to, że strona na
                której jesteś nigdy się nie przeładuje.
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
              <h4>pozdrawiam!</h4>
            </Col>
            <Col md={12} lg={6}>
              <Image
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
