import style from './reg.module.css'
import React, { useContext, useState, useEffect } from 'react';
import { TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from '../../assets/whatIsGDSC/logocomplete.svg'
import { ReactComponent as GDSC } from '../../assets/Hero/GDSC.svg'
import rectangle from "../../assets/Header/Rectangle 318.png";


import Header from '../Header/Header';
import { ThemeContext } from '../../hooks/useTheme';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '35em',
    background: '#000000'
  },
  textField: {
    width: '35em',
  },
  button: {
    marginTop: '20px',
  },
  inputContainer: {
    maxWidth: '30em',
    marginBottom: '20px',
    width: '100%',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: "8em",
  }
});



function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedIn: '',
    github: '',
    twitter: '',
    institution: '',
    year: '',
    tshirtSize: '',
    technologies: '',
    reason: ''
  });
  const { toggleTheme , theme } = useContext(ThemeContext)
  useEffect(() => {
    if ( theme === 'light'){ 
      toggleTheme()
    }
  }, [])
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const classes = useStyles();

  return (
    <div style={{ background: '#000' }}>
      <Header />

      {/* <div className={classes.formContainer}>

          <form className={`${classes.form} bg-brey`} onSubmit={handleSubmit}>
            
          <div className={`${style.formHeader}`}>
           
            <img className={classes.logo} src={logo} alt="GDSC WOW" />
              <img
                draggable={false}
                src={rectangle}
                className={[style.recimg]}
                alt="Vertical rectangle"
              />
            <h1 className={style.nagpurhead}>NAGPUR</h1>
          </div>
          <div className={classes.inputContainer}>
            <TextField
              className={classes.textField}
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
            />
          </div>
          <div className={classes.inputContainer}>
            <TextField
              className={classes.textField}
              label="Email ID"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
            />
          </div>
          <div className={classes.inputContainer}>
            <TextField
              className={classes.textField}
              label="Contact Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
            />
          </div>
          <div className={classes.inputContainer}>
            <TextField
              className={classes.textField}
              label="Linked In Profile URL"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
            />
          </div>
          <div className={classes.inputContainer}>
            <TextField
              className={classes.textField}
              label="GitHub Profile URL"
              name="github"
              value={formData.github}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
            />
          </div>
          <div className={classes.inputContainer}>
            <TextField
              className={classes.textField}
              label="Twitter Profile URL"
              name="twitter"
              value={formData.twitter}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"      />
              </div>
              <div className={classes.inputContainer}>
                <TextField
                  className={classes.textField}
                  label="Institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  margin="normal"
                />
              </div>
              <div className={classes.inputContainer}>
                <TextField
                  className={classes.textField}
                  label="Year of Study"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  margin="normal"
                />
              </div>
              <div className={classes.inputContainer}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel component="legend">T-Shirt Size *</FormLabel>
                  <RadioGroup
                    row
                    aria-label="t-shirt size"
                    name="tshirtSize"
                    value={formData.tshirtSize}
                    onChange={handleInputChange}
                    required
                  >
                    <FormControlLabel value="S" control={<Radio />} label="S" />
                    <FormControlLabel value="M" control={<Radio />} label="M" />
                    <FormControlLabel value="L" control={<Radio />} label="L" />
                    <FormControlLabel value="XL" control={<Radio />} label="XL" />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className={classes.inputContainer}>
                <TextField
                  className={classes.textField}
                  label="Technologies Known"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  margin="normal"
                />
              </div>
              <div className={classes.inputContainer}>
                <TextField
                  className={classes.textField}
                  label="Reason for Attending"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  margin="normal"
                />
              </div>
              <Button className={`${classes.button} ${style.submitButton}`} variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
        </div> */}
      {/* <iframe className={`${style.iframe}`} data-tally-src="https://tally.so/r/mRxlJj?transparentBackground=1" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="GDSC WoW Nagpur"></iframe> */}
      <iframe
      className={`${style.iframe}`}
        src="https://lu.ma/embed-checkout/evt-7qzQg3iWTufQR2h"
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
}

export default Register;