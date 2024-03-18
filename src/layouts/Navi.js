import React, { useState } from "react";
import { Collapse, Navbar, Nav, NavItem, NavLink} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import HealingIcon from "@mui/icons-material/Healing";
import {
  IconButton,
  Typography,
  useMediaQuery,
  Stack,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { Link } from "react-router-dom";

export const Navi = ({ direction, ...args }) => {
  const isMobile = useMediaQuery("(max-width:920px)");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  function handleSignOut(params) {
    setIsAuthenticated(false);
  }

  function handleSignIn(params) {
    setIsAuthenticated(true);
  }

  return (
    <div style={{ position: "fixed", top: "0", width: "100%", zIndex: "1000" }}>
      <Navbar className="navbar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
            edge="start"
            style={{ color: "#fff", left: "10px" }}
            aria-label="logo"
          >
            <HealingIcon />
          </IconButton>
          <div style={{ marginLeft: "10px" }}>
            {" "}
            {/* Apply margin here */}
            <Typography
              variant="h6"
              component="div"
              className="navbar-header"
              sx={{ flexGrow: 1 }}
            >
              <Link to="/">HealTrip</Link>
            </Typography>
          </div>
        </div>
        {isMobile ? (
          <>
            {menuOpen ? (
              <MenuIcon onClick={toggleMenu} style={{ color: "#fff" }} />
            ) : (
              <MenuIcon onClick={toggleMenu} style={{ color: "#fff" }} />
            )}

            {menuOpen && (
              <Collapse isOpen={isMobile} navbar>
                <Nav className="me-auto" navbar>
                  <Link to="/treatments">
                    <NavItem>
                      <NavLink className="navlink">Treatments</NavLink>
                    </NavItem>
                  </Link>
                  <Link to="/about-us">
                    <NavItem>
                      <NavLink className="navlink">About Us</NavLink>
                    </NavItem>
                  </Link>
                  <Link to="/guidance">
                    <NavItem>
                      <NavLink className="navlink">Guidance</NavLink>
                    </NavItem>
                  </Link>
                  <Link to="/blogs">
                    <NavItem>
                      <NavLink className="navlink">Blogs</NavLink>
                    </NavItem>
                  </Link>
                  <Link to="/contact">
                    <NavItem>
                      <NavLink className="navlink">Contact</NavLink>
                    </NavItem>
                  </Link>
                  <Link to="/contact">
                    <NavItem>
                      <NavLink>
                        <Button
                          className="medical-advice-button"
                          style={{
                            backgroundColor: "#265867",
                            borderRadius: "30px",
                            width: "150px",
                            fontWeight: "bold",
                          }}
                        >
                          Get Medical Advice
                        </Button>
                      </NavLink>
                    </NavItem>
                  </Link>
                  <NavItem>
                    <NavLink>
                      {isAuthenticated ? (
                        <SignedIn signOut={handleSignOut} />
                      ) : (
                        <SignedOut signIn={handleSignIn} />
                      )}
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            )}
          </>
        ) : (
          <Stack direction="row" spacing={2}>
            <Link to="/treatments">
              <Button className="navlink">Treatments</Button>
            </Link>
            <Link to="/about-us">
              <Button className="navlink">About Us</Button>
            </Link>
            <Link to="/guidance">
              <Button className="navlink">Guidance</Button>
            </Link>
            <Link to="/blogs">
              <Button className="navlink">Blogs</Button>
            </Link>
            <Link to="/contact">
              <Button className="navlink">Contact</Button>
            </Link>
            <Link to="/contact">
              <Button
                className="medical-advice-button"
                style={{
                  backgroundColor: "#265867",
                  borderRadius: "30px",
                  width: "150px",
                  fontWeight: "bold",
                }}
              >
                Get Medical Advice
              </Button>
            </Link>
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Stack>
        )}
      </Navbar>
    </div>
  );
};
