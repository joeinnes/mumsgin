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
              {`# About Gin
## What is gin?
The dictionary definition of gin is that of a neutral grain spirit re-distilled with botanicals, with a predominant juniper flavor. The only thing all gins must have in common is the juniper berry, but gins come by that distinctive pine-y flavor in a variety of ways. There’s no prescribed ratio, there’s no amount of juniper that is required by law; the definition merely states “predominant flavor of juniper.” Other common gin botanicals include coriander, citrus peels (bitter orange, lemon, grapefruit), angelica root and seed, licorice, orris root, bitter almonds, nutmeg, cinnamon and anise, to name a few.

## Origins of gin
Gin likely traces its origins to liquors produced back in the Middle Ages, with references to a spirit flavored with “genever” referenced in a 13th Century Flemish manuscript. By the 1600s, the Dutch were producing gin in earnest, with hundreds of distilleries in the city of Amsterdam alone.

Gin, like so many things (Coca-Cola and heroin come to mind), was originally produced as a medicine. It was distributed by “chemists” for the treatment of ailments such as gout and dyspepsia. Consumed in large enough quantities, it likely did help ameliorate perception of the symptoms associated these issues and many others, such as “Coward’s Fist,” though only for a few hours at a time. Gin gained in popularity doing the Thirty Years’ War, as British soldiers fought on Dutch land (and this is likely the origin of the phrase 'Dutch Courage').

In the latter half of the 17th Century and in the early years of the 18th Century, gin rapidly gained popularity in England, cementing the association it still enjoys with Britain. In fact, by the year 1720, some experts estimate that as many as a quarter of the households in London frequently produced their own gin. The period in the storied city’s history became known as “The Gin Craze,” an era that was so significant that Parliament had to pass no fewer than five major legislative acts over the course of 22 years in a vain attempt to rein in the population’s consumption of gin.

Gin remained popular with the Brits, notable for its use by soldiers and colonials living in lands prone to malaria infections: gin was excellent at masking the unpleasant, bitter flavor of the anti-malarial alkaloid quinine, a necessity for the susceptible foreigners. This medical elixir developed into the Gin & Tonic we know and love to this day.

There are four main styles of gin.

## London Dry Gin
The one that is most familiar as “gin” and most widely available is a style called London Dry Gin. Curiously, a London Dry does not have to be made in London, instead it’s defined by getting its juniper flavor from neutral spirits (grain alcohol) re-distilled with botanicals, with nothing added after the re-distillation process. Some cocktail historians and purveyors of urban cocktail legend say that the origin of the expression “dry martini” comes not from the amount of vermouth added to the cocktail, but from a shortening of the request for a “London Dry Martini.” 

## Dutch Genever
Another style of gin, and history says it’s the first style, is the Dutch Genever. Rather than starting with a neutral grain spirit, a genever starts with a malted grain mash, more like whiskey. The process lends itself to barrel-aging, whereas making English gins is a very quick process, sometimes taking no longer than a day. The soft yellow spirit has been making a comeback lately.

## Old Tom
Old Tom gin is yet another style that has fallen out of favor, and production, until recently. Old Toms are characterized by sugar in the re-distillation process that makes them sweeter than a London Dry.

## Compound Gin
The last style of gin, compound gin, was probably the most prevalent in the early days of gin production, when it was the beverage of choice for the working classes and the out-of-work. Compound gin derives its flavor from essences that are added to neutral grain spirits, with no re-distillation. One of those “essences” in the cheapest swill was turpentine. But even this style of gin is having a modern day renaissance of sorts. Hendricks is a type of compound gin: the signature cucumber and rose petal essences are too delicate for re-distillation process and are added after the other more traditional botanicals are re-distilled with neutral spirits.`}
            </ReactMarkdown>
          </Box>
        </Box>
      </Box>
    );
  };
  return <Layout hero={ATF} />;
}
