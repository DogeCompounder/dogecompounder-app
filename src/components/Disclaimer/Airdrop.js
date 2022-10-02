import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './stylesAirdrop';

const useStyles = makeStyles(styles);

const Disclaimer = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Grid container item className={classes.root} justifyContent="center">
      <img
        alt="Airdrop"
        src={require(`./airdrop.png`)}
        height={'100px'}
        //className={classes.logo}
      />
    </Grid>
  );
};

export default memo(Disclaimer);
