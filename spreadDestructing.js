let data = 
{
    id: 1,
    name: 'Leane Graham',
    username: 'Bret',
    email:"sincere@april.biz",
    address: 
    {
        street:'Kulas Light',
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-374"
    },
    phone:"1-770-736-8031 x56442",
    website:"hildegard.org"
}

let newData = 
{   
    ...data,
    ...{
        name:"vincent junior",
        email:"vincent_cars@yahoo.com",
        hobby: "Gaming"
    },

}

let {street, city} = data.address

console.log(newData);

console.log(`This is what you got ${street} and ${city}`)