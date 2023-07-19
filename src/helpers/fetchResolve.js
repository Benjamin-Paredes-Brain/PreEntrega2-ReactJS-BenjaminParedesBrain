import itemList from "../data/itemList.json"

export const fetchResolve = (loading) => {


    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(itemList)
        }, 300);
    })

}
