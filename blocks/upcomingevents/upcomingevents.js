import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Create a wrapper element for the upcoming events
  const ul = document.createElement('ul');
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
    img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
  });

  // Clear the content of the block and append the newly created <ul> element
  block.textContent = '';
  block.append(ul);
}
