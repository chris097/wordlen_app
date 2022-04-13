import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from '../../public/svgs/logo.svg';
import {BsFacebook, BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs';

const FooterComp = ({bgColor, borderColor}) => {
    return(
        <React.Fragment>
            <Box bgColor={bgColor} pb={16} borderTop={`1px solid ${borderColor}`}>
                 <Box w="full" pos="absolute" mt="92px">
                    <Box w="30%" pos="relative" textAlign="center" mx="auto">
                        <Text fontSize="96px">Wordlens</Text>
                        <Text fontSize={14} ml="20px" textAlign="start">The API used to serve this data was provided by dictionaryapi.dev, click on the link below to read more</Text>
                        <Box d="flex" mt="21px" ml="20px" alignItems="center" pl={2} w="220px" h="48px" border="2px solid #000" rounded="50px" fontSize={14}>
                            <Text textAlign="center">Visit API documentation</Text>
                        </Box>
                    </Box>
                </Box>
                <Box maxW="90%" mx="auto">
                    <Box d="flex" justifyContent="space-between">
                        <span>
                            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M99.5 64.6446C99.5 83.8946 83.8947 99.4999 64.6446 99.4999C45.3946 99.4999 29.7893 83.8946 29.7893 64.6446C29.7893 45.3945 45.3946 29.7892 64.6446 29.7892C83.8947 29.7892 99.5 45.3945 99.5 64.6446Z" stroke="#616681"/>
                                <path d="M170.211 64.6446C170.211 83.8946 154.605 99.4999 135.355 99.4999C116.105 99.4999 100.5 83.8946 100.5 64.6446C100.5 45.3945 116.105 29.7892 135.355 29.7892C154.605 29.7892 170.211 45.3945 170.211 64.6446Z" stroke="#616681"/>
                                <path d="M99.5 135.355C99.5 154.605 83.8947 170.211 64.6446 170.211C45.3946 170.211 29.7893 154.605 29.7893 135.355C29.7893 116.105 45.3946 100.5 64.6446 100.5C83.8947 100.5 99.5 116.105 99.5 135.355Z" stroke="#616681"/>
                                <path d="M170.211 135.355C170.211 154.605 154.605 170.211 135.355 170.211C116.105 170.211 100.5 154.605 100.5 135.355C100.5 116.105 116.105 100.5 135.355 100.5C154.605 100.5 170.211 116.105 170.211 135.355Z" stroke="#616681"/>
                                <ellipse cx="100" cy="50.0001" rx="35.3553" ry="35.3553" transform="rotate(45 100 50.0001)" stroke="black" strokeOpacity="0.12"/>
                                <ellipse cx="150" cy="100" rx="35.3553" ry="35.3553" transform="rotate(45 150 100)" stroke="black" strokeOpacity="0.12"/>
                                <ellipse cx="50" cy="100" rx="35.3553" ry="35.3553" transform="rotate(45 50 100)" stroke="black" strokeOpacity="0.12"/>
                                <ellipse cx="100" cy="150" rx="35.3553" ry="35.3553" transform="rotate(45 100 150)" stroke="black" strokeOpacity="0.12"/>
                            </svg>
                        </span>
                        <span style={{marginTop: "20px"}}>
                            <svg width="170" height="86" viewBox="0 0 170 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.707107" y="42.4264" width="59" height="59" transform="rotate(-45 0.707107 42.4264)" stroke="#616681"/>
                                <rect x="85.4171" y="42.8531" width="59" height="59" transform="rotate(-45 85.4171 42.8531)" stroke="#616681"/>
                                <rect x="43.4171" y="42.8531" width="59" height="59" transform="rotate(-45 43.4171 42.8531)" stroke="black" strokeOpacity="0.12"/>
                            </svg>
                        </span>
                    </Box>
                    <Box mt={6} mx={24} d="flex" justifyContent="space-between">
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_376_18" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M67.2837 63.3554C67.2837 82.8816 81.354 98.7107 98.7106 98.7107V28C81.354 28.0001 67.2837 43.8292 67.2837 63.3554Z"/>
                        </mask>
                        <path d="M98.7106 98.7107L98.7106 99.7107H99.7106V98.7107H98.7106ZM98.7106 28H99.7106V27L98.7106 27L98.7106 28ZM98.7106 97.7107C82.0137 97.7107 68.2837 82.4433 68.2837 63.3554H66.2837C66.2837 83.3199 80.6942 99.7107 98.7106 99.7107L98.7106 97.7107ZM99.7106 98.7107V28H97.7106V98.7107H99.7106ZM68.2837 63.3554C68.2837 44.2675 82.0137 29.0001 98.7106 29L98.7106 27C80.6942 27.0001 66.2837 43.3909 66.2837 63.3554H68.2837Z" fill="#616681" mask="url(#path-1-inside-1_376_18)"/>
                        <mask id="path-3-inside-2_376_18" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M130.137 134.066C130.137 114.54 116.067 98.7108 98.7106 98.7107V169.421C116.067 169.421 130.137 153.592 130.137 134.066Z"/>
                        </mask>
                        <path d="M98.7106 98.7107L98.7106 97.7107H97.7106V98.7107H98.7106ZM98.7106 169.421H97.7106V170.421L98.7106 170.421L98.7106 169.421ZM98.7106 99.7107C115.407 99.7108 129.137 114.978 129.137 134.066H131.137C131.137 114.102 116.727 97.7108 98.7106 97.7107L98.7106 99.7107ZM97.7106 98.7107V169.421H99.7106V98.7107H97.7106ZM129.137 134.066C129.137 153.154 115.407 168.421 98.7106 168.421L98.7106 170.421C116.727 170.421 131.137 154.031 131.137 134.066H129.137Z" fill="#616681" mask="url(#path-3-inside-2_376_18)"/>
                        <mask id="path-5-inside-3_376_18" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M28 98.7107L98.7107 98.7107C98.7107 116.067 82.8816 130.138 63.3553 130.138C43.8291 130.138 28 116.067 28 98.7107Z"/>
                        </mask>
                        <path d="M98.7107 98.7107H99.7107V97.7107H98.7107V98.7107ZM28 98.7107V97.7107H27L27 98.7107H28ZM98.7107 97.7107L28 97.7107L28 99.7107L98.7107 99.7107V97.7107ZM97.7107 98.7107C97.7107 115.408 82.4433 129.138 63.3553 129.138V131.138C83.3199 131.138 99.7107 116.727 99.7107 98.7107H97.7107ZM63.3553 129.138C44.2674 129.138 29 115.408 29 98.7107H27C27 116.727 43.3908 131.138 63.3553 131.138V129.138Z" fill="#616681" mask="url(#path-5-inside-3_376_18)"/>
                        <mask id="path-7-inside-4_376_18" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M169.421 98.7107L98.7105 98.7107C98.7105 81.3541 114.54 67.2838 134.066 67.2838C153.592 67.2838 169.421 81.3541 169.421 98.7107Z"/>
                        </mask>
                        <path d="M98.7105 98.7107H97.7105V99.7107H98.7105V98.7107ZM169.421 98.7107V99.7107H170.421V98.7107H169.421ZM98.7105 99.7107L169.421 99.7107V97.7107L98.7105 97.7107V99.7107ZM99.7105 98.7107C99.7105 82.0139 114.978 68.2838 134.066 68.2838V66.2838C114.101 66.2838 97.7105 80.6943 97.7105 98.7107H99.7105ZM134.066 68.2838C153.154 68.2838 168.421 82.0139 168.421 98.7107H170.421C170.421 80.6943 154.03 66.2838 134.066 66.2838V68.2838Z" fill="#616681" mask="url(#path-7-inside-4_376_18)"/>
                        <mask id="path-9-inside-5_376_18" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M150.032 50.0318L150 50L100 100C87.7271 87.727 88.9707 66.5849 102.778 52.7778C116.585 38.9707 137.727 37.727 150 50C150.011 50.0106 150.021 50.0212 150.032 50.0318Z"/>
                        </mask>
                        <path d="M150 50L151.061 48.9393L150 47.8787L148.939 48.9393L150 50ZM150.032 50.0318L148.971 51.0925L151.094 48.9729L150.032 50.0318ZM100 100L98.9394 101.061L100 102.121L101.061 101.061L100 100ZM148.939 51.0607L148.971 51.0925L151.092 48.9712L151.061 48.9393L148.939 51.0607ZM101.061 101.061L151.061 51.0607L148.939 48.9393L98.9394 98.9394L101.061 101.061ZM101.061 98.9394C89.4875 87.3662 90.4963 67.1807 103.838 53.8384L101.717 51.7171C87.4452 65.9891 85.9666 88.0879 98.9394 101.061L101.061 98.9394ZM103.838 53.8384C117.181 40.4962 137.366 39.4874 148.939 51.0607L151.061 48.9393C138.088 35.9666 115.989 37.4451 101.717 51.7171L103.838 53.8384ZM148.939 51.0607C148.949 51.0707 148.959 51.0808 148.97 51.0908L151.094 48.9729C151.083 48.9617 151.072 48.9505 151.061 48.9393L148.939 51.0607Z" fill="black" fillOpacity="0.08" mask="url(#path-9-inside-5_376_18)"/>
                        <mask id="path-11-inside-6_376_18" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M49.9654 149.965L50.0002 150L100 100C112.273 112.273 111.03 133.415 97.2224 147.222C83.4153 161.029 62.2732 162.273 50.0002 150C49.9886 149.989 49.977 149.977 49.9654 149.965Z"/>
                        </mask>
                        <path d="M50.0002 150L48.9396 151.061L50.0002 152.121L51.0609 151.061L50.0002 150ZM49.9654 149.965L51.0261 148.905L48.903 151.024L49.9654 149.965ZM100 100L101.061 98.9394L100 97.8788L98.9395 98.9394L100 100ZM51.0609 148.939L51.0261 148.905L48.9048 151.026L48.9396 151.061L51.0609 148.939ZM98.9395 98.9394L48.9396 148.939L51.0609 151.061L101.061 101.061L98.9395 98.9394ZM98.9395 101.061C110.513 112.634 109.504 132.819 96.1618 146.162L98.2831 148.283C112.555 134.011 114.034 111.912 101.061 98.9394L98.9395 101.061ZM96.1618 146.162C82.8195 159.504 62.6341 160.513 51.0609 148.939L48.9395 151.061C61.9123 164.034 84.0111 162.555 98.2831 148.283L96.1618 146.162ZM51.0609 148.939C51.0499 148.928 51.0389 148.917 51.0279 148.906L48.903 151.024C48.9151 151.036 48.9273 151.049 48.9395 151.061L51.0609 148.939Z" fill="black" fillOpacity="0.08" mask="url(#path-11-inside-6_376_18)"/>
                        <mask id="path-13-inside-7_376_18" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M50 50.0001C37.7271 62.2731 38.9707 83.4152 52.7778 97.2223C66.5849 111.029 87.7271 112.273 100 100C100.011 99.9891 100.022 99.9781 100.033 99.9671L100 100L50 50.0001Z"/>
                        </mask>
                        <path d="M50 50.0001L51.0607 48.9394L50 47.8788L48.9394 48.9394L50 50.0001ZM100.033 99.9671L101.095 101.026L98.9724 98.9064L100.033 99.9671ZM100 100L98.9393 101.061L100 102.121L101.061 101.061L100 100ZM53.8385 96.1616C40.4963 82.8194 39.4875 62.634 51.0607 51.0607L48.9394 48.9394C35.9666 61.9122 37.4452 84.011 51.7172 98.283L53.8385 96.1616ZM98.9394 98.9394C87.3662 110.513 67.1807 109.504 53.8385 96.1616L51.7172 98.283C65.9892 112.555 88.0879 114.034 101.061 101.061L98.9394 98.9394ZM98.9708 98.908C98.9602 98.9186 98.9497 98.9291 98.9394 98.9394L101.061 101.061C101.072 101.049 101.084 101.038 101.095 101.026L98.9708 98.908ZM98.9724 98.9064L98.9393 98.9394L101.061 101.061L101.094 101.028L98.9724 98.9064ZM101.061 98.9394L51.0607 48.9394L48.9394 51.0607L98.9393 101.061L101.061 98.9394Z" fill="black" fillOpacity="0.08" mask="url(#path-13-inside-7_376_18)"/>
                        <mask id="path-15-inside-8_376_18" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M150 150C162.273 137.727 161.029 116.585 147.222 102.778C133.415 88.9707 112.273 87.727 99.9999 100C99.9901 100.01 99.9803 100.02 99.9705 100.03L100 100L150 150Z"/>
                        </mask>
                        <path d="M150 150L148.939 151.061L150 152.121L151.061 151.061L150 150ZM99.9705 100.03L98.9081 98.9707L101.031 101.09L99.9705 100.03ZM100 100L101.061 98.9394L100 97.8787L98.9393 98.9394L100 100ZM146.162 103.838C159.504 117.181 160.513 137.366 148.939 148.939L151.061 151.061C164.033 138.088 162.555 115.989 148.283 101.717L146.162 103.838ZM101.061 101.061C112.634 89.4875 132.819 90.4962 146.162 103.838L148.283 101.717C134.011 87.4451 111.912 85.9666 98.9393 98.9394L101.061 101.061ZM101.033 101.088C101.042 101.079 101.051 101.07 101.061 101.061L98.9393 98.9394C98.9291 98.9496 98.9186 98.96 98.9081 98.9707L101.033 101.088ZM101.031 101.09L101.061 101.061L98.9393 98.9394L98.9098 98.9689L101.031 101.09ZM98.9393 101.061L148.939 151.061L151.061 148.939L101.061 98.9394L98.9393 101.061Z" fill="black" fillOpacity="0.08" mask="url(#path-15-inside-8_376_18)"/>
                        </svg>

                        <span style={{marginTop: "20px"}}>
                            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M99.5 64.6446C99.5 83.8946 83.8947 99.4999 64.6446 99.4999C45.3946 99.4999 29.7893 83.8946 29.7893 64.6446C29.7893 45.3945 45.3946 29.7892 64.6446 29.7892C83.8947 29.7892 99.5 45.3945 99.5 64.6446Z" stroke="#616681"/>
                                <path d="M170.211 64.6446C170.211 83.8946 154.605 99.4999 135.355 99.4999C116.105 99.4999 100.5 83.8946 100.5 64.6446C100.5 45.3945 116.105 29.7892 135.355 29.7892C154.605 29.7892 170.211 45.3945 170.211 64.6446Z" stroke="#616681"/>
                                <path d="M99.5 135.355C99.5 154.605 83.8947 170.211 64.6446 170.211C45.3946 170.211 29.7893 154.605 29.7893 135.355C29.7893 116.105 45.3946 100.5 64.6446 100.5C83.8947 100.5 99.5 116.105 99.5 135.355Z" stroke="#616681"/>
                                <path d="M170.211 135.355C170.211 154.605 154.605 170.211 135.355 170.211C116.105 170.211 100.5 154.605 100.5 135.355C100.5 116.105 116.105 100.5 135.355 100.5C154.605 100.5 170.211 116.105 170.211 135.355Z" stroke="#616681"/>
                                <ellipse cx="100" cy="50.0001" rx="35.3553" ry="35.3553" transform="rotate(45 100 50.0001)" stroke="black" strokeOpacity="0.12"/>
                                <ellipse cx="150" cy="100" rx="35.3553" ry="35.3553" transform="rotate(45 150 100)" stroke="black" strokeOpacity="0.12"/>
                                <ellipse cx="50" cy="100" rx="35.3553" ry="35.3553" transform="rotate(45 50 100)" stroke="black" strokeOpacity="0.12"/>
                                <ellipse cx="100" cy="150" rx="35.3553" ry="35.3553" transform="rotate(45 100 150)" stroke="black" strokeOpacity="0.12"/>
                            </svg>
                        </span>
                    </Box>
                    <Box mt="50.5px" d="flex" justifyContent="space-between">
                        <Image src={logo} alt="logo" />
                        <HStack spacing={6}>
                            <BsFacebook />
                            <BsTwitter />
                            <BsGithub />
                            <BsLinkedin />
                        </HStack>
                        <Box d="flex" fontSize={14}>
                            <Box mr={16}>Term use of.</Box>
                            <Box>Privacy Policy</Box>
                        </Box>
                    </Box>
                    <Box fontSize={14} textAlign="center" mt="35.5px">Copyright © 2022 Wordlens. All rights reserved.</Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default FooterComp;