const { atom } = require("recoil");

const todoListState = atom({
    key : "todoListData",
    default : []
})
export {todoListState};