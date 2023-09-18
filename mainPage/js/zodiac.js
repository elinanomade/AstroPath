//zodiac project: use an array of objects and attributes:
"use strict";

console.log("start here");
var zodiac = [
  {
    zodiacName: "aries",
    birthdayRange: "March 21 - April 19",
    attributes:
      "Aries, you are a crazy one! You feel at and shine your best if you are active, always a busy person. You are energetic, you will jump into things without thinking, you are the optimist, but on your worst you can be an aggressive, not so diplomatic. And one of your SUN CODE activities is: Listen a very heavy music.",
  },
  {
    zodiacName: "cancer",
    birthdayRange: "June 21 - July 22",
    attributes:
      "Many see you as the softest, but you are actually a warrior. You are kind and gentle at your best, but at your worst you can be a very nasty human who don't forget small things. What is one SUN CODE activity for you? Take care of plants - be a plant parent.",
  },
  {
    zodiacName: "taurus",
    birthdayRange: "April 20 - May 20",
    attributes:
      "Oh taurus, you hide so well behind that tough guy image! Financially you are the smartest from all, but at your low energy you and money are the enemies. What is one of your SUN CODE activities? Do some crafts!",
  },
  {
    zodiacName: "gemini",
    birthdayRange: "May 21 - June 20",
    attributes:
      "Dearest Gemini, wait, don't run away yet! Focus here! You are the communicator of the all signs, but at your lowest you can be shallow. What is one of your SUN CODE activities? Go cycle or get the drivers licence!",
  },
  {
    zodiacName: "capricorn",
    birthdayRange: "December 22 - January 19",
    attributes:
      "You are the climber of mountains and career! You shine at your best when you are disciplined, strict to yourself and have goals, but at your lowest you trying to reach the sky, makes you to become a workaholic. What is one of your SUN CODE activities? Go hiking!",
  },
  {
    zodiacName: "sagittarius",
    birthdayRange: "November 22 - December 21",
    attributes:
      "Sagittarius, world without you would be boring. You know how to travel and explore. ",
  },
  {
    zodiacName: "pisces",
    birthdayRange: "February 19 - March 20",
    attributes:
      "Mysterious and alluring individuals, most Pisces are extremely talented, but even though they are gifted in many ways, they still manage to spend most of their lives battling confusing conditions. Pisces is the sign symbolised by the image of two fish. Their symbol depicts one fish heading upward, the other pulling downward. This mirrors how Pisceans are frequently torn between two pathways in life, or actually do live two very different existences at the same time.",
    picture:
      "http://courtneysgamecoderocks.com/ZodiacProject/img/piscesSign.png",
  },
  {
    zodiacName: "aquarius",
    birthdayRange: "January 20 - February 18",
    attributes:
      "Special note for Aquarians: At the Dawn of the Age of Aquarius, at this time, ready or not, your sign is regarded as the zodiac's leader. You are the trendsetter for the future and because of this high responsibility, many under born your sign will be undergoing at this time, the pressure of personal change (particularly in your values and what makes you content and happy). Yours has always been a philanthropic sign. Now more than ever these qualities will be highlighted.",
    picture:
      "http://courtneysgamecoderocks.com/ZodiacProject/img/aquariusSign.png",
  },
  {
    zodiacName: "scorpio",
    birthdayRange: "October 23 - November 21",
    attributes:
      "Reputed to be the most powerful sign of the zodiac, Scorpios lead fate filled lives and have intense and dramatic personal relationships. Even as children Scorpios are often found to be wise beyond their years. Many astrologers call this the sign of the oldest souls. Old and wise beyond the average, Scorpios often know all the answers, except sometimes; they too often have difficulty finding what they need to develop their own happiness.",
    picture:
      "http://courtneysgamecoderocks.com/ZodiacProject/img/scorpioSign.png",
  },
  {
    zodiacName: "virgo",
    birthdayRange: "August 23 - September 22",
    attributes:
      "Virgos are often put down badly by many astrologers and written up as being fussy and narrow-minded. But when a Virgo shines, there is practically no sign to match their inner light. An in-tune Virgo is a treat to meet. When a Virgo is confident within themselves they are the most successful, structured and creative of all the signs.",
    picture:
      "http://courtneysgamecoderocks.com/ZodiacProject/img/virgoSign.png",
  },
  {
    zodiacName: "libra",
    birthdayRange: "September 23 - October 22",
    attributes:
      "Every adolescent Libran's fantasy is to find the Prince or Princess of their dreams. As their lives unfold, the experiences, false starts, dramas, broken hearts and disillusionment they encounter seeking this personal Holy Grail, often shapes their futures in the most extra-ordinary manner. Love and love-lost makes a big difference to the Libran although their often happy-go-lucky appearance against all kinds of odds may not reveal this as fact.",
    picture:
      "http://courtneysgamecoderocks.com/ZodiacProject/img/libraSign.png",
  },
  {
    zodiacName: "leo",
    birthdayRange: "July 23 - August 22",
    attributes:
      "People born under the sign of Leo are natural born leaders. They are dramatic, creative self-confident, dominant and extremely difficult to resist. They can achieve anything they want, whether it's about work or time spent will family and friends.",
    picture: "http://courtneysgamecoderocks.com/ZodiacProject/img/leoSign.png",
  },
];

// write a function to call appropriate zodiacName:
function astSign() {
  console.log("working");

  var userInput = document.getElementById("your-sign").value.toLowerCase();

  var sign = document.getElementById("yourSign");
  var range = document.getElementById("birthdayRange");
  var attributes = document.getElementById("attributes");
  var img = document.getElementById("zodiacImage");

  for (i = 0; i < zodiac.length; i++) {
    if (userInput == zodiac[i].zodiacName) {
      sign.innerHTML = zodiac[i].zodiacName;

      range.innerHTML = zodiac[i].birthdayRange;
      attributes.innerHTML = zodiac[i].attributes;
      img.src = zodiac[i].picture;
      return;
    } else {
      sign.innerHTML = "oops! That's not a sign. Try again";
      range.innerHTML = " ";
      attributes.innerHTML = " ";
    }
  }
}
