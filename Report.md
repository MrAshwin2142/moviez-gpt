initializing react add 
    - npx create-react-app moviez-gpt
    - cd moviez-gpt
    - npm start

tailwind css configration 
    - npm install -D tailwindcss
    - npx tailwindcss init
    - add    [ "./src/**/*.{js,jsx,ts,tsx}", ] in tailwind.config.js file in content:[]
    - add [ @tailwind base;
            @tailwind components;
            @tailwind utilities;]
        in index.css

feactures to build 
Browse page (only for login user)
    - Header
    - main movies
        - trailer in background 
        - title & discription 
    Movies List Rowss 

login& sigup page 
    - sigup & login page
    then it took us to browse page

gpt page 
    - SEARCH 
    - gpt movies suggestions

for routing 
npm i -D react-router-dom
then create routes in Body.js