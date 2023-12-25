import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AgentDashboard from "./components/AgentDashboard";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* You can add a header or navigation bar here if needed */}

        <Switch>
          <Route exact path="/" component={AgentDashboard} />
          {/* Add more routes for different components/screens if necessary */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;

// this  is for  range picker

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// // import "./RangePicker.css";

// const RangePicker = () => {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const handleDateChange = (date, dateType) => {
//     if (dateType === "start") {
//       setStartDate(date);
//     } else {
//       setEndDate(date);
//     }
//   };

//   return (
//     <div className="range-picker-container">
//       <DatePicker
//         selected={startDate}
//         onChange={(date) => handleDateChange(date, "start")}
//         selectsStart
//         startDate={startDate}
//         endDate={endDate}
//         placeholderText="Start Date"
//       />
//       <DatePicker
//         selected={endDate}
//         onChange={(date) => handleDateChange(date, "end")}
//         selectsEnd
//         startDate={startDate}
//         endDate={endDate}
//         placeholderText="End Date"
//       />
//     </div>
//   );
// };

// export default RangePicker;
