# local

Hi, In this app , we have two types of users 
 i) Admin
 ii) Student

Admin can create/read/delete/update post

Students can only see Post created by admin

for admin use email-> admin@gmail.com, pass-> admin123
for student use email-> student@gmail.com, pass-> student123

In this app , we have 5 APIs

i) login api it will give token in response, use this token for calling rest of the apis
token will be given in headers for calling other apis

ii) Create Post-> name  
iii)Fetch Post-> this api supports pagination of size 10. you need to pass page as integer
iv)Delete Post-> you need to give post_id to delete
v)Update Post-> you need to give post_id or name of the post

To start this app, you need to install all the dependencies required for it

To install dependencies use -> npm install

After that you need to write in terminal npm start

your app will be listen to port 3000



