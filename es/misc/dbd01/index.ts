function dictionary(input: string[]) {
    let dict: Record<string, string> = input.reduce((acc, word) => {
        if (acc[word] === undefined) {
            acc[word] = true

            for (let i = 0; i < word.length; i++) {
                const starWord = word.slice(0, i) + '*' + word.slice(i + 1)
                acc[starWord] = true
            }
        }

        return acc
    }, {})

    function isInDict(word: string): boolean {
        return !!dict[word]
    }

    function get() {
        return dict
    }

    return {
        isInDict,
        get,
    }
}

const input = ['foo', 'bar', 'foo']
const username = dictionary(input)
console.log(username.isInDict('foo'))
console.log(username.isInDict('far'))
console.log(username.isInDict('*ar'))
console.log(username.isInDict('fa*'))
console.log(username.isInDict('*a*'))
