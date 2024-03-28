import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export default function Profile() {

    const { currentUser } = useContext<any>(UserContext)
    return (
        <>
            <div>Hello {currentUser.name} </div>
        </>
    )
}
