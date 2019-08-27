import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Typography from "../components/Typography";
import ImageGrid from "../components/ImageGrid";
import { useRouteData } from "react-static";
import { Painting } from "../../config/paintings";

// import { Link } from "../components/Router";

import "./Painting.scss";

type PostPageProps = {
  painting: Painting;
  next: Painting;
  prev: Painting;
  paintings: Painting[];
};

export const PaintingPage = ({
  painting,
  prev,
  next,
  paintings
}: PostPageProps) => {
  const filteredPaintings = paintings.filter(p => p !== painting);

  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <Typography>
      <Navigation />
      <Header />
      <div className="painting_page">
        {/* <nav>
      <div className="next-prev">
        {prev && <Link to={`/paintings/${prev.permalink}`}>{"<"} prev</Link>}{" "}
        {next && <Link to={`/paintings/${next.permalink}`}>next {">"}</Link>}
      </div>
    </nav> */}
        <div className="zoomed_in">
          <img src={painting.src} alt={painting.title} />
          <div className="caption">
            <p>
              <span className="title">&lsquo;{painting.title}&rsquo;</span>{" "}
              <span className="dimensions">{painting.dimensions}</span>{" "}
              <span className="price">
                {painting.sold ? <>Sold</> : <>&pound;{painting.price}</>}
              </span>{" "}
            </p>
            <p>
              <span>
                <a
                  className="requestToBuy"
                  href="mailto:emma@emmastonejohnson.com"
                >
                  Request to Buy
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <ImageGrid images={filteredPaintings} />
    </Typography>
  );
};

export default () => {
  const { paintings, painting, prev, next } = useRouteData();
  return (
    <PaintingPage
      painting={painting}
      prev={prev}
      next={next}
      paintings={paintings}
    />
  );
};
