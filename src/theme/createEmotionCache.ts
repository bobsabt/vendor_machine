import createCache from "@emotion/cache";

//prepend: ture moves MUI styles to the top of the <head> so they're loaded first.
//It allows developers to easily override MUI stlyes with other styling solutions, like Css modules.
export default function createEmotionCache() {
    return createCache({key: 'css', prepend: true})
}