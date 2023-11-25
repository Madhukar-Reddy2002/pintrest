**Project Name: SocialSnap**

## Description

SocialSnap is a social media platform that allows users to share images, connect with friends,
and create a personalized profile. Users can upload images, add captions, and explore a feed of posts from other users.
The platform provides a seamless and visually appealing experience for sharing moments and staying connected.
Built with Node.js, Express, and Bootstrap, SocialSnap also includes user authentication for a secure environment. Explore, connect, and share your snapshots with SocialSnap!

## Project Structure

- **`/routes`**: Contains route handlers for different paths.
- **`/views`**: Contains HTML files for rendering views.
- **`/public`**: Contains static assets like stylesheets and images.
- **`app.js`**: Main application file.
- **`multer.js`**: Multer configuration for file upload.
- **`passport.js`**: Passport configuration for user authentication.
- **`/models`**: Contains data models (e.g., User, Post).
- **`/stylesheets`**: Contains CSS files for styling.

## Dependencies

- [Express](https://expressjs.com/): Web framework for Node.js.
- [Passport](http://www.passportjs.org/): Authentication middleware for Node.js.
- [Multer](https://github.com/expressjs/multer): Middleware for handling `multipart/form-data`.
- [Bootstrap](https://getbootstrap.com/): Front-end framework.

## Pages

### `index.ejs`

- **Route**: `/`
- Description: Default landing page.
- ### PREVIEW:
- ![image](https://github.com/Madhukar-Reddy2002/pintrest/assets/104265607/5b07b9ba-6444-496b-8744-eb1d49c23b2a)


### `login.ejs`

- **Route**: `/login`
- Description: User login page.
- ### PREVIEW:
- ![image](https://github.com/Madhukar-Reddy2002/pintrest/assets/104265607/1fab65b5-7b7a-40cf-9f68-e897f954dc7c)


### `feed.ejs`

- **Route**: `/feed`
- Description: Feed page displaying posts.
- ### PREVIEW:
- ![image](https://github.com/Madhukar-Reddy2002/pintrest/assets/104265607/d1146df6-e4a4-4a83-b5dd-e7701f078d95)


### `profile.ejs`

- **Route**: `/profile`
- Description: User profile page.
- ### PREVIEW:
- ![image](https://github.com/Madhukar-Reddy2002/pintrest/assets/104265607/ce00d4a0-9bb0-4509-b448-bfbf7a942690)


## Routes

- `/`: Home route.
- `/login`: User login route.
- `/feed`: Feed route.
- `/upload`: Post upload route.
- `/register`: User registration route.
- `/logout`: Logout route.
- `/profile`: User profile route.

## File Upload

- Route: `/upload`
- Method: POST
- Description: Handles file uploads with captions.

## Authentication

- Passport local strategy is used for user authentication.
- Routes are protected using the `isLoggedIn` middleware.

## Author

DANDU MADHUKAR REDDY

## License

This project is licensed under the [MIT License](LICENSE).
