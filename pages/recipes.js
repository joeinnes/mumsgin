import { Box, Heading, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

import Layout from "../components/Layout";

export default function About() {
  const ATF = () => {
    return (
      <Box
        backgroundImage={`url("https://source.unsplash.com/collection/41740221&fit=clip&q=10&usm=20&auto=compress&cs=tinysrgb")`}
        backgroundSize="cover"
        backgroundAttachment="fixed"
        flexGrow={1}
        pos="relative"
      >
        <Box margin="auto" bg="white" px={24} py={12} my={24} w="fit-content">
          <Box maxW="60ch">
            <ReactMarkdown renderers={ChakraUIRenderer()}>
              {`# Cocktail Recipes
## Bramble
### Ingredients
- 60ml gin
- 30ml sugar syrup
- 30ml lemon juice
- 15ml crème de mure
- berries or lemon zest, for garnish

### Method
1. Take a large measure of dry gin and shake together with the lemon and sugar syrup.
2. Pour over crushed ice and drizzle the crème de mure through the drink. 
3. Garnish with a lemon zest or some fresh seasonal berries.

## Gin Fizz
### Ingredients
- 50ml gin
- 25ml lemon juice
- 2 tsp sugar syrup
- 1 egg white (optional)
- ice
- sparkling water
- lemon slice

### Method
1. Pour the gin, lemon juice and sugar syrup in a cocktail shaker.
2. Optionally, add an egg white and shake vigorously to froth
3. Fill up with ice cubes. 
4. Shake well until the outside of the shaker feels cold then strain (twice if you used egg white) into a tall glass filled with more ice
5. Top up with sparkling water and garnish with a lemon slice.

## Gin Sour
### Ingredients
- 60ml ounces gin
- 30ml fresh lemon juice
- 15ml simple syrup

- Optional: 15ml egg white
- 3 dashes aromatic bitters

### Method
1. Gather the ingredients.
2. In a cocktail shaker, pour the gin, lemon juice, simple syrup, egg white (if using), and bitters.
3. When including the egg white, dry shake the cocktail without ice to break up the egg and ensure a thorough mix.
4. Fill the shaker with ice and shake vigorously for at least 30 seconds.
5. Strain into an old-fashioned glass filled with fresh ice.

## Martini
### Ingredients
- 60ml gin
- vermouth, to taste

### Method
1. Basically you're on your own here - the standard is two parts gin to one part vermouth
2. Despite what James Bond says, a Martini is **normally** stirred, rather than shaken. But hey, why not try it both ways?

## Negroni
### Ingredients
- 25ml gin
- 25ml sweet vermouth
- 25ml Campari
- 1 strip orange zest

### Method
1. Pour the gin, vermouth and Campari into your favourite rocks glass over ice. 
2. Stir it down to your preferred taste. 
3. Zest the orange over the glass

## Soixante-Quinze
### Ingredients
- 10ml gin
- 10ml orange liqueur
- 10ml lemon
- 5ml sugar
- Champagne or other fizz of your choice, for topping up

### Method
1. Mix the gin, orange liqueur and lemon juice in a flute
2. Top with chilled bubbly.

## Southside
### Ingredients
- 50ml gin
- 20ml lime
- 15ml sugar syrup,
- 6-8 mint leaves

### Method
1. Drop the gin, fresh lime juice, sugar syrup and the mint leaves into your shaker then get your arms moving. 
2. Fine-strain it into a posh martini glass that’s been chilled. 
3. Hold the ice. Garnish with one slapped mint leaf.

## Smoky Gin Sour
### Ingredients
- 240ml of water
- 10 Lapsang souchong tea bags
- 200g of sugar

### Method
1. Put the tea bags in a heat-proof bowl or cup. You’ll need one that can hold at least two cups of liquid. 
2. Bring a cup of water to boil and, once it starts boiling, immediately pour it over the tea bags. Cover and let steep for five minutes. 
3. After five minutes, remove the tea bags and set them aside until they are cool enough to touch. 
4. While they are cooling, add the sugar to the hot tea and stir to dissolve. 
5. Once the tea bags have cooled, squeeze the excess tea into the syrup and stir once more.
6. Refrigerate, and use instead of a simple syrup in a Gin Sour

## Tom Collins
### Ingredients
- 50ml gin
- 25ml lemon juice
- 25ml sugar syrup
- 125ml chilled soda water

### Method
1. Build the drink over plenty of ice in a Collins glass
2. Stir gently and garnish with a slice of lemon. 
3. Optionally replace the sugar syrup with various cordials to add a twist`}
            </ReactMarkdown>
          </Box>
        </Box>
      </Box>
    );
  };
  return <Layout hero={ATF} />;
}
