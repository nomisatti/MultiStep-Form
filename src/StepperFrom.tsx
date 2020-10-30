import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {PersonalInformation} from './components/personalInformation/PersonalInformation'
import {EducationalInformation} from './components/educationalInformation/EducationalInformation'
import ExperienceInformation from './components/experienceInformation/ExperienceInformation'
import ReviewInformation from './components/reviewInformation/ReviewInformation'
//import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Personal Info', 'Education', 'Experience ','Review'];
}

function getStepContent(stepIndex :any , setStep:any , allData , setAllData) {
  switch (stepIndex) {
    case 0:
      return <PersonalInformation submit={setStep} setAllData={setAllData} preVal={allData} />;
    case 1:
      return <EducationalInformation submit={setStep} setAllData={setAllData} preVal={allData} />;
    case 2:
      return <ExperienceInformation submit={setStep} setAllData={setAllData} preVal={allData}/>;
    case 3 :
      return <ReviewInformation submit={setStep} allData={allData} />
    default:
      return 'Unknown stepIndex';
  }
}

export default function StepperFrom() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [allData , setAllData] = React.useState({})
  const steps = getSteps();


  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {
          getStepContent(activeStep , setActiveStep , allData , setAllData)
      }

    </div>
  );
}
