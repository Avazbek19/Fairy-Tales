import repository, { baseUrl } from "./repository";

class Cartoons {
    async getCategory() {
        const endPoint = '/catigories/'
        const category = await repository.get(baseUrl + endPoint)
            .then(ress => {
                return ress.data
            })
            .catch(err => {
                console.log(err)
            })
        return category    
    }

    async getCartoon(category) {
        const endPoint = `/cartoon/?category=${category}`
        const cartoon = await repository.get(baseUrl + endPoint)
            .then(ress => {
                return ress.data
            })
            .catch(err => {
                console.log(err);
            })
        return cartoon    
    }

    async getCartoonList() {
        const endPoint = '/cartoon/'
        const cartoons = await repository.get(baseUrl + endPoint)
            .then(ress => {
                return ress.data.results
            })
            .catch(err => {
                console.log(err);
            })
        return cartoons    
    }
}

export default new Cartoons()