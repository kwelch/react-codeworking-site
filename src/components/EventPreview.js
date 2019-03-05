import React from 'react';
import ExternalLink from '../components/ExternalLink';

const getDirectionsLink = (address) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;

export default function EventPreview({ event, ...props }) {
  const { url, name, venue } = event;
  const displayAddress = event.venue.address.localized_address_display;
  return (
    <article {...props}>
      <h3>
        <ExternalLink href={url}>{name.text}</ExternalLink>
      </h3>
      <p>
        <span>{venue.name}</span>
        <br />
        {displayAddress}
        <br />
        <ExternalLink href={url}>RSVP</ExternalLink> |{' '}
        <ExternalLink href={getDirectionsLink(displayAddress)}>
          Get Directions
        </ExternalLink>
      </p>
    </article>
  );
}
