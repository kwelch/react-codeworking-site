const eventbrite = require('eventbrite').default;

exports.sourceNodes = function(
  { actions: { createNode }, createNodeId, createContentDigest },
  { organizerId, token, verbose = true }
) {
  const processEvent = (event) => {
    return Object.assign({}, event, {
      id: createNodeId(`eventbrite-event-${event.id}`),
      parent: null,
      children: [],
      internal: {
        type: `EventbriteEvent`,
        content: JSON.stringify(event),
        contentDigest: createContentDigest(event),
      },
    });
  };

  const sdk = eventbrite({ token });

  return sdk
    .request(`/organizers/${organizerId}/events/?only_public=on`)
    .then(({ events }) => {
      events.forEach((event) => {
        const eventNode = processEvent(event);

        createNode(eventNode);
      });
    })
    .catch((err) => {
      console.error('EB Fetch fail:', err);
    });
};
