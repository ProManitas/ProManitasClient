import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import {CodeSnippet} from "./code-snippet"



const Profile = () => {
    const {user} = useAuth0()

    if(!user){
        return null;
    }

    return (
        
            <div>
                <div>
                <h2>Perfil de usuario</h2>
                <p>
                    <span>
                    You can use the <strong>ID Token</strong> to get the profile
              information of an authenticated user.
                    </span>
                    <span>
                    <strong>Only authenticated users can access this page.</strong>
                    </span>
                </p>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>

                {/* <CodeSnippet
                title="Decoded ID Token"
                code={JSON.stringify(user, null, 2)}
              /> */}
                </div>
                
            </div>
        
    )
}

export default Profile;