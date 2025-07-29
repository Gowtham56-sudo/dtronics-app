# Smart Home Automation App

A modern, clean Flutter mobile app for smart home automation with a futuristic design and soft color palette.

## Features

### 1. Login/Signup Page
- Email and password authentication
- Google login integration
- Toggle between login and signup modes
- Animated floating smart home icons
- Soft gradient background

### 2. Home Selection Page
- List of homes with cards showing room and device counts
- Add new home functionality
- Profile access button
- Clean card-based design

### 3. Room List Page
- Grid layout showing rooms with icons
- Temperature display for each room
- Device count per room
- Floating action button to add new rooms

### 4. Device Control Page
- List of connected devices (lights, fans, AC, TV)
- Functional toggle switches with smooth animations
- Real-time voltage graphs using FL Chart
- Status indicators (ON/OFF badges)
- Add device modal with two options:
  - Wi-Fi scan with network selection
  - Manual SSID/password entry

### 5. Profile Page
- User avatar with initials
- Menu items: About, Help, Feedback, Connected Devices
- App version display (v1.0.0)
- Sign out functionality

## Design Features

- **Soft Color Palette**: Light blues (#667EEA), whites, and soft greys
- **Futuristic Design**: Clean, minimalistic interface with rounded corners
- **Mobile-Optimized**: Proper touch targets and spacing
- **Smooth Animations**: Hover effects, floating animations, transitions
- **Responsive Switches**: 2D toggle switches with realistic movement
- **Real-time Graphs**: Interactive voltage monitoring charts

## Dependencies

- `flutter`: SDK
- `google_fonts`: Custom fonts
- `fl_chart`: Charts and graphs
- `font_awesome_flutter`: Icons
- `cupertino_icons`: iOS-style icons

## Getting Started

1. Make sure you have Flutter installed
2. Run `flutter pub get` to install dependencies
3. Run `flutter run` to start the app

## Project Structure

```
lib/
├── main.dart                 # App entry point
├── pages/
│   ├── login_page.dart       # Authentication page
│   ├── home_selection_page.dart # Home selection
│   ├── room_list_page.dart   # Room listing
│   ├── device_control_page.dart # Device controls
│   └── profile_page.dart     # User profile
```

The app uses Material Design with custom theming and Google Fonts for a modern, professional appearance suitable for home automation users.