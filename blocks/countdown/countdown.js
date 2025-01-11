document.addEventListener('DOMContentLoaded', () => {
  const upcomingEventsSection = document.getElementById('upcoming-events-section');
  // Create a <picture> element for the background image
  const picture = document.createElement('picture');
  const img = document.createElement('img');
  // Set the image source and attributes
  img.src = 'https://via.placeholder.com/1920x1080'; // Replace with your image URL
  img.alt = 'Upcoming Events Background';
  picture.appendChild(img);
  // Append the picture element to the upcoming events section
  upcomingEventsSection.appendChild(picture);
  // Create an <h1> element for the heading
  const heading = document.createElement('h1');
  heading.textContent = 'Upcoming Events'; // Replace with your desired text
  upcomingEventsSection.appendChild(heading);
  // Now create the event list
  const eventsWrapper = document.createElement('div');
  eventsWrapper.className = 'events-wrapper';
  // Example event item
  const eventItem = document.createElement('div');
  eventItem.className = 'event-item';
  // Add a picture for the event
  const eventPicture = document.createElement('picture');
  const eventImg = document.createElement('img');
  eventImg.src = 'https://via.placeholder.com/400x300'; // Replace with actual event image URL
  eventImg.alt = 'Event Image';
  eventPicture.appendChild(eventImg);
  // Add event details
  const eventDetails = document.createElement('div');
  eventDetails.className = 'event-details';
  const eventTitle = document.createElement('h2');
  eventTitle.textContent = 'Event Title'; // Replace with actual event title
  const eventDescription = document.createElement('p');
  eventDescription.textContent = 'Event description goes here'; // Replace with actual event description
  eventDetails.append(eventTitle, eventDescription);
  // Append the event image and details to the event item
  eventItem.append(eventPicture, eventDetails);
  // Append the event item to the events wrapper
  eventsWrapper.appendChild(eventItem);
  // Finally, append the events wrapper to the upcoming events section
  upcomingEventsSection.appendChild(eventsWrapper);
});
