export interface RouterLocation {
    pathname: string
    search: string
    key: string
    hash: string
}

export interface GooglePlace {
    geometry: {
        location: any
        viewport?: any
    }
    html_attributions?: Array<any>
    icon: string
    id: string
    name: string
    opening_hours?: {
        open_now?: boolean
    }
    photos: Array<any>
    place_id: string
    plus_code: {
        compound_code: string
        global_code: string
    }
    rating: any
    reference: string
    scope: string
    types: Array<string>
    vicinity: string
}