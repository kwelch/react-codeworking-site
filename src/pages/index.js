import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { colors, withGutters } from '../lib/styles';
import EventsList from '../components/EventsList';
import formatEvents from '../lib/formatEvents';

// for dev purposes only
import dummyEvents from '../lib/dummyEvents';

function HomePage({
  data: {
    allEventbriteEvent: { edges: events },
  },
}) {
  if (process.env.NODE_ENV === 'development') {
    events = [...events, ...dummyEvents];
  }
  const eventsByDate = formatEvents(events);
  return (
    <Layout>
      <div className="page-container">
        <SEO title="Home" />
        <div
          css={{
            backgroundColor: colors.darkAccent,
          }}
        >
          <div
            css={[
              withGutters,
              {
                color: colors.light,
                padding: '1.28rem 0',
                marginBottom: '1.2rem',
                marginTop: '-1.5rem',
              },
            ]}
          >
            <h2>
              Come together to engineering better solutions and leveling up the
              community.
            </h2>
          </div>
        </div>
        <div css={[withGutters]}>
          <h1 css={{ margin: '0.75em 0' }}>Upcoming Events</h1>
          <EventsList eventGroups={eventsByDate} />
        </div>
        {/*
        <div css={[withGutters]}>
          <div css={{ background: colors.light }}>
            <h1>Why you should attend?</h1>
          </div>
        </div>
        <div css={[withGutters]}>
          <div css={{ background: colors.light }}>
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
        </div> */}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query HomePageQuery {
    allEventbriteEvent {
      edges {
        node {
          id
          name {
            text
          }
          url
          logo {
            url
          }
          start {
            timezone
            utc
          }
          end {
            timezone
            utc
          }
          venue {
            id
            name
            address {
              localized_address_display
            }
          }
        }
      }
    }
  }
`;

export default HomePage;
