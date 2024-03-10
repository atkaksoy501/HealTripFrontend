import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import avatar from "../images/avatar.jpg";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item style={{marginRight: '2.5em'}}>
        <Image avatar spaced="right" src={avatar}></Image>
        <Dropdown pointing="top left" text="User Name">
          <Dropdown.Menu>
            <Dropdown.Item text="My Profile" icon="info" />
            <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
