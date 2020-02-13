import firebase from "firebase";

function writeMessageData(groupName,  username, userId, message) {
    const messageData = {
        author: username,
        userId,
        message,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
    };

    const newMessageKey = firebase.database().ref().child('messages').push().key;

    const updates = {};
    updates['messages/' + groupName + '/' + newMessageKey] = messageData;

    return firebase.database().ref().update(updates);
}

async function readMessageData(groupName) {
    const snapshot = await firebase.database().ref(`messages/${groupName}/`).once('value');
    return snapshot.val();
}

function listenForNewMessages(groupName, callback) {
    const messagesRef = firebase.database().ref('messages/' + groupName);
    messagesRef.on('child_added', function (data) {
        callback(data.val());
    });
}

export {
    writeMessageData,
    readMessageData,
    listenForNewMessages,
}
