/*
* User interface
* ===================================
* Interface with the basic user data
*
* @param { id } string - User id
* @param { name } string - User name
* @param { email } string - User email
* @param { username } string - User username
* @param { token } string - JWT auth token
*/
export default interface UserModel {
    id: string;
    name: string;
    email: string;
    username: string;
    token: string;
}
