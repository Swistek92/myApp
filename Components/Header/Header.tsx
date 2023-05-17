"use client";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./styles.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname && pathname.endsWith("/");
  const isAboutMe = pathname && pathname.endsWith("AboutMe");
  const isContact = pathname && pathname.endsWith("Contact");
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((state) => !state);
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand={"md"} className='mb-3 fixed-top'>
        <Container fluid>
          <Link href='/'>
            <Navbar.Brand className='brandName' as='span'>
              Swistoklik.pl
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            onClick={() => toggleMenu()}
            aria-controls={`offcanvasNavbar-expand-`}
          />
          <Navbar.Offcanvas
            className={styles.offcanvas}
            id={`offcanvasNavbar-expand-}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-`}
            placement='end'
            show={menuOpen}
            onClick={() => toggleMenu()}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link as='span'>
                  <Link className={`next-link ${isHome && "active"}`} href='/'>
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link as='span'>
                  <Link
                    className={`next-link ${isAboutMe && "active"}`}
                    href='/AboutMe'
                  >
                    AboutMe
                  </Link>
                </Nav.Link>

                <Nav.Link as='span'>
                  <Link
                    className={`next-link ${isContact && "active"}`}
                    href='/Contact'
                  >
                    Contact
                  </Link>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
