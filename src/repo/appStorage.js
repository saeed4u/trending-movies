/**
 * Created by brasaeed on 21/06/2019.
 */

export default {
    saveData: (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    },
    getData: (key) => {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (error) {
            console.log(error);
        }
        return null;
    }
}