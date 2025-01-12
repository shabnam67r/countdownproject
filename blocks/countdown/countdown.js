export default function decorate(block) {
  // Create a wrapper container for the countdown section
  const countdownContainer = document.createElement('div');
  countdownContainer.className = 'countdown-container';
  // Add the main content wrapper to split left and right sections
  const countdownContentWrapper = document.createElement('div');
  countdownContentWrapper.className = 'countdown-content-wrapper';

  // Left section for buttons
  const countdownLeft = document.createElement('div');
  countdownLeft.className = 'countdown-left';

  const button1 = document.createElement('button');
  button1.className = 'countdown-button-login';
  const loginImage = document.createElement('img');
  loginImage.src = '../../assets/images/login.png'; // Update with the correct path
  loginImage.alt = 'Login Icon';
  button1.prepend(loginImage);
  const button2 = document.createElement('button');
  button2.className = 'countdown-button-register';
  const registerImage = document.createElement('img');
  registerImage.src = '../../assets/images/register.png'; // Update with the correct path
  registerImage.alt = 'Register Icon';
  button2.prepend(registerImage);

  countdownLeft.append(button1, button2);

  // Right section for texts and countdown
  const countdownRight = document.createElement('div');
  countdownRight.className = 'countdown-right';

  // Add the three text elements
  const mainText = document.createElement('p');
  mainText.className = 'countdown-main-text';
  mainText.textContent = 'NEXT WEBINAR';

  const subTitle = document.createElement('h6');
  subTitle.className = 'countdown-sub-title';
  subTitle.textContent = 'EVENT NAME it amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor';

  const additionalText = document.createElement('p');
  additionalText.className = 'countdown-additional-text';
  additionalText.textContent = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod';
  // Add the countdown timer
  const countdownTimer = document.createElement('div');
  countdownTimer.className = 'countdown-timer';
  countdownTimer.textContent = '00d : 00h : 00m : 00s'; // Placeholder text for the countdown
  // Function to create a digit with its own background
  // Function to create a time unit container
  const createTimeUnit = (value, label) => {
    const unitContainer = document.createElement('div');
    unitContainer.className = 'countdown-time-unit';
    // Add the number (value)
    const number = document.createElement('span');
    number.className = 'countdown-number';
    number.textContent = value;
    // Add the label (e.g., 'days', 'hours')
    const unitLabel = document.createElement('span');
    unitLabel.className = 'countdown-label';
    unitLabel.textContent = label;
    // Append the number and label to the unit container
    unitContainer.append(number, unitLabel);

    return unitContainer;
  };
  // Add the current date
  const currentDate = document.createElement('p');
  currentDate.className = 'current-date';

  // Format the current date
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(today);
  currentDate.textContent = formattedDate; // E.g., Wednesday, 25 February 2021

  // Append the elements to the right section
  countdownRight.append(
    mainText,
    subTitle,
    additionalText,
    countdownTimer,
    currentDate,
  );

  // Append the left and right sections to the content wrapper
  countdownContentWrapper.append(countdownRight, countdownLeft);

  // Append the content wrapper to the countdown container
  countdownContainer.appendChild(countdownContentWrapper);

  // Clear the block content and append the countdown container
  block.textContent = '';
  block.appendChild(countdownContainer);

  // Countdown Timer Logic
  const targetDate = new Date('2025-01-15T00:00:00');
  const updateTimer = () => {
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      countdownTimer.innerHTML = "<div class='event-started'>Event has started!</div>";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Clear the current timer display
    countdownTimer.innerHTML = '';

    // Append each time unit
    countdownTimer.append(
      createTimeUnit(days, 'Days'),
      createTimeUnit(hours, 'Hours'),
      createTimeUnit(minutes, 'Minutes'),
      createTimeUnit(seconds, 'Seconds'),
    );
  };

  updateTimer();
  setInterval(updateTimer, 1000);
  countdownRight.append(countdownTimer);
}
