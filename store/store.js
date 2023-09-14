export const state = () => ({
    STORE_LIST: null,
})
export const getters = {
    GET_STORE_LIST(state) {
        return state.STORE
    },
}
export const mutations = {
    SET_STORE_LIST(state, storeList) {
        state.STORE_LIST = storeList
    },
    ADD_STORE(state, store) {
        state.STORE_LIST.push(store)
    },
}
export const actions = {
    async getStoreList({ commit }) {
        try {
            const response = await this.$axios.get(
                'https://hypermarketmebel.ru/_TMP/api_test/slider.php'
            )
            const storeList = response?.data ?? []

            commit('SET_STORE_LIST', storeList ?? [])
        } catch (err) {
            console.log(err)
        }
    },
    async uploadStore({ commit }, form) {
        try {
            const { data, status } = await this.$axios.post(
                'https://hypermarketmebel.ru/_TMP/api_test/slider.php',
                'fake data'
            )
            if (status === 201) {
                const store = {
                    download_url: window.URL.createObjectURL(form.get('file')),
                    author: form.get('author'),
                }
                commit('ADD_STORE', store)
            }
        } catch (err) {
            console.log(err)
        }
    },
}