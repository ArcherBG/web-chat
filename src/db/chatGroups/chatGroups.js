import firebase from "firebase";

function writeChatGroupData(name, users) {
    let groupUsers = {};
    users.map(user => {
        const formattedUser = {
            userId: user.userId,
            name: user.name,
        }
        groupUsers[user.userId] = formattedUser;
        return groupUsers;
    });
    firebase.database().ref('chatGroups/' + name).set(groupUsers);
}

async function readChatGroupData() {
    const snapshot  = await firebase.database().ref('chatGroups/').once('value');
    return snapshot.val();
}

export {
    writeChatGroupData,
    readChatGroupData
};
