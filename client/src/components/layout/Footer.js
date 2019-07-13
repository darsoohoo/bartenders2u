import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './Footer.css'

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '12vh'
    
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),

  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
 
  },

}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div id="footer-root" className={classes.root}>
      <footer id="footer" className={classes.footer}>
        <Container id="footer-container" className={classes.companyContainer} maxWidth="sm">
          <Typography className="company-name" variant="body1">Bartenders2U <p>Bartenders 2 U E:Chris@Bartenders2U.com T:209-534-3602</p></Typography>
        </Container>
      </footer>
    </div>
  );
}