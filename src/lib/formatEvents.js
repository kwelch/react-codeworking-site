import { groupBy, get } from 'lodash';
import tinytime from 'tinytime';

/**
 * Sort CB to order events by start time.
 * @param {Object} eventA - First event for the compare function.
 * @param {Object} eventB - Second event for the compare function.
 */
export function sortByStartTime(eventA, eventB) {
  const timeTemplate = tinytime(`{H}{mm}`, { padHours: true });
  const aStart = get(eventA, 'node.start.local');
  const bStart = get(eventB, 'node.start.local');
  const aTime = parseInt(timeTemplate.render(new Date(aStart)), 10);
  const bTime = parseInt(timeTemplate.render(new Date(bStart)), 10);
  if (aStart && !bStart) {
    return -1;
  }
  if (!aStart && bStart) {
    return 1;
  }
  return aTime < bTime ? -1 : aTime > bTime ? 1 : 0;
}

/**
 * Sort CB to order events by start time. Assumes events are grouped by date.
 * @param {Object} eventA - First event for the compare function.
 * @param {Object} eventB - Second event for the compare function.
 */
export function sortByDay(eventGroupA, eventGroupB) {
  const timeTemplate = tinytime(`{YYYY}{Mo}{DD}`, { padMonth: true, padDays: true });
  const dayA = timeTemplate.render(new Date(eventGroupA.day));
  const dayB = timeTemplate.render(new Date(eventGroupB.day));
  return dayA < dayB ? -1 : dayA > dayB ? 1 : 0;
}

/**
 * Group events by date.
 * @param {Object} eventA - First event for the compare function.
 * @param {Object} eventB - Second event for the compare function.
 */
export function groupEventsByDate(events) {
  return groupBy(events, (event) => {
    const timeTemplate = tinytime(`{YYYY}-{Mo}-{DD}T00:00:00`, { padDays: true, padMonth: true });
    const time = get(event, 'node.start.local') || get(event, 'node.end.local');
    return timeTemplate.render(new Date(time));
  });
}

/**
 * Format events in an array of date groups.
 * @param {Array.<Object>} events
 */
export default function formatEvents(events) {
  const eventsGroup = groupEventsByDate(events);
  const eventsByDate = Object.keys(eventsGroup)
    .map((day) => {
      return {
        day,
        events: eventsGroup[day].sort(sortByStartTime),
      };
    })
    .sort(sortByDay);
  return eventsByDate;
}
