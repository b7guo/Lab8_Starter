# Lab 8 - Starter
## member: Bingrui Guo
## check your understanding
>Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
 - Manually run them locally before pushing code. Because github is the source of truth and everything needs to be correct before pushed.
>Would you use an end to end test to check if a function is returning the correct output? (yes/no)
 - Yes. We can setup various test cases with different other related functions to test the function automatically without manul testing.
> Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
 - No. Because I assume there are other features in the message app and unit testing cannot test the message feature interacting with other features. 
> Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
 - Yes. It is easy to test this feature using unit test by setting a limit length. And it is quick to execute.