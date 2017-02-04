const drinkList = [
  {
      name: "A Night In Old Mandalay",
      ingredients: [ 'Light rum', 'Añejo rum', 'Orange juice', 'Lemon juice', 'Ginger ale', 'Lemon peel'],
      instructions: "In a shaker half-filled with ice cubes, combine the light rum, añejo rum, orange juice, and lemon juice. Shake well. Strain into a highball glass almost filled with ice cubes. Top with the ginger ale. Garnish with the lemon twist.",
      glass: 'Highball glass'
  },

  {
      name: "Abbey Cocktail",
      ingredients: [ 'Gin', 'Orange bitters', 'Orange', 'Cherry'],
      instructions: "Shake all ingredients (except for the cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "A. J.",
      ingredients: [ 'Applejack', 'Grapefruit juice'],
      instructions: "Shake ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "A Furlong Too Late",
      ingredients: [ 'Light rum', 'Ginger beer', 'Lemon peel'],
      instructions: "Pour the rum and ginger beer into a highball glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
      glass: 'Highball glass'
  },

  {
      name: "Abilene",
      ingredients: [ 'Dark rum', 'Peach nectar', 'Orange juice'],
      instructions: "Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well.",
      glass: 'Highball glass'
  },

  {
      name: "Acapulco",
      ingredients: [ 'Light rum', 'Triple sec', 'Lime juice', 'Sugar', 'Egg white', 'Mint'],
      instructions: "Combine and shake all ingredients (except mint) with ice and strain into an old-fashioned glass over ice cubes. Add the sprig of mint and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Adam",
      ingredients: [ 'Dark rum', 'Lemon juice', 'Grenadine'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Adonis Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Sherry', 'Orange bitters'],
      instructions: "Stir all ingredients with ice, strain contents into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Affair",
      ingredients: [ 'Strawberry schnapps', 'Orange juice', 'Cranberry juice', 'Club soda'],
      instructions: "Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.",
      glass: 'Highball glass'
  },

  {
      name: "After Supper Cocktail",
      ingredients: [ 'Triple sec', 'Apricot brandy', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "After Dinner Cocktail",
      ingredients: [ 'Apricot brandy', 'Triple sec', 'Lime', 'Lime'],
      instructions: "Shake all ingredients (except lime wedge) with ice and strain into a cocktail glass. Add the wedge of lime and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Affinity",
      ingredients: [ 'Scotch', 'Sweet Vermouth', 'Dry Vermouth', 'Orange bitters'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Alabama Slammer",
      ingredients: [ 'Southern Comfort', 'Amaretto', 'Sloe gin', 'Lemon juice'],
      instructions: "Pour all ingredients (except for lemon juice) over ice in a highball glass. Stir, add a dash of lemon juice, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Alaska Cocktail",
      ingredients: [ 'Orange bitters', 'Gin', 'Yellow Chartreuse', 'Lemon peel'],
      instructions: "Stir all ingredients with ice, strain contents into a cocktail glass. Drop in a twist of lemon and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Alexander #2",
      ingredients: [ 'Gin', 'Creme de Cacao', 'Light cream', 'Nutmeg'],
      instructions: "Shake all ingredients (except nutmeg) with ice and strain into a cocktail glass. Sprinkle nutmeg on top and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Alexander",
      ingredients: [ 'Gin', 'Creme de Cacao', 'Light cream', 'Nutmeg'],
      instructions: "Shake all ingredients (except nutmeg) with ice and strain into a cocktail glass. Sprinkle nutmeg on top and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Alexander's Big Brother",
      ingredients: [ 'Gin', 'Blue Curacao', 'Heavy cream'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Brandy Alexander",
      ingredients: [ 'Brandy', 'Creme de Cacao', 'Light cream', 'Nutmeg'],
      instructions: "Shake all ingredients (except nutmeg) with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Alexander's Sister",
      ingredients: [ 'Gin', 'Green Creme de Menthe', 'Heavy cream', 'Nutmeg'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, creme de menthe, and heavy cream. Shake well. Strain into a cocktail glass and garnish with the nutmeg.",
      glass: 'Cocktail glass'
  },

  {
      name: "Alfie Cocktail",
      ingredients: [ 'Lemon vodka', 'Triple sec', 'Pineapple juice'],
      instructions: "Combine and shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Algonquin",
      ingredients: [ 'Blended whiskey', 'Dry Vermouth', 'Pineapple juice'],
      instructions: "Combine and shake all ingredients with ice, strain contents into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Allegheny",
      ingredients: [ 'Dry Vermouth', 'Bourbon', 'Blackberry brandy', 'Lemon juice', 'Lemon peel'],
      instructions: "Shake all ingredients (except lemon peel) with ice and strain into a cocktail glass. Top with the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Allies Cocktail",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Kummel'],
      instructions: "Stir all ingredients with ice, strain contents into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Almeria",
      ingredients: [ 'Dark rum', 'Kahlua', 'Egg white'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Almond Joy",
      ingredients: [ 'Amaretto', 'Creme de Cacao', 'Light cream'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Amaretto And Cream",
      ingredients: [ 'Amaretto', 'Light cream'],
      instructions: "Shake well with cracked ice, strain contents into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Amaretto Mist",
      ingredients: [ 'Amaretto', 'Lime'],
      instructions: "Pour amaretto in an old-fashioned glass over crushed ice. Add the wedge of lime and serve. (A wedge of lemon may be substituted for lime, if preferred.)",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Amaretto Rose",
      ingredients: [ 'Amaretto', 'Lime juice', 'Club soda'],
      instructions: "Pour amaretto and lime juice over ice in a collins glass. Fill with club soda and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Amaretto Stinger",
      ingredients: [ 'Amaretto', 'White Creme de Menthe'],
      instructions: "Shake ingredients well with cracked ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Amaretto Tea",
      ingredients: [ 'Tea', 'Amaretto', 'Whipped cream'],
      instructions: "Pour hot tea into a pousse-cafe glass, using a spoon in glass to prevent cracking. Add amaretto, but do not stir. Top with chilled whipped cream and serve.",
      glass: 'Pousse cafe glass'
  },

  {
      name: "Ambrosia",
      ingredients: [ 'Applejack', 'Brandy', 'Triple sec', 'Lemon', 'Champagne'],
      instructions: "Combine and shake all ingredients (except champagne). Pour contents into a highball glass over ice cubes. Fill with chilled champagne, stir lightly, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "American Beauty",
      ingredients: [ 'Brandy', 'Dry Vermouth', 'White Creme de Menthe', 'Orange juice', 'Grenadine', 'Tawny port'],
      instructions: "In a shaker half-filled with ice cubes, combine the brandy, vermouth, creme de menthe, orange juice, and grenadine. Shake well. Strain into a cocktail glass. Pouring slowly and carefully, float the port on top.",
      glass: 'Cocktail glass'
  },

  {
      name: "Andalusia",
      ingredients: [ 'Light rum', 'Sherry', 'Brandy'],
      instructions: "Stir all ingredients well with cracked ice, strain contents into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Angel Face",
      ingredients: [ 'Apricot brandy', 'Apple brandy', 'Gin'],
      instructions: "Stir all ingredients well with cracked ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Angel's Kiss",
      ingredients: [ 'Creme de Cacao', 'Sloe gin', 'Brandy', 'Light cream'],
      instructions: "Pour ingredients carefully, in order given, into a pousse-cafe glass so that they do not mix.",
      glass: 'Pousse cafe glass'
  },

  {
      name: "Angler's Cocktail",
      ingredients: [ 'Gin', 'Grenadine', 'Bitters', 'Orange bitters'],
      instructions: "Shake all ingredients with cracked ice, pour contents into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Angel's Wing",
      ingredients: [ 'Creme de Cacao', 'Brandy', 'Light cream'],
      instructions: "Pour ingredients carefully, in order given, into a pousse-cafe glass so that they do not mix. Serve without mixing.",
      glass: 'Pousse cafe glass'
  },

  {
      name: "Ante",
      ingredients: [ 'Apple brandy', 'Triple sec', 'Dubonnet Rouge'],
      instructions: "Stir all ingredients well with cracked ice, strain contents into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Antoine Special",
      ingredients: [ 'Dubonnet Blanc', 'Dry Vermouth'],
      instructions: "Float vermouth on top of chilled Dubonnet in a red wine glass and serve.",
      glass: 'Red wine glass'
  },

  {
      name: "Apple Blow Fizz",
      ingredients: [ 'Apple brandy', 'Lemon', 'Powdered sugar', 'Egg white', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Apple Brandy Highball",
      ingredients: [ 'Apple brandy', 'Carbonated water', 'Lemon peel'],
      instructions: "Pour apple brandy over ice cubes in a highball glass. Fill with carbonated water and stir. Add a twist of lemon peel on top and serve. (Ginger ale may be substituted for carbonated water, if preferred.)",
      glass: 'Highball glass'
  },

  {
      name: "Apple Brandy Sour",
      ingredients: [ 'Apple brandy', 'Powdered sugar', 'Lemon', 'Lemon', 'Cherry'],
      instructions: "Shake apple brandy, powdered sugar, and juice of lemon with ice and strain into a whiskey sour glass. Decorate with a half-slice of lemon, top with the cherry, and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Apple Colada",
      ingredients: [ 'Apple schnapps', 'Cream of coconut', 'Half-and-half', 'Apple', 'Cherry'],
      instructions: "Blend schnapps, cream of coconut, half-and-half, and 2 cups of crushed ice in an electric blender at a high speed. Pour contents into a collins glass. Decorate with an apple slice and a cherry. Serve with a straw.",
      glass: 'Collins glass'
  },

  {
      name: "Apple Pie",
      ingredients: [ 'Light rum', 'Sweet Vermouth', 'Applejack', 'Lemon juice', 'Grenadine'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Apple Rum Rickey",
      ingredients: [ 'Light rum', 'Applejack', 'Lime', 'Carbonated water'],
      instructions: "Pour applejack and rum into a highball glass over ice cubes. Fill with carbonated water. Squeeze lime and drop in glass. Stir and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Applecar",
      ingredients: [ 'Applejack', 'Triple sec', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Appled Rum Cooler",
      ingredients: [ 'Añejo rum', 'Applejack', 'Lime juice', 'Club soda'],
      instructions: "In a shaker half-filled with ice cubes, combine the rum, applejack, and lime juice. Shake well. Strain into an old-fashioned glass almost filled with ice cubes. Top with the club soda.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Apricot Cocktail",
      ingredients: [ 'Gin', 'Apricot brandy', 'Lemon', 'Orange'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Apricot Anise Collins",
      ingredients: [ 'Apricot brandy', 'Gin', 'Anisette', 'Lemon juice', 'Carbonated water', 'Lemon'],
      instructions: "Shake gin, brandy, anisette, and lemon juice with ice and strain into a collins glass over ice cubes. Fill with carbonated water and stir lightly. Decorate with the slice of lemon and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Apricot Lady",
      ingredients: [ 'Light rum', 'Apricot brandy', 'Triple sec', 'Lemon juice', 'Egg white', 'Orange'],
      instructions: "In a shaker half-filled with ice cubes, combine the rum, apricot brandy, triple sec, lemon juice, and egg white. Shake well. Strain into an old-fashioned glass almost filled with ice cubes. Garnish with the orange slice.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Arcadia",
      ingredients: [ 'Gin', 'Galliano', 'Creme de Banane', 'Grapefruit juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Archbishop",
      ingredients: [ 'Gin', 'Wine', 'Benedictine', 'Lime'],
      instructions: "In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Arise My Love",
      ingredients: [ 'Champagne', 'Green Creme de Menthe'],
      instructions: "Put creme de menthe into a champagne flute. Fill with chilled champagne and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Arthur Tompkins",
      ingredients: [ 'Gin', 'Grand Marnier', 'Lemon juice', 'Lemon peel'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, Grand Marnier, and lemon juice. Shake well. Strain into a sour glass and garnish with the lemon twist.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Artillery",
      ingredients: [ 'Sweet Vermouth', 'Gin', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "B And B",
      ingredients: [ 'Brandy', 'Benedictine'],
      instructions: "Float brandy on top of Benedictine in a cordial glass without mixing and serve.",
      glass: 'Cordial glass'
  },

  {
      name: "Babbie's Special Cocktail",
      ingredients: [ 'Apricot brandy', 'Gin', 'Light cream'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bacardi Cocktail",
      ingredients: [ 'Light rum', 'Lime juice', 'Sugar syrup', 'Grenadine'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bahama Mama",
      ingredients: [ 'Coffee liqueur', 'Dark rum', 'Coconut liqueur', '151 proof rum', 'Lemon', 'Pineapple juice'],
      instructions: "Combine all ingredients and pour over cracked ice in a collins glass. Decorate with a strawberry or cherry and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Balmoral",
      ingredients: [ 'Scotch', 'Sweet Vermouth', 'Dry Vermouth', 'Bitters'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Baltimore Bracer",
      ingredients: [ 'Brandy', 'Anisette', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Baltimore Eggnog",
      ingredients: [ 'Rum', 'Brandy', 'Madeira', 'Egg', 'Powdered sugar', 'Milk'],
      instructions: "Shake all ingredients well with cracked ice and strain into a collins glass. Sprinkle nutmeg on top and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Banana Cow",
      ingredients: [ 'Light rum', 'Creme de Banane', 'Cream', 'Grenadine', 'Banana', 'Nutmeg'],
      instructions: "Shake rum, creme de banana, cream, and grenadine with crushed ice and strain into a cocktail glass. Decorate with the banana slice, sprinkle nutmeg on top, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Banana Daiquiri",
      ingredients: [ 'Light rum', 'Triple sec', 'Banana', 'Lime juice', 'Sugar', 'Cherry'],
      instructions: "Combine all ingredients (except for the cherry) with 1 cup crushed ice in an electric blender. Blend at a low speed for five seconds, then blend at a high speed until firm. Pour contents into a champagne flute, top with the cherry, and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Banana Punch #1",
      ingredients: [ 'Apricot brandy', 'Vodka', 'Lime', 'Banana', 'Carbonated water', 'Mint'],
      instructions: "Pour brandy, vodka, and juice of lime into a collins glass over crushed ice. Fill with carbonated water and stir. Decorate with banana slices and mint sprigs and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Banana Rum Cream",
      ingredients: [ 'Dark rum', 'Creme de Banane', 'Light cream'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Barbary Coast",
      ingredients: [ 'Scotch', 'Gin', 'Rum', 'Creme de Cacao', 'Light cream'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Baron Cocktail",
      ingredients: [ 'Dry Vermouth', 'Sweet Vermouth', 'Triple sec', 'Gin', 'Lemon'],
      instructions: "Stir all ingredients (except lemon wedge) with ice and strain into a cocktail glass. Add the lemon wedge and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Barrier Breaker",
      ingredients: [ 'Dark rum', 'Galliano', 'Dark Creme de Cacao', 'Coffee', 'Ice'],
      instructions: "Pour all of the ingreedients into an Irish coffee glass filled with crushed ice. Stir well.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Barton Special",
      ingredients: [ 'Applejack', 'Gin', 'Scotch'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Basic Bill",
      ingredients: [ 'Añejo rum', 'Dubonnet Rouge', 'Grand Marnier', 'Bitters'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Batida Abacaxi",
      ingredients: [ 'Cachaca', 'Pineapple', 'Sugar', 'Ice'],
      instructions: "Place all of the ingredients into a blender. Blend well. Pour into a wine glass.",
      glass: 'White wine glass'
  },

  {
      name: "Batida Mango",
      ingredients: [ 'Cachaca', 'Mango', 'Sugar', 'Ice'],
      instructions: "Place all of the ingredients into a blender. Blend well. Pour into a wine glass.",
      glass: 'White wine glass'
  },

  {
      name: "Batida Morango",
      ingredients: [ 'Cachaca', 'Strawberries', 'Sugar', 'Ice'],
      instructions: "Place all of the ingredients into a blender. Blend well. Pour into a wine glass.",
      glass: 'White wine glass'
  },

  {
      name: "Beachcomber",
      ingredients: [ 'Sugar', 'Lime', 'Light rum', 'Maraschino liqueur', 'Cherry brandy', 'Lime juice'],
      instructions: "Place sugar in a saucer. Rub the rim of a cocktail glass with lime wedge and dip glass into sugar to coat rim thoroughly, reserve lime. In a shaker half-filled with ice cubes, combine rum, maraschino liqueur, cherry brandy, and lime juice. Shake well.",
      glass: 'Cocktail glass'
  },

  {
      name: "Beadlestone Cocktail",
      ingredients: [ 'Dry Vermouth', 'Scotch'],
      instructions: "Stir ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Beal's Cocktail",
      ingredients: [ 'Dry Vermouth', 'Sweet Vermouth', 'Scotch'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Beauty Spot Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Dry Vermouth', 'Gin', 'Orange juice', 'Grenadine'],
      instructions: "Pour a dash of grenadine in a cocktail glass. Shake remaining ingredients with ice, strain into glass over grenadine, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bee Stinger",
      ingredients: [ 'Blackberry brandy', 'White Creme de Menthe'],
      instructions: "Shake ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Belles Of St. Mary's",
      ingredients: [ 'Gin', 'Triple sec', 'Apricot brandy', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bengal",
      ingredients: [ 'Brandy', 'Maraschino liqueur', 'Triple sec', 'Pineapple juice', 'Bitters'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bennett Cocktail",
      ingredients: [ 'Gin', 'Lime', 'Powdered sugar', 'Orange bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bentley",
      ingredients: [ 'Calvados', 'Dubonnet Rouge', 'Lemon peel'],
      instructions: "Stir Calvados and Dubonnet with cracked ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bermuda Highball",
      ingredients: [ 'Brandy', 'Gin', 'Dry Vermouth', 'Carbonated water', 'Lemon peel'],
      instructions: "Pour brandy, gin, and dry vermouth into a highball glass over ice cubes. Fill with carbonated water and stir. Add the twist of lemon and serve. (Ginger ale may be substituted for carbonated water, if preferred.)",
      glass: 'Highball glass'
  },

  {
      name: "Bermuda Rose",
      ingredients: [ 'Apricot brandy', 'Gin', 'Grenadine'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bernardo",
      ingredients: [ 'Gin', 'Triple sec', 'Lemon juice', 'Bitters', 'Lemon peel'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, triple sec, lemon juice, and bitters. Shake well. Strain into a cocktail glass and garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Betsy Ross",
      ingredients: [ 'Ice', 'Brandy', 'Tawny port', 'Triple sec'],
      instructions: "In a mixing glass half-filled with crushed ice, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Between The Sheets",
      ingredients: [ 'Brandy', 'Light rum', 'Triple sec', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Biffy Cocktail",
      ingredients: [ 'Gin', 'Swedish Punsch', 'Lemon'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bijou Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Gin', 'Green Chartreuse', 'Orange bitters', 'Cherry'],
      instructions: "Shake all ingredients (except the cherry) with ice and strain into a cocktail glass. Add the cherry on top and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bikini",
      ingredients: [ 'Light rum', 'Vodka', 'Milk', 'Sugar', 'Lemon', 'Lemon peel'],
      instructions: "Shake rum, vodka, milk, sugar, and juice of lemon with ice and strain into a cocktail glass. Decorate with a twist of lemon and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Billy Taylor",
      ingredients: [ 'Gin', 'Lime', 'Carbonated water'],
      instructions: "Pour gin and juice of lime into a collins glass over ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Bishop",
      ingredients: [ 'Lemon', 'Orange', 'Powdered sugar', 'Red wine'],
      instructions: "Shake juice of lemon, juice of orange, and powdered sugar with ice and strain into a highball glass. Add two ice cubes, fill with burgundy, and stir well. Decorate with various fruits and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Bitch-On-Wheels",
      ingredients: [ 'Gin', 'Dry Vermouth', 'White Creme de Menthe', 'Pernod'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Black Baltimore",
      ingredients: [ 'Brandy', 'Black Sambuca', 'Egg white'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Black Devil",
      ingredients: [ 'Dry Vermouth', 'Light rum', 'Olive'],
      instructions: "Stir rum and vermouth with cracked ice and strain into a cocktail glass. Top with the black olive and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Black Hawk",
      ingredients: [ 'Blended whiskey', 'Sloe gin', 'Cherry'],
      instructions: "Stir blended whiskey and sloe gin with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Blackjack #1",
      ingredients: [ 'Scotch', 'Kahlua', 'Triple sec', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old-fashioned glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Black Maria",
      ingredients: [ 'Coffee brandy', 'Light rum', 'Coffee', 'Powdered sugar'],
      instructions: "Combine and stir all ingredients in a brandy snifter. Add cracked ice and serve.",
      glass: 'Brandy snifter'
  },

  {
      name: "Black Monday",
      ingredients: [ 'Dark rum', 'Black Sambuca', 'Cherry brandy', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Black Pagoda",
      ingredients: [ 'Brandy', 'Sweet Vermouth', 'Dry Vermouth', 'Triple sec'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Black Russian",
      ingredients: [ 'Coffee liqueur', 'Vodka'],
      instructions: "Pour ingredients over ice cubes in an old-fashioned glass and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Blackjack #2",
      ingredients: [ 'Brandy', 'Kirschwasser', 'Coffee'],
      instructions: "Shake all ingredients with cracked ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Blackthorn",
      ingredients: [ 'Sweet Vermouth', 'Sloe gin', 'Lemon peel'],
      instructions: "Stir sloe gin and vermouth with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Blarney Stone Cocktail",
      ingredients: [ 'Irish whiskey', 'Anis', 'Triple sec', 'Maraschino liqueur', 'Orange peel', 'Olive'],
      instructions: "Shake Irish whiskey, anis, triple sec, and maraschino with ice and strain into a cocktail glass. Add the twist of orange peel, top with the olive, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Blimey",
      ingredients: [ 'Scotch', 'Lime juice', 'Sugar'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake wel. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Blinder",
      ingredients: [ 'Scotch', 'Grapefruit juice', 'Grenadine'],
      instructions: "Pour the scotch and grapefruit juice into a highball glass alomst filled with ice cubes. Drop the grenadine into the center of the drink.",
      glass: 'Highball glass'
  },

  {
      name: "Bloodhound Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Dry Vermouth', 'Gin', 'Strawberries'],
      instructions: "Shake all ingredients (except strawberries) with ice and strain into a cocktail glass. Decorate with the 3 crushed strawberries and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bloody Bull",
      ingredients: [ 'Vodka', 'Tomato juice', 'Beef bouillon', 'Lime', 'Lemon'],
      instructions: "Pour vodka, tomato juice, and beef bouillon over ice in a highball glass and stir. Add the slice of lime and the wedge of lemon and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Bloody Maria",
      ingredients: [ 'Tequila', 'Tomato juice', 'Lemon juice', 'Tabasco sauce', 'Celery salt', 'Lemon'],
      instructions: "Shake all ingredients (except lemon slice) with cracked ice and strain into an old-fashioned glass over ice cubes. Add the slice of lemon and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Bloody Mary",
      ingredients: [ 'Vodka', 'Tomato juice', 'Lemon juice', 'Worcestershire sauce', 'Tabasco sauce', 'Lime'],
      instructions: "Shake all ingredients (except lime wedge) with ice and strain into an old-fashioned glass over ice cubes. Add salt and pepper to taste. Add the wedge of lime and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Blue Cowboy",
      ingredients: [ 'Ice', 'Gin', 'Blue Curacao'],
      instructions: "In a mixing glass half-filled with crushed ice, combine both of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Blue Devil Cocktail",
      ingredients: [ 'Gin', 'Lemon', 'Maraschino liqueur', 'Blue Curacao'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Blue Hawaiian",
      ingredients: [ 'Light rum', 'Pineapple juice', 'Blue Curacao', 'Cream of coconut', 'Pineapple', 'Cherry'],
      instructions: "Blend light rum, blue curacao, pineapple juice, and cream of coconut with one cup ice in an electric blender at high speed. Pour contents into a highball glass. Decorate with the slice of pineapple and a cherry.",
      glass: 'Highball glass'
  },

  {
      name: "Blue Lagoon",
      ingredients: [ 'Vodka', 'Blue Curacao', 'Lemonade', 'Cherry'],
      instructions: "Pour vodka and curacao over ice in a highball glass. Fill with lemonade, top with the cherry, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Blue Margarita",
      ingredients: [ 'Tequila', 'Blue Curacao', 'Lime juice', 'Salt'],
      instructions: "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Blue Mountain",
      ingredients: [ 'Añejo rum', 'Tia maria', 'Vodka', 'Orange juice', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old-fashioned glass alomst filled with ice cubes.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Bluebird",
      ingredients: [ 'Gin', 'Triple sec', 'Blue Curacao', 'Bitters', 'Maraschino cherry', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with crushed ice, combine the gin, triple sec, Curacao, and bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist and the cherry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bobby Burns Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Scotch', 'Benedictine', 'Lemon peel'],
      instructions: "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bolero",
      ingredients: [ 'Apple brandy', 'Light rum', 'Sweet Vermouth'],
      instructions: "Stir all ingredients well with cracked ice. Strain into a cocktail glass and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bombay Cocktail",
      ingredients: [ 'Dry Vermouth', 'Sweet Vermouth', 'Brandy', 'Triple sec', 'Anis'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Boomerang",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Bitters', 'Maraschino liqueur', 'Maraschino cherry'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the gin, vermouth, bitters, and maraschino liqueur. Stir well. Strain into a cocktail glass and garnish with the cherry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bosom Caresser",
      ingredients: [ 'Ice', 'Brandy', 'Madeira', 'Triple sec'],
      instructions: "In a mixing glass half-filled with crushed ice, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Border Crossing",
      ingredients: [ 'Tequila', 'Lime juice', 'Lemon juice', 'Coca-Cola', 'Lime'],
      instructions: "Pour the tequila, lime juice, lemon juice, and cola into a highball glass almost filled with ice cubes. Stir well and garnish with the lime wedge.",
      glass: 'Highball glass'
  },

  {
      name: "Boston Cocktail",
      ingredients: [ 'Gin', 'Apricot brandy', 'Grenadine', 'Lemon'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Boston Sidecar",
      ingredients: [ 'Light rum', 'Brandy', 'Triple sec', 'Lime'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Boston Sour",
      ingredients: [ 'Blended whiskey', 'Lemon', 'Powdered sugar', 'Egg white', 'Lemon', 'Cherry'],
      instructions: "Shake juice of lemon, powdered sugar, blended whiskey, and egg white with cracked ice and strain into a whiskey sour glass. Add the slice of lemon, top with the cherry, and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Bourble",
      ingredients: [ 'Bourbon', 'Triple sec', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bourbon Black Hawk",
      ingredients: [ 'Bourbon', 'Sloe gin', 'Maraschino cherry'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the bourbon and sloe gin. Stir and strain into a cocktail glass. Garnish with the cherry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bourbon and Branch",
      ingredients: [ 'Bourbon', 'Water'],
      instructions: "Pour the bourbon and water into a highball glass almost filled with ice cubes.",
      glass: 'Highball glass'
  },

  {
      name: "Bourbon Black Hawk #2",
      ingredients: [ 'Bourbon', 'Sloe gin', 'Lemon juice', 'Sugar', 'Maraschino cherry'],
      instructions: "In a shaker half-filled with ice cubes, combine the bourbon, sloe gin, lemon juice, and sugar. Shake well. Strain into a cocktail glass. Garnish with the cherry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bourbon Cobbler #1",
      ingredients: [ 'Sugar', 'Club soda', 'Maraschino cherry', 'Orange', 'Lemon', 'Bourbon'],
      instructions: "In an old-fashioned glass, dissolve the sugar in the club soda. Add crushed ice until the glass is almost full. Add the bourbon and stir well. Garnish with the cherry, orange and lemon slices.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Bourbon Cobbler #2",
      ingredients: [ 'Sugar', 'Club soda', 'Bourbon', 'Pineapple', 'Strawberries', 'Lime'],
      instructions: "In a large wine glass, dissolve the sugar in the club soda. Almost will the glass with crushed ice. Add the bourbon. Garnish with starwberry, lime and pineapple wedges.",
      glass: 'White wine glass'
  },

  {
      name: "Bourbon Cooler",
      ingredients: [ 'Bourbon', 'Lemon-lime soda', 'Lemon'],
      instructions: "Pour the bourbon and the soda into a highball glass almost filled with ice cubes. Stir well. Garnish with the lemon wedge.",
      glass: 'Highball glass'
  },

  {
      name: "Bourbon County Cowboy",
      ingredients: [ 'Bourbon', 'Light cream'],
      instructions: "In a shaker half-filled with ice cubes, combine the bourbon and cream. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bourbon Daisy",
      ingredients: [ 'Bourbon', 'Lemon juice', 'Grenadine', 'Sugar', 'Orange', 'Maraschino cherry'],
      instructions: "In a shaker half-filled with ice cubes, combine the bourbon, lemon juice, grenadine, and sugar. Shake well. Pour into an old-fashioned glass. Garnish with the orange slice and the cherry.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Bourbon Fix",
      ingredients: [ 'Sugar', 'Lemon juice', 'Water', 'Bourbon', 'Maraschino cherry', 'Lemon'],
      instructions: "In a shaker half-filled with ice cubes, combine the sugar, lemon juice, and water. Shake well. Strain into a highball glass almost filled with crushed ice. Add the bourbon. Stir well and garnish with the cherry and the lemon slice.",
      glass: 'Highball glass'
  },

  {
      name: "Bourbon Flip",
      ingredients: [ 'Bourbon', 'Egg', 'Sugar', 'Light cream', 'Nutmeg'],
      instructions: "In a shaker half-filled with ice cubes, combine the bourbon, egg, sugar, and cream. Shake well. Strain into a sour glass and garnish with the nutmeg.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Bourbon Highball",
      ingredients: [ 'Bourbon', 'Carbonated water', 'Lemon peel'],
      instructions: "Pour bourbon into a highball glass over ice cubes. Fill with carbonated water and stir. Add the twist of lemon peel and serve. (Ginger ale may be substituted for carbonated water, if preferred.)",
      glass: 'Highball glass'
  },

  {
      name: "Bourbon Milk Punch",
      ingredients: [ 'Bourbon', 'Half-and-half', 'Sugar', 'Vanilla extract', 'Nutmeg'],
      instructions: "In a shaker half-filled with ice cubes, combine the bourbon, half-and half, sugar, and vanilla extract. Shake well. Strain into a highball glass and garnish with the nutmeg.",
      glass: 'Highball glass'
  },

  {
      name: "Bourbon Milk Punch #2",
      ingredients: [ 'Sugar', 'Bourbon', 'Milk', 'Cinnamon'],
      instructions: "In a highball glass, dissolve the sugar in the bourbon by stirring with a teaspoon. Add 6 ice cubes and the milk. Stir well. Garnish with the cinnamon.",
      glass: 'Highball glass'
  },

  {
      name: "Bourbon Milk Punch #3",
      ingredients: [ 'Bourbon', 'Dark Creme de Cacao', 'Milk', 'Nutmeg'],
      instructions: "In a shaker half-filled with ice cubes, combine the bourbon, creme de cacao, and milk. Shake well. Pour into a highball glass and garnish with the nutmeg.",
      glass: 'Highball glass'
  },

  {
      name: "Classic Old-Fashioned",
      ingredients: [ 'Bitters', 'Water', 'Sugar', 'Bourbon', 'Orange', 'Maraschino cherry'],
      instructions: "In an old-fashioned glass, muddle the bitters and water into the sugar cube, using the back of a teaspoon. Almost fill the glass with ice cubes and add the bourbon. Garnish with the orange slice and the cherry. Serve with a swizzle stick.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Bourbon Sling",
      ingredients: [ 'Sugar', 'Water', 'Lemon juice', 'Bourbon', 'Lemon peel'],
      instructions: "In a shaker half-filled with ice cubes, combine the sugar, water, lemon juice, and bourbon. Shake well. Strain well. Strain into a highball glass. Garnish with the lemon twist.",
      glass: 'Highball glass'
  },

  {
      name: "Bourbon Sour",
      ingredients: [ 'Bourbon', 'Lemon juice', 'Sugar', 'Orange', 'Maraschino cherry'],
      instructions: "In a shaker half-filled with ice cubes, combine the bourbon, lemon juice, and sugar. Shake well. Strain into a whiskey sour glass, garnish with the orange slice and cherry.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Bourbon Swizzle",
      ingredients: [ 'Lime juice', 'Sugar', 'Bourbon', 'Bitters', 'Ice', 'Club soda'],
      instructions: "In a shaker half-filled with ice cubes, combine the lime juice, sugar, bourbon, and bitters. Shake well. Almost fill a collins glass with crushed ice. Stir until glass is frosted. Strain the mixture in the shaker into the glass and add the club soda.",
      glass: 'Collins glass'
  },

  {
      name: "Boxcar",
      ingredients: [ 'Gin', 'Triple sec', 'Lemon juice', 'Grenadine', 'Egg white'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Brainstorm",
      ingredients: [ 'Scotch', 'Benedictine', 'Sweet Vermouth'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Brandied Egg Sour",
      ingredients: [ 'Egg', 'Brandy', 'Triple sec', 'Lemon juice', 'Sugar'],
      instructions: "In a shaker half-filled with ice cubes, crack the egg and add the rest of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Brandied Madeira",
      ingredients: [ 'Brandy', 'Dry Vermouth', 'Madeira', 'Lemon peel'],
      instructions: "Stir all ingredients (except lemon peel) with cracked ice and strain into an old-fashioned glass over ice cubes. Add the twist of lemon peel and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Brandy Alexander #3",
      ingredients: [ 'Brandy', 'Creme de Cacao', 'Heavy cream', 'Nutmeg'],
      instructions: "In a shaker half-filled with ice cubes, combine the brandy, creme de cacao, and cream. Shake well. Strain into a cocktail glass and garnish with the nutmeg.",
      glass: 'Cocktail glass'
  },

  {
      name: "Brandy Alexander #2",
      ingredients: [ 'Brandy', 'Dark Creme de Cacao', 'Half-and-half', 'Nutmeg'],
      instructions: "In a shaker half-filled with ice cubes, combine the brandy, creme de cacao, and half-and-half. Shake well. Strain into a cocktail glass and garnish with the nutmeg.",
      glass: 'Cocktail glass'
  },

  {
      name: "Brandy And Soda",
      ingredients: [ 'Brandy', 'Club soda'],
      instructions: "Pour the brandy and club soda into a collins glass almost filled with ice cubes. Stir well.",
      glass: 'Collins glass'
  },

  {
      name: "Brandy Blazer",
      ingredients: [ 'Sugar', 'Brandy', 'Orange', 'Lemon peel'],
      instructions: "In an old-fashioned glass, dissolve the sugar in brandy. Add the orange slice. Tilt the glass and carefully ignite the drink with a match. Stir with a long spoon until the flame is extinguished. Strain into a punch cup and garnish with the lemon twist.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Brandy Cobbler",
      ingredients: [ 'Sugar', 'Club soda', 'Lemon', 'Brandy', 'Maraschino cherry', 'Orange'],
      instructions: "In an old-fashioned glass, dissolve the sugar in the club soda. Add crushed ice until the glass is almost full. Add the brandy. Stir well. Garnish with the cherry and the orange and lemon slices.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Brandy Cocktail",
      ingredients: [ 'Brandy', 'Sugar syrup', 'Bitters', 'Lemon peel'],
      instructions: "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Brandy Collins",
      ingredients: [ 'Lemon', 'Brandy', 'Powdered sugar', 'Orange', 'Carbonated water', 'Cherry'],
      instructions: "Shake juice of lemon, brandy, and powdered sugar with cracked ice and strain into a collins glass. Add ice cubes, fill with carbonated water, and stir. Garnish with a slice of orange and top with a cherry. Serve with a straw.",
      glass: 'Collins glass'
  },

  {
      name: "Brandy Cooler",
      ingredients: [ 'Brandy', 'Lemon-lime soda', 'Lemon'],
      instructions: "Pour the brandy and the soda into a highball glass almost filled with ice cubes. Stir well. Garnish with the lemon wedge.",
      glass: 'Highball glass'
  },

  {
      name: "Brandy Daisy",
      ingredients: [ 'Brandy', 'Lemon juice', 'Sugar', 'Grenadine', 'Maraschino cherry', 'Orange'],
      instructions: "In a shaker half-filled with ice cubes, combine the brandy, lemon juice, sugar, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the cherry and the orange slice.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Brandy Fix",
      ingredients: [ 'Brandy', 'Lemon', 'Powdered sugar', 'Water', 'Lemon'],
      instructions: "Combine juice of lemon, powdered sugar, and water in a highball glass. Stir, fill with shaved ice, and add brandy. Stir again, add the lemon slice, and serve with a straw.",
      glass: 'Highball glass'
  },

  {
      name: "Brandy Fizz",
      ingredients: [ 'Brandy', 'Lemon juice', 'Sugar', 'Club soda'],
      instructions: "In a shaker half-filled with ice cubes, combine the brandy, lemon juice, and sugar. Shake well. Strain into a highball glass almost filled with ice cubes. Add the club soda. Stir well.",
      glass: 'Highball glass'
  },

  {
      name: "Brandy Flip",
      ingredients: [ 'Brandy', 'Egg', 'Sugar', 'Light cream', 'Nutmeg'],
      instructions: "In a shaker half-filled with ice cubes, combine the brandy, egg, sugar, and cream. Shake well. Strain into a sour glass and garnish with the nutmeg.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Brandy Highball",
      ingredients: [ 'Brandy', 'Carbonated water', 'Lemon peel'],
      instructions: "Pour brandy into a highball glass over ice cubes. Fill with carbonated water, add the twist of lemon peel, stir gently, and serve. (Ginger ale may be substituted for carbonated water, if preferred.)",
      glass: 'Highball glass'
  },

  {
      name: "Brandy Milk Punch",
      ingredients: [ 'Brandy', 'Milk', 'Powdered sugar', 'Nutmeg'],
      instructions: "Shake brandy, milk, and powdered sugar with ice and strain into a collins glass. Sprinkle nutmeg on top and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Brandy Sangaree",
      ingredients: [ 'Brandy', 'Powdered sugar', 'Water', 'Carbonated water', 'Port', 'Nutmeg'],
      instructions: "Dissolve powdered sugar in 1 tsp. water. Add brandy and pour into a highball glass over ice cubes. Fill with carbonated water and stir. Float port on top, sprinkle lightly with nutmeg, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Brandy Sling",
      ingredients: [ 'Sugar', 'Water', 'Lemon juice', 'Brandy', 'Lemon peel'],
      instructions: "In a shaker half-filled with ice cubes, combine the sugar, water, lemon juice, and brandy. Shake well. Strain into an old-fashioned glass. Garnish with the lemon twist.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Brandy Smash",
      ingredients: [ 'Mint', 'Sugar', 'Club soda', 'Brandy', 'Orange', 'Maraschino cherry'],
      instructions: "In an old-fashioned glass, muddle the mint sprigs lightly with the sugar and club soda. Fill the glass with ice cubes. Add the brandy. Stir well and garnish with the orange slice and the cherry.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Brandy Sour",
      ingredients: [ 'Brandy', 'Lemon', 'Powdered sugar', 'Lemon', 'Cherry'],
      instructions: "Shake brandy, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with the lemon slice, top with the cherry, and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Brandy Toddy",
      ingredients: [ 'Brandy', 'Powdered sugar', 'Water', 'Lemon peel'],
      instructions: "Dissolve powdered sugar in 1 tsp. water in an old-fashioned glass. Add brandy and one ice cube and stir. Add twist of lemon peel on top and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Brandy Swizzle",
      ingredients: [ 'Lime juice', 'Sugar', 'Brandy', 'Bitters', 'Ice', 'Club soda'],
      instructions: "In a shaker half-filled with ice cubes, combine the lime juice, sugar, brandy, and bitters. Shake well. Almost fill a collins glass with crushed ice and stir until glass is frosted. Strain the mixture in the shaker into the glass and add the club soda.",
      glass: 'Collins glass'
  },

  {
      name: "Brantini",
      ingredients: [ 'Brandy', 'Dry Vermouth', 'Gin', 'Lemon peel'],
      instructions: "Stir all ingredients (except lemon peel) with cracked ice and strain into an old-fashioned glass over ice cubes. Add the twist of lemon peel and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Brandy Vermouth Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Brandy', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Brave Bull",
      ingredients: [ 'Tequila', 'Coffee liqueur', 'Lemon peel'],
      instructions: "Pour tequila and coffee liqueur over ice cubes in an old-fashioned glass and stir. Add the twist of lemon and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Brazil Cocktail",
      ingredients: [ 'Sherry', 'Dry Vermouth', 'Anis', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Broken Spur Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Port', 'Triple sec'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Brian's Belief",
      ingredients: [ 'Añejo rum', 'Dark Creme de Cacao', 'Lemon juice', 'Sugar', 'Tea'],
      instructions: "In a shaker half-filled with ice cubes, combine the rum, creme de cacao, lemon juice, and sugar. Shake well. Strain into a highball glass almost filled with ice cubes. Top with the tea and stir well.",
      glass: 'Highball glass'
  },

  {
      name: "Bronx Golden Cocktail",
      ingredients: [ 'Dry Vermouth', 'Sweet Vermouth', 'Gin', 'Orange', 'Orange', 'Egg yolk'],
      instructions: "Shake all ingredients (except orange slice) with ice and strain into a whiskey sour glass. Add the orange slice and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Bronx Cocktail (Dry)",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Orange', 'Orange'],
      instructions: "Shake all ingredients (except orange slice) with ice and strain into a cocktail glass. Add orange slice and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bronx Silver Cocktail",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Orange', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a whiskey sour glass, and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Bronx Terrace Cocktail",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Lime', 'Cherry'],
      instructions: "Shake all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Brown Cocktail",
      ingredients: [ 'Light rum', 'Gin', 'Dry Vermouth'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Buck Jones",
      ingredients: [ 'Light rum', 'Sherry', 'Lime', 'Ginger ale'],
      instructions: "Pour rum, sherry, and juice of lime in a highball glass over ice cubes. Fill with ginger ale, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Buddy's Favorite",
      ingredients: [ 'Bourbon', 'Water'],
      instructions: "Pour ingredients into a highball glass, stir, and serve without ice.",
      glass: 'Highball glass'
  },

  {
      name: "Bull's Eye",
      ingredients: [ 'Brandy', 'Cider', 'Ginger ale'],
      instructions: "Pour brandy and hard cider into a highball glass over ice cubes. Fill with ginger ale, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Bull's Milk",
      ingredients: [ 'Light rum', 'Brandy', 'Milk', 'Powdered sugar', 'Nutmeg', 'Cinnamon'],
      instructions: "Shake rum, brandy, milk, and powdered sugar with ice and strain into a collins glass. Sprinkle nutmeg and the pinch of cinnamon on top and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Bulldog Highball",
      ingredients: [ 'Gin', 'Orange', 'Ginger ale'],
      instructions: "Pour gin and juice of orange into a highball glass over ice cubes. Fill with ginger ale, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Bulldog Cocktail",
      ingredients: [ 'Cherry brandy', 'Gin', 'Lime'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bumbo",
      ingredients: [ 'Dark rum', 'Lemon juice', 'Grenadine', 'Nutmeg'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Burnt Embers",
      ingredients: [ 'Añejo rum', 'Apricot brandy', 'Pineapple juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Burgundy Bishop",
      ingredients: [ 'Light rum', 'Lemon', 'Powdered sugar', 'Red wine'],
      instructions: "Shake rum, juice of lemon, and powdered sugar with ice and strain into a highball glass over ice cubes. Fill with red wine and stir. Decorate with various fruits and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Bushranger #1",
      ingredients: [ 'Light rum', 'Dubonnet Rouge', 'Bitters', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the rum, Dubonnet, and bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bushranger #2",
      ingredients: [ 'Light rum', 'Dubonnet Blanc', 'Bitters'],
      instructions: "Stir all ingredients with cracked ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Button Hook Cocktail",
      ingredients: [ 'Brandy', 'Apricot brandy', 'Anis', 'White Creme de Menthe'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Cabaret",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Benedictine', 'Bitters', 'Maraschino cherry'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, vermouth, Benedictine, and bitters. Shake well. Strain into a cocktail glass and garnish with the cherry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Cactus Bite",
      ingredients: [ 'Tequila', 'Lemon juice', 'Triple sec', 'Drambuie', 'Sugar', 'Bitters'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Cablegram",
      ingredients: [ 'Blended whiskey', 'Lemon', 'Powdered sugar', 'Ginger ale'],
      instructions: "Stir blended whiskey, juice of lemon, and powdered sugar with ice cubes in a highball glass. Fill with ginger ale, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Cafe de Paris",
      ingredients: [ 'Gin', 'Anisette', 'Egg white', 'Heavy cream'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Cafe De Paris Cocktail",
      ingredients: [ 'Gin', 'Anis', 'Light cream', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Caleigh",
      ingredients: [ 'Scotch', 'Blue Curacao', 'Creme de Cacao'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Caipirinha",
      ingredients: [ 'Sugar', 'Lime', 'Cachaca'],
      instructions: "Muddle the sugar into the lime wedges in an old-fashioned glass. Fill the glass with ice cubes. Pour the cachaca into the glass. Stir well.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "California Dream",
      ingredients: [ 'Tequila', 'Sweet Vermouth', 'Dry Vermouth', 'Maraschino cherry'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the tequila, sweet vermouth, and dry vermouth. Stir well. Strain into a cocktail glass and garnish with the cherry.",
      glass: 'Cocktail glass'
  },

  {
      name: "California Lemonade",
      ingredients: [ 'Blended whiskey', 'Lemon', 'Lime', 'Powdered sugar', 'Grenadine', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a collins glass over shaved ice. Fill with carbonated water and stir. Decorate with slices of orange and lemon. Add the cherry and serve with a straw.",
      glass: 'Collins glass'
  },

  {
      name: "Campbell F. Craig",
      ingredients: [ 'Tequila', 'Orange juice', 'Pineapple juice', 'Chambord raspberry liqueur'],
      instructions: "Pour the tequila, orange juice, and pineapple juice into a highball glass almost filled with ice cubes. Stir well. Drop the Chambord into the center of the drink.",
      glass: 'Highball glass'
  },

  {
      name: "Canadian Cherry",
      ingredients: [ 'Canadian whisky', 'Cherry brandy', 'Orange juice', 'Lemon juice'],
      instructions: "Shake all ingredients and strain into an old-fashioned glass over ice cubes. Moisten rim of glass with cherry brandy and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Canadian Cocktail",
      ingredients: [ 'Canadian whisky', 'Triple sec', 'Bitters', 'Powdered sugar'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Cape Of Good Will",
      ingredients: [ 'Light rum', 'Apricot brandy', 'Lime juice', 'Orange juice', 'Orange bitters'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Canadian Pineapple",
      ingredients: [ 'Canadian whisky', 'Pineapple juice', 'Lemon juice', 'Maraschino liqueur', 'Pineapple'],
      instructions: "Shake all ingredients (except pineapple stick) with ice and strain into an old-fashioned glass over ice cubes. Add the pineapple stick and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Cappucino Cocktail",
      ingredients: [ 'Coffee brandy', 'Vodka', 'Light cream'],
      instructions: "Shake all ingredients well with cracked ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Capri",
      ingredients: [ 'Creme de Cacao', 'Creme de Banane', 'Light cream'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Captain's Table",
      ingredients: [ 'Gin', 'Campari', 'Grenadine', 'Orange juice', 'Ginger ale', 'Maraschino cherry'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, Campari, grenadine, and orange juice. Shake well. Pour into a collins glass almost filled with ice cubes. Top with the ginger ale. Garnish with the cherry.",
      glass: 'Collins glass'
  },

  {
      name: "Cardinal",
      ingredients: [ 'Añejo rum', 'Maraschino liqueur', 'Triple sec', 'Grenadine'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Caroli",
      ingredients: [ 'Ice', 'Gin', 'Apricot brandy', 'Orange bitters'],
      instructions: "In a mixing glass half-filled with crushed ice, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Captain Cook",
      ingredients: [ 'Gin', 'Maraschino liqueur', 'Orange juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Carrol Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Brandy', 'Cherry'],
      instructions: "Stir vermouth and brandy with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Casa Blanca",
      ingredients: [ 'Light rum', 'Triple sec', 'Lime juice', 'Maraschino liqueur'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Caruso Blanco",
      ingredients: [ 'Gin', 'Dry Vermouth', 'White Creme de Menthe'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Casino Cocktail",
      ingredients: [ 'Gin', 'Maraschino liqueur', 'Lemon juice', 'Orange bitters', 'Cherry'],
      instructions: "Shake all ingredients (except cherry) with ice and strain into a cocktail glass. Add the cherry on top and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Casino Royale",
      ingredients: [ 'Gin', 'Lemon juice', 'Maraschino liqueur', 'Orange bitters', 'Egg yolk'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Caruso",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Green Creme de Menthe'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Catherine Of Sheridan Square",
      ingredients: [ 'Dark rum', 'Tia maria', 'Light cream', 'Coffee', 'Ice'],
      instructions: "Pour all of the ingredients into an Irish coffee glass filled with crushed ice. Stir well.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Celtic Mix Cocktail",
      ingredients: [ 'Scotch', 'Irish whiskey', 'Lemon juice', 'Bitters'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Champagne Cocktail",
      ingredients: [ 'Champagne', 'Sugar', 'Bitters', 'Lemon peel'],
      instructions: "Place lump of sugar and bitters in a chilled champagne flute. Fill with chilled champagne. Add the twist of lemon peel and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Champs Elysees Cocktail",
      ingredients: [ 'Brandy', 'Yellow Chartreuse', 'Lemon', 'Powdered sugar', 'Bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Chapala",
      ingredients: [ 'Tequila', 'Triple sec', 'Grenadine', 'Orange juice', 'Lemon juice', 'Orange'],
      instructions: "Shake all ingredients (except orange slice) with ice and strain into an old-fashioned glass over ice cubes. Add the slice of orange and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Charger",
      ingredients: [ 'Dark rum', 'Cherry brandy', 'Lemon juice', 'Sugar'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Charles Cocktail",
      ingredients: [ 'Brandy', 'Sweet Vermouth', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Charlie Chaplin",
      ingredients: [ 'Apricot brandy', 'Sloe gin', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Cherried Cream Rum",
      ingredients: [ 'Light rum', 'Cherry brandy', 'Light cream'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Chelsea Hotel",
      ingredients: [ 'Gin', 'Triple sec', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Cherie",
      ingredients: [ 'Cherry brandy', 'Light rum', 'Triple sec', 'Lime', 'Cherry'],
      instructions: "Shake all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Cherry Blossum",
      ingredients: [ 'Brandy', 'Cherry brandy', 'Triple sec', 'Grenadine', 'Lemon juice', 'Cherry'],
      instructions: "Moisten rim of cocktail glass with cherry brandy and rub rim in powdered sugar. Shake all ingredients (except cherry) with ice and strain into the sugar-rimmed glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Cherry Fizz",
      ingredients: [ 'Cherry brandy', 'Lemon', 'Carbonated water', 'Cherry'],
      instructions: "Shake juice of lemon and cherry brandy with ice and strain into a highball glass over two ice cubes. Fill with carbonated water and stir. Top with the cherry and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Cherry Flip",
      ingredients: [ 'Cherry brandy', 'Powdered sugar', 'Light cream', 'Egg', 'Nutmeg'],
      instructions: "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Cherry Rum",
      ingredients: [ 'Light rum', 'Cherry brandy', 'Light cream'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Cherry Sling",
      ingredients: [ 'Cherry brandy', 'Lemon', 'Lemon peel'],
      instructions: "Pour brandy and lemon juice into an old-fashioned glass over ice cubes and stir. Add the twist of lemon peel and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Chi-Chi",
      ingredients: [ 'Vodka', 'Pineapple juice', 'Cream of coconut', 'Pineapple', 'Cherry'],
      instructions: "Blend vodka, pineapple juice, and cream of coconut with one cup ice in an electric blender at a high speed. Pour into a red wine glass, decorate with the slice of pineapple and the cherry, and serve.",
      glass: 'Red wine glass'
  },

  {
      name: "Chicago Fizz",
      ingredients: [ 'Light rum', 'Port', 'Lemon', 'Powdered sugar', 'Egg white', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Chocolate Black Russian",
      ingredients: [ 'Kahlua', 'Vodka', 'Chocolate ice-cream'],
      instructions: "Combine all ingredients in an electric blender and blend at a low speed for a short length of time. Pour into a chilled champagne flute and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Chocolate Cocktail",
      ingredients: [ 'Yellow Chartreuse', 'Port', 'Powdered sugar', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a whiskey sour glass, and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Chocolate Mint Rum",
      ingredients: [ 'Dark rum', '151 proof rum', 'Dark Creme de Cacao', 'White Creme de Menthe', 'Light cream'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Chocolate Rum",
      ingredients: [ 'Light rum', '151 proof rum', 'Creme de Cacao', 'White Creme de Menthe', 'Cream'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Chocolate Snow Bear",
      ingredients: [ 'Amaretto', 'Creme de Cacao', 'Vanilla ice-cream', 'Chocolate syrup', 'Vanilla extract'],
      instructions: "Combine all ingredients in an electric blender and blend at a low speed for a short length of time. Pour into a chilled champagne flute and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Chocolate Soldier",
      ingredients: [ 'Gin', 'Dubonnet Rouge', 'Lime'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Chocolatier",
      ingredients: [ 'Light rum', 'Creme de Cacao', 'Chocolate ice-cream', 'Chocolate'],
      instructions: "Combine all ingredients (except chocolate shavings) in an electric blender and blend at a low speed for a short length of time. Pour into a chilled champagne flute, garnish with chocolate shavings, and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Choker",
      ingredients: [ 'Scotch', 'Pernod', 'Bitters'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Claridge Cocktail",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Apricot brandy', 'Triple sec'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "City Slicker",
      ingredients: [ 'Brandy', 'Triple sec', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Climax",
      ingredients: [ 'Amaretto', 'Creme de Cacao', 'Triple sec', 'Vodka', 'Creme de Banane', 'Light cream'],
      instructions: "Shake all ingredients well with cracked ice, strain into a chilled cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Clamato Cocktail",
      ingredients: [ 'Vodka', 'Tomato juice', 'Clamato juice'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Clove Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Sloe gin', 'Wine'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Clover Club Cocktail",
      ingredients: [ 'Gin', 'Grenadine', 'Lemon', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Clover Leaf Cocktail",
      ingredients: [ 'Gin', 'Grenadine', 'Lemon', 'Egg white', 'Mint'],
      instructions: "Shake all ingredients (except mint) with ice and strain into a cocktail glass. Add the sprig of mint and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Cocomacoque",
      ingredients: [ 'Light rum', 'Red wine', 'Lemon', 'Pineapple juice', 'Orange juice', 'Pineapple'],
      instructions: "Combine rum, juice of lemon, pineapple juice, and orange juice. Pour into a collins glass over ice cubes. Fill with red wine, add the pineapple stick, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Coffee Flip",
      ingredients: [ 'Brandy', 'Port', 'Powdered sugar', 'Egg', 'Light cream', 'Nutmeg'],
      instructions: "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Coffee Grasshopper",
      ingredients: [ 'Coffee brandy', 'White Creme de Menthe', 'Light cream'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Coffee Sour",
      ingredients: [ 'Coffee brandy', 'Lemon juice', 'Powdered sugar', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a whiskey sour glass, and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Cognac Highball",
      ingredients: [ 'Cognac', 'Carbonated water', 'Lemon peel'],
      instructions: "Pour cognac into a highball glass over ice cubes. Fill with carbonated water. Add the twist of lemon peel, stir, and serve. (Ginger ale may be substituted for carbonated water, if preferred.)",
      glass: 'Highball glass'
  },

  {
      name: "Colonial Cocktail",
      ingredients: [ 'Gin', 'Grapefruit juice', 'Maraschino liqueur', 'Olive'],
      instructions: "Shake all ingredients (except olive) with ice and strain into a cocktail glass. Add the olive and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Combo",
      ingredients: [ 'Dry Vermouth', 'Brandy', 'Triple sec', 'Powdered sugar', 'Bitters'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Comforting Tiger",
      ingredients: [ 'Ice', 'Brandy', 'Southern Comfort', 'Sweet Vermouth', 'Lemon peel'],
      instructions: "In a mixing glass, half-filled with crushed ice, combine the brandy, Southern Comfort, and vermouth. Stir well. Strain into a cocktail glass and garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Commodore Cocktail",
      ingredients: [ 'Blended whiskey', 'Lemon', 'Powdered sugar', 'Orange bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Communicator",
      ingredients: [ 'Dark rum', 'Galliano', 'Dark Creme de Cacao'],
      instructions: "Pour all of the ingredients into an old-fashioned glass almost filled with ice cubes. Stir well.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Compadre",
      ingredients: [ 'Tequila', 'Maraschino liqueur', 'Grenadine', 'Orange bitters'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Continental",
      ingredients: [ 'Light rum', 'Green Creme de Menthe', 'Lime juice', 'Powdered sugar', 'Lemon peel'],
      instructions: "Shake all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Cooperstown Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Dry Vermouth', 'Gin', 'Mint'],
      instructions: "Shake all ingredients (except mint) with ice and strain into a cocktail glass. Add the sprig of mint and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Corkscrew",
      ingredients: [ 'Light rum', 'Peach schnapps', 'Dry Vermouth', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the rum, peach schnapps, and vermouth. Stir well. Strain into a cocktail glass and garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Cornell Cocktail",
      ingredients: [ 'Gin', 'Lemon juice', 'Maraschino liqueur', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Cornwall-Nash",
      ingredients: [ 'Light rum', 'Gin', 'Triple sec', 'Grapefruit juice', 'Cherry brandy', 'Maraschino cherry'],
      instructions: "Pour the rum, gin, triple sec, and grapefruit juice into a highball glass almost filled with ice cubes. Stir well. Drop the cherry brandy into the center of the drink. Garnish with the cherry.",
      glass: 'Highball glass'
  },

  {
      name: "Coronation Cocktail",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Dubonnet Rouge'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Cosmos",
      ingredients: [ 'Ice', 'Light rum', 'Lime juice', 'Sugar'],
      instructions: "In a shaker half-filled with crushed ice, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Country Club Cooler",
      ingredients: [ 'Dry Vermouth', 'Carbonated water', 'Grenadine', 'Orange spiral', 'Lemon peel'],
      instructions: "Pour grenadine and 2 oz. carbonated water into a collins glass and stir. Add ice cubes and dry vermouth. Fill with carbonated water and stir again. Add the twist of lemon peel and the orange spiral so that the end dangles over rim of glass.",
      glass: 'Collins glass'
  },

  {
      name: "Cream Fizz",
      ingredients: [ 'Gin', 'Powdered sugar', 'Lemon', 'Light cream', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Creamy Screwdriver",
      ingredients: [ 'Vodka', 'Orange juice', 'Sugar', 'Egg yolk'],
      instructions: "Combine all ingredients with 1/2 cup crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into a collins glass and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Creamy Orange",
      ingredients: [ 'Brandy', 'Sherry', 'Orange juice', 'Light cream'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Creole",
      ingredients: [ 'Light rum', 'Lemon juice', 'Tabasco sauce', 'Beef bouillon', 'Salt', 'Black pepper'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Creme De Gin Cocktail",
      ingredients: [ 'Gin', 'White Creme de Menthe', 'Lemon juice', 'Orange juice', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Crimson Sunset",
      ingredients: [ 'Gin', 'Lemon juice', 'Grenadine', 'Tawny port'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin and lemon juice. Shake well. Strain into a cocktail glass. Drop the grenadine into the center of the drink and float the port on the top.",
      glass: 'Cocktail glass'
  },

  {
      name: "Crystal Slipper Cocktail",
      ingredients: [ 'Gin', 'Blue Curacao', 'Orange bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Cuba Libre",
      ingredients: [ 'Light rum', 'Lime', 'Coca-Cola'],
      instructions: "Pour lime juice into a highball glass over ice cubes. Add rum, fill with cola, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Haiku Martini",
      ingredients: [ 'Sake', 'Dry Vermouth', 'Cocktail onion'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the sake and vermouth. Stir well. Strain into a chilled cocktail glass and garnish with a cocktail onion.",
      glass: 'Cocktail glass'
  },

  {
      name: "Cul-De-Sac",
      ingredients: [ 'Añejo rum', 'Ricard'],
      instructions: "In a mixing glass half-filled with ice cubes, combine both of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Damn-The-Weather Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Gin', 'Orange juice', 'Triple sec'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Daiquiri",
      ingredients: [ 'Light rum', 'Lime', 'Powdered sugar'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve. (See also Frozen Daiquiri.)",
      glass: 'Cocktail glass'
  },

  {
      name: "Damn-Your-Eyes",
      ingredients: [ 'Añejo rum', 'Dubonnet Blanc', 'Dry Vermouth', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the rum, Dubonnet, and vermoth. Stir well. Strain into a cocktail glass and garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Dance With A Dream Cocktail",
      ingredients: [ 'Brandy', 'Triple sec', 'Anisette'],
      instructions: "In a shaker falf-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Daring Dylan",
      ingredients: [ 'Tequila', 'Kahlua', 'Ice', 'Hot chocolate'],
      instructions: "Let the Mexican hot chocolate cool to room temperature. Pour all of the ingredients into an Irish coffee glass almost filled with crushed ice. Stir well.",
      glass: 'Irish coffee cup'
  },

  {
      name: "David Bareface",
      ingredients: [ 'Light rum', 'Heavy cream', 'Creme de Cacao'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Deauville Cocktail",
      ingredients: [ 'Apple brandy', 'Brandy', 'Triple sec', 'Lemon'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Deep, Dark Secret",
      ingredients: [ 'Dark rum', 'Añejo rum', 'Kahlua', 'Heavy cream'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Dempsey Cocktail",
      ingredients: [ 'Apple brandy', 'Gin', 'Anis', 'Grenadine'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Delmonico",
      ingredients: [ 'Gin', 'Brandy', 'Sweet Vermouth', 'Dry Vermouth', 'Bitters', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the gin, brandy, sweet vermouth, dry vermouth, and bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Delmonico #2",
      ingredients: [ 'Dry Vermouth', 'Sweet Vermouth', 'Brandy', 'Gin', 'Lemon peel'],
      instructions: "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Derby Daiquiri",
      ingredients: [ 'Light rum', 'Orange juice', 'Lime juice', 'Sugar'],
      instructions: "Blend all ingredients with 1/2 cup shaved ice in an electric blender at a low speed. Pour into a champagne flute and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "DeRosier",
      ingredients: [ 'Añejo rum', 'Bourbon', 'Dark Creme de Cacao', 'Cherry brandy', 'Heavy cream'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Devil's Cocktail",
      ingredients: [ 'Dry Vermouth', 'Port', 'Lemon juice'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Diamond Fizz",
      ingredients: [ 'Gin', 'Lemon', 'Powdered sugar', 'Champagne'],
      instructions: "Shake gin, juice of lemon, and powdered sugar with ice and strain into a highball glass over two ice cubes. Fill with chilled champagne, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Dickie Ward",
      ingredients: [ 'Scotch', 'Bitters', 'Ginger ale', 'Lime'],
      instructions: "Pour the Scotch, bitters, and ginger ale into a highball glass almost filled with ice cubes. Stir well and garnish with the lime wedge.",
      glass: 'Highball glass'
  },

  {
      name: "Dianne-On-The-Tower",
      ingredients: [ 'Light rum', 'Bourbon', 'Dark Creme de Cacao', 'Cherry brandy'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Dinah Cocktail",
      ingredients: [ 'Blended whiskey', 'Powdered sugar', 'Lemon', 'Mint'],
      instructions: "Shake all ingredients (except mint) with ice and strain into a cocktail glass. Add the sprig of mint and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Diplomat",
      ingredients: [ 'Dry Vermouth', 'Sweet Vermouth', 'Maraschino liqueur', 'Bitters', 'Lemon', 'Cherry'],
      instructions: "Stir all ingredients (except lemon and cherry) with ice and strain into a cocktail glass. Add the lemon slice, top with the cherry, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Dirty Dick's Downfall",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Campari', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the gin, vermouth, and Campari. Stir well. Strain into a cocktail glass and garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Dirty Mother",
      ingredients: [ 'Brandy', 'Kahlua'],
      instructions: "Pour ingredients into an old-fashioned glass filled with ice cubes, stir well, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Dirty White Mother",
      ingredients: [ 'Brandy', 'Kahlua', 'Light cream'],
      instructions: "Pour brandy and Kahlua into an old-fashioned glass filled with ice cubes and stir. Float cream on top and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Dixie Cocktail",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Anis', 'Orange'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Dixie Dew",
      ingredients: [ 'Bourbon', 'White Creme de Menthe', 'Triple sec'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a coktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Dixie Julep",
      ingredients: [ 'Bourbon', 'Powdered sugar', 'Mint'],
      instructions: "Combine bourbon and powdered sugar in a collins glass. Fill with ice and stir gently until glass is frosted. Add the three sprigs of mint and serve with a straw.",
      glass: 'Collins glass'
  },

  {
      name: "Dixie Stinger",
      ingredients: [ 'Bourbon', 'White Creme de Menthe', 'Southern Comfort'],
      instructions: "In a shaker half-filled with ice cubes, combine all of theingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Dixie Whiskey Cocktail",
      ingredients: [ 'Bourbon', 'White Creme de Menthe', 'Triple sec', 'Powdered sugar', 'Bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Doctor Dawson",
      ingredients: [ 'Tequila', 'Lemon juice', 'Sugar', 'Bitters', 'Egg', 'Club soda'],
      instructions: "In a shaker half-filled with ice cubes, combine the tequila, lemon juice, sugar, bitters, and egg. Shake well. Strain into a highball glass almost filled with ice cubes. Top with the club soda.",
      glass: 'Highball glass'
  },

  {
      name: "Doralto",
      ingredients: [ 'Tequila', 'Lemon juice', 'Sugar', 'Bitters', 'Tonic water', 'Lime'],
      instructions: "In a shaker half-filled with ice cubes, combine the tequila, lemon juice, sugar, and bitters. Shake well. Strain into a highball glass almost filled with ice cubes. Top with the tonic water and garnish with the lime wedge.",
      glass: 'Highball glass'
  },

  {
      name: "Dragonfly",
      ingredients: [ 'Gin', 'Ginger ale', 'Lime'],
      instructions: "In a highball glass almost filled with ice cubes, combine the gin and ginger ale. Stir well. Garnish with the lime wedge.",
      glass: 'Highball glass'
  },

  {
      name: "Dream Cocktail",
      ingredients: [ 'Brandy', 'Triple sec', 'Anisette'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Dressed Up Like A Dogs Dinner",
      ingredients: [ 'Brandy', 'Applejack', 'Sweet Vermouth'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Droog's Date Cocktail",
      ingredients: [ 'Light rum', 'Cherry brandy', 'Triple sec', 'Lime juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Dry Rob Roy",
      ingredients: [ 'Scotch', 'Dry Vermouth', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the Scotch and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Du Barry Cocktail",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Anis', 'Bitters', 'Orange'],
      instructions: "Stir all ingredients (except orange slice) with ice and strain into a cocktail glass. Add the slice of orange and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Dubonnet Cocktail",
      ingredients: [ 'Dubonnet Rouge', 'Gin', 'Bitters', 'Lemon peel'],
      instructions: "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Dubonnet Fizz",
      ingredients: [ 'Dubonnet Rouge', 'Cherry brandy', 'Carbonated water', 'Orange', 'Lemon'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Duchess",
      ingredients: [ 'Anis', 'Sweet Vermouth', 'Dry Vermouth'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "East India Cocktail #1",
      ingredients: [ 'Brandy', 'Rum', 'Triple sec', 'Pineapple juice', 'Bitters', 'Cherry'],
      instructions: "Shake all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "East India Cocktail #2",
      ingredients: [ 'Sherry', 'Dry Vermouth', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "El Presidente Cocktail #1",
      ingredients: [ 'Light rum', 'Grenadine', 'Pineapple juice', 'Lime'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Elephant Lips",
      ingredients: [ 'Dark rum', 'Creme de Banane', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Elk's Own Cocktail",
      ingredients: [ 'Blended whiskey', 'Port', 'Lemon', 'Powdered sugar', 'Egg white', 'Pineapple'],
      instructions: "Shake all ingredients (except pineapple) with ice and strain into a cocktail glass. Add the pineapple slice and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Emerald Forest",
      ingredients: [ 'Ice', 'Gin', 'Green Creme de Menthe', 'White Creme de Menthe'],
      instructions: "In a mixing glass half-filled with crushed ice, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Emerald Isle Cocktail",
      ingredients: [ 'Gin', 'Green Creme de Menthe', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Emerson",
      ingredients: [ 'Sweet Vermouth', 'Gin', 'Lime', 'Maraschino liqueur'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "English Highball",
      ingredients: [ 'Brandy', 'Gin', 'Sweet Vermouth', 'Carbonated water', 'Lemon peel'],
      instructions: "Pour brandy, gin, and sweet vermouth into a highball glass over ice cubes. Fill with carbonated water. Add the twist of lemon peel, stir, and serve. (Ginger ale may be substituted for carbonated water, if preferred.)",
      glass: 'Highball glass'
  },

  {
      name: "English Rose Cocktail",
      ingredients: [ 'Apricot brandy', 'Gin', 'Dry Vermouth', 'Grenadine', 'Lemon juice', 'Cherry'],
      instructions: "Rub rim of cocktail glass with lemon juice and dip rim of glass in powdered sugar. Shake all ingredients (except cherry) with ice and strain into sugar-rimmed glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Entwistle's Error",
      ingredients: [ 'Dark rum', 'Lemon juice', 'Tonic water'],
      instructions: "Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well.",
      glass: 'Highball glass'
  },

  {
      name: "Ethel Duffy Cocktail",
      ingredients: [ 'White Creme de Menthe', 'Apricot brandy', 'Triple sec'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "European",
      ingredients: [ 'Gin', 'Sherry', 'Dubonnet Rouge', 'Dry Vermouth', 'Grand Marnier', 'Maraschino cherry'],
      instructions: "In an old-fashioned glass almost filled with ice cubes, combine the gin, sherry, Dubonnet, vermouth, and Grand Marnier. Stir well. Garnish with the cherry.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Everybody's Irish Cocktail",
      ingredients: [ 'Irish whiskey', 'Green Creme de Menthe', 'Green Chartreuse', 'Olive'],
      instructions: "Stir all ingredients (except green olive) with ice and strain into a cocktail glass. Add the green olive and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Executive Sunrise",
      ingredients: [ 'Gold tequila', 'Orange juice', 'Creme de Cassis'],
      instructions: "Pour the tequila and the orange juice into a collins glass almost filled with ice cubes. Stir well. Drop the cassis into the center of the drink.",
      glass: 'Collins glass'
  },

  {
      name: "Eye-Opener",
      ingredients: [ 'Light rum', 'Triple sec', 'Pernod', 'Creme de Cacao', 'Egg yolk', 'Sugar'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Fairy Belle Cocktail",
      ingredients: [ 'Apricot brandy', 'Gin', 'Grenadine', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fallen Angel",
      ingredients: [ 'Gin', 'White Creme de Menthe', 'Lemon', 'Bitters', 'Cherry'],
      instructions: "Shake all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fancy Bourbon",
      ingredients: [ 'Bourbon', 'Triple sec', 'Sugar', 'Bitters', 'Lemon peel'],
      instructions: "In a shaker half-filled with ice cubes, combine the bourbon, triple sec, sugar, and bitters. Shake well. Strain into a coktail glass and garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fancy Brandy",
      ingredients: [ 'Brandy', 'Triple sec', 'Powdered sugar', 'Bitters', 'Lemon peel'],
      instructions: "Shake all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fancy Gin",
      ingredients: [ 'Gin', 'Triple sec', 'Powdered sugar', 'Bitters', 'Lemon peel'],
      instructions: "Shake all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fancy Scotch",
      ingredients: [ 'Scotch', 'Triple sec', 'Sugar', 'Bitters', 'Lemon peel'],
      instructions: "In a shaker half-filled with ice cubes combine the scotch, triple sec, sugar, and bitters. Shake well. Strain into a cocktail glass and garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fancy Whiskey",
      ingredients: [ 'Blended whiskey', 'Triple sec', 'Powdered sugar', 'Bitters', 'Lemon peel'],
      instructions: "Shake all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fantasio Cocktail",
      ingredients: [ 'Brandy', 'Dry Vermouth', 'White Creme de Menthe', 'Maraschino liqueur'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Farmer Giles",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Sweet Vermouth', 'Bitters', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the gin, dry vermouth, sweet vermouth, and bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Farmer's Cocktail",
      ingredients: [ 'Dry Vermouth', 'Sweet Vermouth', 'Gin', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fastlap",
      ingredients: [ 'Gin', 'Pernod', 'Orange juice', 'Grenadine'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Pour into an old-fashioned glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Fat Face",
      ingredients: [ 'Gin', 'Apricot brandy', 'Grenadine', 'Egg white'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Favorite Cocktail",
      ingredients: [ 'Apricot brandy', 'Dry Vermouth', 'Gin', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fifth Avenue",
      ingredients: [ 'Creme de Cacao', 'Apricot brandy', 'Light cream'],
      instructions: "Pour ingredients into a parfait glass (in order given) so that each ingredient floats on preceding one. Serve without mixing.",
      glass: 'Parfait glass'
  },

  {
      name: "Fifty-Fifty",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Olive'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the gin and vermouth. Stir well. Strain into a cocktail glass and garnish with the olive.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fifty-fifty Cocktail",
      ingredients: [ 'Dry Vermouth', 'Gin'],
      instructions: "Stir ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fino Martini",
      ingredients: [ 'Gin', 'Sherry', 'Lemon peel'],
      instructions: "In a mixing glas half-filled with ice cubes, combine the gin or vodka and the sherry. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fireman's Sour",
      ingredients: [ 'Light rum', 'Lime juice', 'Grenadine', 'Club soda', 'Orange', 'Maraschino cherry'],
      instructions: "In a shaker half-filled with ice cubes, combine the rum, lime juice, and grenadine. Shake well. Strain into a highball glass almost filled with ice cubes. Top with the club soda. Stir well. Garnish with the orange slice and the cherry.",
      glass: 'Highball glass'
  },

  {
      name: "Flamingo Cocktail",
      ingredients: [ 'Apricot brandy', 'Gin', 'Lime', 'Grenadine'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fleet Street",
      ingredients: [ 'Gin', 'Sweet Vermouth', 'Dry Vermouth', 'Triple sec', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Flirting With The Sandpiper",
      ingredients: [ 'Light rum', 'Cherry brandy', 'Orange juice', 'Orange bitters'],
      instructions: "Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well.",
      glass: 'Highball glass'
  },

  {
      name: "Florida",
      ingredients: [ 'Gin', 'Kirschwasser', 'Triple sec', 'Orange juice', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Flying Dutchman",
      ingredients: [ 'Gin', 'Triple sec'],
      instructions: "In an old-fashioned glass almost filled with ice cubes, combine the gin and triple sec. Stir well.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Flying Scotchman",
      ingredients: [ 'Scotch', 'Sweet Vermouth', 'Bitters', 'Sugar syrup'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fog Cutter",
      ingredients: [ 'Light rum', 'Gin', 'Brandy', 'Orange juice', 'Lemon juice', 'Orgeat syrup'],
      instructions: "Shake all ingredients and strain into a collins glass over ice cubes. Top with a teaspoon of sweet sherry and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Fort Lauderdale",
      ingredients: [ 'Light rum', 'Sweet Vermouth', 'Orange', 'Lime', 'Orange'],
      instructions: "Shake all ingredients (except orange slice) with ice and strain into an old-fashioned glass over ice cubes. Add the slice of orange and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Fontainebleau Special",
      ingredients: [ 'Brandy', 'Anisette', 'Dry Vermouth'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fox And Hounds",
      ingredients: [ 'Bourbon', 'Pernod', 'Lemon juice', 'Sugar', 'Egg white'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fox River Cocktail",
      ingredients: [ 'Blended whiskey', 'Creme de Cacao', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Foxy Lady",
      ingredients: [ 'Amaretto', 'Creme de Cacao', 'Light cream'],
      instructions: "Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Frankenjack Cocktail",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Apricot brandy', 'Triple sec', 'Cherry'],
      instructions: "Stir all ingredients (except cherry) with ice and strain into a cocktail glass. Add the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Freddy Fudpucker",
      ingredients: [ 'Tequila', 'Orange juice', 'Galliano'],
      instructions: "Pour the tequila and orange juice into a highball glass almost filled with ice cubes. Pouring slowly and carefully over the back of a teaspoon, float the Galliano on top of the drink.",
      glass: 'Highball glass'
  },

  {
      name: "Free Silver",
      ingredients: [ 'Dark rum', 'Gin', 'Lemon', 'Powdered sugar', 'Milk', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a collins glass over ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "French '75'",
      ingredients: [ 'Gin', 'Sugar', 'Lemon juice', 'Champagne', 'Orange', 'Maraschino cherry'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, sugar, and lemon juice. Shake well. Pour into a collins glass. Top with the Champagne. Stir well and garnish with the orange slice and the cherry.",
      glass: 'Collins glass'
  },

  {
      name: "French 125",
      ingredients: [ 'Sweet and sour', 'Brandy', 'Champagne', 'Lemon'],
      instructions: "Pour brandy and sweet and sour into a collins glass over ice cubes and stir well. Fill with chilled champagne and stir lightly. Add the slice of lemon and serve.",
      glass: 'Collins glass'
  },

  {
      name: "French Connection",
      ingredients: [ 'Cognac', 'Amaretto'],
      instructions: "Pour ingredients into a old-fashioned glass over ice, stir, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Frisco Sour",
      ingredients: [ 'Blended whiskey', 'Benedictine', 'Lemon', 'Lime', 'Lemon', 'Lime'],
      instructions: "Shake all ingredients (except slices of lemon and lime) with ice and strain into a whiskey sour glass. Decorate with the slices of lemon and lime and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Froth Blower Cocktail",
      ingredients: [ 'Gin', 'Grenadine', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Frozen Apple",
      ingredients: [ 'Applejack', 'Lime juice', 'Sugar', 'Egg white'],
      instructions: "Blend all ingredients with 1 cup crushed ice in an electric blender at a low speed for a short length of time. Pour into an old-fashioned glass and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Frozen Berkeley",
      ingredients: [ 'Light rum', 'Brandy', 'Passion fruit syrup', 'Lemon juice'],
      instructions: "Blend all ingredients with 1/2 cup crushed ice in an electric blender at a low speed for a short length of time. Pour into a champagne flute and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Frozen Brandy And Rum",
      ingredients: [ 'Brandy', 'Light rum', 'Lemon juice', 'Powdered sugar', 'Egg white'],
      instructions: "Combine all ingredients with 1 cup of crushed ice in an electric blender and blend at a low speed for a short length of time. Pour into an old-fashioned glass and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Frozen Daiquiri",
      ingredients: [ 'Light rum', 'Triple sec', 'Lime juice', 'Sugar', 'Cherry', 'Ice'],
      instructions: "Combine all ingredients (except for the cherry) in an electric blender and blend at a low speed for five seconds, then blend at a high speed until firm. Pour contents into a champagne flute, top with the cherry, and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Frozen Margarita #1",
      ingredients: [ 'Salt', 'Lime', 'Tequila', 'Triple sec', 'Lime juice', 'Ice'],
      instructions: "Place salt in a saucer. Rub rim of a cocktail glass with lime wedge and dip glass into salt to coat rim thoroughly, reserve lime. Pour tequila, triple sec, lime juice, and crushed ice into a blender. Blend well at high speed. Pour into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Frozen Matador",
      ingredients: [ 'Tequila', 'Pineapple juice', 'Lime juice', 'Pineapple'],
      instructions: "Blend all ingredients (except pineapple stick) with 1 cup crushed ice in an electric blender at a low speed for a short length of time. Pour into an old-fashioned glass, add the pineapple stick, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Frozen Mint Daiquiri",
      ingredients: [ 'Light rum', 'Lime juice', 'Mint', 'Sugar'],
      instructions: "Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into an old-fashioned glass and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Frozen Pineapple Daiquiri",
      ingredients: [ 'Light rum', 'Pineapple', 'Lime juice', 'Sugar'],
      instructions: "Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into a champagne flute and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Gareth Glowworm",
      ingredients: [ 'Light rum', 'Creme de Cacao', 'Heavy cream', 'Cherry brandy'],
      instructions: "In a shaker half-filled with ice cubes, combine the rum, creme de cacao, and heavy cream. Shake well. Strain into a cocktail glass. Drop the cherry brandy into the center of the drink.",
      glass: 'Cocktail glass'
  },

  {
      name: "Gates Of Hell",
      ingredients: [ 'Tequila', 'Lemon juice', 'Lime juice', 'Ice', 'Cherry brandy'],
      instructions: "In a shaker half-filled with ice cubes, combine the tequila, lemon juice, and lime juice. Shake well. Strain into an old-fashioned glass almost filled with crushed ice. Drizzle the cherry brandy over the top.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Gauguin",
      ingredients: [ 'Light rum', 'Passion fruit syrup', 'Lemon juice', 'Lime juice', 'Cherry'],
      instructions: "Combine all ingredients (except cherry) with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into an old-fashioned glass, add the cherry on top, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Gent Of The Jury",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Cocktail onion'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the gin and vermouth. Stir well. Strain into a cocktail glass. Garnish with the onions.",
      glass: 'Cocktail glass'
  },

  {
      name: "Gentleman's Club",
      ingredients: [ 'Gin', 'Brandy', 'Sweet Vermouth', 'Club soda'],
      instructions: "In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Gilroy Cocktail",
      ingredients: [ 'Cherry brandy', 'Gin', 'Dry Vermouth', 'Lemon', 'Orange bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Gimlet",
      ingredients: [ 'Gin', 'Lime juice cordial', 'Lime'],
      instructions: "Pour the gin and lime cordial into a mixing glass half-filled with ice cubes. Stir well. Strain into a cocktail glass and garnish with the lime wedge.",
      glass: 'Cocktail glass'
  },

  {
      name: "Gin And Bitter Lemon",
      ingredients: [ 'Gin', 'Lemon juice', 'Sugar', 'Tonic water'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a highball glass almost filled with ice cubes. Top with the tonic water.",
      glass: 'Highball glass'
  },

  {
      name: "Gin And It",
      ingredients: [ 'Gin', 'Sweet Vermouth'],
      instructions: "Stir gin and vermouth in a cocktail glass. (No ice is used in this drink.)",
      glass: 'Cocktail glass'
  },

  {
      name: "Gin And Pink",
      ingredients: [ 'Gin', 'Tonic water', 'Bitters', 'Lemon peel'],
      instructions: "In a highball glass almost filled with ice cubes, combine the gin, gonic, and bitters. Stir well and garnish with the lemon twist.",
      glass: 'Highball glass'
  },

  {
      name: "Gin And Sin",
      ingredients: [ 'Gin', 'Orange juice', 'Lemon juice', 'Grenadine'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Gin And Tonic",
      ingredients: [ 'Gin', 'Tonic water', 'Lime'],
      instructions: "Pour the gin and the tonic water into a highball glass almost filled with ice cubes. Stir well. Garnish with the lime wedge.",
      glass: 'Highball glass'
  },

  {
      name: "Gin Buck",
      ingredients: [ 'Gin', 'Lemon', 'Ginger ale'],
      instructions: "Pour gin and juice of lemon into an old-fashioned glass over ice cubes. Fill with ginger ale, stir, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Gin Cobbler",
      ingredients: [ 'Sugar', 'Club soda', 'Lemon', 'Gin', 'Maraschino cherry', 'Orange'],
      instructions: "In an old-fashioned glass, dissolve the sugar in the club soda. Add crushed ice until the glass is almost full. Add the gin. Stir well. Garnish with the cherry and the orange and lemon slices.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Gin Cocktail",
      ingredients: [ 'Gin', 'Bitters', 'Lemon peel'],
      instructions: "Stir gin and bitters with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Gin Cooler",
      ingredients: [ 'Gin', 'Carbonated water', 'Powdered sugar', 'Orange spiral', 'Lemon peel'],
      instructions: "Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice and add gin. Fill with carbonated water and stir. Add the lemon peel and the orange spiral so that the end of the orange spiral dangles over rim of glass.",
      glass: 'Collins glass'
  },

  {
      name: "Gin Daisy",
      ingredients: [ 'Gin', 'Lemon juice', 'Sugar', 'Grenadine', 'Maraschino cherry', 'Orange'],
      instructions: "In a shaker half-filled with ice cubes, combine the wine, lemon juice, sugar, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the cherry and the orange slice.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Gin Fix",
      ingredients: [ 'Sugar', 'Lemon juice', 'Water', 'Gin', 'Maraschino cherry', 'Lemon'],
      instructions: "In a shaker half-filled with ice cubes, combine the sugar, lemon juice, and water. Shake well. Strain into a highball glass almost filled with crushed ice. Add the gin. Stir well and garnish with the cherry and the lemon slice.",
      glass: 'Highball glass'
  },

  {
      name: "Gin Fizz",
      ingredients: [ 'Gin', 'Lemon', 'Powdered sugar', 'Carbonated water'],
      instructions: "Shake gin, juice of lemon, and powdered sugar with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Gin Highball",
      ingredients: [ 'Gin', 'Carbonated water', 'Lemon peel'],
      instructions: "Pour gin into a highball glass over ice cubes. Fill with carbonated water. Add the twist of lemon peel, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Gin Milk Punch",
      ingredients: [ 'Gin', 'Milk', 'Powdered sugar', 'Nutmeg'],
      instructions: "Shake all ingredients (except nutmeg) with ice and strain into a collins glass. Sprinkle nutmeg on top and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Gin Rickey",
      ingredients: [ 'Gin', 'Lime', 'Carbonated water', 'Lime'],
      instructions: "Pour juice of lime and gin into a highball glass over ice cubes. Fill with carbonated water and stir. Add the wedge of lime and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Gin Sangaree",
      ingredients: [ 'Gin', 'Carbonated water', 'Port', 'Powdered sugar', 'Water', 'Nutmeg'],
      instructions: "Dissolve powdered sugar in water and add gin. Pour into a highball glass over 2 ice cubes. Fill with carbonated water and stir. Float port on top, sprinkle lightly with nutmeg, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Gin Sling",
      ingredients: [ 'Gin', 'Lemon', 'Powdered sugar', 'Water', 'Orange peel'],
      instructions: "Dissolve powdered sugar in mixture of water and juice of lemon. Add gin. Pour into an old-fashioned glass over ice cubes and stir. Add the twist of orange peel and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Gin Smash",
      ingredients: [ 'Gin', 'Carbonated water', 'Sugar', 'Mint', 'Orange', 'Cherry'],
      instructions: "Muddle sugar with carbonated water and mint sprigs in an old-fashioned glass. Add gin and 1 ice cube. Stir, add the orange slice and the cherry, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Gin Sour",
      ingredients: [ 'Gin', 'Lemon juice', 'Sugar', 'Orange', 'Maraschino cherry'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Gin Squirt",
      ingredients: [ 'Gin', 'Grenadine', 'Powdered sugar', 'Pineapple', 'Strawberries', 'Carbonated water'],
      instructions: "Stir gin, grenadine, and powdered sugar with ice and strain into a highball glass over ice cubes. Fill with carbonated water and stir. Decorate with the pineapple chunks and the strawberries and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Gin Swizzle",
      ingredients: [ 'Lime juice', 'Sugar', 'Gin', 'Bitters', 'Club soda'],
      instructions: "In a shaker half-filled with ice cubes, combine the lime juice, sugar, gin, and bitters. Shake well. Almost fill a colling glass with ice cubes. Stir until the glass is frosted. Strain the mixture in the shaker into the glass and add the club soda.",
      glass: 'vote'
  },

  {
      name: "Gin Toddy",
      ingredients: [ 'Gin', 'Water', 'Powdered sugar', 'Lemon peel'],
      instructions: "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Royal Cocktail",
      ingredients: [ 'Gin', 'Lemon', 'Powdered sugar', 'Egg'],
      instructions: "Shake all ingredients with ice, strain into a whiskey sour glass, and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Royal Fizz",
      ingredients: [ 'Gin', 'Sweet and sour', 'Egg', 'Coca-Cola'],
      instructions: "Shake all ingredients (except cola) with ice and strain into a chilled collins glass. Fill with cola and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Gin-Cassis Fizz",
      ingredients: [ 'Gin', 'Lemon juice', 'Sugar', 'Club soda', 'Creme de Cassis'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a collins glass almost filled with ice cubes. Add the club soda. Stir well. Drop the cassis into the center of the drink.",
      glass: 'Collins glass'
  },

  {
      name: "Royal Gin Fizz",
      ingredients: [ 'Gin', 'Lemon', 'Powdered sugar', 'Egg', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Godchild",
      ingredients: [ 'Vodka', 'Amaretto', 'Heavy cream'],
      instructions: "Shake all ingredients well with cracked ice, strain into a champagne flute, and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Royal Smile Cocktail",
      ingredients: [ 'Apple brandy', 'Gin', 'Lemon', 'Grenadine'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Royalty Fizz",
      ingredients: [ 'Gin', 'Lemon juice', 'Blue Curacao', 'Sugar', 'Egg', 'Club soda'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, lemon juice, Curacao, sugar, and egg. Shake well. Strain into a collins glass almost filled with ice cubes. Add the club soda. Stir well.",
      glass: 'Collins glass'
  },

  {
      name: "Godfather",
      ingredients: [ 'Scotch', 'Amaretto'],
      instructions: "Pour ingredients into an old-fashioned glass over ice and serve. (Bourbon may be substituted for scotch, if preferred.)",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Ruby Fizz",
      ingredients: [ 'Sloe gin', 'Grenadine', 'Lemon', 'Powdered sugar', 'Egg white', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Ruby In The Rough",
      ingredients: [ 'Gin', 'Cherry brandy', 'Sweet Vermouth'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Rum Cobbler",
      ingredients: [ 'Sugar', 'Club soda', 'Lemon', 'Dark rum', 'Maraschino cherry', 'Orange'],
      instructions: "In an old-fashioned glass, dissolve the sugar in the club soda. Add crushed ice until the glass is almost full. Add the rum. Stir well. Garnish with the cherry and the orange and lemon slices.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Rum Collins",
      ingredients: [ 'Light rum', 'Lime', 'Powdered sugar', 'Carbonated water', 'Lemon', 'Cherry'],
      instructions: "Shake rum, juice of lime, and powdered sugar with ice and strain into a collins glass over ice cubes. Fill with carbonated water and stir. Add the slice of lemon, top with the cherry, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Godmother",
      ingredients: [ 'Vodka', 'Amaretto'],
      instructions: "Pour vodka and amaretto into an old-fashioned glass over ice and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Rum Cooler",
      ingredients: [ 'Rum', 'Lemon-lime soda', 'Lemon'],
      instructions: "Pour the rum and soda into a collins glass almost filled with ice cubes. Stir well and garnish with the lemon wedge.",
      glass: 'Collins glass'
  },

  {
      name: "Golden Bronx",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Sweet Vermouth', 'Orange juice', 'Egg yolk'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Rum Daisy",
      ingredients: [ 'Dark rum', 'Lemon juice', 'Sugar', 'Grenadine', 'Maraschino cherry', 'Orange'],
      instructions: "In a shaker half-filled with ice cubes, combine the rum, lemon juice, sugar, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the cherry and the orange slice.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Golden Cadillac",
      ingredients: [ 'Galliano', 'Creme de Cacao', 'Light cream'],
      instructions: "Combine all ingredients with 1/2 cup crushed ice in an electric blender. Blend at low speed for ten seconds. Strain into a champagne flute and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Rum Dubonnet",
      ingredients: [ 'Dubonnet Rouge', 'Light rum', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Rum Eggnog",
      ingredients: [ 'Rum', 'Milk', 'Powdered sugar', 'Egg', 'Nutmeg'],
      instructions: "Shake all ingredients (except nutmeg) with ice and strain into a collins glass. Sprinkle nutmeg on top and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Golden Daze",
      ingredients: [ 'Gin', 'Peach brandy', 'Orange juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Rum Fix",
      ingredients: [ 'Light rum', 'Lemon', 'Powdered sugar', 'Water', 'Lemon'],
      instructions: "Stir juice of lemon, powdered sugar, and water in a highball glass. Fill glass with ice, add rum, and stir. Add the slice of lemon and serve with a straw.",
      glass: 'Highball glass'
  },

  {
      name: "Golden Fizz",
      ingredients: [ 'Gin', 'Lemon', 'Sugar', 'Egg yolk', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a highball glass. Fill with carbonated water and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Rum Gimlet",
      ingredients: [ 'Light rum', 'Lime juice cordial', 'Lime'],
      instructions: "Pour the rum and Rose's lime juice into a mixing glass half-filled with ice cubes. Stir well. Strain into a cocktail glass. Garnish with the lime wedge.",
      glass: 'Cocktail glass'
  },

  {
      name: "Golden Slipper",
      ingredients: [ 'Apricot brandy', 'Yellow Chartreuse', 'Egg yolk'],
      instructions: "Stir brandy and chartreuse with ice and strain into a cocktail glass. Float unbroken egg yolk on top and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Rum Highball",
      ingredients: [ 'Rum', 'Carbonated water', 'Lemon peel'],
      instructions: "Pour rum into a highball glass over ice cubes. Fill with carbonated water and stir. Add the twist of lemon peel and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Rum Martini",
      ingredients: [ 'Light rum', 'Dry Vermouth', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the rum and vermouth. Stir well. Strain into a cocktial glass. Garnish with the lemon twist or an olive.",
      glass: 'Cocktail glass'
  },

  {
      name: "Rum Milk Punch",
      ingredients: [ 'Light rum', 'Milk', 'Powdered sugar', 'Nutmeg'],
      instructions: "Shake all ingredients (except nutmeg) with ice and strain into a collins glass. Sprinkle nutmeg on top and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Grand Master",
      ingredients: [ 'Scotch', 'Peppermint schnapps', 'Club soda', 'Lemon peel'],
      instructions: "Pour the Scotch, schnapps, and soda into a highball glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
      glass: 'Highball glass'
  },

  {
      name: "Rum Old-fashioned",
      ingredients: [ 'Light rum', '151 proof rum', 'Powdered sugar', 'Bitters', 'Water', 'Lime peel'],
      instructions: "Stir powdered sugar, water, and bitters in an old-fashioned glass. When sugar has dissolved add ice cubes and light rum. Add the twist of lime peel, float 151 proof rum on top, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Rum Screwdriver",
      ingredients: [ 'Light rum', 'Orange juice'],
      instructions: "Pour rum into a highball glass over ice cubes. Add orange juice, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Grapefruit Cocktail",
      ingredients: [ 'Gin', 'Grapefruit juice', 'Maraschino liqueur', 'Cherry'],
      instructions: "Shake all ingredients (except cherry) with ice and strain into a cocktail glass. Add the cherry on top and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Rum Sour",
      ingredients: [ 'Light rum', 'Lemon juice', 'Sugar', 'Orange', 'Maraschino cherry'],
      instructions: "In a shaker half-filled with ice cubes, combine the rum, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Rum Swizzle",
      ingredients: [ 'Rum', 'Carbonated water', 'Lime', 'Powdered sugar', 'Bitters'],
      instructions: "Dissolve powdered sugar in mixture of 2 oz. carbonated water and juice of lime in a collins glass. Fill glass with ice and stir. Add bitters and rum. Fill with carbonated water, stir, and serve with a swizzle stick.",
      glass: 'Collins glass'
  },

  {
      name: "Grapefruit Nog",
      ingredients: [ 'Brandy', 'Grapefruit juice', 'Lemon juice', 'Honey', 'Egg'],
      instructions: "Blend all ingredients with 1/2 cup crushed ice in an electric blender at a low speed for a short length of time. Pour into a collins glass over ice cubes and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Rum Toddy",
      ingredients: [ 'Rum', 'Powdered sugar', 'Lemon peel', 'Water'],
      instructions: "Dissolve powdered sugar in water in an old-fashioned glass. Add rum and one ice cube and stir. Add the twist of lemon peel and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Grass Skirt",
      ingredients: [ 'Gin', 'Triple sec', 'Pineapple juice', 'Grenadine', 'Pineapple'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, triple sec, pineapple juice, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the pineapple slice.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Russian Cocktail",
      ingredients: [ 'Vodka', 'Gin', 'Creme de Cacao'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Grasshopper",
      ingredients: [ 'Green Creme de Menthe', 'Creme de Cacao', 'Light cream'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Rusty Nail",
      ingredients: [ 'Scotch', 'Drambuie', 'Lemon peel'],
      instructions: "Pour the Scotch and Drambuie into an old-fashioned glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Green Demon",
      ingredients: [ 'Vodka', 'Rum', 'Midori melon liqueur', 'Lemonade', 'Cherry'],
      instructions: "Shake vodka, rum, and liqueur and pour over ice in a highball glass. Fill with lemonade, add the cherry on top, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Green Devil",
      ingredients: [ 'Gin', 'Green Creme de Menthe', 'Lime juice', 'Mint'],
      instructions: "Shake gin, creme de menthe, and lime juice with ice and strain into an old-fashioned glass over ice cubes. Decorate with mint leaves and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Rye Whiskey Cocktail",
      ingredients: [ 'Rye whiskey', 'Powdered sugar', 'Bitters', 'Cherry'],
      instructions: "Shake all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Saketini",
      ingredients: [ 'Gin', 'Sake', 'Olive'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the gin or vodka with the sake. Stir well. Strain into a cocktail glass. Garnish with the olive.",
      glass: 'Cocktail glass'
  },

  {
      name: "Green Dragon",
      ingredients: [ 'Kummel', 'Green Creme de Menthe', 'Gin', 'Lemon', 'Orange bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Salty Dog",
      ingredients: [ 'Grapefruit juice', 'Gin', 'Salt'],
      instructions: "Pour all ingredients over ice cubes in a highball glass. Stir well and serve. (Vodka may be substituted for gin, if preferred.)",
      glass: 'Highball glass'
  },

  {
      name: "Green Fizz",
      ingredients: [ 'Gin', 'Green Creme de Menthe', 'Lemon', 'Powdered sugar', 'Egg white', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over 2 ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Green Opal",
      ingredients: [ 'Anisette', 'Gin', 'Anis'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "San Francisco Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Dry Vermouth', 'Sloe gin', 'Orange bitters', 'Bitters', 'Cherry'],
      instructions: "Shake all ingredients (except cherry) with ice and strain into a cocktail glass. Add the cherry on top and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Greenback",
      ingredients: [ 'Gin', 'Green Creme de Menthe', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Sand-Grown-Un",
      ingredients: [ 'Dark rum', 'Sweet Vermouth', 'Cherry brandy', 'Lemon juice', 'Sugar'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktial glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sand-Martin Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Gin', 'Green Chartreuse'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Greenham's Grotto",
      ingredients: [ 'Gin', 'Brandy', 'Orgeat syrup', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Pour into an old-fashioned glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Sandra Buys A Dog",
      ingredients: [ 'Dark rum', 'Añejo rum', 'Cranberry juice', 'Orange juice', 'Bitters'],
      instructions: "Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well.",
      glass: 'Highball glass'
  },

  {
      name: "Santiago Cocktail",
      ingredients: [ 'Light rum', 'Grenadine', 'Lime', 'Powdered sugar'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Greyhound",
      ingredients: [ 'Gin', 'Grapefruit juice'],
      instructions: "Pour ingredients into a highball glass over ice cubes. Stir well and serve. (Vodka may be substituted for gin, if preferred.)",
      glass: 'Highball glass'
  },

  {
      name: "Saratoga Cocktail",
      ingredients: [ 'Brandy', 'Pineapple juice', 'Lemon juice', 'Maraschino liqueur', 'Bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Saucy Sue Cocktail",
      ingredients: [ 'Apple brandy', 'Apricot brandy', 'Pernod'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Grog",
      ingredients: [ 'Dark rum', 'Water'],
      instructions: "Pour the rum and the water into an old-fashioned glass with no ice cubes. Stir well.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Savannah",
      ingredients: [ 'Gin', 'Creme de Cacao', 'Orange', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Saxon Cocktail",
      ingredients: [ 'Light rum', 'Grenadine', 'Lime', 'Orange peel'],
      instructions: "Shake all ingredients (except orange peel) with ice and strain into a cocktail glass. Add the twist of orange peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Gypsy",
      ingredients: [ 'Sweet Vermouth', 'Maraschino cherry', 'Gin'],
      instructions: "In a mixing glass half-filled with ice cubes, combine gin and vermouth. Stir well. Strain into a cocktail glass and garnish with the cherry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sazerac",
      ingredients: [ 'Ricard', 'Sugar', 'Peychaud bitters', 'Water', 'Bourbon', 'Lemon peel'],
      instructions: "Pour Ricard into a glass and swirl around to coat glass, discard any excess. Place the sugar, Peychaud bitters, and water int othe glass and muddle with the back of a teaspoon. Almost fill the glass with ice cubes. Pour the bourbon over the ice cubes.",
      glass: 'vote'
  },

  {
      name: "Gypsy Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Gin', 'Cherry'],
      instructions: "Stir gin and vermouth with ice and strain into a cocktail glass. Add the cherry on top and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Scooter",
      ingredients: [ 'Brandy', 'Amaretto', 'Light cream'],
      instructions: "Shake all ingredients well with cracked ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Scotch And Water",
      ingredients: [ 'Scotch', 'Water'],
      instructions: "Pour the Scotch and the water into a highball glass almost filled with ice cubes. Stir well.",
      glass: 'Highball glass'
  },

  {
      name: "H.P.W. Cocktail",
      ingredients: [ 'Dry Vermouth', 'Sweet Vermouth', 'Gin', 'Orange peel'],
      instructions: "Stir all ingredients (except orange peel) with ice and strain into a cocktail glass. Add the twist of orange peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Scotch Bird Flyer",
      ingredients: [ 'Scotch', 'Triple sec', 'Light cream', 'Powdered sugar', 'Egg yolk'],
      instructions: "Shake all ingredients with ice, strain into a champagne flute, and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Scotch Bishop Cocktail",
      ingredients: [ 'Scotch', 'Dry Vermouth', 'Triple sec', 'Orange juice', 'Powdered sugar', 'Lemon peel'],
      instructions: "Shake all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Haidin-Haidin",
      ingredients: [ 'Light rum', 'Dry Vermouth', 'Bitters', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the rum, vermouth, and bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Scotch Cobbler",
      ingredients: [ 'Scotch', 'Brandy', 'Curacao', 'Orange', 'Mint'],
      instructions: "Pour scotch, brandy, and curacao over ice in an old-fashioned glass. Add the orange slice, top with the mint sprig, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Scotch Cooler",
      ingredients: [ 'Scotch', 'White Creme de Menthe', 'Carbonated water'],
      instructions: "Pour scotch and creme de menthe over ice cubes in a highball glass. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Scotch Daisy",
      ingredients: [ 'Scotch', 'Lemon juice', 'Sugar', 'Grenadine', 'Maraschino cherry', 'Orange'],
      instructions: "In a shaker half-filled with ice cubes, combine the Scotch, lemon juice, sugar, and grenadine. Shake well. Pour into an old-fashioned glass. Garnish with the cherry and the orange slice.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Scotch Fix",
      ingredients: [ 'Sugar', 'Lemon juice', 'Water', 'Scotch', 'Maraschino cherry', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine the sugar, lemon juice, and water. Shake well. Strain into a highball glass almost filled with crushed ice. Add the Scotch. Stir well and garnish with the cherry and the lemon slice.",
      glass: 'Highball glass'
  },

  {
      name: "Harlem Cocktail",
      ingredients: [ 'Gin', 'Pineapple juice', 'Maraschino liqueur', 'Pineapple'],
      instructions: "Shake gin, pineapple juice, and maraschino with ice and strain into a cocktail glass. Decorate with pineapple chunks and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Scotch Flip",
      ingredients: [ 'Scotch', 'Egg', 'Sugar', 'Light cream', 'Nutmeg'],
      instructions: "In a shaker half-filled with ice cubes, combine the Scotch, egg, sugar, and cream. Shake well. Strain into a sour glass and garnish with the nutmeg.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Scotch Highball",
      ingredients: [ 'Scotch', 'Carbonated water', 'Lemon peel'],
      instructions: "Pour scotch in a highball glass over ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Harvard Cooler",
      ingredients: [ 'Carbonated water', 'Apple brandy', 'Powdered sugar', 'Orange spiral', 'Lemon peel'],
      instructions: "Pour 2 oz. carbonated water in a collins glass. Add powdered sugar and stir. Add ice cubes and apple brandy. Fill with carbonated water and stir again. Add the twist of lemon peel and the spiral of orange so that the end dangles over rim of glass.",
      glass: 'Collins glass'
  },

  {
      name: "Scotch Holiday Sour",
      ingredients: [ 'Scotch', 'Cherry brandy', 'Sweet Vermouth', 'Lemon juice', 'Lemon'],
      instructions: "Shake all ingredients (except lemon slice) with ice and strain into an old-fashioned glass over ice cubes. Add the slice of lemon and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Scotch Mist",
      ingredients: [ 'Scotch', 'Ice', 'Lemon peel'],
      instructions: "Pack a collins glass with crushed ice. Pour in scotch. Add the twist of lemon peel and serve with a straw.",
      glass: 'Collins glass'
  },

  {
      name: "Harvey Wallbanger",
      ingredients: [ 'Vodka', 'Galliano', 'Orange juice'],
      instructions: "Pour vodka and orange juice into a collins glass over ice cubes and stir. Float Galliano on top and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Scotch Old-Fashioned",
      ingredients: [ 'Bitters', 'Scotch', 'Water', 'Sugar', 'Orange', 'Maraschino cherry'],
      instructions: "In an old-fashioned glass, muddle the bitters and water into the sugar cube, using the back of a teaspoon. Almost fill the glass with ice cubes and add the scotch. Garnish with the orange slice and the cherry. Serve with a swizzle stick.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Scotch Rickey",
      ingredients: [ 'Scotch', 'Lime', 'Carbonated water', 'Lime peel'],
      instructions: "Pour scotch and juice of lime into a highball glass over ice cubes. Fill with carbonated water and stir. Add the lime peel/rind and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Scotch Sour",
      ingredients: [ 'Scotch', 'Lime', 'Powdered sugar', 'Lemon', 'Cherry'],
      instructions: "Shake scotch, juice of lime, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with 1/2 slice lemon, top with the cherry, and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Hasty Cocktail",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Anis', 'Grenadine'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Screaming Banana Banshee",
      ingredients: [ 'Banana liqueur', 'Vodka', 'Creme de Cacao', 'Cream', 'Cherry'],
      instructions: "Shake all ingredients (except cherry) with ice and strain into a chilled cocktail glass. Add the cherry on top and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Hat Trick #1",
      ingredients: [ 'Dark rum', 'Light rum', 'Sweet Vermouth'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the dark rum, light rum, and vermouth. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Screwdriver",
      ingredients: [ 'Vodka', 'Orange juice'],
      instructions: "Put 3 ice cubes into a highball glass. Pour in vodka. Fill balance of glass with orange juice, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Seaboard",
      ingredients: [ 'Blended whiskey', 'Gin', 'Lemon juice', 'Powdered sugar', 'Mint'],
      instructions: "Shake all ingredients (except mint leaves) with ice and strain into an old-fashioned glass over ice cubes. Decorate with mint leaves and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Hat Trick #2",
      ingredients: [ 'Light rum', 'Dry Vermouth', 'Bitters', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the rum, vermouth, and bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Secret Place",
      ingredients: [ 'Dark rum', 'Cherry brandy', 'Dark Creme de Cacao', 'Coffee', 'Ice'],
      instructions: "Pour all of the ingredients into an Irish coffee glass filled with crushed ice. Stir well.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Sensation Cocktail",
      ingredients: [ 'Gin', 'Lemon', 'Maraschino liqueur', 'Mint'],
      instructions: "Shake all ingredients (except mint sprigs) with ice and strain into a cocktail glass. Add the sprigs of mint and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Havana Cocktail",
      ingredients: [ 'Light rum', 'Pineapple juice', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "September Morning",
      ingredients: [ 'Light rum', 'Cherry brandy', 'Lime juice', 'Grenadine', 'Egg white'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Serpentine",
      ingredients: [ 'Light rum', 'Brandy', 'Sweet Vermouth', 'Lemon juice', 'Sugar', 'Lemon peel'],
      instructions: "In a shaker half-filled with ice cubes, combine the rum, brandy, vermouth, lemon juice, and sugar. Shake well. Strain into a cocktail glass and garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Hawaiian Cocktail",
      ingredients: [ 'Gin', 'Triple sec', 'Pineapple juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Seventh Heaven Cocktail",
      ingredients: [ 'Gin', 'Grapefruit juice', 'Maraschino liqueur', 'Mint'],
      instructions: "Shake all ingredients (except mint sprig) with ice and strain into a cocktail glass. Add the sprig of mint and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sevilla Cocktail",
      ingredients: [ 'Light rum', 'Port', 'Powdered sugar', 'Egg'],
      instructions: "Shake all ingredients with ice, strain into a whiskey sour glass, and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Headless Horseman",
      ingredients: [ 'Vodka', 'Bitters', 'Ginger ale', 'Orange'],
      instructions: "Put vodka and bitters into a collins glass. Add several ice cubes, fill with ginger ale, and stir. Add the orange slice and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Sevilla Cocktail #2",
      ingredients: [ 'Light rum', 'Tawny port', 'Sugar', 'Egg'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Shady Lady",
      ingredients: [ 'Melon liqueur', 'Tequila', 'Grapefruit juice', 'Lime', 'Cherry'],
      instructions: "Pour melon liqueur, tequila, and grapefruit juice over ice in a highball glass and stir. Add the slice of lime, top with the cherry, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Highland Fling Cocktail",
      ingredients: [ 'Scotch', 'Sweet Vermouth', 'Orange bitters', 'Olive'],
      instructions: "Stir all ingredients (except olive) with ice and strain into a cocktail glass. Add the olive and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Shalom",
      ingredients: [ 'Vodka', 'Madeira', 'Orange juice', 'Orange'],
      instructions: "Shake all ingredients (except orange slice) with ice and strain into an old-fashioned glass over ice cubes. Add the slice of orange and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Shamrock",
      ingredients: [ 'Irish whiskey', 'Dry Vermouth', 'Green Creme de Menthe', 'Olive'],
      instructions: "Stir all ingredients (except olive) with ice and strain into a cocktail glass. Add the olive and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Highland Sling",
      ingredients: [ 'Sugar', 'Water', 'Lemon juice', 'Scotch', 'Lemon peel'],
      instructions: "In a shaker half-filled with ice cubes, combine the sugar, water, lemon juice, and Scotch. Shake well. Strain into a highball glass. Garnish with the lemon twist.",
      glass: 'Highball glass'
  },

  {
      name: "Shanghai Cocktail",
      ingredients: [ 'Light rum', 'Anisette', 'Grenadine', 'Lemon'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sherry Eggnog",
      ingredients: [ 'Sherry', 'Powdered sugar', 'Egg', 'Milk', 'Nutmeg'],
      instructions: "Shake sherry, powdered sugar, and egg with ice and strain into a collins glass. Fill with milk and stir. Sprinkle nutmeg on top and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Hokkaido Cocktail",
      ingredients: [ 'Gin', 'Triple sec', 'Sake'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sherry Flip",
      ingredients: [ 'Sherry', 'Light cream', 'Powdered sugar', 'Egg', 'Nutmeg'],
      instructions: "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Sherry Milk Punch",
      ingredients: [ 'Sherry', 'Milk', 'Powdered sugar', 'Nutmeg'],
      instructions: "Shake all ingredients (except nutmeg) with ice and strain into a collins glass. Sprinkle nutmeg on top and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Hole-In-One",
      ingredients: [ 'Scotch', 'Vermouth', 'Lemon juice', 'Orange bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Shriner Cocktail",
      ingredients: [ 'Sloe gin', 'Brandy', 'Sugar syrup', 'Bitters', 'Lemon peel'],
      instructions: "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sidecar",
      ingredients: [ 'Cognac', 'Triple sec', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sidecar Cocktail",
      ingredients: [ 'Brandy', 'Triple sec', 'Lemon'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Silent Broadsider",
      ingredients: [ 'Light rum', 'Anisette', 'Lemon juice', 'Grenadine'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Honeymoon Cocktail",
      ingredients: [ 'Apple brandy', 'Benedictine', 'Triple sec', 'Lemon'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Silk Stockings",
      ingredients: [ 'Tequila', 'Creme de Cacao', 'Grenadine', 'Light cream', 'Cinnamon'],
      instructions: "Shake all ingredients (except cinnamon) with ice and strain into a cocktail glass. Sprinkle cinnamon on top and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Silver Bronx",
      ingredients: [ 'Gin', 'Orange juice', 'Dry Vermouth', 'Sweet Vermouth', 'Egg white'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Honolulu Cocktail No. 2",
      ingredients: [ 'Gin', 'Benedictine', 'Maraschino liqueur'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Silver Bullet #1",
      ingredients: [ 'Gin', 'Scotch', 'Lemon peel'],
      instructions: "In a mixng glass half-filled with ice cubes, combine the gin and Scotch. Stir well. Strain into a shot glass. Carnish with the lemon twist.",
      glass: 'Shot glass'
  },

  {
      name: "Silver Cocktail",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Sugar syrup', 'Maraschino liqueur', 'Orange bitters', 'Lemon peel'],
      instructions: "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Silver King Cocktail",
      ingredients: [ 'Gin', 'Lemon', 'Powdered sugar', 'Orange bitters', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Silver Stallion Fizz",
      ingredients: [ 'Vanilla ice-cream', 'Gin', 'Carbonated water'],
      instructions: "Shake gin and vanilla ice-cream with ice and strain into a highball glass. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Hop Toad",
      ingredients: [ 'Apricot brandy', 'Light rum', 'Lime'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Singapore Sling",
      ingredients: [ 'Cherry brandy', 'Grenadine', 'Gin', 'Sweet and sour', 'Carbonated water', 'Cherry'],
      instructions: "Pour grenadine, gin, and sweet and sour into a collins glass over ice cubes and stir well. Fill with carbonated water and top with cherry brandy. Add the cherry on top and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Sir Walter Cocktail",
      ingredients: [ 'Brandy', 'Rum', 'Triple sec', 'Grenadine', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Hornpipe",
      ingredients: [ 'Gin', 'Cherry brandy', 'Egg white'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sister Starseeker",
      ingredients: [ 'Light rum', 'Lemon juice', 'Grenadine', 'Tonic water', 'Lemon'],
      instructions: "Pour the rum, lemon juice, grenadine, and tonic water into a highball glass almost filled with ice cubes. Stir well and garnish with the lemon wedge.",
      glass: 'Highball glass'
  },

  {
      name: "Horse And Jockey",
      ingredients: [ 'Añejo rum', 'Southern Comfort', 'Sweet Vermouth', 'Bitters'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sitarski",
      ingredients: [ 'Dark rum', 'Lime juice', 'Lemon juice', 'Grapefruit juice', 'Sugar'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old-fashioned glass almost filled with ice cubes.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Horse's Neck",
      ingredients: [ 'Lemon peel', 'Brandy', 'Ginger ale', 'Bitters'],
      instructions: "Place the lemon peel spiral in a highball glass and drape one end of it over the rim of the glass. Fill the glass with ice cubes. Pour the brandy, ginger ale, and bitters into the glass. Stir well.",
      glass: 'Highball glass'
  },

  {
      name: "Skip And Go Naked",
      ingredients: [ 'Gin', 'Sweet and sour', 'Beer'],
      instructions: "Pour gin and sweet and sour into a collins glass over ice cubes and stir well. Fill with chilled beer, stir lightly, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Sloe Gin Cocktail",
      ingredients: [ 'Sloe gin', 'Dry Vermouth', 'Orange bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sloe Gin Collins",
      ingredients: [ 'Sloe gin', 'Lemon', 'Carbonated water', 'Lemon', 'Orange', 'Cherry'],
      instructions: "Shake sloe gin and juice of lemon with ice and strain into a collins glass. Add several ice cubes, fill with carbonated water, and stir. Add slices of lemon and orange, top with the cherry, and serve with a straw.",
      glass: 'Collins glass'
  },

  {
      name: "Sloe Gin Flip",
      ingredients: [ 'Sloe gin', 'Light cream', 'Powdered sugar', 'Egg', 'Nutmeg'],
      instructions: "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Sloe Gin Rickey",
      ingredients: [ 'Sloe gin', 'Lime', 'Carbonated water', 'Lime'],
      instructions: "Pour sloe gin and juice of lime into a highball glass over ice cubes. Fill with carbonated water and stir. Drop the wedge of lime in glass and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Sloe Vermouth",
      ingredients: [ 'Dry Vermouth', 'Sloe gin', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Horsley's Honor",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Applejack', 'Triple sec', 'Orange'],
      instructions: "In an old-fashioned glass almost filled with ice cubes, combine the gin, vermouth, applejack, and triple sec. Stir well and garnish with the orange slice",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Sloeberry Cocktail",
      ingredients: [ 'Sloe gin', 'Bitters'],
      instructions: "Stir ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sloppy Joe's Cocktail No. 1",
      ingredients: [ 'Light rum', 'Dry Vermouth', 'Triple sec', 'Grenadine', 'Lime'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Hot Gold",
      ingredients: [ 'Amaretto', 'Orange juice', 'Cinnamon'],
      instructions: "Gently heat the orange juice and pour it into a red wine glass. Add amaretto. Garnish with a stick of cinnamon.",
      glass: 'Red wine glass'
  },

  {
      name: "Sloppy Joe's Cocktail No. 2",
      ingredients: [ 'Brandy', 'Triple sec', 'Port', 'Pineapple juice', 'Grenadine'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Slow Comfortable Screw",
      ingredients: [ 'Sloe gin', 'Southern Comfort', 'Orange juice'],
      instructions: "Pour sloe gin and Southern Comfort into a collins glass filled with ice. Fill with orange juice, stir well, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Slow Screw",
      ingredients: [ 'Sloe gin', 'Orange juice'],
      instructions: "Pour sloe gin into a highball glass filled with ice. Fill with orange juice, stir well, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Sly Goes To Havana",
      ingredients: [ 'Light rum', 'Creme de Cacao', 'Green Chartreuse', 'Pineapple juice', 'Lime juice', 'Ice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old fashioned glass alomst filed with crushed ice.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Smart Christine",
      ingredients: [ 'Gin', 'Benedictine', 'Orange juice', 'Maraschino cherry'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, Benedictine, and orange juice. Shake well. Strain into an old-fashioned glass almost filled with ice cubes. Garnish with the cherry.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Smile Cocktail",
      ingredients: [ 'Gin', 'Grenadine', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Hot Springs Cocktail",
      ingredients: [ 'White wine', 'Pineapple juice', 'Maraschino liqueur', 'Orange bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Smiler Cocktail",
      ingredients: [ 'Dry Vermouth', 'Sweet Vermouth', 'Gin', 'Orange juice', 'Bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Hotel Plaza Cocktail",
      ingredients: [ 'Dry Vermouth', 'Sweet Vermouth', 'Gin', 'Pineapple'],
      instructions: "Stir all ingredients (except pineapple) with ice and strain into a cocktail glass. Decorate with the crushed slice of pineapple and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Howell Says So",
      ingredients: [ 'Dark rum', 'Triple sec', 'Amaretto', 'Lemon juice', 'Orange bitters'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old-fashioned glass almost filled with ice cubes.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Hudson Bay",
      ingredients: [ 'Cherry brandy', 'Gin', '151 proof rum', 'Orange juice', 'Lime juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Hummer",
      ingredients: [ 'Coffee liqueur', 'Light rum', 'Vanilla ice-cream'],
      instructions: "Blend all ingredients in an electric blender at a low speed for a short length of time. Pour into a highball glass and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Hurricane",
      ingredients: [ 'Light rum', 'Dark rum', 'Passion fruit syrup', 'Lime juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Ice-Cream Flip",
      ingredients: [ 'Triple sec', 'Maraschino liqueur', 'Vanilla ice-cream', 'Egg', 'Nutmeg'],
      instructions: "Shake all ingredients (except nutmeg) with ice and strain into a coupette glass. Sprinkle nutmeg on top and serve.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Ideal Cocktail",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Maraschino liqueur', 'Grapefruit juice', 'Cherry'],
      instructions: "Shake all ingredients (except cherry) with ice and strain into a cocktail glass. Add the cherry on top and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Ice Palace",
      ingredients: [ 'Light rum', 'Galliano', 'Apricot brandy', 'Pineapple juice', 'Lemon juice', 'Orange'],
      instructions: "Shake all ingredients (except orange slice) with ice and strain into a collins glass over ice cubes. Garnish with the slice of orange and a cherry (if desired) and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Iguana",
      ingredients: [ 'Vodka', 'Tequila', 'Coffee liqueur', 'Sweet and sour', 'Lime'],
      instructions: "Shake all ingredients (except lime slice) with ice and strain into a chilled cocktail glass. Add the lime slice and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Immaculata",
      ingredients: [ 'Light rum', 'Amaretto', 'Lime juice', 'Lemon juice', 'Sugar'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Imperial Fizz",
      ingredients: [ 'Light rum', 'Blended whiskey', 'Lemon', 'Powdered sugar', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Irish Rickey",
      ingredients: [ 'Irish whiskey', 'Lime', 'Lime', 'Carbonated water'],
      instructions: "Pour Irish whiskey and juice of lime into a highball glass over ice cubes. Fill with carbonated water and stir. Add the wedge of lime and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Irish Spring",
      ingredients: [ 'Irish whiskey', 'Peach brandy', 'Orange juice', 'Sweet and sour', 'Orange', 'Cherry'],
      instructions: "Pour all ingredients (except orange slice and cherry) into a collins glass over ice cubes. Garnish with the slice of orange, add the cherry on top, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Italian Delight",
      ingredients: [ 'Amaretto', 'Orange juice', 'Cream', 'Cherry'],
      instructions: "Shake all ingredients (except cherry) with ice and strain into a chilled cocktail glass. Add the cherry on top and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Italian Heather",
      ingredients: [ 'Scotch', 'Galliano', 'Ice', 'Lime'],
      instructions: "Pour the scotch and Galliano into an old-fashioned glass almost filled with crushed ice. Stir well. Garnish with the lime wedge.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Italian Sombrero",
      ingredients: [ 'Amaretto', 'Light cream'],
      instructions: "Shake amaretto and cream well, pour into a champagne flute, and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "J. R.'s Godchild",
      ingredients: [ 'Bourbon', 'Amaretto', 'Milk'],
      instructions: "In a shaker half-filled with ice cubes, combine the boubon, amaretto, and milk. Shake well. Pour into an old-fashioned glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "J. R.'s Godfather",
      ingredients: [ 'Bourbon', 'Amaretto'],
      instructions: "In an old-fashioned glass almost filled with ice cubes, combine both of the ingredients. Stir to mix the flavors.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "J. R.'s Revenge",
      ingredients: [ 'Bourbon', 'Southern Comfort', 'Bitters'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Jack Rose Cocktail",
      ingredients: [ 'Apple brandy', 'Grenadine', 'Lime'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Jack-In-The-Box",
      ingredients: [ 'Apple brandy', 'Pineapple juice', 'Bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Smith And Kearns",
      ingredients: [ 'Kahlua', 'Light cream', 'Carbonated water'],
      instructions: "Pour Kahlua and light cream into a highball glass filled with ice and stir well. Fill with carbonated water, stir lightly, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Snyder",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Triple sec', 'Lemon peel'],
      instructions: "Shake all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Jade",
      ingredients: [ 'Light rum', 'Green Creme de Menthe', 'Triple sec', 'Lime juice', 'Powdered sugar', 'Lime'],
      instructions: "Shake all ingredients (except lime slice) with ice and strain into a cocktail glass. Add the slice of lime and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sol Y Sombra",
      ingredients: [ 'Brandy', 'Anisette'],
      instructions: "Shake ingredients with ice, strain into a brandy snifter, and serve. (The English translation of the name of this drink is 'Sun and Shade', and after sampling this drink, you'll understand why. Thanks, Kirby.)",
      glass: 'Brandy snifter'
  },

  {
      name: "Sombrero",
      ingredients: [ 'Coffee brandy', 'Light cream'],
      instructions: "Pour brandy into an old-fashioned glass over ice cubes. Float cream on top and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Son Of Adam",
      ingredients: [ 'Light rum', 'Apricot brandy', 'Lemon juice', 'Sugar', 'Grenadine'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Jamaica Glow",
      ingredients: [ 'Gin', 'Rum', 'Red wine', 'Orange juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sonny Gets Kissed",
      ingredients: [ 'Light rum', 'Apricot brandy', 'Lime juice', 'Lemon juice', 'Sugar'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Soother Cocktail",
      ingredients: [ 'Apple brandy', 'Brandy', 'Triple sec', 'Lemon', 'Powdered sugar'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Soul Kiss Cocktail",
      ingredients: [ 'Dry Vermouth', 'Bourbon', 'Dubonnet Rouge', 'Orange juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Jamaica Hop",
      ingredients: [ 'Coffee brandy', 'Creme de Cacao', 'Light cream'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "South Of The Border",
      ingredients: [ 'Tequila', 'Coffee brandy', 'Lime', 'Lime'],
      instructions: "Shake all ingredients (except lime slice) with ice and strain into a whiskey sour glass. Add the slice of lime and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Southern Belle",
      ingredients: [ 'Brandy', 'Creme de Cacao', 'Benedictine'],
      instructions: "Pour the brandy into a pousse cafe glass. Tilt the glass to a 45-degree angle and slowly pour the creme de cacao down the side of the glass so that it floats on the brandy. Repeat this precedure with the Benedictine.",
      glass: 'Pousse cafe glass'
  },

  {
      name: "Southern Bride",
      ingredients: [ 'Gin', 'Grapefruit juice', 'Maraschino liqueur'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Southern Gin Cocktail",
      ingredients: [ 'Gin', 'Triple sec', 'Orange bitters', 'Lemon peel'],
      instructions: "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Soviet",
      ingredients: [ 'Vodka', 'Sherry', 'Dry Vermouth', 'Lemon peel'],
      instructions: "Shake all ingredients (except lemon peel) with ice and strain into an old-fashioned glass over ice cubes. Add the twist of lemon peel and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Spark In The Night",
      ingredients: [ 'Dark rum', 'Kahlua', 'Lime juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Special Rough Cocktail",
      ingredients: [ 'Brandy', 'Apple brandy', 'Anisette'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Spencer Cocktail",
      ingredients: [ 'Apricot brandy', 'Gin', 'Orange juice', 'Bitters', 'Orange peel', 'Cherry'],
      instructions: "Shake brandy, gin, orange juice, and bitters with ice and strain into a cocktail glass. Add the twist of orange peel, top with the cherry, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Jamaican Banana",
      ingredients: [ 'Light rum', 'Creme de Cacao', 'Creme de Banane', 'Vanilla ice-cream', 'Half-and-half', 'Banana'],
      instructions: "Blend all ingredients (except sliced banana) in an electric blender at a low speed for a short length of time. Pour into a large brandy snifter and add sliced banana. Sprinkle lightly with nutmeg, top with a whole strawberry, and serve.",
      glass: 'Brandy snifter'
  },

  {
      name: "Sphinx Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Dry Vermouth', 'Gin', 'Lemon'],
      instructions: "Stir all ingredients (except lemon slice) with ice and strain into a cocktail glass. Add the slice of lemon and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Spring Feeling Cocktail",
      ingredients: [ 'Gin', 'Green Chartreuse', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "St. Charles Punch",
      ingredients: [ 'Brandy', 'Triple sec', 'Port', 'Lemon', 'Sugar', 'Lemon'],
      instructions: "Shake all ingredients (except port) with ice and strain into a collins glass over ice cubes. Top with port, add the slice of lemon, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "St. Patrick's Day",
      ingredients: [ 'Green Creme de Menthe', 'Green Chartreuse', 'Irish whiskey', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "James The Second Comes First",
      ingredients: [ 'Scotch', 'Tawny port', 'Dry Vermouth', 'Bitters'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Stanley Cocktail",
      ingredients: [ 'Light rum', 'Gin', 'Lemon', 'Grenadine'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Stanley Senior",
      ingredients: [ 'Light rum', 'Grapefruit juice', 'Cranberry liqueur'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Japanese",
      ingredients: [ 'Brandy', 'Orgeat syrup', 'Lime juice', 'Bitters', 'Lime peel'],
      instructions: "Shake all ingredients (except lime peel) with ice and strain into a cocktail glass. Add the twist of lime peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Japanese Fizz",
      ingredients: [ 'Blended whiskey', 'Lemon', 'Powdered sugar', 'Port', 'Egg white', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Jersey Lightning",
      ingredients: [ 'Sweet Vermouth', 'Apple brandy', 'Lime'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Jet Black",
      ingredients: [ 'Gin', 'Sweet Vermouth', 'Black Sambuca'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Jewel Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Green Chartreuse', 'Gin', 'Orange bitters', 'Cherry'],
      instructions: "Stir all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Jeyplak Cocktail",
      ingredients: [ 'Gin', 'Sweet Vermouth', 'Anis', 'Cherry'],
      instructions: "Stir all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Jewel Of The Nile",
      ingredients: [ 'Gin', 'Green Chartreuse', 'Yellow Chartreuse'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Jillionaire",
      ingredients: [ 'Bourbon', 'Triple sec', 'Grenadine', 'Egg white'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well and strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Jock Collins",
      ingredients: [ 'Scotch', 'Lemon juice', 'Sugar', 'Club soda', 'Maraschino cherry', 'Orange'],
      instructions: "In a shaker half-filled with ice cubes, combine the Scotch, lemon juice, and sugar. Shake well. Strain into a collins glass alost filled with ice cubes. Add the club soda. Stir and garnish with the cherry and the orange slice.",
      glass: 'Collins glass'
  },

  {
      name: "Jock-In-A-Box",
      ingredients: [ 'Scotch', 'Sweet Vermouth', 'Lemon juice', 'Egg'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old-fashioned glass half-filled with ice cubes.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Joe Collins",
      ingredients: [ 'Scotch', 'Sweet and sour', 'Coca-Cola', 'Cherry'],
      instructions: "Pour scotch and sweet and sour into a collins glass over ice cubes and stir well. Fill with cola and stir lightly. Top with the cherry and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Jocose Julep",
      ingredients: [ 'Bourbon', 'Green Creme de Menthe', 'Lime juice', 'Sugar', 'Mint', 'Carbonated water'],
      instructions: "Blend all ingredients (except carbonated water) in an electric blender at a low speed for a short length of time. Pour into a collins glass over ice cubes. Fill with carbonated water and serve.",
      glass: 'Collins glass'
  },

  {
      name: "John Collins",
      ingredients: [ 'Bourbon', 'Lemon juice', 'Sugar', 'Club soda', 'Maraschino cherry', 'Orange'],
      instructions: "In a shaker half-filled with ice cubes, combine the bourbon, lemon juice, and sugar. Shake well. Strain into a collins glass almost filled with ice cubes. Add the club soda. Stir and garnish with the cherry and the orange slice.",
      glass: 'Collins glass'
  },

  {
      name: "Johnnie Cocktail",
      ingredients: [ 'Sloe gin', 'Triple sec', 'Anisette'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Jolly Rancher",
      ingredients: [ 'Melon liqueur', 'Blueberry schnapps', 'Sweet and sour', 'Grenadine', 'Cherry'],
      instructions: "Shake melon liqueur and blueberry schnapps with ice and strain into an old-fashioned glass over ice cubes. Fill with sweet and sour, add grenadine for color, and stir. Add cherry on top and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Jonesey",
      ingredients: [ 'Dark rum', 'Dark Creme de Cacao'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the rum and creme de cacao. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Joulouville",
      ingredients: [ 'Gin', 'Apple brandy', 'Sweet Vermouth', 'Lemon juice', 'Grenadine'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Journalist Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Dry Vermouth', 'Gin', 'Triple sec', 'Lemon juice', 'Bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Joy-To-The-World",
      ingredients: [ 'Añejo rum', 'Bourbon', 'Dark Creme de Cacao'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Judgette Cocktail",
      ingredients: [ 'Dry Vermouth', 'Peach brandy', 'Gin', 'Lime', 'Cherry'],
      instructions: "Shake all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "K.G.B.",
      ingredients: [ 'Gin', 'Kirschwasser', 'Apricot brandy', 'Lemon juice', 'Sugar', 'Lemon peel'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, kirschwasser, apricot brandy, and lemon juice. Shake well. Strain into a highball glass almost filled with ice cubes. Garnish with the lemon twist.",
      glass: 'Highball glass'
  },

  {
      name: "K.G.B. Cocktail",
      ingredients: [ 'Gin', 'Kummel', 'Apricot brandy', 'Lemon juice', 'Lemon peel'],
      instructions: "Shake all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Kamikaze",
      ingredients: [ 'Vodka', 'Triple sec', 'Lime juice'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Kentucky B And B",
      ingredients: [ 'Bourbon', 'Benedictine'],
      instructions: "Pour the bourbon and Benedictine into a brandy snifter.",
      glass: 'Brandy snifter'
  },

  {
      name: "Kentucky Colonel",
      ingredients: [ 'Bourbon', 'Benedictine', 'Lemon peel'],
      instructions: "In a shaker half-filled with ice cubes combine the courbon and Benedictine. Shake and strain into a cocktail glass. Garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Kentucky Colonel Cocktail",
      ingredients: [ 'Bourbon', 'Benedictine', 'Lemon peel'],
      instructions: "Stir bourbon and Benedictine with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "King Cole Cocktail",
      ingredients: [ 'Blended whiskey', 'Orange', 'Pineapple', 'Powdered sugar'],
      instructions: "Muddle orange slice, pineapple slice, and powdered sugar in an old-fashioned glass. Add blended whiskey and 2 ice cubes, stir well, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Kiss-In-The-Dark",
      ingredients: [ 'Cherry brandy', 'Dry Vermouth', 'Gin'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Klondike Cooler",
      ingredients: [ 'Blended whiskey', 'Carbonated water', 'Powdered sugar', 'Lemon peel', 'Orange spiral'],
      instructions: "Mix powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice and add blended whiskey. Fill with carbonated water and stir. Add twist of lemon peel and orange spiral so that the end dangles over rim of glass.",
      glass: 'Collins glass'
  },

  {
      name: "Knickerbocker Cocktail",
      ingredients: [ 'Dry Vermouth', 'Sweet Vermouth', 'Gin', 'Lemon peel'],
      instructions: "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Knock-Out Cocktail",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Anis', 'White Creme de Menthe', 'Cherry'],
      instructions: "Stir all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Krazee Keith",
      ingredients: [ 'Light rum', 'Anisette', 'Lemon juice', 'Coca-Cola', 'Cherry brandy', 'Lemon'],
      instructions: "In a shaker half-filled with ice cubes, combine the rum, anisette, cherry brandy and lemon juice. Shake well. Strain into a highball glass almost filled with ice cubes. Add the cola and stir well. Garnish with the lemon wedge.",
      glass: 'Highball glass'
  },

  {
      name: "Kretchma Cocktail",
      ingredients: [ 'Vodka', 'Creme de Cacao', 'Grenadine', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "L'aird Of Summer Isle",
      ingredients: [ 'Scotch', 'Pernod', 'Pineapple juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old-fashioned glass almost filled with ice cubes.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "La Jolla",
      ingredients: [ 'Brandy', 'Creme de Banane', 'Orange juice', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "La Stephanique",
      ingredients: [ 'Gin', 'Triple sec', 'Sweet Vermouth', 'Bitters'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Ladies Cocktail",
      ingredients: [ 'Blended whiskey', 'Anisette', 'Bitters', 'Pineapple'],
      instructions: "Stir all ingredients (except pineapple) with ice and strain into a cocktail glass. Add the pineapple stick on top and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Lady Be Good",
      ingredients: [ 'Brandy', 'White Creme de Menthe', 'Sweet Vermouth'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Lady Finger",
      ingredients: [ 'Cherry brandy', 'Gin', 'Kirschwasser'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Lady Love Fizz",
      ingredients: [ 'Gin', 'Light cream', 'Powdered sugar', 'Lemon', 'Egg white', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a cocktail glass over two ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Lamb Brothers",
      ingredients: [ 'Dark rum', 'Creme de Cassis', 'Pineapple juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Landed Gentry",
      ingredients: [ 'Dark rum', 'Tia maria', 'Heavy cream'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Lasky Cocktail",
      ingredients: [ 'Gin', 'Grape juice', 'Swedish Punsch'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Lawhill Cocktail",
      ingredients: [ 'Blended whiskey', 'Dry Vermouth', 'Anis', 'Maraschino liqueur', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Starseeker",
      ingredients: [ 'Light rum', 'Orange juice', 'Grenadine', 'Tonic water'],
      instructions: "Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well and garnish with the lemon wedge.",
      glass: 'Highball glass'
  },

  {
      name: "Leaning Tower",
      ingredients: [ 'Ice', 'Gin', 'Dry Vermouth', 'Orange bitters'],
      instructions: "In a mixing glass half-filled with crushed ice, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Stiletto",
      ingredients: [ 'Amaretto', 'Blended whiskey', 'Lemon'],
      instructions: "Pour all ingredients into an old-fashioned glass over ice cubes, stir, and serve. (Bourbon may be substituted for blended whiskey, if preferred.)",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Stinger",
      ingredients: [ 'Brandy', 'White Creme de Menthe'],
      instructions: "Shake ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Leap Frog Highball",
      ingredients: [ 'Gin', 'Lemon', 'Ginger ale'],
      instructions: "Pour gin and juice of lemon over ice cubes in a highball glass. Fill with ginger ale, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Stirrup Cup",
      ingredients: [ 'Cherry brandy', 'Brandy', 'Lemon', 'Sugar'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Stone Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Sherry', 'Light rum'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Leap Year Cocktail",
      ingredients: [ 'Gin', 'Grand Marnier', 'Sweet Vermouth', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Leave-It-To-Me Cocktail",
      ingredients: [ 'Gin', 'Raspberry syrup', 'Lemon juice', 'Maraschino liqueur'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Stone Fence",
      ingredients: [ 'Whiskey', 'Apple cider', 'Bitters'],
      instructions: "Fill a highball glass with ice cubes. Add whiskey and bitters and fill with apple cider. Both Bourbon and Scotch can be used.",
      glass: 'Highball glass'
  },

  {
      name: "Lil Naue",
      ingredients: [ 'Brandy', 'Apricot brandy', 'Port', 'Powdered sugar', 'Egg yolk', 'Cinnamon'],
      instructions: "Shake all ingredients (except cinnamon) with ice and strain into a red wine glass. Sprinkle cinnamon on top and serve.",
      glass: 'Red wine glass'
  },

  {
      name: "Linstead Cocktail",
      ingredients: [ 'Blended whiskey', 'Pineapple juice', 'Sugar', 'Anis', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Stone Sour",
      ingredients: [ 'Apricot brandy', 'Orange juice', 'Sweet and sour'],
      instructions: "Shake all ingredients with ice, strain into a chilled whiskey sour glass, and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Little Princess Cocktail",
      ingredients: [ 'Light rum', 'Sweet Vermouth'],
      instructions: "In a mixing glass half-filled with ice cubes, combine both of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Loch Lomond",
      ingredients: [ 'Scotch', 'Drambuie', 'Dry Vermouth', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the Scotch, Drambuie, and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "London Buck",
      ingredients: [ 'Gin', 'Maraschino liqueur', 'Orange bitters', 'Sugar syrup', 'Lemon peel'],
      instructions: "Stir all ingredients (except lemon peel) with ice and strain into a highball glass. Add the twist of lemon peel and serve.",
      glass: 'Highball glass'
  },

  {
      name: "London Town",
      ingredients: [ 'Gin', 'Maraschino liqueur', 'Orange bitters'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Lone Tree Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Gin'],
      instructions: "Stir ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Long Island Tea",
      ingredients: [ 'Vodka', 'Light rum', 'Gin', 'Tequila', 'Lemon', 'Coca-Cola'],
      instructions: "Combine all ingredients (except cola) and pour over ice in a highball glass. Add the splash of cola for color. Decorate with a slice of lemon and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Lone Tree Cooler",
      ingredients: [ 'Carbonated water', 'Gin', 'Dry Vermouth', 'Powdered sugar', 'Orange spiral', 'Lemon peel'],
      instructions: "Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice, add gin and vermouth, and stir. Fill with carbonated water and stir again. Add the twist of lemon peel and the orange spiral so that the end dangles over rim of glass.",
      glass: 'Collins glass'
  },

  {
      name: "Lord And Lady",
      ingredients: [ 'Dark rum', 'Tia maria'],
      instructions: "Pour the rum and Tia Maria into an old-fashioned glass almost filled with ice cubes. Stir well.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Los Angeles Cocktail",
      ingredients: [ 'Blended whiskey', 'Sweet Vermouth', 'Lemon', 'Powdered sugar', 'Egg'],
      instructions: "Shake all ingredients with ice, strain into a whiskey sour glass, and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Love For Toby",
      ingredients: [ 'Light rum', 'Brandy', 'Cherry brandy', 'Lime juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Ludwig And The Gang",
      ingredients: [ 'Añejo rum', 'Vodka', 'Amaretto', 'Southern Comfort', 'Bitters', 'Ice'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into an old-fashioned glass almost filled with crushed ice.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Lugger",
      ingredients: [ 'Apple brandy', 'Brandy', 'Apricot brandy'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Ma Bonnie Wee Hen",
      ingredients: [ 'Scotch', 'Sherry', 'Orange juice', 'Lemon juice', 'Grenadine'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Ma Wee Hen",
      ingredients: [ 'Scotch', 'Sherry', 'Orange juice', 'Lemon juice', 'Grenadine'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Macbeth's Dream",
      ingredients: [ 'Scotch', 'Curacao', 'Amaretto', 'Orange bitters', 'Lemon juice', 'Sugar'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Madras",
      ingredients: [ 'Vodka', 'Cranberry juice', 'Orange juice', 'Lime'],
      instructions: "Pour all ingredients (except lime wedge) into a highball glass over ice. Add the lime wedge and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Maestro",
      ingredients: [ 'Añejo rum', 'Sherry', 'Lime juice', 'Ice', 'Ginger ale', 'Lemon peel'],
      instructions: "In a shaker half-filled with ice cubes, combine the rum, sherry, and lime juice. Shake well. Strain into a collins glass almost filled with crushed ice. Top with the ginger ale. Garnish with the lemon twist.",
      glass: 'Collins glass'
  },

  {
      name: "Mai Tai",
      ingredients: [ 'Light rum', 'Orgeat syrup', 'Triple sec', 'Sweet and sour', 'Cherry'],
      instructions: "Shake all ingredients (except cherry) with ice and strain into a collins glass over several ice cubes. Top with the cherry and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Maiden's Blush",
      ingredients: [ 'Gin', 'Triple sec', 'Cherry brandy', 'Lemon juice', 'Maraschino cherry'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, triple sec, cherry brandy, and lemon juice. Shake well. Strain into a cocktail glass. Garnish with the cherry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Maiden's Prayer",
      ingredients: [ 'Gin', 'Triple sec', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Maiden-No-More",
      ingredients: [ 'Gin', 'Triple sec', 'Brandy', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Malibu Wave",
      ingredients: [ 'Tequila', 'Triple sec', 'Blue Curacao', 'Sweet and sour', 'Lime'],
      instructions: "Shake all ingredients (except lime slice) with ice and strain into a chilled cocktail glass. Add the slice of lime and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Mallelieu",
      ingredients: [ 'Light rum', 'Grand Marnier', 'Orange juice'],
      instructions: "Pour the rum, Grand Marnier, and orange juice into an old-fashioned glass almost filled with ice cubes. Stir well.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Man Of The Moment",
      ingredients: [ 'Scotch', 'Grand Marnier', 'Lemon juice', 'Grenadine'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Mamie Gilroy",
      ingredients: [ 'Scotch', 'Lime', 'Ginger ale'],
      instructions: "Pour all ingredients into a collins glass over ice cubes, stir, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Mandeville",
      ingredients: [ 'Light rum', 'Dark rum', 'Anisette', 'Lemon juice', 'Grenadine', 'Coca-Cola'],
      instructions: "In a shaker half-filled with ice cubes, combine the light rum, dark rum, anisette, lemon juice, and grenadine. Shake well. Strain into an old-fashioned glass almost filled with ice cubes. Top with the cola. Stir well.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Manhasset",
      ingredients: [ 'Blended whiskey', 'Sweet Vermouth', 'Dry Vermouth', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Manhattan Dry #2",
      ingredients: [ 'Blended whiskey', 'Dry Vermouth', 'Olive'],
      instructions: "Stir vermouth and blended whiskey with ice and strain into a cocktail glass. Add the olive and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Manila Fizz",
      ingredients: [ 'Gin', 'Root beer', 'Lemon', 'Egg', 'Powdered sugar'],
      instructions: "Shake all ingredients with ice, strain into a highball glass over two ice cubes, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Mardee Mine",
      ingredients: [ 'Dark rum', 'Sweet Vermouth', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the rum and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Margaret In The Marketplace",
      ingredients: [ 'Añejo rum', 'Lime juice', 'Grenadine', 'Light cream'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Margarita #2",
      ingredients: [ 'Tequila', 'Triple sec', 'Lemon juice', 'Salt'],
      instructions: "Rub rim of margarita glass with lemon juice, dip rim in salt. Shake all ingredients with ice, strain into the salt-rimmed glass, and serve. (See also Frozen Margarita.)",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Martinez Cocktail",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Triple sec', 'Orange bitters', 'Cherry'],
      instructions: "Stir all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Martini #2",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the gin and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist or an olive.",
      glass: 'Cocktail glass'
  },

  {
      name: "Martini #3",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the gin and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist or an olive.",
      glass: 'Cocktail glass'
  },

  {
      name: "Martini #4",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Lemon peel', 'Lemon-lime soda'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the gin and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist or the olive.",
      glass: 'Cocktail glass'
  },

  {
      name: "Martini (Dry) (5-to-1)",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Olive'],
      instructions: "Stir gin and vermouth with ice in a mixing glass. Strain into a cocktail glass, add the olive, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Martini (Sweet)",
      ingredients: [ 'Gin', 'Sweet Vermouth', 'Olive'],
      instructions: "Stir gin and vermouth with ice and strain into a cocktail glass. Add the olive and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Martini (Traditional 2-to-1)",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Olive'],
      instructions: "Stir gin and vermouth over ice cubes in a mixing glass. Strain into a cocktail glass, add the olive, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Mary Garden Cocktail",
      ingredients: [ 'Dubonnet Rouge', 'Dry Vermouth'],
      instructions: "Stir ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Mary Pickford Cocktail",
      ingredients: [ 'Light rum', 'Pineapple juice', 'Maraschino liqueur', 'Grenadine', 'Maraschino cherry'],
      instructions: "In a shaker half-filled with ice cubes, combine the rum, pineapple juice, maraschino liqueur, and grenadine. Shake well. Strain into a cocktail glass. Garnish with the cherry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Mary's Dream",
      ingredients: [ 'Light rum', 'Triple sec', 'Orange juice', 'Orange bitters', 'Orange'],
      instructions: "Pour the rum, triple sec, orange juice, and orange bitters into a highball glass almost filled with ice cubes. Stir well and garnish with the orange slice.",
      glass: 'Highball glass'
  },

  {
      name: "Max The Silent",
      ingredients: [ 'Añejo rum', 'Brandy', 'Applejack', 'Anisette'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Maxim",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Creme de Cacao'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "May Blossum Fizz",
      ingredients: [ 'Swedish Punsch', 'Grenadine', 'Lemon', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Mcclelland Cocktail",
      ingredients: [ 'Sloe gin', 'Triple sec', 'Orange bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "McDuff",
      ingredients: [ 'Scotch', 'Triple sec', 'Bitters', 'Orange'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the Scotch, triple sec, and bitters. Stir well. Strain into a cocktail glass. Garnish with the orange slice.",
      glass: 'Cocktail glass'
  },

  {
      name: "Melon Cocktail",
      ingredients: [ 'Gin', 'Lemon juice', 'Maraschino liqueur', 'Cherry'],
      instructions: "Shake all ingredients (except cherry) with ice and strain into a cocktail glass. Add the cherry on top and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Menage A Trois",
      ingredients: [ 'Dark rum', 'Triple sec', 'Light cream'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Merry Widow",
      ingredients: [ 'Cherry brandy', 'Maraschino liqueur', 'Cherry'],
      instructions: "Stir maraschino and cherry brandy with ice and strain into a cocktail glass. Add the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Merry Widow Fizz",
      ingredients: [ 'Sloe gin', 'Orange', 'Lemon', 'Egg white', 'Powdered sugar', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Metropolitan",
      ingredients: [ 'Ice', 'Sugar', 'Brandy', 'Sweet Vermouth', 'Bitters'],
      instructions: "In a shaker half-filled with crushed ice, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Metropolitan Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Brandy', 'Sugar syrup', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Mexicola",
      ingredients: [ 'Tequila', 'Lime', 'Coca-Cola'],
      instructions: "Pour tequila and juice of lime over ice cubes in a collins glass. Fill with cola, stir, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Miami Beach Cocktail",
      ingredients: [ 'Dry Vermouth', 'Scotch', 'Grapefruit juice'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Midnight Cowboy",
      ingredients: [ 'Bourbon', 'Dark rum', 'Heavy cream'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Mikado",
      ingredients: [ 'Brandy', 'Triple sec', 'Creme de Noyaux', 'Grenadine', 'Bitters'],
      instructions: "In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Mikado Cocktail",
      ingredients: [ 'Brandy', 'Triple sec', 'Grenadine', 'Creme de Noyaux', 'Bitters'],
      instructions: "Pour all ingredients over ice cubes in an old-fashioned glass, stir, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Million-Dollar Cocktail",
      ingredients: [ 'Gin', 'Sweet Vermouth', 'Pineapple juice', 'Grenadine', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Mimosa",
      ingredients: [ 'Champagne', 'Orange juice'],
      instructions: "Pour orange juice into a collins glass over two ice cubes. Fill with chilled champagne, stir very gently, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Mint Collins",
      ingredients: [ 'Gin', 'Lemon', 'Carbonated water', 'Orange', 'Lemon', 'Cherry'],
      instructions: "Shake gin and juice of lemon with ice and strain into a collins glass over ice cubes. Fill with carbonated water and stir. Add slices of orange and lemon, top with the cherry, and serve with a straw.",
      glass: 'Collins glass'
  },

  {
      name: "Mint Gin Cocktail",
      ingredients: [ 'Gin', 'White port', 'Dry Vermouth'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Mint Julep #1",
      ingredients: [ 'Mint', 'Bourbon', 'Powdered sugar', 'Water'],
      instructions: "Muddle mint leaves, powdered sugar, and water in a collins glass. Fill glass with shaved or crushed ice and add bourbon. Top with more ice and garnish with a mint sprig. Serve with a straw.",
      glass: 'Collins glass'
  },

  {
      name: "Mint Julep #2",
      ingredients: [ 'Mint', 'Sugar', 'Ice', 'Bourbon'],
      instructions: "Lightly muddle 4 of the mint sprigs with the sugar and a few drops of water in the bottom of the glass. Almost fill the glass with crushed ice. Add the bourbon and some short straws. Garnish with the remaining 2 mint sprigs.",
      glass: 'vote'
  },

  {
      name: "Miss Belle",
      ingredients: [ 'Dark rum', 'Grand Marnier', 'Dark Creme de Cacao'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Mississippi Planters Punch",
      ingredients: [ 'Brandy', 'Light rum', 'Bourbon', 'Lemon', 'Powdered sugar', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a collins glass over ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Mister Christian",
      ingredients: [ 'Light rum', 'Brandy', 'Orange juice', 'Lemon juice', 'Lime juice', 'Grenadine'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Mithering Bastard",
      ingredients: [ 'Scotch', 'Triple sec', 'Orange juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old-fashioned glass almost filled with ice cubes.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Mocha Mint",
      ingredients: [ 'Coffee brandy', 'White Creme de Menthe', 'Creme de Cacao'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Monkey Gland Cocktail",
      ingredients: [ 'Gin', 'Benedictine', 'Orange juice', 'Grenadine'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Modern Cocktail",
      ingredients: [ 'Scotch', 'Dark rum', 'Pernod', 'Lemon juice', 'Orange bitters'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Montana",
      ingredients: [ 'Brandy', 'Dry Vermouth', 'Port'],
      instructions: "Stir all ingredients in an old-fashioned glass over ice cubes and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Monkey Wrench",
      ingredients: [ 'Light rum', 'Grapefruit juice', 'Bitters'],
      instructions: "Pour all of the ingredients into an old-fashioned glass almost filled with ice cubes. Stir well.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Montezuma",
      ingredients: [ 'Tequila', 'Madeira', 'Egg yolk'],
      instructions: "Blend all ingredients with 1/2 cup crushed ice in an electric blender at a low speed for a short length of time. Pour into a champagne flute and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Montreal Club Bouncer",
      ingredients: [ 'Gin', 'Anis'],
      instructions: "Pour ingredients into an old-fashioned glass over ice cubes, stir, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Montmartre Cocktail",
      ingredients: [ 'Gin', 'Sweet Vermouth', 'Triple sec', 'Cherry'],
      instructions: "Stir all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Montreal Gin Sour",
      ingredients: [ 'Gin', 'Lemon juice', 'Powdered sugar', 'Egg white', 'Lemon'],
      instructions: "Shake all ingredients (except lemon slice) with ice and strain into a whiskey sour glass. Add the slice of lemon and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Moon Quake Shake",
      ingredients: [ 'Coffee brandy', 'Dark rum', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Moonlight",
      ingredients: [ 'Apple brandy', 'Lemon', 'Powdered sugar'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Morgan's Mountain",
      ingredients: [ 'Light rum', 'Creme de Cacao', 'Heavy cream', 'Kahlua'],
      instructions: "In a shaker half-filled with ice cubes, combine the rum, creme de cacao, and cream. Shake well. Strain into a cocktail glass. Drop the Kahlua into the center of the drink.",
      glass: 'Cocktail glass'
  },

  {
      name: "Morning Glory Fizz",
      ingredients: [ 'Scotch', 'Anis', 'Lemon', 'Powdered sugar', 'Egg white', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Morro",
      ingredients: [ 'Gin', 'Dark rum', 'Pineapple juice', 'Lime juice', 'Powdered sugar'],
      instructions: "Rub rim of old-fashioned glass with lime juice. Dip rim in powdered sugar. Shake all ingredients with ice, strain into the sugar-rimmed glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Mostly Mal",
      ingredients: [ 'Añejo rum', 'Dry Vermouth', 'Triple sec', 'Grenadine', 'Maraschino cherry'],
      instructions: "In a shaker half-filled with ice cubes, combine the rum, vermouth, tiple sec and grenadine. Shake well. Strain into a cocktail glass and garnish with the cherry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Mountain Cocktail",
      ingredients: [ 'Blended whiskey', 'Dry Vermouth', 'Sweet Vermouth', 'Lemon juice', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Mozart",
      ingredients: [ 'Añejo rum', 'Sweet Vermouth', 'Triple sec', 'Orange bitters', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the rum, vermouth, triple sec and orange bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Mumbo Jumbo",
      ingredients: [ 'Dark rum', 'Applejack', 'Lemon juice', 'Sugar', 'Cinnamon', 'Nutmeg'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old-fashioned glass almost filled with ice cubes.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Mumsicle",
      ingredients: [ 'Dark rum', 'Bourbon', 'Bitters', 'Maraschino cherry'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the rum, bourbon, and bitter. Stir well. Strain into a cocktail glass and garnish with the cherry",
      glass: 'Cocktail glass'
  },

  {
      name: "Mutiny",
      ingredients: [ 'Dark rum', 'Bitters', 'Dubonnet Rouge', 'Maraschino cherry'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the rum, Dubonnet, and bitters. Stir well. Strain into a cocktail glass and garnish with the cherry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Napoleon",
      ingredients: [ 'Gin', 'Curacao', 'Dubonnet Rouge'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Narragansett",
      ingredients: [ 'Bourbon', 'Sweet Vermouth', 'Anisette', 'Lemon peel'],
      instructions: "In an old-fashioned glass almost filled with ice cubes, combine the bourbon, vermouth, and anisette. Stir well and garnish with the lemon twist.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Netherland",
      ingredients: [ 'Triple sec', 'Brandy', 'Bitters'],
      instructions: "Pour ingredients into an old-fashioned glass over ice cubes. Stir well and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Nevada Cocktail",
      ingredients: [ 'Light rum', 'Grapefruit juice', 'Bitters', 'Lime juice', 'Sugar'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Nevins",
      ingredients: [ 'Bourbon', 'Apricot brandy', 'Grapefruit juice', 'Lemon juice', 'Bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "New Orleans Buck",
      ingredients: [ 'Light rum', 'Orange juice', 'Lemon juice', 'Ginger ale'],
      instructions: "Shake all ingredients (except ginger ale) with ice and strain into a collins glass over ice cubes. Fill with ginger ale, stir, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "New York Sour",
      ingredients: [ 'Blended whiskey', 'Lemon', 'Sugar', 'Red wine', 'Lemon', 'Cherry'],
      instructions: "Shake blended whiskey, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Float claret on top. Decorate with the half-slice of lemon and the cherry and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Nightmare",
      ingredients: [ 'Gin', 'Cherry brandy', 'Madeira', 'Orange juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "North Pole Cocktail",
      ingredients: [ 'Gin', 'Maraschino liqueur', 'Lemon juice', 'Egg white', 'Whipped cream'],
      instructions: "Shake all ingredients (except whipped cream) with ice and strain into a cocktail glass. Top with whipped cream and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Oaxaca Jim",
      ingredients: [ 'Gin', 'Orange juice', 'Grapefruit juice', 'Bitters', 'Lemon peel', 'Maraschino cherry'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, orange juice, grapefruit juice, and bitters. Shake well. Strain into an old-fashioned glass almost filled with the cubes. Garnish with the lemon twist and the cherry.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Old Pal Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Blended whiskey', 'Grenadine'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Old-Fashioned",
      ingredients: [ 'Blended whiskey', 'Sugar', 'Angostura bitters', 'Orange', 'Maraschino cherry'],
      instructions: "Muddle the orange, sugar, bitters and water in an old-fashioned glass until the sugar is almost dissolved. Fill the glass with ice and add blended whiskey. Garnish with a marachino cherry. Serve with a swizzle stick.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Olympia",
      ingredients: [ 'Dark rum', 'Cherry brandy', 'Lime juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Once-Upon-A-Time",
      ingredients: [ 'Ice', 'Gin', 'Apricot brandy', 'Lillet'],
      instructions: "In a mixing glass half-filled with crushed ice, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Opal Cocktail",
      ingredients: [ 'Gin', 'Triple sec', 'Orange juice', 'Orange bitters'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Opening Cocktail",
      ingredients: [ 'Blended whiskey', 'Sweet Vermouth', 'Grenadine'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Opera Cocktail",
      ingredients: [ 'Dubonnet Rouge', 'Gin', 'Maraschino liqueur'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Orange Blossom",
      ingredients: [ 'Gin', 'Orange juice', 'Sugar', 'Orange'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, orange juice, and sugar. Shake wel. Strain into a cocktail glass. Garnish with the orange slice.",
      glass: 'Cocktail glass'
  },

  {
      name: "Orange Buck",
      ingredients: [ 'Gin', 'Orange juice', 'Lime juice', 'Ginger ale'],
      instructions: "Shake gin, orange juice, and lime juice with ice and strain into a highball glass over ice cubes. Fill with ginger ale, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Orange Oasis",
      ingredients: [ 'Cherry brandy', 'Gin', 'Orange juice', 'Ginger ale'],
      instructions: "Shake brandy, gin, and orange juice with ice and strain into a highball glass over ice cubes. Fill with ginger ale, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Orgasm",
      ingredients: [ 'Creme de Cacao', 'Amaretto', 'Triple sec', 'Vodka', 'Light cream'],
      instructions: "Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Oriental Cocktail",
      ingredients: [ 'Blended whiskey', 'Sweet Vermouth', 'Triple sec', 'Lime'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Other Original Singapore Sling",
      ingredients: [ 'Gin', 'Cherry brandy', 'Lime juice', 'Benedictine', 'Brandy'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, cherry brandy, and lime juice. Shake well. Strain into a collins glass almost filled with ice cubes. Drop the Benedictine and brandy into the center of the drink.",
      glass: 'Collins glass'
  },

  {
      name: "Outrigger",
      ingredients: [ 'Peach brandy', 'Lime vodka', 'Pineapple juice'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Owen Moore",
      ingredients: [ 'Light rum', 'Creme de Cacao', 'Heavy cream', 'Blue Curacao'],
      instructions: "In a shaker half-filled with ice cubes, combine the rum, creme de cacao, and havy cream. Shake well. Strain into a cocktail glass. Drop the Curacao into the center of the drink.",
      glass: 'Cocktail glass'
  },

  {
      name: "P.T.O.",
      ingredients: [ 'Dark rum', 'Vodka', 'Triple sec', 'Orange juice', 'Orange'],
      instructions: "Pour the rum, vodka, triple sec, and orange juice into a highball glass almost filled with ice cubes. Stir well and garnish with the orange slice.",
      glass: 'Highball glass'
  },

  {
      name: "Paisley Martini",
      ingredients: [ 'Gin', 'Scotch', 'Dry Vermouth', 'Lemon peel'],
      instructions: "Stir all ingredients (except lemon peel) over ice cubes in an old-fashioned glass. Add the twist of lemon peel and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Palm Beach Cocktail",
      ingredients: [ 'Gin', 'Sweet Vermouth', 'Grapefruit juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Palmer Cocktail",
      ingredients: [ 'Blended whiskey', 'Lemon juice', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Palmetto Cocktail",
      ingredients: [ 'Dry Vermouth', 'Light rum', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Panther",
      ingredients: [ 'Tequila', 'Sweet and sour'],
      instructions: "Pour ingredients into an old-fashioned glass over several ice cubes. Stir well and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Papaya Sling",
      ingredients: [ 'Gin', 'Lime', 'Papaya juice', 'Bitters', 'Carbonated water', 'Pineapple'],
      instructions: "Shake all ingredients (except carbonated water and pineapple stick) with ice and strain into a collins glass over ice cubes. Fill with carbonated water and stir. Add the pineapple stick and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Parisian",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Creme de Cassis'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Park Avenue",
      ingredients: [ 'Sweet Vermouth', 'Gin', 'Pineapple juice'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Passion Daiquiri",
      ingredients: [ 'Light rum', 'Passion fruit juice', 'Lime', 'Powdered sugar'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Passion Mimosa",
      ingredients: [ 'Passion fruit juice', 'Champagne', 'Strawberries'],
      instructions: "Pour passion fruit juice into a champagne flute. Fill with chilled champagne, decorate with strawberry, and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Peach Blow Fizz",
      ingredients: [ 'Gin', 'Light cream', 'Lemon', 'Powdered sugar', 'Peach', 'Carbonated water'],
      instructions: "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over ice cubes. Fill with carbonated water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Peach Bunny",
      ingredients: [ 'Peach brandy', 'Creme de Cacao', 'Light cream'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Peach Treat",
      ingredients: [ 'Peach brandy', 'Orange juice', 'Champagne', 'Peach'],
      instructions: "Shake brandy and orange juice with ice and strain into a collins glass over several ice cubes. Top with chilled champagne, add the peach slice, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Peggy Cocktail",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Anis', 'Dubonnet Rouge'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Pendennis",
      ingredients: [ 'Sugar', 'Ice', 'Bourbon', 'Lemon peel'],
      instructions: "In an old-fashioned glass, dissolve the sugar in a few drops of water. Almost fill the glass with crushed ice. Add the bourbon. Stir well and garnish wth the lemon slice.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Peppermint Stick",
      ingredients: [ 'Peppermint schnapps', 'Creme de Cacao', 'Light cream'],
      instructions: "Shake all ingredients with ice, strain into a champagne flute, and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Peregrine's Peril",
      ingredients: [ 'Dark rum', 'Lime juice', 'Creme de Banane', 'Southern Comfort', 'Lemon juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Perfect Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Dry Vermouth', 'Gin', 'Bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Perfect Rob Roy",
      ingredients: [ 'Scotch', 'Sweet Vermouth', 'Dry Vermouth', 'Maraschino cherry'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the Scotch, sweet vermouth, and dry vermouth. Stir well. Strain into a cocktail glass. Garnish with the cherry or a lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Peter Pan Cocktail",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Orange juice', 'Bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Petticoat Lane",
      ingredients: [ 'Gin', 'Sweet Vermouth', 'Campari', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the gin, vermouth, and Campari. Stir well. Strain into a cocktail glass and garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Piccadilly Cocktail",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Anis', 'Grenadine'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Pina Colada #1",
      ingredients: [ 'Light rum', 'Coconut milk', 'Pineapple'],
      instructions: "Put all ingredients into an electric blender with 2 cups of crushed ice. Blend at a high speed for a short length of time. Strain into a collins glass and serve with a straw.",
      glass: 'Collins glass'
  },

  {
      name: "Pineapple Cooler",
      ingredients: [ 'White wine', 'Pineapple juice', 'Carbonated water', 'Powdered sugar', 'Orange spiral', 'Lemon peel'],
      instructions: "Put white wine, pineapple juice, powdered sugar, and 2 oz. carbonated water in a collins glass and stir. Add ice cubes, fill with carbonated water, and stir again. Add the lemon peel and the orange spiral so the end dangles over rim of glass.",
      glass: 'Collins glass'
  },

  {
      name: "Ping-Pong Cocktail",
      ingredients: [ 'Sloe gin', 'Lemon', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Pink Cream Fizz",
      ingredients: [ 'Gin', 'Lemon juice', 'Sugar', 'Light cream', 'Grenadine', 'Club soda'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, lemon juice, sugar, cream, and grenadine. Shake well. Strain into a collins glass almost filled with ice cubes. Add the club soda. Stir well.",
      glass: 'Collins glass'
  },

  {
      name: "Pink Gin",
      ingredients: [ 'Bitters', 'Gin'],
      instructions: "Pour the bitters into a wine glass. Swirl the glass to coat the inside with the bitters, shake out the excess. Pour the gin into the glass. Do not add ice.",
      glass: 'White wine glass'
  },

  {
      name: "Pink Lady",
      ingredients: [ 'Gin', 'Grenadine', 'Light cream', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Pink Pussycat",
      ingredients: [ 'Gin', 'Pineapple juice', 'Cherry brandy'],
      instructions: "In an old-fashioned glass almost filled with ice cubes, combine the gin and pineapple juice. Stir well. Drop the cherry brandy into the center of the drink.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Pink Squirrel",
      ingredients: [ 'Creme de Noyaux', 'Creme de Cacao', 'Light cream'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Piper At Arms",
      ingredients: [ 'Scotch', 'Dry Vermouth', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the Scotch and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Piper At The Gates Of Dawn",
      ingredients: [ 'Scotch', 'Kahlua', 'Maraschino liqueur', 'Heavy cream'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the Scotch, Kahlua, and maraschino liqueur. Stir well. Strain into old-fashioned glass almost filled with ice cubes. Pour the cream over the back of a teaspoon so that it floats on top of the drink.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Plaza Cocktail",
      ingredients: [ 'Dry Vermouth', 'Sweet Vermouth', 'Gin', 'Pineapple'],
      instructions: "Shake all ingredients (except pineapple stick) with ice and strain into a cocktail glass. Add the stick of pineapple and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Polo Cocktail",
      ingredients: [ 'Gin', 'Lemon juice', 'Orange juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Polonaise",
      ingredients: [ 'Brandy', 'Blackberry brandy', 'Sherry', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Poop Deck Cocktail",
      ingredients: [ 'Brandy', 'Blackberry brandy', 'Port'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Polynesian Cocktail",
      ingredients: [ 'Vodka', 'Cherry brandy', 'Lime', 'Powdered sugar'],
      instructions: "Rub rim of cocktail glass with lime and dip into powdered sugar. Shake vodka, cherry brandy, and juice of lime with ice, strain into the sugar-rimmed glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Poppy Cocktail",
      ingredients: [ 'Gin', 'Creme de Cacao'],
      instructions: "Shake ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Port And Starboard",
      ingredients: [ 'Grenadine', 'Green Creme de Menthe'],
      instructions: "Pour carefully into a pousse-cafe glass, so that creme de menthe floats on grenadine. Serve without mixing.",
      glass: 'Pousse cafe glass'
  },

  {
      name: "Port Wine Cocktail",
      ingredients: [ 'Port', 'Brandy'],
      instructions: "Stir ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Port Wine Flip",
      ingredients: [ 'Port', 'Light cream', 'Powdered sugar', 'Egg', 'Nutmeg'],
      instructions: "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Prairie Chicken",
      ingredients: [ 'Gin', 'Egg', 'Salt', 'Black pepper'],
      instructions: "Open egg without breaking the yolk and put into a red wine glass. Pour gin on top of egg, add salt and pepper to taste, and serve.",
      glass: 'Red wine glass'
  },

  {
      name: "Preakness Cocktail",
      ingredients: [ 'Blended whiskey', 'Sweet Vermouth', 'Benedictine', 'Bitters', 'Lemon peel'],
      instructions: "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Presbyterian",
      ingredients: [ 'Blended whiskey', 'Coca-Cola', 'Ginger ale', 'Lemon'],
      instructions: "Pour blended whiskey into a highball glass filled with ice cubes. Fill with equal parts of cola and ginger ale and stir well. Add the slice of lemon and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Prince's Smile",
      ingredients: [ 'Apple brandy', 'Apricot brandy', 'Gin', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Princeton Cocktail",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Lime juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Puerto Apple",
      ingredients: [ 'Applejack', 'Light rum', 'Orgeat syrup', 'Lime juice', 'Lime'],
      instructions: "Shake all ingredients (except lime slice) with ice and strain into an old-fashioned glass over ice cubes. Add the slice of lime and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Puffer",
      ingredients: [ 'Light rum', 'Orange juice', 'Grapefruit juice', 'Grenadine'],
      instructions: "Pour the rum, orange juice, and grapefruit juice into a highball glass almost fillled with ice cubes. Stir well. Drop the grenadine into the center of the drink.",
      glass: 'Highball glass'
  },

  {
      name: "Purple Mask",
      ingredients: [ 'Vodka', 'Creme de Cacao', 'Grape juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Quaker's Cocktail",
      ingredients: [ 'Light rum', 'Brandy', 'Lemon', 'Raspberry syrup'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Quarter Deck Cocktail",
      ingredients: [ 'Light rum', 'Sherry', 'Lime'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Queen Bee",
      ingredients: [ 'Coffee brandy', 'Lime vodka', 'Sherry'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Queen Charlotte",
      ingredients: [ 'Red wine', 'Grenadine', 'Lemon-lime soda'],
      instructions: "Pour red wine and grenadine into a collins glass over ice cubes. Fill with lemon-lime soda, stir, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Queen Elizabeth",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Benedictine'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Quentin",
      ingredients: [ 'Dark rum', 'Kahlua', 'Light cream', 'Nutmeg'],
      instructions: "In a shaker half-filled with ice cubes, combine the rum, Kahlua, and cream. Shake well. Strain into a cocktail glass and garnish with the nutmeg.",
      glass: 'Cocktail glass'
  },

  {
      name: "Ragged Company",
      ingredients: [ 'Bourbon', 'Sweet Vermouth', 'Benedictine', 'Bitters', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the bourbon, vermouth, Benedictine, and bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Raspberry Cream",
      ingredients: [ 'Vodka', 'Yoghurt', 'Ice-cream', 'Creme de Cacao', 'Heavy cream'],
      instructions: "Blend all ingredients in an electric blender at a low speed. Pour into a champagne flute and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Rattlesnake Cocktail",
      ingredients: [ 'Blended whiskey', 'Lemon juice', 'Anis', 'Powdered sugar', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Rebel Yell",
      ingredients: [ 'Bourbon', 'Triple sec', 'Lemon juice', 'Egg white', 'Orange'],
      instructions: "In a shaker half-filled with ice cubes, combine the bourbon, Triple sec, lemon juice, and egg white. Shake well. Pour into an old-fashioned glass and garnish with the orange slice.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Red Apple",
      ingredients: [ 'Vodka', 'Apple juice', 'Lemon juice', 'Grenadine'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Red Cloud",
      ingredients: [ 'Gin', 'Apricot brandy', 'Lemon juice', 'Grenadine'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Red Gin",
      ingredients: [ 'Ice', 'Gin', 'Cherry Heering', 'Maraschino cherry'],
      instructions: "In a mixing glass half-filled with crushed ice, combine the gin and Cherry Heering. Stir well. Strain into a cocktail glass. Garnish with the cherry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Red Raider",
      ingredients: [ 'Triple sec', 'Bourbon', 'Lemon juice', 'Grenadine'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Red Ruby",
      ingredients: [ 'Gin', 'Cherry brandy', 'Dry Vermouth'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Redcoat",
      ingredients: [ 'Light rum', 'Vodka', 'Apricot brandy', 'Lime juice', 'Grenadine'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Reform Cocktail",
      ingredients: [ 'Sherry', 'Dry Vermouth', 'Orange bitters', 'Cherry'],
      instructions: "Stir all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Remsen Cooler",
      ingredients: [ 'Gin', 'Carbonated water', 'Powdered sugar', 'Orange spiral', 'Lemon peel'],
      instructions: "Put powdered sugar and 2 oz. carbonated water into a collins glass and stir. Add ice cubes and gin, fill with carbonated water, and stir again. Add the twist of lemon peel and the spiral of orange so that the end dangles over rim of glass.",
      glass: 'Collins glass'
  },

  {
      name: "Resolute Cocktail",
      ingredients: [ 'Apricot brandy', 'Gin', 'Lemon'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Riley's Sparrow",
      ingredients: [ 'Dark rum', 'Southern Comfort', 'Bitters'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Ritz Fizz",
      ingredients: [ 'Champagne', 'Blue Curacao', 'Amaretto', 'Lemon juice', 'Lemon peel'],
      instructions: "Fill champagne flute with chilled champagne. Add blue curacao, amaretto, and lemon juice. Stir, add the twist of lemon, and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Rob Roy",
      ingredients: [ 'Scotch', 'Sweet Vermouth', 'Angostura bitters', 'Maraschino cherry'],
      instructions: "Stir ingredients with ice, strain into a cocktail glass. Garnish with a cherry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Robin's Nest",
      ingredients: [ 'Vodka', 'Creme de Cacao', 'Cranberry juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Robson Cocktail",
      ingredients: [ 'Rum', 'Grenadine', 'Lemon juice', 'Orange juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Rolls-Royce",
      ingredients: [ 'Gin', 'Sweet Vermouth', 'Dry Vermouth', 'Benedictine'],
      instructions: "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Root Beer Fizz",
      ingredients: [ 'Gin', 'Lemon juice', 'Sugar', 'Root beer', 'Maraschino cherry'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a collins glass almost filled with ice cubes. Add the root beer. Stir well. Garnish with the cherry.",
      glass: 'Collins glass'
  },

  {
      name: "Root Beer Float",
      ingredients: [ 'Vodka', 'Galliano', 'Light cream', 'Coca-Cola', 'Whipped cream'],
      instructions: "Pour vodka, galliano, and light cream into a collins glass filled with ice cubes and stir well. Fill with cola, stir lightly, top with whipped cream, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Rory O'more",
      ingredients: [ 'Irish whiskey', 'Sweet Vermouth', 'Orange bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Rose Cocktail (English)",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Apricot brandy', 'Lemon juice', 'Grenadine', 'Powdered sugar'],
      instructions: "Rub rim of cocktail glass with lemon juice and dip into powdered sugar. Shake vermouth, gin, brandy, lemon juice, and grenadine with ice, strain into the sugar-rimmed glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Rose Cocktail (French)",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Cherry brandy'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Roselyn Cocktail",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Grenadine', 'Lemon peel'],
      instructions: "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Rouge Martini",
      ingredients: [ 'Gin', 'Chambord raspberry liqueur'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the gin and Chambord. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Royal Clover Club Cocktail",
      ingredients: [ 'Gin', 'Lemon', 'Grenadine', 'Egg yolk'],
      instructions: "Shake all ingredients with ice, strain into a whiskey sour glass, and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Stranger-In-Town",
      ingredients: [ 'Light rum', 'Sweet Vermouth', 'Calvados', 'Cherry brandy', 'Maraschino cherry'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the rum, vermouth, Calvados, and cherry brandy. Stir well. Strain into a cocktail glass and garnish with the cherry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Strawberries And Cream",
      ingredients: [ 'Strawberry schnapps', 'Half-and-half', 'Sugar', 'Strawberries'],
      instructions: "Place schnapps, half-and-half, sugar, and 2 cups of crushed ice in an electric blender and blend at a high speed. Add 2 of the strawberries and blend for 10 seconds. Pour into a parfait glass, top with the other strawberry, and serve with a straw.",
      glass: 'Parfait glass'
  },

  {
      name: "Straight Law Cocktail",
      ingredients: [ 'Sherry', 'Gin'],
      instructions: "Stir ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Strawberry Daiquiri",
      ingredients: [ 'Strawberry schnapps', 'Light rum', 'Lime juice', 'Powdered sugar', 'Strawberries'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Strawberry Dawn",
      ingredients: [ 'Gin', 'Cream of coconut', 'Strawberries', 'Mint'],
      instructions: "Blend all ingredients (except mint sprig) with 1 cup of crushed ice in an electric blender at a high speed. Pour into a cocktail glass, add the sprig of mint, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Strawberry Fields Forever",
      ingredients: [ 'Brandy', 'Strawberry schnapps', 'Carbonated water', 'Strawberries'],
      instructions: "Pour brandy and schnapps over ice in a highball glass. Fill with carbonated water and stir. Garnish with a strawberry and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Strawberry Margarita",
      ingredients: [ 'Strawberry schnapps', 'Tequila', 'Triple sec', 'Lemon juice', 'Strawberries', 'Salt'],
      instructions: "Rub rim of cocktail glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sue Riding High",
      ingredients: [ 'Dark rum', 'Dark Creme de Cacao', 'Hot chocolate', 'Heavy cream'],
      instructions: "Let the hot chocolate cool to room temperature. In a shaker half-filled with ice cubes, combine the rum, creme de cacao, and hot chocolate. Shake well. Strain into a cocktail glass. Drop the cream into the center of the drink.",
      glass: 'Cocktail glass'
  },

  {
      name: "Suffragette City",
      ingredients: [ 'Light rum', 'Grand Marnier', 'Lime juice', 'Grenadine'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sugar Daddy",
      ingredients: [ 'Gin', 'Maraschino liqueur', 'Pineapple juice', 'Bitters'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sunshine Cocktail",
      ingredients: [ 'Gin', 'Sweet Vermouth', 'Bitters', 'Orange peel'],
      instructions: "Stir all ingredients (except orange peel) with ice and strain into a cocktail glass. Add the twist of orange peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Surf Rider",
      ingredients: [ 'Sweet Vermouth', 'Vodka', 'Orange juice', 'Lemon', 'Grenadine', 'Orange'],
      instructions: "Shake all ingredients (except orange slice) with ice and strain into a cocktail glass. Add the orange slice, top with a cherry, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Surrey Slider",
      ingredients: [ 'Añejo rum', 'Peach schnapps', 'Orange juice', 'Orange'],
      instructions: "Pour the rum, peach schnapps, and orange juice into a highball glass almost filled with ice cubes. Stir well and garnish with the orange slice.",
      glass: 'Highball glass'
  },

  {
      name: "Susan Littler",
      ingredients: [ 'Dark rum', 'Bourbon', 'Galliano', 'Orange juice'],
      instructions: "Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well.",
      glass: 'Highball glass'
  },

  {
      name: "Sweet Maria",
      ingredients: [ 'Amaretto', 'Vodka', 'Light cream'],
      instructions: "Shake all ingredients with cracked ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sweet Patootie Cocktail",
      ingredients: [ 'Triple sec', 'Gin', 'Orange juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Swiss Family Cocktail",
      ingredients: [ 'Blended whiskey', 'Dry Vermouth', 'Anis', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "T.N.T. No. 2",
      ingredients: [ 'Tequila', 'Tonic water'],
      instructions: "Pour ingredients into an old-fashioned glass over ice cubes. Stir well and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Tailspin Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Gin', 'Green Chartreuse', 'Orange bitters', 'Lemon peel', 'Cherry'],
      instructions: "Stir all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve. (An olive may be substituted for the cherry, if preferred.)",
      glass: 'Cocktail glass'
  },

  {
      name: "Tango Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Dry Vermouth', 'Gin', 'Triple sec', 'Orange juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Tartan Swizzle",
      ingredients: [ 'Lime juice', 'Sugar', 'Scotch', 'Bitters', 'Ice', 'Club soda'],
      instructions: "In a shaker half-filled with ice cubes, combine lime juice, sugar, Scotch, and bitters. Shake well. Almost fill a collins glass with crushed ice. Stir until glass is frosted. Strain mixture in shaker into the glass and add the club soda.",
      glass: 'Collins glass'
  },

  {
      name: "Tartantula",
      ingredients: [ 'Scotch', 'Sweet Vermouth', 'Benedictine', 'Lemon peel'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the Scotch, vermouth, and Benedictine. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Temptation Cocktail",
      ingredients: [ 'Blended whiskey', 'Dubonnet Rouge', 'Triple sec', 'Anis', 'Orange peel', 'Lemon peel'],
      instructions: "Shake blended whiskey, Dubonnet, triple sec, and anis with ice and strain into a cocktail glass. Add the twists of orange and lemon peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Tempter Cocktail",
      ingredients: [ 'Apricot brandy', 'Port'],
      instructions: "Stir ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Ten Quidder",
      ingredients: [ 'Gin', 'Triple sec', 'Bitters', 'Blue Curacao'],
      instructions: "In an old-fashioned glass almost filled with ice cubes, combine the gin, triple sec, and bitters. Stir well. Pour the Curacao into the center of the drink.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Tequila Cocktail",
      ingredients: [ 'Tequila', 'Lemon', 'Grenadine', 'Egg white', 'Lemon'],
      instructions: "Shake all ingredients (except lemon slice) with ice and strain into a cocktail glass. Add the slice of lemon and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Tequila Fizz",
      ingredients: [ 'Tequila', 'Lemon juice', 'Grenadine', 'Egg white', 'Ginger ale'],
      instructions: "Shake all ingredients (except ginger ale) with ice and strain into a collins glass over ice cubes. Fill with ginger ale, stir, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Tequila Manhattan",
      ingredients: [ 'Tequila', 'Sweet Vermouth', 'Lime juice', 'Orange', 'Cherry'],
      instructions: "Shake tequila, vermouth, and lime juice with ice and strain into an old-fashioned glass over ice cubes. Add the slice of orange, top with the cherry, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Tequila Matador",
      ingredients: [ 'Tequila', 'Pineapple juice', 'Lime'],
      instructions: "Shake all ingredients with ice, strain into a champagne flute, and serve.",
      glass: 'Champagne flute'
  },

  {
      name: "Tequila Old-Fashioned",
      ingredients: [ 'Tequila', 'Carbonated water', 'Sugar', 'Bitters', 'Pineapple'],
      instructions: "Mix sugar, bitters, and 1 tsp. water in an old-fashioned glass. Add tequila, ice cubes, and carbonated water. Add the stick of pineapple and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Tequila Sour",
      ingredients: [ 'Tequila', 'Lemon', 'Powdered sugar', 'Lemon', 'Cherry'],
      instructions: "Shake tequila, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Add the half-slice of lemon, top with the cherry, and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Tequila Sunset",
      ingredients: [ 'Tequila', 'Orange juice', 'Blackberry brandy', 'Cherry'],
      instructions: "Pour tequila into a collins glass filled with ice cubes. Fill with orange juice and stir well. Top with blackberry brandy and stir lightly. Add the cherry on top and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Tequini",
      ingredients: [ 'Tequila', 'Dry Vermouth', 'Bitters', 'Lemon peel', 'Olive'],
      instructions: "Stir tequila, vermouth, and bitters with ice and strain into a cocktail glass. Add the twist of lemon peel, top with the olive, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Thanksgiving Special",
      ingredients: [ 'Apricot brandy', 'Dry Vermouth', 'Gin', 'Lemon juice', 'Cherry'],
      instructions: "Shake all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "The Bronx Ain't So Sweet",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Orange juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "The Original Singapore Sling",
      ingredients: [ 'Gin', 'Benedictine', 'Cherry brandy', 'Club soda'],
      instructions: "In a mixing glass half-filled with ice cubes, combine the gin, Benedictine, and chery brandy. Stir well. Strain into a colliins glass almost filled with ice cubes. Top with the club soda and stir well.",
      glass: 'vote'
  },

  {
      name: "The Shoot",
      ingredients: [ 'Sherry', 'Scotch', 'Lemon juice', 'Orange juice', 'Powdered sugar'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Third-Rail Cocktail",
      ingredients: [ 'Light rum', 'Brandy', 'Apple brandy', 'Anis'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Three Miller Cocktail",
      ingredients: [ 'Light rum', 'Brandy', 'Lemon juice', 'Grenadine'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Thriller",
      ingredients: [ 'Scotch', 'Wine', 'Orange juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Thunder",
      ingredients: [ 'Brandy', 'Powdered sugar', 'Cayenne pepper', 'Egg yolk'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Thunder-And-Lightning",
      ingredients: [ 'Brandy', 'Powdered sugar', 'Egg yolk'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Thunderclap",
      ingredients: [ 'Blended whiskey', 'Brandy', 'Gin'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Tidbit",
      ingredients: [ 'Gin', 'Vanilla ice-cream', 'Sherry'],
      instructions: "Blend all ingredients in an electric blender at a low speed for a short length of time. Pour into a highball glass and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Tipperary Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Irish whiskey', 'Green Chartreuse'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "To Hell With Swords And Garter",
      ingredients: [ 'Scotch', 'Dry Vermouth', 'Pineapple juice'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old-fashioned glass almost filled with ice cubes.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Tom Collins",
      ingredients: [ 'Gin', 'Lemon juice', 'Sugar', 'Club soda', 'Maraschino cherry', 'Orange'],
      instructions: "In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a collins glass alomst filled with ice cubes. Add the club soda. Stir and garnish with the cherry and the orange slice.",
      glass: 'Collins glass'
  },

  {
      name: "Top Banana",
      ingredients: [ 'Creme de Banane', 'Vodka', 'Orange'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Torridora Cocktail",
      ingredients: [ 'Light rum', '151 proof rum', 'Coffee brandy', 'Cream'],
      instructions: "Shake light rum, brandy, and cream with ice and strain into a cocktail glass. Float 151 proof rum on top and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Tovarich Cocktail",
      ingredients: [ 'Vodka', 'Kummel', 'Lime'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Triad",
      ingredients: [ 'Añejo rum', 'Sweet Vermouth', 'Amaretto', 'Ginger ale', 'Lemon peel'],
      instructions: "Pour the rum, vermouth, amaretto, and ginger ale into a highball glass almost filled with ice cubes. Stir well and garnish with the lemon twist.",
      glass: 'Highball glass'
  },

  {
      name: "Trilby Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Bourbon', 'Orange bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Trinity Cocktail",
      ingredients: [ 'Dry Vermouth', 'Sweet Vermouth', 'Gin'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Tropical Cocktail",
      ingredients: [ 'Dry Vermouth', 'Creme de Cacao', 'Maraschino liqueur', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Turf Cocktail",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Anis', 'Bitters', 'Orange peel'],
      instructions: "Stir all ingredients (except orange peel) with ice and strain into a cocktail glass. Add the twist of orange peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Tuxedo Cocktail",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Maraschino liqueur', 'Anis', 'Orange bitters', 'Cherry'],
      instructions: "Stir all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Twenty Thousand Leagues",
      ingredients: [ 'Ice', 'Gin', 'Dry Vermouth', 'Pernod', 'Orange bitters'],
      instructions: "In a mixing glass half-filled with crushed ice, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Twin Hills",
      ingredients: [ 'Blended whiskey', 'Lemon juice', 'Lime juice', 'Benedictine', 'Sugar', 'Lemon'],
      instructions: "Shake all ingredients (except lemon slice) with ice and strain into a whiskey sour glass. Add the slice of lemon and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Twister",
      ingredients: [ 'Vodka', 'Lemon-lime soda', 'Lime'],
      instructions: "Pour vodka and juice of lime into a collins glass over several ice cubes. Fill with lemon-lime soda, stir, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Typhoon",
      ingredients: [ 'Champagne', 'Gin', 'Anisette', 'Lime juice'],
      instructions: "Shake all ingredients (except champagne) with ice and strain into a collins glass over ice cubes. Fill glass with chilled champagne, stir lightly, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Ulanda Cocktail",
      ingredients: [ 'Gin', 'Anis', 'Triple sec'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Union Jack Cocktail",
      ingredients: [ 'Gin', 'Sloe gin', 'Grenadine'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Valencia Cocktail",
      ingredients: [ 'Apricot brandy', 'Orange juice', 'Orange bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Van Vleet",
      ingredients: [ 'Light rum', 'Maple syrup', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Velvet Hammer #1",
      ingredients: [ 'Creme de Cacao', 'Vodka', 'Cream'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Verboten",
      ingredients: [ 'Gin', 'Forbidden Fruit', 'Lemon juice', 'Orange juice', 'Cherry'],
      instructions: "Shake all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Vermouth Cassis",
      ingredients: [ 'Dry Vermouth', 'Creme de Cassis', 'Carbonated water'],
      instructions: "Stir vermouth and creme de cassis in a highball glass with ice cubes. Fill with carbonated water, stir again, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Vesuvio",
      ingredients: [ 'Light rum', 'Sweet Vermouth', 'Lemon', 'Powdered sugar', 'Egg white'],
      instructions: "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Veteran",
      ingredients: [ 'Dark rum', 'Cherry brandy'],
      instructions: "Pour the rum and cherry brandy into an old-fashioned glass almost filled with ice cubes. Stir well.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Vicious Sid",
      ingredients: [ 'Light rum', 'Southern Comfort', 'Triple sec', 'Lemon juice', 'Bitters'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old-fashioned glass almost filled with ice cubes.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Victor",
      ingredients: [ 'Gin', 'Sweet Vermouth', 'Brandy'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Victory Collins",
      ingredients: [ 'Vodka', 'Lemon juice', 'Grape juice', 'Powdered sugar', 'Orange'],
      instructions: "Shake all ingredients (except orange slice) with ice and strain into a collins glass over ice cubes. Add the slice of orange and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Viva Villa",
      ingredients: [ 'Tequila', 'Lime', 'Sugar'],
      instructions: "Rub rim of old-fashioned glass with lemon juice and dip in salt. Shake all ingredients with ice, strain into the salt-rimmed glass over ice cubes, and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Vodka '7'",
      ingredients: [ 'Vodka', 'Lime', 'Lemon-lime soda', 'Lime'],
      instructions: "Pour vodka and juice of lime into a collins glass over several ice cubes. Drop the lime wedge in glass and fill with lemon-lime soda. Stir well and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Vodka And Apple Juice",
      ingredients: [ 'Vodka', 'Apple juice'],
      instructions: "Pour vodka into a highball glass over two or three ice cubes. Fill with apple juice, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Vodka And Tonic",
      ingredients: [ 'Vodka', 'Tonic water'],
      instructions: "Pour vodka into a highball glass over ice cubes. Fill with tonic water, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Vodka Collins",
      ingredients: [ 'Vodka', 'Lemon', 'Powdered sugar', 'Carbonated water', 'Cherry', 'Orange'],
      instructions: "Shake vodka, juice of lemon, and powdered sugar with ice and strain into a collins glass. Add several ice cubes, fill with carbonated water, and stir. Decorate with slices of orange, lemon, and top with the cherry. Serve with a straw.",
      glass: 'Collins glass'
  },

  {
      name: "Vodka Gimlet",
      ingredients: [ 'Lime juice cordial', 'Vodka', 'Powdered sugar'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Vodka Grasshopper",
      ingredients: [ 'Green Creme de Menthe', 'Creme de Cacao', 'Vodka'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Vodka Salty Dog",
      ingredients: [ 'Grapefruit juice', 'Vodka', 'Salt'],
      instructions: "Pour all ingredients into a highball glass over ice cubes, stir well, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Vodka Sling",
      ingredients: [ 'Vodka', 'Lemon', 'Powdered sugar', 'Water', 'Orange peel'],
      instructions: "Dissolve powdered sugar in mixture of water and juice of lemon. Add vodka. Pour into an old-fashioned glass over ice cubes and stir. Add the twist of orange peel and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Vodka Stinger",
      ingredients: [ 'White Creme de Menthe', 'Vodka'],
      instructions: "Shake ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Waikiki Beachcomber",
      ingredients: [ 'Triple sec', 'Gin', 'Pineapple juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Wallick Cocktail",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Triple sec'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Ward Eight",
      ingredients: [ 'Blended whiskey', 'Lemon', 'Grenadine', 'Powdered sugar', 'Orange', 'Cherry'],
      instructions: "Shake blended whiskey, juice of lemon, grenadine, and powdered sugar with ice and strain into a red wine glass filled with cracked ice. Add the orange slice, top with the cherry, and serve with a straw.",
      glass: 'Red wine glass'
  },

  {
      name: "Washington Cocktail",
      ingredients: [ 'Dry Vermouth', 'Brandy', 'Sugar syrup', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Warsaw Cocktail",
      ingredients: [ 'Vodka', 'Dry Vermouth', 'Blackberry brandy', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Watermelon",
      ingredients: [ 'Strawberry liqueur', 'Vodka', 'Sweet and sour', 'Orange juice'],
      instructions: "Shake all ingredients with ice, strain into a collins glass over ice cubes, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Webster Cocktail",
      ingredients: [ 'Apricot brandy', 'Dry Vermouth', 'Gin', 'Lime'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Weep-No-More Cocktail",
      ingredients: [ 'Dubonnet Rouge', 'Brandy', 'Maraschino liqueur', 'Lime'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Wedding Belle Cocktail",
      ingredients: [ 'Dubonnet Rouge', 'Gin', 'Cherry brandy', 'Orange juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Wembly Cocktail",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Apricot brandy', 'Apple brandy'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Western Rose",
      ingredients: [ 'Apricot brandy', 'Dry Vermouth', 'Gin', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "What The Hell",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Apricot brandy', 'Lemon juice'],
      instructions: "Stir all ingredients with ice cubes in an old-fashioned glass and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Whip Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Dry Vermouth', 'Brandy', 'Triple sec', 'Anis'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Whiskey Cocktail",
      ingredients: [ 'Blended whiskey', 'Sugar syrup', 'Bitters', 'Cherry'],
      instructions: "Stir all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Whiskey Collins",
      ingredients: [ 'Blended whiskey', 'Powdered sugar', 'Lemon', 'Carbonated water', 'Cherry', 'Orange'],
      instructions: "Shake blended whiskey, juice of lemon, and powdered sugar with ice and strain into a collins glass. Add several ice cubes, fill with carbonated water, and stir. Decorate with slices of orange, lemon, and top with the cherry. Serve with a straw.",
      glass: 'Collins glass'
  },

  {
      name: "Whiskey Eggnog",
      ingredients: [ 'Blended whiskey', 'Powdered sugar', 'Egg', 'Milk', 'Nutmeg'],
      instructions: "Shake all ingredients (except nutmeg) with ice and strain into a collins glass. Sprinke nutmeg on top and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Whiskey Fix",
      ingredients: [ 'Blended whiskey', 'Lemon', 'Powdered sugar', 'Lemon'],
      instructions: "Shake juice of lemon and powdered sugar with ice and strain into a highball glass over ice cubes. Add blended whiskey and stir. Add the slice of lemon and serve with a straw.",
      glass: 'Highball glass'
  },

  {
      name: "Whiskey Flip",
      ingredients: [ 'Blended whiskey', 'Light cream', 'Powdered sugar', 'Egg', 'Nutmeg'],
      instructions: "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Whiskey Highball",
      ingredients: [ 'Blended whiskey', 'Carbonated water', 'Lemon peel'],
      instructions: "Pour blended whiskey into a highball glass over ice cubes. Fill with carbonated water and stir. Add the twist of lemon peel and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Whiskey Milk Punch",
      ingredients: [ 'Blended whiskey', 'Powdered sugar', 'Milk', 'Nutmeg'],
      instructions: "Shake all ingredients (except nutmeg) with ice and strain into a collins glass. Sprinkle nutmeg on top and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Whiskey Rickey",
      ingredients: [ 'Blended whiskey', 'Lime', 'Carbonated water', 'Lime'],
      instructions: "Pour blended whiskey and juice of lime into a highball glass over ice cubes. Fill with carbonated water and stir. Drop the wedge of lime in glass and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Whiskey Sour",
      ingredients: [ 'Blended whiskey', 'Lemon', 'Powdered sugar', 'Cherry', 'Lemon'],
      instructions: "Shake blended whiskey, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with the half-slice of lemon, top with the cherry, and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Whisky Mac",
      ingredients: [ 'Scotch', 'Wine'],
      instructions: "Pour both of the ingredients into a wine goblet with no ice.",
      glass: 'vote'
  },

  {
      name: "White Heart",
      ingredients: [ 'Sambuca', 'Creme de Cacao', 'Cream'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "White Lady",
      ingredients: [ 'Gin', 'Egg white', 'Light cream', 'Sugar'],
      instructions: "In a shaker half-filler with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "White Lily Cocktail",
      ingredients: [ 'Light rum', 'Gin', 'Triple sec', 'Anisette'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "White Lion Cocktail",
      ingredients: [ 'Light rum', 'Lemon', 'Grenadine', 'Powdered sugar', 'Bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "White Russian",
      ingredients: [ 'Vodka', 'Coffee liqueur', 'Light cream'],
      instructions: "Pour vodka and coffee liqueur over ice cubes in an old-fashioned glass. Fill with light cream and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "White Way Cocktail",
      ingredients: [ 'Gin', 'White Creme de Menthe'],
      instructions: "Shake ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Why Not?",
      ingredients: [ 'Apricot brandy', 'Gin', 'Dry Vermouth', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Widow Woods' Nightcap",
      ingredients: [ 'Scotch', 'Dark Creme de Cacao', 'Milk'],
      instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Widow's Kiss",
      ingredients: [ 'Brandy', 'Yellow Chartreuse', 'Benedictine', 'Bitters'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Will Rogers",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Triple sec', 'Orange juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Woo Woo",
      ingredients: [ 'Peach schnapps', 'Vodka', 'Cranberry juice'],
      instructions: "Pour all ingredients into a highball glass over ice cubes, stir, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Woodward Cocktail",
      ingredients: [ 'Dry Vermouth', 'Scotch', 'Grapefruit juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "X.Y.Z. Cocktail",
      ingredients: [ 'Light rum', 'Triple sec', 'Lemon juice'],
      instructions: "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Xanthia Cocktail",
      ingredients: [ 'Cherry brandy', 'Gin', 'Yellow Chartreuse'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Xeres Cocktail",
      ingredients: [ 'Sherry', 'Orange bitters'],
      instructions: "Stir ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Yellow Rattler",
      ingredients: [ 'Gin', 'Sweet Vermouth', 'Dry Vermouth', 'Orange juice', 'Cocktail onion'],
      instructions: "Shake all ingredients (except cocktail onion) with ice and strain into a cocktail glass. Add the cocktail onion and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Yale Cocktail",
      ingredients: [ 'Dry Vermouth', 'Gin', 'Blue Curacao', 'Bitters'],
      instructions: "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Yellow Strawberry",
      ingredients: [ 'Light rum', 'Creme de Banane', 'Strawberries', 'Sweet and sour', 'Banana'],
      instructions: "Shake all ingredients (except banana slice) with ice and strain into a chilled whiskey sour glass. Garnish with the banana slice and serve.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Yolanda",
      ingredients: [ 'Gin', 'Brandy', 'Sweet Vermouth', 'Anisette', 'Grenadine', 'Orange peel'],
      instructions: "Shake all ingredients (except orange peel) with ice and strain into a cocktail glass. Add the twist of orange peel and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Afterglow",
      ingredients: [ 'Grenadine', 'Orange juice', 'Pineapple juice'],
      instructions: "Mix. Serve over ice.",
      glass: 'vote'
  },

  {
      name: "Apple Karate",
      ingredients: [ 'Apple juice', 'Carrot'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Alice Cocktail",
      ingredients: [ 'Grenadine', 'Orange juice', 'Pineapple juice', 'Cream'],
      instructions: "Shake well, strain into a large cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Berry-Berry",
      ingredients: [ 'Berries', 'Milk', 'Honey'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Bobby Cocktail",
      ingredients: [ 'Orange juice', 'Lemon juice', 'Sugar syrup', 'Cream'],
      instructions: "Shake well and strain into a large cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Black & Blue Berries",
      ingredients: [ 'Blueberries', 'Blackberries', 'Soda water', 'Honey', 'Lemon juice'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Bora Bora",
      ingredients: [ 'Pineapple juice', 'Passion fruit juice', 'Lemon juice', 'Grenadine'],
      instructions: "Prepare in a blender or shaker, serve in a highball glass on the rocks. Garnish with 1 slice of pineapple and one cherry.",
      glass: 'Highball glass'
  },

  {
      name: "Cranberry Juice Cocktail",
      ingredients: [ 'Cranberries', 'Water', 'Salt', 'Orange', 'Sugar'],
      instructions: "Wash the cranberries and put them into a nonreactive saucepan with the water, a pinch of salt and if you wish, the orange slices. Cook over medium heat until all the berries burst -- about 10 minutes. Pour the fruit and liquid into a cheesecloth-lined sieve. Strain the juice to the saucepan, add the sugar and boil for two or three minutes. Taste and add more sugar if it is needed. Cool and chill the juice before serving.",
      glass: 'vote'
  },

  {
      name: "End Wrench",
      ingredients: [ 'Orange juice', 'Tonic water', 'Ice'],
      instructions: "Add ice. Tastes remarkably like a screwdriver.",
      glass: 'vote'
  },

  {
      name: "Grapefruit and Orange Cocktail",
      ingredients: [ 'Orange juice', 'Grapefruit juice'],
      instructions: "Mix and stir with ice in a mixing glass, strain off into a large cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Grapefruit Lemonade",
      ingredients: [ 'Grenadine', 'Grapefruit juice', 'Soda water'],
      instructions: "Place some ice cubes in a large tumbler, add grenadine syrup and grapefruit juice, top up with soda water. Stir a little and serve with a drinking straw.",
      glass: 'vote'
  },

  {
      name: "Hot Buttered Rum Batter #1",
      ingredients: [ 'Brown sugar', 'Butter', 'Nutmeg', 'Cinnamon', 'Cloves', 'Cardamom', 'Vanilla extract'],
      instructions: "Blend all ingredients in a food processer or mixer and store in the fridge or freezer. To make a drink add a shot of good dark rum along with 1 or 2 tbl spoons of batter to a mug of very hot water. Serve in irish coffee cup.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Hot Buttered Rum Batter #2",
      ingredients: [ 'Brown sugar', 'Sugar', 'Butter', 'Vanilla ice-cream'],
      instructions: "Blend all ingredients in a food processer or mixer and store in the fridge or freezer. To make a drink add a shot of good dark rum along with 1 or 2 tbl spoons of batter to a mug of very hot water. Serve in irish coffee cup.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Hot Lemonade",
      ingredients: [ 'Lemon', 'Maple syrup', 'Cayenne pepper'],
      instructions: "Squeeze the juice of the lemon into a 10-oz. glass. Add maple syrup and a dash of cayenne pepper. Fill with ice water. Stir. Drink.",
      glass: 'vote'
  },

  {
      name: "Kanaan",
      ingredients: [ 'Milk', 'Egg', 'Honey'],
      instructions: "Prepare in a blender with a little ice, serve in a highball glass.",
      glass: 'Highball glass'
  },

  {
      name: "Lemon Cocktail",
      ingredients: [ 'Orange juice', 'Lemon juice'],
      instructions: "Stir orange juice and lemon juice with ice in a mixing glass. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Lemon Flip",
      ingredients: [ 'Egg yolk', 'Sugar syrup', 'Lemon juice'],
      instructions: "Put several ice cubes in a shaker, add egg yolk, sugar syrup and lemon juice. Shake very well and strain into a highball glass. Serve with a drinking straw.",
      glass: 'Highball glass'
  },

  {
      name: "Lemon Squash",
      ingredients: [ 'Lemon juice', 'Sugar syrup', 'Soda water'],
      instructions: "Mix lemon juice with sugar syrup in a highball glass, stir well and fill up with soda water. Serve with drinking straw.",
      glass: 'Highball glass'
  },

  {
      name: "Honey Lemonade",
      ingredients: [ 'Soda water', 'Lemon juice', 'Honey'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Lucky Driver",
      ingredients: [ 'Coconut liqueur', 'Lemon juice', 'Pineapple juice', 'Grapefruit juice', 'Orange juice', 'Sugar syrup'],
      instructions: "Prepare in a blender or shaker, serve in a highball glass with 2-3 ice cubes. Garnish with one orange slice, and one lemon slice. Use only fresh squeezed juice for best result!",
      glass: 'Highball glass'
  },

  {
      name: "Mint Julep #3",
      ingredients: [ 'Mint', 'Sugar syrup', 'Bourbon', 'Angostura bitters'],
      instructions: "In electric blender, blend on high for a few seconds, until leaves are reduced. Strain into silver tumbler packed with shaved ice, add more Bourbon to saturate the ice, garnish with a sprig of mint.",
      glass: 'vote'
  },

  {
      name: "Grenadine Cocktail",
      ingredients: [ 'Grenadine', 'Orange juice', 'Pineapple juice'],
      instructions: "The proportions are approximate, vary according to taste. Mix together, serve with lots of ice.",
      glass: 'vote'
  },

  {
      name: "Orangatang",
      ingredients: [ 'Orange juice', 'Cranberry juice'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Orange Cocktail",
      ingredients: [ 'Lemon juice', 'Orange juice'],
      instructions: "Stir lemon juice and orange juice in a mixing glass, strain into a large cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Orange Cooler",
      ingredients: [ 'Orange juice', 'Sugar syrup', 'Ginger ale'],
      instructions: "Put several ice cubes in a large tumbler, add sugar syrup and orange juice, top up with ginger ale. Stir.",
      glass: 'vote'
  },

  {
      name: "Orange Flip",
      ingredients: [ 'Orange juice', 'Egg yolk', 'Honey'],
      instructions: "Mix in a blender.",
      glass: 'vote'
  },

  {
      name: "Orange Smile",
      ingredients: [ 'Egg', 'Grenadine', 'Orange juice'],
      instructions: "Shake egg, grenadine syrup, orange juice, and several ice cubes well. Strain into a small tumbler, serve with a drinking straw.",
      glass: 'vote'
  },

  {
      name: "Orange Squash",
      ingredients: [ 'Lemon juice', 'Orange juice'],
      instructions: "Put one ice cube in a large tumbler, add lemon juice and orange juice. Stir well. Serve sugar and cold water on the side, so the guest can modify the taste, and a drinking straw and a spoon.",
      glass: 'vote'
  },

  {
      name: "Orange Velvet",
      ingredients: [ 'Cream', 'Pineapple juice', 'Orange juice'],
      instructions: "Shake cream, pineapple juice and orange juice with some ice. Strain into a large cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Orangeade",
      ingredients: [ 'Lemon juice', 'Orange juice', 'Sugar syrup', 'Soda water'],
      instructions: "Place some ice cubes in a large tumbler or highball glass, add lemon juice, orange juice, sugar syrup, and stir well. Top up with cold soda water, serve with a drinking straw.",
      glass: 'Highball glass'
  },

  {
      name: "Orgeat Lemonade",
      ingredients: [ 'Lemon juice', 'Orgeat syrup', 'Soda water'],
      instructions: "Mix lemon juice and orgeat syrup in a tumbler with 2-3 small ice cubes. Fill up with soda water and stir.",
      glass: 'vote'
  },

  {
      name: "Parisette",
      ingredients: [ 'Grenadine', 'Milk'],
      instructions: "Pour grenadine syrup over some ice cubes in a large tumbler. Stir. Fill up with cold milk. Stir again, serve with a drinking straw.",
      glass: 'vote'
  },

  {
      name: "Pineapple Lemonade",
      ingredients: [ 'Orange juice', 'Pineapple juice', 'Sugar syrup', 'Soda water'],
      instructions: "Mix juice and sugar syrup in a large tumbler with several ice cubes. Stir well and top up with cold Soda Water. Serve with a drinking straw.",
      glass: 'vote'
  },

  {
      name: "Pineapple Power",
      ingredients: [ 'Pineapple', 'Water', 'Honey', 'Ginger'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Pussy Foot",
      ingredients: [ 'Grenadine', 'Pineapple juice', 'Orange juice', 'Grapefruit juice'],
      instructions: "Shake or blend briefly, strain into a highball glass. Garnish with fresh fruit, cherry, and a drinking straw.",
      glass: 'Highball glass'
  },

  {
      name: "Rail Splitter",
      ingredients: [ 'Sugar syrup', 'Lemon juice', 'Ginger ale'],
      instructions: "Mix sugar syrup with lemon juice in a tall glass. Fill up with ginger ale.",
      glass: 'Highball glass'
  },

  {
      name: "Rose de Mai Cocktail",
      ingredients: [ 'Pineapple juice', 'Raspberry syrup', 'Cream'],
      instructions: "Shake very well pineapple juice, raspberry fruit-syrup and cream with ice cubes. Strain into a large cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "St. Clement's",
      ingredients: [ 'Orange juice', 'Bitter lemon'],
      instructions: "Mix with ice, serve.",
      glass: 'vote'
  },

  {
      name: "Shirley Temple",
      ingredients: [ 'Ginger ale', 'Grenadine'],
      instructions: "Build in a highball glass. Add ginger ale over ice and sprinkle grenadine syrup over it. Garnish with a lemon slice and a cherry.",
      glass: 'Highball glass'
  },

  {
      name: "Tomato Cocktail",
      ingredients: [ 'Worcestershire sauce', 'Lemon juice', 'Tomato juice', 'Salt', 'Black pepper'],
      instructions: "Stir in a mixing glass Worcestershire sauce, lemon juice, tomato juice, and a little salt and pepper over ice cubes. Strain off into a large cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Grape Flip",
      ingredients: [ 'Milk', 'Grape juice', 'Egg yolk', 'Raspberry syrup'],
      instructions: "Shake or blend very well, serve icecold in a burgundy glass. If you wish to garnish, use grapes.",
      glass: 'vote'
  },

  {
      name: "Tropical",
      ingredients: [ 'Grenadine', 'Mint syrup', 'Milk'],
      instructions: "Shake or build directly in the glass.",
      glass: 'vote'
  },

  {
      name: "Sammensurium (Mix up)",
      ingredients: [ 'Vodka', 'Pisang Ambon', 'Blue Curacao', 'Orange juice', 'Grenadine'],
      instructions: "Build over ice in a highball glass.",
      glass: 'Highball glass'
  },

  {
      name: "Ishav",
      ingredients: [ 'Vodka', 'Pisang Ambon', 'Sour mix', 'Soda water'],
      instructions: "Shake vodka, Pisang and sour mix well with ice. Pour into a highball glass. Fill with soda water.",
      glass: 'Highball glass'
  },

  {
      name: "Homemade Ginger Beer",
      ingredients: [ 'Ginger', 'Lime juice', 'Lime', 'Sugar', 'Water', 'Yeast', 'Water'],
      instructions: "Combine the crushed ginger,lime peel,juice and sugar in a jar or bottle larger than 32 oz with a lid that can be tightly sealed. Pour in the boiling water. Cover loosely and let cool to room temp. Dissolve the yeast in the lukewarm water and add. Seal the jar as tightly as possible and let stand at room temp overnight. Chill, strain and serve.",
      glass: 'vote'
  },

  {
      name: "Homemade Snapple",
      ingredients: [ 'Tea', 'Water', 'Fruit juice', 'Sugar', 'Lemon juice'],
      instructions: "Let tea steep for at about 5 mins so it's nice and strong. After tea is cool, mix together the remaining ingredients. Add more sugar and/or lemon juice to suit your taste. Some flavors may need more juice concentrate.",
      glass: 'vote'
  },

  {
      name: "Banana Milk Shake",
      ingredients: [ 'Milk', 'Orange juice', 'Sugar syrup', 'Banana'],
      instructions: "Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana.",
      glass: 'White wine glass'
  },

  {
      name: "Banana Strawberry Shake",
      ingredients: [ 'Strawberries', 'Banana', 'Yoghurt', 'Milk', 'Honey'],
      instructions: "Blend all together in a blender until smooth.",
      glass: 'vote'
  },

  {
      name: "Banana Strawberry Shake Daiquiri-type",
      ingredients: [ 'Strawberries', 'Banana', 'Apple juice'],
      instructions: "Blend all together in a blender until smooth.",
      glass: 'vote'
  },

  {
      name: "Cool Cow",
      ingredients: [ 'Milk', 'Almond flavoring', 'Honey'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Crazy Cow",
      ingredients: [ 'Apple juice', 'Milk'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Dutch Treat",
      ingredients: [ 'Milk', 'Cocoa powder', 'Vanilla extract', 'Honey', 'Cinnamon'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Earth Shake",
      ingredients: [ 'Pineapple juice', 'Pineapple', 'Carrot'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Egg Cream",
      ingredients: [ 'Chocolate syrup', 'Milk', 'Soda water'],
      instructions: "Mix syrup and milk in a fountain glass. Add soda water, serve with a straw.",
      glass: 'vote'
  },

  {
      name: "Fruit Cooler",
      ingredients: [ 'Apple juice', 'Strawberries', 'Sugar', 'Lemon', 'Apple', 'Soda water', 'Ice'],
      instructions: "Toss strawberries with sugar, and let sit overnight in refrigerator. Cut lemon, reserve two slices. Juice the rest. Mix together the lemon juice, strawberries, apple juice, and soda water. Add slices of lemon (decor, really). In glasses, put ice cubes, and a slice of apple. Pour drink in, and serve.",
      glass: 'vote'
  },

  {
      name: "Fruit Flip-Flop",
      ingredients: [ 'Yoghurt', 'Fruit juice'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Fruit Shake",
      ingredients: [ 'Yoghurt', 'Banana', 'Orange juice', 'Fruit', 'Ice'],
      instructions: "Blend til smooth.",
      glass: 'vote'
  },

  {
      name: "Grapple",
      ingredients: [ 'Grape juice', 'Apple cider', 'Lemon juice', 'Cinnamon'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Great Grapes",
      ingredients: [ 'Grape juice', 'Soda water', 'Honey', 'Lemon juice'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Hot Cider",
      ingredients: [ 'Orange', 'Cloves', 'Apple cider', 'Cinnamon'],
      instructions: "Stud the oranges with cloves. (Push the pointy end into them until the flower part is flush with the peel.) I use about 10 per orange. You may want to peel the top layer of skin off the orange if you don't want to ingest the dyes they put on them to make them orange. Put the cider into a large saucepan, and add the oranges and some cinnamon sticks (one or two will do). Heat for hours (you can just leave it on all day for a party). It gets better with age. Just pour in more cider when it starts getting low.",
      glass: 'vote'
  },

  {
      name: "Hot Spiced Cider #1",
      ingredients: [ 'Apple cider', 'Allspice', 'Clove', 'Cinnamon'],
      instructions: "Add allspice, clove and cinnamon stick to the apple cider and let simmer for 1 hour (or longer). This may not look like much spice, but it really does make a pleasantly spicey cider.",
      glass: 'vote'
  },

  {
      name: "Hot Mulled Cider #1",
      ingredients: [ 'Apple cider', 'Orange', 'Cloves', 'Cinnamon', 'Nutmeg'],
      instructions: "Dump cider, cinnamon sticks and a couple of teaspoons of nutmeg into a pot over very low heat. Slice oranges (after washing them well!!), and stick whole cloves into the rind, then float in cider as it warms. That's it. Drink when it gets warm. You can dump more cider into it up to a point when the spices get old - then just start again with a new set of spices, and a new orange.",
      glass: 'vote'
  },

  {
      name: "Jungle Juice #2",
      ingredients: [ 'Banana', 'Orange juice', 'Ginger'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Just a Moonmint",
      ingredients: [ 'Milk', 'Chocolate syrup', 'Mint syrup'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Lassi - A South Indian Drink",
      ingredients: [ 'Yoghurt', 'Water', 'Cumin seed', 'Salt', 'Mint'],
      instructions: "Blend in a blender for 3 seconds. Lassi is one of the easiest things to make, and there are many ways of making it. Basically, it is buttermilk (yoghurt whisked with water), and you can choose almost any consistency that you like, from the thinnest to the thickest. Serve cold.",
      glass: 'vote'
  },

  {
      name: "Lassi Khara",
      ingredients: [ 'Yoghurt', 'Water', 'Salt', 'Asafoetida'],
      instructions: "Blend (frappe) in blender until frothy. Add torn curry leaves and serve cold.",
      glass: 'vote'
  },

  {
      name: "Lassi Raita",
      ingredients: [ 'Yoghurt', 'Ice', 'Sugar', 'Lime', 'Salt'],
      instructions: "Blend the yoghurt and ice cubes together, until the yoghurt becomes more liquid. Add sugar to taste. The lemon/lime is optional but it gives it a slightly tart taste. Dash of salt. Raita is also good for the summer. Instead of having a traditional salad you can make raita instead.",
      glass: 'vote'
  },

  {
      name: "Lassi - Sweet",
      ingredients: [ 'Yoghurt', 'Water', 'Sugar', 'Salt', 'Lemon juice'],
      instructions: "Put all ingredients into a blender and blend until nice and frothy. Serve chilled.",
      glass: 'vote'
  },

  {
      name: "Lassi - Mango",
      ingredients: [ 'Mango', 'Yoghurt', 'Sugar', 'Water'],
      instructions: "Put it all in a blender and pour over crushed ice. You can also use other fruits like strawberries and bananas.",
      glass: 'vote'
  },

  {
      name: "Vegan - Hot indian 'milk' drink",
      ingredients: [ 'Soy milk', 'Ginger', 'Cloves', 'Cinnamon', 'Allspice', 'Sugar'],
      instructions: "In a large cooking pot (at least twice the size needed to contain your soy milk), mix everything together and heat on high while stirring constantly. Bring to a boil (remember to stir constantly!), and the concoction will froth up. Remove from heat, let the froth subside, and repeat this cycle three more times. This is why your pot has to be bigger: the frothing would cause a major spill if you used a smaller pot. Serve and drink while hot. You can also adjust sweetness in your cup. Some people may want to strain this, as the ground spices sometimes have some coarse particles. This is a very nice hot drink, with a definite indian-food flavour, spicy-sweet and rich. The original recipe using milk also called for a tablespoon of butter for each serving (yuk!), and that was intended to make the drink rich-tasting. The thicker soy milk already has that thick rich texture, and is much lower in fat content.",
      glass: 'vote'
  },

  {
      name: "Lemouroudji",
      ingredients: [ 'Ginger', 'Water', 'Lemon', 'Sugar', 'Cayenne pepper'],
      instructions: "Juice the lemons. Peel and grate the ginger. Place the grated ginger and a liberal dash of the cayenne pepper into a piece of cheesecloth, and tie it into a knot. Let soak in the water. After 15 minutes or so, add the sugar, and the lemon juice. Chill, and serve.",
      glass: 'vote'
  },

  {
      name: "Limeade",
      ingredients: [ 'Lime', 'Sugar', 'Soda water', 'Lime peel'],
      instructions: "In a large glass, put the lime juice and sugar, and stir well. Add cold seltzer water to fill. Put the lime peels in the glass. Drink. Repeat until limes or soda run out.",
      glass: 'vote'
  },

  {
      name: "Imperial Cocktail",
      ingredients: [ 'Lime juice', 'Gin', 'Aperol'],
      instructions: "Shake with ice and strain into cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Banana Cantaloupe Smoothie",
      ingredients: [ 'Cantaloupe', 'Banana'],
      instructions: "Juice cantaloupe, pour juice into blender, add banana, and liquify.",
      glass: 'vote'
  },

  {
      name: "Apple Berry Smoothie",
      ingredients: [ 'Berries', 'Apple'],
      instructions: "Throw everything into a blender and liquify.",
      glass: 'vote'
  },

  {
      name: "Grape lemon pineapple Smoothie",
      ingredients: [ 'Grapes', 'Lemon', 'Pineapple'],
      instructions: "Throw everything into a blender and liquify.",
      glass: 'vote'
  },

  {
      name: "Kiwi Papaya Smoothie",
      ingredients: [ 'Kiwi', 'Papaya'],
      instructions: "Throw everything into a blender and liquify.",
      glass: 'vote'
  },

  {
      name: "Mango Orange Smoothie",
      ingredients: [ 'Mango', 'Orange'],
      instructions: "Throw everything into a blender and liquify.",
      glass: 'vote'
  },

  {
      name: "Pineapple Gingerale Smoothie",
      ingredients: [ 'Ginger', 'Pineapple'],
      instructions: "Throw everything into a blender and liquify.",
      glass: 'vote'
  },

  {
      name: "Kill the cold Smoothie",
      ingredients: [ 'Ginger', 'Lemon', 'Water'],
      instructions: "Juice ginger and lemon and add it to hot water. You may add cardomom.",
      glass: 'vote'
  },

  {
      name: "Strawberry Shivers",
      ingredients: [ 'Strawberries', 'Honey', 'Water'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Sweet Bananas",
      ingredients: [ 'Milk', 'Banana', 'Honey'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Tomato Tang",
      ingredients: [ 'Tomato juice', 'Lemon juice', 'Celery salt'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
      glass: 'vote'
  },

  {
      name: "Yoghurt Cooler",
      ingredients: [ 'Yoghurt', 'Fruit', 'Ice'],
      instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Note: Use lots of ice in this one - great on hot days! To add ice: Remove the center of the cover while the blender is on - drop 3 or 4 ice cubs and blend until they're completely crushed.",
      glass: 'vote'
  },

  {
      name: "Castillian Hot Chocolate",
      ingredients: [ 'Cocoa powder', 'Sugar', 'Cornstarch', 'Water', 'Milk'],
      instructions: "Shift the cocoa and sugar together into a medium-sized saucepan. Dissolve the cornstarch in the water, and stir into the cocoa and sugar until it is a smooth paste. Begin heating the mixture, stirring it with a whisk, and gradually pour in the milk. Continue stirring with the whisk as you bring the liquid to a simmer. Allow the chocolate to simmer for about 10 minutes, stirring often, until it is thick, glossy and completely smooth. Serve steaming hot in coffee mug. Serves six.",
      glass: 'Coffee mug'
  },

  {
      name: "Chocolate Beverage",
      ingredients: [ 'Milk', 'Chocolate', 'Cinnamon', 'Egg'],
      instructions: "Boil milk in the top of a deep double boiler five minutes. Remove from fire and add chocolate, mixed with the cinnamon, a little at a time, beating with molinillo or egg beater after each addition. When the chocolate is thoroughly blended, heat to the boiling point. Place over bottom of double boiler and add eggs, whipping constantly, until they are thoroughly blended and the mixture is frothing. Serve in coffee mug. Serves eight.",
      glass: 'Coffee mug'
  },

  {
      name: "Chocolate Drink",
      ingredients: [ 'Chocolate', 'Milk', 'Water'],
      instructions: "Melt the bar in a small amount of boiling water. Add milk. Cook over low heat, whipping gently (with a whisk, i would assume) until heated well. Don't let it boil! Serve in coffee mug.",
      glass: 'Coffee mug'
  },

  {
      name: "Drinking Chocolate",
      ingredients: [ 'Heavy cream', 'Milk', 'Cinnamon', 'Vanilla', 'Chocolate', 'Whipped cream'],
      instructions: "Heat the cream and milk with the cinnamon and vanilla bean very slowly for 15-20 minutes. (If you don't have any beans add 1-2 tsp of vanilla after heating). Remove the bean and cinnamon. Add the chocolate. Mix until fully melted. Serve topped with some very dense fresh whipped cream. Serves 1-2 depending upon how much of a glutton you are. For a richer chocolate, use 4 oz of milk, 4 oz of cream, 4 oz of chocolate. Serve in coffee mug.",
      glass: 'Coffee mug'
  },

  {
      name: "Hot Chocolate to Die for",
      ingredients: [ 'Chocolate', 'Butter', 'Vanilla extract', 'Half-and-half', 'Marshmallows'],
      instructions: "Melt the chocolate, butter and vanilla in a double boiler. When just smooth stir in the cream.",
      glass: 'Coffee mug'
  },

  {
      name: "Hot Chocolate #1",
      ingredients: [ 'Milk', 'Cocoa powder', 'Sugar', 'Salt'],
      instructions: "Combine sugar and cocoa, add milk and a dash of salt. Makes 8 servings. For 1 serving place 1/3 cup dry mixture in a coffee mug, add boiling water and stir.",
      glass: 'Coffee mug'
  },

  {
      name: "Microwave Hot Cocoa",
      ingredients: [ 'Sugar', 'Cocoa powder', 'Salt', 'Water', 'Milk', 'Vanilla extract'],
      instructions: "Combine sugar, cocoa, salt and hot water in 1-quart micro-proof measuring cup (or coffee mug). Microwave at HIGH (100%) for 1 to 1 1/2 minutes or until boiling. Add milk, sitr and microwave an additonal 1 1/2 to 2 minutes or until hot. Stir in vanilla, blend well.",
      glass: 'Coffee mug'
  },

  {
      name: "Nuked Hot Chocolate",
      ingredients: [ 'Cocoa powder', 'Sugar', 'Vanilla extract', 'Milk'],
      instructions: "Mix with a bit of milk (1 oz or so) in coffee mug. Nuke mug for about 30-50 seconds. Stir until the heated cocoa dissolves. Fill mug with milk. Nuke for 1-2 minutes, depending on wattage and preferences as to burnt mouth parts.",
      glass: 'Coffee mug'
  },

  {
      name: "Orange Scented Hot Chocolate",
      ingredients: [ 'Milk', 'Chocolate', 'Orange peel', 'Espresso', 'Nutmeg'],
      instructions: "Combine all ingredients in heavy medium saucepan. Stir over low heat until chocolate melts. Increase heat and bring just to a boil, stirring often. Remove from heat and whisk untily frothy. Return to heat and bring to boil again. Remove from heat, whisk until frothy. Repeat heating and whisking once again. Discard orange peel. (Can be prepared 2 hours ahead. Let stand at room temperature. Before serving, bring just to boil, remove from heat and whisk until frothy.) Pour hot chocolate into coffee mugs. Makes 2 servings.",
      glass: 'Coffee mug'
  },

  {
      name: "Spanish chocolate",
      ingredients: [ 'Milk', 'Chocolate', 'Cinnamon', 'Egg yolk'],
      instructions: "Stir the milk with the chocolate and the cinnamon over low heat until the chocolate dissolves. Add the eggs and beat the mixture until it becomes thick, taking care not to boil. Serve in coffee mug.",
      glass: 'Coffee mug'
  },

  {
      name: "Lemon Shot",
      ingredients: [ 'Galliano', 'Absolut Citron', 'Lemon', 'Sugar', '151 proof rum'],
      instructions: "Mix Galliano and Absolut Citron in a shot glass, lay lemon wedge sprinkled with sugar over glass and pour a rum over wedge and glass. light rum with a lighter and let burn for a second. Do shot quickly and suck on lemon. If it is done correctly, this will taste like a shot of sweet lemonade.",
      glass: 'Shot glass'
  },

  {
      name: "Sex on the Beach",
      ingredients: [ 'Vodka', 'Peach schnapps', 'Cranberry juice', 'Grapefruit juice'],
      instructions: "Half fill with cranberry juice and grapefruit juice, stir in highball glass.",
      glass: 'vote'
  },

  {
      name: "Autodafé",
      ingredients: [ 'Vodka', 'Lime juice', 'Soda water'],
      instructions: "Mix and fill up with soda water. Drunk by finns on a sunny day any time of the year and day.",
      glass: 'vote'
  },

  {
      name: "Gagliardo",
      ingredients: [ 'Peach Vodka', 'Lemon juice', 'Galliano', 'Sirup of roses'],
      instructions: "Shake well and serve in a cocktail glass. This is a home cocktail of American/Internet Bar del Pozzo, Pavia, Italy.",
      glass: 'Cocktail glass'
  },

  {
      name: "Surf City Lifesaver",
      ingredients: [ 'Ouzo', 'Irish Cream', 'Gin', 'Grand Marnier'],
      instructions: "Lots of ice and soda top up in tall glass with cherry and a grin.",
      glass: 'Highball glass'
  },

  {
      name: "Grizzly Bear",
      ingredients: [ 'Amaretto', 'Jägermeister', 'Kahlua', 'Milk'],
      instructions: "Served over ice. Sounds nasty, but tastes great.",
      glass: 'vote'
  },

  {
      name: "Karsk",
      ingredients: [ 'Coffee', 'Grain alcohol'],
      instructions: "Put a copper coin in a coffe-cup and fill up with coffee until you no longer see the coin, then add alcohol until you see the coin. Norwegian speciality.",
      glass: 'vote'
  },

  {
      name: "Happy Skipper",
      ingredients: [ 'Spiced rum', 'Ginger ale', 'Lime', 'Ice'],
      instructions: "Pour Captain Morgan's Spiced Rum over ice, fill glass to top with Ginger Ale. Garnish with lime. Tastes like a cream soda. Named for the Gilligan's Island reference ('The Captain' *in* 'Ginger' is a Happy Skipper!)",
      glass: 'vote'
  },

  {
      name: "Frappé",
      ingredients: [ 'Coffee', 'Milk', 'Sugar'],
      instructions: "Mix together. Blend at highest blender speed for about 1 minute. Pour into a glass and drink with a straw. Notes: This works best if everything is cold (if you make fresh coffee, mix it with the milk and let it sit in the fridge for 1/2 hour. If it is not frothy, add more milk, or even just some more milk powder. The froth gradually turns to liquid at the bottom of the glass, so you will find that you can sit and drink this for about 1/2 hour, with more iced coffee continually appearing at the bottom. Very refreshing.",
      glass: 'vote'
  },

  {
      name: "Iced Coffee",
      ingredients: [ 'Coffee', 'Sugar', 'Water', 'Milk'],
      instructions: "Mix together until coffee and sugar is dissolved. Add milk. Shake well. Using a blender or milk shake maker produces a very foamy drink. Serve in coffee mug.",
      glass: 'Coffee mug'
  },

  {
      name: "Iced Coffee Fillip",
      ingredients: [ 'Kahlua', 'Coffee'],
      instructions: "Mix together in a coffee mug and chill before serving.",
      glass: 'Coffee mug'
  },

  {
      name: "Masala Chai",
      ingredients: [ 'Water', 'Tea', 'Ginger', 'Cardamom', 'Cloves', 'Cinnamon', 'Black pepper', 'Sugar', 'Milk'],
      instructions: "Bring 2 cups of water to boil. Add all the ingredients and boil again for about 15 seconds. Let stand for a minute. Warm milk in a pot. Filter tea into cups. Add milk and sugar. That's IT.",
      glass: 'vote'
  },

  {
      name: "Melya",
      ingredients: [ 'Espresso', 'Honey', 'Cocoa powder'],
      instructions: "Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream.",
      glass: 'Coffee mug'
  },

  {
      name: "Russian Tea #1",
      ingredients: [ 'Water', 'Tea', 'Sugar', 'Orange juice', 'Pineapple juice', 'Lemon juice', 'Cloves'],
      instructions: "First make tea in the water. Then add all the other stuff. Simmer at least 1/2 hour. Makes a nice smell in the kitchen at Christmas parties.",
      glass: 'vote'
  },

  {
      name: "Spiking coffee",
      ingredients: [ 'Coffee', 'Cinnamon'],
      instructions: "Incidentally, a pinch of cinnamon is indeed a nice addition to coffee but true heaven is a cardamom seed. Of course, you serve it in a coffee mug.",
      glass: 'Coffee mug'
  },

  {
      name: "Thai Coffee",
      ingredients: [ 'Coffee', 'Coriander', 'Cardamom', 'Sugar', 'Whipping cream', 'Ice'],
      instructions: "Place the coffee and spices in the filter cone of your coffee maker. Brew coffee as usual, let it cool. In a tall glass, dissolve 1 or 2 teaspoons of sugar in an ounce of the coffee (it's easier to dissolve than if you put it right over ice). Add 5-6 ice cubes and pour coffee to within about 1 inch of the top of the glass. Rest a spoon on top of the coffee and slowly pour whipping cream into the spoon. This will make the cream float on top of the coffee rather than dispersing into it right away.",
      glass: 'Highball glass'
  },

  {
      name: "Thai Iced Coffee",
      ingredients: [ 'Coffee', 'Sugar', 'Cream', 'Cardamom'],
      instructions: "Prepare a pot of coffee at a good European strength. In the ground coffee, add 2 or 3 freshly ground cardamom pods. Sweeten while hot, then cool quickly. Serve in highball glass over ice, with cream. To get the layered effect, place a spoon atop the coffee and pour the milk carefully into the spoon so that it floats on the top of the coffee.",
      glass: 'Highball glass'
  },

  {
      name: "Thai Iced Tea",
      ingredients: [ 'Tea', 'Water', 'Condensed milk', 'Ice', 'Mint'],
      instructions: "Combine Thai tea (i.e., the powder), boiling water, and sweetened condensed milk, stir until blended. Pour into 2 tall glasses filled with ice cubes. Garnish with mint leaves. Makes 2 servings.",
      glass: 'Highball glass'
  },

  {
      name: "Absinthe #1",
      ingredients: [ 'Vodka', 'Wormwood', 'Anise', 'Fennel seeds', 'Cardamom', 'Coriander', 'Angelica root'],
      instructions: "Steep wormwood in vodka for 48 hours. Remove, add the rest and steep for one week. Age.",
      glass: 'vote'
  },

  {
      name: "Absinthe #2",
      ingredients: [ 'Vodka', 'Sugar', 'Anise', 'Licorice root', 'Wormwood'],
      instructions: "Mix together and let sit a few days. Strain through a coffee filter. To serve mix 1 part absinthe to 4 parts water, add ice, enjoy.",
      glass: 'vote'
  },

  {
      name: "Amaretto Liqueur",
      ingredients: [ 'Sugar', 'Water', 'Apricot', 'Almond flavoring', 'Grain alcohol', 'Water', 'Brandy', 'Food coloring', 'Food coloring', 'Food coloring', 'Glycerine'],
      instructions: "Combine sugar and 3/4 cup water in a small saucepan. Bring to a boil, stirring constantly. Reduce heat and simmer until all sugar is dissolved. Remove from heat and cool. In an aging container, combine apricot halves, almond extract, grain alcohol with 1/2 cup water, and brandy. Stir in cooled sugar syrup mixture. Cap and let age for 2 days. Remove apricot halves. (Save apricot halves, can be used for cooking). Add food coloring and glycerine. Stir, recap and continue aging for 1 to 2 months. Re-bottle as desired. Liqueur is ready to serve but will continue to improve with additional aging.",
      glass: 'vote'
  },

  {
      name: "Angelica Liqueur",
      ingredients: [ 'Angelica root', 'Almond', 'Allspice', 'Cinnamon', 'Anise', 'Coriander', 'Marjoram leaves', 'Vodka', 'Sugar', 'Water', 'Food coloring', 'Food coloring'],
      instructions: "Combine all herbs, nuts and spices with vodka in a 1 quart or larger aging container. Cap tightly and shake daily for 2 weeks. Strain through a fine muslin cloth or coffee filter, discarding solids. Clean out aging container. Place liquid back in container. Place sugar and water in saucepan and stir to combine over medium heat. When sugar is completely dissolved, set aside and let cool. When cool combine with food coloring and add to liqueur liquid. Cap and allow to age and mellow in a cool, dark place for one month.",
      glass: 'vote'
  },

  {
      name: "Caribbean Orange Liqueur",
      ingredients: [ 'Orange', 'Vodka', 'Sugar'],
      instructions: "Pare very thinly the bright-colored rind from the oranges (no white). Blot the peel on paper towels to remove any excess oil. Put peel in a 4 cup screw-top jar. Add 2 cups vodka. Close jar. Store in a cool, dark place for 2 days or until the vodka has absorbed the flavor. Remove peel and add remaining vodka. Close jar and add remaining cup of vodka. Close the jar and store in a cool dark place at least 1 month to age.",
      glass: 'vote'
  },

  {
      name: "Coffee Liqueur",
      ingredients: [ 'Coffee', 'Vanilla extract', 'Sugar', 'Vodka', 'Water'],
      instructions: "Combine coffee, sugar and water. Simmer 1 hour and let cool. Add vanilla and vodka. Age in sealed jar 2 to 3 weeks.",
      glass: 'vote'
  },

  {
      name: "Coffee-Vodka",
      ingredients: [ 'Water', 'Sugar', 'Coffee', 'Vanilla', 'Vodka', 'Caramel coloring'],
      instructions: "Boil water and sugar until dissolved. Turn off heat. Slowly add dry instant coffee and continue stirring. Add a chopped vanilla bean to the vodka, then combine the cooled sugar syrup and coffee solution with the vodka. Cover tightly and shake vigorously each day for 3 weeks. Strain and filter. Its also best to let the sugar mixture cool completely so the vodka won't evaporate when its added. If you like a smoother feel to the liqueur you can add about 1 teaspoon of glycerine to the finished product.",
      glass: 'vote'
  },

  {
      name: "Cranberry Cordial",
      ingredients: [ 'Cranberries', 'Sugar', 'Light rum'],
      instructions: "Place the chopped cranberries in a 2 liter jar that has a tight-fitting lid. Add the sugar and rum. Adjust the lid securely and place the jar in a cool, dark place. Invert the jar and shake it every day for six weeks. Strain the cordial into bottles and seal with corks.",
      glass: 'vote'
  },

  {
      name: "Cream Cordial",
      ingredients: [ 'Condensed milk', 'Coffee liqueur', 'Whipping cream', 'Egg'],
      instructions: "In blender container, combine all ingredients, blend until smooth. Serve over ice if desired. Store tightly covered in refrigerator up to one month. Stir before using.",
      glass: 'vote'
  },

  {
      name: "Creamy Rum Liqueur",
      ingredients: [ 'Condensed milk', 'Cream', 'Milk', 'Rum', 'Chocolate syrup', 'Coffee', 'Water'],
      instructions: "Dissolve coffee in water. Mix all ingredient's slowly in a blender. Serve chilled. Keeps, sealed in the fridge, for 2 weeks.",
      glass: 'vote'
  },

  {
      name: "Creme de Menthe",
      ingredients: [ 'Sugar', 'Water', 'Grain alcohol', 'Peppermint extract', 'Food coloring'],
      instructions: "Bring sugar and water to a boil and simmer for 10 minutes. Cool. Add the remaining ingredients and stir. Cover and let ripen for 1 month.",
      glass: 'vote'
  },

  {
      name: "Daiquiri Liqueur",
      ingredients: [ 'Lime', 'Light rum', 'Sugar'],
      instructions: "Pare very thinly the bright-colored rind from the limes (no white). Blot the peel on paper towels to remove any excess oil. Put peel in a 4 cup screw-top jar. Add 2 cups of the rum. Close the jar. Store in a cool, dark place for 2 days or until rum has absorbed the flavor. Remove the peel and add the sugar. Shake vigorously until the sugar dissolves and add remaining cup of rum. Close jar and store in a cool, dark place at least 1 month to age.",
      glass: 'vote'
  },

  {
      name: "Fresh Mint Liqueur",
      ingredients: [ 'Mint', 'Vodka', 'Sugar', 'Water', 'Glycerine', 'Food coloring', 'Food coloring'],
      instructions: "Wash leaves in cold water several times. Shake or pat dry gently. Snip each leaf in half or thirds. Discard stems. measure cut mint leaves, packing lightly. Combine mint leaves and vodka in aging container. Cap and let stand in a cool place for 2 weeks, shaking occasionally. After initial aging, strain leaves from liqueur, discard leaves. In a sucepan, combine sugar and water. Bring to a boil, stirring constantly. Let cool. Add cooled syrup to liqueur base, stirring to combine. Add glycerine and food color, pour into aging container for secondary aging of 1-3 more months.",
      glass: 'vote'
  },

  {
      name: "Galliano",
      ingredients: [ 'Water', 'Corn syrup', 'Sugar', 'Food coloring', 'Grain alcohol', 'Anise', 'Vanilla extract'],
      instructions: "Boil water, corn syrup and sugar for 5 minutes. Add the remaining ingredients and stir. Cover and let stand 1 month.",
      glass: 'vote'
  },

  {
      name: "Grand Orange-Cognac Liqueur",
      ingredients: [ 'Orange', 'Sugar', 'Cognac', 'Glycerine'],
      instructions: "Place zest and sugar in a small bowl. Mash and mix together with the back of a wooden spoon or a pestle. Continue mashing until sugar is absorbed into the orange zest and is no longer distinct. Place into aging container. Add cognac. Stir, cap and let age in a cool dark place 2 to 3 months, shaking monthly. After initial aging, pour through fine mesh strainer placed over medium bowl. Rinse out aging container. Pour glycerine into aging container and place cloth bag inside strainer. Pour liqueur through cloth bag. Stir with a wooden spoon to combine. Cap and age 3 more months before serving.",
      glass: 'vote'
  },

  {
      name: "Honey Liquor",
      ingredients: [ 'Honey', 'Water', 'Grain alcohol'],
      instructions: "Dissolve honey in hot water. The water should not be hotter than 45 degrees Celsius. Let the mixture cool down, then add spirit of wine.",
      glass: 'vote'
  },

  {
      name: "Irish Cream",
      ingredients: [ 'Scotch', 'Half-and-half', 'Condensed milk', 'Coconut syrup', 'Chocolate syrup'],
      instructions: "Mix scotch and milk. Add half-and-half. Add rest.",
      glass: 'vote'
  },

  {
      name: "Irish Cream - Bailey's #1",
      ingredients: [ 'Whipping cream', 'Vanilla extract', 'Brandy', 'Chocolate syrup', 'Egg', 'Condensed milk'],
      instructions: "Combine all the ingredients in a blender. Blend on lowest setting until frothy or well blended.",
      glass: 'vote'
  },

  {
      name: "Irish Cream - Bailey's #2",
      ingredients: [ 'Egg', 'Coconut syrup', 'Chocolate syrup', 'Whiskey', 'Coffee'],
      instructions: "Blend all ingredients in a blender for no longer than 2 mins. Pour over ice and enjoy straight away.",
      glass: 'vote'
  },

  {
      name: "Irish Cream - Bailey's #3",
      ingredients: [ 'Half-and-half', 'Egg', 'Irish whiskey', 'Chocolate syrup', 'Cinnamon', 'Vanilla extract'],
      instructions: "Blend all ingredients in a blender until mixed well, serve cold. Stores up to two weeks in the fridge, but it's never lasted that long :-).",
      glass: 'vote'
  },

  {
      name: "Irish Cream Liqueur #1",
      ingredients: [ 'Condensed milk', 'Irish whiskey', 'Egg', 'Cream', 'Chocolate syrup', 'Coffee', 'Vanilla extract', 'Almond flavoring'],
      instructions: "Combine all ingredients in a blender until smooth. Store in the refrigerator for up to one month.",
      glass: 'vote'
  },

  {
      name: "Irish Cream Liqueur #2",
      ingredients: [ 'Egg', 'Milk', 'Chocolate syrup', 'Vanilla extract', 'Lemon juice', 'Coffee', 'Sugar', 'Irish whiskey'],
      instructions: "Place all ingredients in a blender, blend well. Bottle and let mellow in refrigerator at least one week befor serving. this has been found to be best after 1-2 weeks. Store in refrigerator. Liqueur at room temperature by removing form refrigerator 1-2 hours before serving.",
      glass: 'vote'
  },

  {
      name: "Irish Cream Liqueur #3",
      ingredients: [ 'Irish whiskey', 'Condensed milk', 'Whipping cream', 'Egg', 'Chocolate syrup', 'Coffee', 'Almond flavoring'],
      instructions: "Blend (use blender) all ingredients until smooth. Store tightly covered in refrigerator. Shake before serving. Keeps up to one month.",
      glass: 'vote'
  },

  {
      name: "Kahlua #1",
      ingredients: [ 'Water', 'Sugar', 'Coffee', 'Vanilla extract'],
      instructions: "Bring to boil. Reduce heat and simmer 1 hour. let cool and add vanilla and either a pint or fifth of Vodka. Drink and Enjoy!!",
      glass: 'vote'
  },

  {
      name: "Kahlua #2",
      ingredients: [ 'Water', 'Sugar', 'Coffee', 'Vanilla', 'Bourbon'],
      instructions: "Simmer water, sugar, and coffee until the sugar dissolves. Put vanilla bean and bourbon in a gallon jug and add the coffee syrup you just prepared. Cover and let sit one month.",
      glass: 'vote'
  },

  {
      name: "Kahlua #3",
      ingredients: [ 'Water', 'Coffee', 'Sugar', 'Vodka', 'Chocolate syrup'],
      instructions: "Boil water. Add cofee. Add sugar. Simmer, 20 min. Remove from heat, add chocolate. Alow to cool. Add vodka (or don't cool if you want some of the alcohol to boil off).",
      glass: 'vote'
  },

  {
      name: "Kahlua #4",
      ingredients: [ 'Sugar', 'Water', 'Coffee', 'Coffee', 'Vodka', 'Brandy', 'Vanilla extract'],
      instructions: "Mix first 4 ingredients and simmer them for 1.5-2 hours with occasional stirring. Cool. Add the rest of the stuff. Filter and pour into dark bottles. Keep the bottles in a cool, dark place for 3 months. Shake every day.",
      glass: 'vote'
  },

  {
      name: "Kahlua #5",
      ingredients: [ 'Coffee', 'Sugar', 'Vanilla', 'Water', 'Brandy'],
      instructions: "Use fifteen 12 oz bottles with tops (cork is prefered with liquor bottles). Make sure the bottles are clean. Mix the coffee, sugar, vanilla poweder in the largest bowl you have. Add the boiling water and make sure all of the ingredients are blended well. Let cool to room tempature and then add the brandy (make sure that you give it time to cool so you don't cook down the brandy). Get a funnel and bottle your Kahlua immediately. Let stand for a couple of days. Enjoy!!!!",
      glass: 'vote'
  },

  {
      name: "Kvas",
      ingredients: [ 'Bread', 'Water', 'Yeast', 'Sugar', 'Water', 'Lemon', 'Raisins', 'Mint'],
      instructions: "Put the slices of rye-bread in the oven (200 degrees Celsius) for about 45 mins, until they're dried. Boil the 8 liters of water. Crumble the dried rye-bread, put it in the boiling water for about 5 mins. Let it the water, and rye-bread rest for 4 hours, covered with a tea-cloth. Crumble the yeast, 15 mins before the 4 hours are over. Mix the crumbled yeast with some sugar and the luke warm water. Let it rest for 15 mins. Filter the water-rye-bread mix in a kitchensieve. Carefully extract all water from the rye-bread. Wash, and peel the lemon. Add the lemon-peel, the sugar, the yeast and the mint. Stir the solution, and let it rest (covered) for 8 hours. Sieve the solution (tea-cloth). Bottle it. Put some raisins, a bit of lemon-peel, and a fresh leaf of mint in every bottle, close the bottles, and keep them in a cool place. Ready when the raisins start floating. Sieve the stuff one more time in a tea-cloth. Put the Kvas in the fridge 4 hours before drinking.",
      glass: 'vote'
  },

  {
      name: "Medd",
      ingredients: [ 'Honey', 'Water', 'Lemon', 'Cloves', 'Sugar', 'Ginger', 'Yeast', 'Bread'],
      instructions: "Spread the yeast on a piece of bread. Boil the water, honey and sugar. Stand in an earthenware pot. Skim off anyscum. Add lemon juice, cloves and ginger. Leave to cool. When just warm, float the bread and yeast on the top. Cover with a clean cloth. Leave for about 6-8 days. Strain and bottle. Corks should be loose to start with. Leave for at least 5-6 months.",
      glass: 'vote'
  },

  {
      name: "Mexican Coffee Liqueur",
      ingredients: [ 'Water', 'Coffee', 'Sugar', 'Vanilla', 'Vodka', 'Brandy', 'Chocolate syrup', 'Food coloring'],
      instructions: "Heat water in medium saucepan. when hot add coffee and stir until dissolved. Add sugar and vanilla bean, stirring well to combine. Bring to boil, stirring constantly. Imediately reduce heat so that a very low boil is maintained for one minute. Remove from heat and cool to lukewarm. Pour vodka and brandy into aging container. Add the cooled coffee mixture and the chocolate extract. Stir well. Cap and let age in a cool dark place for 3 weeks. After initial aging, strain liqueur through a cloth-lined wire-mesh strainer over a large bowl. Repeat until desired clairity is reached. Stir in food coloring. Bottle, cap and let age an additional 1-3 months.",
      glass: 'vote'
  },

  {
      name: "Pineapple Liqueur",
      ingredients: [ 'Pineapple', 'Sugar', '151 proof rum', 'Vodka', 'Lemon juice', 'Pineapple juice'],
      instructions: "Crush pineapple pieces *very* finely. Put together with the pineapple juice in a pan, add the sugar. Leave to stand over night. Drain syrup and strain pineapple pieces through a cheese cloth or in a food processor. Mix juice with rum and vodka, add lemon juice to taste. Pour in a 0.7 l bottle and fill to the brim with pineapple juice or water. Leave at least one week.",
      glass: 'vote'
  },

  {
      name: "Plum Liqueur",
      ingredients: [ 'Plums', 'Sugar', 'Vodka', 'Brandy'],
      instructions: "Wash plums and pat dry. Cut plums in half or smaller, pit. Place plums in aging container. Pour sugar over plums, stir. Add vodka and brandy stirring to partly disolve sugar. Cap container and place in a cool, dark place for 2 months, stir occasionally. Place a strainer over large bowl and strain liqueur. Press liquid from plums with the back of a wooden spoon. Discard plum pulp. Re-strain liqueur through cloth until clear. Bottle as desired. Ready for drinking or cooking but best if aged another month.",
      glass: 'vote'
  },

  {
      name: "Scottish Highland Liqueur",
      ingredients: [ 'Johnnie Walker', 'Honey', 'Angelica root', 'Fennel seeds', 'Lemon peel'],
      instructions: "Combine all ingreds in aging container. Cover tightly and shake gently several times during the first 24 hrs. After 24 hrs, remove the lemon zest. Cover again and let stand in a cool, dark place for 2 weeks, shaking gently every other day. Strain through a wire sieve to remove the angelica root and fennel. Return to aging container, cover and let stand undisturbed in a cool dark place for 6 months. Siphon or pour clear liqueur into a sterile bottle. The cloudy dregs may be saved for cooking.",
      glass: 'vote'
  },

  {
      name: "Tia-Maria",
      ingredients: [ 'Water', 'Brown sugar', 'Coffee', 'Rum', 'Vanilla extract'],
      instructions: "Boil water, sugar and coffe for 10 mins and let cool. Add rum and vanilla. Put in clean bottle(s) and leave for 1 week before using.",
      glass: 'vote'
  },

  {
      name: "Vanilla-Coffee Liqueur",
      ingredients: [ 'Brown sugar', 'Sugar', 'Water', 'Coffee', 'Vodka', 'Vanilla'],
      instructions: "Combine sugars and water. Boil for 5 minutes. Gradually stir in coffee. Cool. Add vodka and vanilla and mix thoroughly. Cover and let ripen for 1 month. Remove vanilla bean.",
      glass: 'vote'
  },

  {
      name: "Vanilla Liqueur",
      ingredients: [ 'Vanilla', 'Brandy', 'Sugar'],
      instructions: "Split vanilla beans first lengthwise, then in 1/2 inch pieces. Put in a bottle, add brandy and sugar, and shake *very* well until the sugar has dissolved. Now leave the mixture about 1 month so that the vanilla flavour has time to develop properly. After one month you can strain the liqueur so that the vanilla particles are removed. The vanilla liqueur keeps a very long time. To serve you have two possibilities: either use the liqueur as it comes out of the bottle, or mix with half'n'half or whipping cream. The latter doesn't keep too long though, it should be used in the next days (or right now). You can also pour a small amount of the liqueur in a glass of milk as a kind of alcoholic vanilla milk.",
      glass: 'vote'
  },

  {
      name: "Aloha Fruit punch",
      ingredients: [ 'Water', 'Ginger', 'Guava juice', 'Lemon juice', 'Pineapple', 'Sugar', 'Pineapple juice'],
      instructions: "Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly.",
      glass: 'vote'
  },

  {
      name: "Apple Cider Punch #1",
      ingredients: [ 'Apple cider', 'Brown sugar', 'Lemonade', 'Orange juice', 'Cloves', 'Allspice', 'Nutmeg', 'Cinnamon'],
      instructions: "If you use the whole all spice and cloves, tie them in cheesecloth. Heat the mixture. Stir occasionally. If you want an alcoholic drink, rum would be nice.",
      glass: 'vote'
  },

  {
      name: "Apple Cider Punch #2",
      ingredients: [ 'Apple', 'Strawberries', 'Mint', 'Apple juice', 'Apple cider', 'Lemonade'],
      instructions: "Make sure ingreadients are well chilled. Cut unpeeled apples 1cm cubes. Combine fruit and mint with apple juice in large punch bowl. Mix well, cover and refrigerate until serving. Before serving add chilled apple cider and lemonade.",
      glass: 'Punch bowl'
  },

  {
      name: "Voodoo Juice",
      ingredients: [ 'Orange rum', 'Banana rum', 'Coconut rum', 'Pineapple rum', 'Cranberry juice', 'Orange juice', 'Pineapple juice', 'Dark rum'],
      instructions: "Pour over ice in a hurricane class. Float dark rum on top and serve.",
      glass: 'Hurricane glass'
  },

  {
      name: "Artillery Punch",
      ingredients: [ 'Tea', 'Rye whiskey', 'Red wine', 'Rum', 'Brandy', 'Benedictine', 'Orange juice', 'Lemon juice'],
      instructions: "Combine all the ingredients in a large punch bowl with a block of ice. If found too dry, sugar syrup may be added. Decorate with twists of lemon peel.",
      glass: 'Punch bowl'
  },

  {
      name: "Bahamas Rum Punch",
      ingredients: [ 'Pineapple juice', 'Rum', 'Malibu rum', 'Campari', 'Orange juice'],
      instructions: "Mix it up varying the ingredients to taste. Balance the Orange and Pineapple, add a little Malibu rum till you can slightly taste the coconut, then enough Campari to redden it and then make up the rest with rum. A delicious and authentic island drink that will make you very drunk if you aren't careful ('cuz its so good to drink!).",
      glass: 'vote'
  },

  {
      name: "Banana Punch #2",
      ingredients: [ 'Water', 'Sugar', 'Banana', 'Orange juice', 'Lemonade', 'Pineapple juice', 'Ginger ale'],
      instructions: "Boil water and sugar for 5 minutes. Cool and add the remaining ingredients except ginger ale. Freeze. Remove from freezer 2 to 3 hours before serving. Mix with ginger ale. Float assorted fruit in punch bowl. Vodka could also be added.",
      glass: 'Punch bowl'
  },

  {
      name: "Berry Deadly",
      ingredients: [ 'Everclear', 'Wine', 'Orange juice', 'Kool-Aid'],
      instructions: "Add all ingredients to large bowl. Stir gently. Serve chilled.",
      glass: 'vote'
  },

  {
      name: "Boo Punch",
      ingredients: [ 'Kool-Aid', 'Vodka', 'Jägermeister'],
      instructions: "Combine Orange Kool-Aid and Vodka. Add some Jägermeister and it will look and taste scary.",
      glass: 'vote'
  },

  {
      name: "Champagne Punch #1",
      ingredients: [ 'Champagne', 'Triple sec', 'Brandy', 'Carbonated water'],
      instructions: "Combine all of the ingredients and serve in punch cups.",
      glass: 'vote'
  },

  {
      name: "Champagne Punch #2",
      ingredients: [ 'Sugar', 'Brandy', 'Champagne', 'Orange', 'Lemon', 'Lime', 'Pineapple', 'Ice', 'Strawberries'],
      instructions: "Mix sugar, brandy and 5 bottles champagne in a punch bowl. Then stir in orange, lemon and lime sliced thin into rounds, pineapple chunks and ice. Stir until well mixed. To complete, garnish with strawberries and pour a final bottle of champagne theatrically over the top.",
      glass: 'Punch bowl'
  },

  {
      name: "Chowning's Tavern Wine Cooler",
      ingredients: [ 'Lemonade', 'Mint', 'Red wine', 'Maraschino cherry'],
      instructions: "This makes a colorful as well as refreshing drink if the liquids are not mixed together. Pour the lemonade over crushed ice, then add the red wine. Garnish with a sprig of mint and a cherry. Good for hot days.",
      glass: 'vote'
  },

  {
      name: "Cold Duck Punch",
      ingredients: [ 'Champagne', 'Lemonade', 'Ginger ale', 'Sherbet'],
      instructions: "Mix all liquids in a large punch bowl. Float the sherbet on top.",
      glass: 'Punch bowl'
  },

  {
      name: "Coquito",
      ingredients: [ 'Water', 'Cream of coconut', 'Milk', 'Condensed milk', 'Egg yolk', 'Cinnamon', 'White rum'],
      instructions: "Boil the cinnamon sticks in the water. Take the sticks out when the water is yellow and has the smell and taste of cinnamon. Add the evaporated milk, condensed milk and egg yolks and cook at low temperature. While it's cooking stir to avoid it sticking to the bottom of the pot. When it is boiling for a few minutes, add the cream of coconut and rum. Stir well and take off the burner. Let it cool and it will be ready. Keep it in the refrigerator and it will last for a very long time.",
      glass: 'vote'
  },

  {
      name: "Cranberry Punch",
      ingredients: [ 'Cranberry juice', 'Sugar', 'Pineapple juice', 'Almond flavoring', 'Ginger ale'],
      instructions: "Combine first four ingredients. Stir until sugar is dissolved, chill. Then add ginger ale just before serving. Add ice ring to keep punch cold.",
      glass: 'vote'
  },

  {
      name: "Cranberry Tea Hot Punch",
      ingredients: [ 'Tea', 'Water', 'Cranberry juice', 'Apple cider', 'Brown sugar', 'Cinnamon', 'Ginger', 'Cloves'],
      instructions: "Make strong tea with 8 teabags and 4 cups of boiling water. Add cranberry juice, apple cider, brown sugar, and spices. Stir until the sugar dissolves. Garnish with orange slices. Serve.",
      glass: 'vote'
  },

  {
      name: "Egg Nog - Kahlua",
      ingredients: [ 'Kahlua', 'Eggnog', 'Nutmeg'],
      instructions: "Mix kahlua with eggnog in a wine glass and then sprinkle some nutmeg on top.",
      glass: 'White wine glass'
  },

  {
      name: "Egg Nog - Williamsburg",
      ingredients: [ 'Egg', 'Heavy cream', 'Milk', 'Sugar', 'Nutmeg', 'Rum', 'Brandy', 'Whisky'],
      instructions: "Separate the eggs (yolk and white) Set the white aside. Mix yolks well, gradually adding the cream, milk, and sugar. Get back to the egg white - WHIP IT (whip it good!) until 'soft peaks' form. Fold the white into the rest. Gradually add the alcohol. Either add nutmeg right away, or sprinkle on top later. AGE for at least 2 hours in refridgerator, uncovered.",
      glass: 'vote'
  },

  {
      name: "Egg Nog - Cooked",
      ingredients: [ 'Sugar', 'Water', 'Lemon juice', 'Egg', 'Milk', 'Vanilla extract', 'Nutmeg', 'Salt', 'Heavy cream', 'Hazelnut liqueur', 'Sugar'],
      instructions: "Here's an egg nog recipe using cooked eggs, so no one has to be paranoid about salmonella. Mix granulated sugar, 2 Tbl. of water, and lemon juice in a med. sized sauce pan. Let boil, cook 5 min, until it turns dark amber. Remove from heat, and slowly stir in remaining 1/4 c. of water. Beat eggs and milk together in a bowl. Stir into sugar mixture, cook over med.-low heat for about 10 to 12 minutes. (It should thicken enough to stick to spoon) Poor into a clean bowl (punch bowl or something), stir in vanilla, nutmeg and salt. Refigerate, covered, until cold. Before serving, beat together cream, liquer, adn 10x sugar, until soft peaks form. Pour chilled eggnog into a serving bowl, fold in whipped cream with a whisk.",
      glass: 'vote'
  },

  {
      name: "Egg Nog - Katie's",
      ingredients: [ 'Egg', 'Powdered sugar', 'Rye whiskey', 'Rum', 'Peach liqueur', 'Milk', 'Half-and-half', 'Heavy cream'],
      instructions: "Beat egg yolks until thick and lemon yellow, then beat in 1 cup sugar. Add slowly the rye, rum and peach liquer. Beat until smooth. Add the milk and half-and-half. Beat the egg whites until stiff but not dry, gradually adding 1/2 cup of confectioners sugar. Fold the egg whites into the batter. Just before serving, whip the cream and fold it into the other ingredients. Garnish with ground nutmeg. Serve in a punch bowl or another big bowl.",
      glass: 'Punch bowl'
  },

  {
      name: "Egg Nog Ice-Cream",
      ingredients: [ 'Eggnog', 'Ice-cream', 'Dark rum', 'Brandy', 'Nutmeg'],
      instructions: "Allow ice-cream to soften. Mix all of the ingredients together and refrigerate. Serve with ground nutmeg sprinkled on top. Serve in a punch bowl or another big bowl",
      glass: 'Punch bowl'
  },

  {
      name: "Egg Nog #1",
      ingredients: [ 'Egg', 'Sugar', 'Bourbon', 'Cognac', 'Salt', 'Heavy cream', 'Nutmeg'],
      instructions: "Beat yolks until light in color. Slowly add bourbon, cognac, while beating at slow speed. Chill 3 hrs. Add salt to whites, beat to peaks. Whip s cream until stiff. Fold whipped cream into yolk mixture, then fold in the beaten egg whites. Chill one hour. Serve with nutmeg sprinkled on top. For thinner mixture add 1 or 2 cups of milk. Serve in a punch bowl or another big bowl.",
      glass: 'Punch bowl'
  },

  {
      name: "Egg Nog #2",
      ingredients: [ 'Egg', 'Sugar', 'Heavy cream', 'Milk', 'Bourbon', 'Rum'],
      instructions: "Separate 6 eggs. Beat yolks well. Beat in 1/2 cup sugar. Clean/degrease beaters and bowl. Beat egg whites until stiff peaks form. Beat in 1/2 cup sugar. Fold in yolks to whites. Gently stir in 1 pt heavy cream, 1 pt milk, 1 pt bourbon, and 1 oz rum. Serve as is or well chilled. Double recipe to fill a punch bowl.",
      glass: 'Punch bowl'
  },

  {
      name: "Egg Nog #3",
      ingredients: [ 'Egg', 'Powdered sugar', 'Dark rum', 'Whipping cream', 'Brandy', 'Nutmeg'],
      instructions: "Separate eggs and refrigerate the whites. Beat ylks until light in color. Gradually beat in sugar, then slowly beat in 1 cup of rum. Let stand covered for atleast 1 hr. Add rest of liquor, cream, and peack brandy, beating constantly. Refrigerate, covered, for 3 hours. Beat egg whites until stiff, fold in. Serve sprinkled with nutmeg. Serve in a punch bowl or another medium sized bowl.",
      glass: 'Punch bowl'
  },

  {
      name: "Egg Nog #4",
      ingredients: [ 'Egg yolk', 'Sugar', 'Milk', 'Light rum', 'Bourbon', 'Vanilla extract', 'Salt', 'Whipping cream', 'Egg white', 'Sugar', 'Nutmeg'],
      instructions: "In a small mixer bowl beat egg yolks till blended. Gradually add 1/4 cup sugar, beating at high speed till thick and lemon colored. Stir in milk, stir in rum, bourbon, vanilla, and salt. Chill thoroughly. Whip cream. Wash beaters well. In a large mixer bowl beat egg whites till soft peaks form. Gradually add remaining 1/4 cup sugar, beating to stiff peaks. Fold yolk mixture and whipped cream into egg whites. Serve immediately. Sprinkle nutmeg over each serving. Serve in a punch bowl or another big bowl. NOTE: For a nonalcoholic eggnog, prepare Eggnog as above, except omit the bourbon and rum and increase the milk to 3 cups.",
      glass: 'Punch bowl'
  },

  {
      name: "Egg Nog #5",
      ingredients: [ 'Egg', 'Sugar', 'Bourbon', 'Cognac', 'Salt', 'Heavy cream', 'Nutmeg'],
      instructions: "In an electric mixer, beat the egg yolks with the sugar until thick and lemon colored. Slowly add the bourbon and cognac, while beating at a slow speed. Chill several hours. Add the salt to the egg whites and beat until almost stiff, or until the beaten whites form a peak that bends slightly. Whip the cream until stiff. Fold the whipped cream intothe yolk mixture, then fold in the beaten egg whites. Chill one hour. When ready to serve, sprinkle the top with freshly grated nutmeg. Serve in punch bowl. If desired, add one or two cups of milk to the yolk mixture for a thinner eggnog.",
      glass: 'Punch bowl'
  },

  {
      name: "Egg-Nog - Classic Cooked",
      ingredients: [ 'Egg', 'Sugar', 'Salt', 'Milk', 'Vanilla extract'],
      instructions: "In large saucepan, beat together eggs, sugar and salt, if desired. Stir in 2 cups of the milk. Cook over low heat, stirring constantly, until mixture is thick enough to coat a metal spoon and reaches 160 degrees F. Remove from heat. Stir in remaining 2 cups milk and vanilla. Cover and regfigerate until thoroughly chilled, several hours or overnight. Just before serving, pour into bowl or pitcher. Garnish or add stir-ins, if desired. Choose 1 or several of: Chocolate curls, cinnamon sticks, extracts of flavorings, flavored brandy or liqueur, fruit juice or nectar, ground nutmeg, maraschino cherries, orange slices, peppermint sticks or candy canes, plain brandy, run or whiskey, sherbet or ice-cream, whipping cream, whipped. Serve immediately.",
      glass: 'Pitcher'
  },

  {
      name: "Egg Nog - Healthy",
      ingredients: [ 'Egg', 'Sugar', 'Condensed milk', 'Milk', 'Vanilla extract', 'Rum', 'Nutmeg'],
      instructions: "Whip egg substitute and sugar together, combine with the two kinds of milk, vanilla, and rum. Mix well. Chill over night. Sprinkle with nutmeg. Makes 6 servings.",
      glass: 'vote'
  },

  {
      name: "Eggnog - Spiked",
      ingredients: [ 'Egg', 'Sugar', 'Bourbon', 'Cognac', 'Salt', 'Heavy cream', 'Nutmeg'],
      instructions: "Separate the eggs. In an electric mixer, beat the egg yolks with the sugar until thick and lemon colored. Slowly add the bourbon and cognac, while beating at slow speed. Chill several hours. Add the salt to the egg whites and beat until almost stiff, or until the beaten whites form a peak that bends slightly. Whip the cream until stiff. Fold the whipped cream into the yolk mixture, then fold in the beaten egg whites. Chill one hour. When ready to serve, sprinkle the top with freshly grated nutmeg.",
      glass: 'vote'
  },

  {
      name: "Eggnog - 'Kentucky-style'",
      ingredients: [ 'Heavy cream', 'Egg', 'Sugar', 'Bourbon'],
      instructions: "Separate eggs. Beat yolks, add sugar. Add bourbon slowly while beating. Beat egg whites until stiff. Fold whites into egg yolk mixture, then fold whipped cream into mixture. Refrigerate for more than 4 days. Stir frequently to avoid separation. Color will change to a pale Serve with nutmeg or cinnamon.",
      glass: 'vote'
  },

  {
      name: "Fruit and Sherbet Punch",
      ingredients: [ 'Carbonated soft drink', 'Fruit juice', 'Sherbet'],
      instructions: "Just mix all the liquids together, and float the sherbert in the punch just before serving.",
      glass: 'vote'
  },

  {
      name: "Fruit Punch",
      ingredients: [ 'Kool-Aid', 'Soda water', 'Lemonade', 'Pineapple juice', 'Sugar'],
      instructions: "Make up the kool-aid ahead of time, by dissolving in a small amount on water (as little as possible). Don't add sugar! Cool this mixture. With everything cold, mix it all together, just before the party. You can add sherbert to keep it cold, or make ice cubes, or an ice cube ring, using the kool-aid mixture. You probably won't need to add any sure to this, as the soda, lemondade, and pineapple juice should contain plenty.",
      glass: 'vote'
  },

  {
      name: "Ginger Syllabub",
      ingredients: [ 'Sherry', 'Brown sugar', 'Nutmeg', 'Ginger', 'Lemon', 'Whipping cream', 'Ginger'],
      instructions: "Put the sherry, sugar, spices, and lemon juice into a large mixing bowl. Stir until well-blended, then leave to soak for at least half an hour. Beat the cream until it is stiff. Fold in the chopped ginger. Chill thoroughly. Before serving divide into four serving bowls and top with crumbs of crystallized ginger and a shake of nutmeg.",
      glass: 'vote'
  },

  {
      name: "Glogg Extract",
      ingredients: [ 'Cloves', 'Cinnamon', 'Cardamom', 'Lemon peel', 'Aquavit'],
      instructions: "Of course in Norway most people just buy an extract. Anyway, this makes a pretty nice Glogg: Add cloves, cardamon pods, cinnamon, and citrus peel to a glass with a generous measure of snaps (akvavit) or vodka. Let sit for a day or so. This makes a cery nice extract that can be added to any decent red wine. Just heat up the wine slowly (dont let it boil!!), and add sugar and extract to taste.",
      glass: 'vote'
  },

  {
      name: "Glogg in the Microwave",
      ingredients: [ 'Red wine', 'Cinnamon', 'Cloves', 'Sugar', 'Lemon'],
      instructions: "Mix all ingredients, except for the lemonslices, in a coffee mug. Heat it (using a lid) on full power for 5-6 minutes or, if you are using a temperature meter, 75'C. Stir, until the sugar is dissolved. Serve in a small cup, with a slice of lemon for decoration.",
      glass: 'Coffee mug'
  },

  {
      name: "Glogg #1",
      ingredients: [ 'Red wine', 'Vodka', 'Cardamom', 'Cloves', 'Cinnamon', 'Orange peel', 'Almond', 'Raisins', 'Figs', 'Sugar'],
      instructions: "Pour the wine & vodka into a large pot. Add spices, fruit and nuts. Turn on the heat and bring the ingredients to a temperature just below the boil. Now for the fun part. Invite all of your guests into the kitchen. Place the sugar cubes in a sieve (one that you don't mind sacrificing to the greater good). Don oven mitts and set the glogg on fire. Ladle the burning glogg over the sugar cubes until it has all melted. I usually do this with the overhead lights off for greater theatrics. When the sugar is melted, cover the pot to extinguish the flame. Ladle glogg, fruit and nuts into irish coffe cups and serve.",
      glass: 'vote'
  },

  {
      name: "Glogg #2",
      ingredients: [ 'Raisins', 'Sugar', 'Almond', 'Cloves', 'Cardamom', 'Cinnamon', 'Orange peel', 'Water', 'Red wine', 'Tawny port', 'Brandy'],
      instructions: "Combine all the non-alcoholic ingredients in a heavy enamel or stainless steel saucepan, bring to a boil and simmer 5 minutes. Add the red wine and the port and bring to a boil again. Remove from heat and let steep, covered, for at least 2 hours. Then bring back to a simmer, add the brandy, and heat for 1 minute. If you want to be fancy you can put it into a warmed metal bowl, turn down the lights and ignite it before serving. Serve in irish coffee cup.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Glogg - Christmas",
      ingredients: [ 'White wine', 'Vodka', 'Sherry', 'Cinnamon', 'Cardamom', 'Clove', 'Orange peel', 'Sugar'],
      instructions: "Stir half a bottle of the wine with the spicesand sugar under heating, close to boiling. Remove casserolee from heat. Set aside for 24 hours. Strain off spices, and add remaining wine, vodka, and sherry. Add appx. 10 dashed aromatic tincture (this is a spice concentrate). Bottle your glogg, seal well, and let mature for a week. Mix with red wine or water, heat and serve in irish coffee cup.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Glogg - Grandfather's",
      ingredients: [ 'Red wine', 'Madeira', 'Cloves', 'Cinnamon', 'Sugar', 'Raisins', 'Almond'],
      instructions: "Mix wine and spices, and heat it under cover some minutes on low heat - DO NOT BOIL. Add sugar, lemon peel and stir. Keep on heat and covered for a few more minutes. Serve with raisins and almonds. (You have to throw the almonds in boiling water for maybe a minute, and peel of the brown 'coating'. They should be white for use with glogg.) Serve in irish coffee cup.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Glogg - Grandmother's",
      ingredients: [ 'Red wine', 'Sweet Vermouth', 'Cloves', 'Cardamom', 'Cinnamon', 'Orange peel'],
      instructions: "Mix everything in a casserole. Keep overnight. Heat the mixture - do NOT boil. Strain and serve hot woth raisins and almonds. (You have to throw the almonds in boiling water for maybe a minute, and peel of the brown 'coating'. They should be white for use with glogg.) Serve in irish coffee cup.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Glogg - Swedish",
      ingredients: [ 'Almond', 'Cardamom', 'Cloves', 'Cinnamon', 'Orange', 'Red wine', 'Raisins', 'Brandy', 'Sugar'],
      instructions: "Put cardamon seeds, cinnamon, cloves and orange parts in nylon bag and tie top. In large saucepan put bag, half bottle of the wine, and the raisins. Cover and simmer for 15 minutes. Add remaining wine and the almond, heat through. In another saucepan warm about 1/3 of the brandy (or aquavit), pour in sugar and light with match to flame. When sugar has melted, pour in the remainder of brandy. If necessary extinguish flame with cover lid. Add sugar mixture to wine mixture. Pour in cups with raisins and almonds in each serving. Serve in irish coffee cup. A hot cup of glogg is the Scandinavian way of offering a warm welcome to a friend on a wintery evening.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Gluehwein",
      ingredients: [ 'Red wine', 'Water', 'Sugar', 'Cinnamon', 'Cloves', 'Lemon peel'],
      instructions: "Boil sugar and spices in water, leave in the water for 30 minutes. Strain the spiced water and mix with the wine. Heat slowly until short of boiling temperature. (To remove alcohol, let it boil for a while.) You may add lemon or orange juice to taste. Serve in irish coffee cup.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Gogl-Mogl",
      ingredients: [ 'Egg', 'Whiskey', 'Honey', 'Milk'],
      instructions: "This is essentially a hot eggnog. You beat an egg, add a tablespoon of honey and a jigger of whisky. Pour this into a irish coffe cup and then fill the glass with warm milk and stir until it's well mixed.",
      glass: 'vote'
  },

  {
      name: "Golden Glow Punch",
      ingredients: [ 'Orange juice', 'Lemonade', 'Apple juice', 'Ginger ale', 'Sherbet', 'Ice'],
      instructions: "Pour the concentrate and the apple juice into the punch bowl. Stir the ginger ale into the bowl. Spoon in sherbet or add an Ice Ring. Serve immediately.",
      glass: 'Punch bowl'
  },

  {
      name: "Holiday Cheer",
      ingredients: [ 'Champagne', 'Cranberry juice', 'Lime'],
      instructions: "Mix champagne and frozen cranberry juice (undeluted). Slice lime and garnish each wine glass. Serve with breakfast to start the day right. Note: Mix right before serving to retain the bubbles. Yo may use non-alcoholic champagne.",
      glass: 'White wine glass'
  },

  {
      name: "Holloween Punch",
      ingredients: [ 'Grape juice', 'Carbonated soft drink', 'Sherbet', 'Sherbet'],
      instructions: "Take a bunch of grape juice and a bunch of fizzy stuff (club soda, ginger ale, lemonlime, whatever). Mix them in a punch bowl. Take orange sherbet and lime sherbet. Scoop out scoops and float them in the punch, let them melt a little so that a nasty film spreads all over the top of the punch but there are still 'bubbles' in it in the form of sherbet scoops. Looks horrible, tastes just fine.",
      glass: 'Punch bowl'
  },

  {
      name: "Hop Skip and Go Naked Punch",
      ingredients: [ 'Beer', 'Vodka', 'Daiquiri mix', 'Ice'],
      instructions: "Take a Cooler and throw a bag of ice in it. Add beer, white liquor and frozen Lemon-Lime Daqueri mix. Stir until Daqueri mix has liquified. Enjoy.",
      glass: 'vote'
  },

  {
      name: "Hot Buttered Cranberry Punch",
      ingredients: [ 'Cranberry juice', 'Brown sugar', 'Cinnamon', 'Allspice', 'Cloves', 'Nutmeg', 'Salt', 'Water', 'Pineapple juice', 'Butter'],
      instructions: "Crush cranberry sauce with a fork. Mix with sugar, spices and salt. Add water and pineapple juice. Cover and simmer 2 hours. Ladle into mugs and float a pat of butter in each serving.",
      glass: 'vote'
  },

  {
      name: "Hot Devilish Daiquiri",
      ingredients: [ 'Water', 'Sugar', 'Cinnamon', 'Cloves', 'Lemonade', 'Limeade', 'Light rum'],
      instructions: "In 2 qt. microproof casserole, combine hot water, sugar, spices, and concentrated juices. Stir, then cook on HI 5-6 minutes or until mixture boils. Heat rum in microproof container on HI for 30 seconds. Ignite and pour over hot beverage. Ladle into punch cups for serving.",
      glass: 'vote'
  },

  {
      name: "Hot Mulled Cider #2",
      ingredients: [ 'Apple cider', 'Brown sugar', 'Nutmeg', 'Cinnamon', 'Allspice', 'Cloves', 'Orange', 'Cloves'],
      instructions: "In a large saucepan combine apple cider/juice, brown sugar, and nutmeg. for spice bag, place cinnamon, allspice, and the 1 teaspoon cloves in cheesecloth and tie, add to cider mixture. Bring to boiling. Reduce heat, cover and simmer 10 minutes. Remove spice bag and discard. Serve cider in mugs with a clove-studded orange wedge in each.",
      glass: 'vote'
  },

  {
      name: "Hot Spiced Cider #2",
      ingredients: [ 'Apple cider', 'Sugar', 'Cloves', 'Allspice', 'Cinnamon'],
      instructions: "Combine the cider, sugar and spices in a large saucepan. Heat slowly to boiling. Boil 3-5 minutes. remove spices. Serve hot garnished with orange slices, lemon slices, or rings of unpared red apple with whole cloves forced through peel. 16 servings. If desired, chill spiced cider and serve over ice cubes made from apple juice.",
      glass: 'vote'
  },

  {
      name: "Hot-Buttered Rum",
      ingredients: [ 'Sugar', 'Butter', 'Rum', 'Cloves'],
      instructions: "In a mug put sugar, butter, rum and cloves. Fill with boiling water. Stir.",
      glass: 'vote'
  },

  {
      name: "Jamaica Me Crazy",
      ingredients: [ 'Rum', 'Tia maria', 'Pineapple juice', 'Ice'],
      instructions: "Fill a tall glass with ice. Pour in rum and tia maria. Add pineapple juice.",
      glass: 'Highball glass'
  },

  {
      name: "Lady's Punsch",
      ingredients: [ 'Red wine', 'Blue Curacao', 'Water', 'Orange'],
      instructions: "Pour red wine and blue curacao in a punsch glass and fill up with boiling water. Garnish with orange slice.",
      glass: 'vote'
  },

  {
      name: "Lemon Sherbert Punch",
      ingredients: [ 'Ginger ale', 'Pink lemonade', 'Sherbet', 'Fruit', 'Water'],
      instructions: "Mix Lemonade in very large punch bowl. Add soda and frozen fruit. Open sherbet and dump the entire package of it into punch (it will float on the top). Due to the frozen fruit and Sherbet, there is really no need for ice until later, or unless it it very hot.",
      glass: 'Punch bowl'
  },

  {
      name: "Light Sangria with Pineapple",
      ingredients: [ 'Apple juice', 'Sugar', 'Lemon juice', 'White wine', 'Pineapple', 'Apple', 'Ginger ale', 'Ice'],
      instructions: "In a pitcher, dissolve the sugar in the apple juice. Add lemon juice, wine, pineapple and apple in chunks. Mix. Add ginger ale and ice right before serving.",
      glass: 'Red wine glass'
  },

  {
      name: "Mock Pink Champagne #1",
      ingredients: [ 'Sugar', 'Water', 'Orange juice', 'Cranberry juice', 'Pineapple juice', 'Lemon-lime soda'],
      instructions: "Boil sugar and water until sugar dissolves, cool. Stir cranberry, pineapple, orange juices. Chill. Just before serving, add carbonated beverage.",
      glass: 'vote'
  },

  {
      name: "Mock Pink Champagne #2",
      ingredients: [ 'Ginger ale', 'Hawaiian Punch', 'Lemon juice', 'Sugar', 'Pineapple juice', 'Ice'],
      instructions: "Combine all but ginger ale and ice. Chill. Add ginger ale and ice before serving.",
      glass: 'vote'
  },

  {
      name: "Monarchy Luau Punch",
      ingredients: [ 'Pineapple', 'Brandy', 'Sugar', 'Pineapple juice', 'White wine', 'Champagne'],
      instructions: "Remove rind and core form pineapple, coarsely chop fruit. Combine pineapple, brandy and sugar, marinate 6 hours or overnight. Pour pineapple juice into a ring mold and freeze. Add wine to pineapple-brandy mixture, refrigerate 30 minutes. Add pineapple juice ring and champagne just before serving.",
      glass: 'vote'
  },

  {
      name: "Monster Slime Juice",
      ingredients: [ 'Kool-Aid', 'Orange juice', 'Water'],
      instructions: "Mix juice and Kool-Aid, add 1 gallon water, stir and watch it turn green!",
      glass: 'vote'
  },

  {
      name: "Mulled Wine",
      ingredients: [ 'Water', 'Sugar', 'Cloves', 'Cinnamon', 'Lemon peel', 'Red wine', 'Brandy'],
      instructions: "Simmer 3 cups water with, sugar, cloves, cinnamon sticks, and lemon peel in a stainless steel pot for 10 minutes. Add wine heat to a 'coffee temperature' (DO NOT BOIL) then add the brandy.",
      glass: 'vote'
  },

  {
      name: "Null & Void Punch",
      ingredients: [ 'Vodka', 'Wildberry schnapps', 'Peach schnapps', 'Southern Comfort', 'Hawaiian Punch'],
      instructions: "Mix with ice in a Tupperware dish pan. Serve in 16 oz glasses (with caution). Tastes great, but can lead to wastedness if comsumed too quickly, hence the name NULL & VOID punch.",
      glass: 'vote'
  },

  {
      name: "Old Fashioned Hot Buttered Rum",
      ingredients: [ 'Sugar', 'Brown sugar', 'Butter', 'Vanilla ice-cream', 'Rum', 'Water', 'Nutmeg'],
      instructions: "In 2-quart suacepan combine sugar, brown sugar and butter. Cook over low hear, stirring occasionally, until butter is melted (6-8 min). In large mixing bowl, combine cooked mixture with ice-cream, beat at medium speed, scraping bowl often until smooth (1-2 min). Store refrigerated up to 2 weeks or frozen up to one month. For each serving, fill mug with 1/4 cup mixture, 1 oz. rum and 3/4 cup boiling water, sprinkle with nutmeg.",
      glass: 'vote'
  },

  {
      name: "Party Punch",
      ingredients: [ 'Pineapple juice', 'Ginger ale', 'Sherbet'],
      instructions: "Combine all ingredients in a punch bowl.",
      glass: 'Punch bowl'
  },

  {
      name: "Party Slush Punch #1",
      ingredients: [ 'Pineapple juice', 'Vodka', 'Hawaiian Punch', 'Ginger ale'],
      instructions: "Mix ingredients together, freeze to slush consistency and serve 'Slushy'.",
      glass: 'vote'
  },

  {
      name: "Party Slush Punch #2",
      ingredients: [ 'Whiskey', 'Lemonade', 'Pineapple juice', 'Orange juice', 'Ginger ale'],
      instructions: "Put the ingredients into a container in the freezer (stir occasionally while freezing). To serve: put 2/3 slush to 1/3 7-up in each glass or same ratio in punch bowl.",
      glass: 'Punch bowl'
  },

  {
      name: "Party Slush Punch #3",
      ingredients: [ 'Strawberries', 'Water', 'Orange juice', 'Tea', 'Lemonade', 'Sugar', 'Light rum'],
      instructions: "Mix the following ingredients together and freeze. When slushy, drink as is or mix with 7-UP.",
      glass: 'vote'
  },

  {
      name: "Pineapple Punch",
      ingredients: [ 'Red wine', 'Tea', 'Pineapple juice', 'Rum', 'Lemon', 'Sugar', 'Pineapple', 'Sherry'],
      instructions: "Put the pineapple pieces in a punch bowl and pour the sherry over them. Chill for 2 hours. Put tea and sugar in a pot, add red wine, lemon juice and rum. Heat but do not boil the mixture. Pour over the pineapple pieces.",
      glass: 'Punch bowl'
  },

  {
      name: "Ponche de Pina",
      ingredients: [ 'Pineapple', 'Water', 'Cinnamon', 'Cloves', 'Allspice', 'Sugar', 'Coconut milk', 'Light rum'],
      instructions: "Peel pineapples, chop or shread. Add water and let stand overnight. Put in large saucepan with spices, sugar, and coconut milk. Boil for 5 minutes. Strain liquid into large pitcher. Add rum and serve hot.",
      glass: 'Pitcher'
  },

  {
      name: "Porch Crawlers",
      ingredients: [ 'Pink lemonade', 'Beer', 'Gin'],
      instructions: "Combine all ingredients in a punch bowl.",
      glass: 'Punch bowl'
  },

  {
      name: "Punch #1",
      ingredients: [ 'Lemonade', 'White grape juice', 'Cranberry juice', 'Soda water'],
      instructions: "Mix first 3 ingredients ahead of time. Add soda water when you are ready to serve it. Serve over ice. You can add more soda water to suit your taste.",
      glass: 'Punch bowl'
  },

  {
      name: "Purple Jesus",
      ingredients: [ 'Ginger ale', 'Grape juice', 'Vodka', 'Grain alcohol'],
      instructions: "Combine all ingredients in a punch bowl.",
      glass: 'Punch bowl'
  },

  {
      name: "Punch #2",
      ingredients: [ 'Water', 'Water', 'Lemon juice', 'Strawberries', 'Ginger ale', 'Sugar', 'Orange juice', 'Pineapple juice', 'Lemon', 'Orange'],
      instructions: "Stir the 1 1/4 cups water and sugar over medium heat until sugar is dissolved.Bring to boil and boil for 5 mins. Cool pour into screw top jar and chill over night . Just before serving pour into a punch bowl all except ginger ale Now pour ginger ale now put in the fruit.",
      glass: 'Punch bowl'
  },

  {
      name: "Raspberry Sherbet Punch",
      ingredients: [ 'Sherbet', 'Ginger ale', 'Pineapple juice'],
      instructions: "Combine all together and serve.",
      glass: 'vote'
  },

  {
      name: "Sangria #1",
      ingredients: [ 'Red wine', 'Sugar', 'Orange juice', 'Lemon juice', 'Cloves', 'Cinnamon'],
      instructions: "Mix all together in a pitcher and refrigerate. Add cloves and cinnamon sticks to taste. Serve in wine glasses.",
      glass: 'Pitcher'
  },

  {
      name: "Sangria #2",
      ingredients: [ 'Sugar', 'Orange', 'Orange juice', 'Apple', 'Red wine', 'Cognac', 'Mandarin', 'Soda water', 'Ice'],
      instructions: "Peel the apples and cut into small cubes. Peel the oranges, take out the pips, and cut into small cubes. Warm the orange juice, the sugar and the mandarin peels until the sugar dissolves. Mix all the ingredients in a pitcher, except the ice and the soda which you add just before serving. Serve in wine glsses.",
      glass: 'Pitcher'
  },

  {
      name: "Sangria - The World's Best",
      ingredients: [ 'Red wine', 'Sugar', 'Lemon', 'Orange', 'Apple', 'Brandy', 'Soda water'],
      instructions: "Mix wine, sugar and fruit, and let sit in the fridge for 18-24 hours. The mixture will have a somewhat syrupy consistency. Before serving stir in brandy and cut the mixture with soda water until it have a thinner, more wine like consistency. Serve from a pitcher in wine glasses.",
      glass: 'Pitcher'
  },

  {
      name: "Sweet Sangria",
      ingredients: [ 'Red wine', 'Sugar', 'Water', 'Apple', 'Orange', 'Lime', 'Lemon', 'Fresca'],
      instructions: "Dissolve the sugar in hot water and cool. Peel the citrus fruits and break into wedges. Mix the wine, sugar syrup, fruit, and Fresca in a pitcher and put in the fridge for a few hours. Serve in tall glasses with a straw.",
      glass: 'Pitcher'
  },

  {
      name: "Sauterne",
      ingredients: [ 'Champagne', 'White wine', 'Cognac', 'Curacao'],
      instructions: "Mix the cognac and curacao several hours ahead of time. When ready to serve, pour the necessary amount of this mixture over a block of ice or ice mold in a *cold* punch bowl, and add *thoroughly chilled* champagne. Stir and serve at once, WITHOUT LADLING BACK AND FORTH OVER THE ICE, as this will eliminate the bubbles.",
      glass: 'Punch bowl'
  },

  {
      name: "Sima",
      ingredients: [ 'Water', 'Sugar', 'Brown sugar', 'Beer', 'Lemon', 'Yeast', 'Raisins', 'Sugar'],
      instructions: "Boil water, sugars, beer and the yellow part of the lemon's peel. Let the mixture cool down. Peel the white part of the lemon's peel carefully and cut the fruit part of the lemon in small pieces and add to sima. Disolve the yeast in a bit of sima and add to sima. Put 5-6 raisins and 1 tablespoon sugar in every bottle. Put sima in bottles and close the bottles carefully. Leave sima in a cold place for a couple of days. Sima is ready when the raisins float. Sima will keep in cold place for 1-2 weeks.",
      glass: 'vote'
  },

  {
      name: "Spiced Peach Punch",
      ingredients: [ 'Peach nectar', 'Orange juice', 'Brown sugar', 'Cinnamon', 'Cloves', 'Lime juice'],
      instructions: "Combine peach nectar, orange juice and brown sugar in a large saucepan. Tie cinnamon and cloves in a small cheesecloth bag. Drop into saucepan. Heat slowly, stirring constantly, until sugar dissolves. Simmer 10 minutes. Stir in lime juice. Serve in hot mugs.",
      glass: 'vote'
  },

  {
      name: "Strawberry Bolle",
      ingredients: [ 'Apple cider', 'Champagne', 'Strawberries', 'Sugar'],
      instructions: "Sprinkle strawbs with sugar, add one bottle cider. Chill for several hours. To serve, pour into large bowl with ice, add the rest of the wine. Serve in small wine glasses.",
      glass: 'White wine glass'
  },

  {
      name: "Strawberry Lemonade",
      ingredients: [ 'Lemon', 'Sugar', 'Strawberries', 'Water'],
      instructions: "Throw everything into a blender and mix until fairly smooth. Serve over ice.",
      glass: 'vote'
  },

  {
      name: "Strawberry Punch #1",
      ingredients: [ 'Strawberries', 'Lemonade', 'Sherbet', 'Ginger ale'],
      instructions: "Allow strawberries to thaw for a couple of hours in fridge. Prepare lemonade and chill. Combine all just before serving and mix until sherbet is dissolved. Place ice ring in to keep punch cold.",
      glass: 'vote'
  },

  {
      name: "Strawberry Punch #2",
      ingredients: [ 'Sherbet', '7-Up'],
      instructions: "Put the sherbet in a bowl and pour the 7-up over the sherbet. Stir until the sherbet is melted. This makes a pretty pink punch. You can use diet soda for a punch that is less sweet.",
      glass: 'vote'
  },

  {
      name: "Sunny Holiday Punch",
      ingredients: [ 'Pineapple juice', 'Club soda', 'Orange juice', 'Lemon', 'Berries', 'Champagne'],
      instructions: "Combine all ingredients in a punch bowl.",
      glass: 'Punch bowl'
  },

  {
      name: "Syllabub",
      ingredients: [ 'White wine', 'Milk', 'Lemon peel', 'Light cream', 'Lemon juice', 'Egg', 'Sugar', 'Nutmeg'],
      instructions: "Combine wine, lemon rind, and juice. Stir in 1 cup of the sugar and let stand until sugar dissolves. Combine milk and cream, add wine mixture, and beat with a rotary beater until frothy. Beat egg whites until stiff, add remaining 1/2 cup sugar, a little at a time, beating constantly until whites stand in peaks. Pour wine mixture into punch bowl, top with puffs of egg white, and sprinkle whites with nutmeg.",
      glass: 'Punch bowl'
  },

  {
      name: "Tea Punch",
      ingredients: [ 'Tea', 'Apple juice', 'Pineapple juice'],
      instructions: "Combine and serve with ice.",
      glass: 'vote'
  },

  {
      name: "Tom and Jerry Punch",
      ingredients: [ 'Egg', 'Powdered sugar', 'Allspice', 'Cinnamon', 'Cloves', 'Brandy', 'Dark rum', 'Coffee', 'Nutmeg'],
      instructions: "Beat egg whites to a stiff froth. Separately beat egg yolks until light in color, gradually add the powdered sugar and spices. Fold yolk mixture into whites. Divide mixture between four 8 oz. mugs. Add 1/2 shot brandy and 1 shot rum to each mug, fill with hot beverage. Stir well and top with nutmeg.",
      glass: 'vote'
  },

  {
      name: "Truck Punch",
      ingredients: [ 'Bourbon', 'Apple schnapps', 'Cinnamon schnapps', 'Squirt'],
      instructions: "Give yourself a break, use ice.",
      glass: 'vote'
  },

  {
      name: "Wassail #1",
      ingredients: [ 'Apple juice', 'Orange', 'Lemon', 'Lime', 'Cloves', 'Allspice', 'Cinnamon', 'Water', 'Sugar'],
      instructions: "Heat the water to boiling. Cut the lemons and oranges (and lime if using) in half and squeeze the juice into a separate bowl to save, throw the skins and pulp into the boiling water. Add spices and simmer for one hour. Remove the cinnamon sticks and a few cloves and allspice and save to one side. Using a slotted spoon or strainer remove the citrus peels and pulp and the remaining spices. Return the cinnamon sticks and saved spices to the water. Add the apple juice or cider and return to heat. When boiling remove from heat and add the citrus juice and sugar. Simmer very lightly for another 10 minutes and serve. Delicious!",
      glass: 'vote'
  },

  {
      name: "Wassail #2",
      ingredients: [ 'Apple cider', 'Cinnamon', 'Lemon', 'Orange', 'Cloves', 'Allspice', 'White wine', 'Rum'],
      instructions: "Simmer the nonalcoholic ingredients together for 1-2 hours, then add the wine and rum about 10 minutes before serving (hot).",
      glass: 'vote'
  },

  {
      name: "Wine Cooler",
      ingredients: [ 'Red wine', 'Lemon-lime soda', 'Ice'],
      instructions: "Mix wine and soft drink. Pour into glass. Add ice.",
      glass: 'vote'
  },

  {
      name: "Wine Punch",
      ingredients: [ 'Red wine', 'Lemon', 'Orange juice', 'Orange', 'Pineapple juice'],
      instructions: "Combine all of the ingredients and pour over a block of ice.",
      glass: 'vote'
  },

  {
      name: "Margarita",
      ingredients: [ 'Tequila', 'Triple sec', 'Lime juice', 'Salt'],
      instructions: "Rub rim of cocktail glass with lime juice, dip rim in salt. Shake all ingredients with ice, strain into the salt-rimmed glass, and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "Polarbear #1",
      ingredients: [ 'Vodka', 'Lime juice', '7-Up'],
      instructions: "Take one part vodka into the glass, pour one part lime in the same glass. Then you take two parts of 7-up or sprite. Mix this together with a straw or something like that. Ice is recommended.",
      glass: 'vote'
  },

  {
      name: "Bruce's Puce",
      ingredients: [ 'Grenadine', 'Kahlua', 'Irish Cream'],
      instructions: "In a regular-sized shot glass, layer, with a spoon or cherry, the grenadine , the Kahlua , then the Bailey's Irish cream in equal portions. It goes down really smooth ,and you don't even need a chaser. It tastes just like chocolate milk.(Really!)",
      glass: 'Shot glass'
  },

  {
      name: "Brave Bull Shooter",
      ingredients: [ 'Tequila', 'Tabasco sauce'],
      instructions: "Pour Tabasco into bottom of shot glass and fill with tequila.",
      glass: 'Shot glass'
  },

  {
      name: "Fahrenheit 5000",
      ingredients: [ 'Firewater', 'Absolut Peppar', 'Tabasco sauce'],
      instructions: "Cover bottom of shot glass with Tabasco Sauce and then fill with half Firewater and half Absolut Peppar.",
      glass: 'Shot glass'
  },

  {
      name: "Popped cherry",
      ingredients: [ 'Vodka', 'Cherry liqueur', 'Cranberry juice', 'Orange juice'],
      instructions: "Served over ice in a tall glass with a popped cherry (can add more popped cherries if in the mood)!",
      glass: 'Highball glass'
  },

  {
      name: "Gorilla Snot #1",
      ingredients: [ 'Port', 'Irish Cream'],
      instructions: "Measure the port into a brandy glass, the pour the Bailey's in. As the Bailey's enters the port it will solidify, forming a glob.",
      glass: 'Brandy snifter'
  },

  {
      name: "The Incredible Hulk",
      ingredients: [ 'Spiced rum', 'Sugar', 'Mountain Dew'],
      instructions: "Add 2 oz of Captain Morgan to glass. Add sugar. Add Mountain Dew till mix turns green.",
      glass: 'vote'
  },

  {
      name: "Alabama Riot",
      ingredients: [ 'Southern Comfort', 'Peppermint schnapps', 'Vodka', 'Fruit punch', 'Lime juice'],
      instructions: "Pour fruit punch and ice into a glass, add southern comfort, peppermint schnapps and vodka. Stir. Finish with lime juice.",
      glass: 'vote'
  },

  {
      name: "Reggae Ambassador",
      ingredients: [ 'Absolut Citron', 'Pineapple-orange-banana juice', 'Sugar', 'Strawberries'],
      instructions: "Fill a blender 1/2 full (or 1/2 empty) with ice. Fill 1/4 of the blender with vodka. Fill 1/2 with pine-orange-banana fruit juice. Fill the rest with fresh strawberries, and about 4 tsp. sugar. Blend, serve with an orange slice.",
      glass: 'vote',
  },
  {
      name: "Mind Eraser",
      ingredients: [ 'Vodka', 'Kahlua', 'Tonic water'],
      instructions: "In a rocks glass pour vodka, the Kahlua and then the tonic water. Serve with a straw.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Atomic Lokade",
      ingredients: [ 'Lemonade', 'Vodka', 'Blue Curacao', 'Triple sec', 'Sugar', 'Ice'],
      instructions: "In a shaker, place lemonade, vodka, blue Curacao, and triple sec together. Shake with ice and strain into glass. Add sugar to taste",
      glass: 'vote'
  },

  {
      name: "Pamela",
      ingredients: [ 'Vodka', 'Tonic water', 'Cucumber'],
      instructions: "Simply make a standard vodka and tonic and garnish liberally with sliced cucumbers. sounds funny, but makes a great hot weather drink.",
      glass: 'vote'
  },

  {
      name: "Mexican Mouthwash",
      ingredients: [ 'Gold tequila', 'Rumple Minze'],
      instructions: "Pour into shaker chill, and gently swirl together.",
      glass: 'vote'
  },

  {
      name: "Pecker Head",
      ingredients: [ 'Southern Comfort', 'Amaretto', 'Pineapple'],
      instructions: "In a strainer add all three ingredients. Fill half full of ice. Shake well. Strain into a double shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Colorado Bulldog",
      ingredients: [ 'Vodka', 'Kahlua', 'Milk', 'Coca-Cola'],
      instructions: "In a shaker mix Vodka, Kahlua, and milk. Pour into a rocks glass and add a splash of Coca-Cola",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Carribean pineapple",
      ingredients: [ 'Malibu rum', 'Pineapple juice', 'Cherry'],
      instructions: "Mix in a lowball glass and serve over ice",
      glass: 'vote'
  },

  {
      name: "Bullfrog",
      ingredients: [ 'Vodka', 'Lemonade'],
      instructions: "Shake well (preferably in a closed container). Stir (preferably with a spoon in an opened container)",
      glass: 'vote'
  },

  {
      name: "Cucaracha",
      ingredients: [ 'Tequila', 'Kahlua'],
      instructions: "In a low glass put Tequila first, than Kahlua. Flame the coktail. Two people had to drink in the same glass with two plastic-pipe. The goal is to drink before the plastic-pipe melt down.",
      glass: 'vote'
  },

  {
      name: "Hillinator",
      ingredients: [ 'Spiced rum', 'Firewater', 'Mountain Dew', 'Sugar'],
      instructions: "Mix the Captain Morgan, Mountain Dew, and sugar in one class. Pour the fire water into a shot glass. Take the shot, then follow it with the mixed drink. Make sure to drink the mixed drink quickly",
      glass: 'Shot glass'
  },

  {
      name: "Tequila Mockingbird",
      ingredients: [ 'Tequila', 'Triple sec', 'Blue Curacao', 'Orange juice', 'Cranberry juice'],
      instructions: "Fill tall rocks glass or tumbler with ice. Add tequila and triple sec, followed by O.J. and cranberry. Add blue curacao. DO NOT MIX. Garnish with lemon or cherry if desired.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Green Lantern",
      ingredients: [ 'Midori melon liqueur', 'Orange juice', '7-Up'],
      instructions: "Mix all together in order, shake once and pour into glass.",
      glass: 'vote'
  },

  {
      name: "Irish Coffee #2",
      ingredients: [ 'Coffee', 'Irish Cream', 'Half-and-half', 'Sugar'],
      instructions: "Mix cofee and chilled Irish Cream and half & half. Add sugar and stir. Serve hot in an Irish coffee cup.",
      glass: 'Irish coffee cup'
  },

  {
      name: "B-52 #1",
      ingredients: [ 'Kahlua', 'Amaretto', 'Irish Cream'],
      instructions: "Layer the Kahlua, Amaretto, and Irish Cream into a shot glass in that order. After drinking, notice the Vapor Trails.",
      glass: 'Shot glass'
  },

  {
      name: "Wahoo",
      ingredients: [ '151 proof rum', 'Amaretto'],
      instructions: "Over ice add 151 and amaretto. Top off with pineapple juice.",
      glass: 'vote'
  },

  {
      name: "Chocolate Paradise",
      ingredients: [ 'Peppermint schnapps', 'Chocolate milk'],
      instructions: "Simply pour over ice into a tall glass.",
      glass: 'Highball glass'
  },

  {
      name: "Creamy punani",
      ingredients: [ 'Kahlua', 'Irish Cream', 'Amaretto', 'Vanilla ice-cream'],
      instructions: "Fill blender about 3/4 with ice-cream (not solid). Add 2 oz of amaretto and kahlua and 3 oz of bailey's. Blend. Drink.",
      glass: 'vote'
  },

  {
      name: "The Shearer Special",
      ingredients: [ 'Bacardi Limon', 'Cranberry juice'],
      instructions: "Mix fifth of a gallon of bacardi to a splash of cranberry juice Enjoy!",
      glass: 'vote'
  },

  {
      name: "Amy's Tattoo",
      ingredients: [ 'Dark rum', 'Light rum', 'Pineapple juice', 'Orange juice', 'Grenadine'],
      instructions: "Shake all in tall glass.",
      glass: 'Highball glass'
  },

  {
      name: "Malibu juice",
      ingredients: [ 'Malibu rum', 'Pineapple-orange-banana juice'],
      instructions: "Put 3 shots of the rum in a glass, fill the rest of the cup with the juice.",
      glass: 'vote'
  },

  {
      name: "Bailey's Banana Colada (bbc)",
      ingredients: [ 'Irish Cream', 'Banana', 'Banana liqueur', 'Ice', 'Pina colada mix', 'Dark rum'],
      instructions: "Put banana and liquer into blender until it is a thick paste then add bailey's to taste and pina colada mix and rum. Blend well then add ice blend untill smooth and enjoy!",
      glass: 'vote'
  },

  {
      name: "Russian Roulette",
      ingredients: [ 'Kahlua', 'Vodka', 'Sambuca', 'Orange'],
      instructions: "Fill two or more shooter 1 oz. shooter glasses with the kahlua and vodka and place a slice of orange on the top of each glass. Put the Sambuca in a wine glass and light. Pour the lit Sambuca on the shooters below and let burn for a short time in front of your bedazzled guests. Blow out the fire and instruct the drinkers of the shooters to drink out of the glass first and chew the Sambuca-soaked orange slice last.",
      glass: 'White wine glass'
  },

  {
      name: "Diesel",
      ingredients: [ 'Lager', 'Cider', 'Blackcurrant cordial'],
      instructions: "Pour the lager first then add the blackcurrant cordial. Top up with the cider. The colour sholud be very dark approaching the colour of Guiness.",
      glass: 'Pint glass'
  },

  {
      name: "Reptile",
      ingredients: [ 'Whiskey', 'Mountain Dew', 'Orange juice'],
      instructions: "Make sure all ingredients are chilled. Add in order: ET, OJ, Dew. Stir lightly. Like most OJ drinks, the alcohol is hard to taste. A padded bar is recomended.",
      glass: 'vote'
  },

  {
      name: "Dogg piss",
      ingredients: [ 'Vodka', 'Beer', 'Southern Comfort'],
      instructions: "Dump the ingredients into a container and stir it. It's very simple and very delicious.",
      glass: 'vote'
  },

  {
      name: "Harsh",
      ingredients: [ 'Tequila', 'Jägermeister'],
      instructions: "Mix ingrediants and serve",
      glass: 'vote'
  },

  {
      name: "Yo mama cocktail",
      ingredients: [ 'Orange vodka', 'Soda water', 'Orange juice'],
      instructions: "Pour Vodka in highball over ice, add soda, top of with splash of OJ (just a splash)",
      glass: 'vote'
  },

  {
      name: "La Mamila",
      ingredients: [ 'Tequila', 'Beer', 'Lemon', 'Clamato juice', 'Tabasco sauce', 'Salt'],
      instructions: "First empty the beers then mix the lemons, tabasco and the salt then empty the tequila and then the clamato, swirl everytihng. This drinking by four people is a baby boom Try it if you are not a baby.",
      glass: 'vote'
  },

  {
      name: "Fruit Tingle",
      ingredients: [ 'Blue Curacao', 'Raspberry cordial', 'Lemonade', 'Ice'],
      instructions: "Pour Curacao over ice in a tumbler. Add Raspberry cordial and Lemonade at the same time so that the combined effect mixes the drink. Consume!!! The drink is meant to taste like the lollies called Fruit Tingles, and it succeeds very well in this..",
      glass: 'vote'
  },

  {
      name: "Blue iguana",
      ingredients: [ 'Ice', 'Tang', 'Vodka'],
      instructions: "Bend smooth. Serve in a frozen mug.",
      glass: 'vote'
  },

  {
      name: "Red Death #2",
      ingredients: [ 'Absolut Vodka', 'Southern Comfort', 'Amaretto', 'Sloe gin', 'Triple sec', 'Orange juice'],
      instructions: "Pour all the ingedients in mixing glass with ice. Shake and strain into shot glass(es).",
      glass: 'Shot glass'
  },

  {
      name: "Is Paris Burning",
      ingredients: [ 'Cognac', 'Chambord raspberry liqueur'],
      instructions: "Stirred, not shaken. Rocks acceptable. Fresh raspberry optional.",
      glass: 'vote'
  },

  {
      name: "Motor Oil",
      ingredients: [ 'Jägermeister', 'Peppermint schnapps', 'Goldschlager', 'Malibu rum'],
      instructions: "Pour Jager into triple shot glass. Add Perpermint schnaups then Goldshlager. Top with Malibu.",
      glass: 'Shot glass'
  },

  {
      name: "Vulcan Mind Meld",
      ingredients: [ 'Ouzo', '151 proof rum'],
      instructions: "Pour ingredients into glass (usually a double shot glass.) Drink quickly.",
      glass: 'Shot glass'
  },

  {
      name: "Jack & Coke",
      ingredients: [ 'Bourbon', 'Coca-Cola', 'Ice'],
      instructions: "Pour bourbon into large glass filled with ice. Pour Coca-Cola into glass. Stir lightly.",
      glass: 'vote'
  },

  {
      name: "Cement Mixer",
      ingredients: [ 'Irish Cream', 'Lime juice'],
      instructions: "Take shot of Bailey's. With Bailey's in your mouth take shot of lime juice. Mix rapidly in mouth by shaking head vigorously. Swallow before it congeals totally.",
      glass: 'vote'
  },

  {
      name: "Reptile (Orginal)",
      ingredients: [ 'Whiskey', 'Orange juice', 'Mountain Dew', 'Grapes'],
      instructions: "This is the drink the Reptile is based on, created by Joe Schaftall. Shake indredents with cruched ice untill outside of shaker is cold enough to have water droplets on the outside. Strain into highball glass.",
      glass: 'Highball glass'
  },

  {
      name: "Mona-Lisa",
      ingredients: [ 'Absolut Vodka', 'Lemon soda'],
      instructions: "Stir ingredients and poor into a highball glass. Dance while drinking to the song Mona-Lisa with Rob'n'Raz. Oh! boy will you get drunk!",
      glass: 'Highball glass'
  },

  {
      name: "Afternoon",
      ingredients: [ 'Kahlua', 'Irish Cream', 'Frangelico', 'Coffee', 'Cream'],
      instructions: "Build into a suiting glass, with no ice. Cream on top if wanted. Served directly.",
      glass: 'vote'
  },

  {
      name: "Blow Job #1",
      ingredients: [ 'Amaretto', 'Whipping cream'],
      instructions: "Pour Amaretto into shot glass, top with whip cream. Drink with hands behind back in one smooth motion",
      glass: 'Shot glass'
  },

  {
      name: "Prairie Fire #1",
      ingredients: [ '151 proof rum', 'Tabasco sauce'],
      instructions: "Fill shot class with rum, Float Tabasco Sauce on top, Drink",
      glass: 'vote'
  },

  {
      name: "Gray Hound",
      ingredients: [ 'Drambuie', 'Triple sec'],
      instructions: "Put a small measure of each ingredient into a shot glass, not completely filling it. Lick the palm of your hand and ignite the drink. Immediately put your hand over the glass. The flames will go out and there will be a vacuum holding the glass to your hand. Take the glass and hand up to your mouth. Take off your hand and deeply inhale the fumes and then knock the drink back.",
      glass: 'Shot glass'
  },

  {
      name: "Nutty Russian",
      ingredients: [ 'Vodka', 'Frangelico', 'Coffee liqueur'],
      instructions: "Serve well mixed over ice. Yo can add 1 part milk if desired.",
      glass: 'vote'
  },

  {
      name: "Power screwdriver",
      ingredients: [ 'Vodka', 'Orange juice', 'Coca-Cola'],
      instructions: "Make a plain old screwdriver, but add Coca-Cola.",
      glass: 'vote'
  },

  {
      name: "Jolly Jumper",
      ingredients: [ 'Whisky', 'Vodka', 'Gin', 'Passoa', 'Orange juice', 'Ice'],
      instructions: "Just put it together, fill with orange juice, add ice and drink it.",
      glass: 'vote'
  },

  {
      name: "Mudslide #1",
      ingredients: [ 'Vodka', 'Kahlua', 'Irish Cream'],
      instructions: "Mix with cracked ice in a shaker. Serve in a chilled highball glass",
      glass: 'Highball glass'
  },

  {
      name: "Long Island Iced Tea #1",
      ingredients: [ 'Vodka', 'Tequila', 'Light rum', 'Gin', 'Coca-Cola', 'Lemon peel'],
      instructions: "Mix all contents in a highball glass and sitr gently. Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist.",
      glass: 'Highball glass'
  },

  {
      name: "Midori Sunrise",
      ingredients: [ 'Midori melon liqueur', 'Orange juice', 'Grenadine'],
      instructions: "Mix one part of Midori (or equivalent melon liqueor) with one part of Orange Juice. Add a slash of Granadine Syrup.",
      glass: 'vote'
  },

  {
      name: "Long Island Sunset",
      ingredients: [ 'Spiced rum', 'Peachtree schnapps', 'Sour mix', 'Cranberry juice', 'Ice'],
      instructions: "Shake after poured, add a cherry and slice of orange",
      glass: 'vote'
  },

  {
      name: "Stevie Ray Vaughn",
      ingredients: [ 'Bourbon', 'Southern Comfort', 'Triple sec', 'Sweet and sour', 'Orange juice'],
      instructions: "Shake ingredients over ice. Strain into shot glasses.",
      glass: 'Shot glass'
  },

  {
      name: "Malibu Bay Breeze",
      ingredients: [ 'Malibu rum', 'Cranberry juice', 'Pineapple juice'],
      instructions: "Mix ingredients and serve over ice.",
      glass: 'vote'
  },

  {
      name: "Romulan Ale",
      ingredients: [ 'White rum', 'Blue Curacao', 'Sprite', 'Tabasco sauce'],
      instructions: "Mix all ingredients together. Pour into a tall, narrow glass. Add a grain of salt.",
      glass: 'vote'
  },

  {
      name: "Kool-Aid Shot",
      ingredients: [ 'Vodka', 'Amaretto', 'Sloe gin', 'Triple sec', 'Cranberry juice'],
      instructions: "Pour into a large glass with ice and stir. Add a little cranberry juice to taste.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "National Aquarium",
      ingredients: [ 'Rum', 'Vodka', 'Gin', 'Blue Curacao', 'Sour mix', 'Lemon-lime soda'],
      instructions: "Pour all ingredients into a shaker of ice. Shake well. Serve on the rocks.",
      glass: 'vote'
  },

  {
      name: "Damned if you do",
      ingredients: [ 'Whiskey', 'Hot Damn'],
      instructions: "Pour into shot glass. Put in mouth. Repeat as deemed necessary.",
      glass: 'Shot glass'
  },

  {
      name: "Long vodka",
      ingredients: [ 'Vodka', 'Lime', 'Angostura bitters', 'Tonic water', 'Ice'],
      instructions: "Shake a tall glass with ice cubes and Angostura, coating the inside of the glass. Por the vodka onto this, add 1 slice of lime and squeeze juice out of remainder, mix with tonic, stir and voila you have a Long Vodka",
      glass: 'Highball glass'
  },

  {
      name: "Quick F**K",
      ingredients: [ 'Kahlua', 'Midori melon liqueur', 'Irish Cream'],
      instructions: "In a shot glass add 1/3 Kahlua first. Then 1/3 Miduri, topping it off with a 1/3 bailey's irish cream",
      glass: 'Shot glass'
  },

  {
      name: "Owen's Grandmother's Revenge",
      ingredients: [ 'Whiskey', 'Beer', 'Lemonade', 'Ice'],
      instructions: "Add ingredients and mix in blender.",
      glass: 'vote'
  },

  {
      name: "Flaming Dr. Pepper",
      ingredients: [ 'Amaretto', 'Vodka', '151 proof rum', 'Dr. Pepper', 'Beer'],
      instructions: "Add Amaretto, Bacardi, and vodka. Mix in the Dr. Pepper and beer",
      glass: 'vote'
  },

  {
      name: "New York Lemonade",
      ingredients: [ 'Absolut Citron', 'Grand Marnier', 'Lemon juice', 'Club soda'],
      instructions: "Serve in a chilled cocktail glass. Lemon and sugar the rim. Stir and Strain.",
      glass: 'Cocktail glass'
  },

  {
      name: "Caipirissima",
      ingredients: [ 'Lime', 'Sugar', 'White rum', 'Ice'],
      instructions: "Same as Caipirinha but instead of cachaca you add WHITE RUM. It's great!!!!!!!!",
      glass: 'vote'
  },

  {
      name: "Captain Do",
      ingredients: [ 'Spiced rum', 'Mountain Dew'],
      instructions: "Put shot in then add Soda",
      glass: 'vote'
  },

  {
      name: "Southampton Slam",
      ingredients: [ 'Green Creme de Menthe', 'Anisette'],
      instructions: "Serve in rocks glass - no ice - Pour both liquors, fill with club soda, roll once Serve with straw",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Piscola",
      ingredients: [ 'Pisco', 'Coca-Cola', 'Ice'],
      instructions: "It's basiclly the same as the Cuba Libre but instead of Rum it has Pisco. You can use not only Coca-Cola, instead you can add almost any kind of other soda drinks (sprite, fanta, etc.)",
      glass: 'vote'
  },

  {
      name: "Pisco Sour",
      ingredients: [ 'Pisco', 'Lemon juice', 'Sugar', 'Ice'],
      instructions: "Shake well and serve in a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Prairie Fire #2",
      ingredients: [ 'Gold tequila', 'Tabasco sauce'],
      instructions: "Pour ingredients into shot glass and serve.",
      glass: 'Shot glass'
  },

  {
      name: "Mogul Masher",
      ingredients: [ 'Cocoa powder', '151 proof rum', 'Rumple Minze', 'Water', 'Whipped cream'],
      instructions: "Mix hot chocolate according to instructions in a 12 oz. glass or larger and add liquors...top with whipped cream...beware!!!!! These sneak up on you!!!!",
      glass: 'vote'
  },

  {
      name: "Chocolate Martini",
      ingredients: [ 'Vodka', 'Creme de Cacao'],
      instructions: "Pour ingredients into shaker filled with ice then pour into martini glass",
      glass: 'vote'
  },

  {
      name: "Big Red",
      ingredients: [ 'Irish cream', 'Goldschlager'],
      instructions: "Pour ingredients into 1 ounce shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Freight Train",
      ingredients: [ 'Tequila', 'Bourbon'],
      instructions: "Pour ingredients into 1 ounce shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Sicilian Kiss",
      ingredients: [ 'Amaretto', 'Southern Comfort'],
      instructions: "Pour both ingredients into 1 ounce shot glass Take as a beer chaser when arriving late at the bar",
      glass: 'Shot glass'
  },

  {
      name: "Mister Wu",
      ingredients: [ 'Vodka', 'Bourbon', 'Lemon-lime soda', 'Orange juice'],
      instructions: "Pour two ounces of whiskey and ounce of vodka on ice into a regular glass. Add three ounces of lemon-lime soda and a dash of orange juice. Serve and enjoy",
      glass: 'vote'
  },

  {
      name: "Snakebite #1",
      ingredients: [ 'Yukon Jack', 'Lime juice'],
      instructions: "Pour two ounces of Yukon Jack over ice; add a dash of lime juice; enjoy",
      glass: 'vote'
  },

  {
      name: "The Shanaynay",
      ingredients: [ '151 proof rum', 'Water'],
      instructions: "Mix the water and rum, add powdered lemonade mix to taste. Stir and enjoy!",
      glass: 'vote'
  },

  {
      name: "Patmcpacke",
      ingredients: [ 'Southern Comfort', 'Vodka', 'Kool-Aid'],
      instructions: "Throw em all together and stir",
      glass: 'vote'
  },

  {
      name: "Superb Cosmopolitan",
      ingredients: [ 'Vodka', 'Triple sec', 'Lime juice', 'Cranberry juice', 'Chambord raspberry liqueur', 'Lemon peel'],
      instructions: "Stir the first four ingredients with ice. Strain into a frosted cocktail glass. Float Chambord on top and add a twist of lemon.",
      glass: 'Cocktail glass'
  },

  {
      name: "H-Bomb",
      ingredients: [ 'Beer', 'Water', 'Vodka'],
      instructions: "Dump out six ounces of beer, add vodka, fill up the rest of the beer can with water, mix and let settle",
      glass: 'vote'
  },

  {
      name: "Bearded Boy",
      ingredients: [ 'Southern Comfort', 'Vodka', 'Grain alcohol', 'Water'],
      instructions: "Add all ingredients and stir for 5 minutes, allowing alcohol to settle.",
      glass: 'vote'
  },

  {
      name: "Instant Death",
      ingredients: [ '151 proof rum', 'Everclear', 'Jägermeister', 'Water', 'Salt'],
      instructions: "Put in all alcohol first and water last, then salt",
      glass: 'vote'
  },

  {
      name: "Flaming Huscroft",
      ingredients: [ 'Beer', 'Southern Comfort', '151 proof rum', 'Everclear', 'Rum', 'Soda water', 'Mountain Dew', 'Ice'],
      instructions: "Throw all in a glass, light it: When flame goes down, chug but make sure you have a chaser, or your in trouble.",
      glass: 'vote'
  },

  {
      name: "Blood Clot #1",
      ingredients: [ 'Southern Comfort', 'Grenadine', '7-Up'],
      instructions: "Drop shot glass of s.c. into lowball glass mixed with 7-UP and grenadine. Slam it!!!",
      glass: 'Shot glass'
  },

  {
      name: "Eat Hot Death",
      ingredients: [ '151 proof rum', 'Lemon juice'],
      instructions: "Mix in a double shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Tuve Nightmare",
      ingredients: [ 'White wine', 'Ginger ale', 'Sprite', 'Pisang Ambon', 'Vodka', 'Cucumber', 'Lime'],
      instructions: "Mix the Vodka with the cider or the wine. Drop the fruit from a height of at least 3 feet. Pour the sprite and the Ginger Ale with the rest Carefully pour the Pisang Ambon into the punch. Enjoy!",
      glass: 'vote'
  },

  {
      name: "Moscow Mule",
      ingredients: [ 'Vodka', 'Lime juice', 'Ginger ale'],
      instructions: "Mix all ingredients in a highball glass with ice and enjoy.",
      glass: 'Highball glass'
  },

  {
      name: "Oatmeal Cookie",
      ingredients: [ 'Goldschlager', 'Butterscotch schnapps', 'Irish Cream'],
      instructions: "With ice, shake/stir and serve in shot glasses. The original drink called for the Goldslager but I actually like it with HotDam better..",
      glass: 'Shot glass'
  },

  {
      name: "Cowboy Cocksucker",
      ingredients: [ 'Butterscotch schnapps', 'Irish Cream'],
      instructions: "Blend in shot glass. Serve.",
      glass: 'Shot glass'
  },

  {
      name: "Liquid Cocaine #1",
      ingredients: [ 'Grand Marnier', 'Southern Comfort', 'Vodka', 'Amaretto', 'Pineapple juice'],
      instructions: "Combine 4 alchohols and pineapple juice in cocktail mixer with ice. Shake well. Strain into shot glass. Enjoy. It'll get you flyin'!",
      glass: 'Shot glass'
  },

  {
      name: "Kish Wacker",
      ingredients: [ 'Irish Cream', 'Creme de Cacao', 'Vodka', 'Kahlua'],
      instructions: "Mix the ingredients in the blender with ice. Tastes like a chocolate shake. *Can add Bailey's to taste.",
      glass: 'vote'
  },

  {
      name: "Sip and go naked",
      ingredients: [ 'Gin', 'Lemonade', 'Beer', 'Water'],
      instructions: "Mix all ingrediants together in a pitcher. Tastes and smells non-alcoholic, but packs a wallop.",
      glass: 'Pitcher'
  },

  {
      name: "The Fuzzy Pissbomb",
      ingredients: [ 'Peachtree schnapps', 'Mountain Dew'],
      instructions: "Pour all inggredients in rocks glass(with silver polka dots on it if ya got one) Stir. Watch it fizz for thirty seconds Drink it fast",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Piggelin #2",
      ingredients: [ 'Gin', 'Midori melon liqueur', '7-Up'],
      instructions: "Mix it all in a glass 1/4 full of ice...",
      glass: 'vote'
  },

  {
      name: "Piggelin #1",
      ingredients: [ 'Vodka', 'Midori melon liqueur', 'Orange'],
      instructions: "Mix it in a glass 1/4 full of ice...",
      glass: 'vote'
  },

  {
      name: "Wobbler",
      ingredients: [ 'Absolut Kurant', 'Grape juice', 'Schweppes Russchian', 'Grenadine'],
      instructions: "Pour the vodka in a glass 1/4-full off ice. Fill 2/3's of the glass with grape juice. Fill it up with the russian water. Ad just a little of grenadine.",
      glass: 'vote'
  },

  {
      name: "South Bank",
      ingredients: [ 'White rum', 'Gin'],
      instructions: "Shake the spirits with ice and strain into a Highball. Fill with Grape Tonic and stir gently. Serve with a Lemon Slice on the Rim and a Straw. If you find the Grape Tonic too sweet, add a splash or two of Lemon Juice or Sour Mix. A Sour Bank is made in an Old Fashioned with two ice cubes and Grape Fruit Juice instead. A Southern Bank is a South Bank which has been added 1 part Southern Comfort.",
      glass: 'vote'
  },

  {
      name: "Dreamsicle #1",
      ingredients: [ 'Irish Cream', 'Orange juice'],
      instructions: "In a lowball glass combine the two and stir.",
      glass: 'vote'
  },

  {
      name: "Midori Sour Ultra",
      ingredients: [ 'Midori melon liqueur', 'Lemon juice', 'Sugar', 'Maraschino cherry', 'Maraschino cherry juice'],
      instructions: "Mix ingredients in boston shaker with cracked ice. In a highball glass or champagne flute (optional), fill glass three quarters full with ice. Pour one tablespoon of cherry juice in glass before pouring in mixed ingredients. Garnish with two maraschino cherries and lemon wedge. Drink through a straw.",
      glass: 'Highball glass'
  },

  {
      name: "Black & Tan",
      ingredients: [ 'Ale', 'Guinness stout'],
      instructions: "Fill pint glass half full with Bass. Next pour Guiness over a spoon slowly until glass is full. If done correctly the Guiness will stay on top and the Bass on bottom hence the name Black & Tan.",
      glass: 'Pint glass'
  },

  {
      name: "Peltikatto",
      ingredients: [ 'Vodka', 'Lemon juice'],
      instructions: "Squeeze juice from a fresh lemon. Mix with Koskenkorva.",
      glass: 'vote'
  },

  {
      name: "Trial of the Century",
      ingredients: [ 'Jägermeister', 'Goldschlager', 'Grenadine'],
      instructions: "Layer in a shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Santa Shot",
      ingredients: [ 'Grenadine', 'Green Creme de Menthe', 'Peppermint schnapps'],
      instructions: "Taste like a candycane layer these in the order listed to get a red green and white(clear) shot.",
      glass: 'vote'
  },

  {
      name: "Go Girl!",
      ingredients: [ 'Chambord raspberry liqueur', 'Vodka', 'Club soda', 'Sour mix'],
      instructions: "Mix it all together on ice, what else?",
      glass: 'vote'
  },

  {
      name: "Green Hell",
      ingredients: [ 'Kool-Aid', 'Everclear'],
      instructions: "Pour both into glass and keep away from open flames!!",
      glass: 'vote'
  },

  {
      name: "Alexandra",
      ingredients: [ 'Tia maria', 'Cream', 'Rum', 'Creme de Cacao'],
      instructions: "Mix in a shaker, add some ice and shake very well",
      glass: 'vote'
  },

  {
      name: "Gingerbread Man",
      ingredients: [ 'Kahlua', 'Irish Cream', 'Goldschlager'],
      instructions: "Layer in sequence.",
      glass: 'vote'
  },

  {
      name: "Love Juice (LJ)",
      ingredients: [ 'Light rum', 'Orange juice', 'Apple juice', 'Squirt'],
      instructions: "First add rum, followed by other ingredients, mix well. Serve on the rocks with an orange slice in a Collins Glass (approx. 14 oz.).",
      glass: 'Collins glass'
  },

  {
      name: "Kevin's special blend",
      ingredients: [ 'Rye whiskey', 'Iced tea', 'Water'],
      instructions: "Put iced tea mix into glass and fill about half full of water.Add 2 ounces of rye, then fill remainder of glass with water.Stir.Add ice cubes.The colder this drink is...the better.",
      glass: 'vote'
  },

  {
      name: "Pirate's Float",
      ingredients: [ 'Spiced rum', 'Root beer schnapps', 'Coca-Cola'],
      instructions: "Mix all ingredients in glass with ice. Add cola to taste. Serve on the rocks.",
      glass: 'vote'
  },

  {
      name: "Flaming Dr. Pepper #2",
      ingredients: [ 'Amaretto', '151 proof rum', 'Beer'],
      instructions: "Fill the shot glass about 3/4 full with Amaretto and top it off with enough 151 to make it burn. Put the shot glass in another glass and fill the new glass with beer (right up to the level of the shot glass). Light the Amaretto/151 and let it burn awhile. Blow it out (or leave it burning if you're brave) and slam it. Tastes just like Dr. Pepper.",
      glass: 'Shot glass'
  },

  {
      name: "Screaming Nazi",
      ingredients: [ 'Jägermeister', 'Rumple Minze'],
      instructions: "Add ingredents with ice and shake.",
      glass: 'Shot glass'
  },

  {
      name: "Captain Louie",
      ingredients: [ 'Spiced rum', 'Kahlua', 'Vanilla extract'],
      instructions: "Mix in order: rum, drop, Kaula, drop",
      glass: 'vote'
  },

  {
      name: "Horny Mohican",
      ingredients: [ 'Banana liqueur', 'Irish Cream', 'Malibu rum'],
      instructions: "Free pour each ingredient into a test tube or shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Bloody Caesar",
      ingredients: [ 'Vodka', 'Celery salt', 'Worcestershire sauce', 'Tabasco sauce', 'Clamato juice', 'Salt', 'Black pepper'],
      instructions: "Rim tall glass with celery salt, fill with ice and ingredients. Garnish with a celery stick, straw, and lime.",
      glass: 'Highball glass'
  },

  {
      name: "Iron Butterfly",
      ingredients: [ 'Vodka', 'Kahlua', 'Irish cream'],
      instructions: "Pour vodka over ice, add kahlua and irish cream. Stir add 1 to 3 filbert nut(s).",
      glass: 'vote'
  },

  {
      name: "B-52 #2",
      ingredients: [ 'Kahlua', 'Irish Cream', 'Grand Marnier'],
      instructions: "Layer equal parts in the order given. This is the ONLY way to make a B-52",
      glass: 'vote'
  },

  {
      name: "Cherry Bomb",
      ingredients: [ 'Vodka', 'Creme de Cacao', 'Grenadine'],
      instructions: "Serve as a shot or on the rocks.",
      glass: 'vote'
  },

  {
      name: "Small Bomb",
      ingredients: [ 'Vodka', 'Triple sec', 'Grenadine'],
      instructions: "Serve as a shot or on the rocks.",
      glass: 'vote'
  },

  {
      name: "Toasted Almond",
      ingredients: [ 'Amaretto', 'Kahlua', 'Light cream'],
      instructions: "shake, strain into highball glass.",
      glass: 'Highball glass'
  },

  {
      name: "Chocolate Milk",
      ingredients: [ 'Chocolate liqueur', 'Milk', 'Amaretto'],
      instructions: "Put the milk in the bottom, pour the Liquer on top and add the dash of amaretto. Do not mix. SLAM IT!",
      glass: 'vote'
  },

  {
      name: "B-53",
      ingredients: [ 'Kahlua', 'Sambuca', 'Grand Marnier'],
      instructions: "Layer the Kahlua, Sambucca and Grand Marnier into a shot glas in that order. Better than B-52",
      glass: 'vote'
  },

  {
      name: "Strip and Go Naked",
      ingredients: [ 'Beer', 'Lemonade', 'Vodka'],
      instructions: "In a LARGE pitcher, pour in 3 cans of beer, then the vodka and lemonade, then the last 3 beers. Mix gently and pour into a tall glass over ice. It sounds horrible, but the beer taste is hidden. It tastes like lemonade!",
      glass: 'Pitcher'
  },

  {
      name: "Shark's tooth",
      ingredients: [ 'Dark rum', 'Lime juice', 'Lemon juice', 'Grenadine', 'Soda water'],
      instructions: "Pour rum, lemon juice, lime juice, and grenadine in a short collins glass. Shake or stir, then add splash of soda.",
      glass: 'Collins glass'
  },

  {
      name: "Brain Tumor",
      ingredients: [ 'Peach schnapps', 'Irish Cream', 'Grenadine', 'Cherry brandy'],
      instructions: "pour the peach schnapps into the shot glass, almost to the top. Slowly, and gently layer the Bailey's in on the side of the glass, to almost full. Add a touch of grenidine,down the middle and a touch of cherry brandy down the middle.",
      glass: 'Shot glass'
  },

  {
      name: "Spearmint Lifesaver",
      ingredients: [ 'Bourbon', 'Mountain Dew'],
      instructions: "Mix 'em, garnish with a slice of lime (optional).",
      glass: 'vote'
  },

  {
      name: "Duck Fart",
      ingredients: [ 'Kahlua', 'Irish Cream', 'Canadian whisky'],
      instructions: "layered- bottom to top Kahlua, Bailey's, Canadian Club",
      glass: 'vote'
  },

  {
      name: "Chocolate Monk",
      ingredients: [ 'Frangelico', 'Kahlua', 'Irish Cream'],
      instructions: "Shaken with ice.",
      glass: 'vote'
  },

  {
      name: "Rum Runner by Charles",
      ingredients: [ 'White rum', 'Banana liqueur', 'Blackberry brandy', 'Grenadine', 'Sweet and sour'],
      instructions: "Pour all ingredients in a cocktail shaker, filled with ice. Shake and strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bob's Moscow Mule",
      ingredients: [ 'Vodka', 'Ginger ale'],
      instructions: "Using a chilled cooper mug,fill with ice. Pour ingredients over ice. Garnish with sprig of fresh mint.",
      glass: 'vote'
  },

  {
      name: "Caribbean Screwdriver",
      ingredients: [ 'Peach schnapps', 'Creme de Banane', 'Malibu rum', 'Orange juice', 'Pineapple juice', 'Cream'],
      instructions: "Obviously this is not a drink for a small glass. Shake with ice. Strain the mixture into a tall glass. Garnish with a cherry if you feel so inclined.",
      glass: 'Highball glass'
  },

  {
      name: "Chocolate Toasted Almond",
      ingredients: [ 'Kahlua', 'Amaretto', 'Milk', 'Chocolate syrup', 'Ice'],
      instructions: "Mix all together, serve in a Collins glass over ice.",
      glass: 'Collins glass'
  },

  {
      name: "Flaming D-",
      ingredients: [ 'Amaretto', 'Whiskey', 'Beer', 'Everclear'],
      instructions: "Pour in Amaretto and Whiskey in a shot glass. Top shot with Everclear. Light shot on fire Drop in glass of beer Chug!!!",
      glass: 'Shot glass'
  },

  {
      name: "Yellow Bird",
      ingredients: [ '151 proof rum', 'Galliano', 'Vodka', 'Sour mix'],
      instructions: "Pour all the alcoholic ingredients in a highball glass, Stir Sour mix in a mixer and fill the glass.",
      glass: 'Highball glass'
  },

  {
      name: "Dew-Driver",
      ingredients: [ 'Vodka', 'Ice', 'Mountain Dew'],
      instructions: "Fill glass with ice add Vodka and Mountain Dew...If drinking the Dew-Driver the way God intended (out of a Big Gulp cup) adjust ingredients appropriately...Remember to say 'I only had 2 drinks!' whern retching later in the evening.",
      glass: 'vote'
  },

  {
      name: "D.O.A.",
      ingredients: [ 'Barenjager', 'Rumple Minze', 'Jägermeister'],
      instructions: "Pour liqour in order listed and layer. Serve and shoot",
      glass: 'vote'
  },

  {
      name: "Mount Red",
      ingredients: [ 'Vodka', 'Light rum', 'Gin', 'Peach schnapps', 'Cranberry juice', 'Lime'],
      instructions: "Ice tall glass, follow ingredients. Top off with cranberry juice. Garnish with lime.",
      glass: 'Highball glass'
  },

  {
      name: "Estonian Forest-fire",
      ingredients: [ 'Vodka', 'Tabasco sauce', 'Kiwi'],
      instructions: "you should never drink one of these.",
      glass: 'vote'
  },

  {
      name: "Harvey Cowpuncher",
      ingredients: [ 'Vodka', 'Galliano', 'Milk'],
      instructions: "Same as Harvey Wallbanger. (Yes, it is MILK!! Believe it or not, it doesn't taste that bad) Say hello to Jan Henning, will you?",
      glass: 'vote'
  },

  {
      name: "Kamel Drivare",
      ingredients: [ 'Sambuca', 'Irish Cream'],
      instructions: "Pour the Sambuca into a shotglass, then layer the Bailey's over by pouring it over the back of a spoon.",
      glass: 'Shot glass'
  },

  {
      name: "German Hooker (Die Deutsche Nutte)",
      ingredients: [ 'Tequila', 'Apfelkorn', 'Orange juice', 'Salt', 'Lemon'],
      instructions: "In a shaker, half filled with crushed ice, combine Tequila and Apfelkorn. Shake well. Strain into a high-ball glass filled with a few icecubes. Fill up with orangejuice. Serve with salt and lemon as a usual Tequila shot. The first German Hooker was served under our graduation week in june 1994. Long live, Anders Hansson!! The technician class of 1994 Brinellskolan, Fagersta, SWEDEN",
      glass: 'Highball glass'
  },

  {
      name: "Sunoco 251",
      ingredients: [ '151 proof rum', 'Vodka', 'Green Chartreuse'],
      instructions: "Combine the vodka and rum in a shot glass. Add the chartreuse to make the drink a gasoline-type color.",
      glass: 'Shot glass'
  },

  {
      name: "Incredible Hulk #3",
      ingredients: [ 'Hpnotiq', 'Cognac'],
      instructions: "Layer over ice and stir for transformation.",
      glass: 'Highball glass'
  },

  {
      name: "Seabreeze",
      ingredients: [ 'Vodka', 'Cranberry juice', 'Grapefruit juice'],
      instructions: "Pour vodka over ice into highball glass. Add mixers. May be garnished with a wedge of lime.",
      glass: 'Highball glass'
  },

  {
      name: "Long Island",
      ingredients: [ 'Tequila', 'Gin', 'Whiskey', 'White rum', 'Vodka', 'Sugar syrup', 'Coca-Cola', 'Orange juice'],
      instructions: "Just mix the ingredients and enjoy it.",
      glass: 'vote'
  },

  {
      name: "Slacker's Slammer",
      ingredients: [ 'Vodka', 'Root beer schnapps', 'Root beer', 'Ice-cream'],
      instructions: "Add 1 oz. vodka in a glass, then add 1 oz. of Root-beer snapes mix with Root-beer add one scoop of ice-cream at top of the glass.Enjoy.",
      glass: 'vote'
  },

  {
      name: "Ragnar #1",
      ingredients: [ 'Absolut Kurant', 'Lime', '7-Up'],
      instructions: "Put the liquor in a tall glass, add a few drops of lime. Fill up the glass with 7-up so it suits you.",
      glass: 'Highball glass'
  },

  {
      name: "Hangover",
      ingredients: [ 'Absolut Kurant', 'Irish Cream', 'Gin', 'Johnnie Walker'],
      instructions: "Pour the ingredients in a big glass and your done. Shake it don't stir.",
      glass: 'vote'
  },

  {
      name: "Ha Ha Tonka",
      ingredients: [ 'Vodka', 'Amaretto', 'Sloe gin', 'Southern Comfort', 'Orange juice'],
      instructions: "use 16 oz. cup, fill ice, pour in alcohol, then top with orange juice, for weaker, add more OJ.",
      glass: 'vote'
  },

  {
      name: "Snake Bite (UK)",
      ingredients: [ 'Lager', 'Cider'],
      instructions: "Pour ingredients into a pint glass. Drink. Fall over.",
      glass: 'Pint glass'
  },

  {
      name: "Screaming Blue Messiah",
      ingredients: [ 'Goldschlager', 'Blue Curacao'],
      instructions: "Build in a shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Puerto Rican Monkey Fuck",
      ingredients: [ 'Kahlua', 'Creme de Banane', '151 proof rum'],
      instructions: "Mix Kahlua and Creme de Banana in a shaker with ice. Strain into a shot glass. Float the 151 on top.",
      glass: 'Shot glass'
  },

  {
      name: "Bob Marley",
      ingredients: [ 'Midori melon liqueur', 'Jägermeister', 'Goldschlager'],
      instructions: "Layer in a 2 oz shot glass or pony glass",
      glass: 'Shot glass'
  },

  {
      name: "Southern Pink Flamingo",
      ingredients: [ 'Southern Comfort', 'Malibu rum', 'Pineapple juice', 'Grenadine', 'Lemon juice'],
      instructions: "Mix in a shaker half filled with ice. Strain into a pony glass",
      glass: 'Cordial glass'
  },

  {
      name: "Booger",
      ingredients: [ 'Malibu rum', 'Banana liqueur', 'Melon liqueur', 'Irish Cream'],
      instructions: "After the first 1/2 oz drop just a tiny bit of Bailey's on top.",
      glass: 'vote'
  },

  {
      name: "Meister Mind Meld",
      ingredients: [ 'Coca-Cola', 'Amaretto', 'Ice'],
      instructions: "Pour the Coca-Cola into a highball glass. Then add the Amaretto. Finish off with one ice cube so the carbination does not leave the beverage",
      glass: 'Highball glass'
  },

  {
      name: "Mint Russki, or Spearmint Ivan",
      ingredients: [ 'Vodka', 'Mint'],
      instructions: "1. Place 3 to 6 twisted or crushed fresh mint leaves into a medium sized cocktail glass 2. Add 2 to 3 shots of your favorite frozen vodka 3. Add ice if desired 4. Stir lightly",
      glass: 'Cocktail glass'
  },

  {
      name: "Brainteaser",
      ingredients: [ 'Sambuca', 'Erin Cream', 'Advocaat'],
      instructions: "layered erin first, then sambuca and then avocart(should sit in middle of other two. To drink: use a straw to suck up avocart then shot the rest and then suck fumes up through straw.",
      glass: 'vote'
  },

  {
      name: "Cartwheel",
      ingredients: [ 'Tuaca', 'Bitters', 'Lime', 'Powdered sugar'],
      instructions: "Pour shot of Tuaca. Thoroughly drench the lime in bitters, then coat in powdered sugar. Drink shot, bite into lime, experience a veritable explosion of flavor.",
      glass: 'vote'
  },

  {
      name: "Cough Medicine",
      ingredients: [ 'Vodka', 'Southern Comfort', 'Amaretto'],
      instructions: "Mix as a shot.",
      glass: 'Shot glass'
  },

  {
      name: "Brain Hemmorage",
      ingredients: [ 'Peach schnapps', 'Irish Cream', 'Grenadine'],
      instructions: "This is a great drink to serve on Halloween. First, pour the peach schnapps. Then, slowly pour the Irish Cream. Do not mix! The Creme will clump together and settle at the bottom of the schnapps. It will have the appearance of an internal organ!! Pour the grenadine over the Creme for a completely disgusting looking, yet thoroughly tasty party drink!",
      glass: 'Shot glass'
  },

  {
      name: "Extraterrestrial",
      ingredients: [ 'Irish cream', 'Midori melon liqueur', 'Vodka', '151 proof rum'],
      instructions: "Pour the jigger of Midori first. Then, very gingerly, slowly pour the Irish Cream on top of the Midori. If done properly, the Irish Cream will sit on top of the Midori without mixing. Repeat the procedure with the Stoli over the Irish Cream. This will give you a very attractive three layer drink. Optional - add a teaspoon or so of Bacardi 151 on the top of the drink. Then, light the 151 and let burn for 5-10 seconds. Put out with a napkin. Shoot the drink and enjoy!",
      glass: 'vote'
  },

  {
      name: "Russian funk",
      ingredients: [ 'Vodka', 'Lime juice', 'Sugar', 'Soda water'],
      instructions: "Blend vodka, lime and sugar, top with soda water, serve in a higball glass.",
      glass: 'Highball glass'
  },

  {
      name: "Porch Climber",
      ingredients: [ 'Beer', 'Pink lemonade', 'Absolut Vodka', 'Canadian whisky'],
      instructions: "Pour all over ice in large cooler. Then climmb the pporchs.",
      glass: 'vote'
  },

  {
      name: "Eskimo Joe",
      ingredients: [ 'Irish Cream', 'Green Creme de Menthe', 'Cinnamon schnapps', 'Milk'],
      instructions: "Layer Bailey's First ,milk, Creme de Menthe and Cinnamon Schnapps.",
      glass: 'vote'
  },

  {
      name: "Atlantic Sun",
      ingredients: [ 'Vodka', 'Southern Comfort', 'Passion fruit syrup', 'Sweet and sour', 'Club soda'],
      instructions: "Shake all the ingredients, top the drink with soda. Garnish with a slice of orange.",
      glass: 'vote'
  },

  {
      name: "Mike Samm's Purple Passionate Punch",
      ingredients: [ 'Malibu rum', 'Chambord raspberry liqueur', 'Triple sec', 'Pineapple juice', 'Lemon juice'],
      instructions: "Add all ingredients into a mixing tin with ice. Place mixing glass on top. Shake vigorously. Spin tin & glass on the palm of hand. Throw behind your back and catch with opposite hand. Repeat in various ways until your customers or guests are mystified. Serve in collins with out a garnish.",
      glass: 'vote'
  },

  {
      name: "Mojito",
      ingredients: [ 'Light rum', 'Lime', 'Sugar', 'Mint', 'Soda water'],
      instructions: "Lightly muddle the mint and sugar with a splash of soda water in a mixing glass until the sugar dissolve and you smell the mint. Squeeze the lime into the glass, add rum and shake with ice. Strain over cracked ice in a highball glass. Top with soda water, garnish with mint sprig and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Long Island Iced Tea #2",
      ingredients: [ 'Tequila', 'Rum', 'Vodka', 'Gin', 'Triple sec', 'Sour mix', 'Coca-Cola'],
      instructions: "Fill 12 oz. glass with ice. Add all the alcohol and sour mix. Top off glass with Coca-Cola to taste then watch out.",
      glass: 'vote'
  },

  {
      name: "Fjellbekk (Mountain Stream)",
      ingredients: [ 'Vodka', 'Aquavit', 'Lime juice', 'Sprite'],
      instructions: "Mix everything in a glass with ice.",
      glass: 'Highball glass'
  },

  {
      name: "Cowboy Roy",
      ingredients: [ 'Vodka', 'Rum', 'Orange juice'],
      instructions: "Pour into glass and mix.",
      glass: 'vote'
  },

  {
      name: "Lynchburg Lemonade",
      ingredients: [ 'Bourbon', 'Triple sec', 'Sweet and sour', 'Sprite'],
      instructions: "Mix ingredients into a punch bowl.",
      glass: 'Punch bowl'
  },

  {
      name: "Jellyfish",
      ingredients: [ 'Creme de Cacao', 'Amaretto', 'Irish Cream', 'Grenadine'],
      instructions: "1. Pour the Creme de Cacao and Amaretto into a shot glass. 2. Float enough Bailey's on top to cover the shot. 3. Drop a few drops of grenadine into the shot. It looks just like a jellyfish!",
      glass: 'Shot glass'
  },

  {
      name: "Hawaiin Punch from Hell",
      ingredients: [ 'Vodka', 'Southern Comfort', 'Amaretto', 'Orange juice', '7-Up', 'Grenadine'],
      instructions: "Pour all over ice -- shake and strain into a large shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Beetlejuice",
      ingredients: [ 'Vodka', 'Melon liqueur', 'Blue Curacao', 'Raspberry schnapps', 'Cranberry juice', 'Sour mix', 'Pineapple', 'Cherry'],
      instructions: "In a tall mixing glass with ice pour the vodka on the bottom. Then fill the glass 3/4 full with sour mix. Pour in the rest of the ingredients one at a time. Garnish with pineapple spear and cherry",
      glass: 'vote'
  },

  {
      name: "Three Wise Men #2",
      ingredients: [ 'Jägermeister', 'Goldschlager', 'Rumple Minze'],
      instructions: "Pour over ice in a shaker. Shake well. Strain. would be very smart to split this drink at least 2 ways...maybe three.",
      glass: 'vote'
  },

  {
      name: "Surputte",
      ingredients: [ 'Absolut Vodka', 'Triple sec', 'Lemon juice', 'Lime juice'],
      instructions: "Add some 7-UP and ice A slice of Lime on the edge",
      glass: 'vote'
  },

  {
      name: "Surfer on Acid",
      ingredients: [ 'Jägermeister', 'Malibu rum', 'Pineapple juice'],
      instructions: "Combine and shake well with ice and strain into a shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Fuzzy Astronaut",
      ingredients: [ 'Tang', 'Vodka', 'Peach schnapps'],
      instructions: "Self explanatory.",
      glass: 'vote'
  },

  {
      name: "Mai Tai, Michael's Ultimate",
      ingredients: [ 'Lime', 'Dark rum', 'Light rum', 'Orange liqueur', 'Orange', 'Lemon', 'Pineapple juice', 'Sugar'],
      instructions: "Squeeze lime wedge in tall glass with ice. Add other ingredients. Sugar is optional.",
      glass: 'Highball glass'
  },

  {
      name: "Fire Engine",
      ingredients: [ 'Jägermeister', 'Carbonated soft drink'],
      instructions: "Pour it in a highball glass. Should be severed Cold. Also use Ice if preffered.",
      glass: 'Highball glass'
  },

  {
      name: "Fire Engine With Alarm",
      ingredients: [ 'Jägermeister', 'Vodka', 'Carbonated soft drink'],
      instructions: "Pour it in a highball glass. Should be severed Cold. Also use Ice if preffered. Realy the same as an Fire Engine.",
      glass: 'Highball glass'
  },

  {
      name: "Mikey Mike",
      ingredients: [ 'Malibu rum', 'Peachtree schnapps', 'Chambord raspberry liqueur', 'Orange juice', 'Pineapple juice'],
      instructions: "Mix ingredients in a tumbler and shake thoroughly. Pour over ice into a 10 oz. glass and enjoy.",
      glass: 'vote'
  },

  {
      name: "Dambuster",
      ingredients: [ 'Rum', 'Kahlua', 'Ginger ale', 'Milk'],
      instructions: "In a Highball glass with ice, pour three shots of Rum (preferably Bacardi) one shot of Kahlua, a shot of ginger ale and fill the rest of the glass with milk, (Homo or 2%, never SKIM!) Stir. That's It! Enjoy",
      glass: 'Highball glass'
  },

  {
      name: "Urban Violence",
      ingredients: [ 'Tropicana', 'Malibu rum', 'Vodka', 'Blue Curacao'],
      instructions: "Put some ice in your favorite glass. Add liquor. Fill up remainder with strawberry/orange/banana and stir. Enjoy.",
      glass: 'vote'
  },

  {
      name: "Grovschpol",
      ingredients: [ 'Whiskey', 'Midori melon liqueur', 'Irish Cream', 'Coca-Cola'],
      instructions: "Fill a glass (40-50 cl) with whiskey, midori, Bailey's and then C.C. untill you have enough foam (it looks horrible). Drink it with a straw and don't look at the color :-)",
      glass: 'vote'
  },

  {
      name: "Long Island Iced Tea #3",
      ingredients: [ 'Vodka', 'Gin', 'Tequila', 'Light rum', 'Triple sec', 'Lemon juice', 'Coca-Cola'],
      instructions: "Fill a Collins glass with crushed ice. Pour the spirits and the juice over the ice. Add cola until the drink becomes tea coloured.",
      glass: 'Collins glass'
  },

  {
      name: "Pink Panther #1",
      ingredients: [ 'Vodka', 'Crystal light'],
      instructions: "Mix the Crystal Light then add your favorite brand of Vodka. Pour over ice. Serve.--A nice strong party punch with almost no taste of alcohol!",
      glass: 'vote'
  },

  {
      name: "Rattlesnake",
      ingredients: [ 'Irish Cream', 'Kahlua', 'Creme de Cacao'],
      instructions: "Layer Kahlua, Creme de Cacao & Bailey's. Can be made in Shot glass, test tube, or tumbler - I sometimes use a wine glass.",
      glass: 'Shot glass'
  },

  {
      name: "Veterinary",
      ingredients: [ 'Grain alcohol', 'Lime juice', 'Sprite'],
      instructions: "Pour alcohol over ice cubes in tall glass. Add lime juice and Sprite / 7-UP. Stir well.",
      glass: 'Highball glass'
  },

  {
      name: "Squished Smurf",
      ingredients: [ 'Peach schnapps', 'Irish Cream', 'Blue Curacao', 'Grenadine'],
      instructions: "Layer peach schnapps, then Bailey's. Slowly dribble blue curacao over top so that it curtles around the Bailey's. Drip Grenadine in different areas of the shooter glass so that it swirls around the already 'disgusting' mixture.",
      glass: 'Shot glass'
  },

  {
      name: "Tootsie Roll",
      ingredients: [ 'Tia maria', 'Dark Creme de Cacao', 'Frangelico'],
      instructions: "Because of the darkness of this particular shooter, layering is not necessary.",
      glass: 'vote'
  },

  {
      name: "Michelada",
      ingredients: [ 'Beer', 'Lemon', 'Worcestershire sauce', 'Soy sauce', 'Tabasco sauce', 'Black pepper', 'Salt'],
      instructions: "Mix ingredients in a tall high glass with lots of ice. Add beer at the end. Mix and enjoy.",
      glass: 'vote'
  },

  {
      name: "Eskimo Joe's drink",
      ingredients: [ 'Pineapple', 'Lemon', 'Apple', 'Orange', 'Ice', 'Yoghurt', 'Orange juice', 'Malibu rum'],
      instructions: "Using blender, add rum, fruits, ice, juice, yoghurt. make sure the orange is peeled and seeds taken out. Cut seeds out of apple. Now blend for 1 minute and your ready for the eskimo.",
      glass: 'vote'
  },

  {
      name: "Brain Hemorage",
      ingredients: [ 'Schnapps', 'Irish cream', 'Grenadine'],
      instructions: "Pour schnapps into a large shot glass (the measurements may be off a bit, you can experiment). Slowly pour irish cream into schnapps so that it basically forms a 'brain' in 'formaldihide'. Finally, dribble the grenadine (dribbling onto a spoon then into the schnapps helps) directly into the center of the irish cream mass . As the grenadine amount slowly increases it will eventually burst through the irish cream creating a hemoraging brain.",
      glass: 'Shot glass'
  },

  {
      name: "Snitchee's Cider",
      ingredients: [ 'Spiced rum', 'Apple cider', 'Cinnamon'],
      instructions: "Used crushed ice. Can be made in anysizefrom punchbowl to personal serving.",
      glass: 'vote'
  },

  {
      name: "Caribbean Kiss",
      ingredients: [ 'Dark rum', 'Amaretto', 'Kahlua', 'Cream', 'Cinnamon', 'Brown sugar'],
      instructions: "Dip the rim of a cocktail glass in Kahlùa, then in brown sugar. Shake the spirits and cream with ice, strain into the frosted glass and sprinkle cinnamon on top. This drink is created by Sami Taalas (Sheraton Malmö, Sweden) Caribbean Kiss won Trois Rivières After Dinner Cocktail Competition Swedish Championship 1994",
      glass: 'Cocktail glass'
  },

  {
      name: "Green Goblin",
      ingredients: [ 'Cider', 'Lager', 'Blue Curacao'],
      instructions: "Cider First, Lager then Curacao",
      glass: 'Pint glass'
  },

  {
      name: "Oreo Mudslide",
      ingredients: [ 'Vodka', 'Kahlua', 'Irish Cream', 'Vanilla ice-cream', 'Oreo cookie'],
      instructions: "Blend Vodka, Kahlua, Bailey's, ice-cream and the Oreo well in a blender. Pour into a large frosted glass. Garnish with whipped cream and a cherry.",
      glass: 'vote'
  },

  {
      name: "ABC",
      ingredients: [ 'Amaretto', 'Irish Cream', 'Cognac'],
      instructions: "Layered in a shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Marvellaid",
      ingredients: [ 'Orange vodka', 'Triple sec'],
      instructions: "Chill martini glass. Mix equal parts stoli and Triple sec. Chill and strain. Garnish with orange slice.",
      glass: 'vote'
  },

  {
      name: "Bite of the Iguana",
      ingredients: [ 'Tequila', 'Triple sec', 'Vodka', 'Orange juice', 'Sour mix', '7-Up'],
      instructions: "Mix ingredients and shake. Strain and pour into shotglass. Share with a friend.",
      glass: 'vote'
  },

  {
      name: "Combustible Edison",
      ingredients: [ 'Brandy', 'Campari', 'Lemon juice'],
      instructions: "In a shaker full of cracked ice, combine Campari and lemon juice. Shake and strain into a chilled cocktail glass. Heat brandy in a chaffing dish. When warm, ignite the brandy and pour in a flaming stream into the cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Planter's Punch",
      ingredients: [ 'Dark rum', 'Orgeat syrup', 'Orange juice', 'Pineapple juice'],
      instructions: "Combine all ingrdients. Serve over ice in a collins glass. Garnish with lime wedge and maraschino cherry.",
      glass: 'Collins glass'
  },

  {
      name: "Something Peachie #1",
      ingredients: [ 'Vodka', 'Peach schnapps', 'Triple sec', 'Pineapple juice', 'Orange juice'],
      instructions: "serve in a tall glass over ice garnish with a cherry and orange",
      glass: 'Highball glass'
  },

  {
      name: "Cheapo student bevvy",
      ingredients: [ 'Cider', 'Gin', 'Blackcurrant squash'],
      instructions: "Mix in a pint glass. Down very quickly.",
      glass: 'Pint glass'
  },

  {
      name: "Velvet Hammer #2",
      ingredients: [ 'Creme de Cacao', 'Vodka', 'Cream', 'Banana', 'Sugar'],
      instructions: "Put all ingredients in blender with ice. Puree until smooth.",
      glass: 'vote'
  },

  {
      name: "Red Eye",
      ingredients: [ 'Beer', 'Vodka', 'Tomato juice'],
      instructions: "fill glass 1/2 to 3/4 full with beer add vodka if wanted top with tomato juice",
      glass: 'vote'
  },

  {
      name: "Prarie Dog",
      ingredients: [ '151 proof rum', 'Tabasco sauce'],
      instructions: "build contents into a shot glass guaranteed night-ender for 21st birthday outings! (invented @ 901 Club, Los Angeles)",
      glass: 'Shot glass'
  },

  {
      name: "Doh",
      ingredients: [ 'Vodka', 'Malibu rum', 'Pineapple juice'],
      instructions: "Just throw them all together add some ice and drink. If you can't get Tahiti Treat use pineapple juice",
      glass: 'vote'
  },

  {
      name: "Napalm",
      ingredients: [ 'Aftershock', 'Cinnamon schnapps', '151 proof rum'],
      instructions: "Pour into shot glass putting the 151 in last. Light the 151 and Bombs away!!! (Be sure to blow it out before drinking)",
      glass: 'Shot glass'
  },

  {
      name: "Cape Codder",
      ingredients: [ 'Vodka', 'Cranberry juice', 'Lime'],
      instructions: "Pour Vodka and Cranberry Juice into a High Ball glass over ice. Stir well, add the wedge of lime, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Peppermint Beach",
      ingredients: [ 'Peppermint schnapps', 'Malibu rum'],
      instructions: "Mix with ice. Serve cold. [Our studies show this drink to taste quite foul at the beginning of the evening but rather refreshing after several other drinks have been consumed.]",
      glass: 'vote'
  },

  {
      name: "Sizzler",
      ingredients: [ 'Vodka', 'Bourbon', 'Lemonade', 'Beer'],
      instructions: "Mix all to gether until fizzing.",
      glass: 'vote'
  },

  {
      name: "Falix",
      ingredients: [ 'Dark rum', 'Margarita mix', 'Lemon juice'],
      instructions: "Pour the Baccardi into the shot glass. Add the Margarita mix. Top it with lemon juice and shoot it.",
      glass: 'Shot glass'
  },

  {
      name: "Pink Panty Pulldowns",
      ingredients: [ 'Sprite', 'Pink lemonade', 'Vodka'],
      instructions: "Shake well",
      glass: 'vote'
  },

  {
      name: "Yukon Cornelius",
      ingredients: [ 'Yukon Jack', 'Goldschlager'],
      instructions: "In a shot glass pour the Yukon Jack to just below the rim. Add Goldschlager, filling the glass to full. Enjoy.",
      glass: 'Shot glass'
  },

  {
      name: "Ice Pick #1",
      ingredients: [ 'Vodka', 'Iced tea', 'Lemon juice'],
      instructions: "Put Vodka in glass fill with iced tea. Stir in lemon to taste.",
      glass: 'vote'
  },

  {
      name: "Frothy Redhead",
      ingredients: [ 'Vanilla ice-cream', 'Club soda', 'Red wine', 'Sugar'],
      instructions: "Add in said order. Do not shake, soda will mix. Garnish with 2-3 grapes and sprinkle with sugar. Named after a friend who demanded a new drink.",
      glass: 'vote'
  },

  {
      name: "Mojito #2",
      ingredients: [ 'Mint', 'Sugar', 'Lemon juice', 'Light rum', 'Club soda'],
      instructions: "In a tall thin glass, crush part of the mint with a fork to coat the inside. Add the sugar and lemon juice and stir thoroughly. Top with ice. Add rum and mix. Top off with the club soda (or seltzer). Add a lemon slice and the remaining mint. Serves one.",
      glass: 'vote'
  },

  {
      name: "Something Peachie #2",
      ingredients: [ 'Vodka', 'Peach schnapps', 'Triple sec', 'Pineapple juice', 'Orange juice'],
      instructions: "Serve in a tall glass over ice. Garnich with a cherry and orange slice",
      glass: 'Highball glass'
  },

  {
      name: "Maèek",
      ingredients: [ 'Johnnie Walker', 'Campari', 'Orange juice'],
      instructions: "Mix this and add orange peel.",
      glass: 'vote'
  },

  {
      name: "Boilermaker",
      ingredients: [ 'Whiskey', 'Beer'],
      instructions: "Fill shot glass with whiskey. Drop full shot glass into mug o' beer. Drink immediately, enjoy.",
      glass: 'Shot glass'
  },

  {
      name: "Ice Pick #2",
      ingredients: [ 'Vodka', 'Iced tea'],
      instructions: "In large ice filled glass, pour vodka, then tea. Add a lemon wedge for garnish. Surprisingly refreshing.",
      glass: 'vote'
  },

  {
      name: "Mad Cow",
      ingredients: [ 'Kahlua', 'Cream', '151 proof rum'],
      instructions: "Mix in a shaker 1/4 filled with ice and pour into liberal shot glasses.",
      glass: 'Shot glass'
  },

  {
      name: "Hard Core",
      ingredients: [ '151 proof rum', 'Everclear', 'Triple sec', 'Amaretto', 'Pepsi Cola', 'Orange'],
      instructions: "Combine all into a tall glass or wine goblet. Add the Cola last. Hang orange on rim of glass. Taste good but is super strong.",
      glass: 'Highball glass'
  },

  {
      name: "Godhead",
      ingredients: [ 'Rum', 'Vodka', 'Raspberry liqueur', 'Lime juice', '151 proof rum'],
      instructions: "Pour Rum, Vodka, Raspberry Liqueur and Lime Juice a strainer glass. Chill with ice and strain into your shot glass. Float 151 Rum on top of shot. Throw down or ignite and throw down. (Igniting the 151 Rum will lower the alcoholic content.)",
      glass: 'Shot glass'
  },

  {
      name: "Slippery Nipple #1",
      ingredients: [ 'Irish Cream', 'Butterscotch schnapps'],
      instructions: "Serve as is",
      glass: 'vote'
  },

  {
      name: "Sex on the Beach #2",
      ingredients: [ 'Vodka', 'Midori melon liqueur', 'Chambord raspberry liqueur', 'Pineapple juice'],
      instructions: "For the shooter you mix all ingredients together over ice. For the shot you decrease the Pineapple Juice to 1 ct. Chill and then strain.",
      glass: 'vote'
  },

  {
      name: "Boozy Maria",
      ingredients: [ 'Peach schnapps', '7-Up'],
      instructions: " ",
      glass: 'vote'
  },

  {
      name: "Alien Urine Sample",
      ingredients: [ 'Midori melon liqueur', 'Peach schnapps', 'Malibu rum', 'Creme de Banane', 'Sweet and sour', 'Club soda', 'Blue Curacao'],
      instructions: "Hand shake or blend with ice the liquer with the sour. Strain the drink from the ice into a pounder glass. Float Blue Curacao before serving",
      glass: 'vote'
  },

  {
      name: "Blueberry Tea",
      ingredients: [ 'Amaretto', 'Grand Marnier', 'Tea'],
      instructions: "Mix amaretto and grand marnier in a brandy snifter or glass. Add hot tea to taste.",
      glass: 'Brandy snifter'
  },

  {
      name: "Liquid cocaine 8 ball",
      ingredients: [ 'Southern Comfort', 'Rum', 'Amaretto', 'Pineapple juice', 'Grenadine'],
      instructions: "Mix it and wait for the effects. Its called a liquid cocaine. Because it's expensive and once you try it your hooked.",
      glass: 'vote'
  },

  {
      name: "Killer Kool-Aid",
      ingredients: [ 'Vodka', 'Peach schnapps', 'Amaretto', 'Cranberry juice'],
      instructions: "Fill a cocktail glass with ice. Layer ingredients. Do not stir.",
      glass: 'Cocktail glass'
  },

  {
      name: "All American",
      ingredients: [ 'Bourbon', 'Southern Comfort', 'Coca-Cola'],
      instructions: "Serve with two ice-cubes. You can vary the amount of Coca-Cola, all after how soft you want the drink to be.",
      glass: 'vote'
  },

  {
      name: "Peach 200",
      ingredients: [ 'Peach Vodka', 'Coca-Cola'],
      instructions: "Poor the Koskenkorva Peach in a glas, fill up with Coca-Cola and stir. To be served cold, but without ice.",
      glass: 'vote'
  },

  {
      name: "410 Gone",
      ingredients: [ 'Peach Vodka', 'Coca-Cola'],
      instructions: " ",
      glass: 'vote'
  },

  {
      name: "Mexican Virgin",
      ingredients: [ 'Tequila', 'Cider'],
      instructions: "Pour into an 8 oz. glass and stir. Then pour into another 8 oz. glass over ice.",
      glass: 'vote'
  },

  {
      name: "Liquid Cocaine #2",
      ingredients: [ 'Rumple Minze', 'Jägermeister', '151 proof rum'],
      instructions: "Chill over ice and pour.",
      glass: 'vote'
  },

  {
      name: "Key Largo Kooler",
      ingredients: [ 'Key Largo schnapps', 'Spiced rum', 'Orange juice', 'Pineapple juice', 'Cranberry juice', '151 proof rum'],
      instructions: "Mix juices and alcohol in mixing tin, flash blend, and pour over ice in a 23 oz. squall glass and float Bacardi 151 rum. Garnish with an orange flag and umbrella.",
      glass: 'vote'
  },

  {
      name: "Mudslide #2",
      ingredients: [ 'Vodka', 'Kahlua', 'Irish cream'],
      instructions: "measure all ingredients into a shot glass and drink",
      glass: 'Shot glass'
  },

  {
      name: "Mike Tyson",
      ingredients: [ 'Tia maria', 'Jägermeister', 'Pernod'],
      instructions: "Mix it and serve with ice",
      glass: 'vote'
  },

  {
      name: "Green Cow",
      ingredients: [ 'Pisang Ambon', 'Milk'],
      instructions: "Blend the two ingredients together. Use about half of each.",
      glass: 'vote'
  },

  {
      name: "Brutal Hammer",
      ingredients: [ 'Red wine', 'Vodka'],
      instructions: "Put them in a glass; Pray to God; Then slam it!!!",
      glass: 'vote'
  },

  {
      name: "Rangers Rocker",
      ingredients: [ 'Vodka', 'Dark rum', 'White wine', 'Water'],
      instructions: "Pour ingredients into mason jar; Stir; Sit down; Drink.",
      glass: 'Mason jar'
  },

  {
      name: "Purple Hooter #1",
      ingredients: [ 'Chambord raspberry liqueur', '7-Up', 'Vodka'],
      instructions: "Just shoot the damn thing!",
      glass: 'vote'
  },

  {
      name: "Scarlet Fever",
      ingredients: [ 'Absolut Vodka', 'White rum', 'Gin', 'Cranberry juice'],
      instructions: "mix together and shake, pour into a draft glass add 3 ice cubes and garnish with a lemon wheel on the side.",
      glass: 'vote'
  },

  {
      name: "Red Death (MAC style)",
      ingredients: [ 'White wine', 'Absolut Vodka', 'Gin', 'White rum', 'Candy', 'Raspberry juice', 'Water'],
      instructions: "mix together in large container....stir in the alcohol from atart of list till the halls....for melted halls centers do the following...: use a needle and thread and put it through each halls..tie a knot after each one...place in 1 to 2 litres of boiling..and i mean boiling hot water until all are melted pour into bowl and mix in the water and raspberry juice. have fun should serve 10 to 20 people at 1 litre each we use this for our residence house drink ..it is safe and actually very tastey..try it and see.",
      glass: 'vote'
  },

  {
      name: "Stop Light",
      ingredients: [ 'Vodka', 'Midori melon liqueur', 'Orange juice', 'Cranberry juice'],
      instructions: "Line up three shot glasses. Pour 1 shot of vodka into each glass. Add a splash of midori to one, a splash of orange juice to another and a splash of cranberry juice to the third. Drink them down Red, Yellow, Green. It's a stop light!",
      glass: 'Shot glass'
  },

  {
      name: "GSM",
      ingredients: [ 'Gin', 'Milk', 'Sugar'],
      instructions: "Stir it all together",
      glass: 'vote'
  },

  {
      name: "The Crying Game",
      ingredients: [ 'Bourbon', 'Lime vodka', 'Kahlua', 'Irish Cream', 'Grenadine', 'Tequila', 'Rum', 'Tomato juice'],
      instructions: "Mix JD and Vodka together with Kahlua. Heat over medium flame Bailey's, Tequila, and Rum. Mix all together with tomato juice and top with grenadine. Garnish with a stalk of celery and green onion. Enjoy!!!",
      glass: 'vote'
  },

  {
      name: "Bushwacker #2",
      ingredients: [ 'Irish Cream', 'Amaretto', 'Kahlua', 'Vodka', 'Grand Marnier', 'Nutmeg', 'Ice'],
      instructions: "Fill blender 3/4 with ice (small cubes best). Add a small splash of vodka, a small splash of Grand Marnier. Add a healthy serving of kahlua and a little less healthy splash of amarreto. Fill the blender with Bailey's until liquid is 1/2 inch from top of icecubes. Mix until smooth. Pour in hurricane glass and sprinkle some nutmeg on top! (Sorry about the vagueness. I learned this recipe while bartending in the Virgin Islands -- St. Thomas before it was demolished by Marylin. The drink is kick ass! The consistency should be like a milk shake, except without the milk. Also, this drink may be a bit expensive here (liquor is EXTREMELY cheap in the Caribbean)).",
      glass: 'Hurricane glass'
  },

  {
      name: "Dead Nazi",
      ingredients: [ 'Rumple Minze', 'Jägermeister'],
      instructions: "pour rumple minze(should be pre chilled) into shot glass add jager(should also be pre chilled), serve",
      glass: 'Shot glass'
  },

  {
      name: "Scorpion",
      ingredients: [ 'Light rum', 'Dark rum', 'Brandy', 'Orgeat syrup', 'Orange juice', 'Lime juice', 'Sugar syrup'],
      instructions: "Fill a 12 oz wine glass with ice, add a lime wedge and transfer into shaker. Add ingredients, shake and pour back into glass. Garnish stirrer, straw, cherry-pineapple, parasol, and mint.",
      glass: 'White wine glass'
  },

  {
      name: "Friar Tuck",
      ingredients: [ 'Frangelico', 'Dark Creme de Cacao', 'Cream'],
      instructions: "Shake and pour into a v-shape, and garnish with cinammon.",
      glass: 'vote'
  },

  {
      name: "Tequila Sunrise",
      ingredients: [ 'Tequila', 'Orange juice', 'Grenadine'],
      instructions: "Pour tequila in a highball glass with ice, and top with orange juice. Stir. Add grenadine by tilting glass and pouring grenadine down side by flipping the bottle vertically very quickly. The grenadine should go straight to the bottom and then rise up slowly through the drink. Garnish stirrer, straw and cherry-orange.",
      glass: 'Highball glass'
  },

  {
      name: "Brown cow",
      ingredients: [ 'Kahlua', 'Milk'],
      instructions: "In a champagne flute with ice, add kahlua and top with milk. Stir. Garnish stirrer, nutmeg.",
      glass: 'Champagne flute'
  },

  {
      name: "Screaming Orgasm",
      ingredients: [ 'Vodka', 'Irish Cream', 'Kahlua'],
      instructions: "Pour first vodka, then Bailey's, then Kahlua into a cocktail glass over crushed ice. Stir. Caution: use only high quality vodka. Cheap vodka can cause the Bailey's to curdle. Test your brand of vodka by mixing 1 Tsp each of vodka and Bailey's first.",
      glass: 'Cocktail glass'
  },

  {
      name: "Poor Man's Mommosa",
      ingredients: [ 'Beer', 'Orange juice'],
      instructions: "Pour Beer into a highball glass, add orange juice til desired color",
      glass: 'Highball glass'
  },

  {
      name: "Dark Nightmare",
      ingredients: [ 'Kahlua', 'Goldschlager', 'Milk'],
      instructions: "Mix milk last. Stir. Enjoy.",
      glass: 'vote'
  },

  {
      name: "Keremiki",
      ingredients: [ '151 proof rum', 'Goldschlager', 'Rumple Minze'],
      instructions: "Mix and shoot.",
      glass: 'vote'
  },

  {
      name: "Albysjön",
      ingredients: [ 'Vodka', 'Fanta', 'Sprite', 'Kiwi'],
      instructions: "Pour vodka in glass then the rest, stir well. By the way for best results add Kiwi juice concentrate last",
      glass: 'vote'
  },

  {
      name: "Danny Q's Aruba Rum Punch",
      ingredients: [ 'Dark rum', 'Rum', 'Light rum', 'Orange juice', 'Pineapple juice', 'Sour mix', 'Grenadine', 'Bitters'],
      instructions: "Combine all ingredients in a hurricane glass with ice. Shake Vigrously Serve with a cherry and orange slice for garinsh.",
      glass: 'Hurricane glass'
  },

  {
      name: "Hina Blast",
      ingredients: [ 'Red wine', 'Coca-Cola', 'Tequila', 'Orange juice', 'Banana', 'Raisins', 'Champagne', 'Hot red pepper flakes'],
      instructions: "Heat vine, add raisines and boiled. Mix Coca-Cola, tequila, orange juice and add to boiled vine with raisines. Toss bananas with hot red pepper flakes. Pour Don Perignon over bananas. Mix everything thougether and store in a glass jar. Put in a fridge for 8 hours. Served chilled with fresh cherries. Enjoy !!!",
      glass: 'vote'
  },

  {
      name: "Jamaican Beer",
      ingredients: [ 'Beer', 'Dry Vermouth', 'Sweet Vermouth', 'Gin', 'Whisky', 'Vodka', 'Blue Curacao'],
      instructions: "first of all pour in a glass vermouth,gin,whisky. next add the beer and last curacao and vodka's drops",
      glass: 'vote'
  },

  {
      name: "Beeaauu's Rum and Coke",
      ingredients: [ 'Rum', 'Dark rum', '151 proof rum', 'Coca-Cola', 'Lime juice'],
      instructions: "Mix all ingredients in a tall glass with ice. Garnish with a lime wedge.",
      glass: 'Highball glass'
  },

  {
      name: "Smooth Operator",
      ingredients: [ 'Frangelico', 'Kahlua', 'Irish Cream', 'Banana', 'Cream'],
      instructions: "Blend with a scoop of ice",
      glass: 'vote'
  },

  {
      name: "Pjolter Bay",
      ingredients: [ 'Apricot brandy', 'Gin', 'Grenadine'],
      instructions: "Have it all in a shaker, add 50/50 Fanta orange/Lemon mix. Sahake. Serv in highball glass. garnish with lemon an cherry.",
      glass: 'Highball glass'
  },

  {
      name: "Graveyard (light)",
      ingredients: [ 'Triple sec', '151 proof rum', 'Vodka', 'Gin', 'Tequila', 'Beer', 'Stout'],
      instructions: "Mix the 5 whites in equal amounts in a beer mug. fill up the rest of the space with half beer and half stout.",
      glass: 'Beer mug'
  },

  {
      name: "Graveyard",
      ingredients: [ 'Triple sec', '151 proof rum', 'Vodka', 'Gin', 'Tequila', 'Bourbon', 'Scotch', 'Beer', 'Stout'],
      instructions: "Mix the 5 whites and 2 whiskies in a beer mug in equal amounts. Top up the rest of the mug with half beer and half stout.",
      glass: 'Beer mug'
  },

  {
      name: "King of Denmark",
      ingredients: [ 'Pernod', 'Blackcurrant cordial', 'Water'],
      instructions: "Stir the Pernod&Black, add several big icecubes.",
      glass: 'vote'
  },

  {
      name: "Frozen Mudslide",
      ingredients: [ 'Vodka', 'Kahlua', 'Irish Cream', 'Vanilla ice-cream'],
      instructions: "Blend alcohol with ice-cream. Serve in frosted glass.",
      glass: 'vote'
  },

  {
      name: "Pain Killer",
      ingredients: [ 'Rum', 'Cream of coconut', 'Pineapple juice', 'Orange juice', 'Nutmeg', 'Maraschino cherry', 'Ice'],
      instructions: "Fill cup with ice. Pour Pusser's Rum to fill about 1/4 of the glass. Fill with an equal amount of Cream of Coconut (Coco Lopez is good. Add some pineapple juice and a good splash of orange juice. Shake well. Add cherry and sprinkly nutmeg. Grab a staw and get ready! This was originally made in the Britsh Virgin Islands -- Pussers is the official rum of the Royal British Navy. Alter the amount of rum to your taste. Sorry about the inexact measurements -- that's the way we do it down in de islans mon!",
      glass: 'vote'
  },

  {
      name: "Green Frog",
      ingredients: [ 'Pisang Ambon', 'Sprite', 'Lime juice'],
      instructions: "Fill a highball glass with 1 part Pisang Ambon. Pour 2 parts sprite in glas. then add some lime. Remember some ice-cubes. Drink with straw.",
      glass: 'Highball glass'
  },

  {
      name: "Brendan's PUnch of happiness",
      ingredients: [ 'White rum', 'Vodka', 'Fruit punch'],
      instructions: "POur ingredients into large pot, stir, serve as punch disappears continue to add more rum..",
      glass: 'vote'
  },

  {
      name: "Liquid Asphault",
      ingredients: [ 'Sambuca', 'Jägermeister'],
      instructions: "Just layer chilled Jägermeister on top of sambuca",
      glass: 'vote'
  },

  {
      name: "Russian Brunch",
      ingredients: [ 'Vodka', 'Orange juice', 'Champagne'],
      instructions: "mix vodka and o.j. in blender with ice. add champaine and stir in.",
      glass: 'vote'
  },

  {
      name: "StumbleFuck",
      ingredients: [ 'Jägermeister', 'Rumple Minze', 'Aftershock'],
      instructions: "Mix all three in a shooter! Slight burn on the way down is normal, just enjoy it.",
      glass: 'vote'
  },

  {
      name: "Christer Petterson",
      ingredients: [ 'Vodka', 'Irish Cream'],
      instructions: "Mix and serv with crushed ice",
      glass: 'vote'
  },

  {
      name: "Felix's feast",
      ingredients: [ 'Irish Cream', 'Chocolate milk'],
      instructions: "Mix the milk and the Bailys, add some ice, and drink it in a whiskeyglass.",
      glass: 'vote'
  },

  {
      name: "Watermelon Crawl",
      ingredients: [ 'Southern Comfort', 'Amaretto', 'Watermelon schnapps', 'Orange juice', 'Pineapple juice'],
      instructions: "Fill a 16 oz pint glass with ice, pour the above in. Garnish with cherries.",
      glass: 'Pint glass'
  },

  {
      name: "Sneaky Pete",
      ingredients: [ 'Kahlua', 'Rye whiskey', 'Milk'],
      instructions: "Put Kahlua on the bottom over ice. Then add milk Then add Rye. Stir before drinking.",
      glass: 'vote'
  },

  {
      name: "Flander's Flake-Out",
      ingredients: [ 'Sambuca', 'Sarsaparilla'],
      instructions: "Bang 'em both in.",
      glass: 'vote'
  },

  {
      name: "Tidal Wave",
      ingredients: [ 'Gin', 'Light rum', 'Vodka', 'Peach schnapps', 'Orange juice', 'Pineapple juice', 'Grenadine', '151 proof rum'],
      instructions: "Pour gin, vodka, rum and peach schnapps over ice in a collins glass. Add orange and pineapple juices, a dash of grenadine, and float 151 rum on top. Garnish with a piece of fresh cut pineapple. The wave will sweep you away!!!!!",
      glass: 'Collins glass'
  },

  {
      name: "Brown Pelican",
      ingredients: [ 'Apple cider', 'Ginger beer', 'Ice'],
      instructions: "Combine in a mixing glass, stir gently and pour over ice cubes in a highball glass",
      glass: 'vote'
  },

  {
      name: "Apple Slammer",
      ingredients: [ '7-Up', 'Apple schnapps'],
      instructions: "pour into a shot glass and present to consumer, they are expected to cover the top of the shotglass with thier palm, raise the glass, slam it on the bar and the swallow quickly.",
      glass: 'Shot glass'
  },

  {
      name: "Pussy Paws",
      ingredients: [ 'Amaretto', 'Cranberry juice', 'Club soda', 'Lime peel', 'Sour mix'],
      instructions: "Stir Cranberry, amaretto, sour mix. Pour into a frosted highball glass over ice cubes. Fill with club soda; add twist of lime. Garnish with a wedge of lime.",
      glass: 'Highball glass'
  },

  {
      name: "Manhattan Sweet #2",
      ingredients: [ 'Sweet Vermouth', 'Bourbon'],
      instructions: "Serve on the rocks",
      glass: 'vote'
  },

  {
      name: "Texas Rose",
      ingredients: [ 'Rum', 'Orange juice', 'Creme de Banane', 'Pineapple juice'],
      instructions: "Mix all ingredients and pour over ice. Wonderful smooth tasting drink. But watch out it will knock your socks off!",
      glass: 'vote'
  },

  {
      name: "Frozen Margarita #2",
      ingredients: [ 'Limeade', 'Tequila', 'Triple sec'],
      instructions: "In blender add the can of limeaide. Using the empty can measure the tequila and the triple sec and add to the blender. Blend, adding ice cubes until the drink becomes slushy and holds in peaks. Serves: 4",
      glass: 'vote'
  },

  {
      name: "Cynar Cocktail",
      ingredients: [ 'Sweet Vermouth', 'Cynar', 'Orange'],
      instructions: "Pour over ice cubes in a cordial glass. Stir and squeeze in an orange wedge. Serve.",
      glass: 'Cordial glass'
  },

  {
      name: "Fire in Heaven",
      ingredients: [ '151 proof rum', 'Tabasco sauce'],
      instructions: "Fill up shot glass with 151 proof Rum. Then add a dash of Tabasco into the glass. Allow a few seconds to settle. Drink fast and stand back.",
      glass: 'Shot glass'
  },

  {
      name: "Obadoba",
      ingredients: [ 'Milk', 'Cocoa powder', 'Whipped cream', 'Salt'],
      instructions: "Mix the o'boy n' the salt in a tall glass, add the heated milk. Put some whipped cream at the top and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Bacardi Gold & Cola",
      ingredients: [ 'Gold rum', 'Coca-Cola', 'Lemon'],
      instructions: "Fill a tall glass completely with ice cubes. Mix the ingredients into the glass and serve with a slice of lemon put on the glass. It is a very simple drink, but never the less it is very deliscious - especially in the summertime.",
      glass: 'Highball glass'
  },

  {
      name: "Pink Lemonade",
      ingredients: [ 'Absolut Citron', 'Chambord raspberry liqueur', 'Sour mix'],
      instructions: "Mix Shake Can be made as an up cocktail or on the rocks",
      glass: 'vote'
  },

  {
      name: "Georgian Sunrise",
      ingredients: [ 'Tequila', 'Peach schnapps', 'Strawberry liqueur', 'Sweet and sour'],
      instructions: "Combine and blend all four ingredients and serve in a highball glass with a lime garnish.",
      glass: 'Highball glass'
  },

  {
      name: "Præriebål (Norwegian version of Prairie Fire)",
      ingredients: [ 'Tequila', 'Tabasco sauce'],
      instructions: "Pour tequlia in a double shot glass. Then pour Tabasco in the same glass.",
      glass: 'Shot glass'
  },

  {
      name: "Jamaican Dust",
      ingredients: [ 'Light rum', 'Malibu rum', 'Pineapple juice'],
      instructions: "Mix all three ingredients in a strainer with ice, serve chilled",
      glass: 'vote'
  },

  {
      name: "The Beavis",
      ingredients: [ 'Everclear', 'Purple passion', 'Vodka', 'Cider', 'Southern Comfort', '151 proof rum', 'Wine', 'Water'],
      instructions: "Pour all the shit together, and hope it don't explode! Drink as fast as you can, with no food, and say your prayers.",
      glass: 'vote'
  },

  {
      name: "Roswell",
      ingredients: [ 'Tequila', 'Blue Curacao', 'Melon liqueur', 'Lime liqueur', 'Pineapple juice', 'Orange juice', 'Grenadine'],
      instructions: "Pour over ice in a highball glass. Top with a splash of grenadine.",
      glass: 'Highball glass'
  },

  {
      name: "North Polar",
      ingredients: [ 'Gin', 'Triple sec', 'Campari'],
      instructions: "Mix and server over ice with a slice of orange",
      glass: 'vote'
  },

  {
      name: "STP (the motor oil of course)",
      ingredients: [ 'Scotch', 'Vodka', 'Maple syrup'],
      instructions: "Add whiskyand vodka to glass of ice. Stir in maple syrup. Wait 2 minutes and enjoy.",
      glass: 'vote'
  },

  {
      name: "Cramit",
      ingredients: [ 'Amaretto', 'Cranberry juice'],
      instructions: "Fill and stir, they love the name.",
      glass: 'vote'
  },

  {
      name: "Utar",
      ingredients: [ 'Light rum', 'Dark rum', 'Lemonade', '151 proof rum', 'Spiced rum'],
      instructions: "mix in glass and chug",
      glass: 'vote'
  },

  {
      name: "Gorilla Fart #1",
      ingredients: [ 'Bourbon', '151 proof rum'],
      instructions: "Pour in shot glass. Take a sniff and shoot!",
      glass: 'Shot glass'
  },

  {
      name: "Patsy mix",
      ingredients: [ 'Brandy', 'Cider', 'Ice'],
      instructions: "Pour in Brandy and Babycham on ice",
      glass: 'vote'
  },

  {
      name: "Amaretto Sour",
      ingredients: [ 'Amaretto', 'Sour mix'],
      instructions: "Shake and strain. Garnish with a cherry and an orange slice.",
      glass: 'vote'
  },

  {
      name: "Ground Zero",
      ingredients: [ 'Bourbon', 'Peppermint schnapps', 'Vodka', 'Kahlua'],
      instructions: "Just god damn mix em! :)",
      glass: 'vote'
  },

  {
      name: "Hawaiian Screw",
      ingredients: [ 'Vodka', 'Orange juice', 'Pineapple juice'],
      instructions: "pour over ice in regular glass. Add pineapple and orange juice to taste. Sort of like a regular screwdriver except with a tropical twist! Can also use orange-strawberry juice or any kind of funky fruit combination!",
      glass: 'vote'
  },

  {
      name: "Blue PolarBear",
      ingredients: [ 'Vodka', 'Peppermint schnapps', 'Ice'],
      instructions: "Shake schnapps and vodka together until well-mixed. Add crushed ice, shake lightly, then pour to shot glasses.",
      glass: 'Shot glass'
  },

  {
      name: "Silver Bullet #2",
      ingredients: [ 'Scotch', 'Vodka'],
      instructions: "Pour scotch in iced glass and coat sides empty scotch out pour in vodka",
      glass: 'vote'
  },

  {
      name: "Peanut Butter and Jelly",
      ingredients: [ 'Chambord raspberry liqueur', 'Frangelico'],
      instructions: "Just pour and drink. No chill.",
      glass: 'vote'
  },

  {
      name: "Screaming Viking",
      ingredients: [ 'Vodka', 'Dry Vermouth', 'Lime juice', 'Celery', 'Cucumber'],
      instructions: "Stir liquids with ice then strain into a cocktail glass. Garnish with celery and cucumber. Serve immediately.",
      glass: 'Cocktail glass'
  },

  {
      name: "Wong Tong Cocktail",
      ingredients: [ 'Vodka', 'Gin', 'Dry Vermouth', 'Lemonade', 'Maraschino cherry'],
      instructions: "Pour liquids into a strainer glass with 4-6 ice cubes. Strain into a cocktail glass. Garnish with cherries.",
      glass: 'Cocktail glass'
  },

  {
      name: "Vincent Vega",
      ingredients: [ 'Absolut Citron', 'Apple juice'],
      instructions: "Add ice cubes to a glass. Mix the ingredients.",
      glass: 'vote'
  },

  {
      name: "Cuba Libra",
      ingredients: [ 'Dark rum', 'Lime', 'Coca-Cola', 'Ice'],
      instructions: "Fill tall glass with ice cubes. Add rum. Rub cut edge of lime on rim of glass then squeeze juice into glass. Fill with Coca-Cola. Garnish with lime slice. Enjoy!",
      glass: 'Highball glass'
  },

  {
      name: "Russian Boilermaker",
      ingredients: [ 'Beer', 'Vodka'],
      instructions: "Pour cold beer into a large glass, and drop whole shot glass full of vodka into beer. Guzzle as fast as you can, and let out a roar, a REAL man.",
      glass: 'Shot glass'
  },

  {
      name: "Wild Ass Indian",
      ingredients: [ 'Vodka', 'Rum', 'Scotch'],
      instructions: "shake",
      glass: 'vote'
  },

  {
      name: "French Sailor",
      ingredients: [ 'Triple sec', 'Absolut Citron', 'Sugar'],
      instructions: "Mix 1 part warm Triple sec and 1 part Vodka into a tumbler with a cube of sugar. Stir until sugar is disolved.",
      glass: 'vote'
  },

  {
      name: "An Arif",
      ingredients: [ 'Rum', 'Peach schnapps', 'Orange juice', 'Cranberry juice', 'Ginger ale', 'Lemon juice'],
      instructions: "Combine everything together in order it is listed, you may add Kool-Aid mix if desired, but make sure to add the lemon juice last. It is called an Arif because it will tend to block your nuts from getting off if you have too many of these.",
      glass: 'vote'
  },

  {
      name: "D+d lay",
      ingredients: [ 'Jägermeister', 'Absolut Citron', 'Lemonade'],
      instructions: "shaken not stirred",
      glass: 'vote'
  },

  {
      name: "Kermit The Frog Piss",
      ingredients: [ 'Midori melon liqueur', 'Malibu rum', 'Sweet and sour', '7-Up'],
      instructions: " ",
      glass: 'vote'
  },

  {
      name: "Mellon Collie and The Infinite Gladness",
      ingredients: [ 'Light rum', 'Midori melon liqueur', 'Malibu rum', 'Chocolate syrup', 'Cream'],
      instructions: "Combine all ingredients and shake with ice. Serve in 140ml martini glass. Garnish with strawberries marinated in Triple sec and Monin Passionfruit syrup and a pineapple leaf.",
      glass: 'vote'
  },

  {
      name: "Gorilla's Puke",
      ingredients: [ 'Bourbon', '151 proof rum'],
      instructions: "Layer in normal shot glass. Can be lit and shot through straw.",
      glass: 'Shot glass'
  },

  {
      name: "Black Martini #1",
      ingredients: [ 'Gin', 'Black Sambuca'],
      instructions: "Poor ingredients over ice. Shake gently. Strain into cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Slippery Dick",
      ingredients: [ 'Butterscotch schnapps', 'Irish Cream', 'Half-and-half'],
      instructions: "pour over ice in rock glass",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Jelly Bean",
      ingredients: [ 'Blackberry brandy', 'Anis'],
      instructions: "mix equal parts in pony glass-tastes just like a jelly bean!",
      glass: 'Cordial glass'
  },

  {
      name: "Dirty Girl Scout",
      ingredients: [ 'White Creme de Menthe', 'Vodka', 'Kahlua', 'Irish Cream'],
      instructions: "Mix the vodka, Kahlua and Bailey's and pour over ice. Pour the Creme de menthe down the center of the glass. Looks gross, but tastes delicious!",
      glass: 'vote'
  },

  {
      name: "Spunky Monkey",
      ingredients: [ 'Kahlua', 'Amaretto', 'Half-and-half', 'Ice'],
      instructions: "Add above ingrediants in a blender. Blend on high until the ice is crushed. Enjoy!",
      glass: 'vote'
  },

  {
      name: "Patti's Blow Job",
      ingredients: [ 'Kahlua', 'Irish Cream', 'Whipped cream'],
      instructions: "Layer in order in shot glass. Drink without using your hands!!",
      glass: 'Shot glass'
  },

  {
      name: "Swamp Water",
      ingredients: [ 'Lime vodka', 'Apricot brandy', 'Sweet and sour', '7-Up'],
      instructions: "in a glass 1/2 full of ice,mix one shot lime vodka, one shot apricot brandy and fill the rest with half sweet and sour and half 7-up. (sorry no fancy glass, we usually get it in the standard plastic cups!!)",
      glass: 'vote'
  },

  {
      name: "Bahama Todd",
      ingredients: [ 'Light rum', 'Dark rum', 'Spiced rum', 'Malibu rum', '151 proof rum', 'Blue Curacao', 'Pineapple juice'],
      instructions: "Add light rum, dark rum, spiced rum, and malibu rum to ice filled glass. Mix in pineapple juice and blue curacao. Float 151 rum on top.",
      glass: 'vote'
  },

  {
      name: "Camen Miranda",
      ingredients: [ 'Rum', 'Coca-Cola', 'Pineapple-orange-banana juice', 'Lime', 'Club soda'],
      instructions: "Squeeze lime wedge over ice Pour rum, juice, & cola Stir lightly Add club soda or tonic to taste",
      glass: 'vote'
  },

  {
      name: "Cold Shower",
      ingredients: [ 'Green Creme de Menthe', 'Club soda'],
      instructions: "Use about 1:4 of creme de menthe to club soda, and stir.",
      glass: 'vote'
  },

  {
      name: "Broken down golf cart",
      ingredients: [ 'Amaretto', 'Midori melon liqueur', 'Lime juice'],
      instructions: "Shaken and strained through ice !!! Mmmmm.....",
      glass: 'vote'
  },

  {
      name: "Orange Climax",
      ingredients: [ 'Peach schnapps', 'Pineapple juice', 'Orange juice', 'Bourbon'],
      instructions: "Mix one after the other then shake and top with whip cream",
      glass: 'vote'
  },

  {
      name: "Wet Dream",
      ingredients: [ 'Amaretto', 'Blue Curacao', 'Creme de Banane', 'Sweet and sour', 'Pineapple juice', 'Chambord raspberry liqueur'],
      instructions: "Mix all ingredients except Chambord. Chill and strain mixture into a martini glass. Float Chambord to the bottom of the glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "JimPop's Margarita",
      ingredients: [ 'Tequila', 'Lime juice', 'Grand Marnier', 'Salt'],
      instructions: "Lightly rub the rim of a cocktail glass with some lime juice, dip glass rim in the salt. Mix all ingredients with ice, strain into fresh ice in the salt-rimmed glass, and enjoy!",
      glass: 'Cocktail glass'
  },

  {
      name: "Fishbone",
      ingredients: [ 'Malibu rum', 'Blue Curacao', 'Midori melon liqueur', 'Orange juice', 'Sour mix', '7-Up'],
      instructions: "Fill glass with ice add liquor, orange juice, and sour mix. shake well add 1 oz of 7 up to the top.",
      glass: 'vote'
  },

  {
      name: "Three Wise Men",
      ingredients: [ 'Bourbon', 'Bourbon', 'Johnnie Walker'],
      instructions: "layer in a shot glass, Jimmy, Jack, then Johnnie",
      glass: 'Shot glass'
  },

  {
      name: "Loud-Mouth",
      ingredients: [ 'Southern Comfort', 'Peach schnapps'],
      instructions: "This is a Winter drink which can only be consumed outdoors preferbly in an alpine environment. It is should be consumed in small swigs from a French Canteen type of devide and only after a epic day of skiing...Why yes it's strong but you'll be the better for it.",
      glass: 'vote'
  },

  {
      name: "After Five",
      ingredients: [ 'Peppermint schnapps', 'Kahlua', 'Irish Cream'],
      instructions: "1. Pour Kahlua into shot glass to about 1/2 full. 2. Using a spoon(inverted), slowly pour in the Peppermint Schnapps until glass is about 3/4 full. Done correctly, the Schnapps will flow under the Kahlua for a clear layer. 3. Again using a spoon, but this time right side up, slowly top off the glass with a layer of Bailey's. Be careful to place the spoon right at the top of the Kahlua layer and to raise it as the glass fills up. Done correctly, this will provide a layer of Bailey's floating over the Kahlua. 4. Toss it down all at once for something like a Peppermint Pattie, WITH A BANG!!! NOTE: Best if all ingredients are chilled",
      glass: 'Shot glass'
  },

  {
      name: "Andrea's Colada Collision",
      ingredients: [ 'Light rum', 'Cream of coconut', 'Pineapple juice', 'Banana'],
      instructions: "Fill blender about 1/4 full with ice. Add all ingredients to blender. Blend to a smooth consistency. Serve in either a hurricane glass or a tall glass or goblet. Garnish with a pineapple spear is optional.",
      glass: 'Hurricane glass'
  },

  {
      name: "Urine",
      ingredients: [ 'Gin', 'Lime juice', 'Club soda'],
      instructions: "Mix and serve warm",
      glass: 'vote'
  },

  {
      name: "Harlee's Planters Punch",
      ingredients: [ 'Light rum', 'Dark rum', 'Orange juice', 'Pineapple juice', 'Grenadine', '151 proof rum'],
      instructions: "measure light and dark rum into glass, add juices, grenadine...shake well, top with 151 rum... garnish with cherry and orange slice.",
      glass: 'vote'
  },

  {
      name: "Don's Bloody Mary",
      ingredients: [ 'Vodka', 'Clamato juice', 'Worcestershire sauce', 'Tabasco sauce', 'Horseradish', 'Lime'],
      instructions: "Put 4 or 5 ice cubes in a large old-fashioned glass and fill 3/4 full with Clamato juice. (Clamato may be mixed 1/2 and 1/2 with any other favorite tomato or veggie juice). Add the vodka, Worcestershire, Tabasco, and Horseradish and stir thoroughly with a spoon or swizzle. Twist the lime slice over the glass edge and stick a scallion in as a casual stirrer and delicious finish to the drink.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Brandy Manhattan",
      ingredients: [ 'Maraschino cherry juice', 'Maraschino cherry', 'Bitters', 'Sweet Vermouth', 'Brandy', 'Water'],
      instructions: "Fill rocks glass with ice. Add Cherry juice and cherry, then bitters. Add brandy, then sweet vermouth. Add water, stir.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Pink Elephant Ears",
      ingredients: [ 'Vodka', 'Pink lemonade', 'Lime', 'Ice'],
      instructions: "Mix pink lemonade per instructions on can. Add vodka, slices of lime, and ice. Mix well. Enjoy on a hot summer day on the boat!",
      glass: 'vote'
  },

  {
      name: "Southern Sunrise",
      ingredients: [ 'Southern Comfort', 'Grenadine', 'Lemon juice', 'Orange juice'],
      instructions: "Pour all ingredients into a shaker with ice. Shake well and pour into Cocktail glasses.",
      glass: 'Cocktail glass'
  },

  {
      name: "Midnight Manx",
      ingredients: [ 'Kahlua', 'Irish Cream', 'Goldschlager', 'Heavy cream', 'Coffee'],
      instructions: "Fill a mixer with ice and add Baileys, Kahlua, Goldshlager, and cream. Shake for 5 seconds and Strain into a double rocks glass filled with ice. Add chilled coffee Stir and enjoy!",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Eye of the Storm",
      ingredients: [ 'Spiced rum', 'Coca-Cola', 'Lime juice'],
      instructions: "Add lime juice, then THE CAPTAIN, then the Coca-Cola. Stir gently so you don't kill the carbonation. Enjoyed most after several weaker drinks.",
      glass: 'vote'
  },

  {
      name: "Nazi Helmet",
      ingredients: [ 'Jägermeister', 'Rumple Minze'],
      instructions: " ",
      glass: 'vote'
  },

  {
      name: "Whoomp",
      ingredients: [ 'Everclear', 'Dark rum', 'Bourbon', 'Vodka', 'Peach schnapps', 'Bourbon', 'Fruit juice', 'Fruit punch'],
      instructions: "Add all the shit into one large cooler or what ever you have that will hold it add one block of ice and mix then consume till it whomps you in the ASS",
      glass: 'vote'
  },

  {
      name: "Jamaican Dust-Buster",
      ingredients: [ 'Rum', 'Pineapple juice', 'Kahlua'],
      instructions: "mix ingredients in a glass and knock off those dust-bunnies",
      glass: 'Shot glass'
  },

  {
      name: "Kir Royale",
      ingredients: [ 'Creme de Cassis', 'Champagne'],
      instructions: "Pour Creme de cassis in glass, gently pour champagne on top",
      glass: 'vote'
  },

  {
      name: "Manhattan",
      ingredients: [ 'Sweet Vermouth', 'Bourbon', 'Angostura bitters', 'Ice', 'Maraschino cherry', 'Orange peel'],
      instructions: "Combine the vermouth, whiskey, bitters and ice in a mixing glass. Stir gently, don't bruise the spirits and cloud the drink. Place the cherry in a chilled cocktail glass and strain the whiskey mixture over the cherry. Rub the cut edge of the orange peel over the rim of the glass and twist it over the drink to release the oils but don't drop it in.",
      glass: 'Cocktail glass'
  },

  {
      name: "Lash",
      ingredients: [ 'Vodka', 'Amaretto', 'Ice', 'Sprite'],
      instructions: "Fill tall glass with ice. add Vodka and Amaretto. Fill remainder of glass with Sprite or 7up",
      glass: 'Highball glass'
  },

  {
      name: "The Extinguisher",
      ingredients: [ 'Vodka', 'Gin', 'Rum', 'Grand Marnier', 'Tia maria', 'Kahlua', 'Sour mix', 'Cranberry juice', 'Beer'],
      instructions: "Combine all alchohol in 12 Oz. glass with ice. Add Sour Mix. Splash Cranberry Juice. Enough to form a layer of red at the top of the glass. Top with foam from draft beer tap.",
      glass: 'vote'
  },

  {
      name: "The James Robert Dean",
      ingredients: [ 'Vodka', 'Dark rum', 'Pepsi Cola', 'Gin', 'Orange soda'],
      instructions: "Makes huge punch.",
      glass: 'vote'
  },

  {
      name: "Jackhammer",
      ingredients: [ 'Bourbon', 'Amaretto'],
      instructions: "Serve over ice- Warning,Deadly!",
      glass: 'vote'
  },

  {
      name: "Midori Sour - Frozen",
      ingredients: [ 'Midori melon liqueur', 'Sour mix', 'Sugar', 'Ice'],
      instructions: "Mix all indredients in a blender with enough ice to freeze. Serve in a tall glass with a lime twist garnish",
      glass: 'Highball glass'
  },

  {
      name: "Flaming Dr. Pepper (alternative)",
      ingredients: [ 'Amaretto', '151 proof rum', 'Lager'],
      instructions: "Put Amaretto in bottom of shot glass, top with Rum. Pour Beer into glass. Light shot, pick up shot by the sides and drop entire shot glass (bottom first) into beer. When bottom of shot glass hits bottom of beer glass chug (the beer will put out the flame).",
      glass: 'Shot glass'
  },

  {
      name: "Flaming Jesse or Tropical SunShine",
      ingredients: [ 'Malibu rum', 'Vodka', 'Irish Cream', 'Orange juice'],
      instructions: "Put all ingredients in a shaker with ice. Shake, strain into a collin's glass. Garnish with an orange slice.",
      glass: 'vote'
  },

  {
      name: "Hurricane Hugo",
      ingredients: [ 'Vodka', 'Amaretto', 'Sloe gin', 'Midori melon liqueur', 'Southern Comfort', 'Orange juice', 'Cranberry juice'],
      instructions: "Mix all ingredients over ice in large Shaker. Add more juice to taste for the lightweights. Shake well and strain into shot glass. This recipe may be doubled or quadrupled. We strongly encourage this. Enjoy!!",
      glass: 'Shot glass'
  },

  {
      name: "Greazy Deigo",
      ingredients: [ 'Zima', '151 proof rum', 'Kool-Aid'],
      instructions: "Empty zima into glass. Then add the 2 shots of 151 rum. next add the Kool-Aid. Mix until a light froth is achieved...and enjoy",
      glass: 'vote'
  },

  {
      name: "L&C",
      ingredients: [ 'Pineapple', 'Pineapple vodka', 'Malibu rum', 'Ice', 'Maraschino cherry'],
      instructions: "Put pineapple in the blender and blend (duh) till smooth. Add vodka, rum, and enough ice to raise the level to five cups. Blend until the ice gets all smashed up. Pour into tall glasses; garnish with the cherry. Drink until YOU get all smashed up.",
      glass: 'Highball glass'
  },

  {
      name: "Harley Davidson #1",
      ingredients: [ 'Irish Cream', 'Midori melon liqueur', 'Jägermeister'],
      instructions: "In a mixing tin add bailys and midori over ice stir and strain into 4oz bucket and top with Jägermeister",
      glass: 'vote'
  },

  {
      name: "Nutty Irishman",
      ingredients: [ 'Irish Cream', 'Frangelico', 'Milk'],
      instructions: "Serve over ice",
      glass: 'vote'
  },

  {
      name: "Vit Ryss",
      ingredients: [ 'Vodka', 'Kahlua', 'Milk'],
      instructions: "Mix everything in a highballglas and add some ice.",
      glass: 'vote'
  },

  {
      name: "Windex",
      ingredients: [ 'Vodka', 'Triple sec', 'Blue Curacao'],
      instructions: "Combine in a mixing glass half-filled with ice cubes. Stir well. Strain into cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Carmel Coke",
      ingredients: [ 'Butterscotch schnapps', 'Coca-Cola', 'Ice'],
      instructions: "Fill a rocker glsa with ice add the Coca-Cola then the schnapps",
      glass: 'vote'
  },

  {
      name: "Modified Duck Fart",
      ingredients: [ 'Crown Royal', 'Irish Cream', 'Kahlua'],
      instructions: "Layer liquors in order listed from top to bottom in shot glass. Drink all at once.",
      glass: 'Shot glass'
  },

  {
      name: "Five dollar shake",
      ingredients: [ 'Midori melon liqueur', 'Peach schnapps', 'Hoopers Hooch'],
      instructions: "Pour all ingredients into pint glass.",
      glass: 'Pint glass'
  },

  {
      name: "Neon Ghost",
      ingredients: [ 'Vodka', 'Pisang Ambon'],
      instructions: "Shake it with ice, and serve it in a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Buttery Nipple #2",
      ingredients: [ 'Butterscotch schnapps', 'Irish cream'],
      instructions: "Pour Butterscotch Schnapps halfway in shot glass. Pour Cream Whiskey down the side of the glass to fill the shot the rest of the way . Object is to float the Irish Cream on the Schnapps",
      glass: 'Shot glass'
  },

  {
      name: "Gold Driver",
      ingredients: [ 'Gold tequila', 'Orange juice', 'Lime', 'Ice'],
      instructions: "Fill a short glass with ice. Pour the Cuervo into glass until about half full (more if you like it like I do). Top off with the Orange Juice. Squeeze a slice of lime into the drink. Enjoy!",
      glass: 'vote'
  },

  {
      name: "Iron Hindu",
      ingredients: [ 'Cognac', 'Vanilla schnapps', 'Apricot brandy', 'Apricot nectar', 'Heavy cream', 'Cardamom'],
      instructions: "Shake with plenty of ice, pour into Hurricaine glasses. Grind a moderate amount of green cardomom on top. (This is extremely important, and gives the drink it's characteristic purfume.) Garnish with fruit, a frilly umbrella, etc.",
      glass: 'Hurricane glass'
  },

  {
      name: "Strawberry Storm",
      ingredients: [ 'Kahlua', 'Strawberry liqueur', 'Pineapple juice', 'Cream'],
      instructions: "Shake all ingredience together except cream. Float cream on top. Garnish with pineapple spear and cherry.",
      glass: 'Hurricane glass'
  },

  {
      name: "Aranov",
      ingredients: [ 'Vodka', 'Orange juice'],
      instructions: "Mix Vodka and Juice in a any kind of bottle.",
      glass: 'vote'
  },

  {
      name: "Grateful Dead #1",
      ingredients: [ 'Tequila', 'Rum', 'Vodka', 'Gin', 'Triple sec', 'Sour mix', 'Razzmatazz'],
      instructions: "Fill Collins Class with Ice. Add all the white alcohol. Add the sour mix. Top off glass with Razzmatazz or Chambourd. Then shake to mix contents. A fruity version of a Long Island Iced Tea",
      glass: 'Collins glass'
  },

  {
      name: "Lemon Drop #1",
      ingredients: [ 'Absolut Citron', 'Lemon', 'Sugar'],
      instructions: "to consume: place sugar on lemon, place in mouth and take shot, then bite down on lemon -enjoy sweet/tart flavor as vodka goes down! YummY!",
      glass: 'Shot glass'
  },

  {
      name: "Sex under the bleachers with a KU cheerleader",
      ingredients: [ 'Vodka', 'Kahlua', 'Sugar', 'Triple sec', 'Kiwi', 'Food coloring', 'Cherry'],
      instructions: "Mix alcoholic ingredients and kiwi in blender, then add the food coloring and stir. Pour into glass and top with cherry.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Pineapple Tea",
      ingredients: [ 'Tequila', 'Rum', 'Vodka', 'Gin', 'Triple sec', 'Sour mix', 'Pineapple juice'],
      instructions: "Fill 12 oz. glass with ice. Add all the alcohol and sour mix. Top off glass with pineapple juice to taste then watch out.",
      glass: 'Collins glass'
  },

  {
      name: "Chocolate Raspberry Delight",
      ingredients: [ 'Irish Cream', 'Chambord raspberry liqueur'],
      instructions: "Serve on ice or blend for a milk shake effect.",
      glass: 'Cordial glass'
  },

  {
      name: "3 Wise Men",
      ingredients: [ 'Bourbon', 'Johnnie Walker', 'Bourbon'],
      instructions: "put them them in a glass... and slam it to tha head.",
      glass: 'Collins glass'
  },

  {
      name: "Mountain Dew #1",
      ingredients: [ 'Beer', '7-Up', 'Midori melon liqueur'],
      instructions: "Fill half beer glass with beer. Fill other half with 7-UP soda (If you have the patience, pour a little of one, then a little of the other, until the glass is full). Fill a shot glass with Melon liqueur. Drop entire shot glass into glass of beer. Immediately drink entire pint of beer with shot glass still inside (do not swallow the shot glass).",
      glass: 'Beer pilsner'
  },

  {
      name: "The Breakfast Drink",
      ingredients: [ 'Vodka', 'Peachtree schnapps', 'Orange juice', 'Chambord raspberry liqueur', 'Collins mix'],
      instructions: "The amount of ingredients can vary depending upon the size of the punch bowl,",
      glass: 'Punch bowl'
  },

  {
      name: "Irish Cream, Home Made",
      ingredients: [ 'Condensed milk', 'Cream', 'Egg', 'Chocolate syrup', 'Rye whiskey'],
      instructions: "Mix all ingredients together in a blender or mix in a bowl with a whisk until fully blended.",
      glass: 'vote'
  },

  {
      name: "Rolf's Scandinavian Glogg",
      ingredients: [ 'Cardamom', 'Cinnamon', 'Cloves', 'Orange', 'Port', 'Red wine', 'Raisins', 'Almond', 'Sugar', 'Brandy'],
      instructions: "take seeds out of cardamom pods, put the seeds and the rest of the spices (1-4) in cheesecloth bag. combine 1qt port, 1qt red wine, raisins and spice bag, simmer for 15-20 minutes. add remaining port, red wine and almonds, heat through (but not hot enough to evaporate remaining alcohol). In another pan, mix sugar with 1/3 of the brandy, light brandy on fire and melt sugar. When sugar is melted add remaining brandy. Then combine with the wine/port mixture. Drink!!!",
      glass: 'Irish coffee cup'
  },

  {
      name: "Lloyd Special",
      ingredients: [ 'Bourbon', 'Grand Marnier'],
      instructions: "Pour into shot glass and shoot it back.",
      glass: 'Shot glass'
  },

  {
      name: "Canadian Funky Electric Cider",
      ingredients: [ 'Canadian whisky', 'Apple cider'],
      instructions: "Place 3/4 oz. of whiskey in an old-fashioned glass. Add 2.5 oz. of optinally warmed Canadian Apple Cider. If served cold, crushed ice is optional.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "The Boiling Panther",
      ingredients: [ 'Spiced rum', 'Dr. Pepper'],
      instructions: "Poor shots into glass. Fill with Dr. Pepper or Mt. Dew and mix. Enjoy.",
      glass: 'vote'
  },

  {
      name: "Jersey Devil",
      ingredients: [ 'Cranberry juice', 'Apple cider', 'Applejack', 'Apple'],
      instructions: "Put cranberry juice in punch bowl. Add apple cider/juice and apple juice brandy to taste. Slice apple in 3/16th",
      glass: 'Punch bowl'
  },

  {
      name: "Galliano Hotshot",
      ingredients: [ 'Galliano', 'Coffee', 'Heavy cream', 'Nutmeg'],
      instructions: "Layer Galliano, then hot coffee, then cream. Sprinkle with a pinch of nutmeg.",
      glass: 'vote'
  },

  {
      name: "Fat Hooker",
      ingredients: [ 'Vodka', 'Peach schnapps', 'Malibu rum', 'Orange juice'],
      instructions: "Pour first three ingredients in a highball glass filled with ice. Fill with orange or pinapple juice, stir well, and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Blue Blazer",
      ingredients: [ 'Whisky', 'Water'],
      instructions: "boil water and whisky in seprate glasses, ignite whisky, slowly mix whisky and water 4-6 times",
      glass: 'Shot glass'
  },

  {
      name: "Tanqueray and Tonic",
      ingredients: [ 'Gin', 'Tonic water', 'Lime'],
      instructions: "Add ice to glass. Fill 2/3 of the way up with Tanqueray Gin, and the remaining 1/3 with tonic water. Add lime.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Grateful Dead #2",
      ingredients: [ 'Vodka', 'Rum', 'Gin', 'Triple sec', 'Chambord raspberry liqueur', 'Sour mix', 'Sprite'],
      instructions: "fill glass with ice. Add each liquor, then pour sour mix to top. stir. splash of 7up or sprite.",
      glass: 'Highball glass'
  },

  {
      name: "Butterfinger",
      ingredients: [ 'Butterscotch schnapps', 'Irish Cream', 'Milk'],
      instructions: "fill glass with ice. pour butterscotch scnapps and bailey's into glass. fill with milk. shake. serve with sip straw.",
      glass: 'Highball glass'
  },

  {
      name: "Dead green frog",
      ingredients: [ 'Rumple Minze', 'Kahlua', 'Green Creme de Menthe', 'Irish Cream', 'Vodka'],
      instructions: "Chill on ice and strain into shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Hot Damn",
      ingredients: [ 'Whiskey', 'Orange juice', 'Rum', 'Vodka'],
      instructions: "shake all ingredients adding less or more orange juice for you preferance of taste. serve in shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Bloody Brain",
      ingredients: [ 'Peach schnapps', 'Irish Cream', 'Grenadine'],
      instructions: "Pour schapps into cordial glass then gently float Bailey's on top. Drip grenadine into glass. It is very important to drip the grenadine one drop at a time for maximum effect.",
      glass: 'Cordial glass'
  },

  {
      name: "Fart In the Ocean",
      ingredients: [ 'Tequila', '7-Up'],
      instructions: "Add tequila and chilled 7-UP to glass, drop in one sweet prune in each glass. Add ice if you wish.",
      glass: 'Highball glass'
  },

  {
      name: "Miami Vice",
      ingredients: [ '151 proof rum', 'Pina colada mix', 'Daiquiri mix'],
      instructions: "First: Mix pina colada with 2.5 oz. of rum with ice(set aside). Second: Mix daiquiri with 2.5 oz. of rum with ice. Third: While frozen, add pina colda mix then daiquiri mix in glass (Making sure they do not get mixed together).",
      glass: 'Cocktail glass'
  },

  {
      name: "AT&T",
      ingredients: [ 'Absolut Vodka', 'Gin', 'Tonic water'],
      instructions: "Pour Vodka and Gin over ice, add Tonic and Stir",
      glass: 'vote'
  },

  {
      name: "69 Special",
      ingredients: [ 'Gin', '7-Up', 'Lemon juice'],
      instructions: "Pour 2 oz. gin. Add 4 oz. 7-up. Add Lemon Juice for flavor. If you are weak, top up glass with more 7-Up.",
      glass: 'vote'
  },

  {
      name: "Machine",
      ingredients: [ 'Orange juice', 'Vodka'],
      instructions: "Add the orange juice in the glass so it fills it about 1/3. Then take a napkin and put it over the glass pushing it down toward the juice. Push napkin down as far as it can go without touching the juice. Next pour the vodka very slowly so it dribbles on top of the juice. This will create a layer of vodka that lays on top of the juice because of the different densities of the liquids.",
      glass: 'Shot glass'
  },

  {
      name: "Golden Eye",
      ingredients: [ 'Irish Cream', 'Goldschlager', 'Nuts'],
      instructions: "pour 1 oz of goldshlager shapps then pour in the baileys. This is a layered drink with the baileys on the bottom. Garnish with a nut in the middle of the drink.",
      glass: 'Highball glass'
  },

  {
      name: "Joe Cocker",
      ingredients: [ 'Amaretto', 'Southern Comfort', 'Crown Royal', 'Bourbon'],
      instructions: "Put all into a Shot Glass",
      glass: 'Shot glass'
  },

  {
      name: "Nuts and Berries #1",
      ingredients: [ 'Chambord raspberry liqueur', 'Frangelico', 'Milk'],
      instructions: "In a ice filled mixing cup add all ingredients and shake well, pour into cocktail glass, garnish with berries in season",
      glass: 'Cocktail glass'
  },

  {
      name: "John's Bomb",
      ingredients: [ 'Tequila', 'Benedictine', 'Orange', 'Cinnamon'],
      instructions: "pour very cold tequila with Benedictine in a shot glass.You serve it with a slice of orange that has cinnamon on it nad kalo methisi(that was Greek)",
      glass: 'Shot glass'
  },

  {
      name: "Long Island Iced Tea #4",
      ingredients: [ 'Triple sec', 'Absolut Vodka', 'Gold tequila', '151 proof rum', 'Gin', 'Sweet and sour', 'Pepsi Cola'],
      instructions: "Mix all liquors and sweet and sour and top off with Pepsi Cola. Stir and Serve with a Lemon wheel.",
      glass: 'Collins glass'
  },

  {
      name: "South Side",
      ingredients: [ 'Vodka', 'Triple sec', 'Lime juice', 'Ice', 'Mint', 'Soda water'],
      instructions: "Add all ingredients to blender including one mint leaf as it will be blended up and leave little specks at top of drink. After drink is complete add other whole mint leaves. A lime wedge can also be added. Amount of soda water should fluxuate according to how strong the lemon-lime solution is.",
      glass: 'Collins glass'
  },

  {
      name: "Cherry Martinsen",
      ingredients: [ 'Cherry brandy', 'Coca-Cola'],
      instructions: "Pour in the brandy and then the coke, biatch. Hold up the glass and say dude. Enjoy dude.",
      glass: 'vote'
  },

  {
      name: "Pink Police",
      ingredients: [ 'Beer', 'Pink lemonade', 'Vodka'],
      instructions: "In a pitcher add one can of beer. Next add one can of frozen pink lemonade. Note: do not mix the lemonade with water. Finally use the empty lemonade container to measure and add the vodka. Stir and enjoy.",
      glass: 'Pitcher'
  },

  {
      name: "French Pirate",
      ingredients: [ 'Orange Curacao', 'Dark rum', 'Champagne'],
      instructions: "Pour Orange curacao into champagne flute, add Dark rum, top off with Champagne, I recommend Brut",
      glass: 'Champagne flute'
  },

  {
      name: "Bushwacker #3",
      ingredients: [ 'Light rum', 'Dark rum', 'Kahlua', 'Half-and-half', 'Cream of coconut', 'Ice'],
      instructions: "Put all contents in a blender and blend until smooth. Ice-cream can be substituted for the half-and-half",
      glass: 'Hurricane glass'
  },

  {
      name: "Four Horsemen",
      ingredients: [ 'Gold tequila', 'Jägermeister', 'Rumple Minze', '151 proof rum'],
      instructions: "Pour contents in shaker over ice and shake well. Pour into glass. This is a big shooter so you have to use a small rocks glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Dublin Doubler",
      ingredients: [ 'Irish whiskey', 'Irish cream', 'Ice'],
      instructions: "Mix irish whiskey, irish cream, and ice cubes. Shake to chill. Serve with or without the ice, it is very good either way.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Irish Coffee (Simple)",
      ingredients: [ 'Irish whiskey', 'Coffee', 'Sugar', 'Whipped cream'],
      instructions: "Start with sugar in the empty glass. Next pour in the whiskey, followed by the coffee. Stir till sugar is disolved, let mixture settle. Float whipped cream on top. Curl up in front of the fireplace with J. Joyce and enjoy!",
      glass: 'Irish coffee cup'
  },

  {
      name: "Kahlua Fudge Shake",
      ingredients: [ 'Kahlua', 'Ice-cream', 'Milk', 'Ice'],
      instructions: "Just like making a milk shake, but add the Kahlua. This drink is very rich, but it tastes great. We invented it one summer day!!",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Afterburner #2",
      ingredients: [ 'Vodka', 'Tabasco sauce'],
      instructions: "pour 1 shot a vodka pour 1/2 shot of Tobasco sauce in seperate shot glass (take vodka shot immediately followed by the Tobasco shot) ***amount can be changed to liking",
      glass: 'Shot glass'
  },

  {
      name: "Mocha Mint Irish Cream Cappuccino",
      ingredients: [ 'Chocolate syrup', 'White Creme de Menthe', 'Creme de Cacao', 'Irish cream', 'Espresso', 'Milk', 'Whipped cream'],
      instructions: "By adding the steamed milk last, the ingredients mix well. Make sure to stir all of the chocolate from the bottom of glass.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Ersh",
      ingredients: [ 'Vodka', 'Beer'],
      instructions: "Take 1 part Vodka and shake well with 1 part of Best beer you know.",
      glass: 'Punch bowl'
  },

  {
      name: "Ekatherina Andreevna",
      ingredients: [ 'Vodka', 'Bourbon', 'Orange juice'],
      instructions: "Always put ice in glass first to cool the mixers when they are poured.",
      glass: 'Cocktail glass'
  },

  {
      name: "Crack Juice",
      ingredients: [ 'Vodka', 'Beer', 'Lime juice'],
      instructions: "In a large container, fill half way with ice. Pour in all contents and mix well. You are ready to serve.",
      glass: 'Punch bowl'
  },

  {
      name: "Screaming Orgasm II",
      ingredients: [ 'Amaretto', 'Irish Cream', 'Vodka'],
      instructions: "Stir together and serve over ice",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Sex on the Beach #3",
      ingredients: [ 'Vodka', 'Triple sec', 'Apple schnapps', 'Peach schnapps', 'Southern Comfort', 'Orange juice', '7-Up', 'Grenadine'],
      instructions: "Mix all ingredients in a pitcher of ice to chill, adding just enough grenadine to color pink. Add more or less OJ and 7-up to achieve desired strength. Strain into bottle to serve as shooters or serve the whole pitcher with a number of straws for a group to slurp down at the same time!!",
      glass: 'Shot glass'
  },

  {
      name: "Burning Nazi",
      ingredients: [ 'Jägermeister', 'Rumple Minze'],
      instructions: "Keep bottles chilled or mix over ice and strain into shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Spicey Scot",
      ingredients: [ 'Butterscotch schnapps', 'Spiced rum', 'Hot chocolate', 'Whipped cream'],
      instructions: "Add equal parts of liqeuer to hot chocolate or cocoa and top with whipped cream and shave chocolate, cinnamon or nutmeg.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Apple Pie Shot #1",
      ingredients: [ 'Apple juice', 'Vodka', 'Cinnamon'],
      instructions: "Pour one shot of Apple Juice and another of Vodka. Sprinkle cimmamon on the tougue and pour both shots into your mouth. Without drinking, shake your head until cimmamon is dissovled and drink. (Repeat if nessesary....or unconscious on the floor.)",
      glass: 'Shot glass'
  },

  {
      name: "Fuzzy Navel",
      ingredients: [ 'Peach schnapps', 'Orange juice', 'Lemonade'],
      instructions: "Mix all ingredients into glass, top with ice.",
      glass: 'White wine glass'
  },

  {
      name: "Chocolate Chip",
      ingredients: [ 'Creme de Cacao', 'Dark Creme de Cacao', 'Irish cream', 'Milk'],
      instructions: "Half fill shaker with ice. Add liquers and top with milk. Shake and pour over ice.",
      glass: 'Cocktail glass'
  },

  {
      name: "Tequillya",
      ingredients: [ 'Tequila', 'White rum', 'Vodka', 'Margarita mix'],
      instructions: "Pour ingredients together into glass, over ice. Mix well. Serve with lime and salted glass if desired.",
      glass: 'Collins glass'
  },

  {
      name: "Whiskey Sour Old-Fashioned",
      ingredients: [ 'Whiskey', 'Sour mix', 'Maraschino cherry juice', 'Bitters'],
      instructions: "Mix Whiskey, Bitters, and Cherry Juice in a ice-filled cocktail class, and fill the remaining class with sour. Garnish with olives or mushrooms and use a stir stick to mix and your mouth and taste buds to enjoy.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Toolkit",
      ingredients: [ 'Creme de Cacao', 'Irish cream', 'Amaretto', 'Kahlua'],
      instructions: "Mix all ingredients and pour into shot glasses. Slam it!!",
      glass: 'Shot glass'
  },

  {
      name: "Big Red Hooter",
      ingredients: [ 'Tequila', 'Amaretto', 'Pineapple juice', 'Grenadine'],
      instructions: "Pour tequila and amaretto over ice into collins glass. Fill with pineapple juice and top with grenadine. Garnish with a cherry and serve with a straw.",
      glass: 'Collins glass'
  },

  {
      name: "Catalina Margarita",
      ingredients: [ 'Tequila', 'Peach schnapps', 'Blue Curacao', 'Sour mix'],
      instructions: "Shake with cracked ice and strain into chilled cocktail or margarita glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sloe Tequila",
      ingredients: [ 'Tequila', 'Sloe gin', 'Lime juice'],
      instructions: "Combine ingredients with a half-cup of crushed ice in blender. Blend at low speed and pour into old-fashioned glass. Add ice cubes and twist of cucumber peel.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Wild Thing",
      ingredients: [ 'Tequila', 'Cranberry juice', 'Club soda', 'Lime juice'],
      instructions: "Pour over ice into old-fashioned glass. Garnish with a lime wheel.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Fraustadt",
      ingredients: [ 'Absolut Vodka', 'Triple sec', 'Midori melon liqueur', 'Lemon juice'],
      instructions: "Fill the Boston shaker with all the ingridiens and a lot of icecubes, then shake untill your hands goes into hypothermia. Pour up in a highball glas and put a lemonslice on the edge.",
      glass: 'Highball glass'
  },

  {
      name: "Mudwrestle",
      ingredients: [ 'Tia maria', 'Vodka', 'Creme de Cacao', 'Irish Cream'],
      instructions: "mix in shaker, serve over lots of ice",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Blue Tahoe",
      ingredients: [ 'Blue Curacao', 'Tequila', 'Lime juice', 'Lemon', 'Orange', 'Ice', 'Cherry', 'Mint', 'Champagne'],
      instructions: "Put all ingredients in together followed by the champagne last",
      glass: 'Highball glass'
  },

  {
      name: "Pineapple Bomb",
      ingredients: [ 'Southern Comfort', 'Triple sec', 'Pineapple juice'],
      instructions: "Combine all ingredients in a shaker with ice. Optional splash of 7up or Sprite can be added... Shake Until condensation forms on outside of shaker Strain into shot glasses",
      glass: 'Shot glass'
  },

  {
      name: "Fin N' Tonic",
      ingredients: [ 'Gin', 'Peppermint schnapps', 'Tonic water'],
      instructions: "mix ingredients and serve over ice.",
      glass: 'vote'
  },

  {
      name: "Kurant",
      ingredients: [ 'Absolut Kurant', 'Schweppes Russchian', 'Ice'],
      instructions: "Put some icecubes into a highball glass. Pour Absolut Kurant in the glass and fill up with Russian. Add a straw. Drink.",
      glass: 'Highball glass'
  },

  {
      name: "'57 Chevy with a White License Plate",
      ingredients: [ 'Creme de Cacao', 'Vodka'],
      instructions: "1. Fill a rocks glass with ice 2.add white creme de cacao and vodka 3.stir",
      glass: 'Highball glass'
  },

  {
      name: "Desert Water",
      ingredients: [ 'Tabasco sauce', 'Tequila'],
      instructions: "Use a spoon when You pour the Tequila into the glass, so it doesn't mix with the Tabasco",
      glass: 'Shot glass'
  },

  {
      name: "Cape Cod Crush",
      ingredients: [ 'Southern Comfort', 'Cranberry juice', 'Ice'],
      instructions: "Blend the Southern Comfort, cranberry juice, and ice in a blender. Pour and serve.",
      glass: 'Mason jar'
  },

  {
      name: "Sweet Flower",
      ingredients: [ 'Peach liqueur', 'Orange juice', 'Lemon juice', 'Grenadine'],
      instructions: "1. Shake all ingredients. 2. pour into cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sweet Temptation",
      ingredients: [ 'Triple sec', 'Peachtree schnapps', 'Sprite', 'Sour mix', 'Ice', 'Lime'],
      instructions: "Fill a Higball glass 2/3 with ice cubes. build the alcoholic and the sprite into the glass. The sour mix on top as a fizz.(shaken/mixed). Served with straw and a slice of citrus on top.",
      glass: 'Highball glass'
  },

  {
      name: "Violent fuck",
      ingredients: [ 'Curacao', 'Sloe gin', 'Sour mix', 'Orange juice', 'Ice'],
      instructions: "Fill highball glass with ice, add 1oz. curaco 1/2oz sloe gin fill 1/2 sour mix, 1/2 oj blend for 2 secs, garnish with cherry",
      glass: 'Highball glass'
  },

  {
      name: "Fuzzy Chartreuse",
      ingredients: [ 'Midori melon liqueur', 'Ginger ale', 'Ice'],
      instructions: "Fill Glass half full with crushed ice Add Midori Then fill glass the rest of the way full with Ginger Ale This should result in a Chartreuse colored drink. Add more Midori to your taste.",
      glass: 'Hurricane glass'
  },

  {
      name: "Chapman",
      ingredients: [ 'Pisang Ambon', 'Milk'],
      instructions: "Take the pisang ambon in the glas, and then the milk. Then shake it... Enjoy...!",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Bloody O.J.",
      ingredients: [ 'Bourbon', 'Orange juice', 'Tomato juice', 'Soda water', 'Ice'],
      instructions: "Pour the ingredients in a glass, stir.",
      glass: 'Highball glass'
  },

  {
      name: "Dead Dog Vomit",
      ingredients: [ '151 proof rum', 'Tequila', 'Jägermeister'],
      instructions: "In a high-ball glass add 0ne shot of 151 rum and then layer each if the other ingredents on top.",
      glass: 'Highball glass'
  },

  {
      name: "Stabilizer",
      ingredients: [ '151 proof rum', 'Rumple Minze'],
      instructions: "Chill the Rumple Minze until VERY cold. Then pour over the 151 in a shot glass. They will not layer, so don't try it. Then drink the shot quickly...don't waste time smelling the shot or sipping it...just drink it. The sit back and enjoy!",
      glass: 'Shot glass'
  },

  {
      name: "Mother's Milk",
      ingredients: [ 'Goldschlager', 'Butterscotch schnapps', 'Milk'],
      instructions: "Shake over ice, strain. Serves two.",
      glass: 'Shot glass'
  },

  {
      name: "The Triple",
      ingredients: [ 'Vodka', 'Jägermeister', 'Goldschlager'],
      instructions: "Straight out of the freezer, pour into a double shot glass the vodka, then Jägermeister, then Goldschlager.",
      glass: 'Shot glass'
  },

  {
      name: "Sinfonian",
      ingredients: [ 'Kahlua', 'Grenadine', 'Grand Marnier'],
      instructions: "In the Shot Glass, layer equal parts of each Liquer, the Grenadine on the bottom, the Kahlua in the middle, and the Grand Marnier on top. This creates red, Black, and Gold Layers.",
      glass: 'Shot glass'
  },

  {
      name: "Dickhead's Delight",
      ingredients: [ 'Kahlua', 'Rum', 'Chocolate milk', 'Cinnamon', 'Whipped cream'],
      instructions: "Mix liquor and chocolate milk in a higball glass, then top with whipped cream and cinnamon.",
      glass: 'Highball glass'
  },

  {
      name: "Kilted Black Leprechaun",
      ingredients: [ 'Irish Cream', 'Malibu rum', 'Drambuie'],
      instructions: "Layer ingredients in the glass, in the following order: Baileys first, Malibu next, Drambuie last Serve with a smile (to placate the Leprechauns), wearing no underwear (och!), and thinking of sex (mon). Glug. Whee!",
      glass: 'Shot glass'
  },

  {
      name: "Irish Monk #2",
      ingredients: [ 'Irish Cream', 'Frangelico', 'Brandy'],
      instructions: "Pour ingredients into the shot glass in the following order: - Baileys first, - Frangelico next, - Brandy on top.",
      glass: 'Shot glass'
  },

  {
      name: "Zippy's Revenge",
      ingredients: [ 'Amaretto', 'Rum', 'Kool-Aid'],
      instructions: "Mix Kool-Aid to taste then add Rum and ammaretto. shake well to disolve the sugar in the Kool-Aid... serve cold",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Sangrita",
      ingredients: [ 'Tequila', 'Clamato juice', 'Tabasco sauce', 'Worcestershire sauce'],
      instructions: "Fill one shooter with Tequila. Take a second shot glass and fill it with clamato. Then add a couple drops of tabasco and worchestershire sauce. Shoot the tequila and chase it with the second shot. Enjoy!",
      glass: 'Shot glass'
  },

  {
      name: "Coco Cognac",
      ingredients: [ 'Cognac', 'Tia maria', 'Milk'],
      instructions: "Pour the ingredients in a shaker with ice cubes, shake, and pour in a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Belgian Blue",
      ingredients: [ 'Vodka', 'Coconut liqueur', 'Blue Curacao', 'Sprite'],
      instructions: "Just pour all ingredients in the glass and stir...",
      glass: 'Highball glass'
  },

  {
      name: "B-52 #3",
      ingredients: [ 'Kahlua', 'Irish Cream', 'Triple sec'],
      instructions: "Layer the three ingredients in that order. And, I am terrible sorry, this is the only way to make a B-52 the right way.",
      glass: 'Shot glass'
  },

  {
      name: "Black and White",
      ingredients: [ 'Kahlua', 'Milk'],
      instructions: "Stir the ingredients with and and pour into a well-chilled cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Pure White Evil",
      ingredients: [ 'Everclear', 'Rum', 'Vodka', 'Whisky', 'Lemon juice', 'Lemon'],
      instructions: "Mix toghter, light, drink, wake up in bed.",
      glass: 'Pitcher'
  },

  {
      name: "Evil Slider",
      ingredients: [ 'Vodka', 'Iced tea'],
      instructions: "Mix well",
      glass: 'Beer pilsner'
  },

  {
      name: "Screaming Orgasm (San Francisco Style)",
      ingredients: [ 'Irish Cream', 'Triple sec', 'Cognac'],
      instructions: "Simply mix then add ice.",
      glass: 'vote'
  },

  {
      name: "Gladiator",
      ingredients: [ 'Amaretto', 'Southern Comfort', 'Orange juice', '7-Up'],
      instructions: "Mix 1/2 oz Amaretto with 1/2 oz Southern Comfort. Drop into glass of 2 oz orange juice mixed with 2 oz 7-up.",
      glass: 'Highball glass'
  },

  {
      name: "Hard Green Bricaki",
      ingredients: [ 'Absolut Citron', 'Malibu rum', 'Midori melon liqueur', 'Lime juice', 'Pineapple juice', 'Lime'],
      instructions: "Fill glass with ice and add liquors. Add a dash of lime juice. Fill to top with pineapple juice. Shake well and serve. Garnish with a slice of lime and a cherry.",
      glass: 'Hurricane glass'
  },

  {
      name: "Red Snapper",
      ingredients: [ 'Crown Royal', 'Amaretto', 'Cranberry juice'],
      instructions: "One shot each, shake n shoot",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Shamrocks",
      ingredients: [ 'Blue Curacao', 'Vodka', 'Orange juice'],
      instructions: "Mix equal parts Curacao and Vodka and and O.J for a Light Green color. Erin Go Bragh!!",
      glass: 'Beer mug'
  },

  {
      name: "Russian Qualude",
      ingredients: [ 'Vodka', 'Kahlua', 'Irish cream', 'Frangelico', 'Cream'],
      instructions: "Pour alchol over ice, top with milk, stir and serve",
      glass: 'Highball glass'
  },

  {
      name: "Triple Asp",
      ingredients: [ 'Absolut Vodka', 'Absolut Citron', 'Absolut Kurant', 'Sprite'],
      instructions: "Poor the ingredients in a glass. Ice if preffered. Drink it on a hot summer-night.",
      glass: 'Highball glass'
  },

  {
      name: "Jamaica Kiss",
      ingredients: [ 'Coffee liqueur', 'Light rum', 'Ice', 'Milk'],
      instructions: "Fill a tumbler with ice cubes. Add a shot of Tia Maria and a shot of Jamaican light rum. Fill the tumbler with milk. Blend until smooth and serve immediately.",
      glass: 'Hurricane glass'
  },

  {
      name: "PEZ",
      ingredients: [ 'Spiced rum', 'Chambord raspberry liqueur', 'Sour mix'],
      instructions: "mix all three ingredients together over ice in tumbler. shake well. for shot, strain ice. for drink, retain ice. adjust sour mix ratio to taste.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Robyn",
      ingredients: [ 'Vodka', 'Schweppes Russchian', 'Lime juice', 'Carbonated soft drink'],
      instructions: "Pour the vodka into a highballglass, add russian 'til the glass is a little more than half-full, fill up with fruitsoda and top it with a drop of lime juice.",
      glass: 'Highball glass'
  },

  {
      name: "White Spider #1",
      ingredients: [ 'Vodka', 'White Creme de Menthe'],
      instructions: "Pour over lots of ice.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Copenheering",
      ingredients: [ 'Cherry Heering', 'Vodka', 'Lemon peel'],
      instructions: "Mix Cherry Heering and vodka and pour into a ice cold glass filled with crushed ice. Garnish with a twist of lemon peel.",
      glass: 'Cocktail glass'
  },

  {
      name: "Squashed Frog",
      ingredients: [ 'Midori melon liqueur', 'Advocaat', 'Irish Cream', 'Grenadine'],
      instructions: "Pour Midori then Advocaat in glass. Add a few dashes of grenadine and then float Bailey's on top.",
      glass: 'Shot glass'
  },

  {
      name: "Absolut Summertime",
      ingredients: [ 'Absolut Citron', 'Sweet and sour', 'Sprite', 'Soda water', 'Lemon'],
      instructions: "Add all ingredients except lemon to shaker filled with ice. Cover and shake vigorously. Strain contents into ice filled collins glass. Garnish with lemon.",
      glass: 'Collins glass'
  },

  {
      name: "The Jack Hammer",
      ingredients: [ 'Bourbon', 'Gold tequila'],
      instructions: "Pour both shots into one shot glass, straight up!",
      glass: 'Shot glass'
  },

  {
      name: "Paralyzer #1",
      ingredients: [ 'Tequila', 'Vodka', 'Kahlua', 'Light cream', 'Coca-Cola'],
      instructions: "Built in a 8-10 oz zombie or collins glass,over ice .First add the tequila, vodka & kahlua.fill glass 1/2 full with coke,then top with light cream or milk.There is no garnish. but stir gently with straw.",
      glass: 'Collins glass'
  },

  {
      name: "Pink Panther #2",
      ingredients: [ 'Vodka', 'Lime', 'Grape soda'],
      instructions: "Add all the ingredients into the glass, and stir for a moment.",
      glass: 'Cocktail glass'
  },

  {
      name: "Red Alert",
      ingredients: [ 'Tequila', 'Banana liqueur', 'Sloe gin', 'Sweet and sour'],
      instructions: "Shake all ingredients together and serve",
      glass: 'Highball glass'
  },

  {
      name: "The Terminator",
      ingredients: [ 'Jägermeister', 'Southern Comfort'],
      instructions: "Pour in your favorite shot glass and enjoy. Ahh... so smoothe!",
      glass: 'Shot glass'
  },

  {
      name: "San Juan Tea",
      ingredients: [ 'Bacardi Limon', '151 proof rum', 'Sour mix', 'Coca-Cola'],
      instructions: "Shake liquor and sour mix. Garnish with lemon wedge.",
      glass: 'Collins glass'
  },

  {
      name: "Smooth Sailin'",
      ingredients: [ 'Cranberry juice', 'Ginger ale', 'Lemonade', 'Bourbon'],
      instructions: "Mix all ingredients in a medium-sized bowl. Freeze in small airtight containers. To serve, remove from freezer and let thaw about 10 minutes. Scrape or scoop into stemmed glasses. Serve with straws, if desired. Makes 14 six-ounce drinks.",
      glass: 'vote'
  },

  {
      name: "Buzzer's red cream soda",
      ingredients: [ 'Light rum', 'Gin', 'Vodka', 'Yukon Jack', 'Triple sec', 'Grenadine', 'Lemonade', 'Ice'],
      instructions: "Place crushed ice in blender (at least 5 cup size) Add other ingredients in order given (alcohol first) Blend until ice crystals are thoroughly mixed and drink turns red.",
      glass: 'Hurricane glass'
  },

  {
      name: "Formula 3",
      ingredients: [ 'White rum', 'Rum', 'Vodka', 'Grenadine', 'Blue Curacao', 'Lemonade'],
      instructions: "Add the 2 rums and vodka together in a beer mug. Then add the other 2 ingredients to it. Then top off the beer mug with lemonade.",
      glass: 'Beer mug'
  },

  {
      name: "Leg spreader",
      ingredients: [ 'Tequila', 'Vodka', 'Gin', 'Rum'],
      instructions: "Mix in glass and enjoy",
      glass: 'Highball glass'
  },

  {
      name: "Gorilla Milk",
      ingredients: [ 'Ice', 'Vodka', 'Dark Creme de Cacao', 'Milk'],
      instructions: "Shake and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Golden Miller",
      ingredients: [ 'Amaretto', 'Grand Marnier', 'Creme de Cacao', 'Orange juice'],
      instructions: "Mix above ingred. together with LOTS of crushed ice. Enjoy!",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Cosmopolitan Martini",
      ingredients: [ 'Triple sec', 'Vodka', 'Lime', 'Cranberry juice'],
      instructions: "Pour all ingredients in mixing glass half filled with ice, shake and strain into chilled Martini glass.",
      glass: 'vote'
  },

  {
      name: "Strawberry Surprise",
      ingredients: [ 'Ice', 'Light rum', 'Strawberry syrup', 'Pina colada mix', 'Sprite'],
      instructions: "Add ice and shots in a hurricane or other tall glass. Add 1/2 of the sprite. Shake Well Add rest of sprite. Finished ingredient should look similar to pink lemonade. Enjoy!",
      glass: 'Hurricane glass'
  },

  {
      name: "Rensselaer Slam",
      ingredients: [ 'Coffee', 'Irish cream', 'Coffee brandy', 'Rum'],
      instructions: "Mix liquor with hot coffee.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Firetruck",
      ingredients: [ 'Jägermeister', 'Ginger ale'],
      instructions: "Serve in a Shotglass, and toss it straight down.",
      glass: 'Shot glass'
  },

  {
      name: "Brevann (Springwater)",
      ingredients: [ 'Vodka', 'Banana liqueur', 'Sour mix', '7-Up'],
      instructions: "Everything goes in a highballglass with ice. Pour Seven Up or Sprite on the top Garnish with lemon and some other fresh fruit. Drink with a straw",
      glass: 'Highball glass'
  },

  {
      name: "Carrot Cake #1",
      ingredients: [ 'Goldschlager', 'Irish Cream', 'Coffee liqueur'],
      instructions: "Fill highball glass with ice. Place a tsp. (float) of Goldschlager in glass. Fill rest of glass with Irish Creme and Coffee Liqueur. Shake. Pour into shot glasses.",
      glass: 'Shot glass'
  },

  {
      name: "Dit Kicker",
      ingredients: [ 'Fruit punch', 'Vodka', 'Peach schnapps', 'Lemon juice'],
      instructions: "Pour the fruit punch into a glass. Add the Vodka and Schnapps. The correct amount of lemon juice all depends on personal preference. A couple of splashes is a good mix to start with.",
      glass: 'vote'
  },

  {
      name: "Slimer",
      ingredients: [ 'Spiced rum', 'Surge'],
      instructions: "Add liquer first. Use a glass beverage container to highlight the the green color.",
      glass: 'vote'
  },

  {
      name: "Reynolds Special",
      ingredients: [ 'Gin', 'Grapefruit juice', 'Ice', 'Tonic water'],
      instructions: "In a tall glass pour a generous shot or two of gin and a roughly equal amount of grapefruit juice add plenty of ice fill with tonic (preferably diet) lime twist is optional",
      glass: 'Highball glass'
  },

  {
      name: "Carrot Cake #2",
      ingredients: [ 'Irish Cream', 'Butterscotch schnapps', 'Cinnamon schnapps'],
      instructions: "Fill mixing cup up with ice Add ingredients Shake and strain",
      glass: 'Shot glass'
  },

  {
      name: "Woody Woodpecker",
      ingredients: [ 'Cachaca', 'Orange juice', 'Galliano', 'Ice'],
      instructions: "Shake Cachaca and juice with ice. Fill it in the glas. Add Galiano.",
      glass: 'Collins glass'
  },

  {
      name: "Ziemes Martini Apfelsaft",
      ingredients: [ 'Vermouth', 'Apple juice'],
      instructions: "Serve without ice. At least the juice shold have room temperature.",
      glass: 'vote'
  },

  {
      name: "Pitbull on Crack #1",
      ingredients: [ 'Gold tequila', 'Jägermeister', 'Bourbon', '151 proof rum'],
      instructions: "chill and serve",
      glass: 'Shot glass'
  },

  {
      name: "Bullshot",
      ingredients: [ 'Vodka', 'Beef bouillon', 'Ice', 'Salt', 'Black pepper'],
      instructions: "Combine the ice, vodka and beef boullion in a mixing glass, add salt and pepper to taste. Stir. Strain into a chilled wineglass.",
      glass: 'White wine glass'
  },

  {
      name: "Salty Dog #2",
      ingredients: [ 'Grapefruit juice', 'Vodka', 'Powdered sugar', 'Ice'],
      instructions: "Combine the grapefruit juice, vidka sugar and 4 or 5 ice cubes in a mixing glass, and stir gently with a bar spoon to dissolve the sugar and combine the ingredients. Strain into a chilled wineglass. Add 1 ice cube to the wineglass if desired.",
      glass: 'White wine glass'
  },

  {
      name: "Fiery Balls of Death",
      ingredients: [ '151 proof rum', 'Everclear', 'Triple sec'],
      instructions: "Pour the shit in the shot glass. Light on fire, pray for your life and down it.",
      glass: 'Shot glass'
  },

  {
      name: "Vodka Martini",
      ingredients: [ 'Vodka', 'Dry Vermouth', 'Olive'],
      instructions: "Shake the vodka and vermouth together with a number of ice cubes, strain into a cocktail glass, add the olive and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "KiBa",
      ingredients: [ 'Cherry juice', 'Banana'],
      instructions: "Pour all ingredients into a highball glass over ice cubes and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Passion Chi-Chi",
      ingredients: [ 'Vodka', 'Passion fruit juice', 'Coconut milk', 'Sugar', 'Ice'],
      instructions: "Mix all ingredients together in a mixer, and then put them in a glass with all ice.",
      glass: 'vote'
  },

  {
      name: "Volga Boatman",
      ingredients: [ 'Orange', 'Vodka', 'Kirschwasser', 'Ice'],
      instructions: "Combine the orange juice, vodka and kirsch in a mixing glass and add the ice cubes. Place a shaker on top of the glass and, grasping them firmly together with both hands, shake vigorously. Remove the shaker and strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Shark Bite",
      ingredients: [ 'Spiced rum', 'Light rum', 'Blue Curacao', 'Sour mix', 'Grenadine'],
      instructions: "Fill a shaker with ice. Add the spiced rum, light rum, sour, and blue curacco. Shake the ingredients well. Strain into a rocks glass. Garnish with three drops of grenadine.",
      glass: 'Shot glass'
  },

  {
      name: "Honolulu Cooler",
      ingredients: [ 'Lime', 'Southern Comfort', 'Pineapple juice'],
      instructions: "Pack a tall glass with crushed ice, add lime juice and southern comfort. Fill with pineapple juice and stir.",
      glass: 'Highball glass'
  },

  {
      name: "Pepper Slammer",
      ingredients: [ 'Southern Comfort', 'Dr. Pepper'],
      instructions: "add southern comfort to glass with ice. fill with dr. pepper pop.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Cafe Savoy",
      ingredients: [ 'Coffee', 'Milk', 'Triple sec', 'Brandy'],
      instructions: "Fill mug almost to top with coffee.Add milk, triple sec and brandy. Stir.",
      glass: 'Coffee mug'
  },

  {
      name: "Pearl Harbour",
      ingredients: [ 'Vodka', 'Midori melon liqueur', 'Pineapple juice'],
      instructions: "Straight with ice.",
      glass: 'Highball glass'
  },

  {
      name: "Fireball",
      ingredients: [ 'Cinnamon schnapps', 'Tabasco sauce'],
      instructions: "Pour the cinnamon schnapps in shot glass and add the dash of Tabasco Sauce. Then shoot.",
      glass: 'Shot glass'
  },

  {
      name: "Italian Ice",
      ingredients: [ 'Vodka', 'Blue Curacao', 'Chambord raspberry liqueur', 'Sour mix', '7-Up'],
      instructions: "Shake Well - Do not stir. Best if served with crushed ice.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Barcardi Volcano",
      ingredients: [ 'Lime', 'Coca-Cola', '151 proof rum', 'Everclear'],
      instructions: "Put the juice of 1/2 Lime in glass, then pour in cola and barcardi dark. Top up with Everclear. Light. Figure out how to drink it!",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Hot Shot",
      ingredients: [ 'Coffee', 'Galliano', 'Whipped cream'],
      instructions: "Pour the hot coffee in the shot glass and gently add the Galliano, so it floats on the coffee. Then add some lightly whipped cream over it.",
      glass: 'Shot glass'
  },

  {
      name: "Irish Coffee #3",
      ingredients: [ 'Orange peel', 'Lemon peel', 'Cloves', 'Cinnamon', 'Sugar', 'Irish whiskey', 'Coffee', 'Powdered sugar', 'Whipped cream'],
      instructions: "Stud the strips of orange and lemon peel with 2 cloves each and place them in a frying pan or chafing dish with the stick of cinnamon and the 2 teaspoons of sugar. Place over moderate heat, stirring occationally with a wooden spoon, until the sugar has melted. Pour the Irish Whiskey into the pan and light a match to the liquid. (Be sure to step back since the flame will flare up instantly.) Shake the pan to and fro slowly until the flame dies out. Pour in the hot coffee all at once and let it come to a simmer. Remove from the heat. Rub the cut edge of a strip of lemon peel around the inside of each the irish coffee cup and dip it into a dish of caster sugar so that the sugar adheres to the inside rim. Pour in the coffee, trying not to disturb the sugar. Top each serving with a dollop of whipped cream.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Snowball",
      ingredients: [ 'Advocaat', 'Lemonade', 'Lemon', 'Ice'],
      instructions: "Place one ice cube in the glass and add 1 1/2 oz of Advocaat. Fill up the glass with lemonade and decorate with a slice of lemon. Serve at once.",
      glass: 'Highball glass'
  },

  {
      name: "Cokaretto",
      ingredients: [ 'Amaretto', 'Coca-Cola'],
      instructions: "Fill tall glass with ice. Pour Coca-Cola into glass. Add amaretto and stir. Drink with straw.",
      glass: 'Cocktail glass'
  },

  {
      name: "Tripple Pleasure",
      ingredients: [ 'Vodka', 'Tequila', 'Yukon Jack', 'Cranberry juice', 'Orange juice', 'Pineapple juice'],
      instructions: "dump it in a glass of ice and enjoy",
      glass: 'Highball glass'
  },

  {
      name: "Robot",
      ingredients: [ 'Bourbon', 'Absolut Vodka', 'Grenadine'],
      instructions: "Mix well, add ice last. Serves two normal people or one alcoholic.",
      glass: 'Highball glass'
  },

  {
      name: "Green Orange",
      ingredients: [ 'Pisang Ambon', 'Orange juice'],
      instructions: "Pour the Pisang Ambon into a glass, of the approx. size 1 dl. Slowly pour the OJ into the liquor. No stirring... Enjoy !",
      glass: 'vote'
  },

  {
      name: "Kalimocho",
      ingredients: [ 'Red wine', 'Coca-Cola'],
      instructions: "Drink (or throw away) one half of a 1.5 ltr. bottle of Coke. Then simply pour the wine into the bottle, slowly, so that it gets full. Do not shake the bottle, but simply turn it over a couple of times.",
      glass: 'vote'
  },

  {
      name: "Mocha-Berry",
      ingredients: [ 'Coffee', 'Chambord raspberry liqueur', 'Cocoa powder', 'Whipped cream'],
      instructions: "pour 6 oz. of coffee in a mug or Irish coffee cup. add coca mix and chambord, mix well and top off with whipped cream.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Tahitian Tea",
      ingredients: [ 'Ice', 'Vodka', 'Rum', 'Gin', 'Triple sec', 'Orange juice', 'Cranberry juice'],
      instructions: "Fill a cocktail shaker with ice. Add 1/2 oz of each liquor. Fill with 3 oz of each juice. Shake. Serve in a Hurricane or Collins glass. Garnish with fruit slices (if you have the patience). Enjoy!",
      glass: 'Hurricane glass'
  },

  {
      name: "C*m Shot",
      ingredients: [ 'Butterscotch schnapps', 'Irish Cream', 'Whipped cream'],
      instructions: "Blend liquors in shot glass. Top with whipped cream. Serve.",
      glass: 'Shot glass'
  },

  {
      name: "Navel Caribbean Love",
      ingredients: [ 'Malibu rum', 'Orange juice'],
      instructions: "Pour 3 oz of Malibu into the Hurricane glass. Slowly pour in the Orange juice, and VOILA!",
      glass: 'Hurricane glass'
  },

  {
      name: "Clam Eye",
      ingredients: [ 'Clamato juice', 'Beer'],
      instructions: "Shake Clamato (keep at room temperature). Pour Clamato into Pilsner glass or oversized beer mug. Pour beer generously down the inside of the glass until full. Be careful of foaming head. Add celery salt, tobasco sauce, and/or worchestershire sauce for flavouring.",
      glass: 'Beer pilsner'
  },

  {
      name: "Afterburner #1",
      ingredients: [ 'Aftershock', '151 proof rum'],
      instructions: "pour both ingredients and let them mix some(you can stir it some to help it out)",
      glass: 'Shot glass'
  },

  {
      name: "Midori Splice",
      ingredients: [ 'Midori melon liqueur', 'Malibu rum', 'Pineapple juice', 'Cream'],
      instructions: "Build all ingredients over ice in a tall glass. Float fresh cream last.",
      glass: 'Collins glass'
  },

  {
      name: "Somebird",
      ingredients: [ 'Gin', 'Galliano', 'Pisang Ambon', 'Banana liqueur', 'Lemon', 'Pineapple juice'],
      instructions: "Mix ingredients in random order and shake on ice.",
      glass: 'Cocktail glass'
  },

  {
      name: "Dr. Pepper #1",
      ingredients: [ 'Beer', 'Coca-Cola', 'Amaretto'],
      instructions: "Place half a beer into a beer mug. Add to this half a can of coke. Pour an ounce of amaretto into a shot glass. Drop the shot glass into the mug and CHUG immediately!!!",
      glass: 'Beer mug'
  },

  {
      name: "Gumbys' Ruby Red",
      ingredients: [ 'White rum', 'Grapefruit juice', 'Pineapple juice', 'Ice'],
      instructions: "Mix the Rum, grapefruit juice and pineapple juice. Stir well and add ice cubes to the top for a delicious drink.",
      glass: 'Collins glass'
  },

  {
      name: "747",
      ingredients: [ 'Kahlua', 'Irish Cream', 'Frangelico'],
      instructions: "pour kaluha, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!",
      glass: 'Shot glass'
  },

  {
      name: "Southern Doctor",
      ingredients: [ 'Southern Comfort', 'Dr. Pepper'],
      instructions: "Pour Southern Comfort in mason jar, fill with Dr. Pepper, chill with ice, and throw a party!",
      glass: 'Mason jar'
  },

  {
      name: "Strawberry Bomb",
      ingredients: [ 'Strawberry schnapps', 'Everclear'],
      instructions: "Pour ingredients into shot glass and slam. Enjoy!",
      glass: 'Shot glass'
  },

  {
      name: "Pisang Garuda",
      ingredients: [ 'Pisang Ambon', 'White rum', 'Bitter lemon'],
      instructions: "Mix with ice cubes. Garnish: Slice of orange. Two straws.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Green Dinosaur #1",
      ingredients: [ 'Vodka', 'Gin', 'Rum', 'Midori melon liqueur', 'Triple sec', 'Sour mix', '7-Up'],
      instructions: "Combine all and stir. Serve in highball glass over ice",
      glass: 'Highball glass'
  },

  {
      name: "Comfort Driver",
      ingredients: [ 'Southern Comfort', 'Orange juice', 'Ice'],
      instructions: "Pour orange juice over 3 cubes ice in a highball glass add Southern Comfort and stir lightly",
      glass: 'Highball glass'
  },

  {
      name: "Hot Whiskey",
      ingredients: [ 'Irish whiskey', 'Lemon', 'Cloves', 'Sugar', 'Water'],
      instructions: "Measure the whiskey in the glas. Add cloves in the fresh lemon and put it into the whiskey. Add hot water and one tbs sugar Serve imedeatly.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Vodka & Schweppes",
      ingredients: [ 'Vodka', 'Bitter lemon', 'Ice'],
      instructions: "For best result use Smirnoff vodka.",
      glass: 'Highball glass'
  },

  {
      name: "Chocolate Covered Cherry",
      ingredients: [ 'Amaretto', 'Vodka', 'Chocolate milk', 'Grenadine'],
      instructions: "In a shaker half filled with ice cubes combine all of the ingredients. Shake well, strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Nägermeister",
      ingredients: [ 'Jägermeister', 'Kahlua', 'Coffee'],
      instructions: "Kahlua. Add Jäger. Fill up with coffee. Serve with cream.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Mussaka",
      ingredients: [ 'Ouzo', 'Drambuie', 'Pepsi Cola'],
      instructions: "1 oz ouzo 1/2 oz drambuie in an old fashion glass fill with pepsi cola add ice if desired",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Black Watch",
      ingredients: [ 'Kahlua', 'Scotch', 'Soda water'],
      instructions: "Pour all ingrediants into a shaker 2/3 full of ice. Stir well - strain into a highball glass.",
      glass: 'Highball glass'
  },

  {
      name: "Buffalo Sweat",
      ingredients: [ 'Bourbon', 'Tabasco sauce'],
      instructions: "Stir in a shotglass. Drink quickly.",
      glass: 'Shot glass'
  },

  {
      name: "All Night Long",
      ingredients: [ 'Malibu rum', 'Kahlua', 'Vodka', 'Dark Creme de Cacao', 'Pineapple juice', 'Sour mix'],
      instructions: "Mix all together in hurricane glass. Shake well. Garnish-orange flag",
      glass: 'vote'
  },

  {
      name: "Pan Galactic Gargle Blaster",
      ingredients: [ 'Tia maria', 'Vodka', 'Cherry brandy', 'Lime juice', '7-Up', 'Cider', 'Ice'],
      instructions: "Take a pintglass (= approx. 0.5 litres) Put the Tia Maria, the vodka and the cherry brandy together. Add a dash of lime juice. Fill the rest of the glass up with (50% - 50%) with dry cider and 7 -up Add ice cubes.",
      glass: 'vote'
  },

  {
      name: "Bay Breeze",
      ingredients: [ 'Vodka', 'Cranberry juice', 'Pineapple juice'],
      instructions: "First, add cubed ice, then add the three parts stoli, then add the pineapple juice and last but not least, add the cranberry juice for color.",
      glass: 'Highball glass'
  },

  {
      name: "Water (the original)",
      ingredients: [ 'Water'],
      instructions: "Funny how the program wouldn't let me post this without adding mixing instructions. There are so many ways to get hold of it. You can draw it, pour it, dig for it or simply dig it, you can get it from a well, a tap, a source, a fountain, a stream, you can drink it straight up, out of your hand, from a glass, a bottle, a jar and a container. Soft water may have the disadvantage of containing only minute quantities of magnesium, whereas hard water might be bad for your favourite sweat-shirt... But all in all, NO WATER - NO LIFE. So get a life, care for your water.",
      glass: 'vote'
  },

  {
      name: "Lemon Drop #2",
      ingredients: [ 'Absolut Citron', 'Sweet and sour', 'Lemon', 'Sugar'],
      instructions: "Mix equal parts Absolut Citron and sweet & sour over ice then strain into a shot glass. Sprinkle sugar on lemon slice. Drink shot, then suck the lemon!",
      glass: 'Shot glass'
  },

  {
      name: "Bourbon and sprite",
      ingredients: [ 'Bourbon', 'Sprite'],
      instructions: "Pour the bourbon into the highball or whiskey sour glass with some ice. cubes preferred then mix the rest of glass with Sprite or Seven up.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Thunder king",
      ingredients: [ 'Whiskey', 'Coffee', 'Milk', 'Absolut Citron', 'Ice'],
      instructions: "Just mix it and shake it..",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Bongs Anfield Slammer",
      ingredients: [ 'Vodka', 'Irish Cream', 'Coffee', 'Milk'],
      instructions: "Just Mix it together, with the most alcoholic drinks in the end.... Good luck!!!!",
      glass: 'Shot glass'
  },

  {
      name: "Addison Special",
      ingredients: [ 'Vodka', 'Grenadine', 'Orange juice'],
      instructions: "Combine ingredients in the order listed into a shaker. Fill half full with ice and shake well. Strain into glass with ice and garnish with a cherry and orange wedge.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Party Death",
      ingredients: [ 'Lemon vodka', 'Schweppes Russchian', 'Schweppes Lemon'],
      instructions: "Just mix them together, softs first, then the vodka. Serve ice cold.",
      glass: 'Collins glass'
  },

  {
      name: "Ozone",
      ingredients: [ 'Amaretto', 'Beer', 'Sweet and sour', 'Sprite'],
      instructions: "Fill glass with ice Add Amaretto Add splash beer Add sweet & sour Top with sprite Stir lightly",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Cranberry Blast",
      ingredients: [ 'Cranberry juice', 'Peach schnapps', 'Dark rum', 'Vodka', 'Scotch', 'Orange juice', 'Lemon juice', 'Lime'],
      instructions: "Pour all ingredients over cubed or crushed ice stir well and serve!",
      glass: 'Cocktail glass'
  },

  {
      name: "Wiggle Worm",
      ingredients: [ 'Vodka', 'Tropicana', 'Sugar', 'Maraschino cherry'],
      instructions: "Mix Well. Put Vodka in first. Put cherry in last. Add ice if needed.",
      glass: 'Cocktail glass'
  },

  {
      name: "California Root Beer",
      ingredients: [ 'Kahlua', 'Galliano', 'Soda water'],
      instructions: "Put Kahlua and Galliano in highball glass fill with soda",
      glass: 'Highball glass'
  },

  {
      name: "Nikki Delight",
      ingredients: [ 'Sloe gin', 'Rum', 'Ice', 'Pineapple juice'],
      instructions: "Poor all ingredients over ICE and STIR don't Shake....",
      glass: 'Collins glass'
  },

  {
      name: "Malibu Dreams",
      ingredients: [ 'Malibu rum', 'Grenadine', '7-Up'],
      instructions: "Mix Malibu and Grenadine together. Fill with soda.",
      glass: 'vote'
  },

  {
      name: "Blackbeard",
      ingredients: [ 'Spiced rum', 'Root beer schnapps', 'Pepsi Cola'],
      instructions: "Pour the Captain Morgan's, and root beer schnapps over ice in a highball glass. Fill with Coke or Pepsi and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Backdraft",
      ingredients: [ 'Drambuie', 'Grand Marnier'],
      instructions: "Pour equal amounts into Brandy Snifter and light.",
      glass: 'Brandy snifter'
  },

  {
      name: "Jo-Jo Cool-Aid",
      ingredients: [ 'Southern Comfort', 'Amaretto', 'Cranberry juice'],
      instructions: "Fill glass with ice. Add Southern Coffort and Amaretto. Fill the rest of the glass with cranberry juice",
      glass: 'Collins glass'
  },

  {
      name: "The Whammie",
      ingredients: [ 'Light rum', 'Spiced rum', '151 proof rum', 'Peach brandy', 'Creme de Cassis', 'Creme de Banane', 'Raspberry liqueur', 'Orange juice', 'Pineapple juice', 'Grenadine'],
      instructions: "Fill a 20 ounce glass with ice. Add the 7 shots. Finish off with with orange and pineapple juice. Add Grenadine until it turns pink. Top with Cherries.",
      glass: 'Hurricane glass'
  },

  {
      name: "Rocket Fuel",
      ingredients: [ 'Vodka', 'Tequila', 'White rum'],
      instructions: "Mix all in glass and drink rapidly",
      glass: 'Whiskey sour glass'
  },

  {
      name: "The Vaitkus",
      ingredients: [ 'Vodka', 'Peach schnapps'],
      instructions: "shake ingredients together and pour into a cocktail glass. drink quickly!",
      glass: 'Cocktail glass'
  },

  {
      name: "Lysekil's groggen",
      ingredients: [ 'Vodka', 'Orange juice', 'Schweppes Russchian'],
      instructions: "First you take vodka then you take O j then ster then you fill it up with russian and ice cubes",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Hot Dick #1",
      ingredients: [ 'Grand Marnier', 'Irish Cream', 'Coffee'],
      instructions: "Pour liquors into large irish coffee mug. Add enough strong hot coffee to fill mug. Top with whipped cream if desired, garnish with chocolate sprinkles or butterscotch sprinkles if desired.",
      glass: 'Irish coffee cup'
  },

  {
      name: "BAV(BAW)",
      ingredients: [ 'Irish Cream', 'Advocaat', 'Vodka', 'Ice'],
      instructions: "Shake or stir and enjoy",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Amaretto Stone Sour",
      ingredients: [ 'Amaretto', 'Sour mix', 'Orange juice'],
      instructions: "Shake and Serve over ice",
      glass: 'vote'
  },

  {
      name: "Elmer Fuddpucker",
      ingredients: [ 'Limeade', 'Vodka', 'Beer'],
      instructions: "The mixture is one large can (12 oz) of frozen limeade, that same can filled with any cheap vodka, and three cans of LITE beer.",
      glass: 'vote'
  },

  {
      name: "Cosmopolitan #2",
      ingredients: [ 'Absolut Citron', 'Lime juice', 'Triple sec', 'Cranberry juice'],
      instructions: "Combine all ingredients in a cocktail shaker with ice. Quickly shake and pour into a chilled cocktail glass. Garnish with a lime twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Frozen Mudslide #2",
      ingredients: [ 'Rum', 'Kahlua', 'Irish cream', 'Vanilla ice-cream', 'Chocolate syrup'],
      instructions: "Add all liquid ingrediance into mixer. Add vanilla icecream and mix. Add more icecream till desired texture.",
      glass: 'vote'
  },

  {
      name: "Tropical Storm Jack",
      ingredients: [ 'Absolut Kurant', 'Coconut rum', 'Chambord raspberry liqueur', 'Grenadine', 'Pineapple juice'],
      instructions: "Put all in hi-ball glass and shake garnish with lime",
      glass: 'Highball glass'
  },

  {
      name: "Rum a'la Olof",
      ingredients: [ 'Rum', 'Lemon juice', 'Whipped cream', 'Coffee', 'Cocoa powder'],
      instructions: "Poure the rum and the lemon-juice in the bowl, and mix it. Then you take the cocoa-powder and the hot coffee and mix it with the other stuff in the bowl. After that you poure your mixture in a shot-glass. The whipped cream you put on the top of the glass. Ready to be served!",
      glass: 'Shot glass'
  },

  {
      name: "Bailey's Hot Shot",
      ingredients: [ 'Irish Cream', 'Sugar'],
      instructions: "- Put Irish Cream in large glass and microwave on HIGH power for half a minute or so. - While that's going, rim the shot glasses with sugar - Pour heated Bailey's into shot glasses and serve immediately",
      glass: 'Shot glass'
  },

  {
      name: "Light and Dark",
      ingredients: [ 'Light rum', 'Dark rum', 'Ice'],
      instructions: "Add sour mix and shake in whiskey sour rock glass or 10 oz. goblet. Garnish with lime wedge",
      glass: 'Whiskey sour glass'
  },

  {
      name: "White Spider #2",
      ingredients: [ 'Sour mix', 'Gin', 'Triple sec'],
      instructions: "Shake ingredients with ice, strain into cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Pink Elephants On Parade",
      ingredients: [ 'Vodka', 'Pink lemonade', 'Sugar', 'Midori melon liqueur'],
      instructions: "Mix, drink fast, shudder",
      glass: 'vote'
  },

  {
      name: "Brown Cow from Hell",
      ingredients: [ 'Kahlua', 'Milk', 'Chocolate syrup'],
      instructions: "Mix all ingredients until no chocolate residue is left on bottom of glass. Serve chilled. Enjoy!!",
      glass: 'vote'
  },

  {
      name: "Apple Pie Shot #2",
      ingredients: [ 'Vodka', 'Apple juice', 'Cinnamon'],
      instructions: "bang glass on table and immediately take shot",
      glass: 'Shot glass'
  },

  {
      name: "Stardust",
      ingredients: [ 'Absolut Citron', 'Peachtree schnapps', 'Blue Curacao', 'Sweet and sour', 'Pineapple juice', 'Grenadine'],
      instructions: "Fill shaker cup with ice. Pour in all ingredients. Shake and strain into shooter glass of preference.",
      glass: 'Cordial glass'
  },

  {
      name: "Kahlua and Cream",
      ingredients: [ 'Kahlua', 'Cream'],
      instructions: "Put Kahlua in a glass over ice and 1 ounce cream and shake.",
      glass: 'vote'
  },

  {
      name: "Top Shelf Margarita",
      ingredients: [ 'Triple sec', 'Grand Marnier', 'Sweet and sour', 'Lime juice', 'Tequila'],
      instructions: "Fill mixing glass with ice Pour in all ingredients Shake well Pour into salt rimmed glass Add lime wedge or wheel",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Blue Lemonade",
      ingredients: [ 'Water', 'Kool-Aid', 'Blue Curacao', 'Vodka'],
      instructions: "Mix into punch bowl and make sure that the koolaid is already pre measurable with sugar already added. Be careful, hard to taste alcohol so intoxication sets in quickly!",
      glass: 'Punch bowl'
  },

  {
      name: "Jeweler's Hammer",
      ingredients: [ 'Vodka', 'White grape juice'],
      instructions: "This drink is sooo good you will probably want to add 2 oz. of Vodka to 8 oz. of white grape juice. Add more or less Vodka to taste and pour over ice. Enjoy!",
      glass: 'vote'
  },

  {
      name: "Derailer",
      ingredients: [ 'Rum', 'Gin', 'Vodka', 'Amaretto', 'Triple sec', 'Peach schnapps', 'Grenadine', 'Cranberry juice', 'Grapefruit juice', 'Sloe gin', 'Sprite'],
      instructions: "This is the punch we serve at our annual Halloween party. We use a big, black, plastic cauldron to mix this punch in. You can use any LARGE vat to concoct this wonderful drink. Add all alcohols first, then add juices. Add the Sprite just before serving. If you want... do as we do, and drop in chunks of dry-ice to create a bubbling, smoking cauldron of pure Halloweeen evil! It's safe to drink, and does not really change the taste all that much! YAHOO! GET DERAILED!",
      glass: 'Punch bowl'
  },

  {
      name: "Lemon Drop #4",
      ingredients: [ 'Absolut Vodka', 'Margarita mix', 'Triple sec', 'Lemon', 'Sugar'],
      instructions: "pour over cracked ice, and strain into a cocktail glass with sugar around its rim.",
      glass: 'Cocktail glass'
  },

  {
      name: "Lemon Drop #3",
      ingredients: [ 'Spiced rum', 'Sugar', 'Lemon'],
      instructions: "Fill shot glass with rum. Dip lemon wedge in sugar.",
      glass: 'Shot glass'
  },

  {
      name: "Antifreeze",
      ingredients: [ 'Vodka', 'Blue Curacao', '151 proof rum', 'Peppermint schnapps'],
      instructions: "chill with ice cubes in shaker. Pour into rocks glass or split into two shots",
      glass: 'Shot glass'
  },

  {
      name: "Warp Core Breach",
      ingredients: [ 'Goldschlager', 'Tequila', 'Bourbon'],
      instructions: "Put 1/2 ounce of Goldschlager in 1 1/2 ounce shot glass. Then put Tequila on top followed by bourbon. Down it and party till she's cute.",
      glass: 'Shot glass'
  },

  {
      name: "Shogun",
      ingredients: [ 'Vodka', 'Grenadine', 'Orange juice'],
      instructions: "Mix in blender and garnish with orange slice",
      glass: 'Hurricane glass'
  },

  {
      name: "Christmas Cheer",
      ingredients: [ 'Eggnog', 'Peppermint schnapps'],
      instructions: "stir it up and shoot it down. HO! HO! HO! Tastes like christmas with a pine tree twist.",
      glass: 'Shot glass'
  },

  {
      name: "Amoco Shot",
      ingredients: [ '151 proof rum', 'Everclear', 'Kahlua'],
      instructions: "Pour the Bacardi 151 in, then the Everclear. Just put a drop of Kahlua right in the middle. Don't smell it, and take it. It should start your engines!",
      glass: 'Shot glass'
  },

  {
      name: "Blind Russian",
      ingredients: [ 'Irish Cream', 'Godiva liqueur', 'Kahlua', 'Butterscotch schnapps', 'Milk'],
      instructions: "Fill glass with ice. Add all liquers. Add milk. shake.",
      glass: 'Collins glass'
  },

  {
      name: "Tummy Blower",
      ingredients: [ 'Irish Cream', '7-Up'],
      instructions: "Just Mix together and drink fast !!",
      glass: 'Beer mug'
  },

  {
      name: "Absolut Sex",
      ingredients: [ 'Absolut Kurant', 'Midori melon liqueur', 'Cranberry juice', 'Sprite'],
      instructions: "Shake Absolut Kurant, Midori, and Cranberry juice in shaker with ice: Strain into rocks glass: Splash of seven on top.Absolut Sex.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Aztec Punch",
      ingredients: [ 'Lemonade', 'Vodka', 'Rum', 'Ginger ale'],
      instructions: "Mix all ingredients in a pitcher. Mix thoroughly and pour into whatever is available, the bigger the better! This drink packs a big punch, so don't over do it.",
      glass: 'Punch bowl'
  },

  {
      name: "Alien Secretion",
      ingredients: [ 'Midori melon liqueur', 'Malibu rum', 'Pineapple juice'],
      instructions: "Just mix all in equal portions. Its good!",
      glass: 'vote'
  },

  {
      name: "Lemon Drop #5",
      ingredients: [ 'Absolut Vodka', 'Triple sec', 'Lemon'],
      instructions: "Shake vodka, Triple sec and juice of a lemon wedge well with plenty of ice. Strain into a sugar rimmed cocktail glass. Garnish with lemon zest.",
      glass: 'Cocktail glass'
  },

  {
      name: "Apfel Orange",
      ingredients: [ 'Apfelkorn', 'Vodka', 'Orange juice', 'Sprite'],
      instructions: "Mix the ingredients, add a couple of ice cubes. Put a slice of orange or lemon (any fruit will do!) on the rim of the glass.",
      glass: 'Highball glass'
  },

  {
      name: "Vaina",
      ingredients: [ 'Sherry', 'Chocolate liqueur', 'Cognac', 'Powdered sugar', 'Egg yolk'],
      instructions: "Put all the ingredients in a cocktail shaker with ice and shake it well. Serve in a red wine glass and add in the top a bit of powdered cinnamon .",
      glass: 'Red wine glass'
  },

  {
      name: "Absolut limousine",
      ingredients: [ 'Absolut Citron', 'Lime juice', 'Ice', 'Tonic water'],
      instructions: "Fill Absolut into a glass. Add Lime juice. Add Ice and lime wedges.",
      glass: 'vote'
  },

  {
      name: "Absolut Evergreen",
      ingredients: [ 'Absolut Citron', 'Pisang Ambon', 'Ice', 'Bitter lemon'],
      instructions: "Mix, pour over ice and top up with Bitter Lemon.",
      glass: 'vote'
  },

  {
      name: "Smeraldo",
      ingredients: [ 'Gin', 'Fruit juice', 'Blue Curacao', 'Triple sec', 'Peach nectar'],
      instructions: "Put all in a Shacker with Ice, shake it for a while and serve in a cold Cocktail glass",
      glass: 'Cocktail glass'
  },

  {
      name: "Lunch Box",
      ingredients: [ 'Beer', 'Amaretto', 'Orange juice'],
      instructions: "Fill a pint glass almost full with beer. Then fill the rest with orange juice (careful not to fill it to the top). Then take the shot of Amaretto and drop it in.",
      glass: 'Pint glass'
  },

  {
      name: "Starla's Waver",
      ingredients: [ 'Milk', 'Kahlua', 'Absolut Vodka', 'Rum'],
      instructions: "Get a large glass, (any glass but it must be large) Start from the top of the list and work your way down stirring each time you add an ingredient. When you've finished you need not do anything else just drink it.",
      glass: 'vote'
  },

  {
      name: "Sacrilicious",
      ingredients: [ 'Bacardi Limon', 'Midori melon liqueur', 'Lime juice'],
      instructions: "chill and strain into a shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Pinky Colinky Dinky",
      ingredients: [ 'Ice', 'Light rum', 'Sweet and sour', 'Maraschino liqueur'],
      instructions: " ",
      glass: 'Punch bowl'
  },

  {
      name: "Secret Blue",
      ingredients: [ 'Vodka', 'Lime juice', 'Sugar', 'Soda water', 'Blue Curacao', 'Green Creme de Menthe'],
      instructions: "Shake ingredient vodka, lime and sugar with shaker. Add soda. Pour into Beer-pilsner with Ice. Drop curacao and creme de menthe. Decorate with cut-lime and cherry.",
      glass: 'Beer pilsner'
  },

  {
      name: "Super Sangria",
      ingredients: [ 'Red wine', 'Sherry', 'Watermelon schnapps', 'Blackcurrant schnapps', 'Grapefruit schnapps', 'Brandy', 'Fruit juice', 'Lemon-lime soda', 'Ice'],
      instructions: "Mix all the ingredients besides the ice in a large pitcher (or several smaller). Once thoroughly mixed, add the ice and serve in wine glasses.",
      glass: 'Pitcher'
  },

  {
      name: "Traffic Light Cooler",
      ingredients: [ 'Midori melon liqueur', 'Gold tequila', 'Sour mix', 'Orange juice', 'Sloe gin'],
      instructions: "Into pilsner glass filled with ice cubes, first pour the melon liqueur, then the tequila, to create a green layer. Add sour mix. Slowly pour orange juice against side of glass to create the yellow layer. Add a few more ice cubes, if needed. Carefully float the sloe gin on top for the red layer. Garnish with a cherry and lemon and lime wheels. Stir just before drinking.",
      glass: 'Beer pilsner'
  },

  {
      name: "Snakebite (Aus)",
      ingredients: [ 'Green Chartreuse', 'Tabasco sauce'],
      instructions: "Pour Chartreuse into shot glass, and dash the Tabasco in. More Tabasco for a more venomous bite!",
      glass: 'Shot glass'
  },

  {
      name: "Sjarsk",
      ingredients: [ 'Coffee', 'Vodka', 'Sugar'],
      instructions: "Add the coffe first , then add alchohol and finally you should add the sugar. Shake well :c)",
      glass: 'Coffee mug'
  },

  {
      name: "Shut the hell up",
      ingredients: [ '151 proof rum', 'Crown Royal', 'Jägermeister', 'Everclear', 'Grenadine'],
      instructions: "Pour Jager at bottom of glass. Mix Crown, Everclear, & 151 separately to layer on top of the Jager. Splash the Grenadine. Attempt to shoot & SHUT THE HELL UP.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Sloe comfortable screw against the wall",
      ingredients: [ 'Sloe gin', 'Southern Comfort', 'Orange juice', 'Galliano', 'Cherry'],
      instructions: "Shot of Sloe Gin, add half ounce Southern Comfort, fill with orange juice, float Galliano.",
      glass: 'Collins glass'
  },

  {
      name: "Root Beer Barrel",
      ingredients: [ 'Root beer schnapps', 'Beer'],
      instructions: "Fill shot glass with schnapps. Fill tumbler about 3/4 full of beer. Place filled shot glass upright in filled tumbler. Beer should be just short of covering top of shot glass. Just before drinking, cover entire drink with hand and slam on table or bar. Drink all at once.",
      glass: 'Cocktail glass'
  },

  {
      name: "Smarty",
      ingredients: [ 'Amaretto', 'Southern Comfort', 'Blackberry brandy', 'Sour mix'],
      instructions: "Mix all ing. over ice, strain and serve! Tastes like a sweet tart!",
      glass: 'Shot glass'
  },

  {
      name: "Sex under the boardwalk",
      ingredients: [ 'Peach schnapps', 'Chambord raspberry liqueur', 'Midori melon liqueur'],
      instructions: "Shake with ice and strain into an old fashioned glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "The Lunchbox",
      ingredients: [ 'Midori melon liqueur', 'Malibu rum', 'Absolut Citron', 'Peach schnapps', 'Pineapple juice', 'Sweet and sour', '7-Up'],
      instructions: "Chill & strain.",
      glass: 'Cocktail glass'
  },

  {
      name: "The Roni",
      ingredients: [ 'Rum', 'Coca-Cola', 'Southern Comfort'],
      instructions: "Pour the shit in a beer mug, mix, and enjoy.",
      glass: 'Beer mug'
  },

  {
      name: "Green wave",
      ingredients: [ 'Coconut rum', 'Spiced rum', 'Blue Curacao', 'Pineapple juice', 'Orange juice', 'Sour mix', 'Ice'],
      instructions: "pour alchol into glass and fill with equal parts of juices and sour mix add ice and enjoy!",
      glass: 'Hurricane glass'
  },

  {
      name: "Milky Way",
      ingredients: [ 'Gin', 'Amaretto', 'Strawberry liqueur', 'Strawberry syrup', 'Pineapple juice'],
      instructions: "Shake. Garnish with cut apple, lemon, pineapple-leaves.",
      glass: 'Collins glass'
  },

  {
      name: "Cardicas",
      ingredients: [ 'Rum', 'Triple sec', 'White port'],
      instructions: "Stir. No garnish.",
      glass: 'Cocktail glass'
  },

  {
      name: "Pucker",
      ingredients: [ 'Whiskey', 'Grapefruit juice', 'Ice'],
      instructions: "Pour whiskey generously over ice, add grapefruit juice (preferably unsweetened).",
      glass: 'Whiskey sour glass'
  },

  {
      name: "The Liver Transplant",
      ingredients: [ 'Vodka', 'Rum', 'Southern Comfort', 'Amaretto', 'Creme de Almond', 'Raspberry liqueur', 'Orange juice', 'Pineapple juice', 'Sour mix'],
      instructions: "Over Ice. Stir, dont shake.",
      glass: 'Hurricane glass'
  },

  {
      name: "Fuzzy Ethan",
      ingredients: [ 'Lime juice', 'Irish Cream', 'Food coloring', 'Vodka', 'Green Creme de Menthe'],
      instructions: "Mix all ingredients except lime in a cocktail shaker, then shake, and pour into glass. Add lime.",
      glass: 'Highball glass'
  },

  {
      name: "What She's Having",
      ingredients: [ 'Absolut Citron', 'Orange juice', 'Amaretto', 'Grenadine'],
      instructions: "Pour in Vodka, then fill with the orange juice. Add the amaretto which should mostly sink to the bottom. Splash in some grenadine to cloud the center of the drink. Serve without mixing or stirring.",
      glass: 'Parfait glass'
  },

  {
      name: "Feel like holiday",
      ingredients: [ 'Vodka', 'Grenadine', 'Champagne'],
      instructions: "Stir Vodka and Grenadine with ice. Fill in Champagne-flute without the ice. Fill up with champagne.",
      glass: 'Champagne flute'
  },

  {
      name: "SD Special",
      ingredients: [ 'Water', 'Lemon', 'Ice', 'Vodka'],
      instructions: "Make fresh homemade lemonade by mixing the juice of one lemon and 8 oz. (one glass) of water. Be sure not to add sugar. Add the vodka and stir then put in the ice.",
      glass: 'vote'
  },

  {
      name: "Satin Angel",
      ingredients: [ 'Frangelico', 'Cream', 'Coca-Cola'],
      instructions: "mix all ingredients in glass and enjoy!!",
      glass: 'Highball glass'
  },

  {
      name: "Jenny's Concoction",
      ingredients: [ 'Vodka', 'Anisette', 'Orange juice'],
      instructions: "Pour the vodka and anisette into the glass and top it off with orange juice.",
      glass: 'vote'
  },

  {
      name: "Rafu Eighteen",
      ingredients: [ 'Vodka', 'Pisang Ambon', 'Orange juice', 'Sprite', 'Lemon'],
      instructions: "Fill vodka and Pisang in the glas. If you tihnk it's to strong you may fill in with more pisang. Fill then with orange juice and sprite, about half of each till the glas is filled. Take then a twist or two of lemon.",
      glass: 'vote'
  },

  {
      name: "Nuts and Berries #2",
      ingredients: [ 'Chambord raspberry liqueur', 'Frangelico', 'Half-and-half'],
      instructions: "Add ingredients to a tumbler with ice. Shake well. Pour into snifter, ice included.",
      glass: 'Brandy snifter'
  },

  {
      name: "Coppertone Punch",
      ingredients: [ 'Creme de Banane', 'Malibu rum', 'Pineapple juice', 'Midori melon liqueur'],
      instructions: "Combine Creme de Banana, Malibu Rum, Pineapple Juice & ice in mixing tin. Shake or flash blend. Strain over ice and float Midori. Garnish with watermelon wedge.",
      glass: 'Hurricane glass'
  },

  {
      name: "Fatkid on the Rocks",
      ingredients: [ 'Goldschlager', 'Gold tequila', 'Vodka', 'Water', 'Ice'],
      instructions: "Put the ice cubes in first then add the shots in the order that they're listed.",
      glass: 'vote'
  },

  {
      name: "Sweet-tart Lollipop",
      ingredients: [ 'Raspberry schnapps', 'Lime vodka', 'Amaretto', 'Bacardi Limon', 'Peach schnapps', 'Lemonade'],
      instructions: "Mix all ingredients in a collins glass over ice (if a 32 oz. glass is available double all the ingredients), mix in a shaker and serve with a cherry. Should taste like the old chalky lollipops that cam on a hard plastic stem!!!!",
      glass: 'Collins glass'
  },

  {
      name: "Kool-Aid Slammer",
      ingredients: [ 'Kool-Aid', 'Vodka'],
      instructions: "Fill half the shot glass with the kool-aid first. Then put a paper towel over the top of the glass and slowly pour in the vodka. If you do it right, you should be able to see that the two liquids are separated, with the vodka on top. Now slam it! The last thing you'll taste is the kool-aid.",
      glass: 'Shot glass'
  },

  {
      name: "Oil Slick #2",
      ingredients: [ 'Black Sambuca', 'White Creme de Menthe'],
      instructions: "Place The Creme de menthe in a shot glass, using a tea spoon carefully float the Black Sambuca on top.",
      glass: 'Shot glass'
  },

  {
      name: "Liquid Heroine",
      ingredients: [ 'Rumple Minze', 'Jägermeister'],
      instructions: "Mix Rumple Minze and Jägermeister in an iced shaker and strain into shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Scope",
      ingredients: [ 'White Creme de Menthe', 'Ginger ale'],
      instructions: "Put double of Creme de Menthe in a 10-12 oz (300-350ml) glass and fill to top with Ginger Ale, Tonic, or Soda Water.",
      glass: 'vote'
  },

  {
      name: "Gin Blossam",
      ingredients: [ 'Peach schnapps', 'Gin', 'Sprite'],
      instructions: "Fill the glass about two thirds full of Sprite. Pour in the Schnapps, then gin. Put ice in glass to cool.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Kurant Tea",
      ingredients: [ 'Absolut Kurant', 'Tea', 'Sugar'],
      instructions: "Pour Absolut Kurant into a comfortably big tea-cup. Add the not too hot(!) apple tea and, if you like, some sugar. Enjoy!",
      glass: 'Champagne flute'
  },

  {
      name: "Superfly",
      ingredients: [ 'Gin', 'Lime juice', 'Ginger ale', 'Ice'],
      instructions: "Ice first, then the Gin (use high quality like Beefeeter). Then pour on the lime juice (use a sweet brand like Hearts) and the fill upp the class with ginger ale.",
      glass: 'vote'
  },

  {
      name: "Peach Margarita",
      ingredients: [ 'Tequila', 'Peach schnapps', 'Sweet and sour', 'Grenadine'],
      instructions: "Pour tequila, peach schnapps, and sweet & sour over ice. Add grenadine and stir slightly. The drink should fade from yellow to red. You can also put ingredients in a blender with ice for a frozen version.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Ultimate Margarita",
      ingredients: [ 'Tequila', 'Triple sec', 'Sweet and sour', 'Lime'],
      instructions: "Pour tequila, Triple sec, and sweet & sour over crushed ice. Add lime juice. Can be made frozen by putting in a blender with 3 cups ice.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Cocaine Lady",
      ingredients: [ 'Vanilla vodka', 'Kahlua', 'Irish Cream', 'Rumple Minze', 'Milk'],
      instructions: "Mix all ingredients in a shaker with ice, shake, strain into shot glass. The amount of milk is optional depending on desired potancy of shot.",
      glass: 'Shot glass'
  },

  {
      name: "Dirty Nipple",
      ingredients: [ 'Kahlua', 'Sambuca', 'Irish Cream'],
      instructions: "This is a layered shot - the Bailey's must be on top",
      glass: 'Shot glass'
  },

  {
      name: "Woodpecker",
      ingredients: [ 'Vodka', 'Peychaud bitters', 'Ice'],
      instructions: "Add 4 ice cubes to old-fashioned glass. Pour 2 ounces of vodka over the ice. Add 15 dashes of peychaud bitters. Stir.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "The District III",
      ingredients: [ 'Ice', 'Black rum', 'Gin', 'Soda water', 'Sweet and sour'],
      instructions: "Fill a pint glass with ice. Add one shot each of Bacardi Black Rum and Seagram's Extra Dry Gin. Add a splash of soda water and fill the rest of the glass with sweet & sour mix.",
      glass: 'Pint glass'
  },

  {
      name: "Black River",
      ingredients: [ 'Vodka', 'Aquavit', 'Kahlua', 'Sprite', 'Soda water', 'Lime juice'],
      instructions: "First you mix the alcohol into the glass with ice in it. Next you pour Sprite and Farris at the same time into the glas. At last you the drops from lime comes and you serve it with a slice of lime on the side.",
      glass: 'Cocktail glass'
  },

  {
      name: "Salisbury Special",
      ingredients: [ 'Coca-Cola', 'Orange juice', 'Raspberry cordial', 'Vodka'],
      instructions: "Pour Coke in, then orange juice, then vodka. Stir it about a bit, then add cordial. Enjoy !",
      glass: 'vote'
  },

  {
      name: "Tootsie",
      ingredients: [ 'Kahlua', 'Orange juice'],
      instructions: "Add ice to glass, pour in Kahlua, fill with orange juice. Stir.",
      glass: 'Highball glass'
  },

  {
      name: "Dick Deming Martini",
      ingredients: [ 'Gin', 'White wine'],
      instructions: "Mix. Pretend it's a martini. Plastic glasses are the best for this beast.",
      glass: 'Cocktail glass'
  },

  {
      name: "Die ruhige Sturm",
      ingredients: [ 'Coca-Cola', 'Jägermeister'],
      instructions: "Mix the 2 half gallons of each in a large enough container, chill in the freezer for a maximum of 1 hour.",
      glass: 'Pitcher'
  },

  {
      name: "Darkwood Sling",
      ingredients: [ 'Cherry Heering', 'Soda water', 'Orange juice', 'Ice'],
      instructions: "There are many good cherry liqueurs you can use, but I prefere Heering. Add one share of the liqueur. Then you add one share of Soda. For a sour sling use Tonic (most people prefer the drink without Tonic). Afterwards you fill the glass with Orange Juice and ice cubes.",
      glass: 'Cocktail glass'
  },

  {
      name: "Soft Serbian",
      ingredients: [ 'Vodka', 'Pernod', '151 proof rum', 'Orange juice', 'Tonic water', 'Ice'],
      instructions: "Mix alcohol, then juice and tonic water. Add crushed ice and drink.",
      glass: 'Highball glass'
  },

  {
      name: "Headcrush",
      ingredients: [ 'Tequila', 'Tabasco sauce', 'Whipped cream', 'Salt'],
      instructions: "Fill the glass with Tequila then add Tabasco sauce carfully, put on a top with whipped cream and add some salt on it.",
      glass: 'Shot glass'
  },

  {
      name: "Brass Monkey",
      ingredients: [ 'Rum', 'Vodka', 'Orange juice'],
      instructions: "Basically, toss the Rum & Vodka together and stir gently. Next, pour in the orange juice . Shake well. Pour over ice.",
      glass: 'vote'
  },

  {
      name: "Tina Baker",
      ingredients: [ 'Peach schnapps', 'Orange juice', '7-Up', 'Grenadine'],
      instructions: "Fill highball glass with ice. Add 1/1/2 oz. of peach scnapps. Then fill the glass about 1/2 full with o.j. Next fill the rest of the glass with 7-up or Sprite. Top the drink off with a dash of grenadine. Garnish with a flag.",
      glass: 'Highball glass'
  },

  {
      name: "Big Bull",
      ingredients: [ 'Tequila', 'Kahlua'],
      instructions: "Mix tequila and kahlua in a whiskey glass and serve with lotsa ice...",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Buzz Inducer",
      ingredients: [ 'Root beer', 'Yukon Jack'],
      instructions: "Put the two shots into frosty beer mug. Add IBC Root Beer into glass. Ice cubes are optional.",
      glass: 'Beer mug'
  },

  {
      name: "Dephaekt",
      ingredients: [ 'Absolut Kurant', 'Orgeat syrup', 'Frangelico', 'Cranberry juice', 'Sprite'],
      instructions: "Blend the Absolut kurant, Oregat and Frangelico in a mixer. Pour in highball glass, add 2 icecubes, fill with the cranberryjuice and sprite. Put a slice of lemon on the edge of the glass. Optional to add a dash of lime for an even fresher taste.",
      glass: 'Highball glass'
  },

  {
      name: "Bambi's Iced Tea",
      ingredients: [ 'Vodka', 'Sour mix', 'Coca-Cola', '7-Up'],
      instructions: "Put ice in glass Pour in vodka Add splash of Sour Mix Half fill with cola Half fill with 7-Up Roll drink to remove fizz Drink!",
      glass: 'Hurricane glass'
  },

  {
      name: "Bartender's Wet Dream",
      ingredients: [ 'Grenadine', 'Kahlua', 'Irish Cream', 'Cream'],
      instructions: "Just put the ingredients in a shot glass and put a little bit of whipped cream on the top.",
      glass: 'Shot glass'
  },

  {
      name: "YoYo Blow Out",
      ingredients: [ 'Light rum', 'Sour mix', 'Ice'],
      instructions: "Throw it all together and have fun. Adjust sour mix for a stiffer or weaker drink.",
      glass: 'vote'
  },

  {
      name: "Pyro",
      ingredients: [ 'Vodka', 'Firewater', 'Everclear'],
      instructions: "Mix as normal, pour in shot glass, and set on fire. Put it out any way you want.",
      glass: 'vote'
  },

  {
      name: "Prince of Norway",
      ingredients: [ 'Vodka', 'Apricot brandy', 'Lime juice', 'Sprite', 'Ice'],
      instructions: "Fill glass with Icecubes, pour all ingrediences into glass. Garnish with orange slice.",
      glass: 'Highball glass'
  },

  {
      name: "Inferno",
      ingredients: [ 'Absolut Peppar', 'Everclear', 'Tabasco sauce', 'Salt'],
      instructions: "Put the tabasco sauce in the bottom of a shot glass, pour equal parts Absolut Peppar and Everclear 190 then add salt. Set on fire and serve.",
      glass: 'Shot glass'
  },

  {
      name: "Bailey's Dream Shake",
      ingredients: [ 'Irish Cream', 'Vanilla ice-cream', 'Cream'],
      instructions: "Blend ingredients for 30 seconds. Definitely refreshing for a hot summer's day !",
      glass: 'Collins glass'
  },

  {
      name: "Dirty Banana",
      ingredients: [ 'Creme de Banane', 'Creme de Cacao', 'Kahlua', 'Vanilla ice-cream', 'Ice'],
      instructions: "blend ice and ice-cream in the blender until smooth. add liquers and continue blending until smooth. if needed add more ice-cream to acheive milk shake type consistency.",
      glass: 'Beer pilsner'
  },

  {
      name: "Charlie Coke",
      ingredients: [ 'Absolut Vodka', 'Coca-Cola'],
      instructions: "Add 1.5 oz. Absolut Vodka to 10 oz. cocktail glass filled with ice, top off with Coka-Cola.",
      glass: 'Cocktail glass'
  },

  {
      name: "Carmina Burana",
      ingredients: [ 'Vodka', 'Candy'],
      instructions: "Crush the two pieces of candy until they are pulverised. Pour the vodka into the shot glass before adding the powder. Stir it until the candy has dissolved in the liquor.",
      glass: 'Shot glass'
  },

  {
      name: "Cape Breton Lemonade",
      ingredients: [ 'Bacardi Limon', 'Lemonade'],
      instructions: "Mix in the lemonade with the Bacardi Limon. If it is a good lemonade you're using you can mix as much as half & half and not be able to taste the rum.",
      glass: 'Collins glass'
  },

  {
      name: "Monkey Spam",
      ingredients: [ 'Irish Cream', 'Fanta'],
      instructions: "Pour the Irish Cream into a highballglass. Pour the Fanta over it and watch as it explodes",
      glass: 'Highball glass'
  },

  {
      name: "Coon Dawg Punch",
      ingredients: [ 'Everclear', 'Fruit punch', 'Fruit'],
      instructions: "Put in punch first, then add everclear. For added flavor, soak the fruit wedges in everclear about an hour ahead of time. Fruit wedges make excellent snack. Best served in ice chest or jantorial trash can for mass comsumption.",
      glass: 'vote'
  },

  {
      name: "Cactus Bowl",
      ingredients: [ 'Pineapple juice', 'Lime juice', 'Light rum', 'Spiced rum', 'Amaretto'],
      instructions: "Blend all ingredients with ice. Serve in Margarita glass on rocks.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Japanese Slipper #2",
      ingredients: [ 'Midori melon liqueur', 'Vodka', 'Lemon juice'],
      instructions: "Shake with ice in cocktail shaker. Strain into cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "The Green One",
      ingredients: [ 'Vodka', 'Creme de Banane', 'Blue Curacao', 'Orange juice'],
      instructions: "shake with ice. pour into glass.",
      glass: 'Red wine glass'
  },

  {
      name: "Flaming Dragon",
      ingredients: [ 'Green Chartreuse', '151 proof rum'],
      instructions: "Mix together in a double shot glass. Light on fire. Let the flames warm the concoction about 20 secs. Blow out fire. Swallow quickly. Be careful as the glass may be hot. Now lay on the ground, put your claws in the air, and wrestle with the dragon.",
      glass: 'Shot glass'
  },

  {
      name: "Hunka Hunka Burnin Luv",
      ingredients: [ 'Vodka', 'Water', 'Kool-Aid'],
      instructions: "Pour all ingredients into a glass (larger than 12 oz.). Put a lid over the glass. Shake vigorously for 30 seconds.",
      glass: 'Beer mug'
  },

  {
      name: "Bull's sweat",
      ingredients: [ 'Sloe gin', 'Tabasco sauce'],
      instructions: "just mix, shake and pour.",
      glass: 'Shot glass'
  },

  {
      name: "Bumble Bee #1",
      ingredients: [ 'Irish Cream', 'Kahlua', 'Sambuca'],
      instructions: "This is a layered shot. First pour the Bailey's into the shot glass. Then take an upside down spoon and touch it to the inside wall of the glass. Carefully add the Kahlua. Repeat this process for the Sambuca. If done properly, the alcohol will stay separated and resemble a bumble bee. Enjoy!!!",
      glass: 'Shot glass'
  },

  {
      name: "BonBon",
      ingredients: [ 'Rumple Minze', 'Peppermint schnapps'],
      instructions: "Shake & Strain.",
      glass: 'Shot glass'
  },

  {
      name: "Bali Dream",
      ingredients: [ 'White rum', 'Black rum', 'Creme de Banane', 'Passoa', 'Coconut liqueur', 'Grenadine', 'Orange juice'],
      instructions: "Put all ingredients in shaker together with some ice-cubes. Shake well. Serve with piece of banana on top of the glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Lime Time",
      ingredients: [ 'Beer', 'Lime juice', 'Hoopers Hooch'],
      instructions: "Pour the beer into the pint glass. Add the lime juice and the Hooch. Stir with a spoon or something like that. Enjoy!",
      glass: 'Pint glass'
  },

  {
      name: "Galliano Hotshot #2",
      ingredients: [ 'Galliano', 'Coffee', 'Cream'],
      instructions: "Pour 2 cl Galliano into a shot glass, float 2cl hot filter coffee over it and top with lightly thickened cream as to create three layers.",
      glass: 'Shot glass'
  },

  {
      name: "Captain Pepper",
      ingredients: [ 'Spiced rum', 'Dr. Pepper'],
      instructions: "Mix. Then drink. Repeat as necessary.",
      glass: 'Highball glass'
  },

  {
      name: "Bailey's Comet #2",
      ingredients: [ 'Irish Cream', 'Goldschlager', '151 proof rum'],
      instructions: "layer in order given, splash 151 on top light on fire, sprinkle cinnamon on top to produce sparks instead of just a flame",
      glass: 'Shot glass'
  },

  {
      name: "Watermelon Shooter #4",
      ingredients: [ 'Southern Comfort', 'Pineapple juice', 'Cranberry juice', 'Sweet and sour'],
      instructions: "Mix ingredients in a cocktail shaker full of ice. Strain into glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Bartender's Margarita",
      ingredients: [ 'Gold tequila', 'Triple sec', 'Sweet and sour', 'Lime', 'Grand Marnier', 'Cranberry juice'],
      instructions: "Shake tequila, triple sec, sweet & sour, cranberry juice, and lime juice in a pint glass. Rim another pint glass with salt and transfer contents. Float the Gran Marnier, garnish with a lime and straw, and serve.",
      glass: 'Pint glass'
  },

  {
      name: "Pulp Vega",
      ingredients: [ 'Vodka', 'Tropicana', 'Crystal light', 'Cherry', 'Margarita mix'],
      instructions: "Crush the cherries in the glass and mix it with the other ingrediences",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Platina Blonde",
      ingredients: [ 'Tequila', 'Heavy cream'],
      instructions: "Poor Tequila in a glass, fill in with cream, stir.",
      glass: 'vote'
  },

  {
      name: "A.D.M. (After Dinner Mint)",
      ingredients: [ 'White Creme de Menthe', 'Southern Comfort', 'Vodka', 'Hot chocolate'],
      instructions: "shake vigorously",
      glass: 'Irish coffee cup'
  },

  {
      name: "Twinkle My Lights",
      ingredients: [ 'Chambord raspberry liqueur', 'Amaretto', '7-Up'],
      instructions: "mix in shaker over ice...strain into glass(es)",
      glass: 'Shot glass'
  },

  {
      name: "A Splash of Nash",
      ingredients: [ 'Cranberry juice', 'Soda water', 'Midori melon liqueur', 'Creme de Banane'],
      instructions: "Drop shot glass with banana & melon liquers into a 9 oz hi- ball glass containing soda water and cranberry juice. Drink in one shot.",
      glass: 'Highball glass'
  },

  {
      name: "Screaming White Orgasm",
      ingredients: [ 'Irish Cream', 'Kahlua', 'White rum', 'Triple sec', 'Milk', 'Ice'],
      instructions: "fill up the shaker with ice and put the ingredience in it. Shake it until it gets frosty on the outside. Before you start shaking,put icecubes in the glass and fill it up with water so the glass is cold when you have shaked the drink. Take the icecubes and water out of the glass,and fill the glass again vith icecubes and pour the drink in the glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Spider's Web",
      ingredients: [ 'Goldschlager', 'Strawberry juice', 'Whipped cream'],
      instructions: "put alchohol in shot glass, drop strawberry into glass, then try and make cream float on top.",
      glass: 'Shot glass'
  },

  {
      name: "Illusion",
      ingredients: [ 'Malibu rum', 'Midori melon liqueur', 'Vodka', 'Triple sec', 'Pineapple juice'],
      instructions: "pour all spirits in the shaker ... & top with a splash of pineapple juice",
      glass: 'Shot glass'
  },

  {
      name: "Earthquake #2",
      ingredients: [ 'Vodka', 'Gin', 'White Creme de Menthe', 'Ice'],
      instructions: "Pour vodka, gin and creme-de-menthe over lots of ice.",
      glass: 'vote'
  },

  {
      name: "Pink Panther Shake",
      ingredients: [ 'Milk', 'Raspberry jam', 'Vanilla ice-cream'],
      instructions: "Place all ingredients in a blender. Mix until smooth. Garnish with fresh of frozen berries.",
      glass: 'vote'
  },

  {
      name: "Sun Shake",
      ingredients: [ 'Milk', 'Orange juice', 'Vanilla ice-cream', 'Orange'],
      instructions: "Mix in blender until smooth. Garnish with slice of orange.",
      glass: 'vote'
  },

  {
      name: "Amaretto Sunrise",
      ingredients: [ 'Amaretto', 'Orange juice', 'Grenadine'],
      instructions: "Mix together the amaretto and orange juice. Pour into glass and then add the grenadine untill you see the sunrise.",
      glass: 'vote'
  },

  {
      name: "Matty's Magic Mixture",
      ingredients: [ 'Vodka', 'Grenadine', 'Orange juice', 'Tonic water'],
      instructions: "combine ingredients in mug and stir until fizzy",
      glass: 'Beer mug'
  },

  {
      name: "My Antonella",
      ingredients: [ 'Gin', 'Chambord raspberry liqueur', 'Tonic water', 'Lime', 'Olive', 'Ice'],
      instructions: "In a highball glass, combine Gin and Chambord over ice. Stir. Add two Italian green olives and fill with tonic water. Garnish with lime wedge.",
      glass: 'Highball glass'
  },

  {
      name: "Arizona Stingers",
      ingredients: [ 'Absolut Vodka', 'Iced tea'],
      instructions: "Place ice cubes in the hurricane glass . Add the 2 HEAPING shots of Absolute Vodka (Note: You can add as many shots of Absolute as you want!) Fill the rest of glass with the Arizona Icetea with lemon. Stir to mix using a spoon. Drink up and enjoy!!!!!!!",
      glass: 'Hurricane glass'
  },

  {
      name: "Orange Push-up",
      ingredients: [ 'Spiced rum', 'Grenadine', 'Orange juice', 'Sour mix'],
      instructions: "Combine liquors in a blender. Add a half scoop of ice and blend. Garnish with an orange and cherry flag. So good it will melt in your mouth!!!",
      glass: 'Hurricane glass'
  },

  {
      name: "151 Florida Bushwacker",
      ingredients: [ 'Malibu rum', 'Light rum', '151 proof rum', 'Dark Creme de Cacao', 'Triple sec', 'Milk', 'Coconut liqueur', 'Vanilla ice-cream'],
      instructions: "Combine all ingredients. Blend until smooth. Garnish with chocolate shavings if desired.",
      glass: 'Beer mug'
  },

  {
      name: "Beam Me Up Scottie Mac",
      ingredients: [ '151 proof rum', 'Creme de Banane', 'Irish Cream'],
      instructions: "Chill rum. Then layer. Creme de Banana first, then Bailey's and float rum on top.",
      glass: 'Champagne flute'
  },

  {
      name: "Watermelon Shooter #3",
      ingredients: [ 'Pineapple juice', 'Bourbon', 'Ice', 'Grenadine'],
      instructions: "In a large juice or water pitcher filled with ice cubes, pour equal parts pineapple juice and bourbon. Stir, then add a splash of grenadine to give the mixture a pink, almost watermelon, tint. Stir until well chilled. Pour into shot glass, straining ice, and enjoy.",
      glass: 'Shot glass'
  },

  {
      name: "Zizi Coin-coin",
      ingredients: [ 'Triple sec', 'Lemon juice', 'Ice', 'Lemon'],
      instructions: "Pour 5cl of Triple sec on ice, add 2cl of fresh lemon (or lime) juice, stir gently, and finally add slices of lemon/lime in glass.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Banana Cream Pi",
      ingredients: [ 'Malibu rum', 'Banana liqueur', 'Pineapple juice'],
      instructions: "This drink can be mixed with ice added, or put into a blender with ice, to be crushed. I like it on ice.",
      glass: 'Hurricane glass'
  },

  {
      name: "50/50",
      ingredients: [ 'Vanilla vodka', 'Grand Marnier', 'Orange juice'],
      instructions: "fill glass with crushed ice. Add vodka. Add a splash of grand-marnier. Fill with o.j.",
      glass: 'vote'
  },

  {
      name: "Sex On Acid",
      ingredients: [ 'Jägermeister', 'Midori melon liqueur', 'Raspberry liqueur', 'Pineapple juice', 'Cranberry juice'],
      instructions: "Shake ingredients with ice. Strain. Serve as a shooter.",
      glass: 'Shot glass'
  },

  {
      name: "Tequila Surprise",
      ingredients: [ 'Tequila', 'Tabasco sauce'],
      instructions: "Fill shot glass with Tequila. Add drops of Tobasco sauce.",
      glass: 'Shot glass'
  },

  {
      name: "Gary's Poison",
      ingredients: [ 'Spiced rum', 'Orange juice', 'Pineapple juice', 'Triple sec'],
      instructions: "Pour in Rum and then triple sec. Next pour in OJ and Pinapple. Grab that Gary.",
      glass: 'vote'
  },

  {
      name: "Laser Beam",
      ingredients: [ 'Southern Comfort', 'Amaretto', 'Sloe gin', 'Vodka', 'Triple sec', 'Orange juice'],
      instructions: "combine all liquor in full glass of ice. shake well. garnish with orange and cherry",
      glass: 'Collins glass'
  },

  {
      name: "Cream Soda",
      ingredients: [ 'Spiced rum', 'Ginger ale'],
      instructions: "Pour 1oz of Spiced Rum into a highball glass with ice. Fill with Ginger Ale.",
      glass: 'Highball glass'
  },

  {
      name: "ACID",
      ingredients: [ '151 proof rum', 'Bourbon'],
      instructions: "Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser.",
      glass: 'Shot glass'
  },

  {
      name: "Agent Orange",
      ingredients: [ 'Yukon Jack', 'Bourbon', 'Apple schnapps', 'Vodka', 'Light rum', 'Triple sec', 'Grenadine', 'Orange juice'],
      instructions: "Hurricane glass filled with ice add ingredients shake cherry and orange garnish",
      glass: 'Hurricane glass'
  },

  {
      name: "Grape Crush",
      ingredients: [ 'Vodka', 'Chambord raspberry liqueur', 'Sour mix'],
      instructions: "Small shaker with ice add ingredients stir strain into shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Alien Secretion #2",
      ingredients: [ 'Vodka', 'Midori melon liqueur', 'Malibu rum', 'Pineapple juice'],
      instructions: "small shaker with ice add ingredients stir strain into shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Southern Blues",
      ingredients: [ 'Southern Comfort', 'Blueberry schnapps'],
      instructions: "small shaker with ice add ingredients stir strain into shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Darth Vader",
      ingredients: [ 'Vodka', 'Gin', 'Light rum', 'Tequila', 'Triple sec', 'Sour mix', 'Jägermeister'],
      instructions: "Collins glass filled with ice add ingredients up to sour mix shake fill with Jägermeister",
      glass: 'Collins glass'
  },

  {
      name: "Arctic Fish",
      ingredients: [ 'Vodka', 'Grape soda', 'Orange juice', 'Ice', 'Candy'],
      instructions: "Fill glass with ice and fish, add vodka, grape soda and orange juice. DO NOT STIR!!!!! Serve well chilled.",
      glass: 'Beer pilsner'
  },

  {
      name: "Alligator",
      ingredients: [ 'Midori melon liqueur', 'Orange juice', 'Ice'],
      instructions: "Fill glass half way with ice. Add o.j. and Midori and give a little stir.",
      glass: 'Cocktail glass'
  },

  {
      name: "Crocodile",
      ingredients: [ 'Midori melon liqueur', 'Bacardi Limon', 'Sprite', 'Ice'],
      instructions: "Add a few cubes of ice to glass and then add Midori and Bacardi. Fill the rest of the way with the soda and give a little stir.",
      glass: 'vote'
  },

  {
      name: "Gege",
      ingredients: [ 'Rum', 'Creme de Banane', 'Lemon juice'],
      instructions: "Shake. Garnish with red cherry",
      glass: 'Cocktail glass'
  },

  {
      name: "Finn Roses",
      ingredients: [ 'Bourbon', 'Apricot brandy', 'Dry Vermouth'],
      instructions: "stir",
      glass: 'Cocktail glass'
  },

  {
      name: "Lady Scarlett",
      ingredients: [ 'Gin', 'Triple sec', 'Dry Vermouth', 'Lime juice', 'Monin bitter'],
      instructions: "Shake. Garnish with cherry, lemon-peel",
      glass: 'Cocktail glass'
  },

  {
      name: "Scanex",
      ingredients: [ 'Vodka', 'Cranberry liqueur', 'Lemon juice', 'Grenadine', 'Sugar'],
      instructions: "shake.",
      glass: 'Cocktail glass'
  },

  {
      name: "Yaka",
      ingredients: [ 'Absolut Vodka', 'Everclear', 'Lemonade', 'Lemon', 'Water'],
      instructions: "Combine the water and lemonade mix, following the directions on the lemonade mix. Add everclear and absolute vodka. Then add the lemon slices and shake to mix. serve cold",
      glass: 'Pitcher'
  },

  {
      name: "Passcack Valley Orgasm",
      ingredients: [ 'Vodka', 'Amaretto', 'Kahlua', 'Cream'],
      instructions: "Put in iced shaker and mix well, strain in to a Highball glass",
      glass: 'Highball glass'
  },

  {
      name: "Grim Reaper",
      ingredients: [ 'Kahlua', '151 proof rum', 'Grenadine'],
      instructions: "Mix Kahlua and 151 in glass. Quickly add ice and pour grenadine over ice to give ice red tint.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Grateful Dead",
      ingredients: [ 'Tequila', 'Vodka', 'Light rum', 'Gin', 'Chambord raspberry liqueur'],
      instructions: "shake ingredients and pour over ice...",
      glass: 'Collins glass'
  },

  {
      name: "Sweets to the Sweet",
      ingredients: [ 'Absolut Citron', 'Zima', 'Lime juice cordial', 'Lemon'],
      instructions: "Fill glass half way with vodka, fill rest of way with Zima. Then add the lime juice (Rose's Lime Juice works best). Now stir and add the slice of lime.",
      glass: 'Beer mug'
  },

  {
      name: "Richie Family",
      ingredients: [ 'Absolut Vodka', 'Whiskey', 'Irish Cream', 'Coffee', 'Brown sugar'],
      instructions: "Mix vodka, whiskey and Bailey's. Add the coffea and the brown sugar. Blend.",
      glass: 'Beer pilsner'
  },

  {
      name: "Juicy Lucy",
      ingredients: [ 'Vodka', 'Gin', 'Blue Curacao', 'Orange juice', 'Sprite'],
      instructions: "Just mix them!!!",
      glass: 'Beer mug'
  },

  {
      name: "Blue Kisok",
      ingredients: [ 'Blue Curacao', 'Vodka', 'Lime juice', 'Sprite'],
      instructions: "Pour an half ounce of Blue Curacao into shot glass. Follow with quarter of an ounce of Vodka. (Try and use Smirnoff) One table spoon of lime juice. Then fill rest of glass with sprite.",
      glass: 'Shot glass'
  },

  {
      name: "Speedball",
      ingredients: [ 'Vodka', 'Gin', 'Tequila', 'Lime juice'],
      instructions: "just pour the alcoholic ingridents in a shot glas and when you done that squeze a little amount of lime juice on top",
      glass: 'Shot glass'
  },

  {
      name: "San Diego Seabreeze",
      ingredients: [ 'Vodka', 'Raspberry schnapps', 'Blueberry schnapps', 'Orange juice', 'Pineapple juice', 'Blackberry brandy'],
      instructions: "Build all ingrediants in a collins glass, cover, shake and serve",
      glass: 'Collins glass'
  },

  {
      name: "Russian Quallude",
      ingredients: [ 'Vodka', 'Irish Cream', 'Creme de Cacao', 'Frangelico'],
      instructions: "Shake all ingredients and serve over ice. (crushed)",
      glass: 'Cocktail glass'
  },

  {
      name: "Fuck You",
      ingredients: [ 'Tequila', 'Bourbon', 'Bourbon', 'Goldschlager', 'Rum', 'Blueberry schnapps'],
      instructions: "Mix each ingredient in a glass. Tilt glass 180 degrees and slam it!",
      glass: 'Shot glass'
  },

  {
      name: "Leche de Monja",
      ingredients: [ 'Egg', 'Lime juice', 'Sugar', 'Pisco'],
      instructions: "Place whole eggs, in shell, (organic would be preferable) in a jar. Cover with lemon/lime juice. Seal the jar and refrigerate. Leave the eggs to marinate for 2-3 weeks. The shells should become soft. Place the eggs and juice in a blender and blend until smooth. Strain to remove egg membranes. Add sugar and pisco to taste.",
      glass: 'vote'
  },

  {
      name: "Girl Scout Cookie",
      ingredients: [ 'Kahlua', 'Goldschlager', 'Irish Cream'],
      instructions: "Pour all ingredients into mixing cup with ice. Shake and strain into double shot glass. Drink soon after pouring before liquors separate.",
      glass: 'Shot glass'
  },

  {
      name: "The Dragon",
      ingredients: [ 'Vodka', 'Kool-Aid', 'Orange juice', 'Strawberry schnapps'],
      instructions: "Just Dump 'EM All In A Glass & Mix 'Em All Up.",
      glass: 'Cocktail glass'
  },

  {
      name: "Harry Alligator",
      ingredients: [ 'Everclear', 'Vodka', 'Tequila', 'Peppermint schnapps', 'Lemon'],
      instructions: "Layer ingrediants in order listed above. Then squeeze lemon over layered ingrediants. Be sure to mount lemon wedge on side of glass or place in glass.",
      glass: 'vote'
  },

  {
      name: "Lighthouse",
      ingredients: [ 'Kahlua', 'Irish Cream', '151 proof rum'],
      instructions: "Pour Kahlua in shot glass then with a spoon slowly pour Irish Cream into the shot glass on top of the Kahlua then pour the 151 Rum with the Spoon slowly on top of the Irish Cream then light on fire.. Blow out Flame Before Drinking!",
      glass: 'Shot glass'
  },

  {
      name: "Red Snapper #2",
      ingredients: [ 'Crown Royal', 'Amaretto', 'Cranberry juice'],
      instructions: "Mix it all over ice, strain into shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Satan's Revenge",
      ingredients: [ 'Tequila', 'Bourbon', 'Goldschlager', 'Tabasco sauce'],
      instructions: "combine in sequence in shot glass, shoot!",
      glass: 'Shot glass'
  },

  {
      name: "Psycho Joe",
      ingredients: [ 'Kahlua', 'Peppermint schnapps', 'Coffee'],
      instructions: "1) Put all ingredients in mixing glass 2) Shake 3) Pour into coffee mug 4) Add sugar and cream if neccasary",
      glass: 'Coffee mug'
  },

  {
      name: "The Pernod Demon",
      ingredients: [ 'Pernod', 'Lemon', 'Tabasco sauce', 'Sugar'],
      instructions: "1) Coat the lemon wedge with sugar 2) Douse the lemon wedge with the 6 dashes of tobasco 3) Fill the shot glass with pernod To administer this shot, suck the lemon and then shoot the pernod.",
      glass: 'Shot glass'
  },

  {
      name: "Irish Cream Special",
      ingredients: [ 'Ice', 'Irish Cream', 'Milk'],
      instructions: "Put ice in bottom of glass. Slowly pour Baliey's Irish Cream over ice Next pour in milk and then stir gently. Add more to taste. For chocoholics add Hearshy's Chocolate sauce.",
      glass: 'Brandy snifter'
  },

  {
      name: "El Presidente Cocktail #2",
      ingredients: [ 'Dark rum', 'Sweet Vermouth', 'Grenadine'],
      instructions: "Shake with ice and strain into a cocktail glass. Add a cherry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Golden Furnace",
      ingredients: [ 'Goldschlager', 'Tabasco sauce'],
      instructions: "Pour Goldschlagger into a shot glass. Add a splash of Tabasco sauce. Drink and run for water.",
      glass: 'Shot glass'
  },

  {
      name: "Sancho Panza",
      ingredients: [ 'Sherry', 'Campari', 'Angostura bitters'],
      instructions: "Stir and serve neat. Add a cherry.",
      glass: 'Sherry glass'
  },

  {
      name: "Freddy Kruger",
      ingredients: [ 'Jägermeister', 'Sambuca', 'Vodka'],
      instructions: "make it an ample size shot!!",
      glass: 'Shot glass'
  },

  {
      name: "Gold Baron",
      ingredients: [ 'Rumple Minze', 'Goldschlager'],
      instructions: "Float Goldschlager on top of Rumple and enjoy!",
      glass: 'Shot glass'
  },

  {
      name: "Red Baron",
      ingredients: [ 'Rumple Minze', 'Cinnamon schnapps'],
      instructions: "Float schnapps on top of Rumple and enjoy!",
      glass: 'Shot glass'
  },

  {
      name: "Golden Star",
      ingredients: [ 'Vanilla schnapps', 'Amaretto', 'Ice-cream'],
      instructions: "put two scoops ice-cream in blender add liquor and blend until like a milk shake.",
      glass: 'Parfait glass'
  },

  {
      name: "Vodka Orange",
      ingredients: [ 'Absolut Vodka', 'Orange juice'],
      instructions: "serve with ice. fresh pressed juice tastes best.",
      glass: 'Cocktail glass'
  },

  {
      name: "Firehammer",
      ingredients: [ 'Vodka', 'Amaretto', 'Triple sec', 'Lemon juice'],
      instructions: "combine with ice in shaker strain into cocktail glass",
      glass: 'Cocktail glass'
  },

  {
      name: "Forest Fire",
      ingredients: [ 'Everclear', 'Tabasco sauce'],
      instructions: "Mix in shot glass, it's that simple. Use more Tabasco for more fire, less for more alcohol.",
      glass: 'Shot glass'
  },

  {
      name: "Italian Ice #2",
      ingredients: [ 'Blue Curacao', 'Chambord raspberry liqueur', 'Southern Comfort', 'Sprite'],
      instructions: "Place all ingredients in a shaker. Shake well and serve over ice.",
      glass: 'Highball glass'
  },

  {
      name: "Luftwaffe",
      ingredients: [ 'Chocolate syrup', 'Jägermeister', 'Butterscotch schnapps'],
      instructions: "Put 1/3 chocolate syrup, then 1/3 Jägermeister, and then 1/3 Butterscotch of the glass.",
      glass: 'Highball glass'
  },

  {
      name: "Giraffe",
      ingredients: [ 'Midori melon liqueur', 'Vodka', 'Pineapple juice', 'Cranberry juice'],
      instructions: "Pour Midori into a hurricane glass over ice, add Vodka, Pineapple juice, then float cranberry juice.",
      glass: 'Hurricane glass'
  },

  {
      name: "Concord",
      ingredients: [ 'Coffee liqueur', 'Irish Cream', '151 proof rum'],
      instructions: "Layer ingredients in above order in a shot glass. Light Bacardi 151 Rum, and serve.",
      glass: 'Shot glass'
  },

  {
      name: "Lava Flow",
      ingredients: [ 'Light rum', 'Malibu rum', 'Strawberries', 'Banana', 'Pineapple juice', 'Coconut cream'],
      instructions: "Blend banana, coconut cream, and pineapple juice in blender and set aside. In bottom of hurricane glass, stir together both rums and strawberries. Pour banana/coconut/pineapple mix into glass slowly. The strawberry/rum mix should creep up the sides of the glass to make a wonderful looking (and tasting) summertime cocktail!",
      glass: 'Hurricane glass'
  },

  {
      name: "Pink Gin #2",
      ingredients: [ 'Gin', 'Cranberry juice'],
      instructions: "Add cranberry juice to gin and pour into shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Purple Crayon",
      ingredients: [ 'Chambord raspberry liqueur', 'Vodka', 'Pineapple juice'],
      instructions: "Pour Chambord and Vodka over ice. Fill to top with pineapple juice. Garnish with purple grape and pineapple slice.",
      glass: 'Highball glass'
  },

  {
      name: "Feel The Burn",
      ingredients: [ 'Kahlua', 'Irish Cream', 'Ouzo', 'Bourbon', '151 proof rum'],
      instructions: "Layer all ingredients and light on fire to warm. Blow out flame and drink in one gulp.",
      glass: 'Cocktail glass'
  },

  {
      name: "Vanilla Vargas",
      ingredients: [ 'Ice', '151 proof rum', 'Crown Royal', 'Vanilla liqueur', 'Pepsi Cola'],
      instructions: "Fill the highball glass (or preferrably a 32oz glass) half way with crushed ice. Then add the shots of alcohol in this order: bacardi 151 rum, crown royal, and vanilla liqeur. Now pour one can of pepsi into the mixture. Finally, stir well with a barspoon, or any long spoon to evenly distribute the ingredients.",
      glass: 'Highball glass'
  },

  {
      name: "Golden Cola",
      ingredients: [ 'Ice', 'Goldschlager', '151 proof rum', 'Vanilla liqueur', 'Coca-Cola'],
      instructions: "Fill highball glass(or preferably a 32 oz. glass) halfway with crushed ice. Add alcohol contents over ice. Pour coke over mixture. Mix well.",
      glass: 'Highball glass'
  },

  {
      name: "Full Moon Fever",
      ingredients: [ 'Spiced rum', 'Light rum', 'Malibu rum', 'Midori melon liqueur', 'Sour mix', 'Pineapple juice'],
      instructions: "Add the three rums and the Midori in highball glass with ice. Add a little Sour mix for flavor and fill the rest with pineapple juice. It's a nice light green color. Garnish with a pineapple wedge and a cherry.",
      glass: 'Highball glass'
  },

  {
      name: "Hunch Punch",
      ingredients: [ 'Everclear', 'Fruit punch', 'Fruit'],
      instructions: "Put them all together and mix it with a lot of ice. For big parties use more of each and mix in a garbage can.",
      glass: 'vote'
  },

  {
      name: "Smashing Pumpkin",
      ingredients: [ 'Kahlua', 'Irish Cream', 'Goldschlager'],
      instructions: "small shaker with ice add ingredients stir strain into shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Caribbean Smoked Torch",
      ingredients: [ 'Brandy', 'Dark rum', 'Malibu rum', 'Midori melon liqueur', 'Orange juice', 'Pineapple juice', 'Cranberry juice', 'Ice', 'Chambord raspberry liqueur', '151 proof rum'],
      instructions: "Mix all the ingredients, except for the 151 rum in a tin glass or shaker. Steam the snifter, using the 1/2oz. of 151 lighting it, until it consumes itself. After that pour the content of the shaker in the hot snifter. It will create a really good smelling cloud of smoke, that it's what distinguish this coktail.",
      glass: 'Brandy snifter'
  },

  {
      name: "Bubble Gum",
      ingredients: [ 'Vodka', 'Banana liqueur', 'Orange juice', 'Peach schnapps'],
      instructions: "Layer in order into a shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Bakkus",
      ingredients: [ 'Vodka', 'Pisang Ambon', 'Malibu rum', 'Orange juice', 'Lemon juice'],
      instructions: "Pour the ingredients into a cocktail shaker and shake well, pour into a tall cocktail glass and add a slice of lemon.",
      glass: 'Cocktail glass'
  },

  {
      name: "Bahama Mama Sunrise",
      ingredients: [ 'Dark rum', 'Spiced rum', 'Orange juice', 'Pineapple juice', 'Grenadine'],
      instructions: "Serve over ice in a tall glass",
      glass: 'Highball glass'
  },

  {
      name: "Gun Barrel",
      ingredients: [ 'Absolut Kurant', 'Triple sec', 'Cranberry juice'],
      instructions: "Put into mixing glass all of above. Mix well, pour into cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Peppermint Patty",
      ingredients: [ 'Peppermint schnapps', 'Chocolate syrup'],
      instructions: "Put a shot of peppermint schnapps in your mouth. Do not swallow. Squirt chocolate (not too much!) into your mouth. Shake head vigorously and then swallow.",
      glass: 'Shot glass'
  },

  {
      name: "Frogster",
      ingredients: [ 'Blue Curacao', 'Tequila', 'Orange juice', 'Ice'],
      instructions: "Fill highball glass with ice, add the blue curacao, add the tequila and finally for that yummy green color, fill the glass with the orange juice.",
      glass: 'Highball glass'
  },

  {
      name: "Snowball #2",
      ingredients: [ 'Advocaat', 'Sprite', 'Ice'],
      instructions: "Take the glass and rub the edge on a lemon, then dip the rim in sugar. Drop the ice cubes into the glass, pour a 1/3 liqueur and fill it up with Sprite. Stir.",
      glass: 'Cocktail glass'
  },

  {
      name: "Blue Bay",
      ingredients: [ 'Blue Curacao', 'Bitter lemon', 'Ice'],
      instructions: "Mix in highball glass. Stirr. Garnish with slice of lemon.",
      glass: 'Highball glass'
  },

  {
      name: "Moonlight Serenade",
      ingredients: [ 'Orange liqueur', 'Orange juice', 'Ice'],
      instructions: "Mix in highball glass. Stirr. Garnish with slice of orange.",
      glass: 'Highball glass'
  },

  {
      name: "Peach Bowl",
      ingredients: [ 'Peach liqueur', 'Orange juice', 'Ice'],
      instructions: "Mix in highball glass. Stirr. Garnish with slice of orange.",
      glass: 'Highball glass'
  },

  {
      name: "Cool Coco",
      ingredients: [ 'Coconut liqueur', 'Grapefruit juice', 'Ice'],
      instructions: "Mix in highball glass. Stirr. Garnish with cherries.",
      glass: 'Highball glass'
  },

  {
      name: "Kiwi Lemon",
      ingredients: [ 'Kiwi liqueur', 'Bitter lemon', 'Ice'],
      instructions: "Mix in highball glass. Stirr. Garnish with slice of kiwi.",
      glass: 'Highball glass'
  },

  {
      name: "Terminator",
      ingredients: [ '151 proof rum', 'Rumple Minze'],
      instructions: "151 first, then Rumple Minze",
      glass: 'Shot glass'
  },

  {
      name: "Virgin Manhattan",
      ingredients: [ 'Cranberry juice', 'Orange juice', 'Maraschino cherry juice', 'Lemon juice', 'Orange bitters'],
      instructions: "Shake with ice, strain and serve in a chilled cocktail glass, on on the rocks in an Old-fashioned glass. Granish with maraschino cherry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Green angel",
      ingredients: [ 'Pisang Ambon', 'Peachtree schnapps', 'Malibu rum', 'Lemonade', 'Sprite', 'Ice', 'Food coloring'],
      instructions: "Blend Pisang Ambon, Peach Tree, Malibu and lemon squash together in a blender. Put ice cubes in the glas and pour the mix over. Fill up with Sprite, and add a drop of blue syrup. Stir and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Joel's Pet Monkey",
      ingredients: [ 'Triple sec', 'Bacardi Limon', 'Maui', 'Lime juice'],
      instructions: "Mix in shot glass in order of appearance in ingredients list.",
      glass: 'Shot glass'
  },

  {
      name: "Wave Runner (a.k.a. Rave Gunner)",
      ingredients: [ 'Light rum', 'Cranberry juice', 'Sprite'],
      instructions: "Pour rum and cranberry juice into a tall glass. Slowly add Sprite, stopping immediately when the color changes from red to pink.",
      glass: 'vote'
  },

  {
      name: "Urine Sample",
      ingredients: [ 'Galliano', 'Sambuca'],
      instructions: "Just pour it in",
      glass: 'vote'
  },

  {
      name: "Wooly Mitten",
      ingredients: [ 'Southern Comfort', 'Peppermint schnapps', 'Irish Cream', 'Cocoa powder', 'Water', 'Whipped cream'],
      instructions: "Put Coaca mix in the mug fill half way with hot water - stir. Pour in Southern Comfort, peppermint schnapps and Bailey's - stir. Top off with hot water. Top with whipped cream (optional) .",
      glass: 'Coffee mug'
  },

  {
      name: "Dr. Pepper #2",
      ingredients: [ 'Amaretto', 'Southern Comfort', 'Coca-Cola', 'Ice'],
      instructions: "Combine the shots in a 'collins' glass. Fill the rest of the glass 3/4 full with Coke. Add crushed ice.",
      glass: 'Collins glass'
  },

  {
      name: "The Piledriver",
      ingredients: [ 'Dark rum', 'Vodka', 'Coca-Cola', 'Orange juice'],
      instructions: "Add 1/3 rum,1/3 vodka , and combine coca-cola and orange juice to fill glass. Add ice if you have room!",
      glass: 'Beer mug'
  },

  {
      name: "Spiced apple",
      ingredients: [ 'Apple brandy', 'Goldschlager', 'Spiced rum'],
      instructions: "In a shot glass pour in apple brandy first, then Goldschlager, then Captain Morgan's. Shoot!",
      glass: 'Shot glass'
  },

  {
      name: "Smooch",
      ingredients: [ 'Malibu rum', 'Midori melon liqueur', 'Sloe gin', 'Amaretto', 'Peach schnapps', 'Orange juice', 'Pineapple juice'],
      instructions: "pour into a tall glass over ice, shake to mix all ingredients well, garnish with a cherry or an orange slice if you so desire",
      glass: 'vote'
  },

  {
      name: "Nuthugger",
      ingredients: [ '151 proof rum', 'Vodka', 'Lime juice', 'Beer'],
      instructions: "Pour in hard liquors first and lime juice follows. Top with beer until full. Do not stir. Enjoy!!",
      glass: 'vote'
  },

  {
      name: "Pink Squirrel #2",
      ingredients: [ 'Grenadine', 'Creme de Cacao', 'Milk'],
      instructions: "Pour ingredients over ice filled glass and shake or stir to mix and then strain.",
      glass: 'Cocktail glass'
  },

  {
      name: "Kill Me Now",
      ingredients: [ 'Tequila', '151 proof rum', 'Vodka', 'Gin', 'Amaretto'],
      instructions: "Mix all ingredients in hurricane glass.",
      glass: 'Hurricane glass'
  },

  {
      name: "Hot Creamy Bush",
      ingredients: [ 'Irish whiskey', 'Irish Cream', 'Coffee'],
      instructions: "Combine all ingredients in glass",
      glass: 'Irish coffee cup'
  },

  {
      name: "Hot Peppermint Chocolate",
      ingredients: [ 'Hot chocolate', 'Rumple Minze'],
      instructions: "Make hot chocolate (preferably using water) according to instructions. Mix in Rumple Minze and enjoy.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Exotic summernight",
      ingredients: [ 'Grenadine', 'Vodka', 'Orange juice', 'Pineapple juice'],
      instructions: "Mix vodka and orange- and pineapplejuice and pour over ice in a glass. Layer a little grenadine on top. Garnish with a slice of orange.",
      glass: 'Highball glass'
  },

  {
      name: "Walker's Revenge",
      ingredients: [ 'Light rum', 'Dark rum', 'Iced tea'],
      instructions: "Add rums over ice and fill glass with ice tea. Best in a tall frosty glass.",
      glass: 'Highball glass'
  },

  {
      name: "Booty Juice",
      ingredients: [ 'Midori melon liqueur', 'Malibu rum', 'Spiced rum', '151 proof rum'],
      instructions: "Fill mixing glass 1/2 full with ice. Add all ingerdients. Strain into a rocks glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Naked Navel",
      ingredients: [ 'Absolut Vodka', 'Peach schnapps'],
      instructions: "Keep both bottles in the freezer. Pour vodka first to the 1 oz line. Pour in the schnapps, which will form a ball in the bottom of the glass.",
      glass: 'Shot glass'
  },

  {
      name: "Jan's Jello Shots",
      ingredients: [ 'Jello', 'Water', 'Vodka'],
      instructions: "Dissolve jello with 1 cup boiling water, add 1 cup vodka and srir, pour into shot glasses, ice trays, or in 1 oz plastic cups found at party supply stores (they even have little lids for them), chill until firm. Each person can use a knife or their tongue to loosen the edges of the jello and then suck them down. If you use the 1 oz plastic cups and lids you can serve them by placing all of the cups in a large bowl filled with ice...they will stay cold longer, and they look really festive! * Try making an assortment using several flavors of jello!",
      glass: 'Shot glass'
  },

  {
      name: "Grendel",
      ingredients: [ 'Triple sec', 'Blue Curacao', 'White Creme de Menthe', 'Advocaat', 'Vodka', 'Rum', 'Cream', 'Lemonade'],
      instructions: "Shaken with ice and put in a pint glass and topped with lemonade.",
      glass: 'Pint glass'
  },

  {
      name: "Sex on the Pool Table",
      ingredients: [ 'Triple sec', 'Peach schnapps', 'Chambord raspberry liqueur', 'Midori melon liqueur', 'Grapefruit juice'],
      instructions: "Over ice mix equal parts of each alchohol. Top with the grapefruit juice. Shake to blend.",
      glass: 'vote'
  },

  {
      name: "Three Wise Men (vodka)",
      ingredients: [ 'Jägermeister', 'Absolut Vodka', 'Rumple Minze'],
      instructions: "pour 2/3 of an oz. of each ingrediant into a shot glass and drink.",
      glass: 'Shot glass'
  },

  {
      name: "Ruby Relaxer",
      ingredients: [ 'Peach schnapps', 'Vodka', 'Malibu rum', 'Pineapple juice', 'Cranberry juice'],
      instructions: "Combine shots of peach schnapps, vodka and malibu rum. Fill glass almost to top with pineapple juice and splash in cranberry juice for a touch o' color.",
      glass: 'Cocktail glass'
  },

  {
      name: "Raspberry kamikaze",
      ingredients: [ 'Vodka', 'Triple sec', 'Raspberry liqueur'],
      instructions: "Mix all ingredients in a glass and add ice ! Enjoy!!",
      glass: 'vote'
  },

  {
      name: "Nightcap",
      ingredients: [ 'Kahlua', 'Nutmeg', 'Milk', 'Powdered sugar'],
      instructions: "Heat milk. Add sugar. Add Kahlua. Nutmeg on top. Sleep tight.",
      glass: 'Coffee mug'
  },

  {
      name: "Pinky",
      ingredients: [ 'Rumple Minze', 'Firewater'],
      instructions: "Pour Rumple Minze into glass first, add Firewater",
      glass: 'Shot glass'
  },

  {
      name: "Paul Raspberry",
      ingredients: [ 'Vodka', 'Milk', 'Grenadine'],
      instructions: "Pour vodka in medium-sized shot glass Add a mouthful of 2% milk Add a drop or two of grenadine Ice optional.",
      glass: 'Shot glass'
  },

  {
      name: "Plead the 5th",
      ingredients: [ 'Gin', 'Sambuca', 'Kahlua'],
      instructions: "mix all on the rocks,shake,strain,and serve.",
      glass: 'Shot glass'
  },

  {
      name: "Passed Out Naked on the Bathroom Floor",
      ingredients: [ 'Rumple Minze', 'Jägermeister', 'Gold tequila', '151 proof rum'],
      instructions: "Pour each ingredient into the shot glass, in this order: Rumple Minze, Jägermeister, Jose Cuervo Gold Tequila, then Bacardi 151 Rum. No need to mix, it mixes fine in this order.",
      glass: 'Shot glass'
  },

  {
      name: "Wild Sex",
      ingredients: [ 'Ice', 'Malibu rum', 'Peach schnapps', '151 proof rum', 'Orange juice', 'Cranberry juice', 'Pineapple juice', 'Grenadine'],
      instructions: "Fill glass with ice and pour Malibu, peach schnapps and 151 into glass. After putting the right amount of liquor put your juices on top and splash of grenadine. When you have all of that done take your shaker tin, fitting it on top of the glass and give it a couple of good shakes.",
      glass: 'Hurricane glass'
  },

  {
      name: "Cazuela",
      ingredients: [ 'Tequila', 'Salt', 'Lime', 'Orange', 'Grapefruit', 'Lemon', 'Grenadine', 'Squirt'],
      instructions: "In a cazuela that is made of clay, put ice, salt, lime, orange, lemon, and grapefruit in cazuela then add granadine, and the tequila, then fill with Squirt, use a straw to stir.",
      glass: 'vote'
  },

  {
      name: "Lifesaver",
      ingredients: [ 'Midori melon liqueur', 'Light rum', 'Pineapple juice'],
      instructions: "Shake well. Serve in rocks glass",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Voodoo Dew",
      ingredients: [ '151 proof rum', 'Mountain Dew'],
      instructions: "Poor shots into jar or glass and then poor can of dew in!! Mix well and enjoy!!!",
      glass: 'Mason jar'
  },

  {
      name: "Hispaniola",
      ingredients: [ 'Dark rum', 'Curacao', 'Sweet and sour'],
      instructions: "Add ice and a cherry. Stir.",
      glass: 'vote'
  },

  {
      name: "Geting",
      ingredients: [ 'Absolut Vodka', 'Banana liqueur', 'Ginger ale'],
      instructions: "Start with the ice then you take the vodka then the liquor then the ginger ale",
      glass: 'Highball glass'
  },

  {
      name: "Jack Daniel's Lynchburg Lemonade",
      ingredients: [ 'Bourbon', 'Sweet and sour', 'Triple sec', 'Sprite'],
      instructions: "Add ice and stir. Garnish with lemon slices and cherries.",
      glass: 'Mason jar'
  },

  {
      name: "Lemon Splash Martini",
      ingredients: [ 'Vodka', 'Triple sec', 'Amaretto', 'Lemon'],
      instructions: "Mix Vodka, Amaretto, Tripple Sec and a 1/2 squeeze of Lemon wedge in a shaker with ice. Shake. Squeeze remaining lemon juice into Martini glass. Pour mixture into glass. Garnish with a lemon twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Moonlight Drive",
      ingredients: [ 'Vodka', 'Rum', 'Sloe gin', 'Malibu rum', 'Amaretto', 'Orange juice', 'Pineapple juice'],
      instructions: "First apply a alcohol into cup. Then add juices. Shake,shake, rattle and roll. Then put into cup with ice. Add cherries and lemons.",
      glass: 'Punch bowl'
  },

  {
      name: "Camel Hump",
      ingredients: [ 'Butterscotch schnapps', 'Irish Cream'],
      instructions: "Pour Butterscotch Schnapps in a shot glass 3/4 of the way full. Fill rest of drink with Bailey's Irish Cream.",
      glass: 'Shot glass'
  },

  {
      name: "The Drink",
      ingredients: [ 'Sherry', 'Gin', 'Ice'],
      instructions: "Rinse glass with Sherry, discard Sherry. Shake gin over ice in separate glass to chill. Fill rinsed glass with ice, pour chilled gin over ice. Garnish with lemon twist (optional).",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Pablo's shot",
      ingredients: [ 'Scotch', 'Kirschwasser', 'Dubonnet Rouge', 'Amaretto', 'Mint syrup'],
      instructions: "First, pour the scotch in a shot glass, then pour the kirsch and amaretto. Add the Dubonnet rouge very carefully trying not to mix the ingredients. Finally pour the mint. Do not mix. Drink in one shot.",
      glass: 'Shot glass'
  },

  {
      name: "Midnight Mint",
      ingredients: [ 'Irish Cream', 'White Creme de Menthe', 'Cream'],
      instructions: "If available, rim cocktail (Martini) glass with sugar syrup then dip into chocolate flakes or powder. Add ingredients into shaker with ice. Shake well then strain into cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Creole Scream",
      ingredients: [ 'White rum', 'Dry Vermouth', 'Angostura bitters', 'Grenadine', 'Olive'],
      instructions: "Mix the rum, grenadine, vermouth and angostura. Shake with ice. Add the olive.",
      glass: 'Cocktail glass'
  },

  {
      name: "Chocolate Martini #2",
      ingredients: [ 'Creme de Cacao', 'Vodka'],
      instructions: "Shake ingredients with ice, then strain into a shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Gimlet #2",
      ingredients: [ 'Gin', 'Lime juice cordial'],
      instructions: "Fill the glass to 2/3 with ice cubes. Shake the gin and lime and pour into the glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Hawaiian Shooter",
      ingredients: [ 'Vodka', 'Southern Comfort', 'Amaretto', 'Midori melon liqueur', 'Orange juice', 'Pineapple juice', 'Grenadine'],
      instructions: "Mix with ice and strain in tall shot glass.",
      glass: 'Highball glass'
  },

  {
      name: "Hot Nuts",
      ingredients: [ 'Coffee', 'Brandy', 'Rye whiskey'],
      instructions: "1 ounce of brandy mixed with a small cup of hot coffee then add a few drops of tobasco sause",
      glass: 'Shot glass'
  },

  {
      name: "Tiatip",
      ingredients: [ 'Tia maria', 'Irish Cream'],
      instructions: "Chill Tia Maria and Baileys Irish cream 20 degrees In shot glass fill half way with Tia Maria then very carefully add Bailey Irish cream on top. Do not allow them to mix. Keep them seperated. There's your shot. Enjoy!",
      glass: 'Shot glass'
  },

  {
      name: "Grandmom's slipper",
      ingredients: [ 'Irish Cream', 'Vodka'],
      instructions: "Pour 2cl of Bailey's right in. Then pour the salmiac vodka in BUT don't let them mix into gray: there should be creamish white and also deep black visible in the drink, slightly mixed.",
      glass: 'Shot glass'
  },

  {
      name: "Coco Rush",
      ingredients: [ 'Orange juice', 'Cranberry juice', 'Malibu rum'],
      instructions: "Add OJ, Cranberry juice, and Malibu into a mixing glass and pour into the highball glass.",
      glass: 'Highball glass'
  },

  {
      name: "Talos Coffee",
      ingredients: [ 'Grand Marnier', 'Coffee'],
      instructions: "Add your GM and then add your coffee.",
      glass: 'Brandy snifter'
  },

  {
      name: "Harlem Mugger",
      ingredients: [ 'Vodka', 'Gin', 'White rum', 'Tequila', 'Champagne', 'Cranberry juice', 'Lime'],
      instructions: "build over ice in order",
      glass: 'Collins glass'
  },

  {
      name: "Ganggreen",
      ingredients: [ 'Mountain Dew', 'Spiced rum', 'Johnnie Walker'],
      instructions: "Take the Highball glass or anything that will hold 12 oz. of soda and pour the soda in the glass. Next take one shot of the Capt. Morgan and add it to the Dew. And finally add one shot of the Johnnie Walker red label to the mix. Stir it and enjoy.",
      glass: 'Highball glass'
  },

  {
      name: "Goombay Smash",
      ingredients: [ 'Spiced rum', 'Malibu rum', 'Apricot brandy', 'Pineapple juice', 'Orange juice'],
      instructions: "Mix all ingredients in highball with ice and shake. Garnish with orange slice and cherry.",
      glass: 'Highball glass'
  },

  {
      name: "Ecto Cooler",
      ingredients: [ 'Kool-Aid', 'Vodka', 'Lemon', 'Lime', 'Sugar', 'Water'],
      instructions: "Mix all ingredients in a large (1/2 gallon) pitcher. Shake and enjoy!",
      glass: 'Pitcher'
  },

  {
      name: "Hurricane Leah",
      ingredients: [ 'Light rum', 'Gin', 'Vodka', 'Tequila', 'Blue Curacao', 'Cherry brandy', 'Sour mix', 'Orange juice'],
      instructions: "Pour over ice into hurricane or parfait glass, stir. Garnish with orange peel.",
      glass: 'Parfait glass'
  },

  {
      name: "Boat drink",
      ingredients: [ 'Spiced rum', 'Tonic water', 'Lime'],
      instructions: "To a glass of ice add Captain Morgan's spiced rum. Add a splash of tonic water. Rim glass with lime. Drink. Repeat.",
      glass: 'Highball glass'
  },

  {
      name: "Tequila Slammer",
      ingredients: [ 'Tequila', 'Mountain Dew'],
      instructions: "Pour tequila into shot glass. Next pour in Mountain Dew. Hold your hand over the top of the glass and slam it down. The shot will change color. Take the shot.",
      glass: 'Shot glass'
  },

  {
      name: "Ankle Breaker",
      ingredients: [ '151 proof rum', 'Cherry brandy', 'Lime juice', 'Sugar syrup'],
      instructions: "Combine all ingredients with cracked ice in a cocktail shaker. Shake well. Strain into a chilled old-fashioned glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Flaming Gorilla",
      ingredients: [ 'Peppermint schnapps', 'Kahlua', '151 proof rum'],
      instructions: "pour into shot glass, layering ingredients, from top to bottom light on fire and extinguish after 15 seconds.",
      glass: 'Shot glass'
  },

  {
      name: "Buttafuoco",
      ingredients: [ 'Tequila', 'Galliano', 'Cherry liqueur', 'Lemon juice', 'Club soda', 'Maraschino cherry'],
      instructions: "In a cocktail shaker, combine all ingredients except club soda and cherry with cracked ice. Shake well. Strain into glass over ice cubes and fill with club soda. Stir, then add cherry.",
      glass: 'Highball glass'
  },

  {
      name: "Butternut Rum Lifesaver",
      ingredients: [ 'Irish Cream', 'Butterscotch schnapps', 'Malibu rum', 'Pineapple juice'],
      instructions: "Mix ingredients Chill over ice Strain into shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Luteåtdæ",
      ingredients: [ 'Rum', 'Tabasco sauce', 'Tequila'],
      instructions: "Mix Tequila and Tabasco together, then put it in the shot glass. Now put 1 cl of rum ontop.",
      glass: 'Shot glass'
  },

  {
      name: "Zinger",
      ingredients: [ 'Peachtree schnapps', 'Surge'],
      instructions: "Get a shot glass and pour in three shots of the schnapps. Do the same with the Surge Cola. Then down it like Scheetz would.",
      glass: 'Highball glass'
  },

  {
      name: "Malibu Milk Shake",
      ingredients: [ 'Milk', 'Malibu rum', 'Sugar', 'Ice'],
      instructions: "Put all ingredients in a blender, blend till smooth, should create a small frothy head. Pour into to any glass handy, and enjoy your milkshake!",
      glass: 'vote'
  },

  {
      name: "Demon Drop",
      ingredients: [ 'Everclear', 'Orange juice'],
      instructions: "Add the Everclear first and then the OJ so the OJ settles on the top. Then shoot it. Repeat.",
      glass: 'Shot glass'
  },

  {
      name: "Tornado",
      ingredients: [ 'Whiskey', 'Rum', 'Tequila', 'Vodka', 'Coca-Cola', 'Sugar', 'Ice'],
      instructions: "mix everything except cola, sugar and ice in glass. then stir in sugar. then add ice cubes. finally, pour in cola. stir three times. drink.",
      glass: 'Cocktail glass'
  },

  {
      name: "Slow Painful Movement",
      ingredients: [ 'Sloe gin', 'Cinnamon schnapps', 'Chocolate syrup'],
      instructions: "Shake the gin and the schnapps together in ice. Pour into glass Dribble the chocalte syrup in a circle on the bottom of the glass. (do not mix)",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Memachau",
      ingredients: [ 'Lager', 'Kahlua'],
      instructions: "Pour lager into beer mug or pint glass: add Kahlua. Stir.",
      glass: 'Pint glass'
  },

  {
      name: "The G.O.A.T.",
      ingredients: [ 'Vodka', 'Tequila', 'Dark rum', 'Tabasco sauce'],
      instructions: "Put all this together in a cup and pour into shot glasses, this obviously makes three shots. The Shots are ratios, the more the better.",
      glass: 'Shot glass'
  },

  {
      name: "Leaving Las Vegas",
      ingredients: [ 'Triple sec', 'Vodka', 'Light rum', 'Gin', 'Lemonade', 'Sugar', 'Sprite'],
      instructions: "Layer and stir, garnish with lemon",
      glass: 'Hurricane glass'
  },

  {
      name: "Karlsson",
      ingredients: [ 'Pisang Ambon', 'Irish Cream', 'Malibu rum'],
      instructions: "Shake Well and pour into glass enjoy",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Cherry Bomb, Traditional",
      ingredients: [ 'Everclear', 'Cherries'],
      instructions: "Place all 6 8oz jars of cherries (drained), mixed with EVERCLEAR into sealable cannister for approx. 2 and half months, serve by the shot. To drown out flavor of everclear, put one cherry in shot glass, and fill with sprite or 7up. Take cherry and soda into mouth at same time, chew cherry, and swallow all together. Enjoy!!",
      glass: 'Shot glass'
  },

  {
      name: "Sweet Death",
      ingredients: [ 'Malibu rum', '151 proof rum', 'Vodka', 'Sour mix', 'Cranberry juice'],
      instructions: "Fill glass with ice then pour ingrediants in order then stir.",
      glass: 'vote'
  },

  {
      name: "Lasseman's Partysaver",
      ingredients: [ 'Ouzo', 'Coffee', 'Whipped cream'],
      instructions: "Mix the black coffee with the Ouzo(until you can't feel the ouzo taste anymore) and put a little blob of whipped cream on top - Drink and enjoy...",
      glass: 'Coffee mug'
  },

  {
      name: "Fruitopia",
      ingredients: [ 'Amaretto', 'Malibu rum', 'Bacardi Limon', 'Pineapple juice', 'Orange juice', 'Grenadine'],
      instructions: "Pour ingredients, Shake with Ice and serve with a straw. Garnish if desired with an Orange Slice.",
      glass: 'Hurricane glass'
  },

  {
      name: "Mad Scientist",
      ingredients: [ 'Blueberry schnapps', 'Raspberry schnapps', 'Grenadine', 'Irish Cream'],
      instructions: "Fill shot glass less than 1/2 full with blueberry schnapps, add same amount of raspberry schnapps. Slowly top off with grenadine. Dribble a small amount of Bailey's on top..",
      glass: 'Shot glass'
  },

  {
      name: "Fairytale",
      ingredients: [ 'Absolut Vodka', 'Chocolate syrup', 'Strawberries', 'Ice'],
      instructions: "Just pour the vodka and the chocolate syrup together in a glass. Shake well. Then add the mixture of crushed ice and strawberries and voila'.",
      glass: 'Highball glass'
  },

  {
      name: "Liquid Crack",
      ingredients: [ 'Peppermint schnapps', 'Jägermeister', 'Goldschlager'],
      instructions: "Pour one-third of Rumple Minze, Jägermeister, and Goldschlager into a shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Southern Joe",
      ingredients: [ 'Southern Comfort', 'Bourbon'],
      instructions: "Pour both ingredients into shot glass. Consume Repeatedly",
      glass: 'Shot glass'
  },

  {
      name: "Springtime",
      ingredients: [ 'Absolut Kurant', 'Lime juice', 'Cranberry juice', 'Bitter lemon'],
      instructions: "Poor ingredients over lots of ice.Garnish with slice of lime.",
      glass: 'Highball glass'
  },

  {
      name: "Hillbilly Bob's Mountaindrink",
      ingredients: [ 'Bourbon', 'Kahlua', 'Irish Cream', 'Creme de Cacao', 'Milk', 'Coca-Cola'],
      instructions: "Shake all ingredients except coke.Poor over ice and top with coke for an extra creamy head. Serve with a straw on a sunny day.",
      glass: 'Hurricane glass'
  },

  {
      name: "Pine Needle",
      ingredients: [ 'Absolut Vodka', 'Triple sec', 'Sweet and sour', 'Pineapple juice', '7-Up'],
      instructions: "Fill glass with ice. Add the ingredients in the order listed.",
      glass: 'Highball glass'
  },

  {
      name: "Photon Torpedo",
      ingredients: [ 'Aftershock', 'Vodka'],
      instructions: "Mix the Aftershock with vodka, in no particular order.",
      glass: 'Shot glass'
  },

  {
      name: "Submarine (conventional)",
      ingredients: [ 'Gin', 'Ginger ale', 'Tonic water'],
      instructions: "Start with the gin, then fill up with the tonic water. And last, add the ginger ale.",
      glass: 'Highball glass'
  },

  {
      name: "Submarine (nuclear)",
      ingredients: [ 'Gin', 'Ginger ale', 'Tonic water'],
      instructions: "Start with the gin, then fill up the glas with tonic water. And last, add the ginger ale.",
      glass: 'Highball glass'
  },

  {
      name: "Monkey Brain #2",
      ingredients: [ 'Apfelkorn', 'Irish Cream', 'Grenadine'],
      instructions: "pour apfelkorn in shotglas. slowly pour drops of baileys in center of shot finally add a few drops of grenadine.",
      glass: 'Shot glass'
  },

  {
      name: "Multiple Orgasm #2",
      ingredients: [ 'Irish Cream', 'Kahlua', 'Amaretto', 'Vodka', 'Half-and-half', 'Ice'],
      instructions: "Pour ingredients into a blender and mix until smooth. Serve in a hurricane glass and top with a cherry. It tastes like a chocolate shake, but with a kick!",
      glass: 'Hurricane glass'
  },

  {
      name: "Caesar",
      ingredients: [ 'Vodka', 'Clamato juice', 'Tabasco sauce', 'Worcestershire sauce'],
      instructions: "Line rim of glass with salt & pepper. Over ice add vodka, fill with Clamato Juice then add remaining ingredients. Garnish with celery stick.",
      glass: 'Highball glass'
  },

  {
      name: "R.B. Winter",
      ingredients: [ 'Southern Comfort', 'Amaretto', 'Apple juice', 'Lime juice'],
      instructions: "Fill highball glass with ice. Add 1 oz. of Southern Comfort, 1 oz. of Amaretto, fill with Apple juice, do a short shake. While pouring the drink back in the glass add a splash of lime juice.",
      glass: 'Highball glass'
  },

  {
      name: "Blue Balls",
      ingredients: [ 'Blue Curacao', 'Malibu rum', 'Peach schnapps', 'Sweet and sour', 'Sprite'],
      instructions: "Mix all ingredients. Chill with ice and strain into a shooter glass!",
      glass: 'Shot glass'
  },

  {
      name: "Acid Cookie",
      ingredients: [ 'Rumple Minze', 'Irish Cream', 'Butterscotch schnapps', '151 proof rum', 'Cream'],
      instructions: "Mix liquor togther. Add Cream. Shake Well. Strain & Serve",
      glass: 'Shot glass'
  },

  {
      name: "Black Jack WV",
      ingredients: [ 'Yukon Jack', 'Chambord raspberry liqueur', 'Sour mix', '7-Up'],
      instructions: "Mix all of the ingriedients together over ice,shake til very chilled and strain into two glasses.",
      glass: 'Shot glass'
  },

  {
      name: "Fruit Loop",
      ingredients: [ 'Blue Curacao', 'Milk', 'Ice'],
      instructions: "Fill highball glass with ice. Pour curacao over ice then fill with milk.",
      glass: 'Highball glass'
  },

  {
      name: "B-54",
      ingredients: [ 'Irish Cream', 'Green Creme de Menthe', 'Grand Marnier', 'Kahlua'],
      instructions: "Shake over ice",
      glass: 'Shot glass'
  },

  {
      name: "Peach Smoothie",
      ingredients: [ 'Yukon Jack', 'Bourbon', 'Peachtree schnapps'],
      instructions: "Layer in shot glass Yukon Jack, bourbon and PeachTree Schnapps last",
      glass: 'Shot glass'
  },

  {
      name: "Pure Pleasure",
      ingredients: [ 'Absolut Kurant', 'Malibu rum', 'Lemon juice', 'Cranberry juice', 'Ice'],
      instructions: "Shake all the ingridiens whith lots of ice. Stir in a Hurricane glas.",
      glass: 'Hurricane glass'
  },

  {
      name: "Jello shots",
      ingredients: [ 'Vodka', 'Jello', 'Water'],
      instructions: "Boil 3 cups of water then add jello. Mix jello and water until jello is completely disolved. Add the two cups of vodka and mix together. Pour mixture into plastic shot glasses and chill until firm. Then, eat away...",
      glass: 'Shot glass'
  },

  {
      name: "The Real Cuba Libre",
      ingredients: [ 'Ice', 'Lime', 'Rum', 'Coca-Cola'],
      instructions: "sit outside on balcony, fill glass with crushed ice, sqeeze lime, hold glass up to the sky (best effect during sunset), pour rum up to horizon , add some coke to cover the sky (no overflow), stir smoothly, lean back & ENJOY! Maximum effect with bass heavy dub reggae in the background",
      glass: 'Highball glass'
  },

  {
      name: "Purple Heart",
      ingredients: [ 'Maui', 'Maui'],
      instructions: "Pour both shots into same glass, add ice if want chilled, stir, and drink.",
      glass: 'Cordial glass'
  },

  {
      name: "Cran-Ram",
      ingredients: [ 'Malibu rum', 'Cranberry juice', 'Sunny delight'],
      instructions: "Combine Rum and Cranberry juice first. Add splash of Sunny D. May drink with crushed ice, if prefered.",
      glass: 'vote'
  },

  {
      name: "In and Out Martini",
      ingredients: [ 'Dry Vermouth', 'Gin'],
      instructions: "Pack Cocktail glass with ice, add a splash of dry vermouth. While glass chills, add gin in a mixer glass with ice. Throw away ice/vermouth in cocktail glass then strain in Gin.",
      glass: 'Cocktail glass'
  },

  {
      name: "Killer Kool-Aid (Rhode Island)",
      ingredients: [ 'Absolut Vodka', 'Amaretto', 'Malibu rum', 'Sloe gin', 'Midori melon liqueur', 'Cranberry juice'],
      instructions: "Pour equal parts into a mug/glass. Add the alcohol first, then add the cranberry juice last. This drink may be mixed/stirred, but it isn't required.",
      glass: 'vote'
  },

  {
      name: "Purple Haze Shooter",
      ingredients: [ 'Tennessee whiskey', 'Blue Curacao', 'Grenadine', 'Lime juice'],
      instructions: "Stir with ice and strain into a shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Cherry Bon Bon",
      ingredients: [ 'White chocolate liqueur', 'Creme de Noyaux'],
      instructions: "Layer 3/4 oz. of Godet on top of 3/4 oz. of Creme de Noyaux. Serve in a cordial or shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Ken and Kirsten's top shelf Margarita",
      ingredients: [ 'Tequila', 'Triple sec', 'Lemonade', 'Grapefruit juice', 'Lime', 'Salt'],
      instructions: "Mix all ingredients and add ice. Shake well pouring ingredients into a second glass. At this point coat the rim of the first glass with salt. Repour your drink into the salted glass. Add fresh squeezed lime, kick back and enjoy!",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Nystedt",
      ingredients: [ 'Absolut Vodka', '7-Up', 'Orange juice', 'Tonic water', 'Lemon juice'],
      instructions: "Shake the orange juice and the grape tonic with lots of ice in a shaker. Pour it in a glass and add the 7-Up and the Vodka. Last, add some lemon and decorate with one slice of orange and one slice of lemon.",
      glass: 'Collins glass'
  },

  {
      name: "Rum Punch",
      ingredients: [ 'Rum', 'Ginger ale', 'Fruit punch', 'Orange juice', 'Ice'],
      instructions: "Mix all ingredients in a punch bowl and serve.",
      glass: 'Punch bowl'
  },

  {
      name: "Pensacola Bushwacker",
      ingredients: [ 'Cream of coconut', 'Kahlua', 'Black rum', 'Creme de Cacao', 'Half-and-half', 'Ice', 'Vanilla ice-cream'],
      instructions: "Throw all the ingredients in a blender. Then blend till mixed. Ice-cream suggested for more milk shake like drink.",
      glass: 'Hurricane glass'
  },

  {
      name: "Southern Smile",
      ingredients: [ 'Cranberry juice', 'Southern Comfort', 'Amaretto'],
      instructions: "Fill jigger with ice. add all ingredients. Cover, shake and pour into shot glasses.",
      glass: 'Shot glass'
  },

  {
      name: "The Hot Churchill",
      ingredients: [ 'Rum', 'Ginger', 'Honey', 'Water'],
      instructions: "Let Crushed Ginger sit in the 1 1/2 oz of rum for as long as possible -- overnight if you can. Add honey to glass. Top with hot water.",
      glass: 'Coffee mug'
  },

  {
      name: "Hot Dick",
      ingredients: [ 'Irish Cream', 'Grand Marnier', 'Espresso', 'Whipped cream'],
      instructions: "Poyr Bailey's and Grand Marnier into mug. Add espress. Serve it hot with lots of cream and sprinkle with chocolate.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Green Dinosaur #2",
      ingredients: [ 'Tequila', 'Vodka', 'Rum', 'Midori melon liqueur', 'Lemonade'],
      instructions: "Combine all ingredients and mix well. Add ice and drink up.",
      glass: 'Cocktail glass'
  },

  {
      name: "Electric Watermellon",
      ingredients: [ 'Vodka', 'Light rum', 'Midori melon liqueur', 'Triple sec', 'Sweet and sour', 'Grenadine', '7-Up'],
      instructions: "Add equal Parts Vodka, Rum, and Melon in a tall cocktail glass with ice. Add a couple of splashes of triple sec (orange Liquor). Fill to the top with sweet and sour. Add a splash of 7 up and grenadine.",
      glass: 'Cocktail glass'
  },

  {
      name: "K-V-S Kaboom",
      ingredients: [ '151 proof rum', 'Bourbon', 'Absolut Kurant', 'Everclear', 'Cranberry juice', 'Fruit', 'Ice'],
      instructions: "Mix all ingredients into a large punch bowl or ice chest. Slice fruit and add into mixture. More Cranberry juice may be added if you are a bunch of light-weights. Stir vigorously with a paddle.",
      glass: 'Punch bowl'
  },

  {
      name: "Liquid Jello",
      ingredients: [ 'Citrus vodka', 'Kool-Aid'],
      instructions: "Mix kool-aid according to instructions. Fill glass with ice. Pour in citrus vodka. Add kool-aid until glass is full.",
      glass: 'Hurricane glass'
  },

  {
      name: "Exotica",
      ingredients: [ 'Advocaat', 'Whisky', 'Creme de Cacao', 'Triple sec', 'Angostura bitters', 'Orange bitters'],
      instructions: "Put all ingredients into the shaker. Shake hard and serve in cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Honolulu Action",
      ingredients: [ 'Grenadine', 'Midori melon liqueur', 'Blue Curacao', 'Irish Cream', 'Tequila', 'Vodka', '151 proof rum', 'Whipped cream'],
      instructions: "Layer ingredients in the above order, top with whipped cream, top with a sprinkle of Li Hing Powder.",
      glass: 'Shot glass'
  },

  {
      name: "Blood Clot #2",
      ingredients: [ 'Triple sec', 'Advocaat'],
      instructions: "Pour Triple sec into glass. Using a spoon, drop the Cherry Advocaat in so it sits on the bottom of the glass. Making sure you have a straw handy, throw the shot back, place the glass on the nearest table and quickly cover the opening of the glass with your hand. Stick the straw between the fingers covering the glass and suck!",
      glass: 'Shot glass'
  },

  {
      name: "Original Sin",
      ingredients: [ 'Ice', 'Triple sec', 'Brandy', 'Cherry Heering', 'Sour mix', 'Grenadine', 'Fruit', 'Champagne'],
      instructions: "Add crushed ice to snifter or gobblet. Add Triple Sec, Brandy, Cherry Heering, Grenadine and Sour Mix. Stir contents. Add sliced fruit. Top off glass with Champagne.",
      glass: 'Brandy snifter'
  },

  {
      name: "Turkeyball",
      ingredients: [ 'Bourbon', 'Amaretto', 'Pineapple juice'],
      instructions: "Shake with ice and strain into a shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Exploding Cherry",
      ingredients: [ 'Fruit juice', 'Vodka', 'Pineapple', 'Coconut liqueur'],
      instructions: "pour it all into an ice-cream pail and add more vodka if you wish.",
      glass: 'vote'
  },

  {
      name: "Mint Russki",
      ingredients: [ 'Vodka', 'Mint', 'Ice'],
      instructions: "Add crushed or twisted leaves of mint, ice cubes, then frozen vodka. Stir and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Beeraquirilla",
      ingredients: [ 'Beer', 'Tequila', 'Light rum', 'Daiquiri mix', 'Margarita mix', 'Ice'],
      instructions: "Pour into a blender in this order: ice - beer - tequila - rum - daquari mix - magarita mix. Blend until frothy, then pour.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Nutty Irishman (without milk)",
      ingredients: [ 'Frangelico', 'Irish Cream'],
      instructions: "Pour the Frangelico first over a glass with ice. Then, pour the Bailey's over the top, but do not stir the drink.",
      glass: 'vote'
  },

  {
      name: "Creamy Tan",
      ingredients: [ 'Kahlua', 'Irish Cream', 'Kahlua', 'Whipping cream', 'Milk', 'Ice'],
      instructions: "Add ice and all the ingredients into a shaker and shake well. Then serve in a large glass.",
      glass: 'Brandy snifter'
  },

  {
      name: "Raging Indian",
      ingredients: [ 'Everclear', 'Kahlua', 'Orange juice', 'Mango'],
      instructions: "Mix a lot and mix in shaker. Pour shot.",
      glass: 'Shot glass'
  },

  {
      name: "Lady-Killer",
      ingredients: [ 'Gin', 'Triple sec', 'Apricot brandy', 'Passion fruit juice', 'Pineapple juice'],
      instructions: "Shake all ingredients with ice in shaker, strain into a Champagne flute or Longdrink glas over some cubes of ice. Decorate with mint and cherry",
      glass: 'Champagne flute'
  },

  {
      name: "Absolutely Cranberry Smash",
      ingredients: [ 'Absolut Vodka', 'Cranberry juice', 'Ginger ale', 'Ice'],
      instructions: "Stir ingredients together. Serve over ice.",
      glass: 'Cocktail glass'
  },

  {
      name: "Kiss me Quick",
      ingredients: [ 'Cranberry vodka', 'Apfelkorn', 'Schweppes Russchian', 'Apple juice', 'Ice'],
      instructions: "mix in the glass",
      glass: 'Highball glass'
  },

  {
      name: "Malaria Killer",
      ingredients: [ 'Campari', 'Tonic water', 'Orange'],
      instructions: "Pour Campari in the glass. Add Indian Tonic Water. Stir with a spoon. Add ice if you want & a slice of Orange.",
      glass: 'Highball glass'
  },

  {
      name: "Ersh (Russian)",
      ingredients: [ 'Vodka', 'Beer'],
      instructions: "No special instruction. Just put some Vodka over Beer.",
      glass: 'Beer mug'
  },

  {
      name: "Canadian Hunter",
      ingredients: [ 'Yukon Jack', 'Bourbon'],
      instructions: "Mix together in shot glass and discharge into mouth!",
      glass: 'Shot glass'
  },

  {
      name: "Dew-Driver #2",
      ingredients: [ 'Ice', 'Vodka', 'Orange juice', 'Mountain Dew'],
      instructions: "The first thing to do is add the ice. 4 large cubes work well. Then add the vodka. A good way to measure is to fill it almost to the top of the ice cubes. Add the OJ until it is almost to the top of the glass and then add a little mountain dew. The more dew you add, the less vodka taste you have. (The oj also does a nice job of killing the vodka taste) . Then enjoy.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sloe Comfortable Screw #1",
      ingredients: [ 'Sloe gin', 'Southern Comfort', 'Orange juice', 'Vodka'],
      instructions: "stir or shake ingredients & serve with ice",
      glass: 'Collins glass'
  },

  {
      name: "Rocky Mountain Bear Fucker",
      ingredients: [ 'Tequila', 'Bourbon', 'Southern Comfort'],
      instructions: "Pour into shot glass starting with tequila, followed by J.D. and finally Southern. Shoot it.",
      glass: 'Shot glass'
  },

  {
      name: "Red Beard",
      ingredients: [ 'Spiced rum', 'Coconut rum', 'Grenadine', '7-Up'],
      instructions: "Mix on ice and serve.",
      glass: 'vote'
  },

  {
      name: "Georgia Tea",
      ingredients: [ 'Vodka', 'Gin', 'Light rum', 'Peach schnapps', 'Pineapple-orange juice'],
      instructions: "Fill glass with large ice cubes. Mix alcoholic ingredients in the glass. Fill the rest of the glass with Dole pineapple-orange juice and stir.",
      glass: 'Highball glass'
  },

  {
      name: "Berlin martini",
      ingredients: [ 'Vodka', 'Schnapps', 'Black Sambuca'],
      instructions: "Take a shaker filled with ice. Add 2 oz smirnoff vodka, 3 dashes of schnapps, a wee splash of black zambuca and shake well, keeping your feet firmly planted, posture perfect. Strain into a chilled martini glass. Garnish with a blackberry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Yellow Birdie",
      ingredients: [ 'Vodka', 'Creme de Banane', 'Sprite'],
      instructions: "Pour vodka into glass over ice followed by Creme de Banana, then top it up with Sprite & stir.",
      glass: 'Collins glass'
  },

  {
      name: "Nazi Taco",
      ingredients: [ 'Jägermeister', 'Tequila', 'Tabasco sauce'],
      instructions: "Mix all the ingredients together and pour into shot glasses.",
      glass: 'Shot glass'
  },

  {
      name: "Ru's Snap Shot",
      ingredients: [ 'Cinnamon schnapps', 'Candy'],
      instructions: "Put Pop Rocks Candy in bottom of shot glass. Add Cinnamon Schnapps. Stir, and shoot immediately.",
      glass: 'Shot glass'
  },

  {
      name: "Captain's Cream Soda",
      ingredients: [ 'Spiced rum', '7-Up'],
      instructions: "Pour the Captain Morgan over plenty of ice in a highball glass. Top with the seven-up, stir and enjoy!",
      glass: 'Highball glass'
  },

  {
      name: "Grape Nehi",
      ingredients: [ 'Vodka', 'Chambord raspberry liqueur', 'Lemon', 'Ice'],
      instructions: "Crush Ice with lemon (or orange) and alcohols in a large glass. Use a strainer and pour into a cocktail glass. Optional: add lemon wedge or salt to glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fuquay Friday Night",
      ingredients: [ 'Absolut Kurant', 'Sprite', 'Grenadine', 'Cherry Cola'],
      instructions: "Absolute can be varied to taste and alcohol tollerance. Discretion is advised. Also a dash of lime can be added for a slightly different taste.",
      glass: 'Cocktail glass'
  },

  {
      name: "Brass Balls",
      ingredients: [ 'Grand Marnier', 'Peach schnapps', 'Pineapple juice'],
      instructions: "Mix the three, and chill'em. Then pour and serve.",
      glass: 'Shot glass'
  },

  {
      name: "Seaside-Summerbliss",
      ingredients: [ 'Red wine', 'Apple cider'],
      instructions: "Red wine first, then the cider.",
      glass: 'Red wine glass'
  },

  {
      name: "Shlagerfloat",
      ingredients: [ 'Goldschlager', 'Vanilla ice-cream', 'Root beer'],
      instructions: "Put two scoops of vanilla ice-cream in your cup. Pour in a shot of Goldschlager then fill the glass with root beer. Mix with a spoon and enjoy!",
      glass: 'Mason jar'
  },

  {
      name: "Cookie Tosser",
      ingredients: [ 'Vodka', 'Lemon juice', 'Bourbon', 'Kahlua'],
      instructions: "Just throw it all together",
      glass: 'vote'
  },

  {
      name: "Blood of Satan",
      ingredients: [ 'Jägermeister', 'Goldschlager', 'Irish whiskey', 'Bourbon'],
      instructions: "Layer all 4 ingredients in shot glass. In this order Jägermeister, Goldschlager, Jameson's and bourbon.",
      glass: 'Shot glass'
  },

  {
      name: "Jamaican Me Crazy",
      ingredients: [ 'Rum', 'Malibu rum', 'Banana liqueur', 'Cranberry juice', 'Pineapple juice'],
      instructions: "Stir in a mixing glass.",
      glass: 'Collins glass'
  },

  {
      name: "Yucca",
      ingredients: [ 'Lemon', 'Lime', 'Sugar', 'Vodka', 'Ice'],
      instructions: "Put the Vodka and the sugar into a container. Slice 10 lemons and 10 limes and add them to the Vodka. Mix for 10 minutes or until the sugar has dissolved.",
      glass: 'Punch bowl'
  },

  {
      name: "Banana Colada #2",
      ingredients: [ 'Light rum', 'Banana', 'Vanilla ice-cream', 'Pineapple', 'Pina colada mix', 'Ice'],
      instructions: "Combine All Ingredents in a blender except for the ice and blend. Then add Ice until the drink begins to thicken then serve.",
      glass: 'vote'
  },

  {
      name: "Sex on the Beach #4",
      ingredients: [ 'Absolut Vodka', 'Midori melon liqueur', 'Chambord raspberry liqueur', 'Grapefruit juice', 'Cranberry juice'],
      instructions: "This can be on the rocks or up... but best on the rocks! Start with the Midori since it is heaviest, then the Chambord and the Absolut. Fill the glass 2/3 full with Cranberry juice, and then a splash of grapefruit for color. It should be an orangish-red color. Garnish with several cherries.",
      glass: 'Cocktail glass'
  },

  {
      name: "BlackJack Margarita",
      ingredients: [ 'Tequila', 'Triple sec', 'Chambord raspberry liqueur', 'Lime juice'],
      instructions: "Fill glass with ice. Add with Tequila, Triple Sec, and Chambord. Then add the Lime juice or sour mix. Shake. Garnish with a lime wedge and serve.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Opera House Special",
      ingredients: [ 'Tequila', 'Gin', 'White rum', 'Vodka', 'Pineapple', 'Orange', 'Sour mix'],
      instructions: "Put all ingredients into a metal mixer and strain into shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Royal Flush",
      ingredients: [ 'Crown Royal', 'Peach schnapps', 'Chambord raspberry liqueur', 'Cranberry juice'],
      instructions: "Pour all the ingredients into tumbler over ice. Strain into glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "The Drink of Champions",
      ingredients: [ 'Crown Royal', 'Dr. Pepper'],
      instructions: "Pour Crown Royal into beer mug (or whatever type of glass that is available). Fill with chilled Dr. Pepper or add ice cubes before pouring. Stir gently with fork, spoon, knife, toothbrush or whatever is handy or forget to stir and wait for surprise at bottom.",
      glass: 'Beer mug'
  },

  {
      name: "Limona Corona",
      ingredients: [ 'Corona', 'Bacardi Limon'],
      instructions: "Open the Corona. Fill the empty space in the neck in the bottle with the rum. The bottle should be filled to the top. Plug the bottle with your thumb or the palm of your hand. Turn the bottle upside-down so the rum and beer mix. Turn the bottle rightside-up, unplug, and drink.",
      glass: 'vote'
  },

  {
      name: "Screaming Dead Nazi",
      ingredients: [ 'Jägermeister', '151 proof rum', 'Rumple Minze'],
      instructions: "Pour all in shot glass, one by one. Set aflame, blow it out, and enjoy.....",
      glass: 'Shot glass'
  },

  {
      name: "Pysch Vitamin Light",
      ingredients: [ 'Orange juice', 'Apple juice', 'Pineapple juice', 'Ice'],
      instructions: "Shake with ice.",
      glass: 'vote'
  },

  {
      name: "Good Morning To You My Love",
      ingredients: [ 'Orange', 'Lime', 'Apple', 'Orange juice', 'Apple juice', 'Whipping cream', 'Ice'],
      instructions: "Mix all ingredients in mixer with ice. Serve in a small bowl garnished with strawberries or grapes and a straw.",
      glass: 'vote'
  },

  {
      name: "IAS-Special",
      ingredients: [ 'Banana liqueur', 'Aquavit', 'Lime juice', '7-Up'],
      instructions: "mix aquavit and banana liqueur insert dash with lime fill up with 7-up Served with ice cubes strawberry",
      glass: 'Highball glass'
  },

  {
      name: "Puerto Rican Punch",
      ingredients: [ 'Sloe gin', 'Peach schnapps', 'Vodka', 'Gin', 'Orange juice', 'Pineapple juice', 'Grenadine'],
      instructions: "straight mix into glass.",
      glass: 'Hurricane glass'
  },

  {
      name: "Kongepjolter",
      ingredients: [ 'Champagne', 'Cognac'],
      instructions: "Pour the Cognac in the mug, then mix the Champagne in.",
      glass: 'Beer mug'
  },

  {
      name: "Olsen Driver",
      ingredients: [ 'Apple juice', 'Lime juice', 'Carbonated soft drink', 'Lemon', 'Soda water'],
      instructions: "Mix with ice.",
      glass: 'Highball glass'
  },

  {
      name: "Dream",
      ingredients: [ 'Orange juice', 'Egg', 'Grenadine', 'Ice'],
      instructions: "Shake and strain into highball glass with ice.",
      glass: 'Highball glass'
  },

  {
      name: "Apello",
      ingredients: [ 'Orange juice', 'Grapefruit juice', 'Apple juice', 'Maraschino cherry'],
      instructions: "Stirr. Grnish with maraschino cherry.",
      glass: 'vote'
  },

  {
      name: "Belle Melon",
      ingredients: [ 'Midori melon liqueur', 'Vodka', 'Light cream'],
      instructions: "Shake and pour into cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "By The Pool",
      ingredients: [ 'Midori melon liqueur', 'Peach schnapps', 'Orange juice', '7-Up', 'Ice'],
      instructions: "Shake briskley for 10 seconds and serve in a tall glass over ice.",
      glass: 'Highball glass'
  },

  {
      name: "Alamo Splash",
      ingredients: [ 'Tequila', 'Orange juice', 'Pineapple juice', 'Lemon-lime soda'],
      instructions: "Mix with cracked ice and strain into collins glass.",
      glass: 'Collins glass'
  },

  {
      name: "Cactus Berry",
      ingredients: [ 'Tequila', 'Red wine', 'Triple sec', 'Sour mix', 'Lemon-lime soda', 'Lime juice'],
      instructions: "Shake with ice and pour into large salt-rimmed cocktail or margarita glass.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Hairy Sunrise",
      ingredients: [ 'Tequila', 'Vodka', 'Triple sec', 'Orange juice', 'Grenadine'],
      instructions: "Mix all ingredients in blender except grenadine. Pour into collins glass and float grenadine on top. Garnish with a lime slice.",
      glass: 'Collins glass'
  },

  {
      name: "Hot Pants",
      ingredients: [ 'Tequila', 'Peppermint schnapps', 'Grapefruit juice', 'Powdered sugar'],
      instructions: "Shake with ice cubes and pour into old-fashioned glass rimmed with salt.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Mexicana",
      ingredients: [ 'Tequila', 'Lemon juice', 'Pineapple juice', 'Grenadine'],
      instructions: "Shake with ice and strain into cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "La Bomba",
      ingredients: [ 'Gold tequila', 'Triple sec', 'Pineapple juice', 'Orange juice', 'Grenadine'],
      instructions: "Shake all ingredients except grenadine with ice 3 times ONLY. Pour into sugar rimmed cocktail glass. Add grenadine and garnish with a lime wheel.",
      glass: 'Cocktail glass'
  },

  {
      name: "Mexican Madras",
      ingredients: [ 'Cranberry juice', 'Orange juice', 'Gold tequila', 'Lime juice'],
      instructions: "Pour juices and tequila into shaker 1/2 filled with ice. Shake well and strain into old-fashioned glass. Garnish with an orange slice.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Pacific Sunshine",
      ingredients: [ 'Tequila', 'Blue Curacao', 'Sour mix', 'Bitters'],
      instructions: "Mix with cracked ice and pour, with ice, into chilled parfait or hurricane glass with a salted rim. Garnish with a lemon wheel.",
      glass: 'Hurricane glass'
  },

  {
      name: "Purple Gecko",
      ingredients: [ 'Tequila', 'Blue Curacao', 'Curacao', 'Cranberry juice', 'Sour mix', 'Lime juice'],
      instructions: "Shake with ice and pour into salt-rimmed cocktail or margarita glass. Garnish with a lime wedge.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Purple Pancho",
      ingredients: [ 'Tequila', 'Blue Curacao', 'Sloe gin', 'Lime juice', 'Sour mix'],
      instructions: "Shake with ice and pour into salt-rimmed cocktail or margarita glass. Garnish with a lime wheel.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Rosita",
      ingredients: [ 'Tequila', 'Dry Vermouth', 'Sweet Vermouth', 'Campari'],
      instructions: "Stir in old-fashioned glass with cracked ice. Add a twist of lemon peel and serve with short straws.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Tequila Canyon",
      ingredients: [ 'Tequila', 'Triple sec', 'Cranberry juice', 'Pineapple juice', 'Orange juice'],
      instructions: "Pour first 3 ingredients over ice into collins glass and stir gently. Top with pineapple and orange juices. Garnish with a lime wheel. Serve with a straw.",
      glass: 'Collins glass'
  },

  {
      name: "Tequila Collins",
      ingredients: [ 'Lemon', 'Powdered sugar', 'Tequila', 'Club soda'],
      instructions: "Shake with ice and strain into collins glass. Add several ice cubes, fill with club soda and stir. Decorate with slices of lemon and orange, and a cherry. Serve with a straw.",
      glass: 'Collins glass'
  },

  {
      name: "Tequila Pink",
      ingredients: [ 'Tequila', 'Dry Vermouth', 'Grenadine'],
      instructions: "Shake ingredients with ice and strain into cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Tequila (Straight)",
      ingredients: [ 'Lemon', 'Salt', 'Tequila'],
      instructions: "Put salt between thumb and index finger on back of left hand. Hold shot glass of tequila in salted hand and lemon wedge in the other. Lick salt, slam the tequila, then suck lemon.",
      glass: 'Shot glass'
  },

  {
      name: "Tequonic",
      ingredients: [ 'Tequila', 'Lemon', 'Tonic water'],
      instructions: "Pour tequila over ice cubes into old-fashioned glass. Add fruit juice, fill with tonic water, and stir.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Toreador",
      ingredients: [ 'Tequila', 'Creme de Cacao', 'Light cream'],
      instructions: "Shake ingredients with ice and strain into cocktail glass. Top with a little whipped cream and sprinkle lightly with cocoa.",
      glass: 'Cocktail glass'
  },

  {
      name: "Ocean Drive",
      ingredients: [ 'Malibu rum', 'Curacao', 'Orange juice', 'Pineapple juice', 'Cranberry juice'],
      instructions: "Pour liquour first over ice. Add juices cranberry last down side of glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Knacky",
      ingredients: [ 'Apfelkorn', 'Peach juice', 'Iced tea'],
      instructions: "Fill the liquor in the glass. Then fill the juice and the ice tea.",
      glass: 'Highball glass'
  },

  {
      name: "Sloe Comfortable Screw #2",
      ingredients: [ 'Sloe gin', 'Southern Comfort', 'Vodka', 'Orange juice'],
      instructions: "Shake with ice in a tumbler. Strain and pour.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Finnish Passion",
      ingredients: [ 'Vodka', 'Passion fruit syrup', 'Orange juice', 'Sweet and sour'],
      instructions: "Shake all ingredients,pour in longdrink glass. Garnish with a boat of orange and red cherry.",
      glass: 'Highball glass'
  },

  {
      name: "Think Pink",
      ingredients: [ 'Rum', 'Passoa', 'Sprite', 'Ice'],
      instructions: "Put incrediments in cold glass. Stir well.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "LimLer",
      ingredients: [ 'Apple juice', 'Lime', 'Brown sugar', 'Ice'],
      instructions: "Squeeze the 8 parts of the lime and the brown sugarwith a wooden muddler, fill up with Apple Juiceand crushed Ice.",
      glass: 'vote'
  },

  {
      name: "Lambada",
      ingredients: [ 'Cachaca', 'Cream of coconut', 'Cream', 'Cherry juice'],
      instructions: "Shake all indrigiens in a shaker on ice in poorthem on crushed ice in a fancy glass.",
      glass: 'vote'
  },

  {
      name: "Alexander (Original)",
      ingredients: [ 'Gin', 'Creme de Cacao', 'Cream'],
      instructions: "Shake all on Ice and strain into a Cocktail Glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Panama Deluxe",
      ingredients: [ 'Vodka', 'Kahlua', 'Creme de Cacao', 'Cream'],
      instructions: "Shake all ingredients together, serve in a tumbler over ice.",
      glass: 'vote'
  },

  {
      name: "Goombay Smash #2",
      ingredients: [ 'Light rum', 'Dark rum', 'Coconut rum', 'Pineapple juice'],
      instructions: "fill tall glass with ice, add all ingredients and shake well.",
      glass: 'Highball glass'
  },

  {
      name: "Buttery Nipple #1",
      ingredients: [ 'Butterscotch schnapps', 'Irish Cream'],
      instructions: "The Butterscotch Schnapps makes up the bottom layer. The top layer of Baileys should be added using a spoon. This is a layered shot. Delicious!!",
      glass: 'vote'
  },

  {
      name: "Lethal Weapon",
      ingredients: [ '151 proof rum', 'Vodka', 'Mountain Dew', 'Triple sec'],
      instructions: "Combine all into a tall glass and serve with ice. As an option, use two cans of Mountain Dew if the drink seems too strong for you.",
      glass: 'Highball glass'
  },

  {
      name: "Nazi Surfer",
      ingredients: [ 'Jägermeister', 'Malibu rum', 'Midori melon liqueur', 'Pineapple juice', 'Grenadine'],
      instructions: "Chill, shake, and strain.",
      glass: 'Shot glass'
  },

  {
      name: "Texas Rattlesnake",
      ingredients: [ 'Yukon Jack', 'Cherry brandy', 'Southern Comfort', 'Sweet and sour'],
      instructions: "Mix all ingredients and Shake well. Sweet at first, with a BITE at the end...",
      glass: 'vote'
  },

  {
      name: "Caribbean Punch",
      ingredients: [ 'Ice', 'Lime', 'Pineapple juice', 'Orange juice', 'Banana liqueur', 'Dark rum', 'Dark rum'],
      instructions: "Mix in shaker, top with grated nutmeg.",
      glass: 'vote'
  },

  {
      name: "After sex",
      ingredients: [ 'Vodka', 'Creme de Banane', 'Orange juice'],
      instructions: "Pour the vodka and creme over some ice cubes in a tall glass and fill up with juice. to make it beuty full make the top of the glass with a grenadine and sugar",
      glass: 'Highball glass'
  },

  {
      name: "San Francisco",
      ingredients: [ 'Vodka', 'Creme de Banane', 'Grenadine', 'Orange juice'],
      instructions: "Take a tall glass and put in a few ice cubes, fill the vodka over it and fill with juice then the creme, to end fill in the grenadine but very carefully at the side of the glass so it will lay down in the bottom. garnish with orange and strawberry.",
      glass: 'Highball glass'
  },

  {
      name: "Rum Rickey",
      ingredients: [ 'Light rum', 'Lime juice', 'Sugar syrup', 'Club soda'],
      instructions: "1. Fill mixing glass with ice 2. Add light rum and lime juice and sugar syrup 3. Shake 4. Strain into a collins glass filled with ice 5. Fill with club soda. 6. Garnish with a wedge of lime.",
      glass: 'Collins glass'
  },

  {
      name: "Far West",
      ingredients: [ 'Brandy', 'Advocaat', 'Dry Vermouth', 'Angostura bitters'],
      instructions: "Put in a Shaker with ice, shake well, pour out in cocktail glasses and add some cinnamon powder over it.",
      glass: 'Cocktail glass'
  },

  {
      name: "Olympia-Flip",
      ingredients: [ 'Galliano', 'Orange juice', 'Cream', 'Egg yolk'],
      instructions: "Put ingredients in shaker with ice, shake very well, pour out in a cocktail glass and put some fine cracked almonds over it as a decoration.",
      glass: 'Cocktail glass'
  },

  {
      name: "Pic-Walsh",
      ingredients: [ 'Triple sec', 'Creme de Cacao', 'Heavy cream', 'Vodka', 'Lime juice'],
      instructions: "Swirl all ingredients in a blender.",
      glass: 'vote'
  },

  {
      name: "Amaretto Shake",
      ingredients: [ 'Chocolate ice-cream', 'Brandy', 'Amaretto'],
      instructions: "Combine all ingredients in a blender and blend at high speed until smooth. Serve in chilled glass garnished with bittersweet chocolate shavings.",
      glass: 'vote'
  },

  {
      name: "Crickets",
      ingredients: [ 'Peach brandy', 'Creme de Cacao', 'Ice', 'Vanilla ice-cream'],
      instructions: "Combine all ingredients in a blender. Add enough ice-cream to make the drink thick like a malt. Serves two.",
      glass: 'vote'
  },

  {
      name: "Rain Man",
      ingredients: [ '151 proof rum', 'Midori melon liqueur', 'Orange juice'],
      instructions: "Shake all ingredients together, then pour into a hurricane glass filled with ice.",
      glass: 'Hurricane glass'
  },

  {
      name: "A Day at the Beach",
      ingredients: [ 'Coconut rum', 'Amaretto', 'Orange juice', 'Grenadine'],
      instructions: "Shake Rum, Amaretto, and Orange Juice in a shaker filled with ice. Strain over ice into a highball glass. Add Grenadine and garnish with a Pineapple Wedge and a Strawberry.",
      glass: 'Highball glass'
  },

  {
      name: "Smooth Dog",
      ingredients: [ 'Amaretto', '7-Up'],
      instructions: "Mix and drink",
      glass: 'vote'
  },

  {
      name: "Gentle Ben",
      ingredients: [ 'Vodka', 'Gin', 'Tequila', 'Orange juice'],
      instructions: "Mix together in a high glass, add some ice and a straw. Enjoy it !",
      glass: 'vote'
  },

  {
      name: "Bellini #2",
      ingredients: [ 'Champagne', 'Peach schnapps'],
      instructions: " ",
      glass: 'vote'
  },

  {
      name: "Flaming Lamborgini",
      ingredients: [ 'Kahlua', 'Amaretto', 'Vodka', 'Yellow Chartreuse', 'Blue Curacao', 'Milk'],
      instructions: "In a cocktail glass, mix Kalhua, Amaretto, and Vodka. Float the Chartreusse. In a liqueur glass, put the Blue Curaco and float the Milk. Light the cocktail glass and drink quickly through a straw. When it's almost gone, pour the Blue Curaco and milk into the Cocktail glass and suck until all gone.",
      glass: 'Cocktail glass'
  },

  {
      name: "Tiffany Marshall",
      ingredients: [ 'Dark rum', 'Vodka', 'Orange juice', 'Carbonated water', 'Lemon juice'],
      instructions: "Mix as punch. Add orange or lemon slices, or olives.",
      glass: 'vote'
  },

  {
      name: "Mexican Mudslide",
      ingredients: [ 'Kahlua', 'Amaretto', 'Ice-cream', 'Whipped cream', 'Chocolate syrup', 'Cherry'],
      instructions: "Mix kalhua, amaretto, and ice-cream. Swirl chocolate in the glass and add whip cream on top.",
      glass: 'vote'
  },

  {
      name: "Down Home Punch #1",
      ingredients: [ 'Tennessee whiskey', 'Peach schnapps', 'Sour mix', 'Orange juice', '7-Up', 'Grenadine'],
      instructions: "Mix in pitcher with ice, Pour into glass with ice, And enjoy.",
      glass: 'Pitcher'
  },

  {
      name: "The Big Banana!",
      ingredients: [ 'Rum', 'Amaretto', 'Coconut rum', 'Creme de Banane', 'Pineapple juice'],
      instructions: "Over Ice in a 20oz Glass Pour booze in first and top with Pineapple, giving it a two layered look with the brown amaretto on bottom,. Two straws, Two cherries.",
      glass: 'vote'
  },

  {
      name: "Banana Cream Pie",
      ingredients: [ 'Banana liqueur', 'Creme de Cacao', 'Vodka', 'Half-and-half'],
      instructions: "Mix in a shaker with ice then strain.",
      glass: 'vote'
  },

  {
      name: "Sex On The Beach #5",
      ingredients: [ 'Vodka', 'Midori melon liqueur', 'Chambord raspberry liqueur', 'Pineapple juice', 'Cranberry juice'],
      instructions: "Pour Vodka over crushed ice, add cranberry juice, midori, chambord, and top off with pinapple, stir gently and serve.",
      glass: 'vote'
  },

  {
      name: "Polar Bear, Swedish",
      ingredients: [ 'Absolut Vodka', 'Blue Curacao', 'Sprite', 'Ice'],
      instructions: "Mix Absolut Vodka and Blue Curaco, fill it up with Sprite. Use lots of icecubes.",
      glass: 'vote'
  },

  {
      name: "Malibu Twister",
      ingredients: [ 'Malibu rum', 'Tropicana', 'Cranberry juice'],
      instructions: "Add rum & trister then, add cranberry jucie,stir",
      glass: 'vote'
  },

  {
      name: "Space Odyssey",
      ingredients: [ '151 proof rum', 'Malibu rum', 'Pineapple juice', 'Orange juice', 'Grenadine', 'Cherries'],
      instructions: "Fill glass with ice and add shots of Bacardi and Malibu. Add splash of pineapple juice and top with orange juice. Add grenadine for color and garnish with cherries.",
      glass: 'vote'
  },

  {
      name: "Gibson",
      ingredients: [ 'Gin', 'Vermouth', 'Cocktail onion'],
      instructions: "Stir gin and vermouth over ice cubes in a mixing glass. Strain into a cocktail glass. Add the cocktail onions and serve.",
      glass: 'vote'
  },

  {
      name: "Down Home Punch #2",
      ingredients: [ 'Orange juice', 'Lemon-lime soda', 'Sweet and sour', 'Whiskey', 'Peach schnapps', 'Grenadine'],
      instructions: "Combine ingredients. Serve with ice.",
      glass: 'vote'
  },

  {
      name: "Urine Sample #2",
      ingredients: [ 'Galliano', 'Midori melon liqueur', 'Vodka'],
      instructions: "strain over ice. serve in shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Tokyo Ice Tea",
      ingredients: [ 'Vodka', 'Gin', 'Rum', 'Tequila', 'Kiwi liqueur'],
      instructions: "Mix the alcohol. Add 1 oz sugarsyrup, ice, 7 up and some pieces of lemon. Stir.",
      glass: 'vote'
  },

  {
      name: "Sex on the Beach #7",
      ingredients: [ 'Peach schnapps', 'Grenadine', 'Vodka', 'Orange juice'],
      instructions: "Add all together and stir heavily. You will then serve cold.",
      glass: 'vote'
  },

  {
      name: "Sperm",
      ingredients: [ 'Tequila', 'Vodka', 'Cream'],
      instructions: "Fill the slammer glass with tequila and vodka and drop carefully some cream in it.",
      glass: 'Shot glass'
  },

  {
      name: "Fuzzy Monkey",
      ingredients: [ 'Vodka', 'Peach schnapps', 'Creme de Banane', 'Orange juice'],
      instructions: "Shooter. Shake ingredients with ice (in a mixing tin). Strain into a shooter glass.",
      glass: 'Shot glass'
  },

  {
      name: "Klondyke",
      ingredients: [ 'Irish Cream', 'Jägermeister'],
      instructions: "In a shot-glass pour Jägermeister then Bailey's, do not blend. Drink it all at once.",
      glass: 'Shot glass'
  },

  {
      name: "Tropical Lifesaver #1",
      ingredients: [ 'Midori melon liqueur', 'Malibu rum', 'Pineapple juice'],
      instructions: "Fill glass with ice. Then add the Malibu and Midori. Then fill the remainder of the glass up with Pineapple Juice. Shake and enjoy!!",
      glass: 'vote'
  },

  {
      name: "Scooby Snack #1",
      ingredients: [ 'Malibu rum', 'Midori melon liqueur', 'Pineapple juice', 'Half-and-half'],
      instructions: "Shake ingredients in a mixing cup with ice. Strain into 7 oz. rocks glass and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Scooby Snack #2",
      ingredients: [ 'Vodka', 'Midori melon liqueur', 'Sweet and sour', '7-Up'],
      instructions: "Shake ingredients in a mixing cup with ice. Strain into 7 oz. rocks glass and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Watermelon shooter #1",
      ingredients: [ 'Southern Comfort', 'Amaretto', 'Creme de Noyaux', 'Sweet and sour'],
      instructions: "Mixing glass 1/4 filled with ice. Mix all four ingredients then strain into rocks glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Zenmeister",
      ingredients: [ 'Jägermeister', 'Root beer'],
      instructions: "Mix together and enjoy",
      glass: 'vote'
  },

  {
      name: "Barrier Reef",
      ingredients: [ 'Gin', 'Triple sec', 'Vanilla ice-cream'],
      instructions: "Blend.",
      glass: 'vote'
  },

  {
      name: "Banana Boat",
      ingredients: [ 'Midori melon liqueur', 'Banana liqueur', 'Blue Curacao', 'Pineapple juice', 'Banana', 'Pineapple', 'Ice'],
      instructions: "In a 12 Oz glass, place banana and ice. Combine the other ingredients in another glass and pour over the ice. Add the pineapple slice and enjoy.",
      glass: 'vote'
  },

  {
      name: "Monkey Brain #1",
      ingredients: [ 'Apfelkorn', 'Irish Cream'],
      instructions: "Fill a shot glass with Apfelkorn almost to the rim. Then, very carefully pour a little Bailey's into the glass. The two liquors don't mix at if poured correctly, and the Bailey's will sink to the bottom as a nasty looking blob, not unlike a brain.",
      glass: 'Shot glass'
  },

  {
      name: "Glacier Mint",
      ingredients: [ 'Vodka', 'White Creme de Menthe', 'Lime juice'],
      instructions: "Stir the ingredients together and strain into a sugar-rimmed cocktail glass. Garnish with mintleaves.",
      glass: 'Cocktail glass'
  },

  {
      name: "Exotic Finn",
      ingredients: [ 'Vodka', 'Passion fruit syrup', 'Strawberry syrup', 'Sprite'],
      instructions: "Fill a highball glass with cracked ice. Add the first three ingredients and stir. Top up with Sprite and garnish with mint leaves, a strawberry, a twist of orange and a straw. Ole Skeiedal, from Norway, took first place in the long drinks listing of the 1993 Finlandia Vodka International Drinks Competition.",
      glass: 'Highball glass'
  },

  {
      name: "Avalon",
      ingredients: [ 'Vodka', 'Pisang Ambon', 'Apple juice', 'Lemon juice', 'Lemonade'],
      instructions: "Fill a tall glass with ice. Layer the Finlandia Vodka, lemon and apple juices, Pisang Ambon, and top up with lemonade. Stir slightly and garnish with a spiralled cucumber skin and a red cherry. The cucumber provides zest and looks attractive. This drink, created by Timo Haimi, took first prize in the 1991 Finlandia Vodka Long Drink Competition.",
      glass: 'Highball glass'
  },

  {
      name: "B-57",
      ingredients: [ 'Kahlua', 'Peppermint schnapps', 'Irish cream'],
      instructions: "Layer ingredients into a shot glass in this order.",
      glass: 'Shot glass'
  },

  {
      name: "Electric Jello",
      ingredients: [ 'Vodka', 'Jello'],
      instructions: "Made in large quantities usually. Mixing varies depending on personal preference. Mix Jell-O as you normally would. Replace 26oz of water with 26oz of vodka (strong). Pour mixed Jell-O and Vodka into glasses or small cups for serving. Let set in freezer (vodka requires colder temperature to set). Serve after it has set with a spoon.",
      glass: 'vote'
  },

  {
      name: "Dark'n Dirty",
      ingredients: [ 'Dark rum', 'Coca-Cola'],
      instructions: "Mix like ordinary drink and serve with ice.",
      glass: 'vote'
  },

  {
      name: "Schnider",
      ingredients: [ 'Peach schnapps', 'Cider'],
      instructions: "Pour schnapps in a pint glass, top up with cider. Drink and enjoy.",
      glass: 'Pint glass'
  },

  {
      name: "Snowball #3",
      ingredients: [ 'Bourbon', 'Rumple Minze'],
      instructions: "mix together into a double shotglass",
      glass: 'vote'
  },

  {
      name: "White Out",
      ingredients: [ 'Peppermint schnapps', 'Triple sec', 'Cognac'],
      instructions: "Crushed ice Build up.",
      glass: 'vote'
  },

  {
      name: "Nuts and Berries #3",
      ingredients: [ 'Kahlua', 'Chambord raspberry liqueur', 'Cream'],
      instructions: "mix all the ingredients, and shake well.",
      glass: 'vote'
  },

  {
      name: "Green Dinosaur #3",
      ingredients: [ 'Vodka', 'Gin', 'Midori melon liqueur'],
      instructions: "Stir ingredients in ice and strain into a shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Gorilla Fart #2",
      ingredients: [ 'Jägermeister', 'Goldschlager'],
      instructions: "Just add the 2 ingredients, and shoot it.",
      glass: 'Shot glass'
  },

  {
      name: "252",
      ingredients: [ '151 proof rum', 'Bourbon'],
      instructions: "Add both ingredients to shot glass, shoot, and get drunk quick",
      glass: 'Shot glass'
  },

  {
      name: "Klingon Disrupter",
      ingredients: [ 'Bourbon', 'Mezcal', 'Cinnamon schnapps'],
      instructions: "Mix all three ingredients together. (Real Klingons drink it warm!) Shoot it!",
      glass: 'Shot glass'
  },

  {
      name: "Fuzzy F**ker",
      ingredients: [ 'Peach schnapps', 'Vodka', 'Sunny delight'],
      instructions: "Mix all ingrediants in a highball glass. Serve overice. Enjoy!",
      glass: 'Highball glass'
  },

  {
      name: "Irish Comfort",
      ingredients: [ 'Southern Comfort', 'Blue Curacao', 'Orange juice'],
      instructions: "combine Southern Comfort and Blue Curacao in a high ballglass over ice. Add enough orange juice to fill the glass. The orange juice and blue Curcao will combine to form a lovely green shade!",
      glass: 'vote'
  },

  {
      name: "Captain Creamsicle",
      ingredients: [ 'Spiced rum', 'Vanilla ice-cream', 'Sherbet'],
      instructions: "Add Captain Morgan's to blender. Add equal parts vanilla ice-cream and orange sherbert to taste (O.J. can be substitued for sherbert).",
      glass: 'vote'
  },

  {
      name: "Welcome delight",
      ingredients: [ 'Orange juice', 'Vodka', 'White wine', 'Sprite'],
      instructions: "Simple: Just put them into a bowl, and mix then together.",
      glass: 'vote'
  },

  {
      name: "3-Mile Long Island Iced Tea",
      ingredients: [ 'Gin', 'Light rum', 'Tequila', 'Triple sec', 'Vodka', 'Coca-Cola', 'Sweet and sour', 'Bitters', 'Lemon'],
      instructions: "Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge.",
      glass: 'vote'
  },

  {
      name: "Blue Nut",
      ingredients: [ 'Malibu rum', 'Blue Curacao', 'Pineapple juice'],
      instructions: "Pour into a shaker with ice and shake and strain",
      glass: 'vote'
  },

  {
      name: "Velvet Crush",
      ingredients: [ 'Gin', 'Kool-Aid'],
      instructions: "Add gin to a glass with ice. Add Kool Aid (any flavor, although I get the impression that purples and reds are often used).",
      glass: 'vote'
  },

  {
      name: "Jack Sprite",
      ingredients: [ 'Bourbon', 'Sprite', 'Lemon'],
      instructions: "Pour the 1 shot of bourbon into glass followed by Sprite to taste and then 1 slice of lemon. Then stir the beverage and enjoy. Note this is a light drink, a good one to start the evening off.",
      glass: 'vote'
  },

  {
      name: "RumRunner's Easy Margarita",
      ingredients: [ 'Limeade', 'Tequila', 'Gold tequila', 'Triple sec', 'Water', 'Lime juice'],
      instructions: "Whisk all ingredients in pitcher. Serve over ice. If frozen Margarita required, substitute ice for water and blend.",
      glass: 'Pitcher'
  },

  {
      name: "RumRunner's RubyRed",
      ingredients: [ 'Vodka', 'Grapefruit juice', 'Tonic water'],
      instructions: "Fill large glass with ice Add Vodka and Ruby Red juice Top with Tonic Pour from one glass to another to mix",
      glass: 'vote'
  },

  {
      name: "Tequila Comfort",
      ingredients: [ 'Tequila', 'Southern Comfort'],
      instructions: " ",
      glass: 'vote'
  },

  {
      name: "Bambus",
      ingredients: [ 'Red wine', 'Coca-Cola'],
      instructions: "Pour the ingredients into a glass.",
      glass: 'vote'
  },

  {
      name: "Vulcan Mind-Probe",
      ingredients: [ 'Ouzo', '151 proof rum'],
      instructions: "Mix and sereve straight up.",
      glass: 'Shot glass'
  },

  {
      name: "Suicide #1",
      ingredients: [ 'Pernod', 'Campari'],
      instructions: "Shake well with lots of ice. Then fill a large (35cl) glass with ice cubes. Strain into glass.",
      glass: 'vote'
  },

  {
      name: "French Afternoon",
      ingredients: [ 'Kahlua', 'Pernod'],
      instructions: "Served on ice in rocks-glass. May be served with a little whipped creem on top!",
      glass: 'vote'
  },

  {
      name: "Aggravation",
      ingredients: [ 'Scotch', 'Kahlua', 'Heavy cream'],
      instructions: "Fill a rocks glass with ice, then add Scotch and kahlua. Float cream on top and stir.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Banshee",
      ingredients: [ 'Creme de Banane', 'Creme de Cacao', 'Cream'],
      instructions: "Combine ingredients with crushed ice in a mixing glass, then shake & strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Ramos Fizz #2",
      ingredients: [ 'Gin', 'Cream', 'Lemon juice', 'Egg white', 'Powdered sugar', 'Orange juice', 'Club soda'],
      instructions: "Fill glass with cracked ice and add gin, cream, lemon juice, egg white, sugar and orange juice. Shake and strain into a chilled Collins glass, then add Club soda.",
      glass: 'Collins glass'
  },

  {
      name: "Zorro",
      ingredients: [ 'Sambuca', 'Irish Cream', 'White Creme de Menthe'],
      instructions: "add all and pour black coffee and add whipped cream on top.",
      glass: 'vote'
  },

  {
      name: "Orange Crush",
      ingredients: [ 'Vodka', 'Triple sec', 'Orange juice'],
      instructions: "Add all ingredients to tumbler-Pour as shot",
      glass: 'vote'
  },

  {
      name: "Purple Haze #1",
      ingredients: [ 'Tequila', 'Rum', 'Vodka', 'Gin', 'Chambord raspberry liqueur', 'Sour mix', '7-Up'],
      instructions: "Fill 12 oz glass with ice. Add alcohol and sour. Top off with 7 up.",
      glass: 'vote'
  },

  {
      name: "Cumulus #1",
      ingredients: [ 'Drambuie', 'Tia maria', 'Cream', 'Egg yolk', 'Sugar'],
      instructions: "Shake intensily with ice. Serve in frosted glass, and sprinkle with powdered coffee or nutmeg.",
      glass: 'vote'
  },

  {
      name: "Stinger Shot",
      ingredients: [ 'Vodka', 'White Creme de Menthe', 'Tabasco sauce'],
      instructions: "Tabasco in the bottom of the shot. Pour Vodka and Crème de Mènthe gently on top. Shoot!",
      glass: 'Shot glass'
  },

  {
      name: "Cinnamon Road",
      ingredients: [ 'Bourbon', 'Apfelkorn', 'Goldschlager', 'Ginger ale'],
      instructions: "Shake with ice. Serve with a slice of dried apple.",
      glass: 'vote'
  },

  {
      name: "Apricot adventure",
      ingredients: [ 'Mint', 'Sugar', 'Lime juice', 'Apricot brandy', 'Vodka', 'Club soda'],
      instructions: "Crush part of the mint together with the sugar and some Zwack. Shake the rest of the Zwack with the Lime Juice and ice and pour into the glass. Fill up with club soda and decorate with the remaining mint and perhaps some lime.",
      glass: 'vote'
  },

  {
      name: "Snakebite #2",
      ingredients: [ 'Vodka', 'Green Chartreuse', 'Tabasco sauce'],
      instructions: "Very carefully layer the vodka on top of the green Chartreuse. Drop in the Tabasco, which should sink to the bottom. Slam it.",
      glass: 'vote'
  },

  {
      name: "Green Dinosaur #4",
      ingredients: [ 'Gin', 'Rum', 'Vodka', 'Midori melon liqueur', 'Pineapple juice', 'Sour mix', 'Tequila'],
      instructions: "Add all ingredients and shake!",
      glass: 'vote'
  },

  {
      name: "155 Belmont",
      ingredients: [ 'Dark rum', 'Light rum', 'Vodka', 'Orange juice'],
      instructions: "Blend with ice. Serve in a wine glass. Garnish with carrot.",
      glass: 'White wine glass'
  },

  {
      name: "Hashi Bashi",
      ingredients: [ 'Gin', 'Campari', 'Schweppes Russchian'],
      instructions: "Pour gin and campari over a couple of icecubes. Fill up with russian!",
      glass: 'vote'
  },

  {
      name: "Liquid After-Eight",
      ingredients: [ 'White Creme de Menthe', 'Chocolate milk'],
      instructions: "Pour the Creme de menthe in a Highball glass Fill the glass with the cold chocolate-milk.",
      glass: 'Highball glass'
  },

  {
      name: "Crimson Tide",
      ingredients: [ 'Absolut Vodka', 'Malibu rum', 'Chambord raspberry liqueur', 'Maui', 'Southern Comfort', '151 proof rum', 'Cranberry juice', 'Sprite'],
      instructions: "combine all ingrediants, chill over ice, strain.",
      glass: 'vote'
  },

  {
      name: "Cyberlady",
      ingredients: [ 'Cognac', 'Strawberry liqueur', 'Triple sec', 'Orange juice', 'Lemon juice'],
      instructions: "Shake well and pour in a cocktail glass, frosted with strawberry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Net surfer",
      ingredients: [ 'Cognac', 'Bourbon', 'Vodka', 'Peach liqueur', 'Orange juice', 'Lemon juice', 'Strawberry syrup'],
      instructions: "shake well and pour in a cocktail glass frosted with strawberry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Old Crusty",
      ingredients: [ '151 proof rum', 'Bourbon'],
      instructions: " ",
      glass: 'Shot glass'
  },

  {
      name: "Whiskey Manhattan",
      ingredients: [ 'Whiskey', 'Sweet Vermouth'],
      instructions: " ",
      glass: 'vote'
  },

  {
      name: "Sex On The Beach #6",
      ingredients: [ 'Absolut Citron', 'Strawberry schnapps', 'Orange juice', 'Cream'],
      instructions: "Highball glass 1/2 full ice. Add vodka and schapps. Fill to near top with OJ, amount depends on ice and glass size. Add cream last and stir. May be served up after mixing. The amount of OJ and dairy cream may be adjusted taste.",
      glass: 'vote'
  },

  {
      name: "Olle Goop",
      ingredients: [ 'Vodka', 'Lime juice', 'Schweppes Russchian'],
      instructions: "Just mix in a highball glass.",
      glass: 'Highball glass'
  },

  {
      name: "Polar Bear #2",
      ingredients: [ 'Vodka', 'Blue Curacao', '7-Up'],
      instructions: "Just blend with ice in a highball glass.",
      glass: 'Highball glass'
  },

  {
      name: "Hell Mary",
      ingredients: [ 'Aquavit', 'Tequila', 'Angostura bitters', 'Tabasco sauce', 'Horseradish'],
      instructions: "Fill with V-8 and shake vigorously. Add black pepper to taste and garnish with celery and lemon wedge. Serve in Collins glass filled with ice.",
      glass: 'Collins glass'
  },

  {
      name: "Lemon Shooters",
      ingredients: [ 'Vodka', 'Sugar', 'Lemon'],
      instructions: "Cover lemon slice with sugar. Shoot, then suck (on the lemon)!",
      glass: 'vote'
  },

  {
      name: "En sånn en",
      ingredients: [ 'Absolut Vodka', 'Sour mix', 'Coca-Cola', 'Ice'],
      instructions: "Fill longdrinks glas with ice-cubes, add vodka and sour-mix. Top with Coca-Cola, stir.",
      glass: 'vote'
  },

  {
      name: "Dr. Pepper #4",
      ingredients: [ 'Beer', 'Coca-Cola', 'Kahlua', 'Amaretto', 'Cherry brandy'],
      instructions: "Pour beer into beer stein, add coke. In a shot glass mix the three other ingredients. Pour contents of shot glass into beer stein and chug it all down. Tastes just like a Dr. Pepper.",
      glass: 'Shot glass'
  },

  {
      name: "Polar Bear #3",
      ingredients: [ 'Creme de Cacao', 'Peppermint schnapps'],
      instructions: "Mix drinks over ice before serving in a shot glass. Tastes like a peppermint patty!",
      glass: 'Shot glass'
  },

  {
      name: "Poison Apple",
      ingredients: [ 'Apfelkorn', 'Absolut Vodka'],
      instructions: "Pour ingredients over ice in shaker. Shake and strain into shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Karma Chameleon",
      ingredients: [ 'Vodka', 'Peach schnapps', 'Sprite', 'Grenadine'],
      instructions: "Mix well. Serve over ice.",
      glass: 'vote'
  },

  {
      name: "Dr. Pepper #3",
      ingredients: [ 'Amaretto', 'Gin', 'Beer'],
      instructions: "fill shot glass with amaretto and gin. Drop shot glass into half glass of beer. Then, slam. It tastes just like Dr. Pepper (the soda)!!!!",
      glass: 'Shot glass'
  },

  {
      name: "Watermelon Shooter #2",
      ingredients: [ 'Southern Comfort', 'Amaretto', 'Pineapple juice'],
      instructions: "Stir in an ice-filled mixing glass and strain into rocks glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Knockout Punch",
      ingredients: [ 'Hawaiian Punch', 'Tequila', 'Rum'],
      instructions: "pour all three together, mix well",
      glass: 'vote'
  },

  {
      name: "1-900-FUK-MEUP",
      ingredients: [ 'Absolut Kurant', 'Grand Marnier', 'Chambord raspberry liqueur', 'Midori melon liqueur', 'Malibu rum', 'Amaretto', 'Cranberry juice', 'Pineapple juice'],
      instructions: "Shake ingredients in a mixing tin filled with ice cubes. Strain into a rocks glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "P.S. I Love you",
      ingredients: [ 'Irish Cream', 'Grand Marnier', 'White Creme de Menthe', 'Nutmeg', 'Cream', 'Ice'],
      instructions: "Mix the Baileys, Grand Marnier, and single cream together with some ice in a shaker. Shake thoroughly, and pour into a cocktail glass. Pour a splash (about 1/3 shot) through the mixture to the bottmo of the glass. Shake nutmeg over the top of the cocktail, and Bob's your Uncle.",
      glass: 'Cocktail glass'
  },

  {
      name: "Penguino",
      ingredients: [ 'Light rum', 'Triple sec', 'Tonic water'],
      instructions: "Fill collins glass with ice, add one shot light rum and one shot Triple sec or triple sec. Fill with tonic. Serve ungarnished, or with cherry.",
      glass: 'Collins glass'
  },

  {
      name: "Vodka Russian",
      ingredients: [ 'Vodka', 'Schweppes Russchian'],
      instructions: "Mix it as a ordinary drink .",
      glass: 'vote'
  },

  {
      name: "Vodka Bitter lemon",
      ingredients: [ 'Vodka', 'Bitter lemon'],
      instructions: " ",
      glass: 'vote'
  },

  {
      name: "Malibu and Soda",
      ingredients: [ 'Malibu rum', 'Cola'],
      instructions: "Mix above ingredients in cup with ice.",
      glass: 'vote'
  },

  {
      name: "Summer Tea",
      ingredients: [ 'Sugar', 'White grape juice', 'Lemon juice', 'Iced tea'],
      instructions: "Make the tea and add all the stuff. Mix and enjoy.",
      glass: 'vote'
  },

  {
      name: "Southern Blues #2",
      ingredients: [ 'Blackberry schnapps', 'Southern Comfort'],
      instructions: "Mix Schnapps and Southern Comfort together, chill, and serve cold. Tastes like Kool Aid.",
      glass: 'vote'
  },

  {
      name: "Danbooka",
      ingredients: [ 'Coffee', 'Everclear'],
      instructions: "pour it in and mix it.",
      glass: 'vote'
  },

  {
      name: "Tropical Life Saver #2",
      ingredients: [ 'Midori melon liqueur', 'Malibu rum', 'Absolut Citron', 'Pineapple juice', 'Sour mix', '7-Up'],
      instructions: "Mix together, Tall glass...",
      glass: 'Highball glass'
  },

  {
      name: "Sex on the Beach #8",
      ingredients: [ 'Malibu rum', 'Pineapple juice', 'Grenadine', 'Sprite'],
      instructions: "Coco-Rum can be substituted for Malibu Rum.",
      glass: 'vote'
  },

  {
      name: "Buttery Nipple #3",
      ingredients: [ 'Peach schnapps', 'Irish Cream'],
      instructions: "Pour schnapps into shot glass. Carefully add Baily's to surface. Don not mix.",
      glass: 'Shot glass'
  },

  {
      name: "Grainslide",
      ingredients: [ 'Grain alcohol', 'Irish cream', 'Kahlua'],
      instructions: "Mix in a shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "110 in the shade",
      ingredients: [ 'Lager', 'Tequila'],
      instructions: "Drop shooter in glass. Fill with beer",
      glass: 'vote'
  },

  {
      name: "Suicide #2",
      ingredients: [ 'Vodka', 'Lime liqueur', 'Club soda'],
      instructions: "Just mix all ingredients together.",
      glass: 'vote'
  },

  {
      name: "Grand Blue",
      ingredients: [ 'Malibu rum', 'Peach schnapps', 'Blue Curacao', 'Sweet and sour'],
      instructions: "Serve in an old fashioned glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Jelly Bean #2",
      ingredients: [ 'Kahlua', 'Anisette', '151 proof rum'],
      instructions: "Pour ingredients in the above order into highball glass. Tilt glass until mixture is close to top of glass and light. Wait a few seconds, then right before shooting it, blow it out so you don't burn your face off!",
      glass: 'Highball glass'
  },

  {
      name: "Solaris",
      ingredients: [ 'Rum', 'Grenadine', 'Sugar'],
      instructions: "Measure the parts so the glass is 2/3 full. The sugar teaspoonfull should be skimmed and stirred a little. .",
      glass: 'Shot glass'
  },

  {
      name: "Pepito Lolito",
      ingredients: [ 'Gin', 'Blue Curacao', 'Tonic water', 'Orange soda', 'Ice', 'Lemon'],
      instructions: "Add gin and Curaco, more gin than curaco. Mix the soda, which should have orange flavour (eg. Fanta or something like that) and the tonic, 1/2 of each. Fill up until the bitter gin taste is gone, and the drink is all green. Be sure that all the ingredients are very cold, and add ice. To make it perfect, a slice of lemon is to be slid around the edge of the glass, and then put in the drink.",
      glass: 'Collins glass'
  },

  {
      name: "Green delight",
      ingredients: [ 'Vodka', 'Pisang Ambon', 'Sprite', 'Orange juice'],
      instructions: "Just mix all the ingredients. It is also best served cold.",
      glass: 'Highball glass'
  },

  {
      name: "Summertime",
      ingredients: [ 'Vodka', 'Sprite', 'Orange juice'],
      instructions: "Just mix the ingredients. It can also be served without alchohol. Just mix equal amounts of sprite light and orange juice.",
      glass: 'Highball glass'
  },

  {
      name: "Cool Kid",
      ingredients: [ 'Tequila', 'Vodka', 'Sprite'],
      instructions: "put the shit in a hurricane glass, mix it up, and suck it down",
      glass: 'Hurricane glass'
  },

  {
      name: "Kretchma",
      ingredients: [ 'Vodka', 'Creme de Cacao', 'Lemon juice', 'Grenadine'],
      instructions: "Mix all ingredients with cracked ice in a shaker or blender. Strain into a chilled cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Soviet Cocktail",
      ingredients: [ 'Vodka', 'Dry Vermouth', 'Sherry', 'Lemon peel'],
      instructions: "Mix all ingredients, except lemon peel, with cracked ice in a shaker or blender and strain into a chilled cocktail glass. Twist lemon peel over drink and drop into glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Cossack Charge",
      ingredients: [ 'Vodka', 'Cognac', 'Cherry brandy'],
      instructions: "Mix all ingredients with cracked ice in a shaker or blender and pour into a chilled cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Black Magic",
      ingredients: [ 'Vodka', 'Coffee liqueur', 'Lemon juice'],
      instructions: "Mix ingredients with cracked ice in a shaker or blender. Pour into a chilled old-fashioned glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "St. Petersburg",
      ingredients: [ 'Vodka', 'Orange bitters', 'Orange'],
      instructions: "Pour vodka and bitters into mixing glass with several ice cubes. Stir until very cold and pour into a chilled old-fashioned glass. Score peel of orange wedge with tines of fork and drop into drink.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Siberian Sunrise",
      ingredients: [ 'Vodka', 'Grapefruit juice', 'Triple sec'],
      instructions: "Mix all ingredients with cracked ice in a shaker or blender and pour into highball glass.",
      glass: 'Highball glass'
  },

  {
      name: "Fuzzy Navel (original)",
      ingredients: [ 'Peach schnapps', 'Orange juice'],
      instructions: "Pour peach schnapps into ice filled collins glass. Fill with orange juice and stir to combine.",
      glass: 'Collins glass'
  },

  {
      name: "Whop Me Down Sweet Jesus",
      ingredients: [ 'Vodka', 'Gin', 'Light rum', 'Tequila', 'Triple sec', 'Blue Curacao', 'Sour mix', '7-Up'],
      instructions: "Best in large mason jar. Blue going down Blue coming up.",
      glass: 'Mason jar'
  },

  {
      name: "Absolut Stress #1",
      ingredients: [ 'Absolut Vodka', 'Malibu rum', 'Peach schnapps', 'Orange juice', 'Pineapple juice', 'Cranberry juice'],
      instructions: "Pour all ingredients into a mixing tin and shake with ice. Pour into a collins glass. No garnish.",
      glass: 'Collins glass'
  },

  {
      name: "Highball",
      ingredients: [ 'Whiskey', 'Ginger ale', 'Ice'],
      instructions: "fill a medium glass most of the way with ice, pour in 1 shot, about 1.5 ounces of whiskey, fill the rest of the way with ginger ale.",
      glass: 'vote'
  },

  {
      name: "Killing Light",
      ingredients: [ 'Vodka', 'Cognac', 'Peppermint schnapps', 'Triple sec', '7-Up'],
      instructions: "Highly dangerous mix-but taste it! You'll be surprised.",
      glass: 'vote'
  },

  {
      name: "The Tony Kelly",
      ingredients: [ 'Rum', 'Orange soda', 'Margarita mix'],
      instructions: "Mix. Shoot.",
      glass: 'Shot glass'
  },

  {
      name: "Big brothers",
      ingredients: [ 'Whisky', 'Ginger ale', 'Lemon', 'Ice'],
      instructions: "Selfinstructing appetizer.",
      glass: 'vote'
  },

  {
      name: "Snowshoe",
      ingredients: [ 'Peppermint schnapps', 'Bourbon'],
      instructions: "Pour peppermint schnapps in shot glass, top with bourbon, drink it up!",
      glass: 'Shot glass'
  },

  {
      name: "Slider",
      ingredients: [ 'Rye whiskey', 'Kahlua', 'Milk'],
      instructions: "Add Rye, khalua and milk to a high ball glass, glass should be full off ice.Stir and enjoy.",
      glass: 'Highball glass'
  },

  {
      name: "Slam Dunk",
      ingredients: [ 'Southern Comfort', 'Orange juice', 'Cranberry juice'],
      instructions: "Mix in a rock glass,filled with ice. Add 1.5oz of Southern Comfort. For the mix, add 1 can of cranberry juice with half a can of orange concentrate into a pitcher. Use this mix to top off the drink.",
      glass: 'Pitcher'
  },

  {
      name: "New Orleans Salty Dog",
      ingredients: [ 'Grapefruit juice', 'Vodka', 'Salt'],
      instructions: "Coat the rim of a highball glass with salt. Mix Vodka and Grapefruit juice in another glass with ice and pour into glass with salted rim.",
      glass: 'Highball glass'
  },

  {
      name: "Orgasm #2",
      ingredients: [ 'Peppermint schnapps', 'Irish Cream'],
      instructions: "1. Pour the two evenly into a 1-ounce shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Love Potion",
      ingredients: [ 'Orange vodka', 'Chambord raspberry liqueur', 'Cranberry juice'],
      instructions: "chill all ingredients over ice, strain into chilled shot glass, serve, enjoy",
      glass: 'Shot glass'
  },

  {
      name: "Prairie Fire #3",
      ingredients: [ 'Tequila', 'Tabasco sauce', 'Black pepper'],
      instructions: " ",
      glass: 'Shot glass'
  },

  {
      name: "Freson",
      ingredients: [ 'Mountain Dew', 'Dark rum', 'Peach schnapps'],
      instructions: "Mix all ingredients and pour over ice.",
      glass: 'vote'
  },

  {
      name: "Detroit Red Wing",
      ingredients: [ 'Ginger ale', 'Cinnamon schnapps'],
      instructions: "Mix with ice.",
      glass: 'vote'
  },

  {
      name: "Berry Me In The Sand",
      ingredients: [ 'Vodka', 'Triple sec', 'Orange juice', 'Ice'],
      instructions: "Pour ingredients into glass. Enjoy!",
      glass: 'vote'
  },

  {
      name: "Black Army",
      ingredients: [ 'Galliano', 'Jägermeister'],
      instructions: "Pour gently, i'ts important to get 2 layers. Use a shot glass. You can use 2 cl of each, if 3 is to much for you.",
      glass: 'Shot glass'
  },

  {
      name: "Southern Special",
      ingredients: [ 'Southern Comfort', 'Lime', 'Ginger ale'],
      instructions: "Just mix it! Have a slice of lime on the top. Served with lots of ice...",
      glass: 'vote'
  },

  {
      name: "Ice Bear",
      ingredients: [ 'Blue Curacao', 'Vodka', 'Soda water'],
      instructions: "Mix vodka and Curacao. Pour in a high glass. Fill it up with soda.",
      glass: 'Highball glass'
  },

  {
      name: "Gorilla",
      ingredients: [ '151 proof rum', 'Jägermeister'],
      instructions: "none",
      glass: 'vote'
  },

  {
      name: "Copper Camel",
      ingredients: [ 'Irish Cream', 'Butterscotch schnapps'],
      instructions: "Add Bailey's to shot glass and and add Buterscotch on top.",
      glass: 'Shot glass'
  },

  {
      name: "Dr. Daniel",
      ingredients: [ 'Bourbon', 'Dr. Pepper', 'Ice'],
      instructions: "Put ice in glass. Pour in ingredients. Gently swirl to mix. Drink.",
      glass: 'vote'
  },

  {
      name: "Doctor",
      ingredients: [ 'Fruit punch', 'Gin', 'Lemon juice'],
      instructions: "Mixit together and shake it not to hard. Pour it up in a ordinar cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Ugly",
      ingredients: [ 'Tomato juice', 'Beer'],
      instructions: "fill beer glass 3/4 full of beer, slowly pour tomato juice down the side so it settles on the bottom. Shake salt in the palm of your hand. Throw salt into the glass and wait until the top foams up. Chug the drink and then scream UGLY!!",
      glass: 'Beer mug'
  },

  {
      name: "Bullfrog (The Party Mix)",
      ingredients: [ 'Vodka', 'Grain alcohol', 'Ginger ale', 'Lemon-lime soda', 'Sprite', 'Lemon', 'Lime'],
      instructions: "Pour in the soda, and then add the Vodka. After mixing pour in the grain alcohol. Use a knife and cut the lemons and limes and squeeze the juice out of them. store bought lime and lemon juice can be substituted. Now you have a great party drink and should have a good night.",
      glass: 'vote'
  },

  {
      name: "God's Great Creation",
      ingredients: [ 'Whiskey', 'Peach schnapps', 'Fruit punch', 'Lemon juice', 'Pepsi Cola'],
      instructions: "Pour Whiskey and Peach Schnapps over ice cubes in a High Ball Glass. Add frozen canned orange banana punch (no water). Add lemon juice and fill the rest with pepsi. Stir well and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Texas Sweat",
      ingredients: [ 'Grain alcohol', 'Grenadine', 'Vodka', 'Rum', 'Gin', 'Tequila'],
      instructions: "Mix all together and filter back and forth through ice to chill and mix. Not a sipping drink, shoot it.",
      glass: 'Shot glass'
  },

  {
      name: "Baby Eskimo",
      ingredients: [ 'Kahlua', 'Milk', 'Vanilla ice-cream'],
      instructions: "Leave ice-cream out for about 10 minutes. Add ingredients in order, stir with chopstick (butter knife or spoon works too). Consume immediately and often. Nice and light, great for following a heavy drink.",
      glass: 'vote'
  },

  {
      name: "Red Ox",
      ingredients: [ 'Light rum', 'Malibu rum', 'Pineapple juice', 'Cranberry juice', 'Sweet and sour', 'Grenadine'],
      instructions: "Fill a pint glass a quarter of the way with ice, then add the rums and juice. Fill the rest of the glass with the Sweet and Sour, almost to the top, then finish it off with the grenadine. Mix and serve.",
      glass: 'Pint glass'
  },

  {
      name: "Tennesee Mud",
      ingredients: [ 'Coffee', 'Bourbon', 'Amaretto', 'Whipped cream'],
      instructions: "Mix Coffee, bourbon and Amaretto. Add Cream on top.",
      glass: 'vote'
  },

  {
      name: "Midori Chan",
      ingredients: [ 'Rum', 'Pineapple', 'Pina colada mix', 'Midori melon liqueur', 'Ice'],
      instructions: "Just pour it all into the blender and mix until desired consistency is achieved.",
      glass: 'vote'
  },

  {
      name: "Snow White",
      ingredients: [ 'Sprite', 'Beer'],
      instructions: "Place Sprite/7up into glass. Pour Heineken to top off. Mixture can be varied. Good summertime drink.",
      glass: 'Beer pilsner'
  },

  {
      name: "Swedish Coffee",
      ingredients: [ 'Coffee', 'Aquavit', 'Sugar'],
      instructions: "Pour the coffee in an ordinary coffee cup. Add the aquavit. Add sugar by taste. Stir and have a nice evening (morning)",
      glass: 'vote'
  },

  {
      name: "Duck's Ass",
      ingredients: [ 'Irish Cream', 'Kahlua', '151 proof rum'],
      instructions: "mix in tumbler with ice strain in shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Lombomba",
      ingredients: [ 'Chocolate milk', 'Rum'],
      instructions: "pour the ingredients into a norma drink glass with a few ice-cubes. stirr.",
      glass: 'vote'
  },

  {
      name: "Slippery Nipple #2",
      ingredients: [ 'Irish Cream', 'Sambuca'],
      instructions: "pour sambuca into shot glass float Bailies on top enjoy",
      glass: 'Shot glass'
  },

  {
      name: "The Betty Ford",
      ingredients: [ 'Absolut Citron', 'Sprite', 'Grenadine'],
      instructions: "Add Grenadine (based on desired sweetness), followed by Absolut. Add ice and then Sprite (her preferred mixing).",
      glass: 'vote'
  },

  {
      name: "Dead Dog",
      ingredients: [ 'Crown Royal', 'Beer', 'Tabasco sauce'],
      instructions: "Add in the order given and enjoy!",
      glass: 'vote'
  },

  {
      name: "Lemonsquash a la vermouth",
      ingredients: [ 'Lemon juice', 'Lime juice', 'Vermouth', 'Soda water'],
      instructions: "Mix add shake all the ingredience except the soda water in a shaker with ice. Pour it into a collins glas, add up with sodawater. Add ice and a lemon slide.",
      glass: 'vote'
  },

  {
      name: "Casablanca #2",
      ingredients: [ 'Orange juice', 'Vodka', 'Advocaat', 'Lemon juice'],
      instructions: "Shake not too short with enough ice.",
      glass: 'vote'
  },

  {
      name: "Breathalizer",
      ingredients: [ 'Peppermint schnapps', 'Rum'],
      instructions: "just mix together",
      glass: 'vote'
  },

  {
      name: "Nuts and Berries #4",
      ingredients: [ 'Irish cream', 'Grand Marnier', 'Kahlua', 'Half-and-half'],
      instructions: "Mix ingredients with ice and shake. Serve with ice strained out.",
      glass: 'vote'
  },

  {
      name: "Russian Qualude #2",
      ingredients: [ 'Vodka', 'Irish cream', 'Coffee liqueur', 'Amaretto'],
      instructions: "Pour over ice, shake vigorously, Strain into martini style cocktail glass. Garnish with one filbert.",
      glass: 'Cocktail glass'
  },

  {
      name: "Saint Paul",
      ingredients: [ 'Gin', 'White rum', 'Bitter lemon', 'Ice', 'Angostura bitters'],
      instructions: "Take a tall glass, put a few ice cubes on top of each other. Pour the Gin and the rum in the glass, Fill the glass with bitter lemon. Leave some of the ice over the surface, so that you can pour the angostura on top of it. It should leave a rather nice track of red down the ice cubes.",
      glass: 'Highball glass'
  },

  {
      name: "Horny Toad",
      ingredients: [ 'Kahlua', 'Triple sec', 'Cream'],
      instructions: "Layer each part in glass first: Triple Sec second: Kahlua third: Cream",
      glass: 'vote'
  },

  {
      name: "Negroni",
      ingredients: [ 'Gin', 'Campari', 'Sweet Vermouth'],
      instructions: "Stir over ice and pour into a rocks glass. Garnish with a lemon zest.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Snake Piss",
      ingredients: [ 'Milk', 'Cranberry juice', 'Peach schnapps'],
      instructions: "Fill glass with ice (crushed or cubes). Add ingredients and stir ocassionally.",
      glass: 'vote'
  },

  {
      name: "Sweet Tart",
      ingredients: [ 'Vodka', 'Midori melon liqueur', 'Sweet and sour', '7-Up'],
      instructions: "Shake ingredients in a mixing cup with ice. Strain into 7 oz. old-fashioned glass and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Naked Twister",
      ingredients: [ 'Midori melon liqueur', 'Vodka', 'Tuaca', 'Pineapple juice', '7-Up'],
      instructions: "Build into a Pint Glass and cheery garnish. It's a real lady killer in San Diego.",
      glass: 'Pint glass'
  },

  {
      name: "DJ Shooters",
      ingredients: [ 'Ice', 'Peach schnapps', 'Gin', 'Coconut rum', 'Vodka', 'Pineapple juice', 'Orange juice', 'Cranberry juice'],
      instructions: "To Pitcher full of Ice, add Peach Schnapps, Rum, Vodka, Gin, and juices. Stir well. Serve.",
      glass: 'Pitcher'
  },

  {
      name: "Mad Scientist #2",
      ingredients: [ 'Midori melon liqueur', 'Sour mix', 'Soda water', '151 proof rum'],
      instructions: "Mix melon liqueur, sour, and soda with ice in shaker. Shake and strain into martini glass. Top with rum and ignite.",
      glass: 'Shot glass'
  },

  {
      name: "Juniata Juice",
      ingredients: [ 'Beer', 'Rum', 'Lime juice'],
      instructions: "Add 1 shot rum to 12 oz beer, stir in 2 tbls lime juice concentrate.",
      glass: 'vote'
  },

  {
      name: "Big Stick",
      ingredients: [ 'Sloe gin', 'Southern Comfort', 'Peach schnapps'],
      instructions: "Build over ice in an 11 oz. glass Looks and tastes like a big stick popsicle",
      glass: 'vote'
  },

  {
      name: "Adam Sunrise",
      ingredients: [ 'Vodka', 'Lemonade', 'Water', 'Sugar'],
      instructions: "Fill blender up with ice. Fill half with Bartons Vodka. Put 10 tsp of sugar, add 1/2 can lemonade concentrate, fill to top with water. Blend for 60 seconds.",
      glass: 'vote'
  },

  {
      name: "Harley Davidson #2",
      ingredients: [ 'Malibu rum', 'Jägermeister', 'Whiskey', 'Lemon juice'],
      instructions: "Mix it all togheter and stir it up.",
      glass: 'vote'
  },

  {
      name: "Red Square",
      ingredients: [ 'Vodka', 'Sambuca', 'Tabasco sauce'],
      instructions: "Mix it together.",
      glass: 'Shot glass'
  },

  {
      name: "C*m in a Hot Tub",
      ingredients: [ 'Vodka', 'White rum', 'Irish Cream'],
      instructions: "Pour the vodka and rum carefully but not too carefully into a glass. They have different consistencies and you want them to mix just a little. Now let several drops of Bailey's fall into the liquor.",
      glass: 'vote'
  },

  {
      name: "Brain Tumor #2",
      ingredients: [ 'Watermelon schnapps', 'Irish Cream', 'Grenadine'],
      instructions: "Add Schnapps, Dribble Bailey's to give the look of a brain and add a few drops of grenadine to make that hemmorage look.",
      glass: 'vote'
  },

  {
      name: "Foggy Morning",
      ingredients: [ 'Vodka', 'Peach juice', 'Vermouth', 'Lemon'],
      instructions: "Serve on ice.",
      glass: 'vote'
  },

  {
      name: "Rainy Night",
      ingredients: [ 'Vodka', 'Whiskey', 'Peach juice', 'Vermouth', 'Lemon'],
      instructions: "Serve on ice.",
      glass: 'vote'
  },

  {
      name: "Dancing Dutchman",
      ingredients: [ 'Vodka', 'Ice', 'Strawberry juice', 'White wine', 'Lime juice', 'Peach juice', 'Scotch', 'Rum'],
      instructions: "Mix fruit juices together in one bowl, place in blender with ice cubes. When slushy mixture is complete, stir in alcohol and shake until completly mixed. Place mixture in punchbowl, and float cherries in the bowl if desired.",
      glass: 'Punch bowl'
  },

  {
      name: "Niagara Falls",
      ingredients: [ 'Vodka', 'Mandarine Napoleon', 'Lemon juice', 'Sugar syrup', 'Ginger ale'],
      instructions: "Build the sugar syrup, lemon juice, Mandarine Napoleon and Finlandia Vodka. Serve in a cocktail or champagne glass with a splash of ginger ale.",
      glass: 'Cocktail glass'
  },

  {
      name: "William's Rainbow",
      ingredients: [ 'Vodka', 'Blue Curacao', 'Grenadine'],
      instructions: "high ball glas fill it with ice. poor vodka over the ice, then fill up with sprite. poor slowly 1cl blue curacao, after that poor 1cl grenadine. Ready to serv. The guest will now stir it and the drink will turn purple.",
      glass: 'vote'
  },

  {
      name: "Nestle",
      ingredients: [ 'Absolut Peppar', 'Midori melon liqueur'],
      instructions: " ",
      glass: 'Shot glass'
  },

  {
      name: "Red Witch",
      ingredients: [ 'Pernod', 'Cider', 'Blackcurrant cordial'],
      instructions: "Put Pernod in a pint glass. Fill almost to the top with cider and add the blackcurrant. After that, it's up to you.",
      glass: 'Pint glass'
  },

  {
      name: "Lee's Drink",
      ingredients: [ 'Coffee', 'Tia maria', 'Frangelico', 'Amaretto', 'Whipped cream', 'Cherry'],
      instructions: "Fill glass 1/4 with coffee, pour Tia Maria, Frangelico, & Amaretto slowly, add whipped cream on top, cherry if you want to. When drinking, stir gently if you like your coffee light. Drink from the bottom with a straw if you like it strong. Still looking for a better name, e-mail me if you think of one, or if you've heard of it with another name. imrey@aol.com",
      glass: 'vote'
  },

  {
      name: "French Whore",
      ingredients: [ 'Vodka', 'Chambord raspberry liqueur', 'Pineapple juice'],
      instructions: "Shake vigorously over ice and strain into a rocks glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Butcherblock",
      ingredients: [ 'Tequila', 'Kahlua', 'Half-and-half'],
      instructions: "Pour all ingredients over ice in a large (16 oz.)glass. Shake vigorously. Garnish with grated chocolate. YUMMM!",
      glass: 'vote'
  },

  {
      name: "Cosmopolitan #3",
      ingredients: [ 'Vodka', 'Triple sec', 'Cranberry juice', 'Lime juice'],
      instructions: "Stir ingredients on ice and strain into martini glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Absolut Stress #2",
      ingredients: [ 'Absolut Vodka', 'Peach schnapps', 'Coconut liqueur', 'Cranberry juice', 'Pineapple juice'],
      instructions: "Mix well. Garnish with Orange and Cherry. Enjoy",
      glass: 'vote'
  },

  {
      name: "Timberwolf",
      ingredients: [ 'Light rum', 'Tequila', 'Gin', 'Vodka', 'Grain alcohol', 'Creme de Noyaux'],
      instructions: "Mix together in a a large glass and fill remainder with Orange Juice. Serve Cold",
      glass: 'vote'
  },

  {
      name: "Vodka Kick",
      ingredients: [ 'Vodka', 'Ginger ale', 'Lime'],
      instructions: "Just mix it! Also add some lime.",
      glass: 'vote'
  },

  {
      name: "Morning Milk",
      ingredients: [ 'Milk', 'Gin', 'Strawberries', 'Kiwi'],
      instructions: "Blend until smooth and creamy.",
      glass: 'vote'
  },

  {
      name: "Nutty Irishman #2",
      ingredients: [ 'Irish cream', 'Hazelnut liqueur', 'Milk', 'Espresso'],
      instructions: "Prepare a cafe-latte as normal. Add liquors acording to taste. Serve hot or over ice as a chilled coffee beverage.",
      glass: 'Irish coffee cup'
  },

  {
      name: "Baso",
      ingredients: [ 'Spiced rum', 'Goldschlager', 'Lime juice', 'Grapefruit juice', 'Club soda', 'Lime'],
      instructions: "Add ingredients into shaker with ice. Shake vigorously, strain into glass, garnish with lime.",
      glass: 'vote'
  },

  {
      name: "Green Death",
      ingredients: [ 'Vodka', 'Triple sec', 'Limeade'],
      instructions: "Serve in plastic Champagne Glasses without the plastic bottoms",
      glass: 'Champagne flute'
  },

  {
      name: "Sangria Classic",
      ingredients: [ 'Orange', 'White wine', 'Sugar', 'Brandy', 'Triple sec', 'Orange', 'Lemon', 'Ice', 'Club soda'],
      instructions: "Combine orange juice, wine, sugar, brandy and Triple sec. Add lemon and orange slices. Chill. To serve, add ice and club soda, stir gently.",
      glass: 'Pitcher'
  },

  {
      name: "Melzinho",
      ingredients: [ 'Honey', 'Cachaca'],
      instructions: "Mix the two ingredients and shake it well.You may serve it pure or with ice on a small cafe glass",
      glass: 'vote'
  },

  {
      name: "Chocolate Monkey",
      ingredients: [ 'Banana liqueur', 'Creme de Cacao', 'Chocolate ice-cream', 'Chocolate syrup', 'Chocolate milk', 'Whipped cream', 'Cherry', 'Banana'],
      instructions: "blend liqeuors with ice-cream, milk and syrup. pour into parfait glass, top with whipped cream and garnish with banana and cherry.",
      glass: 'Parfait glass'
  },

  {
      name: "Brandy Alexandra",
      ingredients: [ 'Brandy', 'Creme de Cacao', 'Vanilla ice-cream', 'Ice'],
      instructions: "Blend all the ingredients in blender, garnished with cinnamon powder.",
      glass: 'vote'
  },

  {
      name: "Shark's Bite",
      ingredients: [ 'Southern Comfort', 'Cranberry juice', 'Lime juice'],
      instructions: "Mix together the Southern Comfort and the Cranberry Juice and stir. then add the Lime Juice (be careful not to get too much lime). Serve cold! You can substitute lemon juice for the lime juice if needed.",
      glass: 'vote'
  },

  {
      name: "Comfortable Screw",
      ingredients: [ 'Southern Comfort', 'Orange juice'],
      instructions: "Pour Southern Comfort and O.J together and serve chilled",
      glass: 'vote'
  },

  {
      name: "Cucaracha #2",
      ingredients: [ 'Vodka', 'Kahlua'],
      instructions: "Use a shot-glass and fill to the above proportions. Light the drink on fire. (It helps if you move the lighter in a circular pattern around the top of the drink.) Shoot it through a straw. Be careful!",
      glass: 'Shot glass'
  },

  {
      name: "Maria Theresa",
      ingredients: [ 'Tequila', 'Cranberry juice', 'Lime juice'],
      instructions: "Combine with ice. Shake. Strain and add ice.",
      glass: 'vote'
  },

  {
      name: "Mango Mint",
      ingredients: [ 'Rum', 'Mango', 'White Creme de Menthe', 'Ice'],
      instructions: "Combine in a blender at low speed for 15 seconds. Strain, add ice.",
      glass: 'vote'
  },

  {
      name: "Belfast Bomber",
      ingredients: [ 'Irish Cream', 'Cognac', 'Ice'],
      instructions: "Build over ice drink with a straw.",
      glass: 'vote'
  },

  {
      name: "Schwartzy",
      ingredients: [ 'Peach schnapps', 'Southern Comfort', 'Orange juice', 'Pineapple juice'],
      instructions: "Serve in a tall glass",
      glass: 'Highball glass'
  },

  {
      name: "Napalm-Death",
      ingredients: [ 'Triple sec', 'Kahlua', 'Drambuie', 'Irish Cream'],
      instructions: "Take a shot glass and take equal amounts of the liquor. First the Kahlua, then slowly pour down the Drambuie, then the Bailey's and last the Triple sec. Try to get fine layers.",
      glass: 'Shot glass'
  },

  {
      name: "Bonecrusher",
      ingredients: [ 'Rum', 'Gin', 'Vodka', 'Sprite', 'Grenadine', 'Lemon', 'Champagne'],
      instructions: " ",
      glass: 'vote'
  },

  {
      name: "Baltimore Zoo",
      ingredients: [ 'Rum', 'Vodka', 'Gin', 'Sprite', 'Grenadine', 'Lemon', 'Beer'],
      instructions: "add the liquors and grenadine. Mix. Strain. Add splash of Sprite. Add lemon squeeze. Drinker adds shot of beer.",
      glass: 'vote'
  },

  {
      name: "Texas Sling",
      ingredients: [ 'Kahlua', 'Irish cream', 'Amaretto', '151 proof rum', 'Cream'],
      instructions: "Blend with Ice until smooth. Serve in a tulip glass, top with whip cream.",
      glass: 'vote'
  },

  {
      name: "Whippet",
      ingredients: [ 'Vodka', 'Orange juice', 'Raspberry cordial'],
      instructions: "Made as in a normal Vodka and Orange, with raspberry cordial added last.",
      glass: 'vote'
  },

  {
      name: "Bull Shot #2",
      ingredients: [ 'Beef bouillon', 'Vodka', 'Tabasco sauce', 'Water'],
      instructions: "Disolve bullion cube in water. Mix in vodka and Tabasco. Garnish with celery.",
      glass: 'vote'
  },

  {
      name: "T.K.O.",
      ingredients: [ 'Tequila', 'Ouzo', 'Kahlua'],
      instructions: "Just pour off the amount into a shot glass Shoot and Enjoy!",
      glass: 'Shot glass'
  },

  {
      name: "Red Wine Punch",
      ingredients: [ 'Red wine', 'Soda water', 'Powdered sugar', 'Orange'],
      instructions: "Mix the icing sugar with the red wine, and stir well. Pour in the soda. Put in some Orange/Lemon slices. Serve immediately with a lot of ice.",
      glass: 'Punch bowl'
  },

  {
      name: "Mansion Margarita",
      ingredients: [ 'Gold tequila', 'Grand Marnier', 'Triple sec', 'Sweet and sour'],
      instructions: "Mix above ingredients in a shaker. Shake and serve on the rocks.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Candy",
      ingredients: [ 'Dr. Pepper', '151 proof rum', 'Amaretto'],
      instructions: "Fill a glass with ice. Pour the 151. Pour the Dr. Pepper. Pour the Amaretto. Stir.",
      glass: 'vote'
  },

  {
      name: "Peach Death",
      ingredients: [ 'Vodka', 'Peach schnapps', 'Amaretto'],
      instructions: "Pour ingredients on the rocks and enjoy.",
      glass: 'vote'
  },

  {
      name: "Flying Tiger",
      ingredients: [ 'Galliano', 'White Creme de Menthe', 'Vodka', 'Orange juice'],
      instructions: "Fill glass with ice: add Galliano, Creme De Menthe and Vodka. Top glass off with orange juice. Enjoy!",
      glass: 'vote'
  },

  {
      name: "Sweet Dream",
      ingredients: [ 'Malibu rum', 'Orange juice', 'Strawberry juice', 'Banana syrup'],
      instructions: "Pour 2 oz. of Malibu Rum into a 10 oz. glass. Then fill the rest of the glass with orange juice, strawberry juice, and a splash banana syrup.",
      glass: 'vote'
  },

  {
      name: "Caffine attack",
      ingredients: [ 'Kahlua', 'Ice-cream'],
      instructions: "Fill blender with coffee ice-cream and the amount of kahula to your desire. Blend until drinkable, pour into a beer mug and garnish with a cinnamon stick.",
      glass: 'Beer mug'
  },

  {
      name: "Concrete",
      ingredients: [ 'Vodka', 'Irish Cream'],
      instructions: "First you drink the vodka (no swallowing), then you drink the Baileys. You mix it in the mouth and swallow.",
      glass: 'vote'
  },

  {
      name: "TGV",
      ingredients: [ 'Tequila', 'Gin', 'Vodka', 'Blue Curacao'],
      instructions: "Mix in shotglass(es). Add Curacao last, to a nice blue-green color.",
      glass: 'Shot glass'
  },

  {
      name: "Love Potion #9",
      ingredients: [ 'Kool-Aid', 'Vodka', 'White rum'],
      instructions: "Pour Kool-aid into jug, add vodka and rum. add 1 pouch of Kool-aid (cherry or orange) cover and shake give to best looking girl in the room and party",
      glass: 'Punch bowl'
  },

  {
      name: "Smurfs Up",
      ingredients: [ 'Maui', 'Vodka', 'Pineapple juice'],
      instructions: "Combine and Stir",
      glass: 'vote'
  },

  {
      name: "Hot Apple Pie",
      ingredients: [ 'Tuaca', 'Apple cider'],
      instructions: "Mix Tuaca and Cider in a large microwavable mug. Heat on high for 2 1/2 minutes. stirr again, and enjoy!!!",
      glass: 'vote'
  },

  {
      name: "Melonball",
      ingredients: [ 'Midori melon liqueur', 'Vodka', 'Pineapple juice'],
      instructions: "Fill tall glass with ice. Pour in Melon Liqueur and Vodka. Fill glass with juice. Orange juice may also be used.",
      glass: 'Highball glass'
  },

  {
      name: "A midsummernight dream",
      ingredients: [ 'Vodka', 'Kirschwasser', 'Strawberry liqueur', 'Strawberries', 'Schweppes Russchian'],
      instructions: "Mix the strawberrys in a blender Pour it together with the vodka,kirch and strawberry liquer over ice in a shaker. Shake well and pour in a highballglass. Fill up with the Russchian water",
      glass: 'vote'
  },

  {
      name: "Amaretto Stone Sour #2",
      ingredients: [ 'Amaretto', 'Orange juice', 'Sour mix'],
      instructions: "Add Amaretto, OJ, and Sour in a tub over ice.",
      glass: 'vote'
  },

  {
      name: "Midori Margarita",
      ingredients: [ 'Tequila', 'Triple sec', 'Lime juice', 'Midori melon liqueur', 'Salt'],
      instructions: "Moisten rim of cocktail glass with lime juice and dip in salt. Shake ingredients together, and pour into glass filled with crushed ice. Option: Mix above ingredients with one cup of ice in blender for a smooth, granita type drink.",
      glass: 'Cocktail glass'
  },

  {
      name: "Black Gold",
      ingredients: [ 'Jägermeister', 'Goldschlager'],
      instructions: "pour both ingredients in shot glass and enjoy!",
      glass: 'Shot glass'
  },

  {
      name: "Cherry Blow Pop",
      ingredients: [ 'Southern Comfort', 'Amaretto', 'Grenadine'],
      instructions: "Pour all three ingredients into an short shaker with ice. For better taste, let it chill for a bit.",
      glass: 'Shot glass'
  },

  {
      name: "Gorilla Fart #3",
      ingredients: [ '151 proof rum', 'Southern Comfort', 'Bourbon'],
      instructions: "Pour in glass, drink!",
      glass: 'Shot glass'
  },

  {
      name: "Jolly Green Giant",
      ingredients: [ 'Lime vodka', 'Orange juice'],
      instructions: "mix just like you would a screwdriver, except substitute lime vodka",
      glass: 'Beer mug'
  },

  {
      name: "Dirty Moma",
      ingredients: [ 'Kahlua', 'Brandy', 'Vodka', 'Half-and-half'],
      instructions: "Pour ingredients over ice and stur.",
      glass: 'Highball glass'
  },

  {
      name: "Zoksel",
      ingredients: [ 'Beer', 'Root beer', 'Lemonade', 'Coca-Cola', '7-Up', 'Creme de Cassis', 'Lemon'],
      instructions: "No specific mixinginstructions, just poor every ingredient in one glass. The lemon goes with it.",
      glass: 'Beer pilsner'
  },

  {
      name: "Smurf fart",
      ingredients: [ 'Blue Curacao', 'Blueberry schnapps', 'Cream'],
      instructions: "Shake with ice and strain into a shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Bull Shot #3",
      ingredients: [ 'Vodka', 'Beef bouillon', 'Worcestershire sauce', 'Salt', 'Black pepper'],
      instructions: "Shake with ice and strain into an old fashioned glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Nazi Cola",
      ingredients: [ 'Jägermeister', 'Rumple Minze', 'Coca-Cola'],
      instructions: "Combine Jägermeister and Rumple Minze over ice in glass. Fill to top with Cola.",
      glass: 'Cocktail glass'
  },

  {
      name: "Dirty Grasshopper",
      ingredients: [ 'White Creme de Menthe', 'Kahlua', 'Milk'],
      instructions: "Pour Creme de Menthe and Kahlua in a glass over ice. Add milk to fill. Garnish with whatever you'd like. Enjoy!",
      glass: 'vote'
  },

  {
      name: "Pan Galactic Gargle Blaster #2",
      ingredients: [ 'Champagne', 'Vodka', 'Blue Curacao', 'Sugar', 'Angostura bitters', 'Cocktail onion'],
      instructions: "Splash a puddle of Angostura bitters into a saucer and place the sugar cube in it to soak. This will take a minute ot two. Stir the Champagne (or sparkling wine), the Vodka and the Blue Curacao together in a container and put into the fridge to chill. Place the soaked sugar cube in the bottom of the Champagne glass, pour in the mixture and add drop in the cocktail onion, which should be loose, not on a cocktail stick.",
      glass: 'Champagne flute'
  },

  {
      name: "CoonDogg",
      ingredients: [ 'Crown Royal', 'Blackberry brandy', '7-Up'],
      instructions: "Mix together then strain thru ice.",
      glass: 'Shot glass'
  },

  {
      name: "Caribbean Cruise",
      ingredients: [ 'Vodka', 'Midori melon liqueur', 'Peach schnapps', 'Blue Curacao', 'Pineapple juice', '7-Up'],
      instructions: "Combine all ingredients, shake well and serve over ice. Garnish with a lime wedge and a cherry (and an umbrella if handy).",
      glass: 'Hurricane glass'
  },

  {
      name: "Vik 'n' Rum",
      ingredients: [ 'Iced tea', 'Malibu rum'],
      instructions: "Pour in the Rum first followed by the 12 oz of Nestea. Make sure you have stirred well. Serve Chilled!!",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Tipsy Island",
      ingredients: [ 'Malibu rum', 'Strawberries', 'Banana liqueur', 'Ice', 'Pineapple juice', 'Banana'],
      instructions: "Crush ice in a blender. Add frozen strawberries and banana to blender. Put on low speed and add Malibu & Banana liqueur. Pour into tall glass.",
      glass: 'Pitcher'
  },

  {
      name: "Toxic Antifreeze",
      ingredients: [ 'Vodka', 'Triple sec', 'Midori melon liqueur', 'Lemonade'],
      instructions: "Fill a 12 ounce glass with ice, add 1 ounce of vodka, 1 ounce of triple sec and 1 ounce of midori, fill with yellow lemonade and enjoy.",
      glass: 'Collins glass'
  },

  {
      name: "Purple Plague",
      ingredients: [ 'Chambord raspberry liqueur', 'White wine', '7-Up'],
      instructions: "Mix Zinfandel with Chambord and add 7-Up. Serve on ice.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Tanga",
      ingredients: [ 'Tang', 'Absolut Vodka', 'Ice'],
      instructions: "In blender add Orange Tang Mix, Absolut Vodka, and ice. Blend until smooth.",
      glass: 'Hurricane glass'
  },

  {
      name: "Doug's Modified Cement Mixer",
      ingredients: [ 'Irish Cream', 'Lemon juice'],
      instructions: "Put Bailey's into a shot glass about 2/3 full. Fill the rest of the shot with Lemon or Lime juice. Take the shot and Swish it around in your mouth. It feels really neat. Swallow it before it becomes solid.",
      glass: 'Shot glass'
  },

  {
      name: "Twisted Screw",
      ingredients: [ 'Vodka', 'Orange juice', 'Tropicana'],
      instructions: "Nothing special. Vodka, then oj, then twister. Add a splash of raspberry sparkling water if desired.",
      glass: 'vote'
  },

  {
      name: "Harley Davidson (the company way)",
      ingredients: [ 'Yukon Jack', 'Bourbon'],
      instructions: "Pour alcohol into the shot glass. Occassionally mix with ice then put into a shot glass. Serve with a lemon wedge.",
      glass: 'Shot glass'
  },

  {
      name: "Karlsson's dream",
      ingredients: [ 'Midori melon liqueur', 'Absolut Vodka', 'Milk'],
      instructions: "Just blend and drink. It's deadly.",
      glass: 'Highball glass'
  },

  {
      name: "Virulent Death",
      ingredients: [ 'Blue Curacao', 'Yukon Jack', 'Galliano'],
      instructions: "Combine in shot glass and stir.",
      glass: 'Shot glass'
  },

  {
      name: "Simpson Bronco",
      ingredients: [ 'Sambuca', 'Grenadine', 'Orange juice'],
      instructions: "Add all ingrediants in mixing tin with ice and strain",
      glass: 'Shot glass'
  },

  {
      name: "Hand-Shaken Margarita on the Rocks",
      ingredients: [ 'Gold tequila', 'Sweet and sour', 'Lime juice', 'Triple sec'],
      instructions: "use large metal container with plenty of ice and a strainer. Shake well, pour through strainer into margarita glass. Serve with salt and fresh lime.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "White Lightening",
      ingredients: [ 'Lemon vodka', 'Lemonade'],
      instructions: "Just pour it all into a blender. Vary the amount of Vodka according to how buzzed you want to be. Remember, it must have at least 2 oz. of Vodka in order to be called White Lightening.",
      glass: 'Mason jar'
  },

  {
      name: "Gorilla's Tit",
      ingredients: [ 'Kahlua', 'Yukon Jack', '151 proof rum'],
      instructions: "After mixing each ingredient in order shown, light the 151 with a match. Blow out the flames, and sip drink quickly with a straw.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Rontini",
      ingredients: [ 'Mountain Dew', 'Vodka'],
      instructions: "Pour together serve over ice",
      glass: 'vote'
  },

  {
      name: "Monkey's Lunch",
      ingredients: [ 'Banana liqueur', 'Kahlua', 'Milk'],
      instructions: "Pour alcohol over ice in a cocktail glass and add milk! (For a bit of a twist you could add a splash of Bailey's Irish Cream. This drink is also tasty as a 'special' coffee. Just sugar your rim, add liqour, pour coffee and add some whip.)",
      glass: 'Cocktail glass'
  },

  {
      name: "Fuzzy Asshole",
      ingredients: [ 'Coffee', 'Peach schnapps'],
      instructions: "fill coffe mug half full of coffee. Fill the other half full of Peach Schnapps. Stir and drink while hot.",
      glass: 'Coffee mug'
  },

  {
      name: "Pit Bull on Crack #2",
      ingredients: [ 'Jägermeister', 'Rumple Minze', 'Gold tequila'],
      instructions: "Mix all three ingredients in mixing tin with ice. Serve in a shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Dick-in-the-Dirt",
      ingredients: [ 'Peach schnapps', '151 proof rum', 'Southern Comfort', 'Yukon Jack', 'Pineapple juice', 'Cranberry juice', 'Grand Marnier'],
      instructions: "Mix all ingredients in a tall glass on the rocks.",
      glass: 'vote'
  },

  {
      name: "Rooster Piss",
      ingredients: [ 'Bourbon', 'Cinnamon schnapps'],
      instructions: "Pour both ingredients into shot glass and enjoy!",
      glass: 'Shot glass'
  },

  {
      name: "Flaming Dr.",
      ingredients: [ 'Firewater', 'Dr. Pepper'],
      instructions: "Pour both into a pint glass, mix and drink.",
      glass: 'Pint glass'
  },

  {
      name: "Donivan Flowers' Rocks",
      ingredients: [ 'Vodka', 'Absolut Vodka', 'Vodka', 'Vodka', 'Irish cream'],
      instructions: "Put each of the ingredients into a punch bowl. Mix, and with a straw, SHOOT.",
      glass: 'Punch bowl'
  },

  {
      name: "Pineappleless Pineapple Juice",
      ingredients: [ 'Southern Comfort', '151 proof rum', '7-Up', 'Orange juice', 'Coca-Cola'],
      instructions: "Pour Southern Comfort to the first line of a 16 oz. Solo Brand plastic cup. Add splash of Bacardi 151 Rum. Add 7-Up, Orange Juice, and Coca-Cola. Swirl it around in the cup a little bit and enjoy.",
      glass: 'vote'
  },

  {
      name: "Quick-sand",
      ingredients: [ 'Black Sambuca', 'Orange juice'],
      instructions: "Simply add the orange juice, quite a quick pour in order to mix the sambucca with the orange juice. The juice MUST have fruit pulp!",
      glass: 'Highball glass'
  },

  {
      name: "Navy Grog",
      ingredients: [ 'Light rum', 'Gold rum', 'Dark rum', 'Grand Marnier', 'Grapefruit juice', 'Orange juice', 'Pineapple juice'],
      instructions: "Fill collins glass with ice. Pour alcohols. Pour juices. Shake Optional. Orange and Pineapple garnish Optional",
      glass: 'Collins glass'
  },

  {
      name: "Smurf",
      ingredients: [ 'Vodka', 'Orange juice', 'Sprite', 'Grenadine', 'Margarita mix', 'Ice'],
      instructions: "Take the vodka in first, then orange juice and sprite. Then you take some dashes of grenadine and stirr it around for 20 sec. On the top of it you have a little dash of Strawb.marg.mix. Add ice cubes.",
      glass: 'Highball glass'
  },

  {
      name: "Root Beer",
      ingredients: [ 'Vodka', 'Pepsi Cola', 'Galliano'],
      instructions: "Fill a large glass with ice. Add vodka and fill glass with Pepsi (Do NOT substitute Coke). Swirl a splash of Galliano on top.",
      glass: 'vote'
  },

  {
      name: "Jay In Your Tummy",
      ingredients: [ 'Malibu rum', 'Sambuca', 'Blue Curacao', 'Midori melon liqueur', 'Pineapple juice'],
      instructions: "Shake all the above ingredients in a tin with ice.",
      glass: 'Shot glass'
  },

  {
      name: "Crack Pipe",
      ingredients: [ '151 proof rum', 'Rumple Minze', 'Bourbon'],
      instructions: "Shake with ice, strain into glass",
      glass: 'Highball glass'
  },

  {
      name: "Phillips Screwdriver",
      ingredients: [ 'Vodka', 'Sunny delight'],
      instructions: "Place 2-3 ice cubes in your choice of glass, pour 2oz vodka followed by 6oz Sunny Delight (more or less to taste). Stir and serve.",
      glass: 'vote'
  },

  {
      name: "Extended Jail Sentence",
      ingredients: [ 'Bourbon', 'Southern Comfort', 'Gold tequila', 'Pineapple juice', 'Ice'],
      instructions: "Flash blend with ice cubes.",
      glass: 'Highball glass'
  },

  {
      name: "Ostrich Shit",
      ingredients: [ 'Peppermint schnapps', 'Coffee', 'Sugar'],
      instructions: "Pour one oz. of Peppermint Schnapps into a cup of coffee. Then ad two tps. of sugar and slowly stir.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "The Juice",
      ingredients: [ 'Everclear', 'Lemonade', 'Water'],
      instructions: "Pour into a five gallon pitcher, the canister of lemonade, water, everclear and mix. serve on ice.",
      glass: 'Punch bowl'
  },

  {
      name: "Skane-i-fier",
      ingredients: [ 'Ice', 'Whiskey', 'Malibu rum', 'Dr. Pepper'],
      instructions: "Fill glass with ice. Add whiskey, Malibu and Dr. Pepper Stir.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Ponderosa",
      ingredients: [ 'Everclear', 'Orange soda'],
      instructions: "Throw it all into a glass, shoot as fast as possible. Do this repeatadly until very inebriated!",
      glass: 'Shot glass'
  },

  {
      name: "Snakebite and Black",
      ingredients: [ 'Lager', 'Cider', 'Blackcurrant squash'],
      instructions: "Put blackcurrant squash in first up to about 1cm in glass. Then add the larger and cider one after another.",
      glass: 'Pint glass'
  },

  {
      name: "Fuzzy Peachclari",
      ingredients: [ 'Peach schnapps', 'Vodka', 'Orange juice'],
      instructions: "Pour vodka, then orange juice, then peach schnapps. Drink.",
      glass: 'Mason jar'
  },

  {
      name: "Öxnäs Temptation",
      ingredients: [ 'Vodka', 'Banana liqueur', 'Sprite', 'Orange juice', 'Grenadine'],
      instructions: "Start by adding the vodka and the banan liqueur. Fill the glass with sprite or similar soft drink. Pour some conc. orange juice. Stir. Add some grenadine for that nice Tequila Sunrise effect, or don't if you think it will be to sweet. Add a slice of orange for decoration.",
      glass: 'Cocktail glass'
  },

  {
      name: "Neon Iguana",
      ingredients: [ 'Spiced rum', 'Malibu rum', 'Blue Curacao', 'Lime juice', 'Orange juice'],
      instructions: "Pour ingredients together and stir",
      glass: 'vote'
  },

  {
      name: "Zimadori Zinger",
      ingredients: [ 'Midori melon liqueur', 'Zima'],
      instructions: "Pour Zima in a collins glass over ice and then pour the shot of Midori. Don't stir. Garnish with a cherry.",
      glass: 'Collins glass'
  },

  {
      name: "Fu** me like a beast",
      ingredients: [ 'Tequila', 'Midori melon liqueur', 'Chambord raspberry liqueur', 'Pineapple juice', 'Orange juice', 'Grenadine', '151 proof rum'],
      instructions: "Combine all ingredients except 151, shake well with ice, pour into highball glass and top it off with Bacardi 151.",
      glass: 'Highball glass'
  },

  {
      name: "Golden shower",
      ingredients: [ 'Banana liqueur', 'Rum', 'Sprite'],
      instructions: "Stire Rum and Banana liqueur with ice. Add Sprite",
      glass: 'vote'
  },

  {
      name: "Wild Peppertini",
      ingredients: [ 'Bourbon', 'Peppermint schnapps'],
      instructions: "Combine, chill and strain into either a shot glass or ups glass.",
      glass: 'Shot glass'
  },

  {
      name: "Blue Smurf Piss",
      ingredients: [ 'Jägermeister', '151 proof rum', 'Rumple Minze', 'Goldschlager', 'Blue Curacao'],
      instructions: "Pour as listed.",
      glass: 'Shot glass'
  },

  {
      name: "Fuzzy Russian",
      ingredients: [ 'Vodka', 'Peach schnapps'],
      instructions: "Mix both ingredients in a shot glass. Tilt head back. Swallow.",
      glass: 'Shot glass'
  },

  {
      name: "Moilanen",
      ingredients: [ 'Lemon', 'Ice', 'Absolut Citron', 'Lemon', 'Schweppes Lemon'],
      instructions: "First slice half a lemon in small slices. Then some ice, I prefer alot of ice in this drink. Pour the vodka in, press the rest of the lemon in the glass. Mix around and then fill up with Schweppes lemon. Mix again and you're finished. If you don't got the Schweppes lemon you can always use Fanta lemon instead, but it will be a lot sweeter.",
      glass: 'Beer mug'
  },

  {
      name: "Herbal flame",
      ingredients: [ 'Hot Damn', 'Tea'],
      instructions: "Pour Hot Damn 100 in bottom of a jar or regular glass. Fill the rest of the glass with sweet tea. Stir with spoon, straw, or better yet a cinnamon stick and leave it in.",
      glass: 'Mason jar'
  },

  {
      name: "Lemonade Bomb",
      ingredients: [ 'Lemonade', 'Vodka', 'Beer'],
      instructions: "Follow the instructions on the can of Lemonade concentrate, but substitute the Vodka for water. Mix well and add beer.",
      glass: 'Pitcher'
  },

  {
      name: "Slemmig Slyna",
      ingredients: [ 'Absolut Vodka', 'Midori melon liqueur', 'Kiwi liqueur', 'Sour mix'],
      instructions: "Mix vodka and midori and kiwi with ice. Add sourmix. Shake. Fill with soda. Decorate glass with pineapple.",
      glass: 'Highball glass'
  },

  {
      name: "Green Apple #1",
      ingredients: [ 'Southern Comfort', 'Midori melon liqueur', 'Sour mix'],
      instructions: "Mix all three together.",
      glass: 'Shot glass'
  },

  {
      name: "Summer Sunset",
      ingredients: [ 'White rum', 'Fruit punch', 'Ginger ale', 'Ice'],
      instructions: "Put ice cubes in the Collins glass. Then poor the white rum. Fill with the fruit punch and the ginger ale.",
      glass: 'Collins glass'
  },

  {
      name: "Missle Pop",
      ingredients: [ 'Ice', 'Vodka', 'Pineapple juice', 'Hawaiian Punch', 'Orange juice'],
      instructions: "Fill glass with ice and add vodka, pineapple juice and fruit punch. Fill with orange juice.",
      glass: 'vote'
  },

  {
      name: "Jamaican Coffee",
      ingredients: [ 'Rum', 'Coffee', 'Water', 'Whipped cream'],
      instructions: "Stir the rum, coffee and water together. Top with the whipped cream. Sprinkle with a pinch of well ground coffee and drink with a straw.",
      glass: 'Champagne flute'
  },

  {
      name: "Hot Afternoon",
      ingredients: [ 'Peach schnapps', 'Kahlua'],
      instructions: "Throw the shit in the shot glass and drink it down!",
      glass: 'Shot glass'
  },

  {
      name: "Wild Wild West",
      ingredients: [ 'Bourbon', 'Peach schnapps', 'Cranberry juice'],
      instructions: "Take ink pen and stir well!",
      glass: 'Highball glass'
  },

  {
      name: "Strawberry Quick",
      ingredients: [ 'Strawberry schnapps', 'Irish cream', 'Grenadine', 'Milk'],
      instructions: "Mix the contents so that the color of the drink is a pink color. Serve and enjoy",
      glass: 'Highball glass'
  },

  {
      name: "Ball Hooter",
      ingredients: [ 'Tequila', 'Peppermint schnapps', 'Beer'],
      instructions: "Fill a shaker with ice. Pour in equal parts liquor. Shake or swirl. Strain into shot glass(es). Serve with a short, cold glass of beer.",
      glass: 'Shot glass'
  },

  {
      name: "Rambo Shot",
      ingredients: [ 'Jägermeister', 'Rumple Minze'],
      instructions: "keep both liquors cold and serve ina chilled shot glass if possible",
      glass: 'Shot glass'
  },

  {
      name: "Killer Koolade",
      ingredients: [ 'Vodka', 'Midori melon liqueur', 'Amaretto', 'Cranberry juice'],
      instructions: "Add Vodka, Melon Liqueur and Cranberry Juice in a shaker, Fill glass with three ice cubes,strain mix into highball/zombie glass,add dash of Amaretto (Optional)",
      glass: 'Highball glass'
  },

  {
      name: "Simpson Solution",
      ingredients: [ 'Vodka', 'Peach schnapps', 'Orange juice'],
      instructions: "Get a sports container like the All Sport or Gatorade ones at sports events and combine three ingredients together. Put in about 4-5 pounds of cocktail ice and watch it disappear faster than water!",
      glass: 'Beer mug'
  },

  {
      name: "Mojito #3",
      ingredients: [ 'Mint', 'Lemon juice', 'Dark rum', 'Club soda', 'Angostura bitters'],
      instructions: "Put mint with lemon juice in a glas, mash the mint with a spoon, ice, rum & fill up with club soda. Top it with Angostura.",
      glass: 'Collins glass'
  },

  {
      name: "Bumble Bee #2",
      ingredients: [ 'Jägermeister', 'Barenjager'],
      instructions: "Layer Barenjaeger on top of the Jägermeister. Both liquors should be chilled.",
      glass: 'Cordial glass'
  },

  {
      name: "Flaming Soda",
      ingredients: [ 'Vodka', 'Midori melon liqueur', 'Triple sec', 'Soda water', 'Grenadine'],
      instructions: "Serve over rocks if desired.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "White Mess",
      ingredients: [ 'White rum', 'Creme de Cassis', 'Root beer schnapps', 'Malibu rum', 'Heavy cream'],
      instructions: "Shake and strain into a double shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Apricot punch",
      ingredients: [ 'Apricot brandy', 'Champagne', 'Vodka', '7-Up', 'Orange juice'],
      instructions: "Pour all ingrediants into a large punch bowl. Add ice and 4 oranges that are peeled and divided.",
      glass: 'Punch bowl'
  },

  {
      name: "Apricot Smoothie",
      ingredients: [ 'Apricot brandy', 'Vodka', 'Champagne', 'Orange juice'],
      instructions: "Mix all ingrediants over ice. Seven-Up may be used instead of champagne to cut alcohol content if so desired.",
      glass: 'Highball glass'
  },

  {
      name: "B-52 #4",
      ingredients: [ 'Irish Cream', 'Tia maria', 'Absinthe'],
      instructions: "First add the Bailey's irish cream, then the Tia Maria, and then carefully the Absinthe: Put the shot on fire and drink it with a straw, or you have another choice: When the shot is on fire you slap it to extinguish the fire and then you drink it.",
      glass: 'Shot glass'
  },

  {
      name: "Unknown Warrior",
      ingredients: [ 'Sugar', 'Triple sec', 'Vodka'],
      instructions: "Blend vodka and Triple sec in a shotglass. Set the drink on fire with a match. Put the piece of sugar on a fork and hold it over the flame from the drink and let it melt down into the glass. When the sugar has melted,use the palm of your hand to put out the flame.",
      glass: 'Shot glass'
  },

  {
      name: "Rok-Shasa",
      ingredients: [ 'Grenadine', 'Peachtree schnapps', 'Pineapple juice'],
      instructions: "Just throw it together.",
      glass: 'Shot glass'
  },

  {
      name: "Copperhead",
      ingredients: [ 'Vodka', 'Ginger ale'],
      instructions: "Combine in an ice cube-filled Collins glass. Garnish with a lime wedge",
      glass: 'Collins glass'
  },

  {
      name: "Blue Shark",
      ingredients: [ 'Vodka', 'Tequila', 'Blue Curacao'],
      instructions: "Combine all ingredients in a cocktail shaker with cracked ice. Shake well. Strain into chilled old-fashioned glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Double Jack",
      ingredients: [ 'Bourbon', 'Yukon Jack'],
      instructions: "Combine the two jacks in glass.",
      glass: 'Shot glass'
  },

  {
      name: "Skydiver",
      ingredients: [ 'Vodka', 'Orange juice'],
      instructions: "Fill glass with ice, add SKYY vodka, add orange juice, prefeable fresh orange juice. Garnish with orange slice.",
      glass: 'Highball glass'
  },

  {
      name: "Black Irish",
      ingredients: [ 'Irish whiskey', 'Kahlua', 'Maraschino cherry', 'Ice'],
      instructions: "Stir ingredients and let sit for one minute.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Weakness",
      ingredients: [ 'Goldschlager', 'Rumple Minze', '151 proof rum', 'Jägermeister'],
      instructions: "Pour all four shots into a low ball glass, chill if you care.",
      glass: 'Cocktail glass'
  },

  {
      name: "Screwdriver á la Carla",
      ingredients: [ 'Vodka', 'Orange juice', 'Sugar', 'Egg yolk'],
      instructions: "Mix the orange juice with sugar and the yolk of an egg. Then pour in the vodka with some icecubes and stir. Serve well chilled.",
      glass: 'vote'
  },

  {
      name: "Speedy Gonzales",
      ingredients: [ 'Amaretto', 'Irish cream'],
      instructions: "Pour Bailey's and Amaretto into a shot glass, swish, and throw it back.",
      glass: 'Shot glass'
  },

  {
      name: "Zombie #2",
      ingredients: [ 'Lemon juice', 'Grenadine', 'Orange juice', 'Cherry Heering', 'White rum', 'Dark rum', '151 proof rum'],
      instructions: "Shake over ice in a shaker, and strain into a large highball glass over crushed ice.",
      glass: 'Highball glass'
  },

  {
      name: "Zombie #3",
      ingredients: [ 'Gold rum', 'Lime juice', 'Rum', 'White rum', 'Pineapple juice', 'Papaya juice', 'Sugar syrup', '151 proof rum', 'Pineapple', 'Powdered sugar'],
      instructions: "Shake all ingedients over ice, except the high-proof rum, the pineapple stick and the sugar. Strain and add ice. Garnish with pineapple and a cherry. Float the high-proof rum at top and sprinkle a litter sugar over it.",
      glass: 'Highball glass'
  },

  {
      name: "Purple Cow",
      ingredients: [ 'Vodka', 'Grape juice'],
      instructions: "Shake ingredients with ice, strain into glass",
      glass: 'Highball glass'
  },

  {
      name: "Field Of Hearts",
      ingredients: [ 'Midori melon liqueur', 'Strawberry liqueur', 'Frangelico', 'Galliano', 'Cream'],
      instructions: "Simk Midori. Layer liqueur. Shake and strain Frangelico. On top of the creamy layer you add a couple of drops of red or pink food dye, run a toothpick through the center of each drop to create a heart shape :) Garnish with an open strawberry",
      glass: 'Cocktail glass'
  },

  {
      name: "B-52 #5",
      ingredients: [ 'Tia maria', 'Irish Cream', 'Grand Marnier'],
      instructions: "Fill 1/3th of the glass with Tia Maria. Then pour smootly on a spoon the baileys so it flows on the Tai Maria. Then fill the glass up with Grand Marnier also with a spoon. Afterwards you see 3 layers, the middle layer looks like a after boming scene.",
      glass: 'Shot glass'
  },

  {
      name: "Suntan Lotion",
      ingredients: [ 'Absolut Citron', 'Malibu rum', 'Peach schnapps', 'Pineapple juice'],
      instructions: "Mix equal parts over ice, shake, strain, and serve...SPF 30!",
      glass: 'Shot glass'
  },

  {
      name: "Naked Yellow Bird",
      ingredients: [ 'Vodka', 'Raspberry liqueur', 'Blue Curacao', 'Sour mix'],
      instructions: "Mix equal parts over ice then shake, strain, and serve.",
      glass: 'Shot glass'
  },

  {
      name: "Apple Cobbler",
      ingredients: [ 'Apple schnapps', 'Goldschlager', 'Irish Cream'],
      instructions: "Combine ingredients in shot glass. Shoot!",
      glass: 'Shot glass'
  },

  {
      name: "Three Stages of Friendship",
      ingredients: [ 'Bourbon', 'Tequila', '151 proof rum'],
      instructions: "Mix all three in a shot glass and shoot the damn thing.",
      glass: 'Shot glass'
  },

  {
      name: "Wet Back",
      ingredients: [ 'Kahlua', 'Tequila'],
      instructions: "Mix and shoot.",
      glass: 'Shot glass'
  },

  {
      name: "Devil's Piss",
      ingredients: [ 'Everclear', 'Lemonade'],
      instructions: "Using a large glass of water, add lemonade concentrate to taste (Best if you make it a little stronger than usual). Add the 1.5 shots of Everclear and be sure to mix well!",
      glass: 'vote'
  },

  {
      name: "Tossed Salad",
      ingredients: [ 'Kahlua', 'Jägermeister', 'Chocolate syrup'],
      instructions: "Dip rim of shot glass in chocolate syrup. Add Kahlua and Jägermeister. Place arms behind back. Drink shot using mouth only (a la 'blowjob').",
      glass: 'Shot glass'
  },

  {
      name: "Black Swedish Virgin",
      ingredients: [ 'Blackberry schnapps', 'Absolut Vodka', 'Cranberry juice', '7-Up'],
      instructions: "Mix on the rocks.",
      glass: 'Collins glass'
  },

  {
      name: "Hot Lunch",
      ingredients: [ '151 proof rum', 'Tabasco sauce'],
      instructions: "Mix all ingredients in glass. Garnish with small pickle. Light contents of glass on fire. Tilt head back and have your buddy pour it into your mouth (very carefully). Have four more hot lunches and go to bed. You have no business going anywhere after the abuse you just gave yourself.",
      glass: 'Cocktail glass'
  },

  {
      name: "Green Apple #2",
      ingredients: [ 'Apple schnapps', 'Midori melon liqueur', 'Vodka', 'Sour mix', '7-Up'],
      instructions: "all ingredients but 7-up in shaker. splash 7-up in your glass, shake others till nice and cold and add to glass. Voila!",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Hairy Buffalo",
      ingredients: [ 'Gin', '151 proof rum', 'Gold tequila', 'Vodka', 'Tennessee whiskey', 'Fruit', 'Fruit punch', 'Ice'],
      instructions: "Mix all ingredients into a large cooler, punch bowl or garbage can (a new one). Cut larger fruit into pieces and add.",
      glass: 'Punch bowl'
  },

  {
      name: "Scooby Snack #3",
      ingredients: [ 'Malibu rum', 'Midori melon liqueur', 'Milk'],
      instructions: "Pour all into shaker with ice. Shake until cold. Strain into highball glass.",
      glass: 'Highball glass'
  },

  {
      name: "Purple Hooter #2",
      ingredients: [ 'Chambord raspberry liqueur', 'Vodka', 'Triple sec'],
      instructions: "Just shoot the damn thing!",
      glass: 'Shot glass'
  },

  {
      name: "Smurf #2",
      ingredients: [ 'Maui', 'Sprite', 'Ice'],
      instructions: "Put ice in cup and fill it half full with sprite. Add maui filling the glass. Stir.",
      glass: 'Parfait glass'
  },

  {
      name: "Sydney Sunrise Sunshine Cocktail",
      ingredients: [ 'Honey', 'Lime juice', 'Egg', 'Orange juice'],
      instructions: "Mix the ingredients with a mixer.",
      glass: 'Highball glass'
  },

  {
      name: "Moment Brutale",
      ingredients: [ 'Sugar', 'Water', 'Egg', 'Lime', 'Gin'],
      instructions: "Mix everything except the liquor with ice, strain it to remove the shell and skin, blend with liquor.",
      glass: 'Cocktail glass'
  },

  {
      name: "Caipiroska",
      ingredients: [ 'Vodka', 'Lime', 'Sugar', 'Ice'],
      instructions: "Crush sugar into the lime wedges with a spoon. Place the lime wedges in the bottom of an 8 oz. glass. Cover with crushed ice. Pour vodka to fill the glass. It's a great summer drink.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Love-me Tender",
      ingredients: [ 'Gin', 'Sherry', 'Aperol', 'Peach Vodka', 'Apricot brandy'],
      instructions: "All the ingredients in a mixing glass. Serve in a chilled cocktail glass. Add orange twist.",
      glass: 'Cocktail glass'
  },

  {
      name: "Malibu Jello",
      ingredients: [ 'Jello', 'Water', 'Malibu rum'],
      instructions: "Boil 1 cup water and add to peach passion fruit jello until dissolved about 2 minutes. Add 1 cup Malibu rum and pour into shot glasses or 1 ounce cup found in party stores. Chill for four hours. Enjoy!!!",
      glass: 'Shot glass'
  },

  {
      name: "Strawberry Shortcake",
      ingredients: [ 'Amaretto', 'Ice-cream', 'Daiquiri mix', 'Ice', 'Whipped cream'],
      instructions: "Blend all but the whipped cream until frosty. Pour in beer mug. Top with whipped cream. Enjoy.",
      glass: 'Beer mug'
  },

  {
      name: "El Bastardo",
      ingredients: [ 'Tequila', 'Everclear', 'Bourbon', 'Tabasco sauce'],
      instructions: "Mix all at same time into blender. After blending for approx. 30 seconds, fill beer mug 3/4 way and start a chugin'. Oh, it'll burn like hell for about 2 minutes, but once that sauce burns through your stomach lining and virtually injects the alcohol into your blood stream, put the unfinished El Bastardo down because you're gonna hit the floor.",
      glass: 'Beer mug'
  },

  {
      name: "Standard Cream",
      ingredients: [ 'Creme de Cacao', 'Godiva liqueur', 'Creme de Banane', 'Half-and-half'],
      instructions: "stir & strain in a cocktail glass",
      glass: 'Cocktail glass'
  },

  {
      name: "Zambeer",
      ingredients: [ 'Sambuca', 'Root beer', 'Ice'],
      instructions: "Mix sambuca with rootbeer and stir. Add ice",
      glass: 'vote'
  },

  {
      name: "Root Beer Float #2",
      ingredients: [ 'Ice', 'Root beer schnapps', 'Half-and-half', 'Coca-Cola'],
      instructions: "Fill glass 3/4 with ice. Add the Root Beer Schnapps. Add the cream. Slowly fill with coke.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Nuclear Waste",
      ingredients: [ 'Vodka', 'Irish Cream', 'Blue Curacao', 'Coca-Cola'],
      instructions: "blend vodka, blue curacao and bailey's in a shaker. pour into glass and top up with coke.",
      glass: 'Cocktail glass'
  },

  {
      name: "Flip Juice",
      ingredients: [ 'Gin', 'Mountain Dew', 'Orange juice', 'Lemon juice'],
      instructions: "Mix all ingredients together in a gallon pitcher and refrigerate. Serve chilled.",
      glass: 'Pitcher'
  },

  {
      name: "Americano",
      ingredients: [ 'Campari', 'Sweet Vermouth', 'Lemon peel', 'Orange peel'],
      instructions: "Pour over ice into an collins glass. Garnish with lemon and orange twists. You may fill with some club soda.",
      glass: 'Collins glass'
  },

  {
      name: "Waldorf-Astoria Eggnog",
      ingredients: [ 'Egg yolk', 'Sugar syrup', 'Port', 'Bourbon', 'Milk', 'Cream', 'Nutmeg'],
      instructions: "Shake well over ice cubes in a shaker and strain into a large highball glass over ice cubes. Sprinkle with nutmeg.",
      glass: 'Highball glass'
  },

  {
      name: "Scope #2",
      ingredients: [ 'Midori melon liqueur', 'Rumple Minze'],
      instructions: "Place ice in a tin then pour 1/2 oz. of Midori melon liqueur and 1/2 oz. of Rumple Minze. Shake and then strain into a rocks glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Lemon Drop #6",
      ingredients: [ 'Bacardi Limon', 'Lemonade'],
      instructions: "Fill a mug half way with Bacardi, then top off with lemon Kool-Aid or lemonade.",
      glass: 'Beer mug'
  },

  {
      name: "Black Forest Shake",
      ingredients: [ 'Ice', 'Chocolate syrup', 'Cherry brandy', 'Vodka', 'Milk'],
      instructions: "In a blender put ice cubes, chocolate syrup, cherry brandy, vodka, and milk. Blend very well.",
      glass: 'vote'
  },

  {
      name: "Yaps",
      ingredients: [ 'Yukon Jack', 'Apple schnapps'],
      instructions: "Mix 1part apple schnapps with 1 part Yukon Jack and serve in shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Juicy Tiger",
      ingredients: [ 'Vodka', 'Sour mix', 'Coca-Cola'],
      instructions: "Mix all ingredients and blend well. Add more Coca-cola if needed. Serve with a slice of lemon put a straw in and drink.",
      glass: 'Highball glass'
  },

  {
      name: "Cherry coke from hell",
      ingredients: [ 'Everclear', 'Cherry liqueur', 'Pepsi Cola', 'Ice'],
      instructions: "Pour alcohol into glass then add Coke. Stir if necessary.",
      glass: 'vote'
  },

  {
      name: "Malibu Smash",
      ingredients: [ 'Vodka', 'Peach schnapps', 'Malibu rum', 'Orange juice', 'Grenadine'],
      instructions: "Mix with ice and serve!",
      glass: 'Collins glass'
  },

  {
      name: "Headcrack",
      ingredients: [ 'Cognac', 'Kahlua', 'Milk'],
      instructions: "Stir well with ice and a spoon.",
      glass: 'Hurricane glass'
  },

  {
      name: "Horny Girlscout",
      ingredients: [ 'Coffee liqueur', 'Peppermint schnapps'],
      instructions: "Add the coffee liqueur first since it is heavier than the schnapps. Slowly add the peppermint schnapps.",
      glass: 'Shot glass'
  },

  {
      name: "Bluesberry Cooler",
      ingredients: [ 'Club soda', 'Blueberry schnapps', 'Orange juice'],
      instructions: "Fill cocktail chimney glass with crushed ice, fill 3/4 full with club soda, add a shot of blueberry schnapps and a splash of o.j. Can garnish with an orange peel or a blueberry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Hot Spot",
      ingredients: [ 'Vodka', 'Tequila', 'Tabasco sauce'],
      instructions: "Mix vodka and tequila. Pour in Tabasco sauce until it's realy red.",
      glass: 'Shot glass'
  },

  {
      name: "Mule",
      ingredients: [ 'Vodka', 'Ginger beer', 'Lime juice', 'Ice'],
      instructions: "Pour 1 1/4 ounce of Smirnoff Vodka in glass, fill with ginger beer, add ice and squeeze lime.",
      glass: 'vote'
  },

  {
      name: "Selena Jo",
      ingredients: [ 'Spiced rum', 'Amaretto', 'Ice', 'Coca-Cola'],
      instructions: "Put the crushed ice in glass first then add the Captain Morgan then add the Amaretto then top off with Coke.",
      glass: 'Cordial glass'
  },

  {
      name: "Flaming Nazi",
      ingredients: [ 'Jägermeister', 'Hot Damn'],
      instructions: "Make sure the Hot Damn and the Jägermeister are both cold before serving.",
      glass: 'Shot glass'
  },

  {
      name: "Fruit Hippy",
      ingredients: [ 'Peach schnapps', 'Triple sec', 'Cranberry juice', 'Raspberry juice'],
      instructions: "Pour the liquor. Fill with juice to taste.",
      glass: 'Mason jar'
  },

  {
      name: "Schnapp It Up",
      ingredients: [ 'Peach schnapps', 'Wildberry schnapps', 'Absolut Vodka', 'Cranberry juice'],
      instructions: "stir all ingredients together - pour over ice - enjoy!!",
      glass: 'vote'
  },

  {
      name: "The Frad",
      ingredients: [ 'Coconut rum', 'Sprite', 'Pineapple juice', 'Peach schnapps', 'Ice'],
      instructions: "Add ice, put in Sprite, then add Pineapple Juice, followed by the Coconut Rum and Peach Schnaps. Serve very cold.",
      glass: 'Hurricane glass'
  },

  {
      name: "Bahama Mama #2",
      ingredients: [ 'Lemon juice', 'Orange juice', 'Pineapple juice', 'Rum', 'Coconut rum', 'Cherry Heering', 'Grenadine'],
      instructions: "Shake with cracked ice. Serve in a 12 oz. glass. Garnish with a cherry and 1/2 slice orange in a tooth pick.",
      glass: 'Hurricane glass'
  },

  {
      name: "Jaq'ed Up Screwdriver",
      ingredients: [ 'Vodka', 'Grenadine', 'Orange juice', 'Sprite'],
      instructions: "Pour into a large crushed iced filled cup and pour back into the collins glass. Use a plastic stirring utensil if so desired",
      glass: 'Collins glass'
  },

  {
      name: "Cherry Cola",
      ingredients: [ 'Spiced rum', 'Amaretto', 'Coca-Cola'],
      instructions: "Combine and stir",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Electric Tea",
      ingredients: [ 'Vodka', 'Gin', 'Light rum', 'Tequila', 'Blue Curacao', 'Sour mix', 'Sprite', 'Ice'],
      instructions: "Combine in a pint glass, shake and serve with a lemon wedge",
      glass: 'Pint glass'
  },

  {
      name: "Mortini",
      ingredients: [ 'Amaretto', 'Grenadine', 'Vodka'],
      instructions: "Chill cocktail glass. Add grenadine and amaretto to the chilled glass. Finally, add chilled vodka.",
      glass: 'Cocktail glass'
  },

  {
      name: "Nanc's Iced-Coffee",
      ingredients: [ 'Coffee', 'Irish Cream', 'Kahlua', 'Frangelico'],
      instructions: "Pour coffee over crushed ice,or small ice cubes,in blender. Add all other ingredients and blend on high speed until desired consistency.",
      glass: 'Parfait glass'
  },

  {
      name: "Sunset Island",
      ingredients: [ 'Pineapple juice', 'Grape juice', 'Lemon-lime soda', 'Sugar syrup', 'Ice'],
      instructions: "Combine in a shaker over a few ice cubes. Shake thoroughly. Pour into a collins glass and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Jedi Mind Trick",
      ingredients: [ 'Dark rum', 'Amaretto', 'Kahlua', 'Irish Cream', 'Ice-cream', 'Cream', 'Cherries'],
      instructions: "Combine all contents in blender except cherries, blend until smooth. Pour in mug, garnish with cherries.",
      glass: 'Beer mug'
  },

  {
      name: "GG",
      ingredients: [ 'Galliano', 'Ginger ale', 'Ice'],
      instructions: "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
      glass: 'vote'
  },

  {
      name: "Fuka",
      ingredients: [ 'Spiced rum', 'Malibu rum', 'Orange juice', 'Pineapple juice', 'Grenadine'],
      instructions: "Pour all contents in glass over cubed ice and mix together.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Jamaican Zombie",
      ingredients: [ 'Light rum', 'Dark rum', 'Apricot brandy', 'Lime juice', 'Pineapple juice', 'Orange juice', 'Passion fruit juice', 'Powdered sugar'],
      instructions: "Mix all ingredients in a shaker filled with ice. Strain into a frosted zombie glass filled with fresh ice. Garnish with an orange slice and cherry.",
      glass: 'Collins glass'
  },

  {
      name: "Shoot",
      ingredients: [ 'Sherry', 'Scotch', 'Lemon juice', 'Orange juice', 'Powdered sugar'],
      instructions: "Mix everything and shake with ice and strain into a highball glass. Serve.",
      glass: 'Highball glass'
  },

  {
      name: "Dr. Pepper #5",
      ingredients: [ 'Amaretto', '151 proof rum', 'Beer'],
      instructions: "Mix the Amaretto & Bacardi in one shot glass. Fill the beer mug 1/2 way with beer. Light the Bacardi & Amaretto with a match or lighter. Drop the flaming shot glass into the beer. It immediately begins to foam up. At this point gulp it down (be careful not to swallow the shot glass!).",
      glass: 'Beer mug'
  },

  {
      name: "Russian Sarin",
      ingredients: [ 'Absolut Kurant', 'Midori melon liqueur', 'Schweppes Russchian'],
      instructions: "Pour the vodka and the liqueur in a (long drink) glass with one or two icecubes in it. Fill it up with Schweppes Russchian.",
      glass: 'Highball glass'
  },

  {
      name: "Orange Warthog",
      ingredients: [ 'Ice', 'Kool-Aid', 'Southern Comfort', 'Coca-Cola'],
      instructions: "Fill glass with ice. Add Kool-Aid powder, Southern Comfort and Coke. Stir well (never shake)",
      glass: 'Hurricane glass'
  },

  {
      name: "Honey-Dew-Me",
      ingredients: [ 'Barenjager', 'Melon liqueur', 'Orange juice'],
      instructions: "serve as a chilled shot",
      glass: 'vote'
  },

  {
      name: "Purple stealth",
      ingredients: [ 'Absolut Kurant', 'Grape soda'],
      instructions: "Pour vodka in large soft drink tumbler first. Tastes more like carbonated Ribena than grape soda. Very powerful!",
      glass: 'vote'
  },

  {
      name: "Brush Fire",
      ingredients: [ 'Cinnamon schnapps', 'Tabasco sauce'],
      instructions: "Pour 1/3 ounce tabasco sauce into a one ounce shot glass. Fill the rest of the shot glass with either HOT 100 or if you prefer you can use a regular cinnamon schnapps. Drink immediately after making. This drink will lose flavor quickly.",
      glass: 'Shot glass'
  },

  {
      name: "Sky Pilot",
      ingredients: [ 'Vodka', 'Irish Cream', 'Peppermint schnapps'],
      instructions: " ",
      glass: 'vote'
  },

  {
      name: "Rattlesnake Shot",
      ingredients: [ 'Yukon Jack', 'Cherry brandy', 'Sweet and sour'],
      instructions: "Since this is basically a shot drink, mix to your own taste",
      glass: 'Shot glass'
  },

  {
      name: "Long Island Iced Tea (By a Long Islander)",
      ingredients: [ 'Vodka', 'Tequila', 'Rum', 'Gin', 'Triple sec', 'Sour mix', 'Coca-Cola'],
      instructions: "Mix ingredients together over ice in a glass. Pour into shaker and give ONE brisk shake. Pour back into glass and make sure there is a touch of fizz at the top. Garnish with lemon.",
      glass: 'vote'
  },

  {
      name: "Japanese Slipper #1",
      ingredients: [ 'Midori melon liqueur', 'Triple sec', 'Lime juice'],
      instructions: "Just Mix it and drink it slow!",
      glass: 'vote'
  },

  {
      name: "Bit of Russiaan Honey",
      ingredients: [ 'Vodka', 'Butterscotch schnapps', 'Kahlua', 'Irish Cream', 'Cream'],
      instructions: "Add ingredients shake and pour over ice",
      glass: 'vote'
  },

  {
      name: "Rotten Pussy",
      ingredients: [ 'Midori melon liqueur', 'Amaretto', 'Southern Comfort', 'Malibu rum', 'Sour mix', 'Pineapple juice'],
      instructions: "shake all ingredients and serve as a shooter",
      glass: 'vote'
  },

  {
      name: "Blue Banana",
      ingredients: [ 'Creme de Banane', 'Blue Curacao'],
      instructions: "Pour creme de banana into the glass and layer blue curacao on top.",
      glass: 'Pousse cafe glass'
  },

  {
      name: "Radler",
      ingredients: [ 'Beer', '7-Up'],
      instructions: "Pour beer into large mug, slowly add the 7-up (or Sprite).",
      glass: 'vote'
  },

  {
      name: "Earthquake #1",
      ingredients: [ 'Gin', 'Whisky', 'Pernod'],
      instructions: "Shake the ingridiens together and poor over in a cocktail-glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Scarlet O'Hara",
      ingredients: [ 'Southern Comfort', 'Cranberry juice', 'Lime'],
      instructions: "Pour 2 oz. Southern Comfort over ice in an 8 oz. glass. Fill with cranberry juice. Squeeze one wedge of lime into drink. Stir and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Mudslinger",
      ingredients: [ 'Southern Comfort', 'Orange juice', 'Pepsi Cola'],
      instructions: "Add all contents to a large jug or punch bowl. Stir well!",
      glass: 'Punch bowl'
  },

  {
      name: "Paralyzer #2",
      ingredients: [ 'Kahlua', 'Vodka', 'Milk', 'Coca-Cola', 'Ice'],
      instructions: "Above amounts are for an 8 oz glass. Build over ice: Kahlua, then Vodka, milk, then Coke.",
      glass: 'Highball glass'
  },

  {
      name: "The Finnely",
      ingredients: [ 'Light rum', 'Dark rum', 'Pineapple juice', 'Grapefruit juice', 'Orange juice'],
      instructions: "Mix all ingredients, shake and pore over ice in a collins glass. Garnish with a lemon, lime, and orange wedge.",
      glass: 'Collins glass'
  },

  {
      name: "The Black Death",
      ingredients: [ 'Vodka', 'Soy sauce'],
      instructions: "Mix ingredients in shaker and pour over ice. Serve cold. Great on a hot day!",
      glass: 'vote'
  },

  {
      name: "Campari Beer",
      ingredients: [ 'Lager', 'Campari'],
      instructions: "Use a 15 oz glass. Add Campari first. Fill with beer.",
      glass: 'Beer mug'
  },

  {
      name: "Coco Channel",
      ingredients: [ 'Gin', 'Kahlua', 'Cream'],
      instructions: "Shake all with ice, serve in lowball over ice, or neat in a martini glass.",
      glass: 'vote'
  },

  {
      name: "Boot Blaster",
      ingredients: [ 'White rum', 'Gin', 'Vodka', 'Triple sec', 'Lemon-lime mix', 'Coca-Cola'],
      instructions: "Half fill a 20oz glass (preferrably in the shape of a Cowboy Boot) with ice, regular or crushed. Pour the spirits over the ice. Add lemon-lime mix leaving room at the top for the 1/2 oz of Coca-Cola to dirty the drink.",
      glass: 'vote'
  },

  {
      name: "Bastardized Screwdriver",
      ingredients: [ 'Gold rum', 'Orange juice', 'Ice'],
      instructions: "Ice, then rum, then orange juice. Mix",
      glass: 'vote'
  },

  {
      name: "Ejhazz",
      ingredients: [ 'Absolut Vodka', 'Peach juice', 'Ice', 'Vanilla extract'],
      instructions: "Add Vidka and peach juice. Fill glass with ice and add vanilla to taste. If the drink is too sweet, dilute it with water.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Sex with the Captain",
      ingredients: [ 'Spiced rum', 'Amaretto', 'Peach schnapps', 'Cranberry juice', 'Orange juice'],
      instructions: "Build drink in glass over ice. Garnish with a cherry.",
      glass: 'Highball glass'
  },

  {
      name: "Foreplay",
      ingredients: [ 'Amaretto', 'Pineapple juice'],
      instructions: "Mix both ingredients together in a tumbler with ice. Strain into a shot glass! Enjoy!",
      glass: 'Shot glass'
  },

  {
      name: "Pan Galactic Gargle Blaster #3",
      ingredients: [ 'Mountain Dew', 'Cranberry juice', 'Vodka', 'Amaretto'],
      instructions: "Pour all ingredients into a cooler, chill, and serve. As with most punches, it's hard to be specific about the amounts used. A general rule: pour as much of everything as tastes good, then add more vodka! To make life more interesting, throw in pieces of fruit, and add dry ice to the cooler before serving. Small plastic animals also make a nice garnish (but don't drink them)!",
      glass: 'vote'
  },

  {
      name: "Extremely Drunk",
      ingredients: [ 'Tequila', 'Vodka', 'Jägermeister', 'Cranberry juice', 'Grenadine'],
      instructions: "Mix all together.",
      glass: 'vote'
  },

  {
      name: "Cool Cucumber",
      ingredients: [ 'Benedictine', 'Lemon juice', 'Cucumber', 'Champagne', 'Ice'],
      instructions: "Put a few ice-cubes in a longdrink glass, and put a little lemon juice in it. Then cut a cucumber in two half and cut off a part. Get the seeds out and put it in the glass as well. Shake in a well cooled down bottle of champagne in and let the glass stand in the refrigerator for a while. Then it's ready to drink.",
      glass: 'Cocktail glass'
  },

  {
      name: "Tiffany's Wet and Ready",
      ingredients: [ 'Malibu rum', 'Pineapple juice', '151 proof rum', 'Grenadine', 'Ice'],
      instructions: "Fill Mason jar with crushed ice. Add pineapple juice and Malibu rum. Mix well. Add splash of greanadine and 151 proof rum. Garnish with cherry, pineapple, or other fruit slice.",
      glass: 'Mason jar'
  },

  {
      name: "David Caradine",
      ingredients: [ 'Dark Creme de Cacao', 'Green Creme de Menthe', 'Canadian whisky', 'Heavy cream'],
      instructions: "Mix in the order: cacao, menthe, whiskey, milk. Try to keep the layers separate. Float on the back of a spoon, tilt the glass and pour very gently, etc. I suggest tilting the glass. When you tilt the glass you can, when pouring the cream/milk, rotate the glass causing the cream to swirl down through the other layers which looks good. Serve in an apertif glass.",
      glass: 'vote'
  },

  {
      name: "Leatherneck",
      ingredients: [ 'Tabasco sauce', '151 proof rum'],
      instructions: "Pour 1/4 inch to one inch Tabasco into shot glass. Pour Rum over Tabasco and shoot it.",
      glass: 'Shot glass'
  },

  {
      name: "Tropical dream",
      ingredients: [ 'Malibu rum', 'Blue Curacao', 'Pineapple juice'],
      instructions: "Shake the three ingredients together and poor in a cocktail glass. Garnish with a red cherry on the rim of the glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Jihad",
      ingredients: [ 'Vodka', 'Sprite', 'Orange juice'],
      instructions: "Just pour all the contents together, and mix.",
      glass: 'Highball glass'
  },

  {
      name: "Jay's Rootbeer Dream",
      ingredients: [ 'Absolut Vodka', 'Root beer schnapps', 'Irish Cream', 'Heavy cream', 'Coca-Cola'],
      instructions: "Add all , except the cola, into a flash cup, Flash for 10 sec. or till foamy. Served in beer mug over half mug of ice. Splash of cola top. If you have a chilled mug it's a plus.",
      glass: 'Beer mug'
  },

  {
      name: "Purple Devil",
      ingredients: [ 'Triple sec', 'Triple sec', 'Amaretto', 'Cranberry juice', '7-Up'],
      instructions: "Shake alcohol with ice. Strain and pour over ice in a tall glass. Add cranberry juice to fill most of the way. Add a splash of 7-up if you want it fizzy!",
      glass: 'Highball glass'
  },

  {
      name: "Wisconsin Lunchbucket",
      ingredients: [ 'Beer', 'Orange juice', 'Amaretto'],
      instructions: "In a beer mug large enough to hold a shot glass, mix beer and O.J. Drop in shot of Amaretto (depth charge) and slam.",
      glass: 'Shot glass'
  },

  {
      name: "Strawberry Smoothie",
      ingredients: [ 'Strawberries', 'Water', 'Soy milk', 'Sugar', 'Ice', 'Egg'],
      instructions: "Put all in blender and wizz away until thick.",
      glass: 'vote'
  },
  {
      name: "Greek Lightning",
      ingredients: [ 'Ouzo', 'Vodka', 'Chambord raspberry liqueur'],
      instructions: "Pour into mixing cup with 2 or 3 ice cubes, and chill to make shooter. Strain into shot glass or test tube...",
      glass: 'Shot glass'
  },

  {
      name: "Almond Chocolate Coffee",
      ingredients: [ 'Amaretto', 'Dark Creme de Cacao', 'Coffee'],
      instructions: "Pour in order into coffee cup. Top with whipped creme and chocolate shcvings.",
      glass: 'Coffee mug'
  },

  {
      name: "Tropical Teaser",
      ingredients: [ 'Dark rum', 'Amaretto', 'Grapefruit juice'],
      instructions: "Place in a cold shaker with ice. Shake for one minute and serve over ice.",
      glass: 'Cocktail glass'
  },

  {
      name: "Ethnic Sugar",
      ingredients: [ 'Triple sec', 'Coca-Cola', 'Tequila', 'Kool-Aid', 'Surge', 'Ice'],
      instructions: "Mix all ingrediants together except for the Surge and stir. Fill the rest up with Surge and enjoy.",
      glass: 'Beer mug'
  },

  {
      name: "Southern Chase",
      ingredients: [ 'Galliano', 'Southern Comfort', 'Bourbon'],
      instructions: "Mix Together and Drink",
      glass: 'Shot glass'
  },

  {
      name: "Rum Aid",
      ingredients: [ '151 proof rum', 'Malibu rum', 'Rum', 'Grand Marnier', 'Sour mix', 'Ginger ale'],
      instructions: "Skaking Serves with ice an a Lemon",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Purple Haze #2",
      ingredients: [ 'Vodka', 'Orange juice', 'Blackberry schnapps', 'Ice'],
      instructions: "Mix the Vodka and the Orange juice together, add the Blackcurrant shnapps, add ice!",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Red Tequila",
      ingredients: [ 'Tequila', 'Tabasco sauce', 'Lemon'],
      instructions: "This is an extended ordinary Tequila drink with a half lemon slice on the edge of the glass. Add Tabasco sauce to the drink until the colour is strongly reddish. Mix lightly.",
      glass: 'Shot glass'
  },

  {
      name: "Polkagris",
      ingredients: [ 'Vodka', 'White Creme de Menthe', 'Grenadine', 'Sprite', 'Cherry', 'Ice'],
      instructions: "Mix the fluids into the glass, add a couple ice cubes and (one or) two cherries. Use a thick, red and white striped straw.",
      glass: 'Highball glass'
  },

  {
      name: "Amaretto Stone Sour #3",
      ingredients: [ 'Sour mix', 'Amaretto', 'Tequila', 'Orange juice'],
      instructions: "Shake sour mix, tequila and amaretto with ice. Strain into highball glass. Add a splash of OJ. Garnish with orange slice and a cherry.",
      glass: 'Highball glass'
  },

  {
      name: "Rick",
      ingredients: [ 'Sambuca', 'Orange juice'],
      instructions: "First, you must pour the Sambuca in your shot glass and then slowly pour the orange juice. You may now enjoy Rick's fruity taste!",
      glass: 'Shot glass'
  },

  {
      name: "FireBall Shooter",
      ingredients: [ 'Cinnamon schnapps', '151 proof rum', 'Tabasco sauce'],
      instructions: "Mix the Schnapps, Rum and Tabasco in a Shooter Glass. Stir briefly.",
      glass: 'Shot glass'
  },

  {
      name: "9 1/2 Weeks",
      ingredients: [ 'Absolut Citron', 'Orange Curacao', 'Strawberry liqueur', 'Orange juice'],
      instructions: "Combine all ingredients in glass mixer. Chill and strain into Cocktail glass. Garnish with sliced strawberry.",
      glass: 'Cocktail glass'
  },

  {
      name: "Aqua Fodie",
      ingredients: [ 'Gin', 'Blue Curacao', 'Orange juice', 'Ice', 'Orange', 'Cherry'],
      instructions: "Fill glass with ice. Pour in 1 oz. of gin followed by 1 oz. of Blue Curaco. Fill glass with orange juice, garnish with orange and cherry and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Butch's Pink Panties",
      ingredients: [ 'Bourbon', 'Mountain Dew', 'Ice'],
      instructions: "Blend all ingredients thoroughly and consume. Put a pair of pink panties on and go out and mow the grass.",
      glass: 'Mason jar'
  },

  {
      name: "Buckshot",
      ingredients: [ 'Irish Cream', 'Tequila', 'Bourbon', 'Black pepper'],
      instructions: "The Tequila and Whiskey are mixed in the bottom of the shot glass. The Baileys is to act like the 'wax' in a shotgun shell and is layered on top of the whiskey/tequila mix. The fresh ground pepper is your 'buckshot' that creates the spice/burning sensation.",
      glass: 'Shot glass'
  },

  {
      name: "Noah",
      ingredients: [ 'Amaretto', 'Orange juice', 'Lemon-lime soda'],
      instructions: "Pour amaretto into glass filled with ice, then add equal parts orange juice and lemon-lime soda to fill glass.",
      glass: 'vote'
  },

  {
      name: "The Skunk Pussy",
      ingredients: [ 'Gin', 'Tequila', 'Lime', '7-Up'],
      instructions: "Add alcohol to snifter, then add ice with the 7-up.",
      glass: 'Brandy snifter'
  },

  {
      name: "Christmas Tree Water",
      ingredients: [ 'Gin', 'Sprite', 'Cayenne pepper'],
      instructions: "Place one part dry gin in Cocktail Glass. Do NOT bruise the Gin! Carefully add two parts Sprite. Do NOT bruise the Sprite. Optionally, add a dash of cayenne pepper for added flavor. Add 3 tablespoons of dry ice for that mystical, yet strangely, psycho effect.",
      glass: 'Cocktail glass'
  },

  {
      name: "Creamsicle Dream",
      ingredients: [ 'Malibu rum', 'Yoghurt', 'Orange juice'],
      instructions: "Put all ingredients in glass and stir. Served as a float drink. Can also be mixed in a blender and served as a shake.",
      glass: 'Highball glass'
  },

  {
      name: "Whoop Juice",
      ingredients: [ 'Vodka', 'Everclear', 'Fruit punch', 'Lemonade', 'Limeade', '7-Up'],
      instructions: "Combine all together: if to strong, add more soda, more kick, add more Everclear.",
      glass: 'Punch bowl'
  },

  {
      name: "Monsoon",
      ingredients: [ 'Light rum', 'Sweet and sour', 'Pineapple juice', 'Passion fruit juice', 'Dark rum'],
      instructions: "Add all ingredients except Meyers dark rum and stir in a hurricane glass filled with ice. Add Meyers dark rum at the top, mix and enjoy!",
      glass: 'Hurricane glass'
  },

  {
      name: "Neutron Bomb",
      ingredients: [ 'Butterscotch schnapps', 'Irish Cream', 'Kahlua'],
      instructions: "Pour the Butterscotch, float the Bailey's and let the Kahlua sink to the bottom of the shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Jello-shot Supreme",
      ingredients: [ 'Jello', 'Water', 'Peachtree schnapps'],
      instructions: "Bring water to a boil. Mix with a large package of Black Cherry Jello. Then add Peachtree Schnapps, mix well. Pour into small plastic shot or 2 oz. containers. Chill and enjoy.",
      glass: 'vote'
  },

  {
      name: "Absolutly Screwed Up",
      ingredients: [ 'Absolut Citron', 'Orange juice', 'Triple sec', 'Ginger ale'],
      instructions: "Shake it up it tasts better that way, but you can stir it if you want. 6 of those and you will be wasted for the rest of the night.",
      glass: 'Collins glass'
  },

  {
      name: "Texas Cool-Aid",
      ingredients: [ 'Vodka', 'Midori melon liqueur', 'Creme de Noyaux', 'Cranberry juice'],
      instructions: "Pour over ice, shake until cooled, then pour into glass.",
      glass: 'Highball glass'
  },

  {
      name: "Green Iguana",
      ingredients: [ 'Tequila', 'Midori melon liqueur', 'Sweet and sour', 'Ice'],
      instructions: "Mix Tequila, Melon Liquor and Sweet and Sour Mix in Blender. Add ice. Serve in glass.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Chicken Drop",
      ingredients: [ 'Jägermeister', 'Peach schnapps', 'Orange juice'],
      instructions: "Mix all three in shaker with ice. Pour cold",
      glass: 'Shot glass'
  },

  {
      name: "The World's Best Pina Colada",
      ingredients: [ 'Black rum', 'Cream of coconut', 'Pineapple juice', 'Ice', 'Pineapple'],
      instructions: "Combine Rum, Cream of Coconut and Pineapple Juice in a regular sized blender. Blend on low speed to mix liquid ingredients. Fill blender to top with ice. Blend on high speed until ice is grainy. Pour into hurricane glass and garnish with pineapple wedge.",
      glass: 'Hurricane glass'
  },

  {
      name: "Grain Punch",
      ingredients: [ 'Grain alcohol', 'Fruit punch', 'Fruit', 'Ice'],
      instructions: "First and foremost, BUY A NEW GARBAGE CAN, and wash it out thoroughly!!!!! (Preferably the big ones 40-55gal). First Pour in all of the Grain (10 bottles of 1.75ml [Handle]), keep in mind that this recipie is for a Large Party, not 10 people sitting around getting loaded.....Anyway, next add the dry packets of mix. We used to get the largest industrial bags we could, don't go for quality, you're not going to remember anyway. Now this is the most critical part, the fruit. This is why I put this on here...any joker can make punch, but I figured I would distibute my years of fruit research for free....the Best friends you have in the Fruit community are the Orange and the Apple. This is because they absorb the grain better than anything else I tested. So make sure you get some of these in every glass you get, and eat them, DON'T EVER THROW THESE OUT, this is the best part of the drink. Bananas suck, they get gushy, watermellon works ok but the seeds get to be a pain in the ass when you can't see so well, pineapple is good, basically you get the point. Cut the fruit into wedges and throw it in the mix and let it sit around for a minute...Now throw in the bags of ice and fill it up to desired potency with water, mixing can be done with a canoe paddle or a 2x4 or anything else you've got lying around...a disposable camera is usually a good partner while drinking this concoction, people get really outta hand and go off the deep end.....This goes well as an iceblock shot too.",
      glass: 'vote'
  },

  {
      name: "Warped Thursday",
      ingredients: [ 'Cherry Cola', 'Vodka', 'Kool-Aid'],
      instructions: "When we make it, we empty half a can of Cherry Coke, pour the vodka into the can, then pour in the Kool-aid. I'm sure it would work in a 12oz glass. Stir - a kabob stick works well in the can.",
      glass: 'vote'
  },

  {
      name: "The Quan",
      ingredients: [ 'Vodka', 'Blue Curacao', 'Ice', '7-Up'],
      instructions: "Stir until color is even.",
      glass: 'Highball glass'
  },

  {
      name: "Peppermint Patty (Northern Style)",
      ingredients: [ 'Irish Cream', 'Peppermint schnapps'],
      instructions: "Served Chilled. Pour equally.",
      glass: 'Shot glass'
  },

  {
      name: "Long Island Iced Tea #5",
      ingredients: [ 'Vodka', 'Gin', 'Light rum', 'Triple sec', 'Sweet and sour', 'Pepsi Cola'],
      instructions: "Add ice to glass. Add Alcohol. Add Sweet and Sour mix. Fill to the top with Cola (preferably Pepsi). Squeeze and add lemon",
      glass: 'Mason jar'
  },

  {
      name: "Amazon Street Lemonade",
      ingredients: [ 'Ice', 'Vodka', 'Lemonade'],
      instructions: "Fill glass with ice. Add 2 oz vodka and fill the glass with lemonade.",
      glass: 'Highball glass'
  },

  {
      name: "Shot in the pot",
      ingredients: [ 'Ginger ale', 'Tabasco sauce'],
      instructions: " ",
      glass: 'Shot glass'
  },

  {
      name: "Whitecap Margarita",
      ingredients: [ 'Ice', 'Tequila', 'Cream of coconut', 'Lime juice'],
      instructions: "Place all ingredients in a blender and blend until smooth. This makes one drink.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Liquid Cocaine #3",
      ingredients: [ 'Jägermeister', '151 proof rum', 'Rumple Minze'],
      instructions: "Keep all 3 liquors in freezer till they are viscous. (Jägermeister should have a syrup quality.) Mix all three in shaker and pour in a extra tall frosted shot glass. (Should be one of those unusually tall shot glasses if possible, otherwise use small whiskey glass as this is a unusually large shot.) Serve Cold!",
      glass: 'Shot glass'
  },

  {
      name: "Morning Dew",
      ingredients: [ 'Mountain Dew', 'Orange juice', 'Southern Comfort'],
      instructions: "Pour all the stuff in a punch bowl and drink. (Tastes better with Diet Dew)",
      glass: 'Mason jar'
  },

  {
      name: "Torpedo",
      ingredients: [ 'Rum', 'Vodka', 'Cognac', 'White Creme de Menthe', 'Cherry', 'Cucumber', 'Lemon peel'],
      instructions: "Mix the liquers, and put the other things it it :)",
      glass: 'vote'
  },

  {
      name: "Smooth Pink Lemonade",
      ingredients: [ 'Vodka', 'Cranberry juice', 'Sour mix', '7-Up'],
      instructions: "Built Drink usually want a slight bit more sour than cranberry experiment to personal taste ganish with lemon wheel",
      glass: 'Cocktail glass'
  },

  {
      name: "Lady 52",
      ingredients: [ 'Kahlua', 'Irish cream', 'Cream', 'Triple sec', 'Chocolate'],
      instructions: "This a kind of a Pousse Cafe. Float Irish cream over the Kahlua. Shake Cream with Triple sec. Float on the Irish cream. Garnish with choclate.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Fourth of July",
      ingredients: [ 'Grenadine', 'Blue Curacao', 'Cream'],
      instructions: "Layer in Shot Glass, Banded Red/White/Blue shot is perfect for the fourth of July",
      glass: 'Shot glass'
  },

  {
      name: "On the Deck",
      ingredients: [ 'Spiced rum', 'Dark rum', 'Triple sec', 'Lemonade', 'Cranberry juice'],
      instructions: "For best results mix all ingredients into a frosted Mug.",
      glass: 'Beer mug'
  },

  {
      name: "Jamaican Qualude",
      ingredients: [ 'Malibu rum', 'Frangelico', 'Irish Cream', 'Milk'],
      instructions: "Shake with ice. Strain into a small or regular size rocks glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Bellini Martini",
      ingredients: [ 'Ice', 'Vodka', 'Peach nectar', 'Peach schnapps', 'Lemon peel'],
      instructions: "Add ice cubes to shaker. Add vodka. Add peach schnapps. Add peach nectar. Shake. Strain into glass. Add lemon twist.(peel)",
      glass: 'Cocktail glass'
  },

  {
      name: "Jitterbug",
      ingredients: [ 'Gin', 'Vodka', 'Grenadine', 'Lime juice', 'Sugar', 'Sugar syrup', 'Soda water'],
      instructions: "Wet glass, dip rim in sugar. Then add Ice. Then add everything else. It's that simple!",
      glass: 'vote'
  },

  {
      name: "Good Morning!",
      ingredients: [ 'Espresso', 'Vanilla ice-cream', 'Sugar', 'Irish Cream', 'Tia maria', 'Ice'],
      instructions: "Combine Vanilla Ice-Cream, Sugar, Ice, and Espresso in a blender and blend until smooth. Add Bailey's Irish Cream and Tia Maria then stir. Pour into coffee mug and serve.",
      glass: 'Coffee mug'
  },

  {
      name: "The Fucking Shit",
      ingredients: [ 'Cranberry juice', 'Pink lemonade', 'Vodka'],
      instructions: "Pour vodka over ice, add cranberry juice, add frozen pink lemonade concentrate, mix.",
      glass: 'vote'
  },

  {
      name: "Mexican Flag",
      ingredients: [ 'Grenadine', 'Green Creme de Menthe', 'Tequila'],
      instructions: "Layer Drink: Using spoon, pour shot over spoon over glass. Fill with Grenadine first, then Creme de Menthe, and last but not least Tequila. The layers form the mexican flag enjoy.",
      glass: 'Highball glass'
  },

  {
      name: "Mark and Coke",
      ingredients: [ 'Ice', 'Bourbon', 'Coca-Cola'],
      instructions: "Fill cocktail glass to the top with clean ice. Straight pour about 4 oz of Makers Mark over ice. Add Coca-Cola to taste.",
      glass: 'Cocktail glass'
  },

  {
      name: "Mudslide #3",
      ingredients: [ 'Irish Cream', 'Tia maria', 'Coca-Cola'],
      instructions: "Just get a high-ball glass and add your 1 or 2 shot(s) of Bailey's, then your 1 or 2 shots of Tia Maria, then just simply slowly top the glass with the coca-cola. It will fizz alot so watch out! Due to the fizz a straw is a definate recommindation.",
      glass: 'Highball glass'
  },

  {
      name: "Shark Tank",
      ingredients: [ 'Vodka', 'Lemonade', 'Grenadine'],
      instructions: "Mix vodka and lemonade in a large glass. Drop in grenadine last, but do not stir. Best served over ice, through a straw.",
      glass: 'vote'
  },

  {
      name: "Monkey Spanker",
      ingredients: [ 'Tennessee whiskey', 'Ginger ale'],
      instructions: "Pour around 2-3 oz. of Whiskey into a glass, then fill the rest up with Vernors.",
      glass: 'Beer mug'
  },

  {
      name: "Raspberry Kamakazie",
      ingredients: [ 'Chambord raspberry liqueur', 'Vodka', 'Triple sec', 'Sweet and sour'],
      instructions: "Stir all ingredients with ice. Pour into lowball or other shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Moranguito",
      ingredients: [ 'Absinthe', 'Tequila', 'Grenadine'],
      instructions: "first you put rhe absinthe, then put tequila, then put the Granadine syrup.",
      glass: 'Shot glass'
  },

  {
      name: "Pedra (stone)",
      ingredients: [ 'Tequila', 'Vodka', 'Black rum', 'Irish Cream', 'Grenadine', 'Absinthe'],
      instructions: "First put the tequila, then the vodka, then the black rum, then the Bailey's Irish Cream, then the Granadine syrup and then mix this five elements for that the drink become pink, to finish put the Absinthe with the help of a spoon. Put the shot on fire and drink it with a straw, or you have another choice: When the shot is on fire you slap it to extinguish the fire and then you drink it.",
      glass: 'Shot glass'
  },

  {
      name: "Kryptonite kooler",
      ingredients: [ 'Rum', 'Maui', 'Pineapple juice'],
      instructions: "Mix the rum, Maui,and pineapple juice together. Add ice,and enjoy!",
      glass: 'vote'
  },

  {
      name: "Amaretto Sweet & Sour",
      ingredients: [ 'Amaretto', 'Sweet and sour', 'Midori melon liqueur', 'Pineapple juice'],
      instructions: "Fill the blender with 3/4 ice. Add sweet & sour mix to the top of the ice. Add about 1 inch of pineapple juice, 1/2 inch of melon liqeur, and 1/2 to 1/4 inch of amaretto. Then blend the mix until it is of margaritta consistency or thinner.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Liquid Courage",
      ingredients: [ 'Milk', 'Chocolate ice-cream', 'Creme de Cacao', 'Vodka', 'Rum'],
      instructions: "Put all ingredients into a blender, then liquify until it becomes a shake. Pour into the beer mugs, and you're set.",
      glass: 'Beer mug'
  },

  {
      name: "Fucked up Float",
      ingredients: [ 'Kahlua', 'Peppermint schnapps', 'Vodka', 'Coca-Cola', 'Ice-cream', 'Milk'],
      instructions: "Mix together Kahlua, schnapps, vodka, ice-cream and cola until blended. Fill with milk.",
      glass: 'Collins glass'
  },

  {
      name: "Psycho Citrus",
      ingredients: [ 'Vodka', 'Tequila', 'Peppermint schnapps', 'Lime juice', 'Grand Marnier', 'Orange juice', 'Ice'],
      instructions: "Mix together in a Tom Collins glass the vodka, tequila, schnapps, Grand Marnier and lime juice over ice. Fill with orange juice.",
      glass: 'Collins glass'
  },

  {
      name: "Green Zone",
      ingredients: [ 'Tequila', 'Pisang Ambon', 'Orange juice'],
      instructions: "Pour all ingredients with an ice cube into a shaker.",
      glass: 'Cocktail glass'
  },

  {
      name: "Johnny Cat",
      ingredients: [ 'Gin', 'Dry Vermouth', 'Triple sec', 'Grenadine', 'Club soda', 'Ice'],
      instructions: "Place gin or vodka, triple sec, vermouth, grenadine and ice in shaker. Shake well and pour into glass. Fill with tonic water or club soda.",
      glass: 'Red wine glass'
  },

  {
      name: "Milk of Amnesia",
      ingredients: [ 'Champagne', 'Chambord raspberry liqueur'],
      instructions: "Add ice cold champagne to glass, slowly add chilled Chambord untill desired raspberry flavor is achieved, give it a gentle stir to mix.",
      glass: 'Champagne flute'
  },

  {
      name: "Jack Frost",
      ingredients: [ 'Bourbon', 'Drambuie', 'Grenadine', 'Sweet and sour', 'Orange juice'],
      instructions: "Combine all ingredients over ice in a glass.",
      glass: 'vote'
  },

  {
      name: "Born on the 4th of July",
      ingredients: [ 'Ice', 'Blue Curacao', 'Sloe gin', 'Cream'],
      instructions: "Fill Collins Glass with ice Pour in Blue Curacao first Next pour in Sloe Gin but be careful, the appearance of the drink is very important. Pour gently onto the ice so as to layer it. Next fill it with cream also layering it. The result should be a blue and red drink with tendrils of white shooting through the colors.",
      glass: 'Collins glass'
  },

  {
      name: "Toblerone #1",
      ingredients: [ 'Frangelico', 'Kahlua', 'Irish Cream', 'Cream', 'Honey'],
      instructions: "Blend with ice and serve in a tall glass. Garnish with chocolate flakes and optionally chocolate topping drizzled down the inside of the glass.",
      glass: 'Highball glass'
  },

  {
      name: "Sunburn",
      ingredients: [ 'Rum', 'Strawberry juice', 'Orange', 'Banana', 'Grenadine'],
      instructions: "Pour eveything in a big punch bowl or cooler with a big block of ice. Throw in some cherries and a half bottle of 151 for good measure. Have a good time!",
      glass: 'Punch bowl'
  },

  {
      name: "Snake in the grass",
      ingredients: [ 'Triple sec', 'Gin', 'Vermouth', 'Lemon juice', 'Cherry'],
      instructions: "Shake with lots of ice, strain into glass",
      glass: 'Cocktail glass'
  },

  {
      name: "Bigger better Blue Lagoon",
      ingredients: [ 'Malibu rum', 'Light rum', 'Peach schnapps', 'Blue Curacao', 'Cherry', 'Pineapple juice'],
      instructions: "Pour over ice in glass. Shake or stir, add cherry and if you would like an additional splash of color, add a few drops of cherry grenadine.",
      glass: 'Hurricane glass'
  },

  {
      name: "French Toast",
      ingredients: [ 'Irish Cream', 'Hot Damn', 'Butterscotch schnapps'],
      instructions: "Mix ingredients, the shot should taste like a piece of French Toast.",
      glass: 'Shot glass'
  },

  {
      name: "The Icelandic way",
      ingredients: [ 'Vodka', 'Lemon soda', 'Beer', 'Coca-Cola'],
      instructions: "Mix a normal glass of vodka and fanta lemon, drink down to half and fill up with beer and coke.",
      glass: 'vote'
  },

  {
      name: "Raspberry Stupid",
      ingredients: [ 'Zima', 'Raspberry schnapps'],
      instructions: "Mix Well. Drink. Repeat until stupid.",
      glass: 'Highball glass'
  },

  {
      name: "Flaming Goat",
      ingredients: [ 'Vodka', 'Gin', 'Rum', 'Tequila', 'Triple sec', 'Blue Curacao', 'Sour mix', 'Cranberry juice', 'Ice', '151 proof rum'],
      instructions: "Mix vodka, gin, rum, tequila, triple sec and curacao. Add sour mix. Add Curacao until it's dark purple. Fill glass with ice cubes and fload Bacardi 151 rum on top. Have the flame blown out before drinking add a straw.",
      glass: 'Hurricane glass'
  },

  {
      name: "Spring",
      ingredients: [ 'Gin', 'Pisang Ambon', 'Sprite'],
      instructions: "Mix gentle, and add ice cubes. Serve whith Straw.",
      glass: 'Highball glass'
  },

  {
      name: "The Graveyard",
      ingredients: [ 'Tabasco sauce', 'Tequila', 'Lemon-lime soda'],
      instructions: "Pour 1 oz of Tobasco Sauce over ice. Add 1 oz. of Tequila and fill glass with lemon-lime soda. Shake or stir and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Toblerone #2",
      ingredients: [ 'Frangelico', 'Irish Cream', 'Kahlua', 'Cream', 'Honey'],
      instructions: "Blend ingrediants with ice until a creamy consistancy is reached (don't add too much ice, this will make the drink too thick). Pour into a *HONEY LINED GLASS*. Garnish with chocolate flakes and an open strawberry.",
      glass: 'vote'
  },

  {
      name: "Roadrunner Punch",
      ingredients: [ 'Malibu rum', 'Blue Curacao', 'Peach schnapps', 'Fruit punch'],
      instructions: "Mix 1 part of each type of alcohol (1 shot or less of each) in a large glass. Top off with Fruit Punch. Serve with ice.",
      glass: 'vote'
  },

  {
      name: "Screwdriver (modified)",
      ingredients: [ 'Orange juice', 'Vodka', 'Apple juice'],
      instructions: "add orange juice first, then add vodka, and finally add apple juice and stir lightly. The pooring should do most of the stirring.",
      glass: 'Highball glass'
  },

  {
      name: "Rum Runner",
      ingredients: [ 'Malibu rum', 'Blackberry brandy', 'Orange juice', 'Pineapple juice', 'Cranberry juice'],
      instructions: "Mix all ingredients in glass & add ice.",
      glass: 'Cocktail glass'
  },

  {
      name: "Ginelico",
      ingredients: [ 'Gin', 'Frangelico', 'Nutmeg'],
      instructions: "Stir Gin and Frangelico with ice, strain into cold cocktail glass. Garnish with frshly grated nutmeg.",
      glass: 'Cocktail glass'
  },

  {
      name: "Blitz",
      ingredients: [ 'Tequila', 'Triple sec', 'Southern Comfort', 'Grenadine', 'Lemon juice', 'Orange juice'],
      instructions: "Shake with ice. Strain or with ice.",
      glass: 'Cocktail glass'
  },

  {
      name: "Orgasm a la Denmark",
      ingredients: [ 'Irish Cream', 'Vodka'],
      instructions: "Stir it together until it just looks like Bailey's.",
      glass: 'vote'
  },

  {
      name: "More Orgasms",
      ingredients: [ 'Irish Cream', 'Vodka', 'Malibu rum'],
      instructions: "Stirr it together until it just looks like dark Bailey's.",
      glass: 'vote'
  },

  {
      name: "Horse's Ass",
      ingredients: [ 'Ginger ale', 'Soda water'],
      instructions: "Mix with ice.",
      glass: 'vote'
  },

  {
      name: "H.D.",
      ingredients: [ 'Whisky', 'Irish Cream', 'Coffee'],
      instructions: "Mix the whisky and Baileys Cream in a beer-glass (at least 50 cl). Fill the rest of the glass with coffee.",
      glass: 'Beer mug'
  },

  {
      name: "Horse Jizz",
      ingredients: [ 'Beer', 'Milk'],
      instructions: "Get a big mug. Pour in one ingredient then the other.",
      glass: 'Beer mug'
  },

  {
      name: "Long Island Iced Tea #6",
      ingredients: [ 'Vodka', 'Tequila', 'Gin', 'Rum', 'Triple sec', 'Iced tea', 'Lime juice', 'Coca-Cola'],
      instructions: "First, have all the ingridients cold. Mix the liquor in a glass and then add the iced tea, coca-cola and lemon. Be sure to stir or shake. Serve chilled in a big (beer?) glass.",
      glass: 'Beer mug'
  },

  {
      name: "Cowboy Cocksucker #2",
      ingredients: [ 'Butterscotch schnapps', 'Irish Cream', 'Southern Comfort'],
      instructions: "Mix with ice and strain into a shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Blow Job #3",
      ingredients: [ 'Kahlua', 'Irish Cream', 'Whipped cream'],
      instructions: "Add Kahlua and Bailey's to shot glass, garnish with whipped cream.",
      glass: 'Shot glass'
  },

  {
      name: "The Evil Blue Thing",
      ingredients: [ 'Creme de Cacao', 'Blue Curacao', 'Light rum'],
      instructions: "Pour ingredients into glass, and drop in a blue whale! The blue whale isn't really necessary, but it makes the drink more fun.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Shark Attack",
      ingredients: [ 'Lemonade', 'Water', 'Vodka'],
      instructions: "Mix lemonade and water according to instructions on back of can. If the instructions say to add 4 1/3 cans of water do so. Mix into pitcher. Add 1 1/2 cup of Vodka (Absolut). Mix well. Pour into glass of crushed ice. Excellent!",
      glass: 'Pitcher'
  },

  {
      name: "Jack's Vanilla Coke",
      ingredients: [ 'Ice', 'Tennessee whiskey', 'Vanilla extract', 'Coca-Cola'],
      instructions: "After pouring in your ingredients, and adding 3-5 ice cubes, according to taste. Stir the drink with a stirrer to get the Vanilla off the bottom.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Viscous Robert",
      ingredients: [ 'Angostura bitters', 'Southern Comfort', 'Lemon peel'],
      instructions: "Pour Bitters over rocks, and swirl in a dash of Southern Comfort. Garnish with lemon peel and and an umbrella (or the most frou-frou accoutrement you have on hand)",
      glass: 'Old-fashioned glass'
  },

  {
      name: "The Pink Drink",
      ingredients: [ 'Galliano', 'Vodka', 'Triple sec', 'Grenadine', 'Milk', 'Whipped cream'],
      instructions: "Pour Vodka, Galliano, Triple sec, Grenadine and Milk into a cocktail shaker, shake and pour into a cocktail glass and finish off with a dollop of whipped cream on top.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sid's Special",
      ingredients: [ 'Gin', 'Lime juice', 'Ice', '7-Up'],
      instructions: "Place cubes in glass, add gin, frozen lime juice, and 7-up then stir and enjoy.",
      glass: 'Beer mug'
  },

  {
      name: "Tripwire",
      ingredients: [ 'Vodka', 'Lemonade', 'Lemon', 'Water'],
      instructions: "In 5 gal. jug mix thoroughly all of vodka with all of lemons, lemonade, and water, which should be previously combined. Make sure water is ice cold, if not ice or refridgeration may be required.",
      glass: 'vote'
  },

  {
      name: "Ambijaxtrious",
      ingredients: [ 'Vodka', 'Tequila', 'Kahlua', 'Milk', 'Grenadine'],
      instructions: "Pour mixture into a cup filled with crushed and stir briskly.",
      glass: 'vote'
  },

  {
      name: "Mutated Mothers Milk",
      ingredients: [ 'Jägermeister', 'Irish cream', 'Peppermint schnapps'],
      instructions: "Mix all ingredients in a shaker filled with ice. Let stand for 3-5 minutes to chill. Pour into shot glass and enjoy.",
      glass: 'Shot glass'
  },

  {
      name: "Apple Grande",
      ingredients: [ 'Tequila', 'Apple cider'],
      instructions: "Chill both ingredients!! Mix in a tumbler and enjoy!",
      glass: 'vote'
  },

  {
      name: "Tequila Press",
      ingredients: [ 'Lemon', 'Soda water', 'Tequila', 'Sugar syrup', 'Ice'],
      instructions: "Dissolve the sugar in the boiling water and chill in the fridge. This step is best done before the party/drinking session. Put the tequila and lemon juice in the pitcher and fill with soda water and ice. Then mix sugar syrup to taste.",
      glass: 'Pitcher'
  },

  {
      name: "Bleeding Surgeon",
      ingredients: [ 'Dark rum', 'Orange', 'Surge', 'Cranberry juice'],
      instructions: "Pour Shot of Rum over slice of orange. Fill the remaining space in glass half way full of surge or similar drink. Finish off glass with cranberry juice. Be carefull, warm surge may foam over the glass.",
      glass: 'Collins glass'
  },

  {
      name: "Kansas City Ice Water",
      ingredients: [ 'Gin', 'Vodka', 'Lime juice', '7-Up'],
      instructions: "Mix ingredients over ice.",
      glass: 'Highball glass'
  },

  {
      name: "Suicide Stop Light",
      ingredients: [ 'Midori melon liqueur', 'Absolut Vodka', 'Aftershock', 'Orange juice'],
      instructions: "Line three 1 1/2 oz shot glasses up on the bar. pour each of the liquors into its own glass. Splash the orange juice into the vodka for color. Then shoot (RED YELLOW GREEN)",
      glass: 'Shot glass'
  },

  {
      name: "Spikey Hedgehog",
      ingredients: [ 'Grenadine', 'Cranberry juice', 'Lime juice', 'Club soda', 'Ice'],
      instructions: "Add all ingredients to a highball glass with ice and stir.",
      glass: 'Highball glass'
  },

  {
      name: "Epidural",
      ingredients: [ 'Everclear', 'Vodka', 'Malibu rum', 'Coconut cream'],
      instructions: "Chill all ingredients well. Mix equal parts and serve in a cordial glass. Or, if you have a test tube or beaker handy, go for it!",
      glass: 'Cordial glass'
  },

  {
      name: "Cayman Sunset",
      ingredients: [ 'Light rum', 'Pina colada mix', 'Pineapple juice', 'Grenadine'],
      instructions: "Half fill a highball glass with crushed ice. Next pour in 1.5oz. of your favorite brand of Light Rum. Now pour in .5oz. of liqiud pina colada mix, and then fill to the top of the glass with pineapple juice. After stirring ingrediences, pour in .5oz. of grenadine and alow to settle on the bottom of the glass (do not stir after adding grenadine),garnish the glass with an orange wedge, and then serve Mon!",
      glass: 'Highball glass'
  },

  {
      name: "Hazelnut Martini",
      ingredients: [ 'Vodka', 'Frangelico'],
      instructions: "add ingredients into mixing glass, chill and strain",
      glass: 'Cocktail glass'
  },

  {
      name: "Algae",
      ingredients: [ 'Vodka', 'Melon liqueur', 'Raspberry schnapps', 'Blue Curacao', 'Sweet and sour', '7-Up'],
      instructions: "Shake all ingredients over ice and pour into highball glass. No garnish.",
      glass: 'Highball glass'
  },

  {
      name: "Applejack",
      ingredients: [ 'Bourbon', 'Midori melon liqueur', 'Sour mix'],
      instructions: "Add all ingredients into mixing glass, chill and strain into cocktail glass",
      glass: 'Cocktail glass'
  },

  {
      name: "Sensei on the Rocks",
      ingredients: [ 'Kahlua', 'Malibu rum', 'Bourbon', 'Milk', 'Ice'],
      instructions: "With ice cubes in the the glass, add the Kahlua and Malibu and stir them together. Add the splash of Jack and fill the rest up with milk. Stir and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Island Girl",
      ingredients: [ 'Vodka', 'Guava juice', 'Cranberry juice', 'Orange juice'],
      instructions: "Add all ingredients. Roll.",
      glass: 'Highball glass'
  },

  {
      name: "Sweet Sunset",
      ingredients: [ 'Light rum', 'Passion fruit syrup', 'Sweet and sour', 'Strawberries'],
      instructions: "Fill blender cup with 15 ounces of small ice cubes, add rum, passion fruit syrup and sweet and sour and blend until smooth, in a hurricane glass pour the blended strawberries, then add the blended mixture, the strawberries will ooze up the sides of the glass and it will look like a beautiful sunset. Garnish with a pineapple wedge and a cherry.",
      glass: 'Hurricane glass'
  },

  {
      name: "Suicide The Shot",
      ingredients: [ '151 proof rum', 'Tabasco sauce'],
      instructions: "Float Tabasco a top of rum.",
      glass: 'Shot glass'
  },

  {
      name: "The Power of Milk",
      ingredients: [ 'Sugar', 'Vodka', 'Milk'],
      instructions: "Stir sugar and vodka together. Add milk. Serve cold with a straw.",
      glass: 'Cordial glass'
  },

  {
      name: "Pedro Collins",
      ingredients: [ 'Bacardi Limon', 'Sweet and sour', '7-Up', 'Club soda'],
      instructions: "Full collins glass with ice, pour in Limon, add sweet and sour, fill with equal parts club soda and 7-up",
      glass: 'Collins glass'
  },

  {
      name: "Bitchin' Apple Cider",
      ingredients: [ 'Goldschlager', 'Apple juice'],
      instructions: "Add Apple Juice to Goldschlager and Stir.",
      glass: 'Punch bowl'
  },

  {
      name: "Apple Cider Slider",
      ingredients: [ 'Spiced rum', 'Apple schnapps', 'Cinnamon schnapps', '7-Up'],
      instructions: "Pour over ice. Shake and strain into shooter glass.",
      glass: 'Shot glass'
  },

  {
      name: "Adam Bomb",
      ingredients: [ 'Rum', 'Vodka', 'Tequila', 'Triple sec', 'Fruit', 'Ice', 'Salt', 'Fruit juice'],
      instructions: "Add ice to blender (or to glass if prefer on the rocks) then fruit, and fruite juice depending on personal prefference then add the Rum, Vodka, Tequila, and triple sec. blend till smooth, rim glass with sugar or salt and pour mixture in. garnish with lemon or lime slice.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Three Wise Men (on a farm)",
      ingredients: [ 'Bourbon', 'Bourbon', 'Yukon Jack', 'Bourbon'],
      instructions: "Line up four shot glasses with a shot of each drink.",
      glass: 'Shot glass'
  },

  {
      name: "Royal Scandal",
      ingredients: [ 'Crown Royal', 'Southern Comfort', 'Amaretto', 'Sweet and sour', 'Pineapple juice'],
      instructions: "Add liquors and mixers into shaker with a few cubes of ice. Shake vehemently and strain out ice. Serve as a shooter.",
      glass: 'Shot glass'
  },

  {
      name: "Harry Denton Martini",
      ingredients: [ 'Gin', 'Green Chartreuse'],
      instructions: "Shaken then strained into a Cocktail Glass (Garnish not specified)",
      glass: 'Cocktail glass'
  },

  {
      name: "Sizz Snot",
      ingredients: [ 'Peach schnapps', 'Green Creme de Menthe', 'Lemonade'],
      instructions: "Pour the two measures of Schnapps into the cocktail glass. With a cocktail stick stir the liquid whilst adding the two or three dashes of Creme de Menthe. DO NOT mix to hard. Once the Creme de Menthe has started to be added, stop stirring. Finally, gently pour in the lemonade until the glass is topped up. Add maybe a cocktail cherry for decoration.",
      glass: 'Cocktail glass'
  },

  {
      name: "MVP's Strawberry Bomb",
      ingredients: [ 'Tequila Rose', 'Vodka', 'Strawberry schnapps'],
      instructions: "Makes 3 shots.Shake ingredients with ice and strain into shot glasses. Savor the scent for a moment and SLAM",
      glass: 'Shot glass'
  },

  {
      name: "The 5th Element",
      ingredients: [ 'Pineapple juice', 'Sprite', '151 proof rum', 'Southern Comfort', 'Everclear'],
      instructions: "Chill mug, add ice, pour Sprite and juice into mug. Then add rum and Southern Comfort. Finally add the 5th element: Everclear!",
      glass: 'Beer mug'
  },

  {
      name: "Duck Fart #2",
      ingredients: [ 'Crown Royal', 'Kahlua', 'Irish Cream'],
      instructions: "Pour Crown in first...Then the Kahlua, and Float the Baileys on top. Then Slam!",
      glass: 'Shot glass'
  },

  {
      name: "Arizona Antifreeze",
      ingredients: [ 'Vodka', 'Midori melon liqueur', 'Sweet and sour'],
      instructions: "Pour all ingredients into shot glass and slam !!!!",
      glass: 'Shot glass'
  },

  {
      name: "Purple Elastic Thunder Fuck",
      ingredients: [ 'Vodka', 'Crown Royal', 'Southern Comfort', 'Amaretto', 'Chambord raspberry liqueur', 'Pineapple juice', 'Cranberry juice'],
      instructions: "Chill, shake, and strain into shooter glass.",
      glass: 'Shot glass'
  },

  {
      name: "Perfect Flaming Dr. Pepper",
      ingredients: [ 'Amaretto', 'Kahlua', 'Root beer schnapps', '151 proof rum', 'Beer'],
      instructions: "In the shot glass, pour amaretto, then kahlua, then root beer schnapps. Finally float rum on top. Fill a beer mug (with something like bud or coors) half way. Light shot on fire, drop into beer mug and slam as fast as you can! By the way, the faster its slamed, the more it tastes like Dr. Pepper",
      glass: 'Beer mug'
  },

  {
      name: "Extreme Valentine",
      ingredients: [ 'Vodka', 'Root beer', 'Mountain Dew', 'Orange', 'Ice'],
      instructions: "Mix all ingredients into glass. Enjoy.",
      glass: 'vote'
  },

  {
      name: "Dirty Oatmeal",
      ingredients: [ 'Jägermeister', 'Irish Cream'],
      instructions: "This is a layered shot - the Bailey's must be on top",
      glass: 'Shot glass'
  },

  {
      name: "Venom",
      ingredients: [ 'Gin', 'Cocoa powder', 'Sugar'],
      instructions: "Put gin into a Malt Shaker or something close to that. Stir in the cocoa and sugar. Mix together and shake. Pour into a Champagne Glass.",
      glass: 'Champagne flute'
  },

  {
      name: "Lay Down and Shut Up!",
      ingredients: [ 'Jägermeister', 'Hot Damn', 'Kahlua', 'Cream'],
      instructions: "Shake over ice, Strain and pour.",
      glass: 'Shot glass'
  },

  {
      name: "Sax with T.",
      ingredients: [ 'Crown Royal', 'Amaretto', 'Peach schnapps', 'Pineapple juice', 'Orange juice', 'Grenadine'],
      instructions: "Mix over ice in shaker and strain.",
      glass: 'vote'
  },

  {
      name: "Bazooka Joe",
      ingredients: [ 'Irish Cream', 'Blue Curacao', 'Banana liqueur'],
      instructions: "Fill tin with ice. Mix all three ingredients with ice. Shake and strain into glass.",
      glass: 'Shot glass'
  },

  {
      name: "Stormcloud",
      ingredients: [ 'Amaretto', '151 proof rum', 'Irish Cream'],
      instructions: "Build in shot glass. Float Bailey's in amaretto and top with 151. The Bailey's should float in the middle.",
      glass: 'Shot glass'
  },

  {
      name: "Velvet Presley",
      ingredients: [ 'Bourbon', 'Chocolate milk'],
      instructions: "Pour bourbon over ice (optional). Add chocolate milk until creamy. The drink of Kings!",
      glass: 'Highball glass'
  },

  {
      name: "Gin-Dew-It",
      ingredients: [ 'Gin', 'Mountain Dew', 'Sprite', 'Lime'],
      instructions: "Pour 1 shot of your favorite Gin into a highball glass half filled with ice. Add Mountain Dew till glass is almost filled, then give it a splash of Sprite. Stir well, and garnish with a lime wedge.",
      glass: 'Highball glass'
  },

  {
      name: "DewRunRum",
      ingredients: [ '151 proof rum', 'Mountain Dew'],
      instructions: "Use Green Plastic Dixie cups 16oz. 2 Ice cubes. Place one shot of 151 into glass Pour Mountain Dew over 151 and ice.",
      glass: 'vote'
  },

  {
      name: "Sunny Sex",
      ingredients: [ 'Malibu rum', 'Orange juice', 'Vodka', 'Firewater', 'Red wine'],
      instructions: "First off, mix the orange juice with the malibu in a seperate glass, pour the firewater in the martini glass, the orange mix over it and when it's settled, pour the vodka slowly over the mixture. If you want you can stir now (in that case the above directions are void) - but i prefer not to. Now's the time for the red wine. It doesn't have to be anything special: I tend to use a Lambrusco because of the pearliness, also the amount of wine you use will affect the taste of the drink immensely. I use between 1/2 cl to 1 cl, not more, other wise the tatse of the wine will dominate too much. To get your optimal taste you'll just have to experiment a little back and forth.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Tattooed Love Goddess",
      ingredients: [ 'Vodka', 'Vanilla schnapps', 'Godiva liqueur', 'Half-and-half'],
      instructions: "Fill glass with ice, add all liquers, top off with cream and shake well.",
      glass: 'Cocktail glass'
  },

  {
      name: "Pisang cold",
      ingredients: [ 'Pisang Ambon', 'Milk', 'Ice'],
      instructions: "Put the milk into a glass and put the Pisang ambong into it also. Shake and serve it cold with ice cubes.",
      glass: 'Highball glass'
  },

  {
      name: "Latin Love",
      ingredients: [ 'Coconut rum', 'Banana rum', 'Pineapple juice', 'Cream of coconut', 'Raspberry juice', 'Ice'],
      instructions: "Blend until smooth. Pour into hurricane glass rimmed with grenadine and coconut shavings.",
      glass: 'Hurricane glass'
  },

  {
      name: "Sex on the Beach #9",
      ingredients: [ 'Malibu rum', 'Passoa', 'Orange juice', 'Cream', 'Ice'],
      instructions: "Use a shaker: first put in the ice, then add the orange juice ( you should always add the fruit juices before the alcohol! ). Put both the Passoa and the Malibu in and give it a good shake. Poor in a glass and add a cube of ice. The poor a bit of cream on top of the ice cubes ( preferably using a teaspoon or so to keep the cream from mixing with the other stuff ). Put a cherry on top and voila, there's your Sex on the Beach.",
      glass: 'Cocktail glass'
  },

  {
      name: "Rootbeer Floatie",
      ingredients: [ 'Root beer schnapps', 'Light cream'],
      instructions: "In a shot glass, float .5oz. lt. cream on top of .5oz. rootbeer schnapps.",
      glass: 'Shot glass'
  },

  {
      name: "Real Romulan Ale",
      ingredients: [ '151 proof rum', 'Everclear', 'Blue Curacao'],
      instructions: "Select a bottle (preferably decorative, but not too ornate) that will hold just over 1 liter of liquid. Combine 375ml of each ingredient in the bottle. Marvel at the entrancing color and exquisite character that is The Ale. -- Put the bottle in your freezer and wait 2 hours. -- Pour a shot and hold on to your hat!",
      glass: 'Shot glass'
  },

  {
      name: "Kamikaze #2",
      ingredients: [ 'Tequila', 'Triple sec', 'Lime juice'],
      instructions: "Pour all 3 into a shot glass and away you go.",
      glass: 'Shot glass'
  },

  {
      name: "Black and Brown",
      ingredients: [ 'Guinness stout', 'Root beer'],
      instructions: "CAREFULLY to avoid explosive head formation: Pour Beer glass half full of favorite rootbeer and top off with Guinness.",
      glass: 'Beer pilsner'
  },

  {
      name: "A Piece of Ass",
      ingredients: [ 'Amaretto', 'Southern Comfort', 'Ice', 'Sour mix'],
      instructions: "Put ice in glass. Pour in shots. Fill with Sour Mix.",
      glass: 'Highball glass'
  },

  {
      name: "Three-Legged Monkey",
      ingredients: [ 'Crown Royal', 'Amaretto', 'Pineapple juice'],
      instructions: "Shake and strain, into rocks glass.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "The Shiwala",
      ingredients: [ 'Dark rum', 'Malibu rum', 'Peach schnapps', 'Blackberry schnapps', 'Orange juice', 'Cranberry juice', 'Pineapple juice'],
      instructions: "Shake well with ice and pour into Hurricane glass. Add a floater of Myer's dark rum for an additional KICK!",
      glass: 'Hurricane glass'
  },

  {
      name: "Sex With An Alligator",
      ingredients: [ 'Jägermeister', 'Melon liqueur', 'Raspberry liqueur', 'Pineapple juice', 'Ice'],
      instructions: "Shake and strain Jägermeister, Melon, and Pineapple juice with ice and strain into rocks glass. Float Raspberry liqueur into mixture in rocks glass, like little alligator footprints.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Southern Dew",
      ingredients: [ 'Southern Comfort', 'Mountain Dew', 'Ice'],
      instructions: "basically put ice in glass, add 1 oz. southern comfort, then fill glass with mountain dew and enjoy!",
      glass: 'Highball glass'
  },

  {
      name: "Highlander",
      ingredients: [ 'Whiskey', 'Vodka', 'Gin', 'Light rum', 'Blue Curacao', 'Raspberry schnapps', 'Melon liqueur', 'Triple sec', 'Cranberry juice', 'Pineapple juice', 'Sweet and sour'],
      instructions: "Shake and strain, pour into collins glass with ice. Garnish with flag.",
      glass: 'Collins glass'
  },

  {
      name: "Avalanche",
      ingredients: [ 'Crown Royal', 'Kahlua', 'Cream'],
      instructions: "Mix in highball glass over ice, shake well.",
      glass: 'Highball glass'
  },

  {
      name: "Root Beer Float #3",
      ingredients: [ 'Galliano', 'Ice', 'Coca-Cola', 'Heavy cream'],
      instructions: "Mix Galiano, Coca-Cola and ice. Float cream on top by pouring over the back of a spoon which is just touching the top of the Coke mixture.",
      glass: 'vote'
  },

  {
      name: "Golden Nipple",
      ingredients: [ 'Goldschlager', 'Butterscotch schnapps', 'Irish Cream'],
      instructions: "Measurements made for 1.5 oz. shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Salem Witch",
      ingredients: [ 'Vodka', 'Raspberry schnapps', 'Midori melon liqueur', 'Lime juice', 'Grenadine', 'Sour mix', 'Soda water'],
      instructions: "In a collins glass with ice, pour vodka, midori, and raspberry schnapps. Add a splash of lime juice. Fill 2/3 with sour mix and the rest with soda water (or seltzer). Stir gently, and finally top with a splash of grenadine.",
      glass: 'Collins glass'
  },

  {
      name: "Boom box",
      ingredients: [ 'Vodka', 'White wine', 'Coffee'],
      instructions: "Vodka and White first the coffee. The coffee must still be hot",
      glass: 'Shot glass'
  },

  {
      name: "Spudgun",
      ingredients: [ 'Drambuie', 'Vodka', 'Beer'],
      instructions: "mix it together and hurl it down",
      glass: 'Beer mug'
  },

  {
      name: "Jake-Knife",
      ingredients: [ 'Jägermeister', 'Coca-Cola', '151 proof rum'],
      instructions: "Pour Jägermeister in shaker over ice. Fill with coke and shake til your arms are sore. Pour into glass and top with a smidgen of Bacrdi 151. If your feeling mean, feel free to light it!",
      glass: 'Cocktail glass'
  },

  {
      name: "FuzzB@ll",
      ingredients: [ 'Peach schnapps', 'Sprite'],
      instructions: "Fill cup 2/3rds with Sprite, fill other 1/3 of cup with Peach Schnapps, add ice.",
      glass: 'Highball glass'
  },

  {
      name: "Golden Sunrise",
      ingredients: [ 'Amaretto', 'Spiced rum', 'Wildberry schnapps', 'Key Largo schnapps', 'Razzmatazz', 'Orange juice', 'Pineapple juice'],
      instructions: "Mix all ingredients together and shake!!!!",
      glass: 'vote'
  },

  {
      name: "Winegum",
      ingredients: [ 'Vodka', 'Lemon soda', 'Apricot'],
      instructions: "Mix the Vodka with the other ingredients after taste.",
      glass: 'Highball glass'
  },

  {
      name: "B-52 #6",
      ingredients: [ 'Amaretto', 'Irish Cream', 'Rum'],
      instructions: "First add the Amaretto, then the Bailey's, and then carefully the Rum. Put the shot on fire and drink it with a straw, or you have another choice: When the shot is on fire you slap it to extinguish the fire and then you drink it.",
      glass: 'Shot glass'
  },

  {
      name: "Romona Banana",
      ingredients: [ 'Amaretto', 'Banana liqueur', 'Peppermint schnapps'],
      instructions: "Shake all ingredients and serve in shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Brandon and Will's Coke Float",
      ingredients: [ 'Vanilla ice-cream', 'Coca-Cola', 'Bourbon'],
      instructions: "Scoop two large scoops of vanilla ice-cream into frosted beer mug. Next, add 2 ounces Maker's Mark. Then, pour in coke. Gently stir and enjoy.",
      glass: 'Beer mug'
  },

  {
      name: "Mosstrooper",
      ingredients: [ 'Ice', 'Root beer', '7-Up'],
      instructions: "Start with half a glass of ice. Fill almost full with root beer and add a little 7-Up. Just stir with a straw or other convenient item. Drink before the ice melts, otherwise it tastes bitter.",
      glass: 'vote'
  },

  {
      name: "Triplesex",
      ingredients: [ 'Vodka', 'Triple sec', 'Sweet and sour', 'Pineapple juice'],
      instructions: "Fill a glass with ice. Pour first 3 three ingredients then adjust pineapple juice to taste. Suck it down:)",
      glass: 'vote'
  },

  {
      name: "SkyLab",
      ingredients: [ 'Vodka', 'Rum', 'Peach liqueur', 'Blue Curacao', 'Pineapple juice', 'Orange juice', 'Sprite'],
      instructions: "Pour all ingredients into a shaker, then strain into chilled glass.",
      glass: 'Hurricane glass'
  },

  {
      name: "Eben's Magic Juice (Orange)",
      ingredients: [ 'Orange soda', 'Vodka', 'Kool-Aid', 'Sugar'],
      instructions: "Add the Vodka to orange soda and add Kool Aid mix (make sure it is the kind of Kool Aid mix with no sugar added). Pour a small amount of sugar into the mixture and stir (carefully. it IS carbonated!). Taste and add sugar if needed. Enjoy!",
      glass: 'vote'
  },

  {
      name: "Sex on the Beach #10",
      ingredients: [ 'Vodka', 'Triple sec', 'Passoa', 'Orange juice'],
      instructions: "shake like hell whith some ice",
      glass: 'vote'
  },

  {
      name: "Malibu Tequichi",
      ingredients: [ 'Malibu rum', 'Tequila', 'Pineapple juice'],
      instructions: "Add some ice. Twist and shake that thing. Serve at once.",
      glass: 'Champagne flute'
  },

  {
      name: "Tequila BoomBoom",
      ingredients: [ 'Tequila', 'Tabasco sauce', 'Tonic water'],
      instructions: "Throw everything in a glass. Put a towel over the glass slam it on the bar. Before the foam hits the edge off the glass you must have finished it .",
      glass: 'Cocktail glass'
  },

  {
      name: "Blow Job #2",
      ingredients: [ 'Butterscotch schnapps', 'Irish cream', 'Whipped cream'],
      instructions: "Layer the butterscotch schnapps and Irish Cream by pouring the Irish Cream over the back of a spoon. Spray the Whipped cream on top, pile it about 1-2 inches high. This shot must be taken without using your hands. Pick up the shot glass between your lips and tilt back.",
      glass: 'Shot glass'
  },

  {
      name: "Gorilla Snot #2",
      ingredients: [ 'Melon liqueur', 'Creme de Banane', 'Advocaat'],
      instructions: "Layer the creme de banane over the melon liqueur. Then drop the Advocaat into the middle of the creme de banane. The Advocaat should hang in the middle if poured correctly.",
      glass: 'Shot glass'
  },

  {
      name: "Chocolate Almond",
      ingredients: [ 'Amaretto', 'Dark Creme de Cacao', 'Irish cream'],
      instructions: "Layer the ingredients in the order listed.",
      glass: 'Shot glass'
  },

  {
      name: "Chocolate Shock",
      ingredients: [ 'Hot chocolate', 'Aftershock'],
      instructions: "Add 1 shot of After Shock to 8 oz cup of hot chocolate and enjoy.",
      glass: 'Coffee mug'
  },

  {
      name: "Apertif d'Absinthe",
      ingredients: [ 'Pernod', 'Wormwood', 'Water', 'Sugar'],
      instructions: "Add wormwood to shot of pernod add sugar and water serve over ice.",
      glass: 'Parfait glass'
  },

  {
      name: "Diablo's Blood",
      ingredients: [ 'Red wine', 'Coca-Cola'],
      instructions: "Pour both ingredients together and mix well. Serve cold.",
      glass: 'Cocktail glass'
  },

  {
      name: "Dragon's Breath",
      ingredients: [ 'Firewater', '151 proof rum'],
      instructions: "pour in fire water float bacardi 151 rum on top ignite",
      glass: 'Shot glass'
  },

  {
      name: "Green Milkshake",
      ingredients: [ 'Milk', 'Green Creme de Menthe', 'Triple sec'],
      instructions: "Pour Grenadine on the edge of the glass and then sugar to create a red edge on the glass. Then pour all three ingredienses in a shaker and shake it well with crushed ice. Finally pour it in the glass.",
      glass: 'Highball glass'
  },

  {
      name: "Schnapp Pop",
      ingredients: [ 'Wildberry schnapps', 'Club soda', 'Ice'],
      instructions: "Fill glass with ice, add schnapps and fill with club soda. Turn over once to mix. Serve with straw.",
      glass: 'Highball glass'
  },

  {
      name: "Eliminator",
      ingredients: [ 'Bourbon', 'Tequila', 'Orange soda', 'Ice'],
      instructions: "Mix all ingredients in tall glass. Add more orange soda if it is unpalitable",
      glass: 'Highball glass'
  },

  {
      name: "Flaming Lamborghini",
      ingredients: [ 'Kahlua', 'Sambuca', 'Blue Curacao', 'Irish Cream'],
      instructions: "Pour the Sambuca and Kahlua into the Cocktail Glass and give the drinker a straw. Pour the Baileys and Blue Curacao into two sepsrate shot glasses either side of the cocktail glass. Set light the concotion in the cocktail glass and start to drink through the straw (this drink should be drunk in one) , as the bottom of the glass is reached put out the fire by pouring the Baileys and Blue Curacao into the cocktail glass and keep drinking till it's all gone!!",
      glass: 'Cocktail glass'
  },

  {
      name: "Death Wish",
      ingredients: [ 'Southern Comfort', 'Dr. Pepper'],
      instructions: "Pour in cup and stir.",
      glass: 'Beer mug'
  },

  {
      name: "Shandy",
      ingredients: [ 'Beer', 'Ginger ale'],
      instructions: "Fill a glass half full of beer (lighter beer works better). Fill the rest with Ginger Ale or 7-up (preference)",
      glass: 'Beer mug'
  },

  {
      name: "Otter Pop",
      ingredients: [ 'White rum', 'Blue Curacao', 'Sweet and sour', '7-Up'],
      instructions: "mix all ingrediants into a shaker filled with ice, then strain out drink into shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Pink Banana",
      ingredients: [ 'Creme de Banane', 'Pink lemonade'],
      instructions: "Fill glass half way with ice. Pour in 1 oz. of creme de banane and then 5 oz. of pink lemonade.",
      glass: 'Collins glass'
  },

  {
      name: "Dolt Bolt",
      ingredients: [ 'Everclear', 'Rumple Minze', 'Goldschlager'],
      instructions: "pour into shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Richie 50",
      ingredients: [ 'Absolut Vodka', 'Orange juice', 'Cherry'],
      instructions: "Fill one 16oz glass half full of vodka, add orange juice, stir, and add a cherry.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Lube Job",
      ingredients: [ 'Vodka', 'Irish cream'],
      instructions: "It is best to use a tall shot glass. Fill it halfway with the irish cream: fill it the rest of the way with vodka and shoot it.",
      glass: 'Shot glass'
  },

  {
      name: "Iceberg in Radioactive water",
      ingredients: [ 'Midori melon liqueur', 'Malibu rum', 'Banana liqueur', 'Pineapple juice', 'Vanilla ice-cream'],
      instructions: "Place all drinks into glass and add ice-cream at the end.",
      glass: 'vote'
  },

  {
      name: "Southern Peach",
      ingredients: [ 'Southern Comfort', 'Peach schnapps', 'Triple sec', 'Absolut Citron'],
      instructions: "add all with ice shack and strain",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Zipperhead",
      ingredients: [ 'Chambord raspberry liqueur', 'Vodka', 'Soda water'],
      instructions: "Fill glass with rocks, add straw before putting in liquor. Then add the ingredients in order, trying to keep layered as much as possible (i.e. Chambord on bottom, then Vodka, Then soda on top).",
      glass: 'Whiskey sour glass'
  },

  {
      name: "A Gilligan's Island",
      ingredients: [ 'Vodka', 'Peach schnapps', 'Orange juice', 'Cranberry juice'],
      instructions: "Shaken, not stirred!",
      glass: 'Collins glass'
  },

  {
      name: "Danger",
      ingredients: [ 'Beer', 'Vodka'],
      instructions: "Put all the indgrediens into a glass and serve it cold.",
      glass: 'Beer mug'
  },

  {
      name: "Terror From the Deep",
      ingredients: [ 'Hot Damn', 'Dr. Pepper'],
      instructions: "Mix ingredients in glass. Drink if you can.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Grapefruit Teaser",
      ingredients: [ 'Grapefruit juice', 'Malibu rum', 'Lime juice'],
      instructions: "Combine & stir.",
      glass: 'vote'
  },

  {
      name: "Berrynice",
      ingredients: [ 'Strawberry liqueur', 'Peach schnapps', 'Midori melon liqueur', 'Coconut cream', 'Sugar syrup', 'Cream', 'Fruit juice'],
      instructions: "shake with ice garnish with with strawberry on glass,with another summer berry held on with toothpick",
      glass: 'vote'
  },

  {
      name: "Volvo",
      ingredients: [ 'Triple sec', 'Grand Marnier', 'Vodka', 'Cognac', 'Apricot brandy'],
      instructions: "Mix in the order mentioned. You can use what ever kind of cognac, and vodka you prefer.",
      glass: 'Shot glass'
  },

  {
      name: "The Nog",
      ingredients: [ 'Midori melon liqueur', 'Triple sec', 'Light rum', 'Pineapple juice'],
      instructions: "Pour Midori, triple sec, and rum into a 12 ounce highball glass filled with ice. Fill the rest of the glass with pineapple juice. Stir. Drink.",
      glass: 'Highball glass'
  },

  {
      name: "Kioki Coffee",
      ingredients: [ 'Kahlua', 'Brandy', 'Coffee'],
      instructions: "Stir. Add whipped cream to the top.",
      glass: 'Coffee mug'
  },

  {
      name: "The Pineapple Drink",
      ingredients: [ 'Light rum', 'Pineapple', 'Pineapple juice', 'Sweet and sour', 'Sprite'],
      instructions: "Pour rum over pineapple chunk in a tall glass. Add pineapple juice and sweet and sour. Top with Sprite. Stir and serve.",
      glass: 'vote'
  },

  {
      name: "Pure Ecstacy",
      ingredients: [ 'Kahlua', 'Irish Cream', 'Ice', 'Vodka'],
      instructions: "In a blender add the Bailey's and Kahlua do not fill past 1/3. Add enough ice to fill the blender. Blend on a low speed continually adding ice until a milkshake texture is achieved. Add, the vodka, more for strong less for weak. Mix in. Serve.",
      glass: 'vote'
  },

  {
      name: "Sake Bomb",
      ingredients: [ 'Sake', 'Beer'],
      instructions: "It's real easy. Drop the shot of Sake into a glass of beer and the just SLAM IT !!!!!!!!!!",
      glass: 'Beer mug'
  },

  {
      name: "Tiger Woods",
      ingredients: [ 'Vodka', 'Lemon juice', 'Cranberry juice'],
      instructions: "Fill a highball with ice, add the vodka, lemon juice and cran. Garnish with a lemon wedge and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Apple Pie with A Crust",
      ingredients: [ 'Apple juice', 'Malibu rum', 'Cinnamon'],
      instructions: "Just mix the two liquids and sprinkle in the cinnamon. Serve either cold or heated.",
      glass: 'vote'
  },

  {
      name: "The Peg",
      ingredients: [ 'Bourbon', 'Coca-Cola', 'Lime juice', 'Ice'],
      instructions: "Put ice cubes in glass. Add bourbon, coke and lime juice. Garnish with slice of lime (optional)",
      glass: 'Highball glass'
  },

  {
      name: "Irish Mint",
      ingredients: [ 'Irish Cream', 'Green Creme de Menthe', 'Milk'],
      instructions: "Pour the milk first and then the Irish Cream - the parts are only guesses, I tend to go by color. You want a creamy beige that has only a slight hint of alcohol. Add just enough Creme de Menthe so as to turn the drink slightly green. Stir it up and serve cold.",
      glass: 'vote'
  },

  {
      name: "Umbrella Man Special",
      ingredients: [ 'Vodka', 'Kahlua', 'Irish Cream', 'Grand Marnier', 'Drambuie'],
      instructions: "Mix all ingredients in a shaker. Serve with straw and ice cubes, put a cocktail umbrella beside the straw in the glass.",
      glass: 'Highball glass'
  },

  {
      name: "Flaming Moz",
      ingredients: [ 'Blue Curacao', 'Sambuca', 'Green Chartreuse'],
      instructions: "Place a short rock (wide mouthed spirit glass) on bar. Pour the blue curacao, white sambuca and chatreuse into a brandy balloon (snifter). Place the brandy balloon horizontally, balancing on the mouth of the short rock. -- Ignite the alcohol in the brandy balloon. Rotate the brandy balloon (like a cement mixer). Pour mixture from brandy balloon to short rock while it is alight. The stream of alcohol falling between the glasses should form a waterfall of fire cascading into the short rock. (I am a poet also) Use the upside down brandy balloon to suffocate the drink in the short rock. Be sure the flames are out. -- Remove the brandy balloon and inhale the fumes. Shoot the drink. -- Hold on to the bar very tightly!",
      glass: 'vote'
  },

  {
      name: "Cajun Martini",
      ingredients: [ 'Vodka', 'Vermouth'],
      instructions: "Garnish with jalapeno pepper.",
      glass: 'Cocktail glass'
  },

  {
      name: "Zorbatini",
      ingredients: [ 'Vodka', 'Ouzo'],
      instructions: "Prepare like a Martini. Garnish with a green olive.",
      glass: 'Cocktail glass'
  },

  {
      name: "Vodka Fizz",
      ingredients: [ 'Vodka', 'Half-and-half', 'Limeade', 'Ice', 'Nutmeg'],
      instructions: "Blend all ingredients, save nutmeg. Pour into large white wine glass and sprinkle nutmeg on top.",
      glass: 'White wine glass'
  },

  {
      name: "Black-Eyed Susan",
      ingredients: [ 'Vodka', 'Light rum', 'Triple sec', 'Lime juice', 'Pineapple juice', 'Orange juice', 'Ice'],
      instructions: "Chill all ingredients. Just before serving combine in a punch bowl. Unmold ice ring and float in bowl. Serve in tall glasses. Makes 10 large servings.",
      glass: 'Punch bowl'
  },

  {
      name: "Gorilla Fart #4",
      ingredients: [ 'Bourbon', 'Bourbon', 'Crown Royal'],
      instructions: "Shake and Strain, pour into rocks glass, straight up.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Killer Kool-Aid #2",
      ingredients: [ 'Malibu rum', 'Banana liqueur', 'Raspberry liqueur', 'Melon liqueur', 'Blue Curacao', 'Amaretto', 'Triple sec', 'Sweet and sour', 'Orange juice', 'Pineapple juice', 'Cranberry juice'],
      instructions: "Shake and strain, pour into collins glass filled with ice. Garnish with a flag, or a flag and a pineapple wedge, if carried by your bar.",
      glass: 'Collins glass'
  },

  {
      name: "Bloated Bag of Monkey Spunk",
      ingredients: [ 'Rum', 'Peach schnapps', 'Grand Marnier', 'Pineapple juice', 'Orange juice'],
      instructions: "Shake and strain into collins glass with ice. Garnish with a cherry.",
      glass: 'Hurricane glass'
  },

  {
      name: "Dewing the Captain",
      ingredients: [ 'Spiced rum', 'Mountain Dew'],
      instructions: "Pour 1oz Morgan over crushed Ice Add Mountain Dew",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Big Dumb Russian",
      ingredients: [ 'Ice', 'Vodka', 'Sprite', 'Pineapple juice', 'Maui'],
      instructions: "Fill the glass with ice. I like to use a standard beer glass. Add about 2 shots of vodka. Then fill the glass about 3/4th of the way with Sprite. Then add just a splash of pineapple juice. Finally, add the Blue Maui until you get a faint (almost skyblue) blue color. Stir.",
      glass: 'vote'
  },

  {
      name: "Electric Screwdriver",
      ingredients: [ 'Southern Comfort', 'Orange juice', 'Amaretto'],
      instructions: "dump the shots in glass then fill with oj to taste",
      glass: 'vote'
  },

  {
      name: "Wicked Tasty Treat",
      ingredients: [ 'Vodka', 'Amaretto', 'Kahlua', 'Irish Cream', 'Cream'],
      instructions: "Dip the rim of cocktail glass in Amaretto and then into powdered sugar. Shake all alcohol and cream with ice and strain into rimmed cocktail glass. Garnish with Cinnamon stick and whipped cream (optional)",
      glass: 'Cocktail glass'
  },

  {
      name: "Sit On My Face Mary Jane",
      ingredients: [ 'Irish Cream', 'Frangelico', 'Crown Royal'],
      instructions: "Pour all three ingredients into the shot glass and shake until mixed together",
      glass: 'Shot glass'
  },

  {
      name: "Witch's Clit",
      ingredients: [ 'Lemon-lime soda', 'Vodka'],
      instructions: "Pour out 1/4 gallon gatorade, pour in 1/4 gallon vodka. Cap and shake.",
      glass: 'Pitcher'
  },

  {
      name: "Satan's Piss",
      ingredients: [ '151 proof rum', 'Tabasco sauce'],
      instructions: "Pour rum into shot glass. Add tabasco to the top. Serve room temperature.",
      glass: 'Shot glass'
  },

  {
      name: "Easy does it",
      ingredients: [ 'Everclear', 'Kahlua', 'Irish Cream'],
      instructions: "Bailey's first. Pour Kahlua. Float Everlear. Bottoms up!",
      glass: 'Shot glass'
  },

  {
      name: "Skip And Go Naked #2",
      ingredients: [ 'Beer', 'Lemonade', 'Southern Comfort'],
      instructions: "Pour beer into mug. Add lemonade. Float SoCo on top.",
      glass: 'Beer mug'
  },

  {
      name: "P.M.F.",
      ingredients: [ '151 proof rum', 'Banana liqueur', 'Irish Cream'],
      instructions: "Fill shaker with ice, add ingreidients to taste. Don't want rum to overpower. Shake well, pour into shot glasses.",
      glass: 'Shot glass'
  },

  {
      name: "Radioactive Long Island Iced Tea",
      ingredients: [ 'Rum', 'Vodka', 'Tequila', 'Gin', 'Triple sec', 'Chambord raspberry liqueur', 'Midori melon liqueur', 'Malibu rum'],
      instructions: "Pour all ingredients over ice in a very tall glass. Sip cautiously.",
      glass: 'vote'
  },

  {
      name: "Shot-gun",
      ingredients: [ 'Bourbon', 'Bourbon', 'Bourbon'],
      instructions: "Pour one part Jack Daneils and one part bourbon into shot glass then float bourbon on top.",
      glass: 'Shot glass'
  },

  {
      name: "Bible Belt",
      ingredients: [ 'Southern Comfort', 'Triple sec', 'Lime', 'Sour mix'],
      instructions: "Mix all ingredients, and pour over ice.",
      glass: 'vote'
  },

  {
      name: "Irish Curdling Cow",
      ingredients: [ 'Irish Cream', 'Bourbon', 'Vodka', 'Orange juice'],
      instructions: "Pour Irish Cream, Vodka, and Bourbon in a glass. Add some ice and mix in the orange juice.",
      glass: 'Highball glass'
  },

  {
      name: "Creamsicle #2",
      ingredients: [ 'Amaretto', 'Triple sec', 'Sour mix', 'Orange juice', 'Soda water'],
      instructions: "stir with a straw",
      glass: 'Highball glass'
  },

  {
      name: "Fuck in the Graveyard",
      ingredients: [ 'Vodka', 'Rum', 'Blueberry schnapps', 'Apple schnapps', 'Blue Curacao', 'Chambord raspberry liqueur', 'Cranberry juice', 'Orange juice'],
      instructions: "Shake well, serve cold",
      glass: 'Shot glass'
  },

  {
      name: "Sweet Tooth",
      ingredients: [ 'Godiva liqueur', 'Milk'],
      instructions: "Put 2 shots Godiva Liquour into a glass, add as much or as little milk as you would like.",
      glass: 'vote'
  },

  {
      name: "Downshift",
      ingredients: [ 'Fruit punch', 'Sprite', 'Tequila', '151 proof rum'],
      instructions: "Start with the Sprite. Next comes the tequila. After that, add the Minute Maid Fruit Punch, then float the 151. Rocks optional.",
      glass: 'Hurricane glass'
  },

  {
      name: "Pink Penocha",
      ingredients: [ 'Everclear', 'Vodka', 'Peach schnapps', 'Orange juice', 'Cranberry juice'],
      instructions: "mix all ingredients into bowl keep iced stir frequently",
      glass: 'Punch bowl'
  },

  {
      name: "Angel's Tit",
      ingredients: [ 'Creme de Cacao', 'Cherry liqueur', 'Half-and-half', 'Cherry'],
      instructions: "Pour ingredients into glass in order given, carefully so each layer floats on top of the previous one with mixing. Chill for 1/2 hour before serving.",
      glass: 'Cocktail glass'
  },

  {
      name: "Orange Whip",
      ingredients: [ 'Orange juice', 'Rum', 'Vodka', 'Cream', 'Ice'],
      instructions: "Pour ingredients over ice and stir.",
      glass: 'vote'
  },

  {
      name: "Chocolate Slam",
      ingredients: [ 'Vodka', 'Chocolate syrup', 'Coca-Cola'],
      instructions: "First add the chocolate syrup smoothly on the bottom of the glass. Then mix Vodka in followed by Coca-cola",
      glass: 'vote'
  },

  {
      name: "Bruised Heart",
      ingredients: [ 'Vodka', 'Chambord raspberry liqueur', 'Peachtree schnapps', 'Cranberry juice'],
      instructions: "Pour all ingredients in a mixing tin over ice, stir, and strain into shot glass",
      glass: 'Shot glass'
  },

  {
      name: "Fireball #2",
      ingredients: [ 'Southern Comfort', 'Cinnamon schnapps', 'Tabasco sauce', 'Cherry'],
      instructions: "Mix the Schnapps, Southern Comfort, and Tabasco. Pour into cocktail glass. A cherry may be added.",
      glass: 'Cocktail glass'
  },

  {
      name: "Electric Lemonade #1",
      ingredients: [ 'Ice', 'Light rum', 'Blue Curacao', 'Sweet and sour', '7-Up'],
      instructions: "Combine all ingredients in Collins glass filled with ice.",
      glass: 'Collins glass'
  },

  {
      name: "Gideon's Green Dinosaur",
      ingredients: [ 'Dark rum', 'Vodka', 'Triple sec', 'Tequila', 'Melon liqueur', 'Mountain Dew'],
      instructions: "Add all ingredients in collins glass with ice and stir.",
      glass: 'Collins glass'
  },

  {
      name: "Sit on my face",
      ingredients: [ 'Kahlua', 'Frangelico', 'Irish Cream'],
      instructions: "Layer in order.",
      glass: 'Shot glass'
  },

  {
      name: "Rearbuster",
      ingredients: [ 'Tequila', 'Kahlua', 'Cranberry juice'],
      instructions: "Pour tequila and Kahlua into glass. Add ice. Fill with cranberry juice and stir with straw. A lemon wedge and umbrella are a nice touch.",
      glass: 'Highball glass'
  },

  {
      name: "A True Amaretto Sour",
      ingredients: [ 'Amaretto', 'Lemon', 'Ice', 'Maraschino cherry'],
      instructions: "Rub the rim of an old fashioned glass with lemon, and dip repeatedly into granulated sugar until it has a good frosted rim. Shake a jigger of Amaretto with the juice of 1/2 a lemon. Strain into glass and add ice. Garnish with a Marachino Cherry.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Kool First Aid",
      ingredients: [ '151 proof rum', 'Kool-Aid'],
      instructions: "Add Kool Aid to a double shot glass, and top with rum. Slam and shoot.",
      glass: 'Shot glass'
  },

  {
      name: "Cookie Monster #1",
      ingredients: [ 'Maui', 'Pineapple juice', 'Everclear'],
      instructions: "Mix and stir and pour over ice",
      glass: 'vote'
  },

  {
      name: "Tickle me Elmo",
      ingredients: [ 'Strawberry schnapps', 'Pineapple juice', 'Everclear'],
      instructions: "Mix and stir and pour over ice",
      glass: 'vote'
  },

  {
      name: "Kool-Aid (Boulder style)",
      ingredients: [ 'Amaretto', 'Southern Comfort', 'Cranberry juice', 'Grenadine'],
      instructions: "Shake all ingredients on ice and strain.",
      glass: 'Shot glass'
  },

  {
      name: "Hop, Skip, and Go Naked",
      ingredients: [ 'Limeade', 'Lemonade', 'Peach schnapps', '151 proof rum'],
      instructions: "Mix all ingredients in blender with ice, to the consistency of a margarita.",
      glass: 'Highball glass'
  },

  {
      name: "Super Sprite",
      ingredients: [ 'Sprite', 'Lime vodka'],
      instructions: "First drink 1/4 of the Sprite and fill up the 1/2l bottle with Hammer Lime vodka and drink!",
      glass: 'vote'
  },

  {
      name: "Tootsy Pop",
      ingredients: [ 'Midori melon liqueur', 'Peach schnapps', 'Orange juice'],
      instructions: "Pour orange juice in first, then the peach schnaps. Then pour the shot of midori down the side of the glass, so that the midori forms a layer at the bottom of the glass.",
      glass: 'Whiskey sour glass'
  },

  {
      name: "Rumka",
      ingredients: [ 'Vodka', 'Spiced rum'],
      instructions: "Mix it half and half and serve chilled. Enjoy!",
      glass: 'Shot glass'
  },

  {
      name: "Aqua",
      ingredients: [ 'Vodka', 'Irish Cream', 'Blue Curacao', '7-Up'],
      instructions: "Shake Vodka, Bailey's and Blue Curacao with ice. Pour into glass and fill up with 7-UP.",
      glass: 'Highball glass'
  },

  {
      name: "Irish Russian",
      ingredients: [ 'Vodka', 'Kahlua', 'Coca-Cola', 'Guinness stout'],
      instructions: "Add the ingredients in the order listed in the recipe. Care must be taken when adding the Guinness to prevent an excess of foam. Do Not add ice.",
      glass: 'Highball glass'
  },

  {
      name: "Tequila and Tonic",
      ingredients: [ 'Gold tequila', 'Tonic water', 'Ice', 'Lime'],
      instructions: "Pour 2 1/2 ounces Cuervo Gold over ice cubes in a highball glass. Fill with tonic. Garnish with lime wedge.",
      glass: 'Highball glass'
  },

  {
      name: "Wolfsbane",
      ingredients: [ 'Vodka', 'Cherry brandy', 'Cream', 'Egg white', 'Lemon juice', 'Sugar'],
      instructions: "Rub inside of glass with lemon juice, then sprinkle with sugar. Freeze glass to achieve a frosted affect. Shake together the other ingrediants. Pour into frosted glass and enjoy!",
      glass: 'Highball glass'
  },

  {
      name: "Chocolate Covered Banana",
      ingredients: [ 'Creme de Banane', 'Dark Creme de Cacao', 'Cream'],
      instructions: "Pour all ingredients over ice. Garnish with slice of banana.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Smooth Black Russian",
      ingredients: [ 'Vodka', 'Kahlua', 'Coca-Cola', 'Guinness stout'],
      instructions: "Pour vodka in glass followed by the Kahlua. Add the dash of coke (to taste) and stir. Top up the glass with guinness and serve.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Auburn Headbanger",
      ingredients: [ 'Jägermeister', 'Goldschlager'],
      instructions: "Mix in spread glass over ice. Strain and pour in shot glass. Sit down before shotting. ENJOY!!",
      glass: 'Shot glass'
  },

  {
      name: "Paisano",
      ingredients: [ 'Vodka', 'Frangelico', 'Milk'],
      instructions: "Ice Glass. Add Vodka and Frangelico just like any other drink. Fill with milk. Shake because it is a milk drink.",
      glass: 'Highball glass'
  },

  {
      name: "Kamikaze Version",
      ingredients: [ 'Vodka', 'Triple sec', 'Blue Curacao', 'Sour mix'],
      instructions: "Ice Cocktail glass. Add Vodka and mixers. Fill with sour mix and shake because of sour mix.",
      glass: 'Cocktail glass'
  },

  {
      name: "Body Shot",
      ingredients: [ 'Vodka', 'Sugar', 'Lemon'],
      instructions: "Using a partner of the opposite sex, lick their kneck to moisten. Pour packet of sugar onto their kneck. Place wedge of lemon in their mouth with the skin pointed inward. You first lick the sugar from their kneck, then shoot the vodka, then suck the lemon from their mouth (while gently holding back of their kneck.",
      glass: 'Shot glass'
  },

  {
      name: "Green Froggy",
      ingredients: [ 'Vodka', 'Mountain Dew'],
      instructions: "just pour and stur",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Pink Panty Pulldowns #2",
      ingredients: [ 'Vodka', 'Lemon juice', 'Cherries', 'Sprite'],
      instructions: "In a 2 gallon jug pour in 9oz of marciano cherries and the juice. Then pour in fifth of vodka over cherries and let soak for a few minutes. Then pour in lemon juice and fill jug with sprite. Pour mixture into serving container and strain out cherries. When serving drinks over ice drop cherries in.",
      glass: 'vote'
  },

  {
      name: "Zima Blaster",
      ingredients: [ 'Zima', 'Chambord raspberry liqueur'],
      instructions: "Fill glass with ice. Pour in Chambord, then fill with Zima. Mix and enjoy.",
      glass: 'Hurricane glass'
  },

  {
      name: "Colorado Pitbull",
      ingredients: [ 'Spiced rum', 'Kahlua', 'Cream', 'Coca-Cola'],
      instructions: "In a shaker mix Spiced Rum, Kahlua, and Cream. Pur into a Mason Jar filled with ice and add a splach of Coca-Cola. Garnish with a couple of Filberts.",
      glass: 'Mason jar'
  },

  {
      name: "Rockin' Killer Koolaid",
      ingredients: [ 'Gin', 'Amaretto', 'Melon liqueur', 'Vodka', 'Sprite', 'Orange juice', 'Pineapple juice'],
      instructions: "Put alcohol in shaker with ice, shake. Put in hurricane glass over Grenadine to taste. Add in orange juice, pineapple juice and sprite to taste. Garnish with candied cherry.",
      glass: 'Hurricane glass'
  },

  {
      name: "Unabomber",
      ingredients: [ 'Gin', 'Vodka', 'Triple sec', 'Lime juice'],
      instructions: "Mix all ingredients, place in shot glass. Introduce to mouth.",
      glass: 'Shot glass'
  },

  {
      name: "Cherry Cheesecake",
      ingredients: [ 'Vanilla schnapps', 'Cranberry juice'],
      instructions: "Add 3/4 jigger of Schnapps then layer cranberry juice on top. May take a few practice shots to find the right amounts of each.",
      glass: 'Shot glass'
  },

  {
      name: "Jet Pilot",
      ingredients: [ 'Spiced rum', 'Malibu rum', 'Rum', 'Bacardi Limon', 'Cranberry juice', 'Orange juice', 'Pineapple juice', 'Grenadine', 'Southern Comfort'],
      instructions: "Add ice cubes to a mason jar glass. Pour 1 oz of each type of rum over ice. Pour 2 oz's of each juice over ice. Add 1 tsp of grenadine. Top with double shot of southern comfort. More juice could be used to mask liquor. Drink can be stirred if preffered.",
      glass: 'Mason jar'
  },

  {
      name: "Buccaneer",
      ingredients: [ 'Corona', 'Bacardi Limon'],
      instructions: "Pour the corona into an 18oz beer glass pour the bacardi limon into the beer stir very gently",
      glass: 'Beer pilsner'
  },

  {
      name: "Gin Bucket",
      ingredients: [ 'Gin', 'Fruit punch', 'Lemonade', 'Limeade', 'Cherries'],
      instructions: "For the full effect you should use a large Folgers coffee can or a metal bucket. First, fill the can half full with ice and add the gin(the whole bottle). Next, add the concentrates and cherries. Finally, shake the can until its ready to drink.",
      glass: 'Pitcher'
  },

  {
      name: "The Moby",
      ingredients: [ 'Vodka', 'Surge'],
      instructions: "pour surge then vodka, enjoy!",
      glass: 'Highball glass'
  },

  {
      name: "Coco's Cocktail",
      ingredients: [ 'Gin', 'Campari', 'Dry Vermouth', 'Lime', 'Ice'],
      instructions: "Mix in a shaker and serve with a slice of lime",
      glass: 'Cocktail glass'
  },

  {
      name: "Bushwacker #1",
      ingredients: [ 'Cream of coconut', 'Kahlua', 'Black rum', 'Dark Creme de Cacao', 'Milk', 'Ice'],
      instructions: "Combine in blender, blend until smooth, serves two in 12oz cups.",
      glass: 'vote'
  },

  {
      name: "Miami Ice",
      ingredients: [ 'Vodka', 'Rum', 'Gin', 'Triple sec', 'Lemon-lime soda', 'Orange juice', 'Peach schnapps'],
      instructions: "Just add EVERYTHING except the Peach Schnapps into the MUG, Lightly stir and then add as much ice (smallest cubes possible) you can fit in. NOTE: Leave just enough room at the top for the 1/4 oz. of Peach Schnapps.",
      glass: 'Beer mug'
  },

  {
      name: "Popper",
      ingredients: [ 'Tequila', '7-Up'],
      instructions: "Pour tequila into shot glass. Fill the rest of glass with 7-up. Cover top of glass with hand and slam hard onto counter or bar. This causes shot to fizz, so drink quickly!",
      glass: 'Shot glass'
  },

  {
      name: "Electric Lemonade #2",
      ingredients: [ 'Blue Curacao', 'Light rum', 'Sweet and sour', 'Coca-Cola'],
      instructions: "fill collins glass with ice pour in rum and blue curacao pour in sweet & sour mix splash cola lemon twist garnish",
      glass: 'Collins glass'
  },

  {
      name: "Homemade Kahlua",
      ingredients: [ 'Sugar', 'Corn syrup', 'Coffee', 'Vanilla extract', 'Water', 'Vodka'],
      instructions: "Dissolve sugar in 2 cups of boiling water and add corn syrup. Dissolve the instant coffee in the remaining water. Pour syrup and coffee in a gallon jug. Let it cool. Add vodka and vanilla when cold. For the best result, let the mixture mature for 4-5 weeks.",
      glass: 'vote'
  },

  {
      name: "Coconut Frappe",
      ingredients: [ 'Irish Cream', 'Malibu rum', 'Milk'],
      instructions: "Shake or blend until frothy, then pour over ice and garnish with toasted coconut.",
      glass: 'Highball glass'
  },

  {
      name: "Blow Job #4",
      ingredients: [ 'Green Creme de Menthe', 'Irish Cream'],
      instructions: "Layer each ingredient into a Sherry Glass in order as listed. Indulge in this creamy minty flavour!",
      glass: 'Sherry glass'
  },

  {
      name: "Orgasm #3",
      ingredients: [ 'Orange liqueur', 'Irish Cream', 'Cherry'],
      instructions: "Build over ice. Garnish with strawberry or cherry.",
      glass: 'vote'
  },

  {
      name: "Screaming Multiple Orgasm",
      ingredients: [ 'Orange liqueur', 'Irish Cream', 'Galliano', 'Milk', 'Strawberries'],
      instructions: "Build over ice. Granish with strawberries or cherries.",
      glass: 'vote'
  },

  {
      name: "Multiple Orgasm #1",
      ingredients: [ 'Orange liqueur', 'Irish Cream', 'Milk', 'Strawberries'],
      instructions: "Build over ice. Garnish with strawberries or cherries.",
      glass: 'vote'
  },

  {
      name: "Twains Orgasm",
      ingredients: [ 'Peach schnapps', 'Irish Cream'],
      instructions: "Layer in order.",
      glass: 'vote'
  },

  {
      name: "Dirty Orgasm",
      ingredients: [ 'Orange liqueur', 'Galliano', 'Irish Cream'],
      instructions: "Layer in order.",
      glass: 'vote'
  },

  {
      name: "Vibrator",
      ingredients: [ 'Southern Comfort', 'Irish Cream'],
      instructions: "Layer in order.",
      glass: 'vote'
  },

  {
      name: "Chastity Belt",
      ingredients: [ 'Tia maria', 'Hazelnut liqueur', 'Irish Cream', 'Cream'],
      instructions: "Layer in order.",
      glass: 'vote'
  },

  {
      name: "Suitor",
      ingredients: [ 'Drambuie', 'Orange liqueur', 'Irish Cream', 'Milk'],
      instructions: "Pour in order.",
      glass: 'vote'
  },

  {
      name: "Martian Hard On",
      ingredients: [ 'Creme de Cacao', 'Melon liqueur', 'Irish Cream'],
      instructions: "Layer in order.",
      glass: 'vote'
  },

  {
      name: "Prarie Fire",
      ingredients: [ 'Tequila', 'Tabasco sauce'],
      instructions: "Pour one shot of tequila into the glass. Add Tabasco to taste",
      glass: 'Shot glass'
  },

  {
      name: "Screwdriver with Color",
      ingredients: [ 'Vodka', 'Orange juice', 'Kahlua', 'Ice'],
      instructions: "Start with a shot or two (depending on your preference) of vodka in the glass. Add organge juice until its almost full. Then add a shot or two of Kahlua , just until its has a bit of color. Then some ice, and stirr",
      glass: 'Highball glass'
  },

  {
      name: "Purple Cow #2",
      ingredients: [ 'Kahlua', 'Chambord raspberry liqueur', 'Milk'],
      instructions: "Shake and serve in highball glass filled with ice.",
      glass: 'Highball glass'
  },

  {
      name: "Witch's Brew",
      ingredients: [ 'Yellow Chartreuse', 'Blue Curacao', 'Brandy', 'Cloves', 'Nutmeg', 'Allspice'],
      instructions: "Shake all the ingrediants together and serve in a chilled glass.",
      glass: 'vote'
  },

  {
      name: "24k nightmare",
      ingredients: [ 'Goldschlager', 'Jägermeister', 'Rumple Minze', '151 proof rum'],
      instructions: "Add over ice,shake and pour.",
      glass: 'Shot glass'
  },

  {
      name: "Yellow Parakeet",
      ingredients: [ 'Midori melon liqueur', 'Banana', 'Light rum', 'Orange juice', 'Pineapple juice', 'Sour mix'],
      instructions: "fill glass with ice and build drink top with splash of sour",
      glass: 'Hurricane glass'
  },

  {
      name: "Red Royal",
      ingredients: [ 'Crown Royal', 'Amaretto', 'Cranberry juice', '7-Up'],
      instructions: "build in a glass with ice and drink. you can also make it as a shot!!",
      glass: 'Collins glass'
  },

  {
      name: "Eerie Witch's Brew",
      ingredients: [ 'Cranberry juice', 'Ginger', 'Orange', 'Apple juice', 'Limeade', 'Grapes', 'Water', 'Ginger ale'],
      instructions: "In a 1 to 2 quart pan, bring 1 cup of cranberry juice and candied ginger to a boil over high heat. Boil, uncovered, about 2 minutes, set aside. With a vegetable peeler, pare peel (colored part only) from oranges: cut peel into thin 2 in long worms: or use an Oriental shredder to make long shreds. Add orange peel to cranberry mixture. Cover and chill at least 4 hours or as long as overnight. Juice oranges: put juice in a 6 to 8 quart pan or heavy bowl. Stir in cranberry-ginger mixture, the 3 cups cranberry juice, apple concentrate, limeade, grapes and water. If made ahead, cover and chill up to 2 hours. Add ginger ale and about a 1 pound piece of dry ice (DO NOT put small pieces in punch or cups): ice should smolder at least 30 minutes. Ladle into cups. Add any remaining ice when bubbling ceases.",
      glass: 'Punch bowl'
  },

  {
      name: "Caribbean Boilermaker",
      ingredients: [ 'Corona', 'Light rum'],
      instructions: "Pour the Corona into an 18oz beer glass pour the rum into the beer.",
      glass: 'Beer pilsner'
  },

  {
      name: "Army special",
      ingredients: [ 'Vodka', 'Gin', 'Lime juice cordial', 'Ice'],
      instructions: "Pour Vodka, Gin and lime cordial into glass, and top up with crushed ice. Wait for ice to melt slightly and sip without a straw.",
      glass: 'Cocktail glass'
  },

  {
      name: "Sweetie",
      ingredients: [ 'Kahlua', 'Vodka', 'Cream', 'Cream soda', 'Ice'],
      instructions: "Pour cream soda last: this gives a foam similar to that on an ice cream float.",
      glass: 'vote'
  },

  {
      name: "Swift kick in the Ass",
      ingredients: [ 'Vodka', 'Aftershock'],
      instructions: "Just fuckin' mix it",
      glass: 'Punch bowl'
  },

  {
      name: "Frog in a blender",
      ingredients: [ 'Vodka', 'Maui', 'Grenadine', 'Orange juice'],
      instructions: "Blend OJ, Blue Maui, and Vodka, put in glass. Splash grenadine on top, but do not stir in . Drink",
      glass: 'vote'
  },

  {
      name: "French Monkey",
      ingredients: [ 'Red wine', 'Orange soda'],
      instructions: "It's simple just add the 2 together and you've gotFrench Monkey Madness!!",
      glass: 'Red wine glass'
  },

  {
      name: "Black Russian #2",
      ingredients: [ 'Vodka', 'Coffee liqueur', 'Coca-Cola'],
      instructions: "Pour Stoli, Kaluha into highball over ice. Top with Coke and serve.",
      glass: 'Highball glass'
  },

  {
      name: "Heilig",
      ingredients: [ 'Blueberry schnapps', 'Vodka', 'Cranberry juice'],
      instructions: "Pour vodka and then blueberry schnapps into shot glass. Top off with the cranberry juice.",
      glass: 'Shot glass'
  },

  {
      name: "Sex on the Beach #11",
      ingredients: [ 'Vodka', 'Peach schnapps', 'Orange juice', 'Cranberry juice'],
      instructions: "No mixing, just pour in in any order.",
      glass: 'Cocktail glass'
  },

  {
      name: "Arizona Twister",
      ingredients: [ 'Vodka', 'Malibu rum', 'Gold tequila', 'Orange juice', 'Pineapple juice', 'Cream of coconut', 'Grenadine', 'Ice', 'Pineapple'],
      instructions: "Just mix in the shots of rum, vodka, and tequila. Add splashes of the three juices, heavy on the pineapple. Top off with grenadine. Crushed ice should already be in glass. Top off the glass with a pineapple wedge.",
      glass: 'Hurricane glass'
  },

  {
      name: "Green-eyed Bi",
      ingredients: [ 'Kiwi liqueur', 'Vodka'],
      instructions: "Pour the 1/4 shot kiwi liqueur in to the shot glass. Then add the 3/4 shot vodka. Drop in a green gummi fish candy, and serve.",
      glass: 'Shot glass'
  },

  {
      name: "Lucky Lindeman",
      ingredients: [ 'Vodka', 'Tropicana', 'Ice'],
      instructions: "Empty one can of Tropicana strawberry/orange/banana into a blender and 1/4 gallon vodka. Mix well. Pour half of this into a pitcher and set aside for later use, leaving the other half in the blender. Fill the blender with ice and blend until it resembles a slurpy. Drink up and start mixing the other half.",
      glass: 'vote'
  },

  {
      name: "Boswandeling (A walk in the woods)",
      ingredients: [ 'Vodka', 'Triple sec', 'Angostura bitters'],
      instructions: "Just add all ingredients and add quite a lot of Angostura and try to make sure that the Angostura is mixed through the drink.",
      glass: 'Shot glass'
  },

  {
      name: "Baby Guinness",
      ingredients: [ 'Kahlua', 'Irish Cream'],
      instructions: "Pour Kahlua, almost filling shot glass. Then, carefully pour Baileys, using wall of shot glass. This will give the Guinness its head.",
      glass: 'Shot glass'
  },

  {
      name: "Nelson special",
      ingredients: [ 'Gin', 'Cranberry juice', 'Tonic water', 'Ice'],
      instructions: "Pour all into any kind of glass, mix with small stick and add a slice of orange and a cherry in glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Rye & Pepper",
      ingredients: [ 'Rye whiskey', 'Dr. Pepper'],
      instructions: "Pour 1 to 2 oz. of Canadian Club or other whiskey into a glass with ice. Add 1/2 can Dr. Pepper. Stir.",
      glass: 'vote'
  },

  {
      name: "Delilah",
      ingredients: [ 'Gin', 'Triple sec', 'Lemon'],
      instructions: "Add gin, cointrean and lemon juice to a shaker filled with ice shake hard (30 seconds) and serve up in a cocktail glass with lemon twist as garnish",
      glass: 'Cocktail glass'
  },

  {
      name: "Rum and Coke",
      ingredients: [ 'Rum', 'Coca-Cola'],
      instructions: "For an extra kick, use Bacardi 151. If you want a lime taste, use Bacardi Limon.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "G. T. O.",
      ingredients: [ 'Vodka', 'Rum', 'Gin', 'Southern Comfort', 'Orange juice', 'Amaretto', 'Grenadine'],
      instructions: "Mix all ingredients in tin over ice. Strain into shot glasses and enjoy!!!!",
      glass: 'Shot glass'
  },

  {
      name: "Smurf-o-tonic",
      ingredients: [ 'Gin', 'Blue Curacao', 'Tonic water', 'Lime'],
      instructions: "Pour the gin, blue curacao and the tonic water into a highball glass half filled with ice cubes. Stir well. Garnish with the lime wedge. If you want, you can add the blue curacao after stiring the drink.",
      glass: 'Highball glass'
  },

  {
      name: "Jesus is Here",
      ingredients: [ 'Schweppes Russchian', 'Vodka'],
      instructions: "Pour the vodka and then the russian. Stir gently. Drink.",
      glass: 'Beer mug'
  },

  {
      name: "Russian Qualude #3",
      ingredients: [ 'Coffee liqueur', 'Irish cream', 'Orange liqueur', 'Hazelnut liqueur', 'Vodka'],
      instructions: "Layer drink by pouring each shot slowly over the back side of a teaspoon held just above the liquid level.",
      glass: 'Cocktail glass'
  },

  {
      name: "The Italian Job",
      ingredients: [ 'Vodka', 'Triple sec', 'Pineapple juice', 'Blackcurrant squash', 'Cream'],
      instructions: "Whisk with a fork, untill all mixed in. Add cream after mixing.",
      glass: 'Mason jar'
  },

  {
      name: "Texas Prairie Fire",
      ingredients: [ 'Tequila', 'Lime juice', 'Tabasco sauce'],
      instructions: "Pour 3/4 shot of Tequila in shot glass, top off with lime juice, splash in tabasco sauce, and shoot.",
      glass: 'Shot glass'
  },

  {
      name: "Citron my face",
      ingredients: [ 'Absolut Citron', 'Grand Marnier', 'Sour mix', '7-Up'],
      instructions: "Mix over ice and strain",
      glass: 'Shot glass'
  },

  {
      name: "Peach Fuzz",
      ingredients: [ 'Ice', 'Limeade', 'Vodka', 'Peach'],
      instructions: "Fill blender 1/2 full with ice cubes. Add 6 oz. can of frozen limeade. Add 6 oz. vodka (use limeade can to measure). Add 2 ripe peaches (remove pit and slice). Whip it!",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Elmer Fudpucker",
      ingredients: [ 'Beer', 'Sprite', 'Lemonade', 'Vodka'],
      instructions: "Mix Beer, Soda, and frozen lemonade into a large pitcher. Then fill empty lemon aid container with vodka and add to mixture. Stir.",
      glass: 'Pitcher'
  },

  {
      name: "Geneva Convention",
      ingredients: [ 'Vodka', 'Goldschlager', 'Everclear'],
      instructions: "Fill half a shaker with ice. Add the ingredients. Shake. Strain into a cocktail glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Alice in Wonderland",
      ingredients: [ 'Amaretto', 'Grand Marnier', 'Southern Comfort'],
      instructions: "Just mix the three ingredients one to one to one",
      glass: 'vote'
  },

  {
      name: "Fuzzy Cooter",
      ingredients: [ 'Orange juice', 'Ginger ale', 'Lemonade', 'Vodka', 'Peach schnapps'],
      instructions: "2 shots of vodka, 2 shots of Peach Schnapps. Fill the rest with Ginger Ale, Lemonade, and OJ to taste",
      glass: 'Cocktail glass'
  },

  {
      name: "Flying Monkey",
      ingredients: [ 'Kahlua', 'Banana liqueur', 'Irish Cream'],
      instructions: "Layer each ingredient starting with Kahlua, then Bailey's and finish with the Banana liqueur. If you have difficulty layering the shooter (shot) use a tea spoon held upside down and poor over slowly.",
      glass: 'Shot glass'
  },

  {
      name: "Blue Dog",
      ingredients: [ 'Vodka', 'Grapefruit juice'],
      instructions: "Combine both while cold.",
      glass: 'Cocktail glass'
  },

  {
      name: "Columbia Gold",
      ingredients: [ 'Yukon Jack', 'Strawberry liqueur', 'Orange juice'],
      instructions: "Blend well with large scoop of ice.",
      glass: 'White wine glass'
  },

  {
      name: "Fuzzy Ass",
      ingredients: [ 'Absolut Citron', 'Peach schnapps', 'Sour mix', 'Grenadine', 'Triple sec', 'Sprite'],
      instructions: "Combine all ingredients into a large strainer/mixer. Add a handful of ice. Shake for a few seconds. Strain into a mason jar....",
      glass: 'Mason jar'
  },

  {
      name: "Bushwacker #4",
      ingredients: [ 'Irish whiskey', 'Irish cream', 'Ice'],
      instructions: "First place three or four ice cubes in a rock glass. The Bailey's is placed in the glass first otherwise the cream will curdle. Then the Bushmill's whiskey is added slowly and stirred until thoroughly mixed.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Root Canal",
      ingredients: [ 'Peppermint schnapps', 'Root beer schnapps', 'Dr. Pepper'],
      instructions: "Combine 1/4 oz. peppermint schnapps with 2 oz. rootbeer schnapps. Fill with Dr.Pepper or rootbeer and stir. Garnish with a cherry over ice and serve.",
      glass: 'Hurricane glass'
  },

  {
      name: "Summer Mind Eraser",
      ingredients: [ 'Ice', 'Peach schnapps', 'Midori melon liqueur', 'Champagne'],
      instructions: "First, fill the champagne flute with heaps of ice. Next, pour in your Schnapps and Midori. Now fill the flute to the top with Champagne. Let the drink settle for a minute (especially if you've been pouring behind a busy, bumpy nightclub!). Use a long bar straw to drink the shot from the bottom up (push the straw right to the bottom of the flute before starting), all at once! Very Important - Don't stop in the middle of the drink!",
      glass: 'Champagne flute'
  },

  {
      name: "501 Blue",
      ingredients: [ 'Blue Curacao', 'Blueberry schnapps', 'Vodka', 'Sour mix', '7-Up'],
      instructions: "Mix equal amounts into a glass with ice.",
      glass: 'vote'
  },

  {
      name: "Airhead",
      ingredients: [ 'Peach schnapps', 'Cranberry juice'],
      instructions: "Pour peach Schnapps into shot glass. Add chilled cranberry juice to fill.",
      glass: 'Shot glass'
  },

  {
      name: "Coke and Drops",
      ingredients: [ 'Coca-Cola', 'Lemon juice'],
      instructions: "Take a glass, pour the Coke in the glass, then you take 7 drops of lemon juice. Granish with a lemon slice on the rim of the glass.",
      glass: 'Cocktail glass'
  },

  {
      name: "Walk Me Down",
      ingredients: [ 'Vodka', 'Triple sec', 'Rum', 'Gin', 'Tequila', 'Sour mix', 'Blue Curacao', 'Sprite'],
      instructions: "Add the shots, 1/2 shots for the ladies. Over ice is best.Mix well.",
      glass: 'Hurricane glass'
  },

  {
      name: "Flying Squadron",
      ingredients: [ 'Ice', 'Bourbon', 'Pepsi Cola'],
      instructions: "First, add some ice. Then, pour in your bourbon. Finally add Pepsi and slosh around to mix. Enjoy your victory drink.",
      glass: 'Mason jar'
  },

  {
      name: "I.V. (Italian Valium)",
      ingredients: [ 'Amaretto', 'Gin'],
      instructions: "Mix thoroughly.",
      glass: 'Shot glass'
  },

  {
      name: "Juicy Lucy #2",
      ingredients: [ 'Vodka', 'Light rum', 'Southern Comfort', 'Dark rum', 'Grenadine', 'Pineapple juice', 'Orange juice', 'Grapefruit juice'],
      instructions: "Mix all above, pour over ice, and enjoy!!!",
      glass: 'vote'
  },

  {
      name: "Separator",
      ingredients: [ 'Kahlua', 'Brandy', 'Milk'],
      instructions: "Fill dbl rocks glass with ice, add brandy, Kahlua,and milk. Shake well , return to glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Ruby Tuesday",
      ingredients: [ 'Gin', 'Cranberry juice', 'Grenadine'],
      instructions: "Pour gin and cranberry into a highball filled with ice cubes. Add grenadine and stir.",
      glass: 'Highball glass'
  },

  {
      name: "Peppermint Pattie",
      ingredients: [ 'Creme de Cacao', 'White Creme de Menthe'],
      instructions: "fill glass with ice pour creme de cacao and the creme de menthe over ice. stir and enjoy. Is best after dinner but can be enjoyed anytime.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Sweet Tart - Loyalist Rez",
      ingredients: [ 'Blue Curacao', 'Banana liqueur', 'Lemon juice', 'Cranberry juice', 'Amaretto'],
      instructions: "mix all ingrediants together in container. poor into shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Arctic Mouthwash",
      ingredients: [ 'Maui', 'Mountain Dew', 'Ice'],
      instructions: "Blend all ingredients in a blender on high until ice is finely crushed. It should be of a slushy consistency. Pour immediately and serve.",
      glass: 'Cocktail glass'
  },

  {
      name: "No Problem!",
      ingredients: [ 'Lime juice', 'Fruit juice', 'Pineapple juice', 'Grapefruit juice', 'Orange juice', 'Coconut rum', 'Creme de Banane'],
      instructions: "Shake with ice and pour",
      glass: 'vote'
  },

  {
      name: "Brain Fart",
      ingredients: [ 'Everclear', 'Vodka', 'Mountain Dew', 'Surge', 'Lemon juice', 'Rum'],
      instructions: "Mix all ingredients together. Slowly and gently. Works best if ice is added to punch bowl and soda's are very cold.",
      glass: 'Punch bowl'
  },

  {
      name: "Black Martini #2",
      ingredients: [ 'Vodka', 'Chambord raspberry liqueur', 'Blue Curacao', 'Ice'],
      instructions: "combine in shaker. shake vigorously. strain into cocktail glass",
      glass: 'Cocktail glass'
  },

  {
      name: "Royal Bitch",
      ingredients: [ 'Frangelico', 'Crown Royal'],
      instructions: "Into a shot glass layer the Crown Royal on top of the Frangelico.",
      glass: 'Shot glass'
  },

  {
      name: "Purple Motherfucker #2",
      ingredients: [ 'Blue Curacao', 'Southern Comfort', 'Amaretto', 'Cranberry juice'],
      instructions: "Pour ingredients into mixing cup 1/4 full ice. Stir then pour into shot glasses.",
      glass: 'Shot glass'
  },

  {
      name: "Psycho",
      ingredients: [ 'Rum', 'Galliano', 'Orange juice', 'Pineapple juice', 'Grenadine'],
      instructions: "Shake all ingredients with ice, strain into glass Decorate with slice of Orange, Pineapple and a red Cocktial cherry.",
      glass: 'Highball glass'
  },

  {
      name: "Iceberg in Radioactive water #2",
      ingredients: [ 'Midori melon liqueur', 'Banana liqueur', 'Ice-cream', 'Vodka', 'Pineapple juice', 'Malibu rum'],
      instructions: "Add Ice-cream last. Enjoy!",
      glass: 'Beer mug'
  },

  {
      name: "Lina",
      ingredients: [ 'Gin', 'Midori melon liqueur', 'Sprite', 'Lemon', 'Ice'],
      instructions: "Mix everything together in a hightumbler glass. Then drink it and get a ragg! (Swedish for Pickin up babes)",
      glass: 'Highball glass'
  },

  {
      name: "Small Bomb #2",
      ingredients: [ 'Amaretto', 'Melon liqueur', 'Everclear', 'Pineapple juice'],
      instructions: "Begin by filling the glass halfway with Amaretto, add shots of melon, add shots of everclear, add rest of glass with pineapple juice, stir, then pour into glass with ice.",
      glass: 'Highball glass'
  },

  {
      name: "Big Apple",
      ingredients: [ 'Vodka', 'Apple juice', 'Green Creme de Menthe'],
      instructions: "Pour vodka into a collins glass over three or four ice cubes and fill with apple juice. Pour creme de menthe, stir, and serve.",
      glass: 'Collins glass'
  },

  {
      name: "Nan's special",
      ingredients: [ 'Vodka', '7-Up', 'Soda water', 'Lemon', 'Salt'],
      instructions: "Mix the Vodka, 7-up & Soda in that order. Add lemon juice. Add salt gradually until the sweet taste of 7-up just disappears.",
      glass: 'Cocktail glass'
  },

  {
      name: "Wet Snatch",
      ingredients: [ 'Ice', 'Tequila', 'Vanilla syrup', 'Coconut milk', 'Raspberry juice', 'Pineapple juice'],
      instructions: "Add blue raspberry to ice, add vanilla, pinapple, and coconut, then blend. Add tequila, blend again. Whipped cream on top optional.",
      glass: 'Margarita/Coupette glass'
  },

  {
      name: "Dogs Bollocks",
      ingredients: [ 'Melon vodka', 'Lager', 'Lime juice'],
      instructions: "Pour in the vodka first and then proceed to pour the beer on top.",
      glass: 'Beer mug'
  },

  {
      name: "Purple Shroud",
      ingredients: [ 'Vodka', 'Sloe gin', 'Blue Curacao'],
      instructions: "Pour all ingredients over ice in a mixing glass, shake, add more Sloe Gin or Blue Curacao to achieve the desired hue of purple. Strain into an old fashioned glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Duck Shit Inn",
      ingredients: [ 'Kahlua', 'Midori melon liqueur', 'Irish Cream', 'Tequila'],
      instructions: "Layer in cordial glass.",
      glass: 'Cordial glass'
  },

  {
      name: "Hairball",
      ingredients: [ 'Cider', 'Guinness stout', 'Irish whiskey'],
      instructions: "Fill 1/3 of the collins glass with cider, then float the Guinness ontop, to bring the volume to 2/3 full. Pour Bushmill's in a separate shot glass. Drop the shot glass into the collins glass and slam it!",
      glass: 'Collins glass'
  },

  {
      name: "Citrus Coke",
      ingredients: [ 'Bacardi Limon', 'Coca-Cola'],
      instructions: "Pour half of coke in a glass. Then add Bacardi and top it off with the remaining coke. Stir and drink up!",
      glass: 'vote'
  },

  {
      name: "Dakota",
      ingredients: [ 'Bourbon', 'Tequila'],
      instructions: "Combine in a double shot glass and enjoy.",
      glass: 'Shot glass'
  },

  {
      name: "Off your ass in a glass",
      ingredients: [ 'Vodka', 'Gin', 'Gatorade', 'Crown Royal', 'Salt', 'Lemon juice', 'Beer'],
      instructions: "No organized mixing require. Put all ingredients in a glass, stir, and drink straight. Then you had better lie down.",
      glass: 'Highball glass'
  },

  {
      name: "Snow Blinder",
      ingredients: [ 'Vodka', 'Vanilla ice-cream', 'Lemonade'],
      instructions: "Pour vidka in blender and add ice crem. Blend. Top with lemonade.",
      glass: 'Cocktail glass'
  },

  {
      name: "Skylab Fallout",
      ingredients: [ 'Vodka', '151 proof rum', 'Gold tequila', 'Gin', 'Everclear', 'Blue Curacao', 'Pineapple juice'],
      instructions: "Put plenty of ice in glass pour rum and everclear first refill with ice - put your tequila, gin, vodka and your blue curraco in. put your pinapple juice in and shake serve with a lemon slice and cherry",
      glass: 'Hurricane glass'
  },

  {
      name: "Ethiopian Camel Basher",
      ingredients: [ 'Orange juice', 'Vodka', 'Grenadine'],
      instructions: "Grenadine will sink to the bottom of the glass. The dash should be just enough to give a thin layer. Mix thoroghly. The correct mix will give a drink which is between pink & orange in color, but exactly NOT one or the other.",
      glass: 'Pint glass'
  },

  {
      name: "Smut",
      ingredients: [ 'Red wine', 'Peach schnapps', 'Pepsi Cola', 'Orange juice'],
      instructions: "Throw it all together and serve real cold.",
      glass: 'Beer mug'
  },

  {
      name: "Silk Panties",
      ingredients: [ 'Peach schnapps', 'Vodka'],
      instructions: "Combine over ice, strain into shot glass.",
      glass: 'Shot glass'
  },

  {
      name: "Brown Cow #2",
      ingredients: [ 'Tia maria', 'Milk', 'Ice'],
      instructions: "Fill the glass with the amount of Tia Maria you would like and put an equal amount, or a little more, of milk. Add two ice cubes and down.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Slippery Box",
      ingredients: [ 'Absolut Citron', 'Southern Comfort', 'Everclear', 'Kool-Aid'],
      instructions: "In a glass, put in all liquor and then fill the remaining glass with the kool-aid",
      glass: 'Old-fashioned glass'
  },

  {
      name: "The Feckin Bolox",
      ingredients: [ 'Galliano', 'Irish Cream', 'Triple sec'],
      instructions: "take the galliano and fill one third of the glass. then using a table spoon measure out the bayleys and pour onto the galliano, so that they are seperated. finally, clean the spoon, and measure out the coinraux pour onto the bayleys again so that they are seperated. take a match or lighter and light the cointraux, take a straw and place at bottom of glass and drink.",
      glass: 'Shot glass'
  },

  {
      name: "Titty Excreation",
      ingredients: [ 'Butterscotch schnapps', 'Mountain Dew'],
      instructions: "Pour in a big glass. Mix. It's best when it's cold and on the rocks.",
      glass: 'Beer mug'
  },

  {
      name: "Dirty Mexican Lemonade",
      ingredients: [ 'Lemonade', 'Vodka', 'Sprite'],
      instructions: "First add vodka to lemaonade, sprite goes in last. Stir.",
      glass: 'vote'
  },

  {
      name: "Hot Apple Pie #2",
      ingredients: [ 'Irish Cream', 'Goldschlager', 'Cinnamon'],
      instructions: "Fill a shot glass half full with the Bailey's and the rest of the way with the Goldschlager. Mix with toothpick. Then sprinkle a bit of cinnamon on the top and light it with a match (it may take a couple of tries to get it to stay lit). Let it burn for a few seconds and gently blow out the flame being careful not to splash the drink out of the glass. Then, drink!",
      glass: 'Shot glass'
  },

  {
      name: "Skull",
      ingredients: [ 'Coffee liqueur', 'Irish cream', 'Bourbon'],
      instructions: "Mix ingrediants.",
      glass: 'Shot glass'
  },

  {
      name: "Bend Me Over",
      ingredients: [ 'Amaretto', 'Sweet and sour', 'Orange juice'],
      instructions: "Mix all ingredients, and pour over ice if desired.",
      glass: 'Cocktail glass'
  },

  {
      name: "Apple Slut",
      ingredients: [ 'Sour Apple Pucker', 'Citrus vodka', 'Sprite'],
      instructions: "Pour shots in glass and add Sprite to your taste.",
      glass: 'Cocktail glass'
  },

  {
      name: "Fulminator",
      ingredients: [ 'Tennessee whiskey', 'Vodka', 'Tequila', 'Orange juice', 'Lemon', 'Sugar', 'Cachaca'],
      instructions: "Cut lemons into wedges and mix into large container.",
      glass: 'Punch bowl'
  },

  {
      name: "Scotty Boy",
      ingredients: [ 'Absolut Kurant', 'Sour mix', 'Soda water'],
      instructions: "Pour a lot of kurant into ice filled glass. Fill with sour mix. Shake, always shake and add a splash of soda. Enjoy.",
      glass: 'Highball glass'
  },

  {
      name: "Lemon Lightning",
      ingredients: [ 'Everclear', 'Lemon juice'],
      instructions: "Add equal parts of Everclear and lemon juice to a shot glass. Place the shot into the freezer for 30 minutes to completely chill it. Drink it ice cold.",
      glass: 'Shot glass'
  },

  {
      name: "The Party Girl",
      ingredients: [ 'Cranberry juice', 'Raspberry liqueur', 'Absolut Kurant'],
      instructions: "In a shaker, mix all ingredients, shake well. Serve over ice, garnish with a lime wedge (optional)",
      glass: 'vote'
  },

  {
      name: "The Three Wise Men",
      ingredients: [ 'Jägermeister', 'Goldschlager', 'Peppermint schnapps'],
      instructions: "My experience shows that pouring in any order has no bearing on the overall taste of the drink.",
      glass: 'Shot glass'
  },

  {
      name: "Death of a Virgin",
      ingredients: [ 'Vodka', 'Peach schnapps', 'Lime juice', 'Orange juice', '7-Up'],
      instructions: "Pour first three ingredients. Then pour orange juice until cup is little more than half filled. Then fill the rest of the way with 7-up and stir until well mixed.",
      glass: 'Coffee mug'
  },

  {
      name: "Dirtiest Ernie",
      ingredients: [ '151 proof rum', 'Everclear', 'Rumple Minze'],
      instructions: "Mix the three ingredients in a shot glass and slam",
      glass: 'Shot glass'
  },

  {
      name: "Gangbuster Punch",
      ingredients: [ 'Vodka', 'Peach schnapps', 'Cranberry juice', '7-Up', 'Ice'],
      instructions: "Combine all ingredients in a shaker. Shake well and strain into a rocks glass.",
      glass: 'Old-fashioned glass'
  },

  {
      name: "Red Lion",
      ingredients: [ 'Gin', 'Grand Marnier', 'Orange juice', 'Lemon juice'],
      instructions: "Shake and strain. Before serving, moisten the edge of the highball glass and dip in castor sugar.",
      glass: 'Highball glass'
  },

  {
      name: "Pixie Stick",
      ingredients: [ 'Gin', 'Midori melon liqueur', '7-Up'],
      instructions: "Pour gin, then midori, then 7-up (to fill) over ice in a Tom Collins glass. Shake in cocktail shaker, add straw, cherry. Tastes like candy.",
      glass: 'Collins glass'
  },

  {
      name: "Black Orchid",
      ingredients: [ 'Blue Curacao', 'Dark rum', 'Grenadine'],
      instructions: "Shake and serve",
      glass: 'Shot glass'
  },

  {
      name: "Oatmeal Raisin Cookie",
      ingredients: [ 'Jägermeister', 'Goldschlager', '151 proof rum', 'Kahlua', 'Irish Cream'],
      instructions: "Equal parts. All ingredients are measured equally in no particular order.",
      glass: 'Shot glass'
  },

  {
      name: "Bjorns Moscow Mule",
      ingredients: [ 'Vodka', 'Lemon juice', 'Ginger ale'],
      instructions: "mix lemonjuice with vodka, fill with ginger ale.",
      glass: 'Collins glass'
  },

  {
      name: "Field of Green",
      ingredients: [ 'Sloe gin', 'Amaretto', '7-Up', 'Orange juice'],
      instructions: "Pour the Sloe Gin and Amaretto into a glass. Fill the Glass 1/2 way with 7-up (Optional), and the other 1/2 with Orange Juice",
      glass: 'vote'
  },

  {
      name: "Raspberry Cooler",
      ingredients: [ 'Raspberry vodka', 'Lemon-lime soda', 'Ice'],
      instructions: "Pour the raspberry vodka and soda into a highball glass almost filled with ice cubes. Stir well.",
      glass: 'Highball glass'
  },

  {
      name: "Amaretto Sunset",
      ingredients: [ 'Triple sec', 'Amaretto', 'Cider', 'Ice'],
      instructions: "Shake ingredients in bartender's mixer quickly, just 5 shakes. Strain out ice, serve in glass immediately with a slice of orange.",
      glass: 'vote'
  },

  {
      name: "Crantini",
      ingredients: [ 'Vodka', 'Triple sec', 'Vermouth', 'Cranberry juice', 'Ice', 'Cranberries'],
      instructions: "Add all the ingredients in a martini shaker with ice. Then shake,pour into martini glass and add a few cranberries to complete the drink.(Soak the cranberries in vodka first)",
      glass: 'Cocktail glass'
  },

  {
      name: "Jamaican Screw",
      ingredients: [ 'Malibu rum', 'Orange juice', 'Ice'],
      instructions: "Mix rum and orange juice together (stirring) then pour over ice.",
      glass: 'Highball glass'
  }


]
let availableIngredients = ['Water', 'Ice'];
let availableDrinks = [];
const checkboxes = document.querySelectorAll('input[type=checkbox]');
const card = document.querySelector('.card');
const cardClose = document.querySelector('.card-close');
const recipeLink = document.querySelector('.recipe-link');
const recipeBox = document.querySelector('.recipe-box');

//CARDS
//CLOSE CARD WHEN CLICKING ON X
cardClose.addEventListener('click', closeCard);

function closeCard() {
  card.classList.add('hidden');
}

//MAKE CARD LINKS SHOW recipe-box
// recipeLink.addEventListener('click', showCard);
//
// function showCard() {
//   card.classList.remove('hidden');
// }

function addOrRemove(array, value) {
  var index = array.indexOf(value);
  if(index === -1) {
    array.push(value);
  } else{
    array.splice(index,1);
  }
}

checkboxes.forEach(function(element){
  element.addEventListener('click', addIngredient);
})

//function to see if the ingredients array contains all the ingredients for a drink

function arrayContainsAnotherArray(arr1, arr2){
  for (var i = 0; i < arr1.length; i++) {
    if(arr1.indexOf(arr1[i]) === -1)
    arr1[i]
  }
}

function addIngredient(event) {

  // availableIngredients.push(event.target.id);
  addOrRemove(availableIngredients, event.target.id);

  for (var i = 0; i < drinkList.length; i++) {
    let x = true;
    let drinkIngredients = drinkList[i].ingredients;
    for (var j = 0; j < drinkIngredients.length; j++) {
      if(availableIngredients.indexOf(drinkIngredients[j]) < 0 ){
        x = false;
      }
            }
      if (x === true && (availableDrinks.indexOf(drinkList[i].name) < 0)) {
        let recipeLink = document.createElement('div');
        recipeLink.classList.add('recipe-link');
        recipeLink.innerHTML=`<span>${drinkList[i].name}</span>`;
        recipeBox.append(recipeLink);
        availableDrinks.push(drinkList[i].name);
    }
  }

  // drinkList.forEach(function(element){
  //   if(element.ingredients.indexOf(event.target.id) > -1){
  //     let recipeLink = document.createElement('div');
  //     recipeLink.classList.add('recipe-link');
  //     recipeLink.innerHTML=`<span>${element.name}</span>`;
  //     recipeBox.append(recipeLink);
  //   }
  // })
  console.log(availableIngredients);
}
