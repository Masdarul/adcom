// ambil element
const getUsername = document.querySelector("#usename");
const getPassword = document.querySelector("#password");
const getForm = document.querySelector("form");


// cek value
// alert(getUsername.value)

// buat user dan pass
const USERS = [
    {
        name: "rizqi@yahoo.com",
        password: "000",
    },
];
// console.log(USERS);

// event
getForm.addEventListener("submit",(event) =>{
    // agar saat user klik login tidak refresh
    event.preventDefault();

// alert(getUsername.value);
// alert(getPassword.value);

// lalukan perulangan untuk ambil data
    USERS.forEach((user) => {
        //percabangan
        if(getUsername.value == user.username && getPassword.value == user.password) {
            alert("oke berhasil login");
        } else {
            alert("Invalid Credentials");
        }
    });
});

