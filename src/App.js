import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import {
  VscKey,
  VscSync,
  VscCommentDiscussion,
  VscLiveShare,
  VscChevronRight,
  VscCheck
} from "react-icons/vsc";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area
} from "recharts";

import mockData from "./../mockData";

const CurrentResults = () => {
  const [data, setData] = useState(mockData.tradeTrendData);

  useEffect(() => {
    $('text:contains("Balance")').addClass("chart-y-axis-lable");
    $('text:contains("Number of Trades")').addClass("chart-x-axis-lable");
  });

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
            <Button
              variant="primary"
              onClick={() => setData(mockData.generateTradeTrendData())}
            >
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
            <div>
              <AreaChart
                width={window.visualViewport.width * 0.9}
                height={window.visualViewport.height * 0.6}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0
                }}
              >
                <CartesianGrid
                  strokeDasharray="5 5"
                  horizontal={true}
                  vertical={false}
                />
                <XAxis
                  dataKey="numberOfTrades"
                  label={"Number of Trades"}
                  interval="preserveEnd"
                />
                <YAxis label={"Balance"} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="balance"
                  stroke="#2447a1"
                  strokeWidth="5"
                  fill="#f4f6fa"
                />
              </AreaChart>
            </div>
          </Card.Text>
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
                    <Col
                      key={h.id}
                      xs={h.xs}
                      className={`objective-col-${h.id}`}
                    >
                      <h4>{h.text}</h4>
                    </Col>
                  );
                })}
              </Row>
              {mockData.objectivesRows.map((r) => {
                return (
                  <Row key={r.id} className="objective-row">
                    {ObjectivesHeaders.map((h) => {
                      return (
                        <Col
                          key={h.id}
                          xs={h.xs}
                          className={`objective-col-${h.id}`}
                        >
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
      <CurrentResults />
      <Objectives />
      <img
        className="skeletonImg"
        src="https://c.mql5.com/21/299/Screen_Shot_2021-06-21_at_11.03.26_PM__1.png?d=1"
      ></img>
    </div>
  );
}
