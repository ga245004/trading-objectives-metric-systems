import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import {
  VscKey,
  VscSync,
  VscCommentDiscussion,
  VscLiveShare,
  VscChevronRight,
  VscCheck
} from "react-icons/vsc";

const CurrentResults = () => {
  return (
    <div className="current-results">
      <Card>
        <Card.Header>
          <h3>Current Results</h3>
          <div className="buttons-container">
            <Button variant="primary">
              <span className="action-icon">
                <VscKey />
              </span>
              Credentials
            </Button>
            <Button variant="primary">
              <span className="action-icon">
                <VscCommentDiscussion />
              </span>
              Contact us
            </Button>
            <Button variant="primary">
              <span className="action-icon">
                <VscSync />
              </span>
              Refresh
            </Button>
            <Button variant="primary">
              <span className="action-icon">
                <VscLiveShare />
              </span>
              Share
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const ObjectivesHeaders = [
  {
    id: "objectives",
    text: "Trading Objectives",
    xs: 6,
    isExpand: true,
    isPassed: false
  },
  {
    id: "result",
    text: "Your results",
    isExpand: false,
    isPassed: false
  },
  {
    id: "summary",
    text: "Summary",
    isExpand: false,
    isPassed: true
  }
];

const ObjectivesRows = [
  {
    objectives: "Minuimum 5 Trading Days",
    result: "8",
    summary: "Passed"
  },
  {
    objectives: "Max Daily Loss -$2,500",
    result: "-$1,865.46",
    summary: "Passed"
  },
  {
    objectives: "Max Loss -$5,000",
    result: "-$479.71",
    summary: "Passed"
  },
  {
    objectives: "Profit Target $2,500",
    result: "$3,286.25",
    summary: "Passed"
  }
];

const Objectives = () => {
  return (
    <div className="current-results">
      <Card>
        <Card.Header>
          <h3>Objectives</h3>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Container>
              <Row className="objective-header">
                {ObjectivesHeaders.map((h) => {
                  return (
                    <Col xs={h.xs} className={`objective-col-${h.id}`}>
                      <h4>{h.text}</h4>
                    </Col>
                  );
                })}
              </Row>
              {ObjectivesRows.map((r) => {
                return (
                  <Row className="objective-row">
                    {ObjectivesHeaders.map((h) => {
                      return (
                        <Col xs={h.xs} className={`objective-col-${h.id}`}>
                          {h.isExpand && (
                            <span className="objective-row-expand-button">
                              <VscChevronRight />
                            </span>
                          )}
                          {h.isPassed && (
                            <span className="objective-row-passed-check">
                              <VscCheck />
                            </span>
                          )}
                          <span>{r[h.id]}</span>
                        </Col>
                      );
                    })}
                  </Row>
                );
              })}
            </Container>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Objectives />
      <CurrentResults />
      <img
        className="skeletonImg"
        src="https://c.mql5.com/21/299/Screen_Shot_2021-06-21_at_11.03.26_PM__1.png?d=1"
      ></img>
    </div>
  );
}
