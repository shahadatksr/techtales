## NextJs Frontend with Strapi CMS as a backend 

 - Context Api for creating global user 
 - JWT authentication 
 - Storing token as http only cookies for  security
 - Code Highlighting using PrismJs

Login Flow:
When logging in, the frontend hits the **api/auth/login** route inside the pages folder in nextjs. The server will then make the respective api calls, authenticate the user, and store the jwt token as httponly cookie.
The AuthContext will get the user value from the cookies and dispaly **Login** or **Profile** link accordingly.
