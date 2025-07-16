export const makeTitle = (pageName?: string): string => {
    return pageName ? `${pageName} - Focustime` : 'Focustime - Get Smarter Together'
}

export const makeDescription = (description?: string): string => {
    return description ?? "We're building software to help educators and students get smarter together."
}
