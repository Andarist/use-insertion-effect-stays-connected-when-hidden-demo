import * as React from "react";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const LazyPage1 = React.lazy(() => delay(1000).then(() => import("./Page1")));

const LazyPage2 = React.lazy(() => delay(2000).then(() => import("./Page2")));

const App = () => {
  const [currentPage, setCurrentPage] = React.useState("/");

  const handleClick = (e: React.MouseEvent, page: Page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <React.Suspense fallback={"...loading"}>
      {currentPage === "/" && (
        <LazyPage1 onClick={(e) => handleClick(e, "/page2")} />
      )}

      {currentPage === "/page2" && (
        <LazyPage2 onClick={(e) => handleClick(e, "/")} />
      )}
    </React.Suspense>
  );
};

export default App;
