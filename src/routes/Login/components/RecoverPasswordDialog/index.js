import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import IconClose from '@material-ui/icons/Clear';
import { recoverPassword } from '../../modules/actions';

import {
  recoverPasswordStyles,
} from './styles';

import './styles.css';

/**
 * @name RecoverPasswordDialog
 * Component to allow users to restore their password
 *
 * @param {Boolean}   flagOpen
 * @param {Object}    literals
 * @param {String}    userLang
 * @param {Function}  showLoading
 * @param {Function}  onDialogClose
 *
 * @returns {JSX}
 */
class RecoverPasswordDialog extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    fullScreen: PropTypes.bool.isRequired,
    flagOpen: PropTypes.bool.isRequired,
    literals: PropTypes.object.isRequired,
    userLang: PropTypes.string.isRequired,
    showLoading: PropTypes.func.isRequired,
    onDialogClose: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      flagOpen: false,
      flagSent: false,
    };
  }

  /**
   * @name componentDidUpdate
   */
  componentDidUpdate({ flagOpen: prevFlagOpen }) {
    const { flagOpen } = this.props;

    if (prevFlagOpen !== flagOpen) {
      this.setFlag(flagOpen);
    }
  }

  /**
   * @name setFlag
   * function to set flagOpen state
   */
  setFlag = (flagOpen) => {
    this.setState({
      flagOpen,
    });
  }

  /**
   * @name handleClose
   * callback to be excecuted on dialog close
   */
  handleClose = () => {
    const { onDialogClose } = this.props;

    this.setState({
      flagSent: false,
    });

    onDialogClose();
  }

  /**
   * @name handleEmailChange
   * Funtion to update state on email change
   */
  handleEmailChange = () => (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  /**
   * @name handleResetPassword
   * Funtion to call recover password endpoint
   */
  handleResetPassword = () => {
    this.sendRecoverEmail((error) => {
      if (!error) {
        this.setState({
          flagSent: true,
        });
      }
    });
  }

  /**
   * @name handleNoEmailReceived
   * Returnt to recover password to chanche emails if needed.
   */
  handleNoEmailReceived = () => {
    this.setState({
      flagSent: false,
    });
  }

  /**
   * @name sendRecoverEmail
   * Function to call recover password
   */
  sendRecoverEmail = (callback) => {
    const { showLoading, userLang: lang } = this.props;
    const { email } = this.state;

    showLoading(true);
    recoverPassword({ email, lang })
      .then((data) => {
        if (callback && typeof callback === 'function') {
          callback(false, data);
        }
        showLoading(false);
      })
      .catch((error) => {
        if (callback && typeof callback === 'function') {
          callback(true, error);
        }
        showLoading(false);
      });
  }

  render() {
    const {
      classes,
      fullScreen,
      literals: {
        dialogRecoverPassword: literals,
      },
    } = this.props;

    const {
      email,
      flagOpen,
      flagSent,
    } = this.state;

    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        fullScreen={fullScreen}
        open={flagOpen}
        onClose={this.handleClose}
        className='recover-password-main-dialog'
        aria-labelledby='responsive-dialog-title'
      >
        {(!flagSent) ? (
          <React.Fragment>
            <DialogTitle>
              <span className={classes.dialogTitle}>{literals.title}</span>
              <IconClose
                className='btn-close'
                color='primary'
                onClick={this.handleClose}
              />
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
              <DialogContentText className={classes.dialogMainTitle}>
                {literals.enterYourEmailAddress}
              </DialogContentText>
              <div className='main-content-wrapper'>
                <Grid container spacing={0} className=''>
                  <Grid item xs={12} className=''>
                    <p>
                      {literals.emailWillBeSent}
                    </p>
                    <div className='email-input-wrapper'>
                      <TextField
                        id='email'
                        label={literals.userEmail}
                        autoFocus
                        className={classes.textField}
                        value={email}
                        placeholder={literals.userEmailPlaceholder}
                        onChange={this.handleEmailChange()}
                        margin='none'
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
              <Button
                fullWidth
                variant='raised'
                size='medium'
                color='primary'
                className='btn-action'
                disabled={email === ''}
                onClick={this.handleResetPassword}
              >
                {literals.resetPasswordAction}
              </Button>
            </DialogActions>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <DialogTitle>
              <IconClose
                className='btn-close'
                color='primary'
                onClick={this.handleClose}
              />
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
              <DialogContentText className={classes.dialogMainTitle}>
                {literals.emailSent}
              </DialogContentText>
              <div className='main-content-wrapper'>
                <Grid container spacing={0} className=''>
                  <Grid item xs={12} className=''>
                    <p className='recover-email-msg-wrapper'>
                      {literals.checkInbox}
                      <span className='recover-email-msg-txt'>{email}</span>
                    </p>
                  </Grid>
                </Grid>
              </div>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
              <Button
                fullWidth
                variant='outlined'
                size='medium'
                color='primary'
                className='btn-action'
                onClick={this.handleClose}
              >
                {literals.acceptAction}
              </Button>
            </DialogActions>
          </React.Fragment>
        )}
      </Dialog>
    );
  }
}

export default withMobileDialog()(withStyles(recoverPasswordStyles)(RecoverPasswordDialog));
