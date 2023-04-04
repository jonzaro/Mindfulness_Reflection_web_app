import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    
    const [reflections, setReflections] = useState([])

    // useEffect(() => {
    //     getUserReflections()
    // }, [])
    
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") ||  "",
        reflections: [],
        quote: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)
    const [quotes, setQuotes] = useState([])


    function getRandomQuotes() {
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
        setQuotes(data.content);
        })
        .catch(error => console.error(error));
    }

    //signup function
    function signup(credentials) {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const {user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user)) 
                setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    //login function
    function login(credentials) {
        axios.post("/auth/login", credentials)
        .then(res => {
            const {user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
    })
        
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    //logout function
    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            todos: []
        })
    }

    //Auth error function
    function handleAuthErr(errMsg) {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    //reset auth error
    function resetAuthErr() {
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    //get reflections by user function
    function getUserReflections() {
        userAxios.get("/api/reflection/user")
            .then(res => {
                setReflections(res.data)
            //     setUserState(prevState => ({
                    
            //         ...prevState,
            //         reflections: res.data
            //     }))
            
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    //add reflections function
    function addReflection(newReflection){
        userAxios.post("/api/reflection", newReflection)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    reflections: [...prevState.reflections, res.data]
                }))
            })
            
            .then(() => getUserReflections())
            .catch(err => console.log (err.response.data.errMsg))
    }

    //delete reflections function
    function deleteReflection(reflectionId) {
        console.log('Deleting reflection with ID:', reflectionId);

        userAxios.delete(`/api/reflection/${reflectionId}`)
            .then(res => {
                setReflections(prevState => prevState.filter(reflection => reflection._id !== reflectionId
            ))})

            .catch(err => console.log(err.response.data.errMsg))
    }





    return (
        <UserContext.Provider 
            value={{
                ...userState,
                signup,
                login,
                logout,
                addReflection,
                deleteReflection,
                resetAuthErr,
                reflections,
                getUserReflections,
                getRandomQuotes,
                setQuotes,
                quotes
            }}>
            {props.children}
        </UserContext.Provider>
    )
}