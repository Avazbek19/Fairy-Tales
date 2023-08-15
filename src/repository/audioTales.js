import repository, { baseUrl } from "./repository";

class AudioTales {
    async getAudioTales() {
        const endPoint = '/audio-fairy-tales/'
        const audioTales = await repository.get(baseUrl + endPoint)
            .then(ress => {
                return ress.data.results
            })
            .catch(err => {
                console.log(err);
            })  
        return audioTales    
    }
}

export default new AudioTales()