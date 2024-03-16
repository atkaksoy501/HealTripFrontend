import React from 'react'
import Departments from './Departments'
import Treatments from './Treatments'
import { Container, GridRow, GridColumn, Grid } from 'semantic-ui-react'
import "./Dashboard.css";


export default function Dashboard() {
  return (
    <div>
      <Container className="main">
        <Grid>
          <GridRow>
            <GridColumn width={4}>
              <Departments />
            </GridColumn>
            <GridColumn width={12}>
              <Treatments />
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </div>
  );
}
