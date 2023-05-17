import React from "react";
import Alert from "react-bootstrap/Alert";
import styles from "./styles.module.css";
import { Button } from "react-bootstrap";
import Link from "next/link";
const Success = () => {
  return (
    <Alert className={styles.alertSuccess}>
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Probably i got already your message soo, wait for answer or text me
        directly on social media,
      </p>
      <p>you find links into section about me </p>
      <hr />
      <Button variant='success' as={"button"}>
        <Link className={`next-link`} href='/'>
          Home
        </Link>
      </Button>{" "}
      <Button variant='success' as={"button"}>
        <Link className={`next-link`} href='/AboutMe'>
          AboutMe
        </Link>
      </Button>
    </Alert>
  );
};

export default Success;
