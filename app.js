const emailRef = document.querySelector(".email");

const statusRef = document.querySelector(".status");

const videoRef = document.querySelector(".video");

/*

fetch("https://jsonplaceholder.typicode.com/users/1").then(Response => {
   return Response.json()
}).then(data => {
    emailRef.innerHTML = data.email
});

*/

async function hello() {
    const one = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const two = await one.json()
    emailRef.innerHTML = two.email
};

hello();

function getSubStatus() {
    return new Promise((resolve, reject) => {
        resolve("VIP")
    }) 
};


/*

getSubStatus().then(Response => console.log(Response));

*/

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("play video")
        }
        else if (subscriptionStatus === "Free") {
            resolve("play trailer")
        }
        else {
            reject("no video") 
        }          
    })     
};

async function main() {
    const status = await getSubStatus()
    statusRef.innerHTML = status
    try {
        console.log(await getVideo(status))
        videoRef.innerHTML = await getVideo(status)
    }
    catch (e) {
        console.log(e)
        videoRef.innerHTML = e;
    }
};

main();




