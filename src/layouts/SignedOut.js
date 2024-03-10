import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={signIn} color="olive">
          Login
        </Button>
        <Button color="olive">Sign Up</Button>
      </Menu.Item>
    </div>
  );
}
