export interface GetPackages {
    meta: Meta;
    data: Datum[];
    packages: DataPg[];
}

export interface Datum {
    id: number;
    name: string;
    price: number;
    currency: Currency;
    benefits: string;
    lands: number;
    json: string;
    image: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
}
export interface DataPg {
    id: number;
    name: string;
    price: number;
    lndas: number;
    megaproject_length: number;
    digital_assets: number;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    status_id: number;
    metadata: string;

}

export enum Currency {
    Busd = "busd",
    Usdt = "usdt",
}

export interface Meta {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    first_page: number;
    first_page_url: string;
    last_page_url: string;
    next_page_url: null;
    previous_page_url: null;
}


export interface SellPackage {
    client_id: number;
    plan_id: number;
    hash: string;
    bonus: string | null;
}