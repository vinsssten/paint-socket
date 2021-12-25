import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function App() {
    const [isLoggined, setIsLoggined] = useState<Boolean>(true)
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggined) {
            navigate('/singledrawing')
        }
    }, [])


    return (
        <div>
            Login Page
        </div>
    )
}

export default App
