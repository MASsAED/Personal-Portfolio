import { Container, Row } from "react-bootstrap"

export const Banner = () => {
    return (
        <section className="banner" id="home">
        <Container />
          <Row>
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi I'am webdecoded`}<span className="wrap">web developer</span></h1>
              <button onClick={() => console.log('connect')}>Let's connect</button>
              <p>Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."</p>
            </Col>
          </Row>
        </section>
    )
}