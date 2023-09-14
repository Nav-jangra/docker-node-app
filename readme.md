
                                Register  -----------------------
                                            |     |          |
                                            |     |          |
                                     userName   password    email



                                login -------------------
                                        |           |
                                        |           |
                                    userName      password

                                --------> token


                                allUser -------------------
                                            |
                                            |
                                        token

                                -------> data of all users 


                                user/:_id ------------------
                                            |
                                            |
                                        token


                                -------> data of the specified user
                                
                                task -----------------------------
                                        |         |             |
                                        |         |             |
                                    token       description     etd


                                showTask --------------------------
                                        |
                                        |
                                        token
                                
                                -------> shows tasks of the logged in user
                                

                                cronTasks --------------------------
                                         |
                                         |
                                         token


                                ---------> for testing the cron script