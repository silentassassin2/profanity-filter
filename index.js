module.exports = {
   findprofanity: function(input) {
var bad_words=[
"a55",
"a55hole",
"aeolus",
"ahole",
"anal",
"analprobe",
"anilingus",
"anus",
"areola",
"areole",
"ass",
"assbang",
"assbanged",
"assbangs",
"asses",
"assfuck",
"assfucker",
"assh0le",
"asshat",
"assho1e",
"ass hole",
"assholes",
"assmaster",
"assmunch",
"asswipe",
"asswipes",
"b1tch",
"ballsack",
"bastard",
"bastards",
"bawdy",
"beaner",
"beastiality",
"beatch",
"beater",
"beeyotch",
"beotch",
"biatch",
"bigtits",
"big tits",
"bimbo",
"bitch",
"bitched",
"bitches",
"bitchy",
"blow job",
"blow",
"blowjob",
"blowjobs",
"bone",
"boned",
"boner",
"boners",
"bong",
"boob",
"boobies",
"boobs",
"booby",
"booger",
"bookie",
"bootee",
"bootie",
"booty",
"booze",
"boozer",
"boozy",
"bosom",
"bosomy",
"bowel",
"bowels",
"bra",
"brassiere",
"breast",
"breasts",
"bukkake",
"bullshit",
"bull shit",
"bullshits",
"bullshitted",
"bullturds",
"bung",
"busty",
"butt",
"butt fuck",
"buttfuck",
"buttfucker",
"buttfucker",
"buttplug",
"c.0.c.k",
"c.o.c.k.",
"c.u.n.t",
"c0ck",
"c-0-c-k",
"caca",
"cahone",
"cameltoe",
"carpetmuncher",
"cawk",
"cervix",
"chinc",
"chincs",
"chink",
"chink",
"chode",
"chodes",
"cl1t",
"climax",
"clit",
"clitoris",
"clitorus",
"clits",
"clitty",
"cocain",
"cocaine",
"cock",
"c-o-c-k",
"cockblock",
"cockholster",
"cockknocker",
"cocks",
"cocksmoker",
"cocksucker",
"cock sucker",
"coital",
"commie",
"condom",
"coon",
"coons",
"corksucker",
"crabs",
"crack",
"cracker",
"crackwhore",
"cum",
"cummin",
"cumming",
"cumshot",
"cumshots",
"cumslut",
"cumstain",
"cunilingus",
"cunnilingus",
"cunny",
"cunt",
"cunt",
"c-u-n-t",
"cuntface",
"cunthunter",
"cuntlick",
"cuntlicker",
"cunts",
"d0ng",
"d0uch3",
"d0uche",
"d1ck",
"d1ld0",
"d1ldo",
"dago",
"dagos",
"dawgie-style",
"dick",
"dickbag",
"dickdipper",
"dickface",
"dickflipper",
"dickhead",
"dickheads",
"dickish",
"dick-ish",
"dickripper",
"dicksipper",
"dickweed",
"dickwhipper",
"dickzipper",
"dike",
"dildo",
"dildos",
"diligaf",
"dillweed",
"dimwit",
"dingle",
"dipship",
"doggie-style",
"doggy-style",
"dong",
"doofus",
"doosh",
"dopey",
"douch3",
"douche",
"douchebag",
"douchebags",
"douchey",
"dumass",
"dumbass",
"dumbasses",
"dyke",
"dykes",
"ejaculate",
"erect",
"erection",
"erotic",
"essohbee",
"extacy",
"extasy",
"f.u.c.k",
"fack",
"fag",
"fagg",
"fagged",
"faggit",
"faggot",
"fagot",
"fags",
"faig",
"faigt",
"fannybandit",
"fartknocker",
"felch",
"felcher",
"felching",
"fellate",
"fellatio",
"feltch",
"feltcher",
"fisted",
"fisting",
"fisty",
"floozy",
"foad",
"fondle",
"foreskin",
"freex",
"frigg",
"frigga",
"fubar",
"fuck",
"f-u-c-k",
"fuckass",
"fucked",
"fucked",
"fucker",
"fuckface",
"fuckin",
"fucking",
"fucknugget",
"fucknut",
"fuckoff",
"fucks",
"fucktard",
"fuck-tard",
"fuckup",
"fuckwad",
"fuckwit",
"fudgepacker",
"fuk",
"fvck",
"fxck",
"gigolo",
"glans",
"goatse",
"goldenshower",
"gonad",
"gonads",
"gook",
"gooks",
"gringo",
"gspot",
"g-spot",
"guido",
"h0m0",
"h0mo",
"handjob",
"hard on",
"he11",
"hebe",
"heeb",
"heroin",
"herp",
"herpes",
"herpy",
"hiv",
"hobag",
"hom0",
"homey",
"homoey",
"honky",
"hooch",
"hookah",
"hooker",
"hoor",
"hootch",
"hooter",
"hooters",
"horny",
"hump",
"humped",
"humping",
"hussy",
"hymen",
"inbred",
"incest",
"injun",
"j3rk0ff",
"jackass",
"jackhole",
"jackoff",
"jap",
"japs",
"jerk",
"jerk0ff",
"jerked",
"jerkoff",
"jism",
"jiz",
"jizm",
"jizz",
"jizzed",
"junkie",
"junky",
"kike",
"kikes",
"kinky",
"kkk",
"klan",
"knobend",
"kooch",
"kooches",
"kootch",
"kraut",
"kyke",
"labia",
"lech",
"leper",
"lesbians",
"lesbo",
"lesbos",
"lez",
"lezbian",
"lezbians",
"lezbo",
"lezbos",
"lezzie",
"lezzies",
"lezzy",
"loin",
"loins",
"lube",
"lusty",
"mams",
"massa",
"masterbate",
"masterbating",
"masterbation",
"masturbate",
"masturbating",
"masturbation",
"maxi",
"menses",
"menstruate",
"menstruation",
"meth",
"m-fucking",
"mofo",
"molest",
"moolie",
"moron",
"motherfucka",
"motherfucker",
"motherfucking",
"mtherfucker",
"mthrfucker",
"mthrfucking",
"muff",
"muffdiver",
"murder",
"muthafuckaz",
"muthafucker",
"mutherfucker",
"mutherfucking",
"muthrfucking",
"nad",
"nads",
"naked",
"nazi",
"nazism",
"negro",
"nigga",
"niggah",
"niggas",
"niggaz",
"nigger",
"nigger",
"niggers",
"niggle",
"niglet",
"nimrod",
"ninny",
"nipple",
"nooky",
"nympho",
"opiate",
"oraly",
"organ",
"orgasm",
"orgasmic",
"orgies",
"orgy",
"ovary",
"ovum",
"ovums",
"p.u.s.s.y.",
"paddy",
"paki",
"pantie",
"panties",
"panty",
"pastie",
"pasty",
"pcp",
"pecker",
"pedo",
"pedophile",
"pedophilia",
"pedophiliac",
"peepee",
"penetrate",
"penetration",
"penial",
"penile",
"penis",
"perversion",
"peyote",
"phalli",
"phallic",
"phuck",
"pillowbiter",
"pinko",
"piss",
"pissed",
"pissoff",
"piss-off",
"pms",
"polack",
"pollock",
"poon",
"poontang",
"porn",
"porno",
"pornography",
"pot",
"potty",
"prick",
"prig",
"prostitute",
"prude",
"pube",
"pubic",
"pubis",
"punkass",
"punky",
"puss",
"pussies",
"pussy",
"pussypounder",
"puto",
"queaf",
"queef",
"queef",
"queer",
"queero",
"queers",
"quicky",
"quim",
"racy",
"rape",
"raped",
"raper",
"rapist",
"raunch",
"rectal",
"rectum",
"rectus",
"reefer",
"reich",
"revue",
"rimjob",
"ritard",
"rtard",
"r-tard",
"rum",
"rump",
"rumprammer",
"ruski",
"s.h.i.t.",
"s.o.b.",
"s0b",
"sadism",
"sadist",
"scag",
"scantily",
"schizo",
"schlong",
"screw",
"screwed",
"scrog",
"scrot",
"scrote",
"scrotum",
"scrud",
"scum",
"seaman",
"seamen",
"seduce",
"semen",
"sex",
"sexual",
"sh1t",
"s-h-1-t",
"shamedame",
"shit",
"s-h-i-t",
"shite",
"shiteater",
"shitface",
"shithead",
"shithole",
"shithouse",
"shits",
"shitt",
"shitted",
"shitter",
"shitty",
"shiz",
"sissy",
"skag",
"skank",
"slave",
"sleaze",
"sleazy",
"slut",
"slutdumper",
"slutkiss",
"sluts",
"smegma",
"smut",
"smutty",
"snatch",
"snuff",
"s-o-b",
"sodom",
"souse",
"soused",
"sperm",
"spic",
"spick",
"spik",
"spiks",
"spooge",
"spunk",
"steamy",
"stiffy",
"stoned",
"strip",
"stroke",
"sucking",
"sumofabiatch",
"t1t",
"tampon",
"tard",
"tawdry",
"teabagging",
"teat",
"terd",
"teste",
"testee",
"testes",
"testicle",
"testis",
"thrust",
"thug",
"tinkle",
"tit",
"titfuck",
"titi",
"tits",
"tittiefucker",
"titties",
"titty",
"tittyfuck",
"tittyfucker",
"toke",
"toots",
"tramp",
"transsexual",
"trashy",
"tubgirl",
"turd",
"tush",
"twat",
"twats",
"ugly",
"undies",
"unwed",
"urinal",
"urine",
"uterus",
"uzi",
"vag",
"vagina",
"valium",
"viagra",
"virgin",
"vixen",
"vodka",
"vomit",
"voyeur",
"vulva",
"wad",
"wang",
"wank",
"wanker",
"wazoo",
"wedgie",
"weenie",
"weewee",
"weiner",
"weirdo",
"wench",
"wetback",
"wh0re",
"wh0reface",
"whitey",
"whiz",
"whoralicious",
"whore",
"whorealicious",
"whored",
"whoreface",
"whorehopper",
"whorehouse",
"whores",
"whoring",
"wigger",
"womb",
"woody",
"wop",
"x-rated",
"xxx",
"yeasty",
"yobbo",
"zoophile"
];
   var i = 0;
   input=input.toLowerCase();
   input=input.replace(/[\W_]+/g," ");
   var in_words=input.split(' ');
   while (i < in_words.length)
   {
       if (bad_words.indexOf(in_words[i])>=0)
       {
           return true;
       }
        i=i+1;
   }
   return false;
} };
