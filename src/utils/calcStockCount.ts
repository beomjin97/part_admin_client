interface History {
    id: number;
    is_import: boolean;
    date: string;
    count: number;
    account : Object;
}

export default function calcStockCount (histories : History[]) {
    return histories.reduce((
        (prev, curr) => curr.is_import ? prev + curr.count : prev - curr.count),
        0
    )
}