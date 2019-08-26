import React from "react";
import { Root, Routes } from "react-static";
//
import { Router } from "./Router";

import "./app.scss";

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      Hello!
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
