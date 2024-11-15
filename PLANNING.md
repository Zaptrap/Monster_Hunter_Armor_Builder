# Monster Hunter Armor Set Builder/Editor

## API
API Source: https://mhw-db.com

## Summary/Idea

With this application, Monster Hunter players, both noobs and professionals, can be able to look over all the available armor sets, and even individual armor pieces of said set, to look over what armor skills they have, the total number of decoration slots available to utilize, what elemental resistences are provided, what specific total crafting materials are needed, and with it, you can be able to create a custom "mixed" armor set of different pieces from different armor sets. Allowing users to see the best combinations of armor skills and stats to better optimize their preformences

## MVP Features
1. a homepage that will randomly display a full set of in-game armor periodically, equipped with pictures and armor skills to see
2. a custom armor builder function to allow users to build an armor set with different varying equipment to better optimize skills
3. an "encyclopedia" of in-game armor sets to give the user oppertunities to see all available options.

## User Stories

- as a user, I want to be able to see all available armor sets in an index, ranking from low-rank to high-rank, to G/Master-rank. I should also be able to see an index for the different armor set skills, and a description for what each oone does when I click one.
- as a user, when searching for specific armor sets/pieces by different qualifications, such as for different skill I'm looking to max out, or by name of armor set/piece, or by crafting material, I should be able to type in the search bar for keywords to what I'm searching, and the armor sets/pieces that are in relation to what I'm looking for should appear in the search results
- as a user, I should be able to create a custom armor set of mixed parts. The custom page should display the arrangements of the set for Head, Torso, Wrists, Leggings and Boots. To do this, I should be able to have an option to look at individual armor sets for their parts, be to look at each individual part of the set occupying a different part of the body (Head, Torso, Wrists, Leggings, Boots), and have an "ADD TO SET" component to each piece, and have that desired piece appear in an custom armor page. the Custom armor page should be able to display an option to create a new armor set, and see what aromr sets I've created so far. I should able to build a set by specifically applying a piece of armor to a specific part of the body (ie. Head, Torso, Wrists, Leggings, Boots)
- as a user, I should be able to save a full armor set I've fully created
- as a user, if I don't like an individual piece in my custom armor set I am CURRENTLY creating, I must have the option to remove that said specific part with an "REMOVE FROM SET" component. If I don't like the armor set as a whole I'm currently creating, I should have a "RESET ARMOR SET" component to allow for me to wipe the whole set, and start from a new clean slate.
- as a user, I should be able to see the total armor skill points armor skills and total defense points add up, along side the total number of decor slots available on the set, and be displayed.
*ex: if 3 armor pieces in your set with an armor skill of values of 3, 5 and 2 for each respectively, the total number of skill points for that particular skill should display 10
- as a user, if I alreay made an exist custom set, but would like to tweak it a bit and replace one armor piece with a new one, I should be able to ennter an edit page that existing current set , and be able to edit the set, allowing me to remove that piece I no longer want, and then save and display the current set as is, even its missing a piece of armor for that part of the body (Head, Torso, Wrists, Leggings, Boots). I should be able to then add new piece of armor for that missing part of the body.
- as a user, I have a already existing armor set I no longer like, I should be able to delete that armor set.

## Technologies Use
-HTML
-CSS
-Javascript
-REACT VITE
-Tailwind