import React from "react";
import styles from "./Contact.module.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LanguageIcon from "@mui/icons-material/Language";

export default function Contact() {
  const [user, setUser] = useState({ submit: false });
  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  const handleSubjectChange = (e) => {
    setUser({ ...user, subject: e.target.value });
  };
  const handleMessageChange = (e) => {
    setUser({ ...user, message: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email && user.subject && user.message)
      setUser({ ...user, submit: true });
  };

  return user.submit ? (
    <div className={styles.thankswrapper}>
      <h1 className={styles.title}>Thanks You! {user.name}</h1>
      <h4 className={styles.text}>Our Team will reach out to you shortly.</h4>
    </div>
  ) : (
    <div className={styles.wrapper}>
      <div className={styles.formwrapper}>
        <h1 className={styles.title}>Write us</h1>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <TextField
            id="name"
            label="Name"
            variant="standard"
            value={user.name}
            onChange={(e) => handleNameChange(e)}
            InputLabelProps={{
              style: { color: "grey" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            id="email"
            label="Email"
            variant="standard"
            value={user.email}
            onChange={(e) => handleEmailChange(e)}
            InputLabelProps={{
              style: { color: "grey" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            id="subject"
            label="Subject"
            variant="standard"
            value={user.subject}
            onChange={(e) => handleSubjectChange(e)}
            InputLabelProps={{
              style: { color: "grey" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            id="message"
            label="Message"
            value={user.message}
            variant="standard"
            multiline
            rows={4}
            onChange={(e) => handleMessageChange(e)}
            InputLabelProps={{
              style: { color: "grey" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <button className={styles.button}>Send Message</button>
        </form>
      </div>
      <div className={styles.contactwrapper}>
        <h1 className={styles.title}>Contact information</h1>
        <h4 className={styles.text}>
          We're open for any suggestion or just to have a chat
        </h4>
        <div className={styles.contact}>
          <div className={styles.contentwrapper}>
            <div className={styles.label}>
              <LocationOnIcon />
              <p>Address: </p>
            </div>
            <p className={styles.text}>
              198 West 21th Street, Suite 721 New York NY 10016
            </p>
          </div>
          <div className={styles.contentwrapper}>
            <div className={styles.label}>
              <CallIcon />
              <p>Phone:</p>
            </div>
            <p className={styles.text}>+ 1235 2355 98</p>
          </div>
          <div className={styles.contentwrapper}>
            <div className={styles.label}>
              <AlternateEmailIcon />
              <p>Email: </p>
            </div>
            <p className={styles.text}>support@igstudio.com</p>
          </div>
          <div className={styles.contentwrapper}>
            <div className={styles.label}>
              <LanguageIcon />
              <p>Website: </p>
            </div>
            <p className={styles.text}>igStudio.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
