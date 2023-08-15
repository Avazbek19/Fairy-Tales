import repository, { baseUrl } from "./repository";

class AudioTaleById {
    async getAdudioTaleById(id) {
        const endPoint = `/audio-fairy-tales/${id}/`
        const audioTaleById = await repository.get(baseUrl + endPoint)
            .then(ress => {
                return ress.data
            }) 
            .catch(err => {
                console.log(err);
            })
        return audioTaleById    
    }
}

export default new AudioTaleById()