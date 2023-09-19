
                                Register  -----------------------
                                            ^     ^          ^
                                            |     |          |
                                            |     |          |
                                     userName   password    email       -->     input 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


                                login -------------------
                                        ^           ^
                                        |           |
                                        |           |
                                    userName      password       -->   input 


 returns                   --------> token

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


                                allUser -------------------
                                            ^
                                            |
                                            |
                                        token             -->   input

 returns                              -------> data of all users 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


                                user/:_id ------------------
                                            ^
                                            |
                                            |
                                        token      -->   input

 returns                              -------> data of the specified user
                                
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


       Creating a task for a specified user

                                task -----------------------------
                                        ^         ^             ^
                                        |         |             |
                                        |         |             |
                                    token       description     etd      -->   input


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

         showing the tasks for the logged in user

                                showTask --------------------------
                                        ^
                                        |
                                        |
                                        token       -->   input

returns           -------> shows tasks of the logged in user

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

for testing the cron job

                                cronTasks --------------------------
                                         ^
                                         |
                                         |
                                         token     -->   input

 returns             ---------> for testing the cron script

