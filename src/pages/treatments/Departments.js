import React from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'

export default function Departments() {
  return (
    <div>
      <Menu pointing vertical>
        <MenuItem name="home" />
        <MenuItem name="messages" />
        <MenuItem name="friends" />
      </Menu>
    </div>
  )
}
