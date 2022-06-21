import { initializeApp } from 'firebase/app'
import {
    browserSessionPersistence,
    getAuth,
    GoogleAuthProvider,
    initializeAuth,
    onAuthStateChanged,
    signInWithPopup,
    signOut
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { FirebaseConfig } from './models/firebaseConfig.model'
// import { getUser } from './users'



export class FirebaseClass {

    static init(){
        console.log('comenzando')
    }


  /*   init(firebaseConfig: FirebaseConfig) {
        this.app = initializeApp(firebaseConfig)
    }

    app: any = null

  
    static auth = getAuth()
    static db = getFirestore(this.)
    static storage = getStorage(this.app)

    authStateChanged = (cb = (user) => { }) => {
        return onAuthStateChanged(auth, async (user) => {
            if (user) {
                // const userData = await getUser(user.uid)
                let userData = {

                }
                cb(userData)
            } else {
                cb(null)
            }
        })
    }

    googleLogin = async () => {
        const provider = new GoogleAuthProvider()
        provider.addScope('profile')
        provider.addScope('email')

        try {
            const result = await signInWithPopup(auth, provider)
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            // The signed-in user info.
            const user = result.user
            // console.log(user)
            const { displayName, email, photoURL, providerId, uid } = user
            return {
                id: uid,
                displayName,
                email,
                photoURL,
                providerId
            }

            // return await createNewUser(user)
        } catch (error) {
            console.error(error)
            // Handle Errors here.

            const errorCode = error.code
            const errorMessage = error.message
            // The email of the user's account used.
            const email = error.email
            // The AuthCredential type that was used.
            const credential_1 = GoogleAuthProvider.credentialFromError(error)
            throw new Error('Could not login with Google')
            return null
        }
    }

    logOut = () =>
        signOut(auth)
            .then((res) => console.log(`signout`))
            .catch((err) => console.error(`err`, err))

 */

} 
