import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import cns from "classnames";

import styles from "./Footer.module.scss";
import Logo from "../Logo";
import SocialLinks from "../SocialLinks";

import Badges from "../Badges";
import { TranslationContext } from "../../contexts/translationContext";

const Footer: FC = () => {
  const { translation } = useContext(TranslationContext);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftCol}>
            <Logo isDark />
            <ul className={styles.accounts}>
              {translation.accounts.map((account, idx) => (
                <li className={styles.accountItem} key={idx}>
                  <p className={styles.account}>{account}</p>
                </li>
              ))}
            </ul>
            <SocialLinks type="footer" />
          </div>
          <div className={styles.centerCol}>
            <h3 className={styles.colTitle}>{translation.appsTitle}</h3>
            <Badges isColumn isOutlined />
          </div>
          <div className={styles.rightCol}>
            <h3 className={styles.colTitle}>{translation.contacts.title}</h3>
            <ul className={styles.contacts}>
              {translation.contacts.items.map((item, idx) => (
                <li className={styles.contact} key={`contact_${idx}`}>
                  {item.icon(styles.icon)}
                  <p className={styles.contactText}>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.copyrightContainer}>
          <p className={styles.copyright}>{translation.copyright}</p>
          <Link
            to="/privacy_policy"
            className={cns(styles.copyright, styles.copyright_type_legal)}
          >
            {translation.privacyPolicyLinkText}
          </Link>
        </div>
      </div>
      <div className={styles.texture} />
    </footer>
  );
};

export default Footer;
