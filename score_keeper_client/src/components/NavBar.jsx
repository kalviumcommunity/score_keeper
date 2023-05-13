import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom'
import fevicon from './Pictures/Logo.png'
import LoginButton from './Login/LoginButton'




function ResponsiveAppBar() {

  return (
    <AppBar style={{backgroundColor:"black",height:"13vh", padding:"1.5vh", borderBottom:"3px solid white",position:"fixed"}}>
      <Container maxWidth="xl" style={{backgroundColor:"black"}}>
        <Toolbar disableGutters style={{backgroundColor:"black"}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to={'/'} className='logo'><img className='logo' src={fevicon} alt="" /></Link>
          </Typography>

            
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} style={{backgroundColor:"black"}}/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to={'/'} className='logo'><img className='logo' src={fevicon} alt="" /></Link>
          </Typography>

          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:"space-evenly", backgroundColor:"black"} }}>
            <Link to={'/'} style={{textShadow: "2px 2px #ff0000"}}>HOME</Link>
            <Link to={'/about'} style={{textShadow: "2px 2px #ff0000"}}>ABOUT</Link>
            <Link to={'/rules'} style={{textShadow: "2px 2px #ff0000"}}>RULES</Link>
            <Link to={'/news'} style={{textShadow: "2px 2px #ff0000"}}>NEWS</Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <LoginButton>LogIn</LoginButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;