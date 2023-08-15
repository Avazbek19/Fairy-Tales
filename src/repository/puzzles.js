import repository, { baseUrl } from "./repository";

class Puzzles {
    async getPuzzleList() {
        const endPoint = '/puzzle/'
        const puzzleList = await repository.get(baseUrl + endPoint)
            .then(ress => {
                return ress.data.results
            })
            .catch(err => {
                console.log(err);
            })
        return puzzleList    
    }
}

export default new Puzzles()