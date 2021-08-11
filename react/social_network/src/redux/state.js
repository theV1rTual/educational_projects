
let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: "1"},
            {id: 2, message: "It's my way of ninja", likesCount: "23"},
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi, my friend"},
            {id: 2, message: "Go footbal mb?"},
            {id: 3, message: "Bye"}, 
        ],
        dialogs: [
            {id: 1, name: 'Arystan'},
            {id: 2, name: 'Diana'},
            {id: 3, name: 'Dias'},
            {id: 4, name: 'Aisulu'},
            {id: 5, name: 'Danel'},
            {id: 6, name: 'Abl'}
        ]
    },
    sidebar: {}
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
}

export default state;