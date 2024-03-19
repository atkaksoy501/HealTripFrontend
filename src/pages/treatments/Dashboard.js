import React from 'react'
import Departments from './Departments'
import Treatments from './Treatments'
import { Container, GridRow, GridColumn, Grid } from 'semantic-ui-react'
import "./Dashboard.css";


export default function Dashboard() {
  return (
    <div style={{marginTop:"59px"}}>
      <Container className="main">
        <Departments />
        <Treatments />
      </Container>
    </div>
  );
}
