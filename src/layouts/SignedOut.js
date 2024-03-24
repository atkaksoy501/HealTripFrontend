import {React, useState} from "react";
import { Button, Menu } from "semantic-ui-react";
import { PopupLogin } from "../layouts/PopupLogin";
import { Signup } from "./Signup";

export default function SignedOut({signIn}) {
  const [buttonLoginPopup , setButtonLoginPopup] = useState(false);
  const [buttonSignupPopup , setButtonSignupPopup] = useState(false);
  return (
    <div>
      <Menu.Item>
        <Button onClick={() => setButtonLoginPopup(true)} color="olive">
          Login
        </Button>
        <Button onClick={() => setButtonSignupPopup(true)} color="olive">Sign Up</Button>
      </Menu.Item>
      <PopupLogin trigger={buttonLoginPopup} setTrigger={setButtonLoginPopup}>
      </PopupLogin>
      <Signup trigger={buttonSignupPopup} setTrigger={setButtonSignupPopup}></Signup>
    </div>
  );
}
