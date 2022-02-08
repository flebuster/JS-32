
const usersList = document.getElementById('users-list');

const displayItems = (items) => {
    const resultString = items.map(item => {
        return `
        <li class = "user">
        <h3>${item.name}</h3>
        <p>${item.age} year</p>
        </li>
        `;
    }).join(''); 
    usersList.innerHTML = resultString;
}
export {displayItems} ;
