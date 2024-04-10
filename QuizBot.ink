VAR score = 0
VAR name = "Carlie"
VAR comfort = "a bag of jalapeno chips"

(You're in a dark room - you can hear rustling in the distance.)
...
Oh, hello there! You're awake, I see. Apologies. My name is QuizBot. 
You probably have a lot of questions, I know. Silly little questions like "where am I?", "who are you people?", "why am I tied to this chair?"... we've heard it all.
Well, to answer the first, you're on a game show! Or, at least, you're about to be. And you're going to have so much fun!
... But, in the event that you DON'T have so much fun, you're going to pretend like you ARE having so much fun. It's all for the fans, you see.
Gaze out at the fans - come on, do it! - and soak it all in. You're going to be famous...
(You can't see the fans. It's a dark room.)
Anyways, in a moment here, the lights will change, some music will play, and I will take my seat across from you. And then, the fun begins! I will quiz you.
Now, now! You seem alarmed. Don't be alarmed. This isn't a general knowledge quiz, nor is it any sort of specialty trivia quiz.
The truth is, we will be asking questions about YOU.
Yes, we know who you are, Carlie Belle Snell. And we are keen to learn whether you know yourself as well as we do.
Ah, you seem even more alarmed than before. Erm, might I offer you something in the way of reassurance?
* A cookie[], please.
    ~ comfort = "a cookie"
    Oh, goodness. I'm sorry, but that's the wrong answer. According to our records, {name} would prefer a bag of jalapeno chips as comfort in a time like this.
* A bag of jalapeno chips[], please.
    ~ score += 1
    That's correct! You WOULD prefer a bag of jalapeno chips as comfort!
* Some words of advice[], please.
    ~ comfort = "some words of advice"
    Oh, goodness. I'm sorry, but that's the wrong answer. According to our records, {name} would prefer a bag of jalapeno chips as comfort in a time like this.
* No, I'm good[], thank you very much.
    ~ comfort = "nothing"
    Oh, goodness. I'm sorry, but that's the wrong answer. According to our records, {name} would prefer a bag of jalapeno chips as comfort in a time like this.
- Ok! That was our first question, everyone!
(Finally, there they are - the fans. The lights come up, music plays, and it becomes clear that you are sitting in the middle of a game show stadium. The crowd cheers.)
Our contestant {name} is starting off with a score of {score} out of 1 tonight! Does she have what it takes to go all the way?
(The fans react, ravenously. Are they human?)
Now, Carlie, before we continue - help me put a controversy to bed.
(The robot leans toward you, attempting to look casual.)
The show's producers have been bickering for DAYS over whether we should be referring to you as Carl, Carlie, or Carlie Belle. I stand behind my decision to refer to you as {name}, but I am a reasonable robot. I see you as a friend, {name}, and as a friend I would like you to feel comfortable here. How would you prefer to be referred to?
* Carl
    ~ name = "Carl"
    ~ score += 1
    That's right! You DO prefer to go by "Carl" with friends and family! Well done.
* Carlie
    ~ name = "Carlie"
    Ouch, that one hurts. By all accounts, you prefer to go by "Carl" with friends and family. Are we not friends, {name}?
* Carlie Belle
    ~ name = "Carlie Belle"
    Ouch, that one hurts. By all accounts, you prefer to go by "Carl" with friends and family. Are we not friends, {name}?
* CBS
    ~ name = "CBS"
    Ouch, that one hurts. By all accounts, you prefer to go by "Carl" with friends and family. Are we not friends, {name}?
- Tough second question there, folks. {name} here currently has a score of {score} out of 2. Let's hear it for {name}!
(The crowd responds with an appropriate amount of noise.)
Ok, alright. Let's try something a bit different, now. I hear you have a sibling?
* Nope, no siblings at all.
* Yep, just one.
* I have more than one, actually.
- ...
Hm, I can tell by your face that you thought that was a quiz question - didn't you?
* No! Of course not.
    ~ score += 1
    That's a correct answer! Well done! {name}, or, uh, I mean YOU, would NEVER admit to being tricked by a robot like myself.
* Yep, you totally had me fooled.
    Uh oh! That's a wrong answer folks. {name}, or, uh, I mean YOU, would NEVER admit to being tricked by a robot like myself.
- Anyways, that brings our score to {score} out of a possible 3. Curious...
(The robot pauses for a second or two, and then continues.)
Listen, I think it might be time for a BONUS ROUND!
(The crowd cheers.)

Ok, all, it's time for the final results! {name} here has earned a total of {score} points, which is...
(A silly little drumroll.)
...exactly 6 less than the {score + 6} she needed to win the game. How sad! You hate to see it, you hate to see it.
(The robot shakes its head. The robot is disappointed.)
Well, you know what that means! It's time to...
PULL THE LEVER!
(The crowd is deafeningly loud.)
(The robot pulls a lever.)
(You fall through the floor.)
(The noise of the crowd fades away.)
(You arrive in another room - a very dark room.)
(You're unharmed but shaken up a bit.)
(There is a pipe dripping in the distance.)
(The air is cold.)
...
Oh, yes, um - hello there!
(You didn't realize somebody else was in here.)
So, it didn't go so well upstairs, did it?
(Or, someTHING?)
Don't fret! We're here to help. We're the Program.
Now, we have some good news for you, and some bad news. We'll provide the bad news first.
Most failed contestants don't get out of here.
Hold on, hold on, don't fret just yet - we haven't gotten to the good news yet.
The good news is that I have something for you.
Your partner left you something. A gift, I suppose. They were a member of Program. They were a programmer.
They recorded a message before you went on the show. Would you like to hear it?
* Yes
    Alright! Great! Now, where'd I put that thing...?
    Ah, here it is! Here we go.
* No
    Oh! Well, um, as it turns out, we're really, REALLY supposed to play it for you. Are you sure you don't want to hear it?
    ** Yes, I'm good.
        Hm. Well, alright. But I'm going to play it anyways.
    ** No, I probably should hear it.
        Alright! Great! Now, where'd I put that thing...?
        Ah, here it is! Here we go.
- Message recorded April 9, 2095. Playback in 3, 2, 1...
Holy shit, they got got you. I just found out. Are you okay, bug? I tried to intercep_ the c_mmuni___io_s b__ they __ok h__d o_ my ___pu__r a__ _____ m_ _______.
_ _____ know ____ __ __ _ut _____ I ___ ____ ____ ___ main_____?
(A couple seconds of indecipherable static.)
Anyways - maybe I can help you get out of here. I'll have Program play this message for you after the quiz - I'm sure it's the only chance you'll get to hear it.
(A brief sigh.)
This is going to be tricky. I'm sure you probably don't remember much of anything right now. Do you even remember who I am?
Well, I'm Ty. You're the love of my life. We both work for Program. Or, worked, in your case, I guess. You, uh...
Well, you saw something you weren't supposed to. And they sent you to early retirement. I'm sure you don't even remember what retirement means around here...
It's not good, I can tell you that much.
(A bit of static, again. It fades.)
So, that's why it's important that you 