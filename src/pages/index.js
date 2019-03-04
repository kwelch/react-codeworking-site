import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function HomePage(props) {
  return (
    <Layout>
      <div className="page-container">
        <SEO title="Home" />
        <div>
          <h2>
            React CodeWorking brings together developers to share projects,
            ideas, and breakthroughs with the goal of engineering better
            solutions and leveling up the community.
          </h2>
          <h1>Nashville</h1>
          <p>
            React CodeWorking is hosted on the first Thursday of each month.
            Exceptions can be made for holidays and schedule conflicts.
          </p>
          <h1>Code of conduct</h1>
          <p>
            React CodeWorking follows the conference code of conduct. Violations
            of the code of conduct will result in being asked to leave from the
            event and banning from future events.
          </p>
          <p>
            <a href="http://confcodeofconduct.com/">
              http://confcodeofconduct.com/
            </a>
          </p>
          <h1>Why you should attend?</h1>
          <h1>Hosting</h1>
          <h2>Why should I host?</h2>
          <h2>How do I host?</h2>
          <p>
            To host a React CodeWorking please fill out form hosting request
            form.
          </p>
          <p>
            <strong>Form should include:</strong>
          </p>
          <ul>
            <li>Name</li>
            <li>Email</li>
            <li>Location</li>
            <li>Host size</li>
            <li>Parking</li>
            <li>Restrictions</li>
            <li>Special considerations</li>
            <li>Notes</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
