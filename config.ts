//
//    Bento-Next
//    Config file
//
//
//    https://github.com/migueravila/Bento - upstream

import { Config } from './src/types/config';

// Bento-next config
// Use an editor with Typescript support to get autocomplete and validity checking!
export const config: Config = {
  // General
  name: 'Arki',
  openInNewTab: true,
  title: 'New tab :)',

  // Clock
  twelveHourFormat: false,
  flashSeparator: false,

  // Font Family
  font: {
    // 'google' or 'local'
    source: 'google',
    // Font name, e.g. 'Roboto' (case sensitive)
    name: 'Inter',
  },

  // Theme
  theme: 'everblush',

  // Place a background image in ./src/assets/images/ and provide the file name.
  // Alternatively, provide a URL to an image. If the page is served over https, you may have issues loading images from insecure origins.
  // Set to "" to disable.
  backgroundImage: '',
  themes: [
    // List of installed themes, add your own themes in ./src/assets/css/themes and include it in the array below.
    'arc',
    'bento',
    'catppuccin-frappe',
    'catppuccin-macchiato',
    'catppuccin-mocha',
    'conceptdark', // dark mode only
    'monokai',
    'nord',
    'sakura',
    'solarized',
    'everblush'
  ],

  // Search Bar
  searchBar: true,
  searchEngine: 'ddg', // google, ddg
  barPlaceholder: 'Search...', // if blank, use search engine name. Set to ' ' for no placeholder.
  autoFocusBar: true,

  // Greetings
  greetingMorning: 'Good morning,',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Sweet dreams,',

  // Layout
  layout: 'buttons', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: import.meta.env.VITE_API_KEY, // Set your OpenWeatherMap key in .env - Move the included .env.example to .env
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // Request location from the browser. If false, or location is denied, use the coordinates below.
  defaultLatitude: '10.654810',
  defaultLongitude: '76.475082',

  // Automatic theme switching:
  // "system" - Switches based on OS color preference
  // "location" - Switches based on local sunrise/sunset (requires OpenWeatherMap API key)
  // "preset" - Switches based on set hours
  // "none" - No automatic switching
  autoTheme: 'system',

  // If autoTheme is set to "preset", set the hours below.
  darkModeOnTime: '18:30',
  lightModeOnTime: '07:00',

  // Set any of the below options to false to disable drawing the component on the page.
  // If themeButton is set to false, the theme can only be set in this file.
  // Disabling the weather component may cause issues with location-based light/dark switching.
  componentsEnabled: {
    searchBar: true,
    themeButton: true,
    clock: true,
    greeter: true,
    date: true,
    weather: true,
  },

  // Buttons
  buttons: [
    // First buttons group
    // If you're using the 'bento' layout, this is the only group that will be used.
    [
      {
        name: 'Bluesky',
        icon: 'fab-twitter',
        url: 'https://bsky.app/',
      },
      {
        name: 'Character.ai',
        icon: 'comment',
        url: 'https://c.ai/',
      },
      {
        name: 'GitHub',
        icon: 'fab-github',
        url: 'https://github.com/',
      },
      {
        name: 'Tutanota',
        icon: 'email',
        url: 'https://mail.google.com/mail/u/1',
      },
      {
        name: 'YouTube',
        icon: 'fab-youtube',
        url: 'https://youtube.com/',
      },
      {
        name: 'Monkeytype',
        icon: 'keyboard',
        url: 'https://monkeytype.com/',
      },
    ]
  ],

  // Lists
  lists: [
    // First list group
    // If you're using the 'bento' layout, this is the only group that will be used.
    [
      {
        icon: 'music', // Icon for the list to use. The same as the buttons.
        links: [
          {
            name: 'Inspirational', // Display text for the link
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // URL to the page
          },
          {
            name: 'Classic',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
          {
            name: 'Oldies',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
          {
            name: 'Rock',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
        ],
      },
      {
        icon: 'coffee',
        links: [
          {
            name: 'Linkedin',
            url: 'https://www.linkedin.com',
          },
          {
            name: 'Dribbble',
            url: 'https://www.dribbble.com',
          },
          {
            name: 'Trello',
            url: 'https://www.trello.com',
          },
          {
            name: 'Slack',
            url: 'https://www.slack.com',
          },
        ],
      },
    ],
    // Second list group
    // You muse use the 'lists' layout to use this group.
    [
      {
        icon: 'house-user',
        links: [
          {
            name: 'Spotify',
            url: 'https://www.spotify.com',
          },
          {
            name: 'Reddit',
            url: 'https://www.reddit.com',
          },
          {
            name: 'Hashnode',
            url: 'https://www.hashnode.com',
          },
          {
            name: 'Pocket',
            url: 'https://www.pocket.com',
          },
        ],
      },
      {
        icon: 'fab-github',
        links: [
          {
            name: 'Front',
            url: 'https://www.reddit.com/r/Frontend/',
          },
          {
            name: 'Rust',
            url: 'https://www.reddit.com/r/rust/',
          },
          {
            name: 'Go',
            url: 'https://www.reddit.com/r/golang/',
          },
          {
            name: 'Repos',
            url: 'https://github.com/migueravila',
          },
        ],
      },
    ],
  ],
};
