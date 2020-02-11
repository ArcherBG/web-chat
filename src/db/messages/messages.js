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

function readMessageData(groupName) {
    return firebase.database.reg(`messages/${groupName}/`);
}

function listenForNewMessages(groupName, callback) {
    const messagesRef = firebase.database().ref('messages/' + groupName);
    messagesRef.on('child_added', function (data) {
        callback(data);
    });
}

export {
    writeMessageData,
    readMessageData,
    listenForNewMessages,
}
