// script.js - Extracted JavaScript for Print Service form

// Utility functions
const showElement = (element) => element.style.display = 'block';
const hideElement = (element) => element.style.display = 'none';

/**
 * Validates the print service form
 * @returns {boolean} - Whether the form is valid
 */
const validateForm = () => {
  // At least one checkbox should be selected
  const hasCheckedSections = document.querySelectorAll('.section-check:checked').length > 0;
  if (!hasCheckedSections) {
    alert('Please select at least one document section');
    return false;
  }
  return true;
};

/**
 * Initialize all form event listeners
 */
function initForm() {
  // Handle image upload and preview
  document.getElementById('imageUpload').addEventListener('change', handleImageUpload);
  
  // Handle form submission
  document.getElementById('printForm').addEventListener('submit', handleFormSubmit);
}

/**
 * Process image upload and generate preview
 * @param {Event} e - The change event 
 */
function handleImageUpload(e) {
  const file = e.target.files[0];
  const previewImage = document.getElementById('previewImage');
  
  // Reset previous preview
  hideElement(previewImage);
  
  if (!file) return;
  
  // Validate file size (max 5MB)
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  if (file.size > maxSize) {
    alert('File size exceeds 5MB limit. Please choose a smaller image.');
    this.value = ''; // Clear the input
    return;
  }
  
  // Create preview
  const reader = new FileReader();
  reader.onload = function(event) {
    previewImage.src = event.target.result;
    showElement(previewImage);
  };
  reader.onerror = function() {
    alert('Error reading file. Please try again.');
  };
  reader.readAsDataURL(file);
}

/**
 * Handle form submission and WhatsApp message creation
 * @param {Event} event - The submit event
 */
function handleFormSubmit(event) {
  event.preventDefault();
  
  if (!validateForm()) return;
  
  const loadingIndicator = document.getElementById('loadingIndicator');
  showElement(loadingIndicator);
  
  // Build message for WhatsApp
  const selected = [...document.querySelectorAll('.section-check:checked')]
    .map(cb => cb.value).join(', ');
  const note = document.getElementById('note').value;
  
  const message = `📄 Permintaan Cetakan Diterima:
✅ Bahagian: ${selected}
📝 Nota: ${note || "Tiada nota"}
📤 Akan diproses dan dimaklumkan kemudian.`;
  
  // Simulate brief processing time for better UX
  setTimeout(() => {
    hideElement(loadingIndicator);
    
    // Open WhatsApp with pre-filled message
    const waLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  }, 500);
}

// Initialize form when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initForm);