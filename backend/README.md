# LiliusMed API

   The LilusMed API is the back-end to the LiliusMed React Web Application.  This documentation covers the setup of the back-end, the tools necessary, as well as the various routes and what they do. 
∏
## Setup Steps

   1. Clone the repository at https://github.com/TheGreatAxios/liliusmed-react.git in the terminal of your choice
   2. CD into the back-end directory ```cd liliusmed-react/backend```
   3. Install project dependencies ```npm install```
   4. If you run into an error run ```[sudo] npm install -g nodemon
   5. You will need to populate the .env.test file with the correct credentials. 
   6. Run the python script in the main folder with the Mongo URI created to upload the data into the database.
   5. Run ```npm run dev``` in the backend folder to start the localhost on PORT 80.
   6. Go to localhost:3000 on your browser after running the React setup.

## Tools, APIs, and Services

	The following tools, APIs, and Services are a main part of this platforms API:
	* NodeJs
	* ExpressJs
	* MongoDB and MongooseJs (ORM)
	* Redis

### The API

   #### Login - /api/login/index
   ```javascript
   GET /api/login
   ```
   * User Login, checks the cookie and verifies

   #### Logout - /api/logout/index.js
   ```javascript
   GET /api/logout
   ```
   * Deletes the User Session

   #### Register - /api/register/index.js
   ```javascript
   GET /api/register
   ```
   * Gets the hospital names for choice on register
   ```javascript
   POST /api/register/hospital
   ```
   * Registers and Verifies a hospital in the database

   #### Edit - /api/edit/editData.js
   ```javascript
   POST /api/editData
   ```
   * Posts the updated numbers for a hospital into the database

   #### Session - /api/session/index.js
   ```javascript
   GET /api/verifySession
   ```
   * Global Cookie Session Verification

   #### Dashboard - /api/dashboard/index.js
   ```javascript
   GET /api/search
   ```
   * Sets the Search on the front-end with all hospital names
   ```javascript
   POST /search/select
   ```
   * When the user picks on the search bar, it will return the matching hospital data
   ```javascript
   POST /api/dashboard/getHospitalData
   ```
   * This sets the users own hospital data on page load