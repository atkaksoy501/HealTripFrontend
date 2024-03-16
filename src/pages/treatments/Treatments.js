import React, { useState, useEffect} from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Label,
  Menu,
  Table,
} from 'semantic-ui-react'
import TreatmentService from '../../services/treatmentService'

export default function Treatments() {

  const [treatments, setTreatments] = useState([]);

  useEffect(()=>{
    let treatmentService = new TreatmentService()
    treatmentService.getTreatments().then(result=>setTreatments(result.data))
  })

  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Treatment</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <TableHeaderCell>Header</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {treatments.map((treatment) => (
            <TableRow key={treatment.id}>
              <TableCell>{treatment.retreat_name}</TableCell>
              <TableCell>{treatment.description}</TableCell>
              <TableCell>Cell</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableHeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <MenuItem as="a" icon>
                  <Icon name="chevron left" />
                </MenuItem>
                <MenuItem as="a">1</MenuItem>
                <MenuItem as="a">2</MenuItem>
                <MenuItem as="a">3</MenuItem>
                <MenuItem as="a">4</MenuItem>
                <MenuItem as="a" icon>
                  <Icon name="chevron right" />
                </MenuItem>
              </Menu>
            </TableHeaderCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
