import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container,Row,Col,CardBody,CardTitle,Card, } from "reactstrap";
import photo3 from "../blog3.jpg";
import axios from "axios";
import ImageComponentFromBase64 from "../ImageComponentFromBase64";

export default function BlogDetails3() {
  const [retreatData, setRetreatData] = useState([]);

  useEffect(() => {
   
      axios
        .post(
          `https://healtrip.azurewebsites.net/retreat/getByName`,{
            retreatNames: ['Dental Crown','Dental Bridge','Teeth Whitening','Tooth Extraction','Dental Implant']
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
      <img src={photo3} alt="Good Oral Hygiene" className="img-fluid" />
      <h2 className="content_header">
        Good Oral Hygiene: Tips for Maintaining Healthy Teeth and Gums
      </h2>
      <p className="content_text">
        Good oral hygiene is essential to maintain healthy teeth and gums. Oral hygiene refers to the practices that we use to keep our mouths clean and free from harmful bacteria. Poor oral hygiene can lead to a range of dental problems such as cavities, gum disease, and bad breath. In this article, we will discuss what is good oral hygiene and how to maintain it.
        <br /><br />
        <strong>Brushing</strong><br />
        Brushing your teeth twice a day is an essential part of good oral hygiene. Brushing removes plaque, a sticky film of bacteria that can build up on teeth and gums. Plaque is the main cause of tooth decay and gum disease. Use a soft-bristled toothbrush and fluoride toothpaste to brush your teeth. Hold the brush at a 45-degree angle to your teeth and brush in a circular motion. Be sure to brush all surfaces of your teeth, including the front, back, and top.
        <br /><br />
        <strong>Flossing</strong><br />
        Flossing is another crucial part of good oral hygiene. Flossing removes food particles and plaque that are trapped between teeth and below the gum line. Use about 18 inches of floss and wind it around your middle fingers, leaving a few inches of floss between them. Use a gentle back-and-forth motion to guide the floss between your teeth. Curve the floss around the base of each tooth, making sure you go below the gum line. Use a clean section of floss for each tooth.
        <br /><br />
        <strong>Mouthwash</strong><br />
        Mouthwash is an excellent addition to your oral hygiene routine. Mouthwash can help kill bacteria that cause bad breath, gingivitis, and other oral health problems. Choose an antiseptic mouthwash that contains fluoride. Swish the mouthwash around your mouth for about 30 seconds and spit it out. Do not swallow the mouthwash.
        <br /><br />
        <strong>Dental Visits</strong><br />
        Regular dental visits are crucial to maintaining good oral hygiene. Visit your dentist every six months for a cleaning and check-up. Your dentist can detect and treat any dental problems early before they become more serious. A professional cleaning can remove any plaque and tartar buildup that you may have missed with brushing and flossing.
        <br /><br />
        <strong>Healthy Diet</strong><br />
        A healthy diet is also essential to good oral hygiene. Limit your intake of sugary and acidic foods and drinks, such as candy, soda, and fruit juice. These types of foods and drinks can erode tooth enamel and cause cavities. Eat a balanced diet that includes plenty of fruits, vegetables, whole grains, and lean proteins. Drinking plenty of water can also help flush bacteria and food particles from your mouth.
        <br /><br />
        In conclusion, good oral hygiene is essential to maintaining healthy teeth and gums. Brush your teeth twice a day, floss daily, use mouthwash, visit your dentist regularly, and eat a healthy diet. By following these simple steps, you can keep your mouth healthy and prevent dental problems.
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
