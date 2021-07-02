import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
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

const data = [
  {
    name: "Page A",
    numberOfTrades: 0,
    balance: 0,
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    numberOfTrades: 50,
    balance: 200,
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    numberOfTrades: 129,
    balance: -800,
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    numberOfTrades: 193,
    balance: 500,
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    numberOfTrades: 258,
    balance: 678,
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    numberOfTrades: 322,
    balance: 1200,
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    numberOfTrades: 405,
    balance: 900,
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const CurrentResults = () => {
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
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="numberOfTrades" label={"Number of Trades"} />
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

const ObjectivesRows = [
  {
    id: 1,
    objectives: "Minuimum 5 Trading Days",
    result: "8",
    summary: "Passed"
  },
  {
    id: 2,
    objectives: "Max Daily Loss -$2,500",
    result: "-$1,865.46",
    summary: "Passed"
  },
  {
    id: 3,
    objectives: "Max Loss -$5,000",
    result: "-$479.71",
    summary: "Passed"
  },
  {
    id: 4,
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
              {ObjectivesRows.map((r) => {
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
