import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  withGutters,
  light,
  darkAccent,
  styleLinks,
} from '../components/styles';
import ExternalLink from '../components/ExternalLink';

const getDirectionsLink = (address) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;

function HomePage({
  data: {
    allEventbriteEvent: { edges: events },
  },
}) {
  console.log(events);
  return (
    <Layout>
      <div className="page-container">
        <SEO title="Home" />
        <div
          css={{
            backgroundColor: darkAccent,
          }}
        >
          <div
            css={[
              withGutters,
              {
                color: light,
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
        <div css={[withGutters, styleLinks({ color: darkAccent })]}>
          <h1 css={{ margin: '0.75em 0' }}>Upcoming Events</h1>
          {events.map(({ node: event }) => {
            const displayAddress =
              event.venue.address.localized_address_display;
            return (
              <article css={{ marginBottom: '1rem' }} key={event.id}>
                <h3>
                  <ExternalLink href={event.url}>
                    {event.name.text}
                  </ExternalLink>
                </h3>
                <p>
                  <span>{event.venue.name}</span>
                  <br />
                  {displayAddress}
                  <br />
                  <ExternalLink href={event.url}>
                    RSVP
                  </ExternalLink>{' '}
                  |{' '}
                  <ExternalLink href={getDirectionsLink(displayAddress)}>
                    Get Directions
                  </ExternalLink>
                </p>
              </article>
            );
          })}
        </div>
        {/*
        <div css={[withGutters]}>
          <div css={{ background: light }}>
            <h1>Why you should attend?</h1>
          </div>
        </div>
        <div css={[withGutters]}>
          <div css={{ background: light }}>
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
          venue {
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
