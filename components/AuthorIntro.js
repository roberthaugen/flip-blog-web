import { Row, Col, Media, Image } from 'react-bootstrap'

const AuthorIntro = () =>
<Row>
        <Col md="8">
          {/* AUTHOR INTRO STARTS */}
          <Media className="mb-4 admin-intro">
            <Image
              roundedCircle
              width={64}
              height={64}
              className="mr-3"
              src="https://avatars1.githubusercontent.com/u/3786139?s=460&u=2f6e568496dcd2402736a9544ddc4715b2c3ba29&v=4"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5 className="font-weight-bold mb-0">Hello Earls,</h5>
              <p className="welcome-text">
              My name is Robert Haugen and I am an unexperienced software engineer and freelance developer.
              and this is my demo blog page.
              </p>
            </Media.Body>
          </Media>
          {/* AUTHOR INTRO ENDS */}
        </Col>
      </Row>

      export default AuthorIntro