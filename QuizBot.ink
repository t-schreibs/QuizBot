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
Bonus rounds are a chance for you to rack up some SERIOUS POINTS!
(The robot's voice is booming. The robot is huge.)
You have a couple pet cats back home, is that right?
* Yep, that's right.
* No, I don't.
    Why would you lie to me, {name}? It says right here in your file that you have two cats.
    (The audience is astounded.)
- Which of your two cats is better at playing fetch?
    * Mama
        Yikes, another wrong answer, everyone. It says right here that Mama is NOT GOOD AT DROPPING THE BALL WHERE YOU CAN REACH IT! Would you believe that?
        (The crowd cannot believe that.)
    * Marlow
        ~ score += 1
        That's correct! It says right here that Marlow is good at dropping her toy right into your hand! Amazing.
        (The crowd is in awe of Marlow.)
- Next question! Which of your two cats is better at eating food?
    * Mama
        ~ score += 1
        Good work! Mama is much better about eating, and does so politely! Too good at it, in fact!
        (The crowd laughs, way too hard.)
    * Marlow
        Ooh, that's incorrect, sorry. Marlow is no good at eating food, and she actually goes out of her way to block Mama's access to her dish! Unbelievable!
        (The crowd boos Marlow.)
- And finally! Which of your two cats is more likely to make it to the cat olympics?
    * Mama
        ~ score += 1
        That's right! Despite her clumsiness, you can tell that Mama is willing to put in the work!
    * Marlow
        Ooh, sorry - that's a wrong answer. Marlow might appear to be more athletic, but she's definitely not willing to put in the work.
- Wow, just WOW! What an exciting bonus round that was. {name} here now has a score of {score} out of 6.
(The crowd cheers.)
So, {name}, we're getting near the end now. How are you feeling?
* Confident!
    ~ score += 1
    That's what we like to hear! I'll give you a point for that.
* A little confused, actually.
    Ah, a wrong answer, folks - that was a tough one.
* I have no idea. I don't even know why I'm here.
    Ah, a wrong answer, folks - that was a tough one.
- Well, well, would you look at the time. 
(The robot glances at an imaginary watch.)
With a score of {score} out of 7, it would appear that it is time for {name} to answer our FINAL QUESTION!
(The crowd chants "FINAL!" over and over. It sounds threatening.)
This question could change everything, {name}! It's worth 3 points!
(The crowd is bewildered by a 3-point question.)
That's right! 3 points! Are you ready for the final question?
* Yes
    Excellent! Let's get to it, then.
* No
    Oh! Well, no matter. I'm going to ask it anyways.
- Did you have fun today?
* No, of course not. []I was held here against my will.
-
(The robot looks furious for a moment, and then regains its composure. It walks toward you, towering above you.)
(It leans down to place its face right in front of yours and whispers.)
Wrong... answer...
(It returns to its seat. The crowd is silent.)
Ok, all, it's time for the final results! {name} here has earned a total of {score} points, which is...
(A silly little drumroll.)
...exactly 3 less than the {score + 3} she needed to win the game. How sad! You hate to see it, you hate to see it.
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
* ...
- Oh, yes, um - hello there!
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
* Yes, of course I do!
* No, I don't.
- 
(Your answer is cut off. It's a recording. They can't hear you.)
Well, I'm Ty. You're the love of my life. We both work for Program. Or, worked, in your case, I guess. You, uh...
Well, you saw something you weren't supposed to. And they sent you to early retirement. I'm sure you don't even remember what retirement means around here...
It's not good, I can tell you that much.
(A bit of static, again. You can't detect what they're saying.)
(The static clears.)
So, that's why it's important that you get out of here as soon as possible. Does that make sense? I hope that makes sense.
Alright, I'm sure you don't have much time, so let's get to it. Can you see a door from where you're at? There should only be one in the room. I need you to go over there.
(You see the door and walk over to it. Your legs feel weak.)
There's a pad on the door. Usually, you'd need security permissions to open it with a biometric scan, but there's an override code. The problem is, I don't know the code.
But you do. Or, at least, you did before. I was able to get at the digits you need, but they're scrambled. I'm really hoping hearing them will jog your memory.
The first is M, then a question mark, then an R, then an O, and finally a P. All you have to do is...
(They're cut off, you hear a commotion in the background.)
I... I have to go. Unscramble the code. Get out of here, bug. You got this. I love you!
(The recording ends. You're alone.)
Aw, you're in love! See? It's not all doom and gloom down here!
(Not alone - Program is still here.)
Good luck with the door, there! I, unfortunately, am unable to assist.
(You stare at the pad on the door, thinking.)
M, question mark, R, O, P. What could it be, what could it be? Hmmmmmm...
* Shut up, Program. Let me think.
- Oh, well, apologies. Good luck.
(It suddenly comes to you, with a rush of memories.)
(The answer is so obvious, so deeply embedded, you can type it in without even looking at the pad.)
* P
    ** R
        *** O
            **** M
                ***** ?
- The door opens. You walk out.
What a hell of a day.
-> END