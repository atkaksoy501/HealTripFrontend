import {React, useState} from "react";
import { Button, Menu } from "semantic-ui-react";
import { PopupLogin } from "../layouts/PopupLogin";

export default function SignedOut({signIn}) {
  const [buttonLoginPopup , setButtonLoginPopup] = useState(false);
  return (
    <div>
      <Menu.Item>
        <Button onClick={() => setButtonLoginPopup(true)} color="olive">
          Login / Signup
        </Button>
      </Menu.Item>
      <PopupLogin trigger={buttonLoginPopup} setTrigger={setButtonLoginPopup}>
      </PopupLogin>
    </div>
  );
}
