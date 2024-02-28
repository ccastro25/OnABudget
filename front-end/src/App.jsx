import React, { useState } from 'react'; // Make sure to import React from 'react'

import SearchBox from './components/SearchBox';
import MenuComponent from './components/MenuComponent';
import Chart from './components/Chart';
import Budget from './components/Budget';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}  className='content'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Search" icon={<TrackChangesIcon/>} value="1" />
            <Tab label="Budget" icon={<ShoppingCartOutlinedIcon/>} value="2" />
            <Tab label="Track Changes" icon ={<SignalCellularAltOutlinedIcon/>} value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><SearchBox/></TabPanel>
        <TabPanel value="2"><Budget/></TabPanel>
        <TabPanel value="3"><Chart/></TabPanel>
      </TabContext>
    </Box>
  );
}

