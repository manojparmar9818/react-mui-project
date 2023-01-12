import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MainHeading from "../MainHeading";
import Family from "../user/Family";
import UserProfile from "../user/UserProfile";
import UserInputs from "../user/UserInputs";
import BankAccount from "../user/BankAccount";
import Activities from "../user/Activities";
import { createTheme, Stack, ThemeProvider } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Invitations from "../user/Invitations";

const theme = createTheme({
    palette: {
        primary: {
            main: '#F8991F'
        },
    }
})

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index &&
        <Box sx={{ p: 3 }}>
          <Box>
            {children}
          </Box>
        </Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MobileContainer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{ width: "100%", display: { xs: "block", sm: "block", md: "none" } }}
    >
        <Stack direction="row" justifyContent="space-between" spacing={3} sx={{ p: 2 }}>
            <Typography variant='h5' component="h1">My Account</Typography>
            <MoreHorizIcon />
        </Stack>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="responsive-screens"
          sx={{'& .MuiButtonBase-root' : {textTransform: 'capitalize'}}}
          
        >
          <Tab disableRipple label="Profile" {...a11yProps(0)} />
          <Tab disableRipple label="Wallet" {...a11yProps(1)} />
          <Tab disableRipple label="Activities" {...a11yProps(2)} />
          <Tab disableRipple label="Invitations" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Family />
        <UserProfile />
        <UserInputs />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BankAccount />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Activities />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Invitations />
      </TabPanel>
    </Box>
    </ThemeProvider>
  );
}
