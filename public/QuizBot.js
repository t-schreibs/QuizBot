var storyContent = ﻿{"inkVersion":20,"root":[["^(You're in a dark room - you can hear rustling in the distance.)","\n","^...","\n","^Oh, hello there! You're awake, I see. Apologies. My name is QuizBot.","\n","^You probably have a lot of questions, I know. Silly little questions like \"where am I?\", \"who are you people?\", \"why am I tied to this chair?\"... we've heard it all.","\n","^Well, to answer the first, you're on a game show! Or, at least, you're about to be. And you're going to have so much fun!","\n","^... But, in the event that you DON'T have so much fun, you're going to pretend like you ARE having so much fun. It's all for the fans, you see.","\n","^Gaze out at the fans - come on, do it! - and soak it all in. You're going to be famous...","\n","^(You can't see the fans. It's a dark room.)","\n","^Anyways, in a moment here, the lights will change, some music will play, and I will take my seat across from you. And then, the fun begins! I will quiz you.","\n","^Now, now! You seem alarmed. Don't be alarmed. This isn't a general knowledge quiz, nor is it any sort of specialty trivia quiz.","\n","^The truth is, we will be asking questions about YOU.","\n","^Yes, we know who you are, Carlie Belle Snell. And we are keen to learn whether you know yourself as well as we do.","\n","^Ah, you seem even more alarmed than before. Erm, might I offer you something in the way of reassurance?","\n",["ev",{"^->":"0.26.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^A cookie",{"->":"$r","var":true},null]}],["ev",{"^->":"0.27.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":18},{"s":["^A bag of jalapeno chips",{"->":"$r","var":true},null]}],["ev",{"^->":"0.28.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-2","flg":18},{"s":["^Some words of advice",{"->":"$r","var":true},null]}],["ev",{"^->":"0.29.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-3","flg":18},{"s":["^No, I'm good",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.26.s"},[{"#n":"$r2"}],"^, please.","\n","ev","str","^a cookie","/str","/ev",{"VAR=":"comfort","re":true},"^Oh, goodness. I'm sorry, but that's the wrong answer. According to our records, ","ev",{"VAR?":"name"},"out","/ev","^ would prefer a bag of jalapeno chips as comfort in a time like this.","\n",{"->":"0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.27.s"},[{"#n":"$r2"}],"^, please.","\n","ev",{"VAR?":"score"},1,"+",{"VAR=":"score","re":true},"/ev","^That's correct! You WOULD prefer a bag of jalapeno chips as comfort!","\n",{"->":"0.g-0"},{"#f":5}],"c-2":["ev",{"^->":"0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":"0.28.s"},[{"#n":"$r2"}],"^, please.","\n","ev","str","^some words of advice","/str","/ev",{"VAR=":"comfort","re":true},"^Oh, goodness. I'm sorry, but that's the wrong answer. According to our records, ","ev",{"VAR?":"name"},"out","/ev","^ would prefer a bag of jalapeno chips as comfort in a time like this.","\n",{"->":"0.g-0"},{"#f":5}],"c-3":["ev",{"^->":"0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":"0.29.s"},[{"#n":"$r2"}],"^, thank you very much.","\n","ev","str","^nothing","/str","/ev",{"VAR=":"comfort","re":true},"^Oh, goodness. I'm sorry, but that's the wrong answer. According to our records, ","ev",{"VAR?":"name"},"out","/ev","^ would prefer a bag of jalapeno chips as comfort in a time like this.","\n",{"->":"0.g-0"},{"#f":5}],"g-0":["^Ok! That was our first question, everyone!","\n","^(Finally, there they are - the fans. The lights come up, music plays, and it becomes clear that you are sitting in the middle of a game show stadium. The crowd cheers.)","\n","^Our contestant ","ev",{"VAR?":"name"},"out","/ev","^ is starting off with a score of ","ev",{"VAR?":"score"},"out","/ev","^ out of 1 tonight! Does she have what it takes to go all the way?","\n","^(The fans react, ravenously. Are they human?)","\n","^Now, Carlie, before we continue - help me put a controversy to bed.","\n","^(The robot leans toward you, attempting to look casual.)","\n","^The show's producers have been bickering for DAYS over whether we should be referring to you as Carl, Carlie, or Carlie Belle. I stand behind my decision to refer to you as ","ev",{"VAR?":"name"},"out","/ev","^, but I am a reasonable robot. I see you as a friend, ","ev",{"VAR?":"name"},"out","/ev","^, and as a friend I would like you to feel comfortable here. How would you prefer to be referred to?","\n",["ev",{"^->":"0.g-0.34.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^Carl",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-0.35.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^Carlie",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-0.36.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":18},{"s":["^Carlie Belle",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-0.37.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-7","flg":18},{"s":["^CBS",{"->":"$r","var":true},null]}],{"c-4":["ev",{"^->":"0.g-0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.34.s"},[{"#n":"$r2"}],"\n","ev","str","^Carl","/str","/ev",{"VAR=":"name","re":true},"ev",{"VAR?":"score"},1,"+",{"VAR=":"score","re":true},"/ev","^That's right! You DO prefer to go by \"Carl\" with friends and family! Well done.","\n",{"->":"0.g-1"},{"#f":5}],"c-5":["ev",{"^->":"0.g-0.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.35.s"},[{"#n":"$r2"}],"\n","ev","str","^Carlie","/str","/ev",{"VAR=":"name","re":true},"^Ouch, that one hurts. By all accounts, you prefer to go by \"Carl\" with friends and family. Are we not friends, ","ev",{"VAR?":"name"},"out","/ev","^?","\n",{"->":"0.g-1"},{"#f":5}],"c-6":["ev",{"^->":"0.g-0.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.36.s"},[{"#n":"$r2"}],"\n","ev","str","^Carlie Belle","/str","/ev",{"VAR=":"name","re":true},"^Ouch, that one hurts. By all accounts, you prefer to go by \"Carl\" with friends and family. Are we not friends, ","ev",{"VAR?":"name"},"out","/ev","^?","\n",{"->":"0.g-1"},{"#f":5}],"c-7":["ev",{"^->":"0.g-0.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.37.s"},[{"#n":"$r2"}],"\n","ev","str","^CBS","/str","/ev",{"VAR=":"name","re":true},"^Ouch, that one hurts. By all accounts, you prefer to go by \"Carl\" with friends and family. Are we not friends, ","ev",{"VAR?":"name"},"out","/ev","^?","\n",{"->":"0.g-1"},{"#f":5}],"#f":5}],"g-1":["^Tough second question there, folks. ","ev",{"VAR?":"name"},"out","/ev","^ here currently has a score of ","ev",{"VAR?":"score"},"out","/ev","^ out of 2. Let's hear it for ","ev",{"VAR?":"name"},"out","/ev","^!","\n","^(The crowd responds with an appropriate amount of noise.)","\n","^Ok, alright. Let's try something a bit different, now. I hear you have a sibling?","\n",["ev",{"^->":"0.g-1.21.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-8","flg":18},{"s":["^Nope, no siblings at all.",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-1.22.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-9","flg":18},{"s":["^Yep, just one.",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-1.23.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-10","flg":18},{"s":["^I have more than one, actually.",{"->":"$r","var":true},null]}],{"c-8":["ev",{"^->":"0.g-1.c-8.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.21.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-2"},{"#f":5}],"c-9":["ev",{"^->":"0.g-1.c-9.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.22.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-2"},{"#f":5}],"c-10":["ev",{"^->":"0.g-1.c-10.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.23.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-2"},{"#f":5}],"#f":5}],"g-2":["^...","\n","^Hm, I can tell by your face that you thought that was a quiz question - didn't you?","\n",["ev",{"^->":"0.g-2.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-11","flg":18},{"s":["^No! Of course not.",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-2.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-12","flg":18},{"s":["^Yep, you totally had me fooled.",{"->":"$r","var":true},null]}],{"c-11":["ev",{"^->":"0.g-2.c-11.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"score"},1,"+",{"VAR=":"score","re":true},"/ev","^That's a correct answer! Well done! ","ev",{"VAR?":"name"},"out","/ev","^, or, uh, I mean YOU, would NEVER admit to being tricked by a robot like myself.","\n",{"->":"0.g-3"},{"#f":5}],"c-12":["ev",{"^->":"0.g-2.c-12.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","^Uh oh! That's a wrong answer folks. ","ev",{"VAR?":"name"},"out","/ev","^, or, uh, I mean YOU, would NEVER admit to being tricked by a robot like myself.","\n",{"->":"0.g-3"},{"#f":5}],"#f":5}],"g-3":["^Anyways, that brings our score to ","ev",{"VAR?":"score"},"out","/ev","^ out of a possible 3. Curious...","\n","^(The robot pauses for a second or two, and then continues.)","\n","^Listen, I think it might be time for a BONUS ROUND!","\n","^(The crowd cheers.)","\n","^Ok, all, it's time for the final results! ","ev",{"VAR?":"name"},"out","/ev","^ here has earned a total of ","ev",{"VAR?":"score"},"out","/ev","^ points, which is...","\n","^(A silly little drumroll.)","\n","^...exactly 6 less than the ","ev",{"VAR?":"score"},6,"+","out","/ev","^ she needed to win the game. How sad! You hate to see it, you hate to see it.","\n","^(The robot shakes its head. The robot is disappointed.)","\n","^Well, you know what that means! It's time to...","\n","^PULL THE LEVER!","\n","^(The crowd is deafeningly loud.)","\n","^(The robot pulls a lever.)","\n","^(You fall through the floor.)","\n","^(The noise of the crowd fades away.)","\n","^(You arrive in another room - a very dark room.)","\n","^(You're unharmed but shaken up a bit.)","\n","^(There is a pipe dripping in the distance.)","\n","^(The air is cold.)","\n","^Oh, yes, um - hello there!","\n","^(You didn't realize somebody else was in here.)","\n","^So, it didn't go so well upstairs, did it?","\n","^(Or, someTHING?)","\n","^Don't fret! We're here to help. We're the Program.","\n","^Now, we have some good news for you, and some bad news. We'll provide the bad news first.","\n","^Most failed contestants don't get out of here.","\n","^Hold on, hold on - we haven't gotten to the good news yet.","\n","^The good news is that I have something for you.","\n","^Your partner left you something. A gift, I suppose. They were a member of Program. They were a programmer.","\n","^They recorded a message before you went on the show. Would you like to hear it?","\n",["ev",{"^->":"0.g-3.80.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-13","flg":18},{"s":["^Yes",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-3.81.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-14","flg":18},{"s":["^No",{"->":"$r","var":true},null]}],{"c-13":["ev",{"^->":"0.g-3.c-13.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.80.s"},[{"#n":"$r2"}],"\n","^Alright! Great! Now, where'd I put that thing...?","\n","^Ah, here it is! Here we go.","\n",{"->":"0.g-4"},{"#f":5}],"c-14":["ev",{"^->":"0.g-3.c-14.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.81.s"},[{"#n":"$r2"}],"\n","^Oh! Well, um, as it turns out, we're really, REALLY supposed to play it for you. Are you sure you don't want to hear it?","\n",[["ev",{"^->":"0.g-3.c-14.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Yes, I'm good.",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-3.c-14.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^No, I probably should hear it.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.g-3.c-14.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^Hm. Well, I disagree. I'm going to play it anyways.","\n",{"->":"0.g-4"},{"#f":5}],"c-1":["ev",{"^->":"0.g-3.c-14.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Alright! Great! Now, where'd I put that thing...?","\n","^Ah, here it is! Here we go.","\n",{"->":"0.g-4"},{"#f":5}]}],{"#f":5}],"#f":5}],"g-4":["^Message recorded April 9, 2095. Playback in 3, 2, 1...","\n","^Holy shit, they got got you. I just found out. Are you okay, bug? I tried to intercep_ the c_mmuni___io_s b__ they __ok h__d o_ my ___pu__r a__ _____ m_ _______.","\n","^_ _____ know ____ __ __ _ut _____ I ___ ____ ____ ___ main_____?","\n","^(A couple seconds of indecipherable static.)","\n","^Anyways - maybe I can help you get out of here. I'll have Program play this message for you after the quiz - I'm sure it's the only chance you'll get to hear it.","\n","^(A brief sigh.)","\n","^This is going to be tricky. I'm sure you probably don't remember much of anything right now. Do you even remember who I am?","\n","^Well, I'm Ty. You're the love of my life. We both work for Program. Or, worked, in your case, I guess. You, uh...","\n","^... Well, you saw something you weren't supposed to. And they sent you to early retirement. I'm sure you don't even remember what retirement means around here...","\n","^It's not good, I can tell you that much.","\n","^(A bit of static, again.)","\n",["done",{"#f":5,"#n":"g-5"}],{"#f":5}]}],"done",{"global decl":["ev",0,{"VAR=":"score"},"str","^Carlie","/str",{"VAR=":"name"},"str","^a bag of jalapeno chips","/str",{"VAR=":"comfort"},"/ev","end",null],"#f":1}],"listDefs":{}};