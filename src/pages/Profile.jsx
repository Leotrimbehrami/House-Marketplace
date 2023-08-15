import { useState, useEffect } from "react"
import { getAuth } from "firebase/auth"


function Profile() {
  const [user, setUser] = useState(null)

  const auth = getAuth()
  useEffect(() => {
    console.log(auth.currentUser)
  }, [])

  return user ? <h1>{user.display}</h1> : 'Not Looged In'
  
}

export default Profile
