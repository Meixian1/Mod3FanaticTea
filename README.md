A note for my instructor only: for this project, please exclude the components that were not used: ImageUploader, ProductDisplayCards, ProductPlaceholder, DisplayImages, StripeAPI. Thank You! 

# Mod3FanaticTea

- Introduction: FanaticTea is intended to serve as an E-Commerce website focusing on the tea brand: Fanatic Tea. Tea lovers can shop for high-quality natural tea ingredients and customize/personalize their own tea products and assortments tailoring to their healty life-style.

- Ecommerce Site / WebApp Screenshots:

  ![image](https://github.com/Meixian1/Mod3FanaticTea/assets/124223514/e253c56f-fb3f-49a4-b96f-7b104300ad57)
 ![image](https://github.com/Meixian1/Mod3FanaticTea/assets/124223514/ef2ebb69-8a58-43f3-9c3c-f522371547a6)
  ![image](https://github.com/Meixian1/Mod3FanaticTea/assets/124223514/2d4e6547-f1b5-4e07-b295-6fd21f7fb6d0)
![image](https://github.com/Meixian1/Mod3FanaticTea/assets/124223514/70158fe8-ad21-4e54-aa4c-4cd621f133a8)



 
- Technologies Used:
- Frontend Technologies:
React Library: UseContext, UseState
@react-google-maps/api (Google Map API)
React Developer Tools Extension
Prettier Extension
React-Router-Dom
mdb-react-ui-kit for icons

- Backend Technologies:
Node.js
Express
Cors
Morgan
Mongoose
Helmet
dotenv
nodemon

- Database:
MongoDB

- Development Tools:
Vite
Visual Studio Code
GitHub

- Hosting and Deployment:
Render Web Service
  
- Getting Started: Info on how to clone and start the app and link to the deployed app on GitHub Pages/Render.
- Connect the local Visual Studio Code to GitHub first - git init, git add ., git commit -m "message", git remote add origin 'URL' (in my case: git remote add origin https://github.com/Meixian1/Mod3FanaticTea.git) git push origin (your branch) (in my case: git push origin master).
- Then, I login to the Render.com and select Web Service hosting for hosting and rending my project. The steps are as follows:
  1. Configure the GitHub connecting to Render, select the correct project to be deployed.
  2. set up the envivronment varibles for whatever secret keys I am using and stored in the .env file, place the exact name for Key and password/passcode/secret key for Values... I also have to set up the Key: NODE_VERSION and Values: 20.9.0.
  3. Setting for name (anything), region (Oregon: US WEST) and branch (master branch) in my case. Node for Runtime, Build Command: cd client && npm install && npm run build ... Start Command: cd backend && node server.js ... Auto Deploy: YES... That's all for my case. 

Project Cloning: - git clone https://github.com/Meixian1/Mod3FanaticTea.git

- Unsolved Problems:
  - On Tea Customization, the url images submitted were intended to display on the screen, but the images did not render/display after the entire FanaticTea Ecommerce website/WebApp was hosted on Render Web Service.
  - Same for the image for the Google Map is not displaying after hosted on Render Web Service, the error says that the images cannot be loaded due to the API security with Google.
  - Not able to implement the API for the Payment Gateway yet such as with the Stripe Payment Gateway using its API. 

- Future Enhancements: Identify future features and enhancements planned for the project.
  - Add more ingredient information such as price and benefits...
  - Improve on the UI/UX design
  - Put a dropper pin on the Google Map indicating the exact location. 
  - Add buttons of add and remove with read numbers on each listed ingredient item so customers can purchase each individual ingredient.
  - Connect the social media icons to the respective accounts 
  
- Have a link to your hosted working app: https://fanatictea.onrender.com/
 
