import React from "react";
import PropTypes from "prop-types";
import { Text, Box} from "@chakra-ui/react";


const HomeComp = ({bg, data, border, words, nouns }) => {
    // console.log(words?.map(el=>el?.map(e=>e)))

    return(
        <Box mb="114.5px" h="auto" border={border}>
            <Box bg={bg} my="44px" mx={{base:"20px", md:"74px"}} px={{base:5, md:10}} pb={4}>
                {/*  */}
                {data?.map((word, i) => (
                    <>
                    <Box key={i}>
                        <Text textTransform="capitalize" fontSize={{base:"34px", md:"64px"}}>{word?.word}</Text>
                        <Box d="flex" alignItems="center" mb={10}>
                            <Text>/həˈləʊ/</Text>
                            <Box ml="18px" cursor="pointer">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4974 0.749934C10.4973 0.602421 10.4538 0.458186 10.3723 0.335277C10.2907 0.212368 10.1748 0.116243 10.0389 0.0589276C9.90299 0.00161221 9.75323 -0.0143476 9.60832 0.0130445C9.4634 0.0404367 9.32979 0.109964 9.22418 0.212929L4.83478 4.48797H2.24943C1.65285 4.48797 1.08069 4.72503 0.658844 5.14699C0.236993 5.56895 0 6.14125 0 6.73799V11.223C0 11.8198 0.236993 12.3921 0.658844 12.814C1.08069 13.236 1.65285 13.4731 2.24943 13.4731H4.83328L9.22268 17.7856C9.32812 17.889 9.46174 17.9589 9.60676 17.9867C9.75179 18.0144 9.90177 17.9987 10.0379 17.9415C10.174 17.8843 10.2903 17.7882 10.372 17.6652C10.4537 17.5422 10.4973 17.3978 10.4974 17.2501V0.749934ZM12.1634 4.78347C12.2247 4.70631 12.3007 4.64198 12.3868 4.59418C12.473 4.54638 12.5678 4.51604 12.6657 4.50489C12.7636 4.49375 12.8628 4.50201 12.9575 4.52923C13.0522 4.55644 13.1406 4.60206 13.2177 4.66347L13.2207 4.66497L13.2237 4.66797L13.2312 4.67397L13.2537 4.69347L13.3226 4.75347C13.3766 4.80448 13.4501 4.87348 13.5356 4.96648C13.7051 5.15098 13.9255 5.41948 14.1429 5.77648C14.5793 6.49649 15.0022 7.566 15.0022 8.99852C15.0022 10.4295 14.5793 11.5005 14.1429 12.2205C13.968 12.5106 13.7645 12.7824 13.5356 13.0321C13.4402 13.1357 13.3391 13.2338 13.2327 13.3261L13.2207 13.3366H13.2192C13.2192 13.3366 12.5488 13.7011 12.1649 13.2196C12.0415 13.0651 11.984 12.8681 12.0051 12.6714C12.0262 12.4747 12.124 12.2944 12.2774 12.1695L12.2804 12.1665L12.2789 12.168L12.2819 12.1665H12.2804L12.3074 12.1425C12.3344 12.117 12.3794 12.075 12.4349 12.015C12.5955 11.8386 12.7381 11.6467 12.8608 11.442C13.1757 10.9245 13.5026 10.119 13.5026 8.99702C13.5026 7.87651 13.1757 7.0725 12.8608 6.55649C12.7066 6.3019 12.5212 6.06759 12.3089 5.85899C12.2269 5.79931 12.1579 5.72361 12.1059 5.63648C12.054 5.54934 12.0203 5.45258 12.0069 5.35204C11.9934 5.2515 12.0005 5.14928 12.0276 5.05155C12.0548 4.95383 12.1015 4.86263 12.1649 4.78347H12.1634ZM14.7158 1.66344C14.639 1.5999 14.5504 1.55229 14.455 1.52341C14.3596 1.49453 14.2595 1.48496 14.1604 1.49524C14.0613 1.50552 13.9652 1.53547 13.8778 1.58331C13.7904 1.63116 13.7134 1.69595 13.6513 1.77391C13.5892 1.85186 13.5433 1.94141 13.5162 2.03733C13.4891 2.13324 13.4814 2.23359 13.4935 2.33252C13.5056 2.43145 13.5373 2.52696 13.5868 2.61349C13.6363 2.70002 13.7025 2.77581 13.7815 2.83646L13.798 2.85146L13.876 2.91896C13.9465 2.98196 14.05 3.07946 14.1774 3.21146C14.4324 3.47696 14.7773 3.87597 15.1222 4.40247C15.812 5.45398 16.5019 7.002 16.5019 9.00602C16.5057 10.6412 16.0257 12.2409 15.1222 13.6036C14.7773 14.1286 14.4324 14.5246 14.1774 14.7886C14.0569 14.9141 13.9308 15.0342 13.7995 15.1486L13.783 15.1636H13.7815C13.6302 15.2889 13.5341 15.4685 13.5138 15.664C13.4935 15.8594 13.5507 16.055 13.6731 16.2087C13.7955 16.3624 13.9734 16.4619 14.1683 16.4858C14.3633 16.5097 14.5599 16.4561 14.7158 16.3366L14.7653 16.2961L14.8778 16.1986C14.9722 16.1131 15.1027 15.9916 15.2572 15.8311C15.6728 15.3988 16.0474 14.9288 16.3759 14.4271C17.4394 12.8196 18.0044 10.9336 18 9.00602C18.0038 7.07663 17.4389 5.18894 16.3759 3.57896C16.0474 3.07665 15.6735 2.60565 15.2587 2.17195C15.1019 2.00901 14.9378 1.85335 14.7668 1.70544L14.7323 1.67694L14.7218 1.66794L14.7188 1.66494L14.7158 1.66344ZM12.2819 5.83499L12.2789 5.83349L12.2819 5.83499Z" fill="#8C98AD"/>
                                </svg>
                            </Box>
                        </Box>
                    </Box>
                    {/* <Box mt="31px" mb="30px">
                        <Text fontSize={{base:"14px", md:"16px"}}>origin: ${`early 19th century: variant of earlier hollo ; related to holla.`}</Text>
                    </Box> */}
                    <Text fontSize={{base:"14px", md:"16px"}} my={3}>Part Of Speech: Verb</Text>
                    {words?.map(meanings => meanings?.map(meaning => meaning?.definitions?.map((definition,i) => (   
                        <Text key={i} mb={3}>{`${i+1}. ${definition.definition}`}</Text>
                    ))))}
                    <Text>Synonyms:</Text>
                    {words?.map(meanings => meanings?.map((meaning, el) => (  
                       <Text textTransform="capitalize" fontStyle="italic" key={el}>{`${meaning.synonyms}` ? `${meaning.synonyms}` : `${"unavailabe"}`}</Text>
                    )))}

                    <Text fontSize={{base:"14px", md:"16px"}} mb={3} mt={10}>Part Of Speech: Noun</Text>
                    {nouns?.map(meanings => meanings?.map((meaning)=> meaning?.definitions?.map((definition,i) => (   
                        <Text key={i} mb={3}>{`${i+1}. ${definition.definition}`}</Text>
                    ))))}
                    <Text>Synonyms:</Text>
                    {nouns?.map(meanings => meanings?.map((meaning, el) => (  
                       <Text textTransform="capitalize" fontStyle="italic" key={el}>{meaning.synonyms.join(", ")}.</Text>
                    )))}
                    
                </>
                ))
                }
                {/*  */}
            </Box>
        </Box>
    )
};

HomeComp.propTypes={
    bg: PropTypes.node,
    data: PropTypes.array,
    words: PropTypes.array,
    nouns: PropTypes.array,
    interjections: PropTypes.array,
    border: PropTypes.node
}

export default HomeComp;