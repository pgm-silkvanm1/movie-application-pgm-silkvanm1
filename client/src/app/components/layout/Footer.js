import { Link } from "react-router-dom";
import * as Routes from '../../routes';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <p>This page has been designed with the purpose of a test for Arteveldehogeschool.</p>
    <p>Made by Silke Van Meerbeek</p>
    </footer>
  );
};

export default Footer;