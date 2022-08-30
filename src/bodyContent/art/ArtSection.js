import BodySection from "../BodySection";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import { SUNSET_COLOR_STRING } from "../../const/style";
import artData from "../../data/art.json"
import { Gallery } from "./Gallery";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const StyledTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
      backgroundColor: SUNSET_COLOR_STRING.midtone,
    },
  });

const StyledTab = styled((props) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: SUNSET_COLOR_STRING.lowlight,
    '&.Mui-selected': {
      color: SUNSET_COLOR_STRING.midtone,
      fontWeight: 'bold'
    },
  }));

export const ArtSection = () => {
    const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <BodySection header={"Artistic Portfolio"} maxWidth="xl">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
          <StyledTab label="Fine Arts" {...a11yProps(0)} />
          <StyledTab label="Logo Design" {...a11yProps(1)} />
          <StyledTab label="Editorial Drawing" {...a11yProps(2)} />
          <StyledTab label="Weeb Drawing" {...a11yProps(2)} />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Gallery data={artData.test} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
  </BodySection>;
};
