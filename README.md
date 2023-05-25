# Score Keeper

### Project URLs
👉 [Application URL](https://score-keper.netlify.app)  

👉 [API Documentation](https://documenter.getpostman.com/view/25693870/2s93m622Rg)



## Description
Score Keeper is a user-friendly web application that provides raferee or who so ever is watching a live Badminton match can record scores of that match and save it on our own website and later come and view the scores of it. Basically Score Keeper is a website completely about Badminton made for Badminton lovers.

![Loading ..](https://res.cloudinary.com/dmewxwr0i/image/upload/c_crop,h_100,r_13,w_1271,x_0,y_0/v1685005715/Screenshot_2023-05-25_at_2.24.23_PM_ilnzf7.png)

With Score Keeper, people can view live news regarding sports and badminton in the news section of the website. People can even purchase badminton related products in the shop section which takes them to the same product on amazon, which is an affliate link which helps me earn money through [Amazon Affiliate](https://affiliate-program.amazon.in/) .   

<img src="https://res.cloudinary.com/dmewxwr0i/image/upload/r_26/v1685007338/Screenshot_2023-05-25_at_3.04.42_PM_lnue1k.png">

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


## Project Walk Through

![Loading ..](https://res.cloudinary.com/dmewxwr0i/image/upload/v1685012503/ezgif.com-video-to-gif_cinlf9.gif)
