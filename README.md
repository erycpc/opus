# Opus - Instagram-like Photo Gallery

A modern, responsive photo gallery application built with React and Firebase. Upload photos, store them in Firestore, and display them in a beautiful, interactive grid with smooth animations.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Framer Motion](https://img.shields.io/badge/framer%20motion-%23000000.svg?style=for-the-badge&logo=framer&logoColor=white)

## 🚀 Features

- **📸 Photo Upload** - Simple drag-and-drop or click-to-upload interface
- **🎨 Beautiful Grid Layout** - Responsive masonry-style grid that adapts to all screen sizes
- **✨ Smooth Animations** - Framer Motion animations for image transitions and hover effects
- **🔥 Firestore Integration** - Cloud-based image storage using Firebase Firestore (base64 encoded)
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🎭 Modal View** - Click any image to view it in a full-screen modal with backdrop blur effect
- **⚡ Real-time Updates** - Images update instantly when new photos are uploaded
- **🎯 Progress Tracking** - Visual progress bar during image uploads

## 🛠 Tech Stack

- **Frontend**: React 18+
- **Styling**: CSS3 with gradients and animations
- **Backend**: Firebase
  - Firestore (image storage with base64 encoding)
  - Firebase Authentication (ready for future implementation)
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Poppins, Inter)

## 📋 Prerequisites

- Node.js v14+ and npm
- Firebase project with Firestore enabled
- A modern web browser

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd opus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Framer Motion** (if not already included)
   ```bash
   npm install framer-motion
   ```

## 🔐 Firebase Setup

1. **Create a Firebase project** at [Firebase Console](https://console.firebase.google.com/)

2. **Enable Firestore Database**
   - Go to Firestore Database section
   - Create a database in test mode (or production with appropriate rules)

3. **Get your Firebase config**
   - In Project Settings, find your web app config
   - Update `src/firebase/config.js`:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. **Firestore Security Rules**
   - In Firestore Rules tab, update with:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /images/{document=**} {
         allow read: if true;
         allow create, write: if true; // For demo; use auth rules in production
       }
     }
   }
   ```

## 🚀 Running the App

**Development mode:**
```bash
npm start
```
Opens [http://localhost:3000](http://localhost:3000)

**Production build:**
```bash
npm run build
```

**Run tests:**
```bash
npm test
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ImageGrid.js      # Main grid displaying images
│   ├── Modal.js          # Full-screen image viewer
│   ├── ProgressBar.js    # Upload progress indicator
│   ├── Title.js          # App header
│   └── UploadForm.js     # File upload interface
├── firebase/
│   └── config.js         # Firebase configuration
├── hooks/
│   ├── useFirestore.js   # Fetch images from Firestore
│   └── useStorage.js     # Handle image uploads
├── App.js                # Main app component
├── index.js              # React entry point
├── index.css             # Global styles
└── package.json
```

## 🎨 Styling

The app features a modern design with:
- **Gradient color scheme** - Indigo to pink gradients
- **Smooth animations** - Hover effects and transitions
- **Shadow effects** - Elevation and depth
- **Responsive grid** - Auto-adjusting columns
- **Dark mode ready** - Easy to customize colors in `:root` CSS variables

### Color Variables
```css
--primary: #6366f1          /* Indigo */
--accent: #ec4899           /* Pink */
--secondary: #1f2937        /* Dark Gray */
--success: #10b981          /* Green */
--error: #ef4444            /* Red */
```

## 📸 How to Use

1. **Upload a Photo**
   - Click the circular "+" button in the center
   - Select a JPG or PNG image from your device
   - Watch the progress bar as it uploads
   - Success message appears when done

2. **View Images**
   - Browse the image grid
   - Hover over images to see the zoom effect
   - Click any image to view it in full-screen

3. **Close Modal**
   - Click the backdrop (dark area) to close
   - Or click outside the image

## 🔄 Data Storage

Images are stored in Firestore as base64-encoded data:

**Collection**: `images`
**Document Structure**:
```javascript
{
  url: "data:image/jpeg;base64,...",
  name: "photo.jpg",
  createdAt: timestamp
}
```

**Why base64?** - Avoids Cloud Storage costs and keeps everything in Firestore for simplicity.

## ⚠️ Limitations

- Base64 storage is suitable for photo galleries with moderate collections
- For large-scale apps with many high-resolution images, consider migrating to Firebase Storage
- Firestore read/write limits may apply at high usage volumes

## 🚀 Future Enhancements

- [ ] User authentication
- [ ] Photo filters and editing
- [ ] Sharing functionality
- [ ] Download images
- [ ] Delete images with auth
- [ ] Like/favorite system
- [ ] Comments on images
- [ ] Image compression before upload

## 🤝 Contributing

Contributions are welcome! Feel free to fork, make changes, and submit pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Troubleshooting

**Images not uploading?**
- Check Firebase Firestore rules allow writes
- Verify Firebase config is correct
- Check browser console for errors

**Images not displaying?**
- Check Firestore has an `images` collection
- Ensure `url` field contains base64 data
- Check browser console for errors

**App running slow?**
- Too many images in the collection?
- Consider paginating or filtering results
- Clear browser cache

## 📞 Support

For issues or questions, please open an issue in the repository.

---

**Built with ❤️ using React & Firebase**

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
