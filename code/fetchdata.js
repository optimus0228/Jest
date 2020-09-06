import axios from 'axios'

/* export const fetchdata = (fn) => {
    return axios.get('example.json').then((response) => {
        fn(response.data)
    }).catch(error => {
        console.log(error)
    })
} */

export const fetchdata2 = () => {
    return axios.get('example.json')
}

export const fetchdata3 = () => {
    return axios.get('example.json')
}

export const fetchdata4 = () => {
    return axios.get('list.json')
}


// import { fetchdata, fetchdata2, fetchdata3, fetchdata4 } from '../code/fetchdata.js'

/* describe('fetchdata jest test', () => {
    test('async fetch data', () => {
        fetchdata((data) => {
            try {
                expect(data).toEqual({
                    success: true
                })
                done()
            } catch (error) {
                done(error)
            }
        })
    }) */

/*     test('fetchdata2 jest test', () => {
        fetchdata2().then((response) => {
            expect(response.data).toEqual({
                success: true
            })
        })
    }) */

    /*     test('fetchdata3 jest test', () => {
            expect.assertions(1)
            return fetchdata3().catch((e) => {
                expect(e.toString().indexOf('404') > -1).toBe(true)
            })
        }) */

/*     test('fetchdata4 jest test', async () => {
        await expect(fetchdata4()).resolves.toMatchObject({
            data: {
                success: true
            }
        })
    }) */

/*     test('fetchdata4 jest test', async () => {
        const response = await fetchdata4()
        expect(response.data).toMatchObject({
            reason: "success"
        })
    }) 
})*/