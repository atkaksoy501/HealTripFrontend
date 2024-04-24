import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import avatar from "../images/avatar.jpg";
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2'; 

export default function SignedIn({ signOut }) {
  const userToken = localStorage.getItem('token');
  const user = jwtDecode(userToken);

  const handleSignOut = () => {
    Swal.fire({ 
      title: 'Are You Sure',
      text: "Are You Sure You Want To Sign Out?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        signOut();
        window.location.reload(); 
      }
    });
  };

  return (
    <div>
      <Menu.Item style={{ marginRight: '2.5em' }}>
        <Image avatar spaced="right" src={avatar}></Image>
        <Dropdown pointing="top left" text={user.name} style={{ color: "#fff" }}>
          <Dropdown.Menu>
            <Dropdown.Item text="My Profile" icon="info" />
            <Dropdown.Item onClick={handleSignOut} text="Sign Out" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
