import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { withGutters, light, darkAccent } from '../components/styles';
import ExternalLink from '../components/ExternalLink';

function HomePage({
  data: {
    allEventbriteEvent: { edges: events },
  },
}) {
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
        <h1
          css={{
            textAlign: 'center',
            paddingBottom: '0.2rem',
          }}
        >
          Upcoming Events
        </h1>
        <div css={[withGutters]}>
          {events.map(({ node: event }) => (
            <div key={event.id}>
              <h3>
                <ExternalLink href={event.url}>{event.name.text}</ExternalLink>
              </h3>
              <p>
                <span>{event.venue.name}</span> -{' '}
                {event.venue.address.localized_address_display}
              </p>
            </div>
          ))}
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
