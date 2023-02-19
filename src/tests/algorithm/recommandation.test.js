import data from "../fixtures/testData"
import recommandation from "../../algorithm/recommandation";

test('should return 0(hold) if both trands (price and post) are in increasing direction', () => {
    const item = {
        price: 150,
        facebook: 150,
    }
    const updatedData = [item, ...data]

    const sugesstion = recommandation({ data: updatedData, item, index: 0 })
    expect(sugesstion).toBe(0)
})

test('should return 0(hold) if both trands (price and post) are in decrasing direction', () => {
    const item = {
        price: 50,
        facebook: 75,
    }

    const updatedData = [item, ...data]
    const sugesstion = recommandation({ data: updatedData, item, index: 0 })
    expect(sugesstion).toBe(0)
})


test('should return -1(sell) if price more than avg and post less htan avg ', () => {
    const item = {
        price: 200,
        facebook: 75,
    }

    const updatedData = [item, ...data]

    const sugesstion = recommandation({ data: updatedData, item, index: 0 })
    expect(sugesstion).toBe(-1)
})

test('should return 1(buy) if price less than avg and post more than avg ', () => {
    const item = {
        price: 200,
        facebook: 75,
    }

    const updatedData = [item, ...data]

    const sugesstion = recommandation({ data: updatedData, item, index: 0 })
    expect(sugesstion).toBe(-1)
})

test('should return 0(hold) if data not available past 10 days to first entry ', () => {
    const item = {
        price: 200,
        facebook: 75,
    }

    const updatedData = [item ]

    const sugesstion = recommandation({ data: updatedData, item, index: 0 })
    expect(sugesstion).toBe(0)
})