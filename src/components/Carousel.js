import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardMedia, Typography, Box, CardActionArea, Grid } from '@mui/material';
import { Circle, CircleOutlined, ArrowUpwardRounded, ArrowDownwardRounded } from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion'

export const VertCarousel = (props) => {
    // const initialMessageArr = [{
    //     id: 0,
    //     title: "The Privacy Engineer's Manifesto",
    //     image: "https://images-na.ssl-images-amazon.com/images/I/41WkDYRFxyL._SX348_BO1,204,203,200_.jpg",
    //     text: "The first book of its kind, offering industry-proven solutions",
    //     link: "https://www.amazon.com/Privacy-Engineers-Manifesto-Getting-Policy/dp/1430263555"
    // }, {
    //     id: 1,
    //     title: "5 Ways to Protect Yourself",
    //     image: "https://miro.medium.com/fit/c/176/176/1*0VZbtd0GNGfjG_7HXqFK6w.png",
    //     text: "As a consumer, there are many things you can do to protect yourself",
    //     link: "https://medium.com/berkeleyischool/5-ways-to-protect-yourself-from-a-cyberattack-2d09a5b9fb51"
    // }, {
    //     id: 2,
    //     title: "Smarter Markets: Michelle Dennedy",
    //     image: "https://pbcdn1.podbean.com/imglogo/image-logo/10226384/UPDATED_RSS_POD_LOGO_pz94dw.png",
    //     text: "Erik Townsend interviews new Smarter Markets host Michelle Dennedy",
    //     link: "https://smartermarkets.podbean.com/e/michelle-dennedy-crusading-to-protect-digital-privacy/"
    // }, 
    // {
    //     id: 3,
    //     title: "Private Market Trends of 2022",
    //     image: "https://carta.com/events/wp-content/uploads/sites/3/2022/01/Private-Market-Trends-2022-2.png",
    //     text: "Join Michelle in discussion with CARTA",
    //     link: "https://carta.com/events/private-market-trends-of-2022/"
    // },
    // {
    //     id: 4,
    //     title: "Podcast: Social Media & Society",
    //     image: "https://pbcdn1.podbean.com/imglogo/image-logo/10226384/UPDATED_RSS_POD_LOGO_pz94dw.png",
    //     text: "Michelle Dennedy interviews Kirstine Stewart of the World Economic Forum",
    //     link: "https://smartermarketspod.com/kirstine-stewart-head-of-media-sport-entertainment-for-the-world-economic-forum/"
    // }]

    const initialMessageArr = [
        {
            id: 0,
            title: "First Item",
            text: "The descriptions should not exceed one or maybe two lines.",
            image: "https://images-na.ssl-images-amazon.com/images/I/41WkDYRFxyL._SX348_BO1,204,203,200_.jpg",
            link: "https://www.amazon.com/Privacy-Engineers-Manifesto-Getting-Policy/dp/1430263555"
        },
        {
            id: 1,
            title: "Second Item",
            text: "The descriptions should not exceed one or maybe two lines.",
            image: "https://images-na.ssl-images-amazon.com/images/I/41WkDYRFxyL._SX348_BO1,204,203,200_.jpg",
            link: "https://www.amazon.com/Privacy-Engineers-Manifesto-Getting-Policy/dp/1430263555"
        },
        {
            id: 2,
            title: "Third Item",
            text: "The descriptions should not exceed one or maybe two lines.",
            image: "https://images-na.ssl-images-amazon.com/images/I/41WkDYRFxyL._SX348_BO1,204,203,200_.jpg",
            link: "https://www.amazon.com/Privacy-Engineers-Manifesto-Getting-Policy/dp/1430263555"
        },
        {
            id: 3,
            title: "Fourth Item",
            text: "The descriptions should not exceed one or maybe two lines.",
            image: "https://images-na.ssl-images-amazon.com/images/I/41WkDYRFxyL._SX348_BO1,204,203,200_.jpg",
            link: "https://www.amazon.com/Privacy-Engineers-Manifesto-Getting-Policy/dp/1430263555"
        },
        {
            id: 4,
            title: "Fifth Item",
            text: "The descriptions should not exceed one or maybe two lines.",
            image: "https://images-na.ssl-images-amazon.com/images/I/41WkDYRFxyL._SX348_BO1,204,203,200_.jpg",
            link: "https://www.amazon.com/Privacy-Engineers-Manifesto-Getting-Policy/dp/1430263555"
        }
    ]

    const { autoScroll } = props
    const [activeMessageArr, setActiveMessageArr] = useState(initialMessageArr)
    const [prev, setPrev] = useState(false)
    const [first, setFirst] = useState(0)
    const [timer, setTimer] = useState(autoScroll)
    const [isScrolling, setIsScrolling] = useState(false)
    const controls = useAnimation()

    // opacity function
    // Math.exp(-i/2)

    const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];

    const handleNext = async () => {
        setPrev(false)
        setIsScrolling(true)

        let next = first + 1

        await controls.start(i => ({
            y: 0,
            opacity: Math.exp(-i / 2),
            transition: {
                duration: 0
            }
        }))

        await controls.start(i => ({
            y: -108,
            opacity: i === 0 ? 0 : Math.exp(-(i - 1) / 2),
            transition: {
                duration: 0.3
            }
        }))

        await controls.start(i => ({
            y: 0,
            opacity: Math.exp(-(i - 1) / 2),
            transition: {
                duration: 0
            }
        }))

        if (next === initialMessageArr.length - 1) {
            setFirst(initialMessageArr.length - 1)
        } else {
            setFirst(next % initialMessageArr.length)
        }
        setIsScrolling(false)
        return controls.stop
    }

    const handlePrev = async () => {
        setPrev(true)
        setIsScrolling(true)

        let prev = first - 1

        if (prev < 0) {
            setFirst(initialMessageArr.length - 1)
        } else {
            setFirst(prev % initialMessageArr.length)
        }

        await controls.start(i => ({
            y: -108,
            opacity: i === 0 ? 0 : Math.exp(-i / 2),
            transition: {
                duration: 0
            }
        }))

        await controls.start(i => ({
            y: -108,
            opacity: Math.exp(-i / 2),
            transition: {
                duration: 0
            }
        }))

        await controls.start(i => ({
            y: 0,
            opacity: i === initialMessageArr.length ? 0 : Math.exp(-i / 2),
            transition: {
                duration: 0.3
            }
        }))
        setIsScrolling(false)
        return controls.stop
    }

    const turnOffTimer = () => {
        setTimer(false)
    }

    const turnOnTimer = () => {
        setTimer(true)
    }

    useEffect(() => {
        if (autoScroll && timer) {
            const interval = setInterval(() => {
                handleNext();
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [timer, first])

    return (
        <Box
            sx={{ display: 'flex', flexDirection: 'column', mt: 4, alignItems: 'stretch', justifyContent: 'center', maxHeight: '80vh', width: 'inherit' }}
            onMouseEnter={() => turnOffTimer()}
            onMouseLeave={() => turnOnTimer()}
        >
            <Grid container>
                <Grid item xs={1} sx={{ display: 'flex', flexDirection: 'column' }}>
                    {
                        activeMessageArr.map((e, i) => (
                            i === first || i === initialMessageArr.length + first ?
                                <Circle
                                    key={i}
                                    sx={{ pl: 0.5, width: '0.75em' }}
                                />
                                :
                                <CircleOutlined
                                    key={i}
                                    sx={{ pl: 1, width: '0.75em' }}
                                    onClick={!isScrolling ? () => {
                                        setActiveMessageArr(offset(initialMessageArr, i))
                                        setFirst(i)
                                    } : null}
                                />
                        ))
                    }
                </Grid>
                <Grid item xs={11}>
                    <Card
                        onClick={!isScrolling ? handlePrev : null}
                        sx={{ display: 'flex', flexDirection: 'row', mb: 1, maxWidth: 345, maxHeight: "100px", mx: 1, opacity: 0.5, zIndex: '1', alignContent: 'center', justifyContent: 'center' }}
                    >
                        <ArrowUpwardRounded
                            sx={{ mt: 0.5 }}
                        />
                    </Card>
                    {
                        offset(initialMessageArr, first).map((e, i) => (
                            i < 4 ? <Card
                                key={e.id}
                                sx={{ height: "auto", maxWidth: 345, mx: 1, mb: 1, opacity: Math.exp(-i / 2), zIndex: -1 }}
                                custom={i}
                                initial={prev ? {
                                    y: -108,
                                    opacity: 0
                                } : {
                                }}
                                component={motion.div}
                                animate={controls}
                                disableRipple={!isScrolling ? false : true}
                            >
                                <CardActionArea 
                                    href={!isScrolling ? e.link : null}
                                    target="_blank"
                                    >
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <CardMedia
                                                component="img"
                                                src={e.image}
                                                sx={{maxHeight: "100px"}}
                                                 />
                                        </Grid>
                                        <Grid item xs={9}>
                                            <CardContent>
                                                <Typography gutterBottom variant="subtitle2" component="div">
                                                    {e.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {e.text}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                    </Grid>
                                </CardActionArea>
                            </Card> : null
                        ))
                    }
                    <Card
                        onClick={!isScrolling ? handleNext : null}
                        sx={{ display: 'flex', flexDirection: 'row', mb: 1, maxWidth: 345, height: 32, width: 'inherit', mx: 1, opacity: 0.5, zIndex: '1', alignContent: 'center', justifyContent: 'center' }}
                    >
                        <ArrowDownwardRounded
                            sx={{ mt: 0.5 }}
                        />
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}