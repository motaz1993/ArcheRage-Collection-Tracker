const collectionData = [
    {
        grandparent: "Skywarden",
        parents: [
            { name: "Celestial Creature", items: ["Celestial Pegasus", "Typhoon Drake", "Frost Dragon"] },
            { name: "Hereafter Herald", items: ["Hereafter Herald Mount", "Soulmule"] },
            { name: "Stormy Soul", items: ["Stormy Soulscar", "Thunder Dash", "Steel Lightning", "Cloudstrike Panther"] },
            { name: "Winter Wildlife", items: ["Winter Wildlife Mount", "Freezing Soulscar", "Brown Reindeer"] },
            { name: "Fiery Familiar", items: ["Fiery Familiar Mount", "Vanhi", "Hellwing Pegasus"] },
            { name: "Shadow Sidekick", items: ["Shadow Sidekick Mount", "Moonlight Kitsu", "Stormwraith Kirin", "Black Arrow"] },
            { name: "Best Buddy", items: ["Best Buddy Mount", "Gweonid Vine Giant", "Carrot Wings", "Mirage Bjorne"] },
            { name: "Cute Companion", items: ["Cute Companion Mount", "Phoenix Phish", "Candy-fueled Bestcargot", "Coral", "Fuchsiafin"] },
            { name: "Pale Pal", items: ["Pale Pal Mount", "Whitetail Leomorph", "White Elk", "Snowrend Boar", "Snowmane Snowlion", "Royal's Guard"] }
        ]
    },
    {
        grandparent: "Sky Empror",
        parents: [
            { name: "Little Friend", items: ["Sloth", "Squirrel", "Panda"] },
            { name: "Elegant Butterfly", items: ["Elegant Butterfly Glider", "Astra Wings", "Faelight Wings", "Twilight Wings"] },
            { name: "Walking on Clouds", items: ["Walking on Clouds Magithopter", "Cumulus Magithopter", "Nimbus 2000", "Umbrella Magithopter"] },
            { name: "Sunshine", items: ["Sunshine Magithopter", "Skywhisper Glider", "Marauder's Glider", "Gilded Royal Glider", "Gilt Spiral Glider"] },
            { name: "Blue Radiance", items: ["Blue Radiance Glider", "Nightfire Glider", "Crystal Wings", "Feathered Dragon Glider"] },
            { name: "Hot and Strong", items: ["Hot and Strong Glider", "Rocket Wings #2", "Flamefeather Glider", "Eagle Glider"] },
            { name: "Smol Wings", items: ["Smol Wings Glider", "Wings of Immortality", "Wings of Terror", "Wings of Protection", "Wings of Revenge"] },
            { name: "Airshow Expert", items: ["Experimental Glider", "Improved Glider", "Enhanced Glider", "Ultimate Glider"] }
        ]
    },
    {
        grandparent: "ShapeShifter",
        parents: [
            { name: "Pretty Darn Adorable", items: ["Tabby Sabrefang", "White Wolfhound", "Mini-Miner Nanobot", "Steelspine Thornboar"] },
            { name: "Soaring High", items: ["Fledgling Phoenix", "Violet Bloomfang", "Kindled Spirit"] },
            { name: "Hellish Blood", items: ["Hellish Blood Pet", "Pygmy Fiend", "Little Witch", "Hellhound"] },
            { name: "Forest Stalker", items: ["Forest Stalker Pet", "Wisdom Tree Pet", "Greenman Pet", "Arctic Kitsu Whistle"] },
            { name: "Star Guardian", items: ["Star Guardian Pet", "Dreamwinder", "Narayana Squire", "Conker's Cube"] },
            { name: "Night Seeker", items: ["Night Seeker Pet", "Black Sabrefang", "Black Bloomfang", "Grim Reaver"] },
            { name: "Unapologetically Unique", items: ["Sea Turtle Pet", "Peeper Pot", "Bloodclaw Ursun"] },
            { name: "Kissed by Evil", items: ["Kissed by Evil Pet", "Captured Windlord", "Captured Wanderer", "Tamed Blackscale Corps Deceiver", "Tamed Twinhead Viper"] }
        ]
    },
    {
        grandparent: "Strada",
        parents: [
            { name: "Sailor", items: ["Scroll: Harpoon Clipper", "Scroll: Adventurer's Clipper"] },
            { name: "Master of the Sea", items: ["Scroll: Eznan Cutter", "Scroll: Lutesong Junk", "Scroll: Growling Yawl"] },
            { name: "Gone Fishing", items: ["Scroll: Lonely Isle Dinghy", "Scroll: Winged Love Paddleboat", "Scroll: Moby Drake", "Scroll: Fish-Find Longliner"] },
            { name: "Speed Devil", items: ["Scroll: Redwood Roadster", "Scroll: Apex Drift", "Scroll: Nova Speedster", "Scroll: Maxxed Steambike"] },
            { name: "Sea Explorer", items: ["Ruby Steamfish Submarine", "Lapis Steamfish Submarine", "Platinum Steamfish Submarine"] },
            { name: "Siege Captain", items: ["Scroll: Wheeled Mortar", "Scroll: Fire Ironclad", "Scroll: Ironclad"] },
            { name: "Urban Chameleon", items: ["Scroll: Red Rudolph Freighter Chroma", "Scroll: Rampage Chroma", "Scroll: Seaskimmer Speedboat", "Scroll: Merchant Schooner", "Cogwheel Longboard", "Scroll: Turtlecraft"] },
            { name: "Erenor Dasher", items: ["Erenor Dasher Mount"] }
        ]
    },
    {
        grandparent: "Tuskora",
        parents: [
            { name: "Terrestrial Conqueror", items: ["Tamed Ant", "Tamed Boar", "Tamed Mandragora", "Tamed Starfish", "Tamed Crab", "Tamed Tsunami Elemental", "Tamed Turtle"] },
            { name: "Champion of the Sea", items: ["Tamed Bladewing", "Tamed Jabberwock", "Tamed Scorpion"] },
            { name: "Oddly Cute", items: ["Tamed Razorbeak", "Tamed Owl", "Tamed Honeybee"] },
            { name: "Winged Warrior", items: ["Tamed Bat", "Tamed Skyfin"] }
        ]
    },
    {
        grandparent: "Fashion Icon",
        parents: [
            { name: "Warrior Wardrobe", items: ["Shock Conqueror Plate", "Siege Captain's Mail", "Oathbound Plate", "Dread Guard Armor"] },
            { name: "Hero Habiliments", items: ["Kyprosa's Winter Furs", "Inoch's Battle Robes", "Tahyang's Battle Plate", "Orchidna's Snakeskin Shroud", "Immortal Guardian's Robes"] },
            { name: "Summer Swimwear", items: ["Slightly Sizzling Swimwear", "Hot Summer Bikini", "Beachside Vacation"] },
            { name: "Dark Tear Dresses", items: ["Dark Tear Steampunk Dress", "Abyssal Adornments"] },
            { name: "Casual Clothes", items: ["Skyline Waistcoat Ensemble", "Lavender Light", "Red Noble's Whimsy"] },
            { name: "Outlaw Outfits", items: ["Prisoner's Pride", "Arrogant Duelist", "Lawkeeper Costume"] },
            { name: "Gorgeous Garbs", items: ["Royal's Dress", "Imperial Uniform"] },
            { name: "Frightening Fashion", items: ["Black Night Costume", "Evergreen Suit", "Eclipse Knight", "Bloodmaw Eveningwear", "Pumpkin Charmer", "Lucky New Year's", "Ebongleam Dynasty Robes"] }
        ]
    },
    {
        grandparent: "Crazy Cat Person",
        parents: [
            { name: "", items: ["Cutie Collection", "Kitty Onesie", "Puppy Onesie", "True Blue Yata Costume"] }
        ]
    }
];