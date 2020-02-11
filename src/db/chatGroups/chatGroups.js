import firebase from "firebase";

function writeChatGroupData(name, userIds) {
    let groupUsers = {};
    userIds.map(userId => {
        return groupUsers[userId] = true;
    });
    firebase.database().ref('chatGroups/' + name).set(groupUsers);
}


export {
    writeChatGroupData
};
