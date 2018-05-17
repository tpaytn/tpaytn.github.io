const marvelNodes = {
  1: {
    type: "question",
    text: "What would you prioritize on your bucket list: skydiving or scuba diving?",
    choices: [
      {
        text: "Skydiving.  The higher, the better",
        nextNode: 2
      }, {
        text: "Heights are not my thing",
        nextNode: 15
      }
    ]
  },
  2: {
    type: "question",
    text: "Could you ever live without your smartphone?",
    choices: [
      {
        text: "Of course",
        nextNode: 3
      },
      {
        text: "Definitely not",
        nextNode: 4
      }
    ]
  },
  3: {
    type: "question",
    text: "Who would you prefer the Avengers to cross over with: the X-Men or the Incredibles?",
    choices: [
      {
        text: "The X-Men",
        nextNode: 5
      }, {
        text: "The Incredibles",
        nextNode: 6
      }
    ]
  },
  4: {
    type: "answer",
    title: "Vision",
    text: "You could've used your phenomenal powers for evil, but even as an outsider, you didn't go Ultron - which makes you the noblest hero of all"
  },
  5: {
    type: "answer",
    title: "Thor",
    text: "As the God of Thunder and Former Wielder of Mjolnir (R.I.P.), you can weather any storm, including your very complicated family."
  },
  6: {
    type: "question",
    text: "Say you spot $100 on the ground.  What do you do?",
    choices: [
      {
        text: "Might as well spend it",
        nextNode: 7
      }, {
        text: "Try to find its owner at any cost.  Haha, 'cost'",
        nextNode: 11
      }
    ]
  },
  7: {
    type: "question",
    text: "On what?",
    choices: [
      {
        text: "I'm up for some shawarma.  How much would one of those cost?  $50?",
        nextNode: 8
      }, {
        text: "Something charitable",
        nextNode: 9
      }, {
        text: "That's none of your business",
        nextNode: 10
      }
    ]
  },
  8: {
    type: "answer",
    title: "Iron Man",
    text: "You are Tony Stark, a genius billionaire playboy philanthropist who has nearly destroyed the world once or twice.  Key word: nearly"
  },
  9: {
    type: "answer",
    title: "Falcon",
    text: "You're loyal, trustworthy, and literally the best wingman anyone could ask for.  (By the way...on your left)"
  },
  10: {
    type: "answer",
    title: "Guardians of the Galaxy",
    text: "Congratulations, you're a member of the spacefaring squad.  In the spirit of the group's signature dysfunction, we'll let you decide which Guardian you want to be."
  },
  11: {
    type: "question",
    text: "Nice of you!  Now for something completely different...How are you with public speaking?",
    choices: [
      {
        text: "I'm not a fan.  Unless...could I get a mask?",
        nextNode: 12
      }, {
        text: "I can handle an audience",
        nextNode: 13
      }
    ]
  },
  12: {
    type: "answer",
    title: "Spider-Man",
    text: "You're inventive and eager to please, but your heroics can sometimes get out of hand.  Luckily, you know that with great power comes great responsibility."
  },
  13: {
    type: "question",
    text: "Great!  When you're up there, don't freeze",
    choices: [
      {
        text: "I never freeze",
        nextNode: 14
      }
    ]
  },
  14: {
    type: "answer",
    title: "Black Panther",
    text: "You're a natural leader, and though you're not without your flaws (or claws), you're open-minded and honorable and most important, you never yield."
  },
  15: {
    type: "question",
    text: "Gah, aliens have invaded!  (Yes, again.)  What do you do first?",
    choices: [
      {
        text: "Get to the scene ASAP",
        nextNode: 16
      }, {
        text: "Gather as much Intel as you can",
        nextNode: 24
      }
    ]
  },
  16: {
    type: "question",
    text: "False alarm!  You've got some free time, so what series would you rather binge: Game of Thrones or The Americans?",
    choices: [
      {
        text: "Game of Thrones.  What else am I supposed to do until 2019?",
        nextNode: 17
      }, {
        text: "The Americans.  Hasn't it won all the Emmys?",
        nextNode: 18
      }
    ]
  },
  17: {
    type: "answer",
    title: "Scarlet Witch",
    text: "You're more powerful than you know - and as a telekinetic telepath who can manipulate minds, you know a lot."
  },
  18: {
    type: "question",
    text: "It's an excellent drama about partnership.  That reminds me: Do you prefer working alone or with a team?",
    choices: [
      {
        text: "Alone",
        nextNode: 19
      }, {
        text: "A team always.  I like being with friends",
        nextNode: 21
      }, {
        text: "Depends.  I'd assess the situation and decide from there",
        nextNode: 20
      }
    ]
  },
  19: {
    type: "answer",
    title: "Bucky Barnes",
    text: "You'll alway prefer being a lone (white) wolf, but when you are on a team, you're one of its most skilled (and silent) assets."
  },
  20: {
    type: "answer",
    title: "Black Widow",
    text: "No superpowers, super-suits, or super-DNA?  No problem.  Your enemies tend to underestimate you - and that's just the way you like it."
  },
  21: {
    type: "question",
    text: "In that case, how do you usually keep in touch with them?",
    choices: [
      {
        text: "Online",
        nextNode: 22
      }, {
        text: "In person",
        nextNode: 23
      }
    ]
  },
  22: {
    type: "answer",
    title: "War Machine",
    text: "A dedicated military man who never misses a battle, you're known for being a formidable fighter, especially when iron-suited and in the air."
  },
  23: {
    type: "answer",
    title: "Captain America",
    text: "You're a soldier who isn't afraid to challenge institutions in order to protect what you believe.  Now if only someone could get you a shield..."
  },
  24: {
    type: "question",
    text: "Oh, no, your laptop screen's broken!  What are you going to do?",
    choices: [
      {
        text: "I'll just have it replaced",
        nextNode: 26
      }, {
        text: "I'll fix it myself",
        nextNode: 25
      }
    ]
  },
  25: {
    type: "answer",
    title: "Shuri",
    text: "You're a precocious brainiac and the hippest member of the Wakandan royal family.  Honestly, Thanos should fear you most."
  },
  26: {
    type: "question",
    text: "It's been a long day, and you need to let off some steam.  Would you rather take a kickboxing class or a spa day?",
    choices: [
      {
        text: "Just let me punch something, anything",
        nextNode: 27
      }, {
        text: "Spa day, especially if it means some peace and quiet",
        nextNode: 28
      }
    ]
  },
  27: {
    type: "answer",
    title: "Hulk",
    text: "You're always angry - and that's a good thing!  Plus, out of every-one in this flow-chart, you know yourself best."
  },
  28: {
    type: "answer",
    title: "Doctor Strange",
    text: "Curiosity can get the best of you sometimes, but you're a quick learner - thanks partly to all that meditation."
  }
}
