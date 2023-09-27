# Next Countries - A Travel Destinations Website

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white) 

## Description
A website showcasing travel destinations built with TypeScript, Next.js, and Prismic, and styled with Chakra UI.

Home Page                             |  North America Page
:------------------------------------:|:------------------------------------:
![](https://i.imgur.com/tFXftBI.gif)  |  ![](https://i.imgur.com/FFBxcMr.gif)

## Getting Started

### Prerequisites
- Node.js
- Yarn package manager
- Prismic API credentials.

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

4. Create a Prismic repository and set up your Prismic API credentials by creating a `.env.local` file and adding the following:

```
PRISMIC_ACCESS_TOKEN=YOUR_PRISMIC_ACCESS_TOKEN
```

Replace `YOUR_PRISMIC_ACCESS_TOKEN` with your Prismic API Access Token.

- And go to `sm.json` to set the endpoint of your app

Replace `YOUR_PRISMIC_API_ENDPOINT` with your Prismic API ENDPOINT.

5. Create a new Custom Type using `slicemachine`:

```
yarn slicemachine
```

- Follow this example (remember to login into the slicemachine).

![slicemachine example](https://i.imgur.com/Mgxq8vX.gif)

- Now you can go to the prismic dashboard and add all the content that you want (the continents and countries if you want to maintain the idea).

6. Running the application

```
yarn dev
```

7. The application will be available at http://localhost:3000 in your browser.

## License
This project is licensed under the terms of the MIT license.
