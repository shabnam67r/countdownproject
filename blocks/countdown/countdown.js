document.addEventListener('DOMContentLoaded', () => {
  const upcomingEventsSection = document.getElementById('countdown-section');

  // Add a <picture> element for the background image
  const picture = document.createElement('picture');
  const img = document.createElement('img');
  img.src = '../../assets/images/Group 1671.png'; // Replace with your image URL
  img.alt = 'Countdown Background';
  img.className = 'background-image'; // Add class for styling
  picture.appendChild(img);
  upcomingEventsSection.appendChild(picture);

  // Create a container for the text and countdown
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'content-wrapper';

  // Add the titles
  const mainText = document.createElement('p');
  mainText.textContent = 'Don’t Miss the Excitement!'; // First normal text
  mainText.className = 'main-text';

  const subTitle = document.createElement('h3');
  subTitle.textContent = 'Upcoming Events'; // H3 heading
  subTitle.className = 'sub-title';

  const additionalText = document.createElement('p');
  additionalText.textContent = 'Plan your schedule and join us for these unforgettable moments.'; // Third normal text
  additionalText.className = 'additional-text';

  contentWrapper.append(mainText, subTitle, additionalText);

  // Add the countdown timer
  const countdownTimer = document.createElement('div');
  countdownTimer.className = 'countdown-timer';
  countdownTimer.textContent = 'Loading countdown...';
  contentWrapper.appendChild(countdownTimer);

  // Append the content wrapper to the upcoming events section
  upcomingEventsSection.appendChild(contentWrapper);

  // Countdown functionality
  const countdownDate = new Date('2025-01-15T00:00:00').getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      countdownTimer.textContent = 'The event has started!';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownTimer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  updateCountdown();
});
