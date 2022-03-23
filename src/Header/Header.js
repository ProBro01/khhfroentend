import React from 'react'
import logo from "../images/logo_1.jpg"
import { Button } from '@mui/material'
import "../Header/Header.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getStyles } from "../home_page/HomePage.js"
// hooks
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
// actions
import { languageaction, innerhtmlsetter } from "../actions/languageaction.js"


function Header() {

  const language = useSelector(state => state.languagereducer)
  const innerhtml = useSelector(state => state.innerhtmlcontroller)
  const dispatch = useDispatch()

  const theme = createTheme({

    palette: {

      neutral: {
        main: '#fff',
        contrastText: '#fff',
      },
    },
  });

  const languages = [
    'English',
    'Hindi',
    'Gahrwali',
    'kumaoni'
  ];

  // useEffect(async () => {
  //     var recivedinnerhtml = await fetch("http://192.168.113.14:4000/getinnerhtmldata", {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ language: "english" })
  //     })
  //       .then(response => response.json())
  //       .then(json => json)
  //     dispatch(innerhtmlsetter(recivedinnerhtml))
  // })

  const handleChange = async (event) => {
    var eveval = event.target.value
    dispatch(languageaction(eveval.toUpperCase()));
    var recivedinnerhtml = await fetch("http://192.168.113.14:4000/getinnerhtmldata", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ language: eveval })
    })
      .then(response => response.json())
      .then(json => json)
    dispatch(innerhtmlsetter(recivedinnerhtml))
  };

  return (
    <div>
      <div className='Homepage_middle_header'>
        <img src={logo} className="header_logo" />

        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={language}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              style={{ backgroundColor: "white" }}
            >
              <MenuItem disabled value=""><em>language</em></MenuItem>
              {languages.map((name) => {
                return <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, "Hindi", theme)}
                >
                  {name}
                </MenuItem>
              })}
            </Select>

          </FormControl>
        </div>
        <ThemeProvider theme={theme}>
          <Button variant='outlined' color="neutral" className='header_Button'>Register</Button>
          <Button variant='outlined' color="neutral" className='header_Button'>Log in</Button>
        </ThemeProvider>

      </div>
      <div className='Homepage_lower_header'>
        <div className='Homepage_lower_header_sub_1'>
          <div className='Homepage_lower_header_tab'>{innerhtml === {} ? null : innerhtml.home}</div>
          <div className='Homepage_lower_header_tab'>{innerhtml === {} ? null : innerhtml.agriculture}</div>
          <div className='Homepage_lower_header_tab'>{innerhtml === {} ? null : innerhtml.animalhusbandary}</div>
          <div className='Homepage_lower_header_tab'>{innerhtml === {} ? null : innerhtml.organic}</div>
          <div className='Homepage_lower_header_tab'>{innerhtml === {} ? null : innerhtml.governmentschemes}</div>
          <div className='Homepage_lower_header_tab'>{innerhtml === {} ? null : innerhtml.expert}</div>
          <div className='Homepage_lower_header_tab'>{innerhtml === {} ? null : innerhtml.parterwithus}</div>
          <div className='Homepage_lower_header_tab'>{innerhtml === {} ? null : innerhtml.blog}</div>
        </div>

      </div>
    </div>
  )
}

export default Header