import firebase from "firebase";

function writeUserData(user) {
    const { userId, name, email, imageUrl } = user;
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}

function readUserData(userId) {
    return new Promise(firebase.ref('/users/' + userId).once('value').then((res, err) => {
        if(err) {
            return Promise.reject(err);
        }
        return Promise.resolve(res);
    }));
}

export {
    writeUserData,
    readUserData
}
