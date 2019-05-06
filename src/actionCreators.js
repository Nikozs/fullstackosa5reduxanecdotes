const actionFor = {
    addVote(id) {
        return {
            type: 'VOTE',
            data: { id }

        }
    }
}

export default actionFor