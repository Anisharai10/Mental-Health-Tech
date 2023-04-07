import React from 'react'

import CardGroup from 'react-bootstrap/CardGroup';

import Nav from 'react-bootstrap/Nav';
import { Card, Button, Row, Col } from 'react-bootstrap';



  
const Profile = () => {
  return (
    <div id="Profile">
        <div className="breathe-logo">
            <h1></h1>
            
            <div className="treatment-equipment">
      <div className="treatment-equipment-header">
      <h1 style={{color: "Black"}}>OUR SERVICES</h1>
      
      <h2 class="w3-cursive">Overcome your challenges and achieve your goals</h2>
        <p></p>
      </div>
      <div className="treatment-equipment-body">
        <Row>
          <Col md={6}>
            <Card className="equipment-card">
            <Card style={{ width: '8rem' }}></Card>
              <Card.Img variant="top" src="https://images.pexels.com/photos/161477/treatment-finger-keep-hand-161477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card.Body>
                <Card.Title>Reduce anxiety and stress</Card.Title>
                <Card.Text>
                  Our equipment uses innovative technologies and techniques to
                  help you manage your symptoms and reduce anxiety and stress.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="equipment-card">
            <Card style={{ width: '18rem' }}></Card>
              <Card.Img variant="top" src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card.Body>
                <Card.Title>Improve mood and energy levels</Card.Title>
                <Card.Text>
                  Our equipment is designed to stimulate positive emotions and
                  increase energy levels, helping you feel better and more
                  motivated.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="equipment-card">
            <Card style={{ width: '18rem' }}></Card>
              <Card.Img variant="top" src="https://images.pexels.com/photos/4473864/pexels-photo-4473864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card.Body>
                <Card.Title>Better sleep quality and duration</Card.Title>
                <Card.Text>
                  Our equipment can improve your sleep quality and duration,
                  helping you feel more rested and rejuvenated.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="equipment-card">
            <Card style={{ width: '18rem' }}></Card>
              <Card.Img variant="top" src="https://images.pexels.com/photos/5752254/pexels-photo-5752254.jpeg" />
              <Card.Body>
                <Card.Title>Increase cognitive function and focus</Card.Title>
                <Card.Text>
                  Our equipment can improve your cognitive function and focus,
                  helping you stay sharp and alert throughout the day.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="offset-md-3">
            <Card className="equipment-card">
            <Card style={{ width: '18rem' }}></Card>
              <Card.Img variant="top" src="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card.Body>
                <Card.Title>Enhance emotional regulation and resilience</Card.Title>
                <Card.Text>
                  Our equipment can help you develop emotional regulation and
                  resilience skills, helping you better manage stress and
                  overcome challenges.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="treatment-equipment-footer">
          <Button variant="primary">Book an appointment</Button>
        </div>
      </div>
    </div>


            
    


    <CardGroup>
      <Card>
              <Card.Img variant="top" src="https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>Consult To Doctors</Card.Title>
          
          <Card.Text>
          Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make healthy choices. Our Doctors will Help You manage and treat your Mental health no matter what you might need
          
          </Card.Text>
          <button type="button" class="btn btn-danger">Details</button>
        </Card.Body>
        
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>Psychiatrist</Card.Title>
          <Card.Text>
          
          Therapy With Top Psychologists Anytime, Anywhere, Any device. Connect with the best in class specialists over chat or video sessions. Change counselor anytime. Get Started Today. Lifetime session validity. Types: Stress, Anxiety.{' '}
          </Card.Text>
          <button type="button" class="btn btn-danger">Details</button>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/576831/pexels-photo-576831.jpeg" />
        <Card.Body>
          <Card.Title>Best medication</Card.Title>
          <Card.Text>
          A substance intended for use in the diagnosis, cure, mitigation, treatment, or prevention of disease. A substance (other than food) intended to affect the structure or any function of the body. Will Help You to cure problem
          </Card.Text>
          <button type="button" class="btn btn-danger">Details</button>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
    </CardGroup> </div>
        
      
</div>



        );
}

export default Profile;
