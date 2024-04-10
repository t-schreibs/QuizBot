var storyContent = ﻿{"inkVersion":20,"root":[["^(You're in a dark room - you can hear rustling in the distance.)","\n","^...","\n","^Oh, hello there! You're awake, I see. Apologies. My name is QuizBot.","\n","^You probably have a lot of questions, I know. Silly little questions like \"where am I?\", \"who are you people?\", \"why am I tied to this chair?\"... we've heard it all.","\n","^Well, to answer the first, you're on a game show! Or, at least, you're about to be. And you're going to have so much fun!","\n","^... But, in the event that you DON'T have so much fun, you're going to pretend like you ARE having so much fun. It's all for the fans, you see.","\n","^Gaze out at the fans - come on, do it! - and soak it all in. You're going to be famous...","\n","^(You can't see the fans. It's a dark room.)","\n","^Anyways, in a moment here, the lights will change, some music will play, and I will take my seat across from you. And then, the fun begins! I will quiz you.","\n","^Now, now! You seem alarmed. Don't be alarmed. This isn't a general knowledge quiz, nor is it any sort of specialty trivia quiz.","\n","^The truth is, we will be asking questions about YOU.","\n","^Yes, we know who you are, Carlie Belle Snell. And we are keen to learn whether you know yourself as well as we do.","\n","^Ah, you seem even more alarmed than before. Erm, might I offer you something in the way of reassurance?","\n",["ev",{"^->":"0.26.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^A cookie",{"->":"$r","var":true},null]}],["ev",{"^->":"0.27.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":18},{"s":["^A bag of jalapeno chips",{"->":"$r","var":true},null]}],["ev",{"^->":"0.28.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-2","flg":18},{"s":["^Some words of advice",{"->":"$r","var":true},null]}],["ev",{"^->":"0.29.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-3","flg":18},{"s":["^No, I'm good",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.26.s"},[{"#n":"$r2"}],"^, please.","\n","ev","str","^a cookie","/str","/ev",{"VAR=":"comfort","re":true},"^Oh, goodness. I'm sorry, but that's the wrong answer. According to our records, ","ev",{"VAR?":"name"},"out","/ev","^ would prefer a bag of jalapeno chips as comfort in a time like this.","\n",{"->":"0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.27.s"},[{"#n":"$r2"}],"^, please.","\n","ev",{"VAR?":"score"},1,"+",{"VAR=":"score","re":true},"/ev","^That's correct! You WOULD prefer a bag of jalapeno chips as comfort!","\n",{"->":"0.g-0"},{"#f":5}],"c-2":["ev",{"^->":"0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":"0.28.s"},[{"#n":"$r2"}],"^, please.","\n","ev","str","^some words of advice","/str","/ev",{"VAR=":"comfort","re":true},"^Oh, goodness. I'm sorry, but that's the wrong answer. According to our records, ","ev",{"VAR?":"name"},"out","/ev","^ would prefer a bag of jalapeno chips as comfort in a time like this.","\n",{"->":"0.g-0"},{"#f":5}],"c-3":["ev",{"^->":"0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":"0.29.s"},[{"#n":"$r2"}],"^, thank you very much.","\n","ev","str","^nothing","/str","/ev",{"VAR=":"comfort","re":true},"^Oh, goodness. I'm sorry, but that's the wrong answer. According to our records, ","ev",{"VAR?":"name"},"out","/ev","^ would prefer a bag of jalapeno chips as comfort in a time like this.","\n",{"->":"0.g-0"},{"#f":5}],"g-0":["^Ok! That was our first question, everyone!","\n","^(Finally, there they are - the fans. The lights come up, music plays, and it becomes clear that you are sitting in the middle of a game show stadium. The crowd cheers.)","\n","^Our contestant ","ev",{"VAR?":"name"},"out","/ev","^ is starting off with a score of ","ev",{"VAR?":"score"},"out","/ev","^ out of 1 tonight! Does she have what it takes to go all the way?","\n","^(The fans react, ravenously. Are they human?)","\n","^Now, Carlie, before we continue - help me put a controversy to bed.","\n","^(The robot leans toward you, attempting to look casual.)","\n","^The show's producers have been bickering for DAYS over whether we should be referring to you as Carl, Carlie, or Carlie Belle. I stand behind my decision to refer to you as ","ev",{"VAR?":"name"},"out","/ev","^, but I am a reasonable robot. I see you as a friend, ","ev",{"VAR?":"name"},"out","/ev","^, and as a friend I would like you to feel comfortable here. How would you prefer to be referred to?","\n",["ev",{"^->":"0.g-0.34.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^Carl",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-0.35.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^Carlie",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-0.36.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":18},{"s":["^Carlie Belle",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-0.37.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-7","flg":18},{"s":["^CBS",{"->":"$r","var":true},null]}],{"c-4":["ev",{"^->":"0.g-0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.34.s"},[{"#n":"$r2"}],"\n","ev","str","^Carl","/str","/ev",{"VAR=":"name","re":true},"ev",{"VAR?":"score"},1,"+",{"VAR=":"score","re":true},"/ev","^That's right! You DO prefer to go by \"Carl\" with friends and family! Well done.","\n",{"->":"0.g-1"},{"#f":5}],"c-5":["ev",{"^->":"0.g-0.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.35.s"},[{"#n":"$r2"}],"\n","ev","str","^Carlie","/str","/ev",{"VAR=":"name","re":true},"^Ouch, that one hurts. By all accounts, you prefer to go by \"Carl\" with friends and family. Are we not friends, ","ev",{"VAR?":"name"},"out","/ev","^?","\n",{"->":"0.g-1"},{"#f":5}],"c-6":["ev",{"^->":"0.g-0.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.36.s"},[{"#n":"$r2"}],"\n","ev","str","^Carlie Belle","/str","/ev",{"VAR=":"name","re":true},"^Ouch, that one hurts. By all accounts, you prefer to go by \"Carl\" with friends and family. Are we not friends, ","ev",{"VAR?":"name"},"out","/ev","^?","\n",{"->":"0.g-1"},{"#f":5}],"c-7":["ev",{"^->":"0.g-0.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.37.s"},[{"#n":"$r2"}],"\n","ev","str","^CBS","/str","/ev",{"VAR=":"name","re":true},"^Ouch, that one hurts. By all accounts, you prefer to go by \"Carl\" with friends and family. Are we not friends, ","ev",{"VAR?":"name"},"out","/ev","^?","\n",{"->":"0.g-1"},{"#f":5}],"#f":5}],"g-1":["^Tough second question there, folks. ","ev",{"VAR?":"name"},"out","/ev","^ here currently has a score of ","ev",{"VAR?":"score"},"out","/ev","^ out of 2. Let's hear it for ","ev",{"VAR?":"name"},"out","/ev","^!","\n","^(The crowd responds with an appropriate amount of noise.)","\n","^Ok, alright. Let's try something a bit different, now. I hear you have a sibling?","\n",["ev",{"^->":"0.g-1.21.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-8","flg":18},{"s":["^Nope, no siblings at all.",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-1.22.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-9","flg":18},{"s":["^Yep, just one.",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-1.23.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-10","flg":18},{"s":["^I have more than one, actually.",{"->":"$r","var":true},null]}],{"c-8":["ev",{"^->":"0.g-1.c-8.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.21.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-2"},{"#f":5}],"c-9":["ev",{"^->":"0.g-1.c-9.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.22.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-2"},{"#f":5}],"c-10":["ev",{"^->":"0.g-1.c-10.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.23.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-2"},{"#f":5}],"#f":5}],"g-2":["^...","\n","^Hm, I can tell by your face that you thought that was a quiz question - didn't you?","\n",["ev",{"^->":"0.g-2.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-11","flg":18},{"s":["^No! Of course not.",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-2.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-12","flg":18},{"s":["^Yep, you totally had me fooled.",{"->":"$r","var":true},null]}],{"c-11":["ev",{"^->":"0.g-2.c-11.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"score"},1,"+",{"VAR=":"score","re":true},"/ev","^That's a correct answer! Well done! ","ev",{"VAR?":"name"},"out","/ev","^, or, uh, I mean YOU, would NEVER admit to being tricked by a robot like myself.","\n",{"->":"0.g-3"},{"#f":5}],"c-12":["ev",{"^->":"0.g-2.c-12.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","^Uh oh! That's a wrong answer folks. ","ev",{"VAR?":"name"},"out","/ev","^, or, uh, I mean YOU, would NEVER admit to being tricked by a robot like myself.","\n",{"->":"0.g-3"},{"#f":5}],"#f":5}],"g-3":["^Anyways, that brings our score to ","ev",{"VAR?":"score"},"out","/ev","^ out of a possible 3. Curious...","\n","^(The robot pauses for a second or two, and then continues.)","\n","^Listen, I think it might be time for a BONUS ROUND!","\n","^(The crowd cheers.)","\n","^Bonus rounds are a chance for you to rack up some SERIOUS POINTS!","\n","^(The robot's voice is booming. The robot is huge.)","\n","^You have a couple pet cats back home, is that right?","\n",["ev",{"^->":"0.g-3.19.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-13","flg":18},{"s":["^Yep, that's right.",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-3.20.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-14","flg":18},{"s":["^No, I don't.",{"->":"$r","var":true},null]}],{"c-13":["ev",{"^->":"0.g-3.c-13.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.19.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-4"},{"#f":5}],"c-14":["ev",{"^->":"0.g-3.c-14.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.20.s"},[{"#n":"$r2"}],"\n","^Why would you lie to me, ","ev",{"VAR?":"name"},"out","/ev","^? It says right here in your file that you have two cats.","\n","^(The audience is astounded.)","\n",{"->":"0.g-4"},{"#f":5}],"#f":5}],"g-4":["^Which of your two cats is better at playing fetch?","\n",["ev",{"^->":"0.g-4.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-15","flg":18},{"s":["^Mama",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-4.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-16","flg":18},{"s":["^Marlow",{"->":"$r","var":true},null]}],{"c-15":["ev",{"^->":"0.g-4.c-15.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^Yikes, another wrong answer, everyone. It says right here that Mama is NOT GOOD AT DROPPING THE BALL WHERE YOU CAN REACH IT! Would you believe that?","\n","^(The crowd cannot believe that.)","\n",{"->":"0.g-5"},{"#f":5}],"c-16":["ev",{"^->":"0.g-4.c-16.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"score"},1,"+",{"VAR=":"score","re":true},"/ev","^That's correct! It says right here that Marlow is good at dropping her toy right into your hand! Amazing.","\n","^(The crowd is in awe of Marlow.)","\n",{"->":"0.g-5"},{"#f":5}],"#f":5}],"g-5":["^Next question! Which of your two cats is better at eating food?","\n",["ev",{"^->":"0.g-5.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-17","flg":18},{"s":["^Mama",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-5.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-18","flg":18},{"s":["^Marlow",{"->":"$r","var":true},null]}],{"c-17":["ev",{"^->":"0.g-5.c-17.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"score"},1,"+",{"VAR=":"score","re":true},"/ev","^Good work! Mama is much better about eating, and does so politely! Too good at it, in fact!","\n","^(The crowd laughs, way too hard.)","\n",{"->":"0.g-6"},{"#f":5}],"c-18":["ev",{"^->":"0.g-5.c-18.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^Ooh, that's incorrect, sorry. Marlow is no good at eating food, and she actually goes out of her way to block Mama's access to her dish! Unbelievable!","\n","^(The crowd boos Marlow.)","\n",{"->":"0.g-6"},{"#f":5}],"#f":5}],"g-6":["^And finally! Which of your two cats is more likely to make it to the cat olympics?","\n",["ev",{"^->":"0.g-6.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-19","flg":18},{"s":["^Mama",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-6.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-20","flg":18},{"s":["^Marlow",{"->":"$r","var":true},null]}],{"c-19":["ev",{"^->":"0.g-6.c-19.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"score"},1,"+",{"VAR=":"score","re":true},"/ev","^That's right! Despite her clumsiness, you can tell that Mama is willing to put in the work!","\n",{"->":"0.g-7"},{"#f":5}],"c-20":["ev",{"^->":"0.g-6.c-20.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^Ooh, sorry - that's a wrong answer. Marlow might appear to be more athletic, but she's definitely not willing to put in the work.","\n",{"->":"0.g-7"},{"#f":5}],"#f":5}],"g-7":["^Wow, just WOW! What an exciting bonus round that was. ","ev",{"VAR?":"name"},"out","/ev","^ here now has a score of ","ev",{"VAR?":"score"},"out","/ev","^ out of 6.","\n","^(The crowd cheers.)","\n","^So, ","ev",{"VAR?":"name"},"out","/ev","^, we're getting near the end now. How are you feeling?","\n",["ev",{"^->":"0.g-7.21.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-21","flg":18},{"s":["^Confident!",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-7.22.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-22","flg":18},{"s":["^A little confused, actually.",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-7.23.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-23","flg":18},{"s":["^I have no idea. I don't even know why I'm here.",{"->":"$r","var":true},null]}],{"c-21":["ev",{"^->":"0.g-7.c-21.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.21.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"score"},1,"+",{"VAR=":"score","re":true},"/ev","^That's what we like to hear! I'll give you a point for that.","\n",{"->":"0.g-8"},{"#f":5}],"c-22":["ev",{"^->":"0.g-7.c-22.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.22.s"},[{"#n":"$r2"}],"\n","^Ah, a wrong answer, folks - that was a tough one.","\n",{"->":"0.g-8"},{"#f":5}],"c-23":["ev",{"^->":"0.g-7.c-23.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.23.s"},[{"#n":"$r2"}],"\n","^Ah, a wrong answer, folks - that was a tough one.","\n",{"->":"0.g-8"},{"#f":5}],"#f":5}],"g-8":["^Well, well, would you look at the time.","\n","^(The robot glances at an imaginary watch.)","\n","^With a score of ","ev",{"VAR?":"score"},"out","/ev","^ out of 7, it would appear that it is time for ","ev",{"VAR?":"name"},"out","/ev","^ to answer our FINAL QUESTION!","\n","^(The crowd chants \"FINAL!\" over and over. It sounds threatening.)","\n","^This question could change everything, ","ev",{"VAR?":"name"},"out","/ev","^! It's worth 3 points!","\n","^(The crowd is bewildered by a 3-point question.)","\n","^That's right! 3 points! Are you ready for the final question?","\n",["ev",{"^->":"0.g-8.29.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-24","flg":18},{"s":["^Yes",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-8.30.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-25","flg":18},{"s":["^No",{"->":"$r","var":true},null]}],{"c-24":["ev",{"^->":"0.g-8.c-24.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.29.s"},[{"#n":"$r2"}],"\n","^Excellent! Let's get to it, then.","\n",{"->":"0.g-9"},{"#f":5}],"c-25":["ev",{"^->":"0.g-8.c-25.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.30.s"},[{"#n":"$r2"}],"\n","^Oh! Well, no matter. I'm going to ask it anyways.","\n",{"->":"0.g-9"},{"#f":5}],"#f":5}],"g-9":["^Did you have fun today?","\n",["ev",{"^->":"0.g-9.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-26","flg":18},{"s":["^No, of course not. ",{"->":"$r","var":true},null]}],{"c-26":["ev",{"^->":"0.g-9.c-26.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"^I was held here against my will.","\n",{"->":"0.g-10"},{"#f":5}],"#f":5}],"g-10":["^(The robot looks furious for a moment, and then regains its composure. It walks toward you, towering above you.)","\n","^(It leans down to place its face right in front of yours and whispers.)","\n","^Wrong... answer...","\n","^(It returns to its seat. The crowd is silent.)","\n","^Ok, all, it's time for the final results! ","ev",{"VAR?":"name"},"out","/ev","^ here has earned a total of ","ev",{"VAR?":"score"},"out","/ev","^ points, which is...","\n","^(A silly little drumroll.)","\n","^...exactly 3 less than the ","ev",{"VAR?":"score"},3,"+","out","/ev","^ she needed to win the game. How sad! You hate to see it, you hate to see it.","\n","^(The robot shakes its head. The robot is disappointed.)","\n","^Well, you know what that means! It's time to...","\n","^PULL THE LEVER!","\n","^(The crowd is deafeningly loud.)","\n","^(The robot pulls a lever.)","\n","^(You fall through the floor.)","\n","^(The noise of the crowd fades away.)","\n","^(You arrive in another room - a very dark room.)","\n","^(You're unharmed but shaken up a bit.)","\n","^(There is a pipe dripping in the distance.)","\n","^(The air is cold.)","\n",["ev",{"^->":"0.g-10.53.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-27","flg":18},{"s":["^...",{"->":"$r","var":true},null]}],{"c-27":["ev",{"^->":"0.g-10.c-27.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.53.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-11"},{"#f":5}],"#f":5}],"g-11":["^Oh, yes, um - hello there!","\n","^(You didn't realize somebody else was in here.)","\n","^So, it didn't go so well upstairs, did it?","\n","^(Or, someTHING?)","\n","^Don't fret! We're here to help. We're the Program.","\n","^Now, we have some good news for you, and some bad news. We'll provide the bad news first.","\n","^Most failed contestants don't get out of here.","\n","^Hold on, hold on, don't fret just yet - we haven't gotten to the good news yet.","\n","^The good news is that I have something for you.","\n","^Your partner left you something. A gift, I suppose. They were a member of Program. They were a programmer.","\n","^They recorded a message before you went on the show. Would you like to hear it?","\n",["ev",{"^->":"0.g-11.22.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-28","flg":18},{"s":["^Yes",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-11.23.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-29","flg":18},{"s":["^No",{"->":"$r","var":true},null]}],{"c-28":["ev",{"^->":"0.g-11.c-28.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.22.s"},[{"#n":"$r2"}],"\n","^Alright! Great! Now, where'd I put that thing...?","\n","^Ah, here it is! Here we go.","\n",{"->":"0.g-12"},{"#f":5}],"c-29":["ev",{"^->":"0.g-11.c-29.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.23.s"},[{"#n":"$r2"}],"\n","^Oh! Well, um, as it turns out, we're really, REALLY supposed to play it for you. Are you sure you don't want to hear it?","\n",[["ev",{"^->":"0.g-11.c-29.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Yes, I'm good.",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-11.c-29.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^No, I probably should hear it.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.g-11.c-29.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^Hm. Well, alright. But I'm going to play it anyways.","\n",{"->":"0.g-12"},{"#f":5}],"c-1":["ev",{"^->":"0.g-11.c-29.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Alright! Great! Now, where'd I put that thing...?","\n","^Ah, here it is! Here we go.","\n",{"->":"0.g-12"},{"#f":5}]}],{"#f":5}],"#f":5}],"g-12":["^Message recorded April 9, 2095. Playback in 3, 2, 1...","\n","^Holy shit, they got got you. I just found out. Are you okay, bug? I tried to intercep_ the c_mmuni___io_s b__ they __ok h__d o_ my ___pu__r a__ _____ m_ _______.","\n","^_ _____ know ____ __ __ _ut _____ I ___ ____ ____ ___ main_____?","\n","^(A couple seconds of indecipherable static.)","\n","^Anyways - maybe I can help you get out of here. I'll have Program play this message for you after the quiz - I'm sure it's the only chance you'll get to hear it.","\n","^(A brief sigh.)","\n","^This is going to be tricky. I'm sure you probably don't remember much of anything right now. Do you even remember who I am?","\n",["ev",{"^->":"0.g-12.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-30","flg":18},{"s":["^Yes, of course I do!",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-12.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-31","flg":18},{"s":["^No, I don't.",{"->":"$r","var":true},null]}],{"c-30":["ev",{"^->":"0.g-12.c-30.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-13"},{"#f":5}],"c-31":["ev",{"^->":"0.g-12.c-31.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-13"},{"#f":5}],"#f":5}],"g-13":["^(Your answer is cut off. It's a recording. They can't hear you.)","\n","^Well, I'm Ty. You're the love of my life. We both work for Program. Or, worked, in your case, I guess. You, uh...","\n","^Well, you saw something you weren't supposed to. And they sent you to early retirement. I'm sure you don't even remember what retirement means around here...","\n","^It's not good, I can tell you that much.","\n","^(A bit of static, again. You can't detect what they're saying.)","\n","^(The static clears.)","\n","^So, that's why it's important that you get out of here as soon as possible. Does that make sense? I hope that makes sense.","\n","^Alright, I'm sure you don't have much time, so let's get to it. Can you see a door from where you're at? There should only be one in the room. I need you to go over there.","\n","^(You see the door and walk over to it. Your legs feel weak.)","\n","^There's a pad on the door. Usually, you'd need security permissions to open it with a biometric scan, but there's an override code. The problem is, I don't know the code.","\n","^But you do. Or, at least, you did before. I was able to get at the digits you need, but they're scrambled. I'm really hoping hearing them will jog your memory.","\n","^The first is M, then a question mark, then an R, then an O, and finally a P. All you have to do is...","\n","^(They're cut off, you hear a commotion in the background.)","\n","^I... I have to go. Unscramble the code. Get out of here, bug. You got this. I love you!","\n","^(The recording ends. You're alone.)","\n","^Aw, you're in love! See? It's not all doom and gloom down here!","\n","^(Not alone - Program is still here.)","\n","^Good luck with the door, there! I, unfortunately, am unable to assist.","\n","^(You stare at the pad on the door, thinking.)","\n","^M, question mark, R, O, P. What could it be, what could it be? Hmmmmmm...","\n",["ev",{"^->":"0.g-13.40.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-32","flg":18},{"s":["^Shut up, Program. Let me think.",{"->":"$r","var":true},null]}],{"c-32":["ev",{"^->":"0.g-13.c-32.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.40.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-14"},{"#f":5}],"#f":5}],"g-14":["^Oh, well, apologies. Good luck.","\n","^(It suddenly comes to you, with a rush of memories.)","\n","^(The answer is so obvious, so deeply embedded, you can type it in without even looking at the pad.)","\n",["ev",{"^->":"0.g-14.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-33","flg":18},{"s":["^P",{"->":"$r","var":true},null]}],{"c-33":["ev",{"^->":"0.g-14.c-33.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"0.g-14.c-33.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^R",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.g-14.c-33.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"0.g-14.c-33.7.c-0.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^O",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.g-14.c-33.7.c-0.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"0.g-14.c-33.7.c-0.7.c-0.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^M",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.g-14.c-33.7.c-0.7.c-0.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"0.g-14.c-33.7.c-0.7.c-0.7.c-0.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.g-14.c-33.7.c-0.7.c-0.7.c-0.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-15"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}],"#f":5}],"g-15":["^The door opens. You walk out.","\n","^What a hell of a day.","\n","end",["done",{"#f":5,"#n":"g-16"}],{"#f":5}]}],"done",{"global decl":["ev",0,{"VAR=":"score"},"str","^Carlie","/str",{"VAR=":"name"},"str","^a bag of jalapeno chips","/str",{"VAR=":"comfort"},"/ev","end",null],"#f":1}],"listDefs":{}};