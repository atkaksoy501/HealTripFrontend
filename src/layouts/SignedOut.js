import {React, useState} from "react";
import { Button, Menu } from "semantic-ui-react";
import { PopupLogin } from "../layouts/PopupLogin";

export default function SignedOut({signIn}) {
  const [buttonPopup , setButtonPopup] = useState(false);
  return (
    <div>
      <Menu.Item>
        <Button onClick={() => setButtonPopup(true)} color="olive">
          Login
        </Button>
        <Button color="olive">Sign Up</Button>
      </Menu.Item>
      <PopupLogin trigger={buttonPopup} setTrigger={setButtonPopup}>
      </PopupLogin>
    </div>
  );
}
