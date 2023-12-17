# How to start application
# open any command prompt
step-1
run npm i from the root directory

step- 2
run npm run dev

# All APIs requested data is destructured from req.body in src/controller module
# you can http method of all the controller function in src/routes module.
# for chat api message controller function will take 3 key & its valu
 from- sender user_id
 to - reciever user_id
 message - String text
 for video integration;
all the event is mentioned in src/video.chat.js module

Once you integrate with register login api please do not jump on another until the chat integration done.
Its private chat, do not forget to care it.