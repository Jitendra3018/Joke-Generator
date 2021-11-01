import { useRef, useState } from 'react'
import './App.css'
import useRandomJoke from './useRandomJoke'
import styled from 'styled-components'

import ProgressBar from '@badrap/bar-of-progress'

const progress = new ProgressBar({
    // The size (height) of the progress bar.
    // Numeric values get converted to px.
    size: 4,

    // Color of the progress bar.
    // Also used for the glow around the bar.
    color: '#29e',

    // Class name used for the progress bar element.
    className: 'bar-of-progress',

    // How many milliseconds to wait before the progress bar
    // animation starts after calling .start().
    delay: 80,
})

progress.start()

setTimeout(() => {
    progress.finish()
}, 1000)

function App() {
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)

    const [firstName, setFirstName] = useState('John')
    const [lastName, setLastName] = useState('Doe')

    const joke = useRandomJoke(firstName, lastName)

    const generateJoke = (e) => {
        e.preventDefault()
        setFirstName(firstNameRef.current.value)
        setLastName(lastNameRef.current.value)
    }

    return (
        <Container>
            <Background />
            <Main>
                <Heading>Joke Generator</Heading>

                <Form>
                    <InputFeilds>
                        <Input
                            placeholder="Enter your First Name"
                            // value={firstName}
                            // onChange={(e) => setFirstName(e.target.value)}
                            ref={firstNameRef}
                            required
                        />
                        <Input
                            placeholder="Enter your Last Name"
                            // value={lastName}
                            // onChange={(e) => setLastName(e.target.value)}
                            ref={lastNameRef}
                            required
                        />
                    </InputFeilds>
                    <Button onClick={generateJoke}>Generate Joke</Button>
                </Form>
            </Main>
            <Para>{joke}</Para>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: url('https://static.vecteezy.com/system/resources/previews/002/294/580/original/laughing-emoji-social-media-message-background-copy-space-for-a-text-vector.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow-x: hidden;
`

const Background = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    background-color: #000;
    opacity: 0.7;
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: absolute;
    max-width: 50%;
    text-align: center;
    margin-top: -20%;
`

const Heading = styled.h1`
    color: white;
    font-size: 48px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const InputFeilds = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`

const Input = styled.input`
    padding: 10px;
    outline: none;
    font-size: 18px;
    /* font-family: 'Comic Sans MS'; */
    background: transparent;
    border: none;
    border-bottom: 1px solid #a6e7ff;
    color: white;
`

const Button = styled.button`
    font-size: 18px;
    padding: 10px 20px;
    max-width: 100%;
    cursor: pointer;
    /* font-family: 'Comic Sans MS'; */
`

const Para = styled.p`
    position: absolute;
    color: white;
    margin-top: 400px;
    font-size: 25px;
    max-width: 50%;
    text-align: center;
    margin-bottom: 10%;
`

export default App
