## Score Keeper

### Project URLs
👉 [Frontend](https://score-keper.netlify.app)  

👉 [Backend API](https://score-keeper-server.onrender.com)  

👉 [API Doc](https://documenter.getpostman.com/view/25693870/2s93m622Rg)



## Description
Score Keeper is a user-friendly web application that provides raferee or who so ever is watching a live Badminton match can record scores of that match and save it on our own website and later come and view the scores of it. Basically Score Keeper is a website completely about Badminton made for Badminton lovers.

With Score Keeper, people can view live news regarding sports and badminton in the news section of the website. People can even purchase badminton related products in the shop section which takes them to the same product on amazon, which is an affliate link which helps me earn money through `Amazon Affiliate`.   

What problem does it solve?

As I am a Badminton Player I noticed that people use pen and paper to record live scores of a badminton match and later convert it to excel sheets and save it for their future reference. So from Score keeper I reduced the unnecessary use of paper and the strain of updating the scores in excel sheets.  

### Installation Steps

1. Download the repository.
2. Install the dependencies for the frontend and backend by running the following command in the project root directory:

    ```
    npm i
    ```

3. Create a `.env` file in the `score_keeper_client` directory and add the following variables:

    ```
    REACT_APP_DOMAIN="your auth domain"
    REACT_APP_CLIENT_ID="your auth client id"
    REACT_APP_SUBMIT_URI=http://localhost:4000/submitGameData
    REACT_APP_FETCH_URI=http://localhost:4000/getAllGameData
    REACT_APP_NEWS_URL=http://localhost:4000/news
    REACT_APP_PRODUCT_URI=http://localhost:4000/productData
    REACT_APP_PRODUCT_URI2=http://localhost:4000/productData/Shuttel
    REACT_APP_PRODUCT_URI3=http://localhost:4000/productData/Racquet
    REACT_APP_PRODUCT_URI4=http://localhost:4000/productData/Grips
    REACT_APP_PRODUCT_URI5=http://localhost:4000/productData/Shoes
    ```

4. Create a `.env` file in the `score_keeper_server` directory and add the following variables:

    ```
    PORT=4000
    MONGO_URI="your mongo db url"
    ```

5. Start the frontend server by running the following command in your frontend directory:

    ```
    npm start
    ```

6. Start the backend server by running the following command in your backend directory:
    
    ```
    node server.js
    ```

7. Open your web browser and go to `http://localhost:3000` to view the app.


## 
| Content |
| ------- |
| ****Back-end**** |
| NodeJs - setting up a project with package.json |
| NodeJS Modules |
| fs Module |
| Streams and Buffers |
| NPM |
| Nodemon |
| Events in Nodejs |
| Express JS - first route |
| ExpressJS - additional routes |
| Template Engines |
| Partials |
| Middlewares |
| ****Databases**** |
| MongoDB - Installations and Basics |
| Mongoose |
| CRUD Operations |
| Simple API - CRUD Operations using NodeJs |
| Schemas and Models |
| Indexes |
| Aggregations |
| ****Front-end and Full Stack**** |
| Low-fid design for your application |
| High-fid design for your application |
| ReactJS app initialization |
| Application components created |
| Application deployed |
| IDE Setup |
| NodeJs REPL |
| Using the public folder to serve files |
| Postman Use for Testing |
| Authentication |
| Deployment |
| ****Extra Topics**** |
| dotenv |
| Google OAuth |
| React Router |
| Material UI |
| ThreeJS |
| Spline |