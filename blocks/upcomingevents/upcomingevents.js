import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Create a wrapper element for the upcoming events
  const ul = document.createElement('ul');

  // Add a custom class to this block for styling
  ul.classList.add('upcoming-events-carousel');

  // Remove default list styles and set a background color
  ul.style.listStyle = 'none'; // Removes default list styling
  ul.style.padding = '50px 0'; // Adjust padding as needed for spacing
  ul.style.overflowX = 'auto'; // Allows horizontal scrolling
  ul.style.display = 'flex'; // Display items in a row
  ul.style.gap = '10px'; // Space between cards

  // Loop through the children of the block (assuming they represent events)
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    // Move each child element of the row into the <li> element
    while (row.firstElementChild) li.append(row.firstElementChild);

    // Add specific classes to elements based on their structure
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'event-card-image';
      } else {
        div.className = 'event-card-body';
      }
    });

    // Append the <li> to the <ul>
    ul.append(li);
  });

  // Optimize the images within the <picture> tags
  ul.querySelectorAll('picture > img').forEach((img) => {
    img
      .closest('picture')
      .replaceWith(
        createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]),
      );
  });

  // Clear the content of the block and append the newly created <ul> element
  block.textContent = '';
  block.append(ul);
}
