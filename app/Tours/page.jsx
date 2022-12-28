"use client";
import React from "react";
import tours from "../../tours.json";
import styles from "./styles.module.css";
import { modalActions } from "../store/modals-slice";
import { useDispatch } from "react-redux";
const page = () => {
  const dispatch = useDispatch();

  const showLogin = () => dispatch(modalActions.showLogin());

  return (
    <div>
      <button onClick={showLogin}>show modal</button>

      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.037437909897!2d18.54438391546396!3d50.104306220126865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471148d543fb7c23%3A0xfc2811092f9e3fd8!2sState%20Hospital%20for%20Mental%20Diseases!5e0!3m2!1sen!2spl!4v1672098340273!5m2!1sen!2spl'
        width='600'
        height='450'
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
      {tours.map((e) => {
        return (
          <div className={styles.tour} key={e._id}>
            <h1>{e.name}</h1>
            <p>{e.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default page;
