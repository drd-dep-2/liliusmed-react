import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

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
    borderRadius: "5px"
  },
  button: {
    backgroundColor: '#fff',
    color: ',#373540'
  },
  list: {
    listStyle: 'none'
  }
}

const hospital = {
  hospital:{
    name: "Sample",
    location: "Somewhere",
    phone: "215-658-3121",
    donate: "$100"
  },
  general: [
    {
      status: 'Item 1',
      arr: [
        {
          name: "A",
          value: "1"
        },
        {
          name: "A",
          value: "2"
        }
      ]
    },
    {
      status: 'Item 2',
      arr: [
        {
          name: "A",
          value: "1"
        },
        {
          name: "A",
          value: "2"
        }
      ]
    },
    {
      status: 'Item 3',
      arr: [
        {
          name: "A",
          value: "1"
        },
        {
          name: "A",
          value: "2"
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
          value: "1"
        },
        {
          name: "A",
          value: "2"
        }
      ]
    },
    {
      status: 'Item 2',
      arr: [
        {
          name: "A",
          value: "1"
        },
        {
          name: "A",
          value: "2"
        }
      ]
    },
    {
      status: 'Item 3',
      arr: [
        {
          name: "A",
          value: "1"
        },
        {
          name: "A",
          value: "2"
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
            <HospitalCardItem />
          </Card>
        </Col>
      </Row>
      <Row>
        <h6>General</h6>
      </Row>
      <Container fluid>
        <Row className="justify-content-md-center">
          {
            hospital.general.map((item, index) =>
              <Col xs={4} style={cardStyles.card} key={index}>
                <Row>
                  <h6>{item.status}</h6>
                  <CardItem data={item.arr} />
                </Row>   
              </Col>
            )
          }
        </Row>
      </Container>
      <Row>
        <h6>Personal Protective Equipment</h6>
      </Row>
      <Container fluid>
        <Row className="justify-content-md-center">
          {
            hospital.PPE.map((item, index)=>
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
          <Col xs={3}>{item.value}</Col>
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
        <h4>Name of Hospital</h4>
        </Col>
        <Col>
         <ul style={cardStyles.list}>
           <li>
              <FontAwesomeIcon icon={faMapMarkerAlt}/>
              Address
            </li>
           <li>
              <FontAwesomeIcon icon={faMapMarkerAlt}/>
              Telephone Number
            </li>
         </ul>
        </Col>
        <Col>
          <p>Last Updated</p>
          <Button style={cardStyles.button}>Donate</Button>
        </Col>
      </Row>
    </Container>
  )
}