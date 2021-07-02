import faker from "faker";

const generateTradeTrendData = (length) => {
  const data = [];
  let balance = 5000;
  let l = length;
  if (!l) {
    l = faker.datatype.number({
      max: 500,
      min: 100
    });
  }

  for (let i = 0; i < l; i++) {
    const amount = faker.datatype.number({
      max: 5000,
      min: -5000
    });
    balance = balance + amount;
    data.push({
      numberOfTrades: i,
      balance: balance
    });
  }
  return data;
};

const tradeTrendData = [
  {
    numberOfTrades: 0,
    balance: 0
  },
  {
    numberOfTrades: 50,
    balance: 200
  },
  {
    numberOfTrades: 129,
    balance: -800
  },
  {
    numberOfTrades: 193,
    balance: 500
  },
  {
    numberOfTrades: 258,
    balance: 678
  },
  {
    numberOfTrades: 322,
    balance: 1200
  },
  {
    numberOfTrades: 405,
    balance: 900
  }
];

const objectivesRows = [
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

export default {
  tradeTrendData: generateTradeTrendData(),
  generateTradeTrendData: generateTradeTrendData,
  objectivesRows: objectivesRows
};
