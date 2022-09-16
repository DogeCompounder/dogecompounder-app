import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <div className={classes.column}>
        <div className={classes.title}>Doge Compounder</div>
        <a
          href="https://docs.dogecompounder.dog"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-book ${classes.linkIcon}`} />
          <span>{t('docs')}</span>
        </a>

        <a
          href="https://github.com/dogecompounder"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-github ${classes.linkIcon}`} />
          <span>{t('source')}</span>
        </a>
      </div>

      <div className={classes.column}>
        <div className={classes.title}>{t('products')}</div>

        <a
          href="https://app.dogecompounder.dog"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-hand-holding-usd ${classes.linkIcon}`} />
          <span>{t('app')}</span>
        </a>
      </div>

      <div className={classes.column}>
        <div className={classes.title}>{t('socials')}</div>
        <a
          href="https://twitter.com/dogecompounder"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-twitter ${classes.linkIcon}`} />

          <span>twitter</span>
        </a>
      </div>
    </div>
  );
};

export default memo(Footer);
