import React from 'react';
import ExternalLink from '../components/ExternalLink';
import { thumbnail, footerLinks } from './styles';
import ImageLoader from './ImageLoader';

const getDirectionsLink = (address) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;

export default function EventPreview({ event, ...props }) {
  const {
    url,
    name,
    venue,
    logo: { url: logo_src },
  } = event;
  const displayAddress = event.venue.address.localized_address_display;
  return (
    <article {...props}>
      <ImageLoader src={logo_src} alt="logo" css={thumbnail} />
      <h3>
        <ExternalLink href={url}>{name.text}</ExternalLink>
      </h3>
      <div css={footerLinks}>
        <p>{!venue.id ? 'Location to be determined...' : venue.name}</p>
        <p>{displayAddress}</p>
        <ExternalLink href={url}>RSVP</ExternalLink>
        {displayAddress && (
          <>
            {' '}
            |{' '}
            <ExternalLink href={getDirectionsLink(displayAddress)}>
              Get Directions
            </ExternalLink>
          </>
        )}
      </div>
    </article>
  );
}
