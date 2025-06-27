# Browser-Extensions-Manager-UI


A modern, responsive web interface for managing browser extensions with dark/light theme support and interactive filtering capabilities.

## 🌟 Features

- **Theme Toggle**: Switch between dark and light modes with persistent storage
- **Extension Filtering**: Filter extensions by status (All, Active, Inactive)
- **Interactive Controls**: Toggle extension status with custom switches
- **Remove Extensions**: Delete extensions with a single click
- **Responsive Design**: Optimized for all screen sizes
- **Modern UI**: Clean, professional interface with smooth animations

## 🎨 Screenshots

### Dark Mode
The default dark theme provides a modern, eye-friendly interface perfect for developers.

### Light Mode
Switch to light mode for better visibility in bright environments.

## 🚀 Demo

View the live demo: [Browser Extensions Manager UI](your-demo-link-here)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: Interactive functionality without frameworks
- **Google Fonts**: Noto Sans for clean typography
- **CSS Custom Properties**: For theme management

## 📁 Project Structure

```
browser-extensions-manager/
├── index.html              # Main HTML file
├── assets/
│   ├── style.css          # Main stylesheet
│   └── images/            # Extension logos and icons
├── js/
│   └── script.js          # JavaScript functionality
└── README.md              # Project documentation
```

## 💡 Usage

### Theme Switching
- Click the sun/moon icon in the header to toggle between light and dark themes
- Theme preference is automatically saved to localStorage

### Filtering Extensions
- **All**: Shows all extensions regardless of status
- **Active**: Shows only enabled extensions
- **Inactive**: Shows only disabled extensions

### Managing Extensions
- **Toggle Status**: Use the switch to enable/disable extensions
- **Remove**: Click the "Remove" button to delete an extension from the list

## 🎯 Key Features Explained

### Responsive Design
The interface adapts to different screen sizes:
- **Desktop**: 3-column grid layout
- **Tablet**: 2-column grid layout
- **Mobile**: Single column with adjusted spacing

### Data Management
- Extension states are managed through `data-active` attributes
- Theme preferences persist across browser sessions
- Real-time filtering without page reloads

### Interactive Elements
- Custom toggle switches with smooth animations
- Hover effects on buttons and interactive elements
- Focus states for accessibility

## 🎨 Customization

### Adding New Extensions
To add a new extension, insert a new `.box` element in the HTML:

```html
<div class="box" data-active="true">
    <div class="content">
        <div class="first_content">
            <img src="./assets/images/your-logo.svg" alt="">
            <div class="texts">
                <h3>Extension Name</h3>
                <p>Extension description here.</p>
            </div>
        </div>
        <div class="switches_icons">
            <button class="remove">Remove</button>
            <label class="switch">
                <input type="checkbox" class="toggleCheck" checked>
                <span class="slider"></span>
            </label>
        </div>
    </div>
</div>
```

### Theme Customization
Modify CSS custom properties in `:root` to change colors:

```css
:root {
    --light-gradient: linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%);
    --dark-gradient: linear-gradient(180deg, #040918 0%, #091540 100%);
    --red-buttons: hsl(3, 71%, 56%);
    /* Add your custom colors */
}
```

## 🔍 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 📱 Mobile Support

Fully responsive design with optimized layouts for:
- Smartphones (300px - 500px)
- Tablets (500px - 1000px)
- Desktop (1000px+)

## 🚧 Future Enhancements

- [ ] Search functionality for extensions
- [ ] Bulk actions (enable/disable multiple extensions)
- [ ] Extension categories and tags
- [ ] Import/export extension configurations
- [ ] Extension usage statistics
- [ ] Drag and drop reordering

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Extension icons and logos used in the demo
- Google Fonts for typography
- Inspiration from modern browser extension managers

---

⭐ If you found this project helpful, please give it a star!
