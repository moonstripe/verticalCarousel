import React, { useState, useEffect } from 'react'
import { Card, CardContent, Typography, Box, CardActionArea, Grid } from '@mui/material';
import { Circle, CircleOutlined } from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion'

export const VertCarousel = (props) => {
    const initialMessageArr = [{
        id: 0,
        title: "hello",
        text: "this is the first item in the carousel"
    }, {
        id: 1,
        title: "what's up",
        text: "this is the second item in the carousel"
    }, {
        id: 2,
        title: "howdy",
        text: "this is the third item in the carousel"
    }, {
        id: 3,
        title: "pip pip",
        text: "this is the fourth item in the carousel"
    }, {
        id: 4,
        title: "goodbye",
        text: "this is the fifth item in the carousel"
    }]

    const { autoScroll } = props
    const [activeMessageArr, setActiveMessageArr] = useState(initialMessageArr)
    const [prev, setPrev] = useState(false)
    const [first, setFirst] = useState(0)
    const [timer, setTimer] = useState(autoScroll)
    const controls = useAnimation()

    // opacity function
    // Math.exp(-i/2)

    const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];

    const handleNext = async (e, k) => {
        setPrev(false)

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
                duration: 1
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

        return controls.stop

    }

    const handlePrev = async () => {
        setPrev(true)

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
                duration: 1
            }
        }))

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
            }, 1500000);
            return () => clearInterval(interval);
        }
    }, [timer])

    return (
        <Box
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center', maxHeight: '80vh', width: 'inherit', zIndex: "-3" }}
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
                                    onClick={() => {
                                        setActiveMessageArr(offset(initialMessageArr, i))
                                        setFirst(i)
                                    }}
                                />
                        ))
                    }
                </Grid>
                <Grid item xs={11}>
                    <Card
                        onClick={handlePrev}
                        sx={{ mb: 1, maxWidth: 345, height: 32, mx: 1, zIndex: '1' }}
                    >
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                
                            </Typography>
                        </CardContent>
                    </Card>
                    {
                        offset(initialMessageArr, first).map((e, i) => (
                            i < 4 ? <Card
                                key={e.id}
                                sx={{ height: "100px", maxWidth: 345, mx: 1, mb: 1, opacity: Math.exp(-i / 2), zIndex: -1 }}
                                custom={i}
                                initial={prev ? {
                                    y: -108,
                                    opacity: 0
                                } : {}}
                                component={motion.div}
                                animate={controls}
                            >
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {e.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {e.text}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card> : null
                        ))
                    }
                    <Card
                        onClick={handleNext}
                        sx={{ mb: 1, maxWidth: 345, height: 32, width: 'inherit', mx: 1, zIndex: '1' }}
                    >
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}