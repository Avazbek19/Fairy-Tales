import repository, { baseUrl } from "./repository";

class News {
    async getNewsList() {
        const endPoint = '/infobaby/'
        const newsList = await repository.get(baseUrl + endPoint)
            .then(ress => {
                return ress.data.results
            })
            .catch(err => {
                console.log(err);
            })
        return newsList    
    }
}

export default new News()