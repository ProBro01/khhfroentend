import React from 'react'
import "../home_page/HomePage.css"
import image from "../images/image_5.jpg"
import logo from "../images/logo_1.jpg"

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// hooks
import { useSelector } from 'react-redux';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Districtnames = [
  'Almora',
  'Bageshwar',
  'Chamoli',
  'Champawat',
  'Dehradun',
  'Haridwar	',
  'Nainital',
  'Pauri Garhwal',
  'Pithoragarh',
  'Rudraprayag',
  'Tehri Garhwal',
  'Udham Singh Nagar',
  'Uttarkashi'
];

export function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


function HomePage() {

  const innerhtml = useSelector(state => state.innerhtmlcontroller)

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const [district, setdistrict] = React.useState('');

  const handleChange = (event) => {
    console.log(event.target.value)
    setdistrict(event.target.value);
  };

  return (
    <div>
                
        <div className='HomepageBackgroundImage'>

          <img src= {image} className="Image" />
          
          <div className='inside_back_image'>
            <div className='headline'>
                {innerhtml.mainquote}  
            </div>

            <div className='Searchbar_homepage'>
              <FormControl sx={{ m: 1, minWidth: 470, marginTop : "10px", marginBottom : "10px" }}>
                <Select
                  value={district}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  style ={{backgroundColor : "white"}}
                >                  
                  <MenuItem disabled value=""><em>Select your district</em></MenuItem>
                  {Districtnames.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
                
              </FormControl>
              <button className='search_button'>
                    Search
              </button>
            </div>
          </div>
          
        </div>
        


    </div>
  )
}

export default HomePage