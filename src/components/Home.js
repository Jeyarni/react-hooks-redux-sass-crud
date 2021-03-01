import React from 'react'
import { Carousel, Card, Row, Col } from 'antd';
import { Home2, Home4, World, Continue } from '../assets/images';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  
  return (
    <div className="home">
      <Row className='home-row'>
        <Col span="12" className='home-col'>
          <div>
            <Row className='home-title'><img className='load1' src={World} />CRUD<img className='load2' src={World} /></Row>
            <Row>
              <Col span="12"><img className='loader' src={World} /></Col>
              <Col span="12"><img className='loader2' src={World} /></Col>
            </Row>
            <Row className='continue-row'><img className='continue-img' src={Continue} onClick={()=>history.push('/view')}/></Row>
          </div>
        </Col>
        <Col span="12" className='home-col'>
          <Card className='home-carousel'>
            <Carousel autoplay>
              <div>
                <img className='home-img' src={Home2} />
              </div>
              <div>
                <img className='home-img' src={Home4} />
              </div>
            </Carousel>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Home;