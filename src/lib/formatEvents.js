import { groupBy, get } from 'lodash';
import moment from 'moment-timezone';

/**
 * Sort CB to order events by start time.
 * @param {Object} eventA - First event for the compare function.
 * @param {Object} eventB - Second event for the compare function.
 */
export function sortByStartTime(eventA, eventB) {
  const aStart = get(eventA, 'node.start.utc');
  const bStart = get(eventB, 'node.start.utc');
  if (aStart && !bStart) {
    return -1;
  }
  if (!aStart && bStart) {
    return 1;
  }
  const aTime = parseInt(moment(aStart).format('HHmm'), 10);
  const bTime = parseInt(moment(bStart).format('HHmm'), 10);
  return aTime < bTime ? -1 : aTime > bTime ? 1 : 0;
}

/**
 * Sort CB to order events by start time. Assumes events are grouped by date.
 * @param {Object} eventA - First event for the compare function.
 * @param {Object} eventB - Second event for the compare function.
 */
export function sortByDay(eventGroupA, eventGroupB) {
  const dayA = moment(eventGroupA.day).format('YYYYMMDD');
  const dayB = moment(eventGroupB.day).format('YYYYMMDD');
  return dayA < dayB ? -1 : dayA > dayB ? 1 : 0;
}

/**
 * Group events by date.
 * @param {Object} eventA - First event for the compare function.
 * @param {Object} eventB - Second event for the compare function.
 */
export function groupEventsByDate(events) {
  return groupBy(events, (event) => {
    const time = get(event, 'node.start.utc');
    const timezone = get(event, 'node.start.timezone');
    return moment(time)
      .tz(timezone.replace(' ', '_'))
      .startOf('day')
      .format();
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
