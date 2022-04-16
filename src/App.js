import react from 'react';
import {formatMs, Grid, Snackbar} from '@material-ui/core';
import Main from './components/Main/Main';
import { PushToTalkButton,PushToTalkButtonContainer,ErrorPanel} from '@speechly/react-ui';

import Details from './components/Details/Details';
import useStyles from './styles';
const App=()=>{
    const classes=useStyles();
    return(
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height:'100vh'}}>
                <Grid item xs={12} sm={4}>
                    <Details title="Income"/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Main/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Details title="Expense"/>
                </Grid>
                <PushToTalkButtonContainer>
                    <PushToTalkButton/>
                    <ErrorPanel/>
                </PushToTalkButtonContainer>

            </Grid>
        </div>
    )

    
}

export default App;


//fault in app.js
// and formatMs.jsx when we add Snackbar
// and details.jsx for dougnut
// forms gets invisible