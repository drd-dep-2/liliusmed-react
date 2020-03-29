import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
<<<<<<< HEAD
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
const getHospitalInfoEndpoint = "/dashboard/getHospitalData";
const getHospitalInfoOptions ={
  method: "POST",
  
  headers: {
    "Content-Type": "application/json",     
  },
  body: JSON.stringify({
    
    "hospitalName": "Norwood Hospital"
  })
=======
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
//Icon Images
import bedWhite from "../../Icons/bedWhite.png";
import faceshieldWhite from "../../Icons/faceshieldWhite.png"
import glovesWhite from "../../Icons/glovesWhite.png"
import hazardClothingWhite from "../../Icons/hazardClothingWhite.png"
import maskWhite from "../../Icons/maskWhite.png"
import medicalDeliveryWhite from "../../Icons/medicalDeliveryWhite.png"
import medicalPersonWhite from "../../Icons/medicalPersonWhite.png"
import personWithVirusesWhite from "../../Icons/personWithVirusesWhite.png"
import respiratorWhite from "../../Icons/respiratorWhite.png"
import ventilatorWhite from "../../Icons/ventilatorWhite.png"

const covidIcons = {
  "bedWhite": bedWhite,
  "faceshieldWhite": faceshieldWhite,
  "glovesWhite": glovesWhite,
  "hazardClothingWhite": hazardClothingWhite,
  "maskWhite": maskWhite,
  "medicalDeliveryWhite": medicalDeliveryWhite,
  "medicalPersonWhite": medicalPersonWhite,
  "personWithVirusesWhite": personWithVirusesWhite,
  "respiratorWhite": respiratorWhite,
  "ventilatorWhite": ventilatorWhite
>>>>>>> origin/development
}
const cardStyles = {
  hospitalCard:{
    backgroundColor: '#373540',
    color: '#fff',
    margin: "18px"
  },
  card:{
    backgroundColor: '#373540', 
    color: '#fff',
    padding: "10px",
    borderRadius: "5px",
    margin: "20px 3px",
    height: "150px"
  },
  cardHeader: {
    color: "fff"
  },
  button: {
    backgroundColor: '#fff',
    color: 'red'
  },
  list: {
    listStyle: 'none'
  }
}

const hospitalData = {
  hospital:{
    name: "Sample",
    location: "Somewhere",
    phone: "215-658-3121",
    donate: "$100",
    lastUpdated: "Today"
  },
  general: [
    {
      status: "medicalPersonWhite",
      arr: [
        {
          name: "A",
          count: "1"
        },
        {
          name: "A",
          count: "2"
        }
      ]
    },
    {
      status: "respiratorWhite",
      arr: [
        {
          name: "A",
          count: "1"
        },
        {
          name: "A",
          count: "2"
        }
      ]
    },
    {
      status: "ventilatorWhite",
      arr: [
        {
          name: "A",
          count: "1"
        },
        {
          name: "A",
          count: "2"
        }
      ]
    },
  ],
  PPE: [
    {
      status: "bedWhite",
      arr: [
        {
          name: "A",
          count: "1"
        },
        {
          name: "A",
          count: "2"
        }
      ]
    },
    {
      status: "faceshieldWhite",
      arr: [
        {
          name: "A",
          count: "1"
        },
        {
          name: "A",
          count: "2"
        }
      ]
    },
    {
      status: "glovesWhite",
      arr: [
        {
          name: "A",
          count: "1"
        },
        {
          name: "A",
          count: "2"
        }
      ]
    },
    {
      status: "hazardClothingWhite",
      arr: [
        {
          name: "A",
          count: "1"
        },
        {
          name: "A",
          count: "2"
        }
      ]
    },
    {
      status: "maskWhite",
      arr: [
        {
          name: "A",
          count: "1"
        },
        {
          name: "A",
          count: "2"
        }
      ]
    },
    {
      status: "medicalDeliveryWhite",
      arr: [
        {
          name: "A",
          count: "1"
        },
        {
          name: "A",
          count: "2"
        }
      ]
    },
  ]
}

export default function CenteredGrid() {

  return (
    <Container style={{padding: "20px 0px"}}>
      <Row>
        <Col>
          <Card style={cardStyles.hospitalCard}>
            <HospitalCardItem data={hospitalData.hospital} />
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <h6>General</h6>
      </Row>
      <Container fluid>
        <Row className="justify-content-md-center">
          {
            hospitalData.general.map((item, index) =>
              <Col xs={4} key={index}>
                <main style={cardStyles.card}>
                  <Row
                    style={
                      {
                        backgroundImage: `linear-gradient(rgba(55, 53, 64, 0.5), rgba(55, 53, 64, 0.5)), url(${covidIcons[item.status]})`, 
                        backgroundPosition: "center", 
                        backgroundRepeat: "no-repeat", 
                        backgroundSize: "30%",
                        padding: '10px'
                      }
                    }
                  >
                    <h6>{item.status}</h6>
                    <CardItem data={item.arr} />
                  </Row>
                </main>
              </Col>
            )
          }
        </Row>
      </Container>
      <Row className="justify-content-md-center">
        <h6>Personal Protective Equipment</h6>
      </Row>
      <Container fluid>
        <Row className="justify-content-md-space-around">
          {
            hospitalData.PPE.map((item, index)=>
            <Col xs={4} key={index}>
              <main style={cardStyles.card}>
                <Row 
                  style={
                    {
                      backgroundImage: `linear-gradient(rgba(55, 53, 64, 0.5), rgba(55, 53, 64, 0.5)), url(${covidIcons[item.status]})`,
                      backgroundPosition: "center", 
                      backgroundRepeat: "no-repeat", 
                      backgroundSize: "30%",
                      padding: '10px'
                    }
                  }
                >
                  <h6 style={cardStyles.cardHeader}>{item.status}</h6>              
                  <CardItem data={item.arr} />
                </Row>
              </main>
            </Col>
            )
          }
        </Row>
      </Container>
    </Container>
  );
}

function CardItem(props){
  const hospitalPPEItem = props.data
  return(
    <Container>
      {
        hospitalPPEItem.map((item, index)=>
        <Row key={index}>
          <Col xs={6}>{item.name}</Col>
          <Col xs={3}></Col>
          <Col xs={3}>{item.count}</Col>
        </Row>
        )
      }      
    </Container>
  )
}

function HospitalCardItem(props){
  return(
    <Container style={{padding: "10px"}}>
      <Row>
        <Col>
        <h4>Name of hospitalData</h4>
        </Col>
        <Col>
         <ul style={cardStyles.list}>
           <li>
              <FontAwesomeIcon icon={faMapMarkerAlt}/>{" "}
              Address
            </li>
           <li>
              <FontAwesomeIcon icon={faPhone}/>{" "}
              Telephone Number
            </li>
         </ul>
        </Col>
        <Col>
          <p>Last Updated: {props.data.lastUpdated}</p>
          <Button fullwidth size="lg" style={cardStyles.button}>Donate</Button>
        </Col>
      </Row>
    </Container>
  )
}