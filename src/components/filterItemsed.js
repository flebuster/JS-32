import { displayItems } from "./displayItems";
const filteredItems = (e, itemsList) => {
    const searchstring = e.target.value.toLowerCase();

    const filteredUsers = itemsList.filter((user) => {
        return (user.name.toLowerCase().includes(searchstring) ||
    user.age.toLowerCase().includes(searchstring)
    )

    })
    displayItems(filteredUsers);
    
}

export {filteredItems};