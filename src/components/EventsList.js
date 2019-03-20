import React from 'react';
import tinytime from 'tinytime';
import { withTheme } from 'emotion-theming';
import EventPreview from '../components/EventPreview';
import { mq } from '../lib/styles';

function EventsList({ eventGroups, theme, ...props }) {
  const styles = {
    list: {
      listStyle: 'none',
      margin: 0,
    },
    listItem: {
      margin: 0,
    },
    eventsList: {
      boxShadow: theme.shadows.boxShadow,
      marginBottom: 50,
    },
    eventItem: {
      overflow: 'hidden',
      border: `1px solid ${theme.colors.grays.xlight}`,
      borderBottom: 0,
      '&:first-child': {
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
      },
      '&:last-child': {
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottom: `1px solid ${theme.colors.grays.xlight}`,
      },
    },
    dateHeader: {
      marginBottom: '1rem',
      marginLeft: 10,
      fontSize: 14,
      letterSpacing: 1,
      textTransform: 'uppercase',
      [mq('medium')]: {
        marginLeft: 20,
      },
    },
  };
  return (
    <ul {...props} css={[styles.list]}>
      {eventGroups.map(({ day, events }) => {
        return (
          <li key={day} css={[styles.listItem]}>
            <h3 css={styles.dateHeader}>
              {tinytime(`{MMMM} {DD}, {YYYY}`).render(new Date(day))}
            </h3>
            <ul css={[styles.list, styles.eventsList]}>
              {events.map(({ node: event }) => (
                <li key={event.id} css={[styles.listItem, styles.eventItem]}>
                  <EventPreview event={event} />
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default withTheme(EventsList);
