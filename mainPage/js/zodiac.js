"use strict";

console.log("start here");

var zodiac = [
  {
    zodiacName: "aries",
    birthdayRange: "March 21 - April 19",
    attributes:
      "Aries, you are a crazy one! You feel at and shine your best if you are active, always a busy person. You are energetic, you will jump into things without thinking, you are the optimist, but on your worst you can be an aggressive, not so diplomatic. And one of your SUN CODE activities is: Listen to very heavy music.",
  },
  {
    zodiacName: "cancer",
    birthdayRange: "June 21 - July 22",
    attributes:
      "Many see you as the softest, but you are actually a warrior. You are kind and gentle at your best, but at your worst, you can be a very nasty human who doesn't forget small things. What is one of your SUN CODE activities? Take care of plants - be a plant parent.",
  },
  {
    zodiacName: "taurus",
    birthdayRange: "April 20 - May 20",
    attributes:
      "Oh Taurus, you hide so well behind that tough guy image! Financially, you are the smartest of them all, but at your low energy, you and money are enemies. What is one of your SUN CODE activities? Do some crafts!",
  },
  {
    zodiacName: "gemini",
    birthdayRange: "May 21 - June 20",
    attributes:
      "Dearest Gemini, wait, don't run away yet! Focus here! You are the communicator of all signs, but at your lowest, you can be shallow. What is one of your SUN CODE activities? Go cycling or get a driver's license!",
  },
  {
    zodiacName: "capricorn",
    birthdayRange: "December 22 - January 19",
    attributes:
      "You are the climber of mountains and career! You shine at your best when you are disciplined, strict with yourself and have goals, but at your lowest, trying to reach the sky makes you become a workaholic. What is one of your SUN CODE activities? Go hiking!",
  },
  {
    zodiacName: "sagittarius",
    birthdayRange: "November 22 - December 21",
    attributes:
      "Sagittarius, the world without you would be boring. You know how to travel and explore. You are cool, but at your low energy, you are too arrogant. What is one of your SUN CODE activities? Go on road trips more often or learn a language!",
  },
  {
    zodiacName: "pisces",
    birthdayRange: "February 19 - March 20",
    attributes:
      "Hello, the deep waters! You have the most complicated sign because you are a little bit of them all. At your best, you are an empathic human being, but at your worst, you play the victim role. What is one of your SUN CODE activities? Spend more time in nature and alone.",
  },
  {
    zodiacName: "aquarius",
    birthdayRange: "January 20 - February 18",
    attributes:
      "Hello there, Miss Little Social Butterfly. Do you ever sleep? Well, you are a collective person, you love to talk and be with people. At your best, you are friendly, but at your lowest, you can be a terrible weirdo. What is one of your SUN CODE activities? Have a day without your phone a few times a month!",
  },
  {
    zodiacName: "scorpio",
    birthdayRange: "October 23 - November 21",
    attributes:
      "Oh, the mysterious human. You have the power to rule and be the king or queen. At your best, you can lead and be a transformative leader, but at your worst, you are brutal and manipulate people. What is one of your SUN CODE activities? Do some extreme sports activities.",
  },
  {
    zodiacName: "virgo",
    birthdayRange: "August 23 - September 22",
    attributes:
      "The perfectionist of them all! Well, yes, everyone needs a Virgo in their life because you can structure everything the best. At your best, you are disciplined at work, but at your worst, you can be a nasty pedant. What is one of your SUN CODE activities? Go to a spa and have a massage.",
  },
  {
    zodiacName: "libra",
    birthdayRange: "September 23 - October 22",
    attributes:
      "Hello, fashionista. Yup, sort of fashion is related most to you. You are fashionable, friendly, and have a beautiful aesthetic taste, but at your low energies, you can become snobby and codependent. What is one of your SUN CODE activities? Go to museums!",
  },
  {
    zodiacName: "leo",
    birthdayRange: "July 23 - August 22",
    attributes:
      "The QUEEN/KING of the Zodiac circle is here! Hi, your Majesty, you are funny, playful, and unique, but you can also step into the negative side of your sign and become the 'too much' type of person. What is one of your SUN CODE activities? Have a professional photoshoot for yourself!",
  },
];
function astSign() {
  console.log("working");

  var userInput = document.getElementById("your-sign").value.toLowerCase();

  var sign = document.getElementById("yourSign");
  var range = document.getElementById("birthdayRange");
  var attributes = document.getElementById("attributes");

  for (var i = 0; i < zodiac.length; i++) {
    if (userInput == zodiac[i].zodiacName) {
      sign.innerHTML = zodiac[i].zodiacName;
      range.innerHTML = zodiac[i].birthdayRange;
      attributes.innerHTML = zodiac[i].attributes;
      return;
    }
  }

  // If the user enters an invalid zodiac sign, display an error message.
  sign.innerHTML = "Oops! Check your English skills! Try again";
  range.innerHTML = "";
  attributes.innerHTML = "";
}

// This code provides a simple way for users to input a zodiac sign,
// and it dynamically displays information about that sign if it's found in the
// zodiac array.If the input is invalid or not recognized, it shows an error message.
