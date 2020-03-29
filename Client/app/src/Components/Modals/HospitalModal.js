import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

const cardStyles = {
  hospitalCard:{
    backgroundColor: '#373540',
    color: '#fff',
    margin: "10px"
  },
  card:{
    backgroundColor: '#373540', 
    color: '#fff',
    padding: "10px",
    borderRadius: "5px",
    margin: "3px"
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
      status: 'Item 1',
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
      status: 'Item 2',
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
      status: 'Item 3',
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
      status: 'Item 1',
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
      status: 'Item 2',
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
      status: 'Item 3',
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
    <Container>
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
                <Row style={cardStyles.card}>
                  <h6>{item.status}</h6>
                  <CardItem data={item.arr} />
                </Row>   
              </Col>
            )
          }
        </Row>
      </Container>
      <Row className="justify-content-md-center">
        <h6>Personal Protective Equipment</h6>
      </Row>
      <Container fluid>
        <Row className="justify-content-md-center">
          {
            hospitalData.PPE.map((item, index)=>
            <Col xs={4} key={index}>
              <Row style={cardStyles.card}>
                <h6>{item.status}</h6>              
                <CardItem data={item.arr} />
              </Row>
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
    <Container>
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
          <Button size="lg" style={cardStyles.button}>Donate</Button>
        </Col>
      </Row>
    </Container>
  )
}