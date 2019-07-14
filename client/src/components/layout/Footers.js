import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary">
      T:209-534-3602
      <Link color="inherit" href="#/">
      209-534-3602
      </Link>
      {' team.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '50vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
    minHeight: '15vh;'
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Bartenders2U
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'We offer cash and hosted bar services for special events and price parties of any size.'}
        </Typography>
        <Typography variant="body1">Serving Sacramento & The Bay Area.</Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">E:Chris@Bartenders2U.com</Typography>
          <MadeWithLove />
        </Container>
      </footer>
    </div>
  );
}