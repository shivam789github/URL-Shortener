# URL Shortener

This is a URL shortener project built with Node.js, Express, MongoDB, Redis, and TypeScript.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Analytics and Scalability](#analytics-and-scalability)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- Shorten long URLs into easily shareable short URLs
- Track click analytics including referral sources, time-based analysis, and device/browser types
- Caching of frequently accessed URLs for improved performance
- Implemented using MVC architecture for better code organization and separation of concerns
- Written in TypeScript for enhanced type safety and maintainability
- Tested with Postman for API testing

## Prerequisites

Before running this project, you need to have the following installed:

- Node.js and npm (Node Package Manager)
- MongoDB
- Redis

## Installation

1. Clone the repository:

   ```
   git clone [https://github.com/your-username/url-shortener.git](https://github.com/shivam789github/URL-Shortener.git)
   ```

2. Install dependencies:

   ```
   cd url-shortener
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory of the project:

   ```
   MONGODB_URI=mongodb://username:password@localhost:27017/url-shortener
  
   ```

   Replace `username`, `password` with your MongoDB credentials and database name.

## Usage

To start the server, run:

```
npm start
```

The server will start on port 4000 by default. You can access the API endpoints using Postman or any other HTTP client.

## Endpoints

- POST `/api/shorten`: Shorten a long URL.
- GET `/:shortUrl`: Redirect to the original URL associated with the short URL.

## Analytics and Scalability

### Analytics

- Click analytics are tracked including referral sources, time-based analysis, and device/browser types.
- Endpoint `/api/analytics` provides access to aggregated analytics data.

### Scalability

- Redis caching is implemented to improve performance by caching frequently accessed URLs.
- The project is structured using MVC architecture for scalability and maintainability.

## Testing

The project is tested using Postman. Import the provided Postman collection and environment file for testing the API endpoints.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
