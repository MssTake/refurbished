// from start

function welcome() {
  document.getElementById("welcome").classList.toggle("show");
  document.getElementById("start").classList.toggle("hide");
}

// after welcome

function dont() {
  document.getElementById("dont").classList.toggle("show");
  if (document.getElementById("welcome").classList.toggle("show")) {
    document.getElementById("welcome").classList.toggle("hide");
  }
}

function chocolate() {
  document.getElementById("chocolate").classList.toggle("show");
  if (document.getElementById("welcome").classList.toggle("show")) {
    document.getElementById("welcome").classList.toggle("hide");
  }
}

function leave2() {
  document.getElementById("leave2").classList.toggle("show");
  if (document.getElementById("welcome").classList.toggle("show")) {
    document.getElementById("welcome").classList.toggle("hide");
  }
}

function speak() {
  document.getElementById("speak").classList.toggle("show");
  if (document.getElementById("welcome").classList.toggle("show")) {
    document.getElementById("welcome").classList.toggle("hide");
  }
}

function stash() {
  document.getElementById("stash").classList.toggle("show");
  if (document.getElementById("welcome").classList.toggle("show")) {
    document.getElementById("welcome").classList.toggle("hide");
  }
}

// from dont

function community() {
  document.getElementById("community").classList.toggle("show");
  if (document.getElementById("dont").classList.toggle("show")) {
    document.getElementById("dont").classList.toggle("hide");
  }
}

function communityLeave() {
  document.getElementById("communityLeave").classList.toggle("show");
  if (document.getElementById("dont").classList.toggle("show")) {
    document.getElementById("dont").classList.toggle("hide");
  }
}

function leave() {
  document.getElementById("leave").classList.toggle("show");
  if (document.getElementById("dont").classList.toggle("show")) {
    document.getElementById("dont").classList.toggle("hide");
  }
}

// from chocolate

function community3() {
  document.getElementById("community").classList.toggle("show");
  if (document.getElementById("chocolate").classList.toggle("show")) {
    document.getElementById("chocolate").classList.toggle("hide");
  }
}

function communityLeave3() {
  document.getElementById("communityLeave").classList.toggle("show");
  if (document.getElementById("chocolate").classList.toggle("show")) {
    document.getElementById("chocolate").classList.toggle("hide");
  }
}

function leave5() {
  document.getElementById("leave").classList.toggle("show");
  if (document.getElementById("chocolate").classList.toggle("show")) {
    document.getElementById("chocolate").classList.toggle("hide");
  }
}

// from leave2

function back() {
  document.getElementById("back").classList.toggle("show");
  if (document.getElementById("leave2").classList.toggle("show")) {
    document.getElementById("leave2").classList.toggle("hide");
  }
}

function proles() {
  document.getElementById("proles").classList.toggle("show");
  if (document.getElementById("leave2").classList.toggle("show")) {
    document.getElementById("leave2").classList.toggle("hide");
  }
}

function sleep2() {
  document.getElementById("sleep2").classList.toggle("show");
  if (document.getElementById("leave2").classList.toggle("show")) {
    document.getElementById("leave2").classList.toggle("hide");
  }
}

// speak

function community2() {
  document.getElementById("community2").classList.toggle("show");
  if (document.getElementById("speak").classList.toggle("show")) {
    document.getElementById("speak").classList.toggle("hide");
  }
}

function communityLeave2() {
  document.getElementById("communityLeave2").classList.toggle("show");
  if (document.getElementById("speak").classList.toggle("show")) {
    document.getElementById("speak").classList.toggle("hide");
  }
}

function leave3() {
  document.getElementById("leave3").classList.toggle("show");
  if (document.getElementById("speak").classList.toggle("show")) {
    document.getElementById("speak").classList.toggle("hide");
  }
}

// stash

function community4() {
  document.getElementById("community2").classList.toggle("show")
  if (document.getElementById("stash").classList.toggle("show")) {
    document.getElementById("stash").classList.toggle("hide");
  }
}

function communityLeave4() {
  document.getElementById("communityLeave2").classList.toggle("show");
  if (document.getElementById("stash").classList.toggle("show")) {
    document.getElementById("stash").classList.toggle("hide");
  }
}

function leave6() {
  document.getElementById("leave3").classList.toggle("show");
  if (document.getElementById("stash").classList.toggle("show")) {
    document.getElementById("stash").classList.toggle("hide");
  }
}

// from community

function games() {
  document.getElementById("games").classList.toggle("show");
  if (document.getElementById("community").classList.toggle("show")) {
    document.getElementById("community").classList.toggle("hide");
  }
}

function lecture() {
  document.getElementById("lecture").classList.toggle("show");
  if (document.getElementById("community").classList.toggle("show")) {
    document.getElementById("community").classList.toggle("hide");
  }
}

// communityLeave

function proles2() {
  document.getElementById("proles").classList.toggle("show");
  if (document.getElementById("communityLeave").classList.toggle("show")) {
    document.getElementById("communityLeave").classList.toggle("hide");
  }
}

function home3() {
  document.getElementById("home").classList.toggle("show");
  if (document.getElementById("communityLeave").classList.toggle("show")) {
    document.getElementById("communityLeave").classList.toggle("hide");
  }
}

// leave

function home8() {
  document.getElementById("home").classList.toggle("show");
  if (document.getElementById("leave").classList.toggle("show")) {
    document.getElementById("leave").classList.toggle("hide");
  }
}

function proles3() {
  document.getElementById("proles").classList.toggle("show");
  if (document.getElementById("leave").classList.toggle("show")) {
    document.getElementById("leave").classList.toggle("hide");
  }
}

// from community2

function games2() {
  document.getElementById("games2").classList.toggle("show");
  if (document.getElementById("community2").classList.toggle("show")) {
    document.getElementById("community2").classList.toggle("hide");
  }
}

function lecture2() {
  document.getElementById("lecture2").classList.toggle("show");
  if (document.getElementById("community2").classList.toggle("show")) {
    document.getElementById("community2").classList.toggle("hide");
  }
}

// from communityLeave2

function home2() {
  document.getElementById("home2").classList.toggle("show");
  if (document.getElementById("communityLeave2").classList.toggle("show")) {
    document.getElementById("communityLeave2").classList.toggle("hide");
  }
}

function proles4() {
  document.getElementById("proles").classList.toggle("show");
  if (document.getElementById("communityLeave2").classList.toggle("show")) {
    document.getElementById("communityLeave2").classList.toggle("hide");
  }
}

// from leave3

function home7() {
  document.getElementById("home2").classList.toggle("show");
  if (document.getElementById("leave3").classList.toggle("show")) {
    document.getElementById("leave3").classList.toggle("hide");
  }
}

function proles5() {
  document.getElementById("proles").classList.toggle("show");
  if (document.getElementById("leave3").classList.toggle("show")) {
    document.getElementById("leave3").classList.toggle("hide");
  }
}

// from lecture

function ogilvy() {
  document.getElementById("ogilvy").classList.toggle("show");
  if (document.getElementById("lecture").classList.toggle("show")) {
    document.getElementById("lecture").classList.toggle("hide");
  }
}

function goldstein() {
  document.getElementById("goldstein").classList.toggle("show");
  if (document.getElementById("lecture").classList.toggle("show")) {
    document.getElementById("lecture").classList.toggle("hide");
  }
}

function rations() {
  document.getElementById("rations").classList.toggle("show");
  if (document.getElementById("lecture").classList.toggle("show")) {
    document.getElementById("lecture").classList.toggle("hide");
  }
}

// from games

function home() {
  document.getElementById("home").classList.toggle("show");
  if (document.getElementById("games").classList.toggle("show")) {
    document.getElementById("games").classList.toggle("hide");
  }
}

function proles6() {
  document.getElementById("proles").classList.toggle("show");
  if (document.getElementById("games").classList.toggle("show")) {
    document.getElementById("games").classList.toggle("hide");
  }
}

// back is an ending; no function

// from proles

function food() {
  document.getElementById("food").classList.toggle("show");
  if (document.getElementById("proles").classList.toggle("show")) {
    document.getElementById("proles").classList.toggle("hide");
  }
}

function ticket() {
  document.getElementById("ticket").classList.toggle("show");
  if (document.getElementById("proles").classList.toggle("show")) {
    document.getElementById("proles").classList.toggle("hide");
  }
}

// sleep2 is an ending; no function

// from lecture2

function ogilvy2() {
  document.getElementById("ogilvy2").classList.toggle("show");
  if (document.getElementById("lecture2").classList.toggle("show")) {
    document.getElementById("lecture2").classList.toggle("hide");
  }
}

function goldstein2() {
  document.getElementById("goldstein2").classList.toggle("show");
  if (document.getElementById("lecture2").classList.toggle("show")) {
    document.getElementById("lecture2").classList.toggle("hide");
  }
}

function rations2() {
  document.getElementById("rations2").classList.toggle("show");
  if (document.getElementById("lecture2").classList.toggle("show")) {
    document.getElementById("lecture2").classList.toggle("hide");
  }
}

// from games2

function proles7() {
  document.getElementById("proles").classList.toggle("show");
  if (document.getElementById("games2").classList.toggle("show")) {
    document.getElementById("games2").classList.toggle("hide");
  }
}

function home9() {
  document.getElementById("home2").classList.toggle("show");
  if (document.getElementById("games2").classList.toggle("show")) {
    document.getElementById("games2").classList.toggle("hide");
  }
}

// from rations

function home10() {
  document.getElementById("home").classList.toggle("show");
  if (document.getElementById("rations").classList.toggle("show")) {
    document.getElementById("rations").classList.toggle("hide");
  }
}

function proles11() {
  document.getElementById("proles").classList.toggle("show");
  if (document.getElementById("rations").classList.toggle("show")) {
    document.getElementById("rations").classList.toggle("hide");
  }
}

// from ogilvy

function home4() {
  document.getElementById("home").classList.toggle("show");
  if (document.getElementById("ogilvy").classList.toggle("show")) {
    document.getElementById("ogilvy").classList.toggle("hide");
  }
}

function proles9() {
  document.getElementById("proles").classList.toggle("show");
  if (document.getElementById("ogilvy").classList.toggle("show")) {
    document.getElementById("ogilvy").classList.toggle("hide");
  }
}

// from goldstein

function home5() {
  document.getElementById("home").classList.toggle("show");
  if (document.getElementById("goldstein").classList.toggle("show")) {
    document.getElementById("goldstein").classList.toggle("hide");
  }
}

function proles10() {
  document.getElementById("proles").classList.toggle("show");
  if (document.getElementById("goldstein").classList.toggle("show")) {
    document.getElementById("goldstein").classList.toggle("hide");
  }
}

// from rations2

function home10() {
  document.getElementById("home2").classList.toggle("show");
  if (document.getElementById("goldstein2").classList.toggle("show")) {
    document.getElementById("goldstein").classList.toggle("hide");
  }
}

function proles11() {
  document.getElementById("proles").classList.toggle("show");
  if (document.getElementById("goldstein2").classList.toggle("show")) {
    document.getElementById("goldstein2").classList.toggle("hide");
  }
}

// from ogilvy2

function home11() {
  document.getElementById("home2").classList.toggle("show");
  if (document.getElementById("ogilvy2").classList.toggle("show")) {
    document.getElementById("ogilvy2").classList.toggle("hide");
  }
}

function proles12() {
  document.getElementById("proles").classList.toggle("show");
  if (document.getElementById("ogilvy2").classList.toggle("show")) {
    document.getElementById("ogilvy2").classList.toggle("hide");
  }
}

// goldstein2

function home12() {
  document.getElementById("home2").classList.toggle("show");
  if (document.getElementById("goldstein2").classList.toggle("show")) {
    document.getElementById("goldstein2").classList.toggle("hide");
  }
}

function proles13() {
  document.getElementById("proles").classList.toggle("show");
  if (document.getElementById("goldstein2").classList.toggle("show")) {
    document.getElementById("goldstein2").classList.toggle("hide");
  }
}

// from home

function sleep() {
  document.getElementById("sleep").classList.toggle("show");
  if (document.getElementById("home").classList.toggle("show")) {
    document.getElementById("home").classList.toggle("hide");
  }
}

function proles14() {
  document.getElementById("proles").classList.toggle("show");
  if (document.getElementById("home").classList.toggle("show")) {
    document.getElementById("home").classList.toggle("hide");
  }
}

// from sleep is an ending; no function

// from home2 is an ending; no function

// from food

function talk() {
  document.getElementById("talk").classList.toggle("show");
  if (document.getElementById("food").classList.toggle("show")) {
    document.getElementById("food").classList.toggle("hide");
  }
}

function leave7() {
  document.getElementById("leave4").classList.toggle("show");
  if (document.getElementById("food").classList.toggle("show")) {
    document.getElementById("food").classList.toggle("hide");
  }
}

// from ticket

function leave11() {
   document.getElementById("leave4").classList.toggle("show")
   if ( document.getElementById("ticket").classList.toggle("show")) {
   document.getElementById("ticket").classList.toggle("hide");
  }
}

function food2() {
  document.getElementById("food").classList.toggle("show");
  if (document.getElementById("ticket").classList.toggle("show")) {
    document.getElementById("ticket").classList.toggle("hide");
  }
}

// from talk

function memories() {
  document.getElementById("memories").classList.toggle("show");
  if (document.getElementById("talk").classList.toggle("show")) {
    document.getElementById("talk").classList.toggle("hide");
  }
}

function life() {
  document.getElementById("life").classList.toggle("show");
  if (document.getElementById("talk").classList.toggle("show")) {
    document.getElementById("talk").classList.toggle("hide");
  }
}

function police() {
  document.getElementById("police").classList.toggle("show");
  if (document.getElementById("talk").classList.toggle("show")) {
    document.getElementById("talk").classList.toggle("hide");
  }
}

function lottery() {
  document.getElementById("lottery").classList.toggle("show");
  if (document.getElementById("talk").classList.toggle("show")) {
    document.getElementById("talk").classList.toggle("hide");
  }
}

// from memories

function leave4() {
  document.getElementById("leave4").classList.toggle("show");
    if (document.getElementById("memories").classList.toggle("show")) {
    document.getElementById("memories").classList.toggle("hide");
  }
}

function life2() {
  document.getElementById("life").classList.toggle("show");
    if (document.getElementById("memories").classList.toggle("show")) {
    document.getElementById("memories").classList.toggle("hide");
  }
}

function police3() {
  document.getElementById("police").classList.toggle("show");
    if (document.getElementById("memories").classList.toggle("show")) {
    document.getElementById("memories").classList.toggle("hide");
  }
}

function lottery4() {
  document.getElementById("lottery").classList.toggle("show");
    if (document.getElementById("memories").classList.toggle("show")) {
    document.getElementById("memories").classList.toggle("hide");
  }
}

// from life

function leave8() {
 document.getElementById("leave4").classList.toggle("show")
  if (document.getElementById("life").classList.toggle("show")) {
    document.getElementById("life").classList.toggle("hide");
  }
}

function memories2() {
 document.getElementById("memories").classList.toggle("show")
  if (document.getElementById("life").classList.toggle("show")) {
    document.getElementById("life").classList.toggle("hide");
  }
}

function police2() {
 document.getElementById("police").classList.toggle("show")
  if (document.getElementById("life").classList.toggle("show")) {
    document.getElementById("life").classList.toggle("hide");
  }
}

function lottery2() {
 document.getElementById("lottery").classList.toggle("show")
  if (document.getElementById("life").classList.toggle("show")) {
    document.getElementById("life").classList.toggle("hide");
  }
}

// from police

function leave9() {
 document.getElementById("leave4").classList.toggle("show")
   if (document.getElementById("police").classList.toggle("show")) {
    document.getElementById("police").classList.toggle("hide");
  }
}

function memories3() {
 document.getElementById("memories").classList.toggle("show")
   if (document.getElementById("police").classList.toggle("show")) {
    document.getElementById("police").classList.toggle("hide");
  }
}

function life3() {
 document.getElementById("life").classList.toggle("show")
   if (document.getElementById("police").classList.toggle("show")) {
    document.getElementById("police").classList.toggle("hide");
  }
}

function lottery3() {
 document.getElementById("lottery").classList.toggle("show")
   if (document.getElementById("police").classList.toggle("show")) {
    document.getElementById("police").classList.toggle("hide");
  }
}

// from lottery

function leave10() {
 document.getElementById("leave4").classList.toggle("show")
   if ( document.getElementById("lottery").classList.toggle("show")) {
   document.getElementById("lottery").classList.toggle("hide");
  }
}

function memories4() {
 document.getElementById("memories").classList.toggle("show")
   if ( document.getElementById("lottery").classList.toggle("show")) {
   document.getElementById("lottery").classList.toggle("hide");
  }
}

function life4() {
 document.getElementById("life4").classList.toggle("show")
   if ( document.getElementById("lottery").classList.toggle("show")) {
   document.getElementById("lottery").classList.toggle("hide");
  }
}

function police4() {
 document.getElementById("police").classList.toggle("show")
   if ( document.getElementById("lottery").classList.toggle("show")) {
   document.getElementById("lottery").classList.toggle("hide");
  }
}

// from leave4 is an ending; no function
