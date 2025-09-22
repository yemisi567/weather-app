# Weather App

A modern, responsive weather application built with React, TypeScript, and Tailwind CSS. Get real-time weather information for any location with a beautiful, intuitive interface.


<img width="1778" height="896" alt="Screenshot 2025-09-22 at 23 27 31" src="https://github.com/user-attachments/assets/624470de-af90-41d8-9085-ec036140a7fb" />


## Features

-  **Real-time Weather Data** - Get current weather conditions for any location
-  **Location Search** - Search for weather by city name
-  **Detailed Metrics** - View temperature, humidity, wind speed, UV index, and more
-  **Dark Mode Support** - Toggle between light and dark themes
-  **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
-  **Fast & Lightweight** - Built with modern React and optimized for performance


## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Create React App
- **Testing**: Jest & React Testing Library
- **Notifications**: Sonner

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables

```bash
# Create a .env file in the root directory
# Add your weather API key
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

4. Start the development server

```bash
npm start
# or
yarn start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Images/          # SVG and image components
│   ├── layout/          # Layout components (Header, Sidebar, etc.)
│   ├── ui/              # Reusable UI components
│   └── hooks/           # Custom React hooks
├── context/             # React Context providers
├── types/               # TypeScript type definitions
└── styles/              # Global styles and Tailwind config
```




## Features Overview

### Weather Dashboard

- Current temperature and conditions
- 5-day weather forecast
- Hourly weather updates
- Weather alerts and notifications

### Search Functionality

- Search by city name
- Auto-complete suggestions
- Recent searches history
- Geolocation support

### Weather Metrics

- Temperature (current, feels like, min/max)
- Humidity percentage
- Wind speed and direction
- UV index
- Visibility
- Pressure
- Sunrise/sunset times





## API Integration

This app integrates with a weather API to fetch real-time data. Make sure to:

1. Sign up for a weather API service (e.g., OpenWeatherMap, WeatherAPI)
2. Get your API key
3. Add it to your `.env` file as `REACT_APP_WEATHER_API_KEY`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Development

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Write tests for new features

## Deployment

### Build for Production

```bash
npm run build
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Weather data provided by [Weather API Service]
- Icons and images from [Icon Library]
- Built with [Create React App](https://github.com/facebook/create-react-app)

## Support

Email: alegbeyemi@gmail.com

---

Made with ❤️ by Mojisola Alegbe
