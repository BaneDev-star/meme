export function fetchReducerFactory(slug, initialValue=null) {
    /*
        Just a factory for creating store items by a repeating pattern
        returns an initial state and reducer list
    */

    if (!slug) {
        throw new Error('\'Slug\' param is required');
    }

    return {
        // INITIAL STATE
        [slug]: {
            result: initialValue,
            requesting: false,
            error: null,
        },

        // REDUCER LIST
        [`${slug}Reducers`]: [
            // REQUEST
            (state) => ({
                ...state,
                [slug]: {
                    ...state[slug],
                    requesting: true,
                    error: null,
                },
            }),
            // SUCCESS
            (state, { payload }) => ({
                ...state,
                [slug]: {
                    ...state[slug],
                    requesting: false,
                    error: null,
                    result: payload.data,
                },
            }),
            // FAIL
            (state, { payload }) => ({
                ...state,
                [slug]: {
                    ...state[slug],
                    requesting: false,
                    error: payload.error,
                },
            }),
        ]}
}