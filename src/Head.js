import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Head extends Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Small Island Developing States Photo Submission"
          />
          <meta
            name="twitter:description"
            content="View the album on Flickr."
          />
          <meta
            name="twitter:image"
            content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg"
          />
        </Helmet>
      </div>
    );
  }
}

export default Head;
