import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { get } from 'lodash';
import { css } from '@emotion/core';
import { mq, colors, defaultTransition } from '../lib/styles';
import ExternalLink from './ExternalLink';
import ImageLoader from './ImageLoader';

/**
 * Time object type definition.
 * @typedef {Object} Time
 * @property {string} utc - UTC formatted time string.
 * @property {string} timezone - Time zone
 */

export const styles = {
  wrapper: css({
    display: 'flex',
    backgroundColor: '#fff',
  }),
  content: css({
    flex: '1 1 auto',
    padding: 10,
    [mq('medium')]: {
      padding: 20,
    },
  }),
  figure: css({
    flex: '0 0 100px',
  }),
  thumbnail: css({
    width: '100%',
    height: '100%',
    minHeight: '100px',
    objectFit: 'cover',
    objectPosition: 'center',
  }),
  title: css({
    margin: '0 0 0.125em',
  }),
  titleLink: css({
    textDecoration: 'none',
    '&:hover,&:focus': {
      textDecoration: 'underline',
    }
  }),
  time: css({
    display: 'block',
    marginBottom: '0.5rem',
    color: colors.grays.mid,
    fontSize: 14,
    [mq('medium')]: {
      fontSize: 16,
    },
  }),
  address: css({
    fontStyle: 'normal',
    fontSize: 14,
    margin: 0,
    color: colors.grays.mid,
    [mq('medium')]: {
      fontSize: 16,
    },
    '& p': {
      margin: 0,
    },
  }),
  footerLink: css({
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
    border: `1px solid ${colors.grays.light}`,
    '&,&:visited,&:active,&:focus': {
      color: colors.grays.mid,
    },
    '&:hover': {
      backgroundColor: colors.dark,
      borderColor: colors.dark,
      color: colors.white,
    },
  }),
  footerLinks: css({
    marginTop: 10,
  }),
};

function EventLocation({ venue }) {
  return (
    <address css={styles.address}>
      <p>{venue.name}</p>
      {/* <p>{venue.displayAddress}</p> */}
    </address>
  );
}

function EventPreview({ event, css: passedCss, ...props }) {
  /**
   * Format the time string from a given start and end time object
   * @param {Time} start
   * @param {Time} end
   * @returns {string} Formatted time string (ex: 10:00 AM to 4:00 PM)
   */
  function getTimeString(start, end) {
    const formatTime = (time) =>
      time.utc
        ? moment(time.utc)
            .tz((time.timezone || 'America/Chicago').replace(' ', '_'))
            .format('h:mm A')
        : '';
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

  const { url, name, venue, logo, start, end } = event;
  const displayAddress = get(venue, 'address.localized_address_display');
  const logoSrc = get(logo, 'url');
  const timeString = getTimeString(start, end);

  return (
    <article css={[passedCss, styles.wrapper]} {...props}>
      <figure css={styles.figure}>
        {logoSrc && (
          <ImageLoader src={logoSrc} alt="Event logo" css={styles.thumbnail} />
        )}
      </figure>
      <div css={styles.content}>
        <header>
          <h3 css={styles.title}>
            <ExternalLink css={styles.titleLink} href={url}>{name.text}</ExternalLink>
          </h3>
          {timeString && <span css={styles.time}>{timeString}</span>}
          {displayAddress && (
            <EventLocation venue={{ ...venue, displayAddress }} />
          )}
        </header>
        <footer css={styles.footerLinks}>
          <ExternalLink css={styles.footerLink} href={url}>RSVP</ExternalLink>
          {displayAddress && (
            <ExternalLink css={styles.footerLink} href={getDirectionsLink(displayAddress)}>
              Directions
            </ExternalLink>
          )}
        </footer>
      </div>
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

export default EventPreview;
