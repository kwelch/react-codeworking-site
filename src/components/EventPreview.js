import React from 'react';
import ExternalLink from '../components/ExternalLink';
import { thumbnail, footerLinks } from '../lib/styles';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import ImageLoader from './ImageLoader';

/**
 * Time object type definition.
 * @typedef {Object} Time
 * @property {string} utc - UTC formatted time string.
 * @property {string} timezone - Time zone
 */

function EventLocation({ venue }) {
  return (
    <address>
      <p>{venue.name}</p>
      <p>{venue.displayAddress}</p>
    </address>
  );
}

function EventPreview({ event, ...props }) {
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
    <article {...props}>
      {logoSrc && <ImageLoader src={logoSrc} alt="logo" css={thumbnail} />}
      <header>
        <h3>
          <ExternalLink href={url}>{name.text}</ExternalLink>
        </h3>
        {timeString && <span>{timeString}</span>}
        {displayAddress && (
          <EventLocation venue={{ ...venue, displayAddress }} />
        )}
      </header>
      <footer css={footerLinks}>
        <ExternalLink href={url}>RSVP</ExternalLink>
        {displayAddress && (
          <ExternalLink href={getDirectionsLink(displayAddress)}>
            Get Directions
          </ExternalLink>
        )}
      </footer>
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
