import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container,Row,Col,CardBody,CardTitle,Card, } from "reactstrap";
import ImageComponentFromBase64 from "../ImageComponentFromBase64";
import photo1 from "../blog1.jpg";
import axios from "axios";


export default function BlogDetails1() {
  
    
    const [retreatData, setRetreatData] = useState([]);

  
    useEffect(() => {
     
        axios
          .post(
            `https://healtrip.azurewebsites.net/retreat/getByName`,{
              retreatNames: ['nose']
            },
          )
          .then((response) => {
            setRetreatData(response.data);
          })
          .catch((error) => {
            console.error("Error fetching treatments:", error);
          });
      
    },[] );

  return (
    <Container style={{ marginTop: "5%" }}>
      <img src={photo1} alt="Sude" className="img-fluid" />
      <h2 className="content_header">
        What nose fillers can do for your nose?
      </h2>
      <p className="content_text">
        Are you considering nose filler in Turkey? Look no further than HealTrip Global, where we offer top-quality plastic surgery services to patients from around the world. Our team of experienced plastic surgeons is dedicated to helping you achieve your desired look, whether it's a bridge nose filler or other nose reshaping procedures.
        <br/><br/>
        Bridge nose fillers are a popular option for patients who want to add definition to their nose bridge or correct a flat or asymmetrical nose shape. At HealTrip Global, we offer a range of filler options for the bridge of the nose, including Juvederm and other dermal fillers.
        <br/><br/>
        If you're looking to address a nose bump or other irregularities, our dermal filler for nose bump procedure may be the solution you're looking for. This non-surgical procedure involves injecting dermal fillers into the nose to smooth out bumps and create a more balanced and aesthetically pleasing nose shape.
        <br/><br/>
        For patients with a crooked nose or nostril asymmetry, our dermal fillers for crooked nose procedure may be the answer. This non-surgical treatment involves using dermal fillers to correct the shape of the nose and improve the appearance of the nostrils.
        <br/><br/>
        At HealTrip Global, we also offer nose slimming injections and non-invasive nose slimming procedures for patients who want to achieve a more slender and streamlined nose shape. Our experienced plastic surgeons will work with you to determine the best treatment plan based on your individual needs and preferences.
        <br/><br/>
        If you're interested in a liquid rhinoplasty for a bulbous nose, our team can help. Our non-surgical rhinoplasty for bulbous nose procedure involves using dermal fillers to reshape and refine the nose without the need for surgery. We also offer nose filler for wide nose and nose filler for smaller nose procedures for patients who want to adjust the size or shape of their nose.
        <br/><br/>
        In addition to nose fillers, we offer lip and nose filler procedures to help balance the appearance of the face. Our experienced plastic surgeons can recommend the best treatment plan to achieve your desired look, whether it's a straighter nose, slimmer nose, or more defined lips.
        <br/><br/>
        If you're interested in nose filler in Turkey, HealTrip Global is here to help. Contact us today to schedule a consultation and learn more about our top-quality plastic surgery services.
      </p>
      
      <div>
            <Container>
              <Row>
                {retreatData.map((retreat) => (
                  <Col
                    md={4}
                    key={retreat.id}
                    style={{
                      padding: "1.5%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Link
                      to={`/treatments/${encodeURIComponent(
                        retreat.id
                      )}`}
                      state={{ retreat }}
                    >
                      <div className="link-image">
                        <Card
                          className="custom-card-content"
                          style={{
                            width: "18rem",
                          }}
                        >
                          <ImageComponentFromBase64
                            base64String={retreat.image.image}
                          />
                          <CardBody>
                            <CardTitle tag="h5" className="custom-card-header">
                              {retreat.retreat_name}
                            </CardTitle>
                          </CardBody>
                        </Card>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
</Container>
    

  );
}
