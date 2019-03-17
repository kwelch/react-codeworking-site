import React from 'react';
import moment from 'moment-timezone';
import { css } from '@emotion/core';
import EventPreview from '../components/EventPreview';
import { colors, shadow } from '../lib/styles';

export const styles = {
  list: css({
    listStyle: 'none',
    margin: 0,
  }),
  listItem: css({
    margin: 0,
  }),
  eventsList: css({
    boxShadow: shadow,
    marginBottom: 50,
  }),
  eventItem: css({
    overflow: 'hidden',
    border: `1px solid ${colors.grays.xlight}`,
    borderBottom: 0,
    '&:first-child': {
      borderTopRightRadius: 4,
      borderTopLeftRadius: 4,
    },
    '&:last-child': {
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4,
      borderBottom: `1px solid ${colors.grays.xlight}`,
    },
  }),
  dateHeader: {
    marginBottom: '1rem',
    fontSize: 14,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
};

function EventsList({ eventGroups, ...props }) {
  return (
    <ul {...props} css={[styles.list]}>
      {eventGroups.map(({ day, events }) => (
        <li key={day} css={[styles.listItem]}>
          <h3 css={styles.dateHeader}>{moment(day).format('LL')}</h3>
          <ul css={[styles.list, styles.eventsList]}>
            {events.map(({ node: event }) => (
              <li key={event.id} css={[styles.listItem, styles.eventItem]}>
                <EventPreview event={event} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default EventsList;
