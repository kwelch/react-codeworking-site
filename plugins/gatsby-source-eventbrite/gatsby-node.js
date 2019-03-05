const eventbrite = require('eventbrite').default;

exports.sourceNodes = async (
  { actions: { createNode }, createNodeId, createContentDigest },
  { organizerId, token, verbose = true }
) => {
  const processEvent = (event) => {
    return {
      event,
      id: createNodeId(`eventbrite-event-${event.id}`),
      parent: null,
      children: [],
      internal: {
        type: `EventbriteEvent`,
        content: JSON.stringify(event),
        contentDigest: createContentDigest(event),
      },
    };
  };
  if (!token) {
    throw new Error('Missing Eventbrite OAuth token');
  }
  const sdk = eventbrite({ token });
  try {
    const { events } = await sdk.request(
      `/organizers/${organizerId}/events/?only_public=on&expand=venue`
    );
    events.forEach((event) => {
      const eventNode = processEvent(event);

      createNode(eventNode);
    });
  } catch (err) {
    console.error('EB Fetch fail:', err);
  }
};
