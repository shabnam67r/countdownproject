import { createOptimizedPicture } from '../../scripts/aem.js';

// Utility function to fetch speaker data
function getSpeakerData(index) {
  const speakers = [
    { name: 'Dr. Name Surname', bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.' },
    { name: 'Dr. Name Surname', bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.' },
    { name: 'Dr. Name Surname', bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.' },
    { name: 'Dr. Name Surname', bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.' },
    { name: 'Dr. Name Surname', bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.' },
    { name: 'Dr. Name Surname', bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.' },
    { name: 'Dr. Name Surname', bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.' },
    { name: 'Dr. Name Surname', bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.' },
  ];
  return speakers[index];
}

// Function to show the modal with speaker details
function showModal(modal, modalBody, speakerData) {
  // Correct destructuring for 'getSpeakerData'
  const { name, bio } = speakerData;
  modalBody.innerHTML = `
    <h2>${name}</h2>
    <p>${bio}</p>
  `;
  modal.style.display = 'block';
}

// Function to add modal functionality
function addModalFunctionality(block) {
  const modal = document.createElement('div');
  modal.className = 'speaker-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <div class="modal-body"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const closeButton = modal.querySelector('.close-button');
  const modalBody = modal.querySelector('.modal-body');

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  block.querySelectorAll('.see-bio-button').forEach((button) => {
    button.addEventListener('click', () => {
      const speakerData = getSpeakerData(button.dataset.index); // Fetch speaker data
      showModal(modal, modalBody, speakerData); // Show modal
    });
  });
}

// Main decorate function
export default function decorate(block) {
  const ul = document.createElement('ul');
  [...block.children].forEach((row, index) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'speakers-card-image';
      } else {
        div.className = 'speakers-card-body';
        const seeBioButton = document.createElement('button');
        seeBioButton.className = 'see-bio-button';
        seeBioButton.textContent = 'See Bio';
        seeBioButton.dataset.index = index;
        div.append(seeBioButton);
      }
    });
    ul.append(li);
  });

  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);

  addModalFunctionality(block);
}
