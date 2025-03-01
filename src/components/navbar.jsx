import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Auth, API } from "aws-amplify";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LightOrDarkMode from "./lightOrDarkMode";
import SideNav from "./SideNav";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Avatar from "@mui/material/Avatar";
import newDawnSponsor from "../assets/newDawnSponsor.jpeg";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  const { route } = useAuthenticator((context) => [context.route]);

  async function signOut() {
    try {
      await Auth.signOut();
      if (route !== "authenticated") {
        <Navigate to="/dashboard" replace={true} />;
      }
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar style={{ backgroundColor: "#575741" }}>
          <SideNav></SideNav>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Avatar
            style={{
              width: 36,
              height: 36,
            }}
            src={newDawnSponsor}
          />
           <Button color="inherit">
            <Link to="/resources">Resources</Link>
          </Button>
          <Button onClick={signOut} color="inherit">
            Logout
          </Button>
          <LightOrDarkMode />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
