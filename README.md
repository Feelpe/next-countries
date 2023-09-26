# Next Countries - A Travel Destinations Website

## Description
A website showcasing travel destinations built with TypeScript, Next.js, Prismic, and styled with Chakra UI.

## Getting Started

### Prerequisites
- Node.js
- Yarn package manager
- Prismic API credentials and the contents for display in the app.

### Installation

1. Clone the repository

```
git clone https://github.com/Feelpe/next-countries.git
```

2. Enter the project directory:

```
cd next-countries
```

3. Install the dependencies

```
yarn install
```

4. Create a Prismic repository and feat with images and texts

- Create a new Custom Type with the following fields:
  - Title (Text)
  - Content (Rich Text)
  - Image (Image)
 
- Before you can add all the information you want by the dashboard of prismic.

5. Set up your Prismic API credentials by creating a `.env.local` file and adding the following:

```
PRISMIC_API_ENDPOINT=YOUR_PRISMIC_API_ENDPOINT
PRISMIC_ACCESS_TOKEN=YOUR_PRISMIC_ACCESS_TOKEN
```

Replace `YOUR_PRISMIC_API_ENDPOINT` and `YOUR_PRISMIC_ACCESS_TOKEN` with your Prismic API details.

6. Running the application

```
yarn dev
```

7. The application will be available at http://localhost:3000 in your browser.

## License
This project is licensed under the terms of the MIT license.
