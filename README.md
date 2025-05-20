# Printify - Rural Print & Send Service

## Overview

Printify is a streamlined web application designed specifically for rural communities to easily request document printing and delivery services. The application allows users to select document types, add notes, attach images, and send requests via WhatsApp to local print service providers.

## Features

- **Simple Document Selection**: Easily choose which document sections need printing
- **Custom Notes**: Add personalized instructions or details
- **Image Upload**: Attach supporting images with automatic preview
- **WhatsApp Integration**: Direct message generation for service providers
- **Mobile Responsive**: Works seamlessly on all devices
- **Accessibility Focused**: Built with WCAG guidelines in mind
- **Malay Language Support**: Interface in Bahasa Malaysia for local users

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for WhatsApp integration

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fallenben289/printify-v1.git
   cd printify-v1
   ```

2. No build step required - open `index.html` in your browser to use the application locally.

3. For deployment, upload all files to your web hosting service.

## Usage

1. **Select Document Sections**: Check the boxes for document sections you need printed
2. **Add Notes**: Include any special instructions or details
3. **Upload Image** (Optional): Add supporting images if needed
4. **Submit Request**: Click the "Hantar & WhatsApp" button to generate a WhatsApp message
5. **Send Message**: Review the pre-filled message and send it to your local print provider

## Project Structure

```
printify-v1/
├── index.html              # Main application HTML
├── css/
│   └── styles.css          # External stylesheet (linked but not required)
├── js/
│   └── script.js           # Application JavaScript
└── assets/
    └── images/
        └── printify-logo.png  # Application logo
```

## Technical Details

### Technologies Used

- HTML5
- CSS3 (with CSS variables for theming)
- Vanilla JavaScript (ES6+)
- WhatsApp Web API (via URL parameters)

### Features Implementation

- **Form Validation**: Client-side validation ensures at least one section is selected
- **File Size Limiting**: Images are validated to be under 5MB
- **Preview Generation**: Built-in image preview using FileReader API
- **Loading Indicator**: Visual feedback during processing
- **Error Handling**: User-friendly error messages for validation issues

## Development

### Setup Development Environment

1. Fork the repository
2. Clone your fork locally
3. Create a feature branch:
   ```bash
   git checkout -b feature-description
   ```

### Coding Standards

- Use semantic HTML5 elements
- Follow BEM methodology for CSS class naming
- Write descriptive commit messages
- Add JSDoc comments to JavaScript functions
- Maintain accessibility standards (WCAG 2.1 AA compliance)

### Pull Request Process

1. Ensure code passes all validation checks
2. Update documentation if necessary
3. Add tests for new functionality
4. Create a PR with a clear description of changes

## Roadmap

- [ ] Add multilingual support
- [ ] Implement dark mode
- [ ] Add delivery address input
- [ ] Create admin panel for service providers
- [ ] Implement payment integration

## Contributing

We welcome contributions to Printify! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Maintainer: Ben - [fallenben289@github.com](mailto:fallenben289@github.com)

## Acknowledgements

- Icon design by [Iconify](https://iconify.design/)
- WhatsApp for providing web API functionality
- All contributors who have helped improve this application
