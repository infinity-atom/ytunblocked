function getParam(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//video data

const videoDesc = [
  `In this Mumbo Minecraft video, we see Mumbo trying the create mod for the first time. The Minecraft Create mod for Minecraft Forge Modloader introduces mechanical features to Minecraft, such as Minecraft conveyor belts, Minecraft mechanical cogs, and Minecraft robot arms. The create allows players to create giant Minecraft piston doors, automatic redstone farms, automatic Minecraft block placers and much more!

  Check out the create mod here! 
  https://www.curseforge.com/minecraft/...
  
  Filming channel: https://www.youtube.com/user/ThatMumb...
  Instagram: https://www.instagram.com/officialmumbo/
  Twitter: https://twitter.com/ThatMumboJumbo`,
  `I Bought EVERY Billboard Near Dreams House.. 10k likes and I do it in every state.

  Don't forget to Subscribe! Let's hit 500,000 Subscribers!
  
  @Dream sub to him ily
  
  Follow my Socials to keep up to date on the content! :D 
  JOIN MY DISCORD! - https://discord.gg/wmwhXBk 
  Instagram - https://www.instagram.com/lynixity/ 
  Twitter - https://twitter.com/Lynixity 
  Twitch - https://www.twitch.tv/Lynixity`,
  `i trolled a streamer by adding realistic mining in minecraft.. LETS HIT 10K LIKES!

  Friends in video!
  @19Fifty 
  @Desstic 
  @Doni Bobes 
  @Checkme 
  
  Creator
  @Phoenix SC SUB TO HIM PLEASE
  
  Don't forget to Subscribe! Let's hit 300,000 Subscribers!
  PLAY ON MY MINECRAFT SERVER - Play.EnlightenMC.net
  
  Subscribe to my 2nd Channel! - https://www.youtube.com/channel/UCHsA...
  
  Follow my Socials to keep up to date on the content! 
  :D JOIN MY DISCORD! - https://discord.gg/wmwhXBk
  🌌 Instagram - https://www.instagram.com/lynixity/
  💎 Twitter - https://twitter.com/Lynixity
  ⚠️ Twitch - https://www.twitch.tv/Lynixity
  
  Join the Member Squad to feature in videos and for exclusive content! - https://www.youtube.com/channel/UCRss...
  
  Want to be apart of my videos? Post funny clips & reccomendations for Builds on my SubReddit! - https://www.reddit.com/r/Lynix/new/
  
  Please report all hateful and self promoting comments, we’re here to have fun while creating content for my viewers. Love you guys! 
  
  
   if you made it this far in the description type “OMG I love icecream!”`,
  `This instagram story from pgtalal can crash your phone in an instant...but HOW? and WHY?  Let's find out.   Subscribe if you enjoyed!
  Thanks to Ananay for helping, his original tweet is here: https://twitter.com/ananayarora/statu...
  
  Subscribe for more content (IT'S FREE) : https://goo.gl/pLg6fE
  It would make my day if you could also follow me on:
  🌈 Instagram: https://goo.gl/OUqBBa
  🐦 Twitter: https://goo.gl/EFhwqL
  😊 Facebook: https://goo.gl/Aluzl1
  
  Amazon Affiliate links:
  Amazon US: https://goo.gl/3yS2aP
  Amazon UK: https://goo.gl/gvrsGZ
  
  My Filming Gear:
  https://bit.ly/35CuxwI
  
  Music is from Epidemic sound:
  http://share.epidemicsound.com/pHDFT`,
  `Pull down this description for information on all the shows I mention, plus all my references, and some advice if you're looking to subtitle your videos!

  🔤🔤 SUBTITLES 🔤🔤
  
  15% of my viewers watch with subtitles! They're helpful for folks without headphones, or in loud environments, or who can't hear well, or who just like subtitles. More people will watch if subtitles are an option.
  
  Before 2020, YouTube had a volunteer community-captions system. Alas, due to spam (and, I suspect, the difficulty of porting it to the new Studio), YouTube turned it off. So your options are:
  
  OPTION 1: DO IT YOURSELF
  
  If your video is one or two people talking, you can add subtitles easily with YouTube's tools: https://support.google.com/youtube/an... - that's also possible for more complex videos, but it can be time-consuming.
  
  OPTION 2: PAY A SMALL AMOUNT
  
  If you can afford an editor, you can afford subtitles! They only cost $1-2 per minute of audio.
  
  For simple audio, try Rev: https://www.rev.com/blog/coupon/?ref=... To be clear, that's an affiliate link: you get $10 of captions free (enough for up to an 8-minute video), and I get a kickback from them. However, my opinions of Rev are mixed. They have downsides, and they may not be the right option for you!
  
  Advantages of Rev:
  ✅ Extremely fast turnaround
  ✅ Easy, simple, automated, self-service
  ✅ Reasonable price
  
  Disadvantages of Rev:
  🚫 Rev is a gig-economy company, with everything that entails. In 2019, transcribers raised issues including low pay. https://www.theverge.com/2019/11/25/2...
  🚫 Accuracy is usually acceptable for clear speech, but not the near-perfect results you'd expect from a more high-end subtitle company.
  🚫 They're limited to their simple, narrow, house style. That isn't ideal for videos with long sentences or many speakers.
  
  For more complicated audio or for multiple speakers, try Caption+: https://caption.plus -- a small company that produces extremely high-quality subtitles for a reasonable price.
  
  Advantages of Caption+:
  ✅ Exceptional subtitle accuracy.
  ✅ Hand-tweaked broadcast-standard subtitles that are perfect for accessibility, and which the audience love.
  ✅ Can use positioning and per-speaker colors, and match other style requests.
  ✅ Still a reasonable price.
  
  Disadvantages of Caption+:
  🚫 Not automated: you're dealing with a human by email, and paying invoices.
  
  OTHER COMPANIES: I also used 3PlayMedia once, but unfortunately can't recommend them based on that experience. YouTube also mention ceilo24 and Amara, neither of which I have experience with: https://cielo24.com/ https://amara.org/
  
  📺📺 SHOWS 📺📺
  
  Here's a list of all the shows mentioned, with links where available. (Where Amazon links are listed, those are affiliate links, where I earn a commission from sales.)
  
  The Demon Headmaster is available on DVD from Amazon UK: https://amzn.to/37Cb68U - and the 2019 revival is available in the UK on BBC iPlayer: https://www.bbc.co.uk/iplayer/episode...
  
  Derren Brown: The Events: How To Control The Nation is available for free on YouTube: https://www.youtube.com/watch?v=SyIil... - although it lacks the live broadcast cut-ins.
  
  The pilot episode of Crisis Command: Could You Run The Country? has been uploaded to YouTube here: https://www.youtube.com/watch?v=zjkSe... - normally I wouldn't link to an unofficial upload, but the series will likely never be repeated or see a commercial release.
  
  Ghostwatch is available on DVD from Amazon UK: https://amzn.to/3kweAgL - I should absolutely have put the ghost in the background of one of my shots here, I regret missing that joke!
  
  The full Ghostwatch continuity announcement is here: https://www.youtube.com/watch?v=vDSZW...
  
  Who Wants To Be A Millionaire have an entire YouTube channel. https://www.youtube.com/c/Millionaire... - and yes, Jeremy Clarkson is the host now, I suspect that'll surprise a lot of people.
  
  📙📙 REFERENCES 📙📙
  
  Ofcom Broadcasting Code: https://www.ofcom.org.uk/tv-radio-and...
  On sports: https://www.ofcom.org.uk/tv-radio-and...
  On access: https://www.ofcom.org.uk/tv-radio-and...
  On advertising: https://www.ofcom.org.uk/tv-radio-and... AND https://www.ofcom.org.uk/__data/asset...
  "Only five complaints" about the Derren Brown show is from Broadcast Bulletin 148 [PDF]: https://www.ofcom.org.uk/__data/asset...
  
  Ghostwatch, and the "full tabloid fury afterwards", is well-documented in many places, so I'll leave researching that to the reader. Don't have nightmares.
  
  📝📝 CONTACT 📝📝
  
  I'm at https://tomscott.com
  on Twitter at https://twitter.com/tomscott
  on Facebook at https://facebook.com/tomscott
  and on Instagram as tomscottgo`,
  `Today we document the race to 2b2t's Nether world border, a survival expedition that took over 13 months, 30 million Minecraft blocks, and the shocking result that nobody expected on the oldest anarchy server in Minecraft.
  Over a year is not exactly a speedrun.
  My Twitter: FitMC
  My Instagram: fitmcsippycup
  Music:
  Guild Wars, DKC3
  Additional Images/Info:
  Zaanga (Information + Footage): https://www.youtube.com/watch?v=kPk76...
  Dig Team's Full Write-up: https://imgur.com/a/EjSXHfp
  IronException (Renders)
  
  If you enjoyed learning about the "speedrun" race to 2b2t's Nether world border, I would appreciate if you would consider hitting that like and subscribe button!
  2b2t is currently awaiting the 1.16/1.17 update. Very exciting times!`,
  `Inspired by @CM SKITS: https://www.instagram.com/cmskits69/
  https://www.youtube.com/watch?v=7yK5q...
  
  Twitch: https://www.twitch.tv/leviathanttv
  Instagram: https://www.instagram.com/leviathanjptv
  Discord: https://discord.gg/6azwfxz
  
  For clarification: The eighteen-second chorus is from CMSkits who I have permission from and also linked in the description. The rest of the song is completely original. I am not and have never claimed to own the original chorus/meme.
  
  Lyrics:
  
  [Verse 1]
  We've got a, Number 1 Victory Royale
  Yeah, Fortnite we 'bout to get down (get down)
  Ten kills on the board right now
  Just wiped out Tomato Town
  My friend just got downed
  I revived him now we're heading south-bound
  Now we're in the Pleasant Park streets
  Look at the map, go to the marked sheet
  
  [Chorus]
  Take me to your Xbox to play Fortnite today
  You can take me to Moisty Mire, but not Loot Lake
  I really love to chug jug with you
  We can be pro Fortnite gamers
  
  [Verse 2]
  He said;
  "Hey broski, you got some heals and a shield pot
  I need healing and I am only at 1HP"
  Hey dude sorry, I found nothing on this safari
  I checked the upstairs of that house but not the underneath yet
  There's a chest that's just down there
  The storm is coming fast and you need heals to prepare
  I've got V-Bucks that I'll spend
  More than you can contend
  I'm a cool pro Fortnite gamer (cool pro Fortnite-)
  
  [Chorus]
  Take me to your Xbox to play Fortnite today
  You can take me to Moisty Mire, but not Loot Lake
  I really love to chug jug with you
  We can be pro Fortnite gamers
  
  La la la la la eaah
  La la la la la eaah
  La la la la la eaah
  Will you be my pro Fortnite gamer? (pro Fortnite gamer)
  
  [Verse 3]
  Can we get a win this weekend?
  Take me to Loot Lake
  Lets change the game mode and we can disco dominate
  Lets hop in an ATK
  Take me to the zone
  I'm running kind of low on mats I need to break some stone
  Dressed in all his fancy clothes
  He's got renegade raider and he's probably a pro
  He just shot my back
  I turn back and I attack
  I just got a Victory Royale
  A Victory Royale
  
  [Chorus]
  Take me to your Xbox to play Fortnite today
  You can take me to Moisty Mire, but not Loot Lake
  I really love to chug jug with you
  We can be pro Fortnite gamers
  
  #1VictoryRoyale`
];

const videoTitle = [
  `What if Minecraft was Mechanical?`,
  `I Bought EVERY Billboard Near Dreams House..`,
  `i trolled a streamer by adding realistic mining in minecraft..`,
  `How THIS instagram story kills your phone.`,
  `Five Things You Can't Do On British Television`,
  `2b2t's Nether World Border Has Been REACHED (30 Million Minecraft Blocks)`,
  `Chug Jug With You - Parody of American Boy (Number One Victory Royale)`
];

const videoMaker = [
  `Mumbo Jumbo`,
  `Lynix`,
  `Lynix`,
  `Mrwhosetheboss`,
  `Tom Scott`,
  `FitMC`,
  `Leviathan`
];

const descTextObj = document.getElementById("descriptionText");

const channelLogoObj = document.getElementById("channelLogo");

const videoTitleObj = document.getElementById("videoTitle");

const videoObj = document.getElementById("videoE");

const channelObj = document.getElementById("channel");
// start

console.log("Param Data: " + getParam("id"));
if (getParam("id") == null || Number(getParam("id")) > 6 || Number(getParam("id")) < 0) {
  videoTitleObj.textContent = "Video Not Found"
  channelLogoObj.style.display = "none";
} else {
  descTextObj.textContent = videoDesc[Number(getParam("id"))];
  videoTitleObj.textContent = videoTitle[Number(getParam("id"))];
  channelLogoObj.src = "assets/channelIcons/" + videoMaker[Number(getParam("id"))] + ".jpg";
  channel.textContent = videoMaker[Number(getParam("id"))];
  videoObj.src = "assets/videos/" + Number(getParam("id")) + ".mp4";
}
