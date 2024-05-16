import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import { Container,Row,Col,CardBody,CardTitle,Card,  } from "reactstrap";
import ImageComponentFromBase64 from "../ImageComponentFromBase64";
import photo8 from "../blog8.jpg";
import axios from "axios";

export default function BlogDetails8() {
  const [retreatData, setRetreatData] = useState([]);
    const [loading, setLoading] = useState(true);
    const requestData = {
      retreatNames: ['nose']
    };
  
    useEffect(() => {
      setLoading(true);
     
        axios
          .post(
            `https://healtrip.azurewebsites.net/retreat/getByName`,{
              retreatNames: ['nose']
            },
          )
          .then((response) => {
            setRetreatData(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching treatments:", error);
            setLoading(false);
          });
      
    },[] );

    return (
      <Container style={{ marginTop: "5%" }}>
        <img src={photo8} alt="rinoplasti" className="img-fluid" />
        <h2 className="content_header">How Much Does Rhinoplasty Cost in Turkey?</h2>
        <p className="content_text">
          Turkey is globally renowned for its expertise in aesthetic surgery. When people think of rhinoplasty in Turkey, they often associate it with quality and affordability. If you are considering a rhinoplasty operation, your first question is likely to be, "How much does rhinoplasty cost in Turkey?" At this point, it's essential to look at the factors that influence the pricing of rhinoplasty surgery.
        </p>
        <h3 className="content_subheader">Factors Influencing Rhinoplasty Pricing</h3>
        <p className="content_text">
          <strong>City where the Surgery is Performed:</strong> Different cities in Turkey have varying costs of living. For example, prices in major cities like Istanbul and Ankara may be higher. However, these cities offer superior facilities and services, so evaluating based on this is beneficial.
          <br /><br />
          <strong>Hospital or Clinic:</strong> The reputation and quality of the hospital or clinic where the operation is performed can affect the pricing.
          <br /><br />
          <strong>Surgeon's Experience:</strong> One of the most critical factors influencing rhinoplasty prices is the surgeon's experience. As a surgeon's experience increases, the prices may also rise.
          <br /><br />
          <strong>Scope and Complexity of the Procedure:</strong> Some rhinoplasty procedures can be complex, leading to price variations. Additionally, combining rhinoplasty with other aesthetic surgeries like breast augmentation can affect the cost.
          <br /><br />
          <strong>Materials and Techniques Used:</strong> Rhinoplasty can be performed using various materials and techniques. The use of advanced techniques like Piezo rhinoplasty may result in higher costs due to their precision and advantages, such as less bleeding, faster recovery, and reduced risk.
        </p>
        <h3 className="content_subheader">Piezo Rhinoplasty for Nose Aesthetics</h3>
        <p className="content_text">
          Piezo rhinoplasty is a technique that utilizes ultrasonic sound waves for nose aesthetics. It is preferred for its precise results compared to traditional rhinoplasty. Advantages of Piezo rhinoplasty include less bleeding, quicker recovery, and reduced risk. Choosing such innovative techniques can impact the price of a rhinoplasty operation.
        </p>
        <h3 className="content_subheader">Types of Rhinoplasty and Price Differences</h3>
        <p className="content_text">
          Rhinoplasty surgery can be categorized into various types. Ethnic rhinoplasty is one such category designed for individuals of different ethnic backgrounds. For example, someone of African descent may seek a rhinoplasty that aligns with their ethnic features. This results in a personalized surgical approach. Ethnic rhinoplasty can be performed in Turkey at varying prices, depending on individual preferences.
        </p>
        <h3 className="content_subheader">Rhinoplasty Surgery in Turkey</h3>
        <p className="content_text">
          Rhinoplasty prices in Turkey vary based on several factors. However, Turkey generally offers more affordable rates compared to other countries. Before getting rhinoplasty in Turkey, it is important to obtain price quotes from different surgeons and gather information about the risks involved. In this regard, Healtrip Global can be considered. Explore the services offered by Healtrip Global for a reliable and cost-effective rhinoplasty operation.
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