import React, { useState, useEffect} from 'react'
import { GridColumn, Grid, CardHeader,
  CardDescription,
  CardContent,
  Card } from 'semantic-ui-react'
import TreatmentService from '../../services/treatmentService'
import ImageComponentFromBase64 from './ImageComponentFromBase64';

export default function Treatments() {

  const [treatments, setTreatments] = useState([]);

  useEffect(()=>{
    let treatmentService = new TreatmentService()
    treatmentService.getTreatments().then(result=>setTreatments(result.data))
  },[])

  return (
    <div>
      <Grid columns={3}>
        {treatments.map((treatment) => (
          <GridColumn key={treatment.id}>
            <Card>
              <ImageComponentFromBase64 base64String={treatment.image.image}></ImageComponentFromBase64>
              <CardContent>
                <CardHeader>{treatment.retreat_name}</CardHeader>
                <CardDescription>{treatment.description}</CardDescription>
              </CardContent>
            </Card>
          </GridColumn>
        ))}
      </Grid>
    </div>
  );
}
