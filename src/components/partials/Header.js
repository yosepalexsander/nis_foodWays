import {useState, useEffect} from 'react';
import { AppBar, Avatar, Badge, Box, Button, IconButton, Menu, MenuItem, SvgIcon, Toolbar} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import brand from '../../assets/icons/brand_logo.png';
import fakeData from '../../data/fakeData'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  imgSize: {
    height: "40px",
    width: "auto"
  },
  toolbarPadding: {
    padding: theme.spacing(0, 8)
  },
  buttonSize: {
    width: 100,
    height: 30
  }
  
}));

const Header = () => {
  const classes = useStyles()
  const [data, setData] = useState(null)
  const [auth, setAuth] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl)

  useEffect(() => {
    const {users} = fakeData
    const userLogin = JSON.parse(localStorage.getItem("user login"))
    if (userLogin) {
      const user = users.find(user => user.fullName === userLogin.username)
      if (user) {
        setData(user)
        setAuth(true)
      }
    }
  }, [])
  /** handle logout logic on click
   * @params event
   */
  const handleLogout = (event) => {
    localStorage.removeItem("user ")
    localStorage.clear()
  }
  return (
    <>
        <AppBar position="sticky" elevation={0}>
          <Toolbar 
          className={classes.toolbarPadding}
          disableGutters>
            <div className={classes.title}>
              <Link to="/">
                <img className={classes.imgSize} src={brand} alt="brand logo"/>
              </Link>
            </div>
            {auth ? 
              <Box display="flex" flexDirection="row">
                <IconButton aria-label="cart badge" color="inherit">
                  <Badge badgeContent={0} color="secondary">
                    <SvgIcon color="secondary" viewBox='0 0 35 33'>
                      <path d="M33.3914 11.8778H25.542L20.0242 1.23858C19.8263 0.857133 19.4919 0.575561 19.0822 0.445678C18.6726 0.315795 18.237 0.353256 17.8555 0.551088C17.7229 0.619857 17.6042 0.704896 17.5 0.802172C17.3957 0.704965 17.277 0.619857 17.1444 0.551088C16.763 0.353256 16.3273 0.315863 15.9177 0.445678C15.5081 0.575492 15.1736 0.857133 14.9758 1.23858L9.15961 12.4531C8.96178 12.8345 8.92432 13.2702 9.0542 13.6798C9.0985 13.8196 9.1618 13.9499 9.23945 14.0697H1.60863C1.287 14.0697 1.02539 13.8081 1.02539 13.4865C1.02539 13.1649 1.28707 12.9032 1.60863 12.9032H7.4537C7.73685 12.9032 7.9664 12.6737 7.9664 12.3905C7.9664 12.1074 7.73685 11.8778 7.4537 11.8778H1.60863C0.72167 11.8778 0 12.5995 0 13.4865C0 14.2221 0.496426 14.8435 1.17175 15.0343L4.14121 30.8711C4.33228 31.8905 5.22375 32.6304 6.2609 32.6304H28.7392C29.7763 32.6304 30.6677 31.8905 30.8589 30.8711L33.8283 15.0343C34.5036 14.8435 35 14.2221 35 13.4865C35 12.5994 34.2783 11.8778 33.3914 11.8778ZM18.3276 1.46143C18.4659 1.38972 18.6239 1.37612 18.7724 1.42322C18.9209 1.47025 19.0422 1.57238 19.1139 1.71067L24.93 12.9252C25.0018 13.0635 25.0154 13.2215 24.9683 13.37C24.9212 13.5185 24.8191 13.6398 24.6807 13.7115C24.5425 13.7833 24.3845 13.7968 24.236 13.7498C24.0875 13.7027 23.9662 13.6006 23.8945 13.4623L18.0784 2.2477C17.9303 1.96223 18.0422 1.6095 18.3276 1.46143ZM25.1548 15.0952L24.6697 20.0976H18.0127V15.0952H25.1548ZM17.5 3.35963L22.9843 13.9343C23.0085 13.981 23.0349 14.0262 23.0632 14.0697H11.9368C11.9651 14.0262 11.9915 13.981 12.0157 13.9343L12.5504 12.9033H20.354C20.6371 12.9033 20.8667 12.6738 20.8667 12.3906C20.8667 12.1074 20.6371 11.8779 20.354 11.8779H13.0822L17.5 3.35963ZM10.0699 12.9252L15.8861 1.7106C15.9578 1.57231 16.0791 1.47018 16.2276 1.42315C16.2857 1.40469 16.3453 1.3956 16.4045 1.3956C16.4968 1.3956 16.5882 1.41775 16.6724 1.46136C16.9578 1.6095 17.0697 1.96216 16.9216 2.24763L11.1054 13.4622C11.0337 13.6005 10.9124 13.7026 10.7639 13.7496C10.6155 13.7967 10.4575 13.7831 10.3191 13.7114C10.1808 13.6397 10.0787 13.5184 10.0317 13.3698C9.98457 13.2214 9.99817 13.0635 10.0699 12.9252ZM2.2264 15.0952H8.81501L9.30016 20.0976H3.16436L2.2264 15.0952ZM3.35665 21.1229H9.39962L9.88477 26.1252H4.29454L3.35665 21.1229ZM6.26083 31.605C5.71683 31.605 5.24925 31.217 5.14903 30.6823L4.48684 27.1506H9.98416L10.4162 31.605H6.26083ZM16.9873 31.605H11.4463L11.0143 27.1506H16.9873V31.605ZM16.9873 26.1252H10.9149L10.4297 21.1229H16.9873V26.1252ZM16.9873 20.0976H10.3303L9.84519 15.0952H16.9873V20.0976ZM23.5537 31.605H18.0127V27.1506H23.9857L23.5537 31.605ZM24.0851 26.1253H18.0127V21.123H24.5703L24.0851 26.1253ZM29.851 30.6823C29.7508 31.217 29.2831 31.605 28.7391 31.605H24.5838L25.0158 27.1506H30.5132L29.851 30.6823ZM30.7055 26.1253H25.1153L25.6004 21.123H31.6434L30.7055 26.1253ZM31.8356 20.0975H25.6999L26.1851 15.0951H32.7736L31.8356 20.0975ZM33.3914 14.0698H33.383C33.3827 14.0698 33.3824 14.0698 33.3821 14.0698H25.7605C25.8382 13.9499 25.9014 13.8196 25.9458 13.6798C26.0267 13.4247 26.0426 13.1593 25.9953 12.9033H33.3914C33.713 12.9033 33.9746 13.165 33.9746 13.4865C33.9746 13.8081 33.7129 14.0698 33.3914 14.0698Z"/>
                    </SvgIcon>
                  </Badge>
                </IconButton>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                >
                  <Avatar  variant="circular" alt="user photo" src={data.fotoprofil} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem>Profile</MenuItem>
                  <MenuItem onClick={e => handleLogout(e)}>Logout</MenuItem>
                </Menu>
              </Box>
            : 
            <div>
              <Button
                className={classes.buttonSize}
                sx={{ml: 3}}
                variant="contained" 
                color="secondary" 
                component={Link}
                to="/register"
              > 
                Register
              </Button>
              <Button
                className={classes.buttonSize}
                sx={{ml: 3}}
                variant="contained" 
                color="secondary" 
                component={Link}
                to="/login"
              > 
                Login
              </Button>

            </div>
            }
          </Toolbar>
        </AppBar>
    </>
  )
}

export default Header;