import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography, Divider } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddCircleOutlined from '@material-ui/icons/AddCircleOutlined';

import PatientInfo from 'components/PatientInfo';
import PatientProgress from 'components/PatientProgress';
import DiagnosticsTable from 'components/DiagnosticsTable';
import BodyPart from 'components/BodyPart';

import WebcamImg from 'assets/images/webcam.png';
import UploadImg from 'assets/images/upload.png';
import DeleteImg from 'assets/images/delete.png';
import CheckImg from 'assets/images/check.png';
import CloseLineImg from 'assets/images/closeLine.png';
import CheckLineImg from 'assets/images/checkLine.png';
import RedEditImg from 'assets/images/red-edit.png';

import styles from './styles';
import Diagnosis from './diagnosis';

const SELECT_TREE = 0;
const SELECT_NODE = 1;
const CHOOSE_INTENSITY = 2;
const UPLOAD_PHOTO = 3;
const ADD_COMMENT = 4;
const ADD_CONDITION = 5;
const ANSWER_QUESTION = 6;
const SAVE_DIAGNOSIS = 7;

/**
 * @name DiagnosticsNewPageComponents
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class DiagnosticsNewPageComponents extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    trees: PropTypes.array.isRequired,
    nodes: PropTypes.array.isRequired,
    diagnosis: PropTypes.object.isRequired,
    questions: PropTypes.array.isRequired,
    newActions: PropTypes.object.isRequired,
  };

  state = {
    currentPageType: -1,
    currentStep: -1,
    nextEnable: false,
    selectedBody: [false, false, false, false, false, false], // SELECT_TREE
    selectedNode: [], // SELECT_TREE
    intensityValue: '', // CHOOSE_INTENSITY
    newCondition: '', // ADD_CONDITION
    conditions: [], // ADD_CONDITION
  };

  componentDidMount() {
    const {
      newActions,
    } = this.props;

    newActions.getTreesAction();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.diagnosis.currentType === 'tree') {
      if (prevState.currentPageType !== SELECT_TREE) {
        nextProps.newActions.getTreesAction();

        return {
          currentPageType: SELECT_TREE,
          currentStep: -1,
          selectedNode: [],
        };
      }

      if (nextProps.loadedTree) {
        nextProps.newActions.initStatus();
        const selected = nextProps.trees.map((value) => {
          return nextProps.diagnosis.steps.indexOf(value.id) !== -1;
        });

        const selectedNode = nextProps.trees.filter((obj, id) => {
          return selected[id];
        }).map((obj) => {
          return obj.id;
        });

        return {
          selectedBody: selected,
          nextEnable: selected.filter((value) => {
            return value;
          }).length > 0,
          selectedNode,
        };
      }
    }

    if (nextProps.diagnosis.currentType === 'node') {
      if (prevState.currentStep !== nextProps.diagnosis.currentStep) {
        nextProps.newActions.getNodesAction(nextProps.diagnosis.steps[nextProps.diagnosis.currentStep]);

        const childIds = nextProps.diagnosis.prescription[nextProps.diagnosis.currentStep].childIds;

        const selectedNode = childIds.map((value, index) => {
          return index;
        }).filter((value) => {
          return nextProps.diagnosis.steps.indexOf(childIds[value]) !== -1;
        });

        return {
          currentPageType: SELECT_NODE,
          currentStep: nextProps.diagnosis.currentStep,
          selectedNode,
          nextEnable: selectedNode.length > 0,
        };
      }

      if (prevState.currentPageType !== SELECT_NODE) {
        return {
          currentPageType: SELECT_NODE,
        };
      }
    }

    if (nextProps.diagnosis.currentType === 'leaf') {
      if (prevState.currentStep !== nextProps.diagnosis.currentStep || prevState.currentPageType !== CHOOSE_INTENSITY) {
        const intensityValue = nextProps.diagnosis.prescription[nextProps.diagnosis.currentStep].intensity;
        const nextEnable = intensityValue !== '';

        return {
          intensityValue,
          currentPageType: CHOOSE_INTENSITY,
          currentStep: nextProps.diagnosis.currentStep,
          nextEnable,
        };
      }
    }

    if (nextProps.diagnosis.currentType === 'upload') {
      if (prevState.currentPageType !== UPLOAD_PHOTO) {
        return {
          currentPageType: UPLOAD_PHOTO,
          nextEnable: true,
        };
      }
    }

    if (nextProps.diagnosis.currentType === 'comment') {
      if (prevState.currentPageType !== ADD_COMMENT) {
        return {
          currentPageType: ADD_COMMENT,
          nextEnable: true,
        };
      }
    }

    if (nextProps.diagnosis.currentType === 'condition') {
      if (prevState.currentPageType !== ADD_CONDITION) {
        return {
          currentPageType: ADD_CONDITION,
          nextEnable: true,
        };
      }
    }

    if (nextProps.diagnosis.currentType === 'question') {
      if (prevState.currentPageType !== ANSWER_QUESTION) {
        return {
          currentPageType: ANSWER_QUESTION,
          nextEnable: true,
        };
      }
    }

    if (nextProps.diagnosis.currentType === 'save') {
      if (prevState.currentPageType !== SAVE_DIAGNOSIS) {
        return {
          currentPageType: SAVE_DIAGNOSIS,
          nextEnable: true,
        };
      }
    }

    if (nextProps.loadedTree) {
      nextProps.newActions.initStatus();
      const selected = nextProps.trees.map((value) => {
        return nextProps.diagnosis.steps.indexOf(value.id) !== -1;
      });

      return {
        selectedBody: selected,
      };
    }

    return null;
  }

  /**
   * @name handleRedirect
   * Function to control page redirect
   */
  handleRedirect = path => () => {
    const {
      history,
    } = this.props;

    history.push(path);
  };

  /**
   * @name handlePageFlow
   * Function to control page flow
   */
  handlePageFlow = next => () => {
    const {
      newActions,
    } = this.props;

    const {
      selectedNode,
      currentPageType,
      intensityValue,
    } = this.state;

    if (next) {
      if (currentPageType === SELECT_NODE || currentPageType === SELECT_TREE) {
        newActions.execDiagnosis(selectedNode);
      }

      if (currentPageType === CHOOSE_INTENSITY) {
        newActions.execDiagnosis(intensityValue);
      }

      if (currentPageType === UPLOAD_PHOTO) {
        newActions.execDiagnosis();
      }

      if (currentPageType === ADD_COMMENT) {
        newActions.execDiagnosis();
      }

      if (currentPageType === ADD_CONDITION) {
        newActions.execDiagnosis();
      }

      if (currentPageType === ANSWER_QUESTION) {
        newActions.execDiagnosis();
      }
    } else {
      newActions.movePrevStep();
    }
  }

  /**
   * @name handleBodySelect
   * Function to control SELECT_TREE Page
   */
  handleBodySelect = (selectedId) => {
    const {
      selectedBody,
    } = this.state;

    const {
      trees,
    } = this.props;

    const selected = selectedBody.map((value, id) => {
      if (selectedId === id) {
        return !value;
      }
      return value;
    });

    const selectedTrue = selected.find((value) => {
      return value;
    });

    const selectedNode = trees.filter((obj, id) => {
      return selected[id];
    }).map((obj) => {
      return obj.id;
    });

    this.setState({
      selectedBody: selected,
      selectedNode,
      nextEnable: selectedTrue !== undefined,
    });
  }

  /**
   * @name handleCheckNode
   * Function to control SELECT_NODE page
   */
  handleCheckNode = selectedId => () => {
    const {
      selectedNode,
    } = this.state;

    let selected;

    if (selectedNode.indexOf(selectedId) === -1) {
      selected = [
        ...selectedNode,
        selectedId,
      ];
    } else {
      selected = selectedNode.filter((val) => {
        return val !== selectedId;
      });
    }

    this.setState({
      selectedNode: selected,
      nextEnable: selected.length > 0,
    });
  }

  handleRadioChange = (event) => {
    this.setState({
      intensityValue: event.target.value,
      nextEnable: true,
    });
  };

  addCondition = () => {
    const {
      conditions,
      newCondition,
    } = this.state;

    if (newCondition !== '') {
      const newArray = conditions.slice();
      newArray.push(newCondition);

      this.setState({
        conditions: newArray,
      });

      this.setState({
        newCondition: '',
      });
    }
  }

  handleChangeCondition = (e) => {
    this.setState({ newCondition: e.target.value });
  }

  render() {
    const {
      literals,
      classes,
      nodes,
      diagnosis,
      questions,
    } = this.props;

    const {
      currentPageType,
      currentRoot,
      selectedBody,
      intensityValue,
      newCondition,
      conditions,
      nextEnable,
      selectedNode,
    } = this.state;

    console.log('444444444444444444444444444');
    console.log(diagnosis.steps);
    console.log(diagnosis.prescription);
    console.log(intensityValue);
    console.log(diagnosis.currentStep);
    console.log(diagnosis.currentType);

    return (
      <div className='ProfilePage'>
        {currentPageType !== SAVE_DIAGNOSIS && (
          <React.Fragment>
            <Grid container>
              <PatientInfo firstName='Naina' lastName='Johar' nationalId='123456789' gender='Female' age='25' />
            </Grid>
            <Grid container className={classes.mainSection}>
              <Grid item md={5} xs={12} className={classes.leftSection}>
                <Grid container direction='column' spacing={32}>
                  <Grid item>
                    <PatientProgress editable={false} />
                  </Grid>
                  <Grid item>
                    <Typography className={classes.tableName}>
                      {literals.past}
                    </Typography>
                    <Grid container className={classes.borderBox}>
                      <DiagnosticsTable search={false} entires={false} photoShow={false} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={7} xs={12} className={classes.rightSection}>
                {currentPageType === SELECT_TREE && (
                  <Grid container className={classes.addSection} justify='center'>
                    <BodyPart size='large' selectable handleSelect={this.handleBodySelect} selectedIds={selectedBody} />
                  </Grid>
                )}
                {currentPageType === SELECT_NODE && (
                  <Grid container className={classes.addSection} direction='row' spacing={40}>
                    <Grid item>
                      <BodyPart size='large' selectedIds={selectedBody} focusId={currentRoot} />
                    </Grid>
                    <Grid item className={classes.flowSection}>
                      <Grid container direction='column' spacing={8}>
                        <Grid item>
                          <Typography className={classes.title}>
                            Select
                            {' '}
                            {diagnosis.prescription[diagnosis.currentStep].name}
                            {' '}
                            injury:
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.label}>
                            Pay attention in the description given by the patient and select the specific injury.
                          </Typography>
                        </Grid>
                        {nodes.map((object, index) => (
                          <Grid key={index} item container alignItems='center' className={classes.checkboxSection}>
                            <Grid item>
                              <Checkbox onChange={this.handleCheckNode(index)} checked={selectedNode.indexOf(index) !== -1} color='primary' />
                            </Grid>
                            <Grid item>
                              <Typography>
                                {object.name}
                              </Typography>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                )}
                {currentPageType === CHOOSE_INTENSITY && (
                  <Grid container className={classes.addSection} direction='row' spacing={40}>
                    <Grid item>
                      <BodyPart size='large' selectedIds={selectedBody} focusId={currentRoot} />
                    </Grid>
                    <Grid item className={classes.flowSection}>
                      <Grid container direction='column' spacing={8}>
                        <Grid item>
                          <Typography className={classes.title}>
                            (Optional) Select injury intensity
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.description}>
                            <span className={classes.label}>
                              Select the injury Intensity of
                            </span>
                            {' '}
                            Stenosis with obstruction on swallowing.
                          </Typography>
                        </Grid>
                        <Grid item>
                          <RadioGroup
                            aria-label='position'
                            name='position'
                            value={intensityValue}
                            onChange={this.handleRadioChange}
                            row
                          >
                            <FormControlLabel
                              value='1'
                              control={<Radio color='primary' />}
                              label='1'
                              labelPlacement='bottom'
                            />
                            <FormControlLabel
                              value='2'
                              control={<Radio color='primary' />}
                              label='2'
                              labelPlacement='bottom'
                            />
                            <FormControlLabel
                              value='3'
                              control={<Radio color='primary' />}
                              label='3'
                              labelPlacement='bottom'
                            />
                            <FormControlLabel
                              value='4'
                              control={<Radio color='primary' />}
                              label='4'
                              labelPlacement='bottom'
                            />
                            <FormControlLabel
                              value='5'
                              control={<Radio color='primary' />}
                              label='5'
                              labelPlacement='bottom'
                            />
                            <FormControlLabel
                              value='6'
                              control={<Radio color='primary' />}
                              label='6'
                              labelPlacement='bottom'
                            />
                            <FormControlLabel
                              value='7'
                              control={<Radio color='primary' />}
                              label='7'
                              labelPlacement='bottom'
                            />
                            <FormControlLabel
                              value='8'
                              control={<Radio color='primary' />}
                              label='8'
                              labelPlacement='bottom'
                            />
                            <FormControlLabel
                              value='9'
                              control={<Radio color='primary' />}
                              label='9'
                              labelPlacement='bottom'
                            />
                            <FormControlLabel
                              value='10'
                              control={<Radio color='primary' />}
                              label='10'
                              labelPlacement='bottom'
                            />
                          </RadioGroup>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
                {currentPageType === UPLOAD_PHOTO && (
                  <Grid container className={classes.addSection} direction='row' spacing={40}>
                    <Grid item>
                      <BodyPart size='large' selectedIds={selectedBody} focusId={currentRoot} />
                    </Grid>
                    <Grid item className={classes.flowSection}>
                      <Grid container direction='column' spacing={8}>
                        <Grid item>
                          <Typography className={classes.title}>
                            (Optional) Add a photo for this injury
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.label}>
                            If it is necesary take a pincture of the injury and upload it here.
                          </Typography>
                        </Grid>
                        <Grid item className={classes.buttonSection}>
                          <Button variant='text' className={classes.photoButton}>
                            SELECT DOCUMENT
                            <img src={UploadImg} alt='upload_icon' />
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant='text' className={classes.photoButton}>
                            TAKE A PICTURE
                            <img src={WebcamImg} alt='webcam_icon' />
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
                {currentPageType === ADD_COMMENT && (
                  <Grid container className={classes.addSection} direction='row' spacing={40}>
                    <Grid item>
                      <BodyPart size='large' selectedIds={selectedBody} focusId={currentRoot} />
                    </Grid>
                    <Grid item className={classes.flowSection}>
                      <Grid container direction='column' spacing={8}>
                        <Grid item>
                          <Typography className={classes.title}>
                            (Optional) Add a comment
                          </Typography>
                        </Grid>
                        <Grid item className={classes.textareaSection}>
                          <textarea className={classes.textarea} placeholder='message' />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
                {currentPageType === ADD_CONDITION && (
                  <Grid container className={classes.addSection} direction='row' spacing={40}>
                    <Grid item>
                      <BodyPart size='large' selectedIds={selectedBody} focusId={currentRoot} />
                    </Grid>
                    <Grid item className={classes.flowSection}>
                      <Grid container direction='column' spacing={8}>
                        <Grid item>
                          <Typography className={classes.title}>
                            (Optional) Add a condition
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.label}>
                            If you have detected a chronic medical condition or a health problem that will take some time to heal, add it here.
                          </Typography>
                        </Grid>
                        <Grid item className={classes.newSection}>
                          <Grid container alignItems='center' justify='flex-end'>
                            <AddCircleOutlined className={classes.addIcon} />
                            <Typography className={classes.newText}>
                              NEW CONDITION
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container alignItems='center'>
                            <Typography className={classes.inputText}>
                              Name
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container alignItems='center' justify='space-between'>
                            <Grid item className={classes.inputSection}>
                              <input className={classes.input} value={newCondition} onChange={this.handleChangeCondition} />
                            </Grid>
                            <Grid item>
                              <img src={CheckImg} className={classes.imageIcon} alt='check_icon' onClick={this.addCondition} />
                            </Grid>
                          </Grid>
                        </Grid>
                        {conditions.length > 0 && (
                          <React.Fragment>
                            <Grid item>
                              <Divider className={classes.divider} />
                            </Grid>
                            {conditions.map((value, index) => (
                              <Grid item container direction='row' justify='space-between' alignItems='center' key={index}>
                                <Grid item>
                                  <Typography className={classes.conditionText}>
                                    {value}
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <img src={RedEditImg} className={classes.imageIcon} alt='RedEditImg' />
                                  <img src={DeleteImg} className={classes.imageIcon} alt='delete_icon' />
                                </Grid>
                              </Grid>
                            ))}
                          </React.Fragment>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                )}
                {currentPageType === ANSWER_QUESTION && (
                  <Grid container className={classes.addSection} direction='row' spacing={40}>
                    <Grid item>
                      <BodyPart size='large' selectedIds={selectedBody} focusId={currentRoot} />
                    </Grid>
                    <Grid item className={classes.flowSection}>
                      <Grid container>
                        <Grid item container alignItems='center'>
                          <Grid item container className={classes.questionNum} alignItems='center' justify='center'>
                            {diagnosis.currentStep + 1}
                          </Grid>
                          <Grid item className={classes.questionSection}>
                            <Typography className={classes.question}>
                              {questions[diagnosis.currentStep]}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item container justify='flex-end' className={classes.iconSection}>
                          <Grid item className={classes.questionSection} container direction='row'>
                            <Grid container className={classes.grayIconBox} justify='center' alignItems='center' direction='column'>
                              <img src={CheckLineImg} alt='check_icon' />
                              <Typography className='iconText'>
                                Yes
                              </Typography>
                            </Grid>
                            <Grid container className={classes.redIconBox} justify='center' alignItems='center' direction='column'>
                              <img src={CloseLineImg} alt='close_icon' />
                              <Typography className='iconText'>
                                No
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
                <Grid container justify='space-between' direction='row-reverse'>
                  <Grid item>
                    <Button variant='contained' color='primary' disabled={!nextEnable} className={classes.button} onClick={this.handlePageFlow(true)}>
                      {literals.next}
                    </Button>
                  </Grid>
                  {currentPageType !== SELECT_TREE && (
                    <Grid item>
                      <Button variant='contained' color='secondary' className={classes.button} onClick={this.handlePageFlow(false)}>
                        {literals.previous}
                      </Button>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </React.Fragment>
        )}
        {currentPageType === SAVE_DIAGNOSIS && (
          <Diagnosis />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(DiagnosticsNewPageComponents);
