import React from 'react';
import PropTypes from 'prop-types';
import tinytime from 'tinytime';
import { get } from 'lodash';
import { withTheme } from 'emotion-theming';
import ExternalLink from './ExternalLink';
import ImageLoader from './ImageLoader';
import { mq, defaultTransition } from '../lib/styles';

/**
 * Time object type definition.
 * @typedef {Object} Time
 * @property {string} utc - UTC formatted time string.
 * @property {string} timezone - Timezone.
 */

/**
 * Format the time string from a given start and end time object
 * @param {Time} start
 * @param {Time} end
 * @returns {string} Formatted time string (ex: 10:00 AM to 4:00 PM)
 */
function getTimeString(start, end) {
  const formatTime = (time) => {
    return time.local
      ? tinytime(`{h}:{mm} {a}`).render(new Date(time.local))
      : '';
  }
  const startTime = formatTime(start);
  const endTime = formatTime(end);
  return endTime ? `${startTime} to ${endTime}` : startTime;
}

/**
 * Get a Google Maps directions URL.
 * @param {string} address - Decoded address string.
 * @returns {string} Google Maps URL.
 */
const getDirectionsLink = (address) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;

/**
 *
 *
 * @param {Object} { venue, theme }
 * @returns
 */
function EventLocation({ venue, theme }) {
  const name = get(venue, 'name');
  const displayAddress = get(venue, 'displayAddress');
  return (
    <address
      css={{
        fontStyle: 'normal',
        fontSize: 14,
        margin: 0,
        color: theme.colors.grays.mid,
        [mq('medium')]: {
          fontSize: 16,
        },
        '& p': {
          margin: 0,
        },
      }}
    >
      <p>
        {name || 'Location to be determined'}
        {displayAddress && (
          <>
            <br />
            {displayAddress}
          </>
        )}
      </p>
    </address>
  );
}

/**
 * @file SortableTable is a React Component wrapper around {@link https://react-table.js.org} ReactTable.
 * Anything functionality from ReactTable should be available in SortableTable out of the box, but may require styling.
 * For more, see {@link https://react-table.js.org/#/story/readme ReactTable docs}
 *
 * @module SortableTable
 * @extends Component
 */
function EventHeader({
  theme,
  eventName,
  eventTime,
  url,
  displayAddress,
  venue,
}) {
  const styles = {
    title: {
      margin: '0 0 0.125em',
    },
    titleLink: {
      textDecoration: 'none',
      '&:hover,&:focus': {
        textDecoration: 'underline',
      },
    },
    time: {
      display: 'block',
      marginBottom: '0.5rem',
      color: theme.colors.grays.mid,
      fontSize: 14,
      [mq('medium')]: {
        fontSize: 16,
      },
    },
  };
  return (
    <header>
      <h3 css={styles.title}>
        <ExternalLink css={styles.titleLink} href={url}>
          {eventName}
        </ExternalLink>
      </h3>
      {eventTime && <span css={styles.time}>{eventTime}</span>}
      {displayAddress && (
        <EventLocation theme={theme} venue={{ ...venue, displayAddress }} />
      )}
    </header>
  );
}

function EventFooter({ theme, displayAddress, directionsUrl, url }) {
  const styles = {
    footerLink: {
      display: 'inline-block',
      marginRight: '0.5em',
      padding: '0.25em 0.5em',
      borderRadius: 2,
      transition: defaultTransition(),
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: 12,
      fontWeight: 'bold',
      letterSpacing: 1,
      lineHeight: 1,
      border: `1px solid ${theme.colors.grays.light}`,
      '&,&:visited,&:active,&:focus': {
        color: theme.colors.grays.mid,
      },
      '&:hover': {
        backgroundColor: theme.colors.dark,
        borderColor: theme.colors.dark,
        color: theme.colors.white,
      },
    },
    footerLinks: {
      marginTop: 10,
    },
  };

  return (
    <footer css={styles.footerLinks}>
      <ExternalLink css={styles.footerLink} href={url}>
        RSVP
      </ExternalLink>
      {displayAddress && (
        <ExternalLink css={styles.footerLink} href={directionsUrl}>
          Directions
        </ExternalLink>
      )}
    </footer>
  );
}

function EventThumbnail({ logoSrc }) {
  return (
    <figure css={{ flex: '0 0 100px' }}>
      <ImageLoader
        src={logoSrc}
        alt="Event logo"
        css={{
          width: '100%',
          height: '100%',
          minHeight: '100px',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </figure>
  );
}

function EventPreview({
  event: { url, name, venue, logo, start, end },
  css: passedCss,
  theme,
  ...props
}) {
  const styles = {
    wrapper: {
      display: 'flex',
      backgroundColor: '#fff',
    },
    content: {
      flex: '1 1 auto',
      padding: 10,
      [mq('medium')]: {
        padding: 20,
      },
    },
  };

  const displayAddress = get(venue, 'address.localized_address_display');
  const logoSrc = get(logo, 'url');
  const timeString = getTimeString(start, end);

  return (
    <article css={[passedCss, styles.wrapper]} {...props}>
      <div css={styles.content}>
        <EventHeader
          displayAddress={displayAddress}
          eventName={name.text}
          eventTime={timeString}
          theme={theme}
          url={url}
          venue={venue}
        />
        <EventFooter
          directionsUrl={getDirectionsLink(displayAddress)}
          displayAddress={displayAddress}
          theme={theme}
          url={url}
        />
      </div>
      {logoSrc && <EventThumbnail logoSrc={logoSrc} />}
    </article>
  );
}

EventPreview.propTypes = {
  event: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
    venue: PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.shape({
        localized_address_display: PropTypes.string,
      }),
    }),
    logo: PropTypes.shape({
      url: PropTypes.string,
    }),
    start: PropTypes.shape({
      utc: PropTypes.string,
      timezone: PropTypes.string,
    }),
    end: PropTypes.shape({
      utc: PropTypes.string,
      timezone: PropTypes.string,
    }),
  }).isRequired,
};

export default withTheme(EventPreview);
