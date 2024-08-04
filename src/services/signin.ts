import axios from "axios";

const signin = async(username: string, password: string) => {
    const response = await axios.post("http://localhost:12700/api/user/signin", {
        username: username,
        password: password,
        role: "Engineer"
    })
    return response

}

export { signin }