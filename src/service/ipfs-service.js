import { create as ipfsHttpClient } from "ipfs-http-client"
import axios from "axios"

// const ipfs = ipfsHttpClient({url: "http://127.0.0.1:5001/ipfs/api/v0/"})
const ipfs = ipfsHttpClient({
    host: "127.0.0.1",
    port: 5001,
    protocol: "http"
})

export const storeMeta = async(data) => {
    const json = JSON.stringify(data)
    alert(json)
    try {
        const added = await ipfs.add(json)
        alert(added.path)
    } catch (error) {
        alert(error)
    }
}