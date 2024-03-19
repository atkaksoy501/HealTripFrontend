import React, { useState, useEffect} from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'
import DepartmentService from '../../services/departmentService';

export default function Departments() {

  const [departments, setDepartments] = useState([]);

  useEffect(()=>{
    let departmentService = new DepartmentService()
    departmentService.getDepartments().then(result=>setDepartments(result.data))
  },[])

  return (
    <div>
      <Menu fluid widths={departments.length}>
        {departments.map((department) => (
          <MenuItem  key={department.id} name={department.departmentName}/>
        ))}  
      </Menu>
    </div>
  )
}
