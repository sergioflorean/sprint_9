import { getUserInfo, getInitialPosts } from "./fakeApi.js";

// async function getUserAndPosts() {
//     try {
//         const userInfo = await getUserInfo();
//         const posts = await getInitialPosts();
        
//         console.log("User Info:", userInfo);
//         console.log("Posts:", posts);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// getUserAndPosts();

// DESAFÍO: Cargar ambos recursos (usuario y posts)
//// PROMISE ALL
const initApp = async () => {
    try {
        console.time("Tiempo de carga")
        const [userInfo, posts] = await Promise.all([getUserInfo(), getInitialPosts()]);
        console.log("User Info:", userInfo);
        console.log("Posts:", posts);   
        console.timeEnd("Tiempo de carga")
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }

};

//initApp();


///PROMISE ALL SETTLED

const initAppSettled = async () => {
    try {
        console.time("Tiempo de carga")
        const results = await Promise.allSettled([getUserInfo(), getInitialPosts()]);
        
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Resultado ${index + 1}:`, result.value);
            } else {
                console.error(`Error en resultado ${index + 1}:`, result.reason);
            }
        });
        console.timeEnd("Tiempo de carga")
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
    
};

initAppSettled();
