
please follow these steps to run this node application 

1. To get a local copy of the code, clone it using git:

        git clone https://github.com/Nav-jangra/docker-node-app
        cd docker-node-app

2. Now that you have some source code and a Dockerfile, it’s time to build your first image:

        docker-compose build


3. Start a container based on your new image:

        docker-compose up -d

4. Visit your application in a browser at http://localhost:8080. You should see your hello world application up and running.



               Registering the user
               
                                Register  -----------------------
                                            ^     ^          ^
                                            |     |          |
                                            |     |          |
                                     userName   password    email       -->     input 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


                     user login

                                login -------------------
                                        ^           ^
                                        |           |
                                        |           |
                                    userName      password       -->   input 

                                returns                   --------> token

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                          
        showing all users data

                                allUser -------------------
                                            ^
                                            |
                                            |
                                        token (header)            -->   input

                              returns          -------> data of all users 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

     showing the data of specified user

                                user/:_id ------------------
                                            ^
                                            |
                                            |
                                        token (header)     -->   input

                                returns        -------> data of the specified user
                                
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


       Creating a task for a specified user

                                task -----------------------------
                                        ^         ^             ^
                                        |         |             |
                                        |         |             |
                            (header) token       description     etd      -->   input


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    showing the tasks for the logged in user

                                showTask --------------------------
                                        ^
                                        |
                                        |
                                    token  (header)     -->   input

                        returns       -------> shows tasks of the logged in user

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

       for testing the cron job

                                cronTasks --------------------------
                                         ^
                                         |
                                         |
                                    token (header)     -->   input

                    returns     ---------> for testing the cron script

