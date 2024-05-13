import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, CardBody, CardTitle, Card, Button} from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";
import ImageComponentFromBase64 from "./ImageComponentFromBase64";
import HospitalDepartments from "./HospitalDepartments";
import HospitalTreatments from "./HospitalTreatments";
import { PopupForm } from "./PopupForm";
import { PopupLogin } from "../../layouts/PopupLogin";

export default function Hospital() {
  const { hospital_id } = useParams();
  const [hospitalData, setHospitalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState();
  const [selectedDepartmentName, setSelectedDepartmentName] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [tokenExists, setTokenExists] = useState(false);

  const handleDepartmentClick = (departmentId, departmentName) => {
    setSelectedDepartmentId(departmentId);
    setSelectedDepartmentName(departmentName);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const fetchHospitalData = async () => {
      try {
        const response = await fetch(
          `https://healtrip.azurewebsites.net/hospital/get/${hospital_id}`
        );
        if (response.ok) {
          const data = await response.json();
          setHospitalData(data);
          setLoading(false);
        } else {
          throw new Error("Failed to fetch hospital data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchHospitalData();
  }, [hospital_id]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setTokenExists(true);
    } else {
      setTokenExists(false);
    }
  }, []);

  return (
    <Container
      data-aos="fade-up"
      style={{ marginTop: "80px", marginBottom: "30px" }}
    >
      {loading ? (
        <Row className="justify-content-center">
          <Col>
            <div className="d-flex justify-content-center">
              <ClipLoader
                color={"#295d6d"}
                loading={loading}
                size={90}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col lg="4" data-aos="fade-right">
            <div>
              <ImageComponentFromBase64
                base64String={hospitalData.hospitalImages[0].image}
              />
            </div>
          </Col>

          <Col lg="8" className="pt-4 pt-lg-0 content" data-aos="fade-left">
            <h2 style={{ color: "#295d6d" }}>{hospitalData.hospitalName}</h2>
            <p
              style={{ color: "#295D6D", fontSize: "1.1rem" }}
              className="fst-italic"
            >
              {"Bed capacity: " + hospitalData.bed_capacity}
            </p>
            <p
              style={{ color: "#295D6D", fontSize: "1.1rem" }}
              className="fst-italic"
            >
              {"Contact phone: " + hospitalData.contactPhone}
            </p>
            <p
              style={{ color: "#295D6D", fontSize: "1.1rem" }}
              className="fst-italic"
            >
              {"Address: " +
                hospitalData.address.addressDetail +
                " " +
                hospitalData.address.city +
                " " +
                hospitalData.address.country}
            </p>
          </Col>
          <div style={{display:"flex", justifyContent:"center"}}>
            <Button className="button" style={{ backgroundColor: '#295D6D', fontSize:"18px", borderRadius:"20px", width:"36%", fontWeight:"bold", marginTop:"30px", marginBottom:"40px"}} onClick={togglePopup}><span>Contact with {hospitalData.hospitalName}</span></Button> 
          </div>
      
          <HospitalDepartments hospital_id={hospital_id} onDepartmentClick={handleDepartmentClick} />

          <HospitalTreatments departmentId={selectedDepartmentId} departmentName={selectedDepartmentName} />

          <h1 style={{ marginTop: "30px", color: "#295D6D" }}>Doctors</h1>
          {hospitalData.doctors.map((doctor) => (
            <Col
              lg={3}
              md={6}
              key={doctor.id}
              style={{
                marginTop: "10px",
                display: "flex",
              }}
            >
              <Link
                to={`/doctors/${encodeURIComponent(doctor.id)}`}
                state={{ doctor }}
              >
                <div className="link-image">
                  <Card
                    className="custom-card-content"
                    style={{
                      width: "100%",
                    }}
                  >
                    {console.log(doctor)}
                    {doctor.doctorImage && (
                      <ImageComponentFromBase64
                        base64String={doctor.doctorImage}
                      />
                    )}
                    <CardBody>
                      <CardTitle tag="h5" className="custom-card-header">
                        {doctor.doctorName}
                      </CardTitle>
                    </CardBody>
                  </Card>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      )}
          {tokenExists ? (
            <PopupForm trigger={showPopup} setTrigger={setShowPopup} /> 
          ) : (
            <PopupLogin trigger={showPopup} setTrigger={setShowPopup}/>
          )}
    </Container>
  );
}
