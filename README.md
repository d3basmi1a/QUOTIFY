# Quotify

Quotify is a React Native application that displays random quotes and provides features to read, copy, and share the quotes. The app fetches quotes from the Quotable API.

## Features

- Display a random quote with the author's name.
- Read the quote aloud using text-to-speech.
- Copy the quote to the clipboard.
- Share the quote via other applications.
- Fetch a new random quote.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/d3basmi1a/QUOTIFY.git
    ```

2. Navigate to the project directory:
    ```sh
    cd Quotify
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Start the application:
    ```sh
    npx expo start
    ```

## Usage

- Open the app on your device or emulator.
- The app will display a random quote.
- Use the buttons below the quote to read it aloud, copy it to the clipboard, or share it.
- Press the "New Quote" button to fetch a new random quote.

## Dependencies

- `react-native`: The core React Native library.
- `expo-speech`: Expo module for text-to-speech functionality.
- `expo-clipboard`: Expo module for clipboard functionality.
- `react-native-vector-icons`: Library for vector icons in React Native.
- `quotable.io`: The API used to fetch random quotes.

