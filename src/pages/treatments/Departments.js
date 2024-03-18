import React, { useState, useEffect} from 'react'
import { Menu,DropdownMenu,
  DropdownItem,
  Dropdown } from 'semantic-ui-react'
import DepartmentService from '../../services/departmentService';

export default function Departments() {

  const [departments, setDepartments] = useState([]);

  useEffect(()=>{
    let departmentService = new DepartmentService()
    departmentService.getDepartments().then(result=>setDepartments(result.data))
  },[])

  return (
    <div>
      <Menu vertical>
        {departments.map((department) => (
          //<MenuItem key={department.id}>{department.departmentName}</MenuItem>
          <Dropdown item key={department.id} text={department.departmentName}>
            <DropdownMenu>
              <DropdownItem>English</DropdownItem>
              <DropdownItem>Russian</DropdownItem>
              <DropdownItem>Spanish</DropdownItem>
            </DropdownMenu>
          </Dropdown>   
        ))}
      </Menu>
    </div>
  )
}
