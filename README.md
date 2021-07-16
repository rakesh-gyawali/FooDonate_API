# FooDonate_Backend

This is backend server for FooDonate_User and FooDonate_Charity android application. RESTful API is used to communicate with the apps. Node.js, MongoDB, Mongoose and Express.js are used. 

## Table of contents
* [General info](#general-info)
* [Links for repo](#links-for-repos)
* [Main technologies and libraries used](#main-technologies-and-libraries-used)
* [Setup](#setup)

## General info
With the app user can send pick up request to the charity to collect the foods that user want to donate. The charity can view the location of the user in the google map. Two apps are created for this. One is for user and another is for charity. The apps communicate with backend via RESTful API.

## Main features
1. Registration by User and Charity.
2. Send pickup request by User to donate the foods. To request the donation, user need to show the pickup location from the Google map.
3. Display Request info (amount of food, type of food ....) and status (pending/accepted/cancelled) by user and check the info and change the status to accept or decline the request. If the Charity accepts the request, Charity should fix the Pick Up date.
4. Dashboard which displays amount of foods collected, no. of requests of this month .... for the Charity.
5. Display name and logo of charities in the Home page in User app. (For now only displays static data. Planning to display details of charity from backend server)
6. Display food distribution events that Charities are organizing. (For now only displays static data. Planning to display event details of charity from backend server)

## Links for repos
* FooDonate User: https://github.com/rakesh-gyawali/FooDonate_User.git
* FooDonate charity: https://github.com/rakesh-gyawali/FooDonate_Charity.git
* FooDonate backend: https://github.com/rakesh-gyawali/FooDonate_Backend.git

## Main technologies and libraries used
Backend
* Node version: 14.16.0
* MongoDB version:  4.4.1 Community
* bcryptjs version: 2.4.3,
* cors version: 2.8.5,
* dotenv version: 8.2.0,
* express version: 4.17.1,
* mongoose version: 5.11.13,
* multer version: 1.4.2

Android apps for user and charity
* retrofit2 version: 2.6.1 
* de.hdodenhof:circleimageview: 3.1.0

## Setup
1. Clone all the repos listed above.
2. Open the backend root folder with terminal and enter `npm install`
3. Create file named ".env" in backend root folder and copy-paste, change the values and save.
```
Port=3001 
dbURI='YOUR_MongoDB_URL'
SECRET='REPLACE_WITH_ANY_CHARACTERS'
```
4. Enter 'npm start' to run the server.
5. Open the Food Donate Charity folder with Android Studio.
6. Press shift key 2 times quickly to open file search and type URL to open URL file.
7. In URL file change the value of "BASE_URL" string variable to your IP Address.
8. Run the app and click on Sign Up and create the account.
9. Open the Food Donate User folder with Android Studio and repeat 5-8. Now, you can use the app.

